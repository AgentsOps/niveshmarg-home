# Backtesting & Quantitative Optimization

Niveshmarg Edge includes a high-fidelity quantitative backtesting engine (`BacktestSimulator`) engineered to eliminate survivorship bias, eliminate look-ahead bias, and incorporate true institutional trading costs.

---

## 1. Backtest Runs List & Performance Summary

Navigate to **Strategies > Backtests** in Django Admin to review all historical simulations:

![Backtest Runs List](screenshots/09_backtest_runs_list.png)

The backtest list provides instant quantitative metrics for every simulated strategy run:
- **Equity**: an inline sparkline of the run's equity curve (green when it ended above where it started, red otherwise).
- **Net P&L**: Total realized profit or loss in INR (e.g., `+₹24,500.00`).
- **CAGR**: Compounded Annual Growth Rate (e.g., `24.5%`).
- **Sharpe Ratio**: Risk-adjusted excess return per unit of volatility (e.g., `1.82`).
- **Maximum Drawdown (MDD)**: Peak-to-trough equity decline (e.g., `-7.8%`).
- **Win Rate**: Percentage of profitable closed trades (e.g., `64.2%`).
- **Trade Count**: Total filled executions.
- **Actions**: Direct link to plot trade markers on the interactive chart.

Filters cover status, timeframe, strategy and instrument. Select two to six runs and choose **Compare selected runs** to open the compare page (below). **New backtest** in the list's action bar opens the guided creation page.

### New backtest (guided creation with a data preview)

**Strategies > Backtests > New backtest** (`/admin/strategies/backtestrun/new/`; the admin's **Add** button and the builder's **Backtest** button lead here, with `?strategy=`, `?canonical_id=` and `?timeframe=` prefilled where known) walks through strategy → instrument (suggestions from the active instruments) → timeframe (prefilled from the strategy's Market node) → period (presets 1M … 2Y or dates; empty dates mean the latest stored bars) → data source (auto, or a specific broker account) and initial capital (prefilled from the strategy's settings).

**Preview data** (also run automatically when the instrument, timeframe, period or source changes) calls `plan_history` and `resolve_history_source` without fetching anything and reports what **Run backtest** will do: "62 sessions stored, 189 to fetch from Fyers in 3 requests (251 sessions in the period)", the source's limits (days per request, lookback), the ranges to fetch, and the sessions the source cannot cover because they are older than its lookback (with the earliest start date that would work). Sources that cannot serve the timeframe or instrument are reported as errors before anything is queued. The run itself is created and queued exactly as before (`run_backtest_task`).

### Compare runs

`/admin/strategies/backtestrun/compare/?runs=1&runs=2` shows up to six runs side by side: a metrics table (net P&L, return, CAGR, max drawdown, Sharpe, Sortino, win rate, profit factor, trades, buy & hold) with the best value per row marked, and the equity curves overlaid as a percentage of each run's initial capital (Lightweight Charts). Runs can be added from a dropdown or removed per column; each column links to the run and to its chart.

### Strategy page: Runs tab

A strategy's admin page has a **Runs** tab listing its backtests (newest first, with the same sparkline, P&L, win rate and status), a **New backtest** button and **Run again on:** shortcuts for the instrument/timeframe pairs it has been tested on.

---

## 2. Institutional Execution Invariants

Most retail backtesting tools produce wildly optimistic results due to look-ahead bias, unrealistic fills, and missing transaction fees. Niveshmarg Edge enforces three mandatory execution invariants:

### Invariant 1: Zero Look-Ahead Bias
- Strategy DAG condition rules evaluate on the **close** of bar $T$.
- Order execution is simulated strictly at the **open** of bar $T+1$.
- No calculations have access to future candles or unclosed bars. SMC detectors (swings, order blocks, BOS/CHOCH, liquidity sweeps) are causal, enforced by `tests/unit/test_smc_causality.py`; FVG comes from a library that is already causal.
- Market regime labels are never invented and never taken from the future or from another stock (the instrument's own label, else the NIFTY 50 benchmark).
- **Exit on Condition** exits at the next bar's open. **Time Exit** moves the intraday square-off earlier, never later than `BACKTEST_SQUARE_OFF_TIME` (15:15 IST). No short entries on `EQUITY_DELIVERY`.

### Position Sizing
- `RISK_PERCENT` and `PERCENT_EQUITY`: risk that % of equity at the stop.
- `FIXED_CAPITAL`: commit `max_capital`.
- If one lot would exceed the risk budget, the trade is skipped (not forced to one lot).
- An ATR stop is never narrower than 0.5% of the entry price (`MIN_ATR_FRACTION` in `apps/strategies/engine.py`). On 5m or 15m bars the ATR is usually below that, so a 1.5x ATR stop is really a fixed 0.75% stop; the run log's second line reports how many entries were floored, and `metrics["atr_floor_entries"]` keeps the count.

### Invariant 2: Pessimistic Dual-Boundary Resolution
- In volatile markets, a single candle's high and low might cross both the Stop Loss (SL) and Take Profit (TP) levels.
- Rather than assuming an optimistic fill, Niveshmarg Edge enforces **pessimistic resolution**:
  $$\text{If both } SL \text{ and } TP \text{ boundaries are breached within candle } T, \text{ Stop Loss triggers first}.$$

### Invariant 3: Realistic Statutory Charges & Slippage
Every simulated fill accounts for statutory fees according to current Indian regulatory schedules:
- **Securities Transaction Tax (STT)**: 0.025% on intraday equity sale, 0.1% on delivery equity buy/sell, 0.02% on futures sale, 0.1% of premium on options sale.
- **Exchange Turnover Charges**: NSE/BSE transaction fees.
- **Goods and Services Tax (GST)**: 18% levied on brokerage plus exchange transaction charges.
- **SEBI Turnover Charges**: ₹10 per crore.
- **Stamp Duty**: State stamp duty charged on buyer turnover.
- **Configurable Slippage**: Basis-point slippage on market fills and stops (`BACKTEST_SLIPPAGE_BPS`, default 5); targets fill at their price.

---

## 2b. Historical Data Before Every Run

A run never starts on a guess about what the warehouse holds. Before the simulation, `apps.market_data.history` checks the requested period and the run moves through these statuses (shown live on the run page and in the list):

| Status | What happens |
| --- | --- |
| **Pending** | Queued to the Celery worker. |
| **Checking Historical Data** | Every session of the period (NSE trading days in IST, or every UTC day for crypto) is compared with the stored bars. Sessions with no bars, or intraday sessions that do not reach both ends or have holes inside, are listed. |
| **Fetching Missing Candles** | Only the missing session ranges are downloaded, chunked and paced to the source's limits (Fyers: 100 days of intraday or 366 days of daily per request; Delta: 2000 bars per request; Yahoo: 7/60/730 days for 1m/intraday/1h). The progress message names the range being fetched. |
| **Validating Data** | Fetched bars are normalised to the warehouse grid, rows with missing or impossible prices, negative volume, duplicates or off-grid stamps are dropped (counted in the data report), and the stored bars are checked against the calendar again. |
| **Running Backtest** | The simulation itself. |
| **Completed / Failed** | Results, or the reason (for example a source that cannot serve the timeframe or the period). |

- **Data source**: the run's **Broker account** field picks where missing candles come from. Blank means any connected broker that covers the instrument's venue (through the `BrokerProvider` abstraction; Delta's public candles need no account), else Yahoo Finance. A selected broker that does not cover the instrument, or whose token has expired, fails the run with that reason.
- **Nothing is downloaded twice**: stored sessions are skipped, and a range a source has already been asked for is remembered on `CandleCoverage.verified_ranges`, so illiquid minutes or exchange halts do not trigger a fresh download on every run. One job downloads per instrument and timeframe at a time (a second run waits, then re-checks).
- **Incomplete history never runs silently**: when sessions are still missing after the fetch, the run fails and names the missing ranges, unless **Allow partial history** is ticked, in which case the gaps are listed in the run's **Data report** and in its logs. The data report (sessions expected, bars stored, source, requests, bars fetched, rows dropped) stays on the run for reproducibility.
- **No date range**: the latest 500 bars are used, after the same check over the sessions that hold them.

---

## 3. Backtest Run Detail & Simulation Cockpit

Clicking any backtest run opens the **Backtest Detail View**: a status strip at the top (state, stage or error, period, and **Open on chart** once completed), period presets (1M … 2Y fill the dates), and five tabs: **Setup** (strategy, instrument with suggestions, timeframe, period, capital, data source), **Results** (status, progress, KPIs, equity curve), **Trades**, **Data** (the historical data report) and **Logs**. The action bar keeps **Open on Chart** and **Re-run** in front; the rest sit under **More**. Each run stores the exact strategy definition and version it ran; editing the strategy bumps its version and marks older runs **stale**, and editing a completed run's inputs re-runs it. Runs execute on the Celery worker and stay `PENDING` if no worker is running.

![Backtest Run Detail](screenshots/14_backtest_run_detail.png)

### Top Action Tools:
1. **Open on Chart (Plot Markers)**:
   Launches the full-screen chart workspace opened on the run's first day, showing only the studies the strategy uses (its own EMA/SMA periods, RSI, MACD, Bollinger), with every trade of the run drawn on the historical candles: entry and exit markers, the stop-loss and target levels across the bars the trade was open, and an entry-to-exit line coloured by outcome. Clicking a marker or a trade opens the full trade record (see the chart guide). Trades are persisted as `BacktestTrade` rows (Strategies > Backtest Trades); the chart reads those rows, not a recomputation.
2. **Run on Paper**:
   Promotes the backtested strategy parameters directly into an active **Paper Trading Runner** to validate real-time execution in paper mode.
3. **Re-run Simulation**:
   Queues the backtest again (background job) across updated candle history or with modified capital allocations.
4. **Walk-forward / Parameter Sweep**:
   Queues a rolling walk-forward (background job) to test parameter robustness and avoid curve-fitting.
5. **Portfolio Backtest (Several Instruments)**:
   Queues a run of this strategy across several instruments with shared capital (background job).

---

## 4. Walk-Forward Optimization (WFO)

Walk-Forward Optimization prevents overfitting by testing strategy parameters across rolling chronological windows (1–6 windows, default 3 in admin; in-sample share 30–90%, default 70%):

```
[--- In-Sample Train (6 Months) ---] [--- Out-of-Sample Test (2 Months) ---]
      [--- In-Sample Train (6 Months) ---] [--- Out-of-Sample Test (2 Months) ---]
            [--- In-Sample Train (6 Months) ---] [--- Out-of-Sample Test (2 Months) ---]
```

1. **In-Sample Optimization Window**:
   A grid of parameters (e.g., EMA periods, ATR multipliers, RSI thresholds; up to 50 combinations) is swept and ranked by Sharpe ratio, Net P&L, profit factor or total return %.
2. **Out-of-Sample Validation Window**:
   The best in-sample parameters are traded on the following unseen block. Each out-of-sample window **starts flat** (no position carried in); indicators warm up on earlier bars. Results are reported per window and combined.
3. **Walk-Forward Efficiency (WFE)**:
   $$\text{WFE} = \frac{\text{OOS return per bar}}{\text{IS return per bar}} \times 100\%$$
   Reported per window and overall; `n/a` when the in-sample return is ≤ 0. Around 50%+ suggests the edge carries over out of sample.

---

## 5. Portfolio Simulation & Correlation Analysis

The Portfolio Backtest runs **one strategy across several instruments with shared capital**:
- Open positions tie up margin; new entries are sized from free cash.
- Portfolio-level equity curve and metrics (Sharpe, maximum drawdown) across all instruments.

> **Not yet implemented (roadmap):** multi-strategy portfolios (e.g., NIFTY EMA Pullback + Crypto Trend Rider + SMC Breakout), capital allocation weighting, and pairwise correlation matrices.

---

## 6. Case Study: EMA Crossover on BTCUSD (November 2025 to November 2026)

The stored strategy *EMA 10/20 Crossover (5m)* (DELTA:BTCUSD-CRYPTO, 5m bars, 1.5x ATR stop, 2R target, both sides) was run over one year of 5m candles and then over three years of 1h and 4h candles to find out why it loses. The study scripts ran the production `BacktestSimulator` on warehouse candles with ₹1 crore of capital so that every signal could fill (see the first finding). The revised strategy is the starter template `ema_crossover_trend_4h`.

### What the losing trades had in common

| Finding | Evidence (5m, one year, 902 filled trades) |
|---|---|
| **Whipsaw.** The cross reverses before the trade resolves. | 516 of 623 losers (83%) saw the opposite EMA cross before their stop was hit. Trades closed within 12 bars won 14% of the time and lost ₹65 lakh of the ₹83 lakh total loss. Exiting at the opposite cross instead of the stop was worse still (20% win rate): the 10/20 cross on 5m bars is noise. |
| **Fees and slippage outweigh the edge.** | Raw price P&L before friction was +₹2.9 lakh. Slippage (5 bps per market fill) cost ₹36 lakh and exchange charges ₹50 lakh. Per trade: about ₹300 of raw edge against ₹9,600 of friction. Around 1,000 trades a year cannot carry that. |
| **The ATR stop was not an ATR stop.** | The 5m ATR is 0.14% of price (median); the engine floors ATR stops at 0.5% of the entry price, so the "1.5x ATR" stop was a fixed 0.75% stop on 99% of entries (90% on 15m). A true 1.5x ATR stop on 5m (0.2%) is narrower than the round-trip cost and lost 99%. The run log now reports the floor (section 2). |
| **Capital artefact.** | With the run's ₹1 lakh capital, 4,227 of 4,437 signals were skipped because one unit of BTC exceeded the cash. The 210 trades that did fill were the ones taken while BTC traded below about ₹95,000: a biased sample, not the strategy. Delta trades BTCUSD in 0.001 BTC contracts; the engine sizes in whole units, so a backtest unit is 1,000 live contracts (open item in the roadmap). |
| **No simple filter rescued it.** | Time of day, weekday, ATR level, EMA spread at the cross, slope of the slow EMA, distance from the 200 and 600 EMA, ADX, RSI, Kaufman efficiency ratio and volume rank were all binned by quintile: no bin had a positive expectancy after costs. Confirmation (cross held 3 bars), break-even at 1R, trailing stops, a 1R target, a risk guard, a 12:30 to 21:30 IST window, limit entries and a 1h or 4h trend filter all stayed negative on 5m and 15m bars (-25% to -92% for the year). |

### What changed

Lower the trade count by two orders of magnitude and let winners run: the same cross on **4h bars**, taken only when **ADX(14) > 20** (the chop pattern above), a **3x ATR(14) stop** (about 3.5% on 4h bars, well above the engine floor), and **no target**: the position closes when the EMAs cross back. Results with ₹1 crore of capital, 5 bps slippage and crypto charges:

| Period | Strategy | Trades | Win rate | Profit factor | Return | Max drawdown | BTC buy and hold |
|---|---|---|---|---|---|---|---|
| Nov 2025 to Nov 2026 | 5m 10/20 as stored | 902 | 31% | 0.69 | -83% | 85% | -25% |
| Nov 2025 to Nov 2026 | 4h 20/50, ADX > 20, 3x ATR, exit on cross | 17 | 41% | 2.11 | +9.5% | 3.9% | -25% |
| Nov 2023 to Nov 2026 | 1h 10/20 as stored | 724 | 34% | 0.83 | -59% | 63% | +77% |
| Nov 2023 to Nov 2026 | 4h 20/50, ADX > 20, 3x ATR, exit on cross | 45 | 47% | 2.03 | +21% | 9.4% | +77% |

By year the 4h version made +₹7.8 lakh in 2024, -₹1.5 lakh in 2025 and +₹14.4 lakh in 2026. Every neighbour in a 13-point grid (ADX 15/20/25, stop 2.5x to 4x ATR, EMA pairs 15/45 to 30/70) was also positive over the three years (profit factor 1.2 to 3.1), so the result is not a single lucky setting. A long-only variant did better in absolute terms (+70% over three years) because BTC rose; it is a bull-market bet rather than a crossover strategy.

### Caveats

- 45 trades in three years is a small sample, and the configuration was chosen after testing about fifty variants on the same data: expect less live. Paper trade it before any live runner.
- The strategy under-performed buy and hold over the three years; its merit is a drawdown of under 10% and a profit in the year BTC fell 25%.
- Backtest units are whole BTC. Until the engine knows contract sizes, divide the quantities by 1,000 to read them as Delta contracts, and expect the ₹ figures to scale accordingly.
