# 15. Validated Strategies: Research, Backtests and Findings

This chapter records the November 2026 strategy study: what was researched, what was built into the
platform, how both strategies were tested, and what the evidence says. Every number here comes from
`python manage.py run_strategy_study swing|intraday` (reports in `data/studies/`), on the real
engine (`PortfolioSimulator` -> `BacktestSimulator`), after all charges and slippage.

**Bottom line.**

- **Swing: RS Momentum Trend Swing (v6)** has a positive, statistically clear edge per trade in
  both the development period (2012–2019) and the untouched hold-out (2020–2026), and it stayed positive in a 10-fold walk-forward (7 of 10 out-of-sample years profitable, profit factor 1.56).
  Its returns are close to a Nifty 50 buy-and-hold over the same years, with a smaller drawdown
  than the index in the 2020 crash but a larger one than in development. It is ready for **paper
  trading**, not for live money.
- **Intraday: Opening Range Retest (v4)** **failed**. On the hourly NSE data available it loses after
  costs in development, in the hold-out and in every walk-forward fold, and still loses with zero
  slippage. It is kept in the platform as a research template, labelled as such, and must not be
  traded.

## 1. Audit of the existing platform

What was already sound (reused, not rebuilt):

- **Engine causality.** A signal on bar T fills at bar T+1's open; the stop wins when one bar touches
  both stop and target; a gap through a level fills at the open; trailing and break-even moves apply
  only after the bar that produced them. SMC detectors are causal and covered by
  `test_smc_causality.py`. Indicators are prefix-tested in `test_quant.py`.
- **Charges.** Every fill pays STT, exchange, SEBI, stamp duty, IPFT, brokerage and GST from a dated
  rate table (`apps/trading/costs.py`). Equity STT is unchanged by Budget 2026 (delivery 0.1% each
  side, intraday 0.025% on the sell).
- **Research tools.** Parameter sweeps and walk-forward for one instrument (`research.py`), portfolio
  runs with shared capital (`portfolio_engine.py`), split/dividend-adjusted candles from the warehouse.

Problems found:

| Area | Finding | Action |
|---|---|---|
| Costs | Delivery brokerage modelled as ₹0 and no DP charge. FYERS charges ₹20 or 0.3% per order and ₹12.50 + GST per scrip sold; on a ₹20k position that is ~0.3% per round trip. | `dp_charge_per_sell` field (migration `trading.0011`), charged with GST on delivery sells; defaults updated to FYERS; the live `EQUITY_DELIVERY` row was updated to the same values on 14 Nov 2026 with the owner's approval, so admin backtests now match the study. |
| Costs | Futures STT rose from 0.02% to 0.05% from 1 Apr 2026; the FUTURES defaults still say 0.02%. | Not changed (no equity strategy uses it); listed in §8. |
| Benchmarks | A strategy could not read another instrument, so no relative strength vs the Nifty and no index regime filter. `condition.regime` reads stored AI labels, and only 3 exist (all from Nov 2026), so it cannot gate any historical backtest. | New `market.benchmark` node. |
| Intraday volume | `indicator.relative_volume` compares a bar with the previous N bars, so on intraday bars every opening bar looks unusual (the U-shaped volume profile). | New time-of-day RVOL in `apps/quant/custom.py`. |
| Opening range | `smc.session` gives a running high/low *inside* a window and NaN after it, so no opening-range level exists once the range is over. | New `indicator.opening_range` node. |
| Portfolio | When more instruments signal than slots are free, the basket order decides who gets in; there is no basket-wide daily loss limit or entry cap (the `risk.guard` limits are per instrument). | `rank_by`, `max_daily_loss_pct`, `max_entries_per_day`, `trade_from_ts` on `PortfolioSimulator`; "Rank signals by" on the admin portfolio page. |
| Metrics | No expectancy in R, streaks, holding period or monthly returns. | Added to every backtest's metrics; trades now record `initial_stop`. |
| Starters | 19 starters had 3 recorded backtest runs between them. 16 run on intraday bars and none of those has a risk guard; 15 have no entry time window (some are 24x7 crypto); 15 starters have no sizing node (engine default 1% risk); 8 trade a spot index (charged as futures); 6 enter on a state (above VWAP, above SuperTrend…) and so re-enter on the bar after every exit. `nifty_vwap_supertrend` can never trade its default symbol: the Nifty 50 spot index reports zero volume, so its VWAP is undefined. | Reported; existing starters left unchanged (their golden results are unchanged too). |
| Calendar | `apps/market_data/nse_holidays.json` lists holidays for 2025–2026 only, so for earlier years every exchange holiday counts as a missing session and the strict data check fails the run (69 "missing" sessions for one stock over 2020–2026). | Study uses the platform reader directly; in the admin, tick *Allow partial history* for pre-2025 periods. Listed in §8. |
| Data | Warehouse had ~60 daily series, mostly screener picks from the last 2.5 years (selection-biased), no Nifty daily, no intraday equity bars. The FYERS token is **expired** (needs an interactive login), so history came from Yahoo Finance: daily from 2010, hourly for ~2 years, 15m/5m for 60 days. Yahoo reports **zero volume for the 09:15 bar** on 88% of hourly and 97% of 5-minute sessions. | Data fetched through the platform's own `ensure_history` (validated, recorded in coverage). Zero volume is treated as missing data. |

## 2. Research summary

Methods considered, with the evidence weighed for Indian equities:

| Method | Evidence | Verdict |
|---|---|---|
| Cross-sectional / 52-week-high momentum | Maheshwari & Dhankar (2017) find momentum profits in India not explained by size, value or liquidity; NSE studies 2004–2023 find a stable 52-week-high effect (George & Hwang 2004 for the original); NSE runs momentum indices on it. | **Selected (swing)**: strongest local evidence. |
| Time-series trend / 200-day filter | Faber (2007); Moskowitz, Ooi & Pedersen (2012); Hurst, Ooi & Pedersen. Critics (Zakamulin) show data-mining bias in the headline numbers. | Used as the regime filter, not as the edge. |
| Breakout (20-day high + volume) | Practitioner literature; little out-of-sample evidence. | Tested as the swing baseline; **rejected** (no edge). |
| Pullback / short-term reversal (RSI(2/3)) | Connors & Alvarez (2008) backtests are in-sample, cost-free, US ETFs. | Tested; RSI(3)<20 lost, RSI(3)<10 was small and capital-idle. **Rejected.** |
| Opening range breakout, stocks in play | Zarattini, Barbon & Aziz (2024): 5-minute ORB on high-relative-volume US stocks, strong after costs; no independent replication found, no rigorous NSE study found. | **Selected (intraday)**, adapted to the data available. |
| Market intraday momentum | Gao, Han, Li & Zhou (2018, JFE): first half-hour return predicts the last half-hour (R² ~1.6%); replications report smaller effects. | Tested as the intraday alternative; **rejected** (move smaller than Indian intraday friction). |
| Market-volatility filter | Momentum is weak after high market volatility (Wang & Xu 2015; Daniel & Moskowitz 2016). | Tested twice as a filter; **did not help** (see §4). Recommended as position sizing instead (§8). |
| VWAP, SuperTrend, SMC order blocks/FVG | Mostly vendor and community material; the platform's SMC detectors are causal but no credible performance evidence was found. | Not used as the edge. VWAP is unusable on Yahoo hourly data (no 09:15 volume). |

Rejected without testing: anything whose only support was attractive historical returns on
TradingView or vendor pages.

## 3. Method

- **Universe (swing):** 95 large caps (Nifty 100-style) plus names that later left the index or
  collapsed (YESBANK, ZEEL, IDEA, BHEL, RPOWER, RELINFRA, SUZLON, JPASSOCIAT, ADANIPOWER), daily
  bars 2010–2026; 92 had enough history. **Survivorship bias remains**: today's constituents are
  back-filled to 2010, which flatters any long-only strategy. That is why both strategies are
  compared with an equal-weight buy-and-hold of the *same* universe, which carries the same bias.
- **Universe (intraday):** 50 of the most liquid Nifty 50 stocks, hourly bars Nov 2024 – Nov 2026.
- **Periods.** Swing: development 2012–2019 (sideways 2012–13, bull 2014, correction 2015–16,
  bull 2017, mid-cap crash 2018); hold-out 2020-01-01 to 2026-11-13 (COVID crash, 2021 bull, 2022
  range, 2023–24 bull, 2024–25 correction). Intraday: development 2024-12-20 to 2025-12-31,
  hold-out 2026.
- **Rules.** Versions are compared on development data only. The final version was frozen before it
  was run on the hold-out, and the hold-out was run once. Walk-forward then re-selects among four
  neighbouring parameter sets on each rolling in-sample block and trades the winner unchanged on the
  next block.
- **Execution.** Signals at a bar's close, fills at the next open (or a resting limit); 5 bps
  slippage on every market fill; stops fill at market, targets at their price; intraday positions
  flat by 15:15 IST; no shorting in delivery. Swing basket: ₹5,00,000, 8 positions, 1% risk per
  trade. Intraday basket: ₹5,00,000, 5 positions, 0.5% risk, ≤20% of equity per position, 2%
  basket daily loss limit, one trade per stock per day. No leverage (intraday MIS leverage is not
  used).
- **Charges.** `costs.DEFAULT_RATES` (statutory + FYERS brokerage ₹20/0.3% delivery, ₹20/0.03%
  intraday, DP ₹12.50 + GST per delivery sell). The study fixes them so editing the admin rate table
  cannot change a study's result.
- **Statistics.** Expectancy in R (net P&L over the risk at entry), its t-statistic and a seeded
  bootstrap 95% interval; profit factor; Sharpe/Sortino on daily equity.

## 4. Swing strategy: RS Momentum Trend Swing

### 4.1 Version history (development period 2012–2019)

| Version | Change | Trades | PF | CAGR | Max DD | Sharpe | Mean R (t) | Decision |
|---|---|---|---|---|---|---|---|---|
| v1 breakout baseline | 20-day-high breakout on 1.5x volume, close > SMA50 > SMA200, RS rank > 80, Nifty > SMA200; stop 2x ATR, trail 3x ATR after 1R, SMA50 exit, 60 sessions | 483 | 1.14 | 3.9% | 29.4% | 0.35 | 0.00 (0.02) | Rejected: no edge |
| v2 volatility filter | v1 + no entries while Nifty 20-day volatility > its 1-year average | 391 | 1.08 | 1.8% | 30.4% | 0.21 | −0.08 (−0.75) | Rejected: worse |
| v3 momentum core | Breakout + volume replaced by 12-month return > 0, slots to the highest 12-month returns; 120 sessions | 634 | 1.30 | 10.8% | 32.3% | 0.75 | 0.19 (2.79) | Kept |
| v4 no SMA50 exit | v3 without the close-below-SMA50 exit | 473 | 1.38 | 13.0% | 24.4% | 0.86 | 0.29 (3.14) | Kept |
| v5 3x ATR stop | v4 with the initial stop at 3x ATR | 323 | 1.59 | 11.6% | 16.3% | 0.94 | 0.32 (3.52) | Kept |
| **v6 final** | No rule change from v5 (v4 already trailed at 3x ATR); plateau check placed stop 3 / trail 3 at the centre | 323 | **1.59** | **11.6%** | **16.3%** | **0.94** | **0.32 (3.52)** | Final |

Other families tested on the same development data, same risk framework: 6-month momentum PF
1.53 / Sharpe 0.86, 9-month PF 1.46 / 0.84 (both with the v6 exits); RSI(3) < 20 pullback PF 0.93,
RSI(3) < 10 pullback PF 1.38 but CAGR 2.3% (capital mostly idle).

Losing-trade analysis that drove the changes (development):

- **v1 breakout baseline:** 38% of losers were failed breakouts (stopped out without reaching
  +0.5R, ₹6.1L); trades entered when Nifty volatility was above its one-year median had PF 0.77 and
  −0.19R versus PF 1.50 and +0.15R in calm markets; the 60-session time exit closed only winners
  (35 trades, +3.6R each); the close-below-SMA50 exit closed losers (PF 0.17). Charges were 39% of
  gross profit.
- **v2 volatility filter:** turning the volatility split into an entry filter made results worse
  (PF 1.14 → 1.08): with eight slots, removing trades mostly changed *which* trades got capital. An
  in-sample split is not a rule until it survives being one.
- **v3 momentum core:** the signal family mattered more than any filter. Of five families tested
  (breakout, 6-, 9- and 12-month momentum, two pullback rules), 12-month momentum ranked by its own
  return was best (t 2.79), the only one that clears a rough correction for five tries.
- **v4/v5 exits:** in v3 the SMA50 exit closed 250 trades at PF 0.41. Removing it, and widening the
  initial stop to 3x ATR (failed and stopped-then-recovered trades were the largest loss groups),
  lifted PF to 1.59 and cut drawdown from 32% to 16%.
- **v6 robustness:** every cell of the stop {2.5, 3, 3.5} x trail {2.5, 3, 4} grid was profitable
  in development (PF 1.38–1.75, Sharpe 0.77–1.19). The final uses the centre (3/3), not the best
  cell (2.5/4: PF 1.71, Sharpe 1.19). 6-month and 9-month momentum and 5 or 10 positions were also
  profitable.

### 4.2 Final results

| v6 | Trades | Win % | PF | CAGR | Max DD | Sharpe | Sortino | Mean R (t; 95% interval) | Avg hold | Charges / gross |
|---|---|---|---|---|---|---|---|---|---|---|
| Development 2012–2019 | 323 | 54.8 | 1.59 | 11.6% | 16.3% | 0.94 | 1.35 | 0.32 (3.52) | 57.6 days | ₹90.2k / ₹7.93L (11.4%) |
| **Hold-out 2020–2026** | 271 | 54.6 | **1.49** | **10.3%** | **28.8%** | 0.78 | 1.09 | **0.33 (3.31; 0.15 to 0.52)** | 50.8 days | ₹73.3k / ₹5.54L (13.2%) |
| Walk-forward OOS 2016–2026 (10 folds) | 467 | 47.5 | 1.56 | +162.9% compounded (~9.3% a year) | worst fold 19.4% | – | – | 0.29 (3.48; 0.13 to 0.45) | – | – |
| 10 bps slippage: development / hold-out | 325 / 276 | – | 1.53 / 1.53 | 10.7% / 11.0% | 17.0% / 28.3% | 0.87 / 0.83 | – | 0.29 / 0.33 | – | – |
| v1 baseline on the hold-out (reference) | 377 | 37.7 | 1.52 | 10.5% | 24.3% | 0.81 | 1.14 | 0.22 (2.12) | 32.4 days | – |

Average win ₹9,880 vs average loss ₹7,983 (hold-out); longest losing streak 12 trades; ₹5,00,000
capital, 8 slots.

**Benchmarks over the same windows** (buy and hold, no costs):

| | Development 2012–2019 | Hold-out 2020–2026 |
|---|---|---|
| v6 total return | +140.5% | +96.1% |
| Nifty 50 index | +160.2% | +106.1% |
| Equal-weight hold of the same 92 stocks (same survivorship bias) | +434.2% | +300.6% |

The strategy did **not** beat buy-and-hold on return in either period. What it offers is lower
exposure in bear phases (no new positions while the Nifty is below its 200-day SMA; flat April–
October 2026) and a 16–29% drawdown against the Nifty's ~38% in March 2020. The equal-weight
figure shows how much survivorship flatters this universe; the strategy's own figures carry the
same bias.

**Walk-forward folds** (4 years in-sample, the next year out-of-sample; chosen among stop
{2.5, 3} x trail {3, 4}):

| Out-of-sample | Chosen | Trades | PF | Return | Max DD |
|---|---|---|---|---|---|
| 2016 | 2.5 / 4 | 38 | 1.14 | +3.4% | 18.7% |
| 2017 | 2.5 / 4 | 46 | 3.33 | +31.5% | 9.1% |
| 2018 | 3 / 4 | 55 | 0.68 | −9.3% | 16.9% |
| 2019 | 3 / 3 | 53 | 0.89 | −2.7% | 13.0% |
| 2020 | 3 / 3 | 34 | 2.75 | +17.7% | 7.5% |
| 2021 | 3 / 3 | 50 | 2.35 | +27.2% | 11.2% |
| 2022 | 3 / 3 | 50 | 1.05 | +0.9% | 12.9% |
| 2023 | 3 / 4 | 35 | 5.15 | +49.3% | 6.7% |
| 2024 | 3 / 4 | 54 | 1.35 | +10.0% | 19.4% |
| 2025 – Nov 2026 | 3 / 4 | 52 | 0.54 | −11.6% | 13.2% |

Hold-out calendar years: 2020 +17.8%, 2021 +24.3%, 2022 +5.9%, 2023 +32.1%, 2024 +2.8%,
2025 −2.8%, 2026 (to 13 Nov) −4.3%. Worst months: Oct 2024 −13.1%, Mar 2026 −7.4%, Oct 2023 −5.7%.
Full monthly series: `data/studies/swing_study.json` (`holdout.v6_final.monthly_returns_pct`).

### 4.3 Trading logic (v6)

Timeframe: daily candles, decisions at the close, orders at the next session's open. Universe: liquid
NSE large caps (cash delivery, long only).

1. **Market regime:** the Nifty 50 close is above its 200-day SMA. No new positions otherwise;
   open positions keep their exits.
2. **Stock trend:** close > 50-day SMA, and 50-day SMA > 200-day SMA.
3. **Relative strength:** the stock's close divided by the Nifty's close is in the top 20% of its own
   last 252 sessions (percentile rank > 80).
4. **Momentum:** the 250-session return is positive.
5. **Entry:** when all four hold and a slot is free, buy at the next open. When more stocks qualify
   than slots are free, the highest 250-session returns get them (`rank_by = roc.value`). At most 8
   positions; a stock is held once.
6. **Initial stop:** entry minus 3 x ATR(14) at the signal bar. A trade is skipped if that stop is
   more than 12% below entry.
7. **Size:** quantity = (1% of equity) / (entry − stop), rounded down, capped by free cash (95% of it)
   and ₹1 crore per trade. Never increased after losses; no averaging down; no pyramiding.
8. **Trailing stop:** once the close is 1R above entry, the stop trails 3 x ATR(14) below each close,
   only upward. Checked against each bar's low; a gap below fills at the open.
9. **Target:** 10R (rarely reached; it caps runaway winners).
10. **Time exit:** after 120 sessions, sell at the next open.
11. **Emergency exits:** the stop is always live; the platform's runner keeps its own daily loss
    halt and kill switch on top.

### 4.4 Where it works and where it does not

Final version, all trades by the market regime of the session before entry:

| | Development trades / PF / mean R | Hold-out trades / PF / mean R |
|---|---|---|
| Nifty bull (above a rising 200-day SMA) | 268 / 1.47 / 0.26 | 218 / 1.42 / 0.29 |
| Nifty sideways | 55 / 2.43 / 0.57 | 53 / 2.03 / 0.46 |
| Nifty bear | 0 (filtered) | 0 (filtered) |
| Nifty volatility high (20-day > 1-year median) | 147 / 1.23 / 0.20 | 126 / 1.09 / 0.07 |
| Nifty volatility low | 176 / 1.97 / 0.42 | 145 / 2.05 / 0.55 |

Losing trades of the final version (hold-out, 123 losers): 52% were failed entries stopped out
without reaching +0.5R (₹5.9L), 13% gave back a +1R gain, 6.5% were stopped and then recovered,
under 1% were turned into losses by charges. The median loser reached only +0.4R first.

- **Works:** steady bull and sideways-up markets with low index volatility (2014, 2017, 2020 H2,
  2021, 2023).
- **Struggles:** sharp, volatile rotations and narrow markets: 2018 (mid-cap crash), 2019 (few
  large caps led), Oct 2024 – Feb 2025 (correction from the highs), and choppy 2025–26. Entries in
  high-volatility markets earned little in both periods.
- **Avoid / expect:** long flat periods when the Nifty is below its 200-day SMA, and drawdowns near
  30% even with the filter.

## 5. Intraday strategy: Opening Range Retest (research only)

### 5.1 Version history (development period 2024-12-20 to 2025-12-31)

| Version | Change | Trades | PF | Return | Max DD | Mean R | Gross P&L | Charges |
|---|---|---|---|---|---|---|---|---|
| v1 ORB baseline | 60-min range, first close beyond it in the range's direction 10:15–12:30, breakout-bar RVOL > 1, Nifty on the same side of its 20-bar EMA; stop 0.5x daily ATR; flat 15:15 | 1141 | 0.62 | −27.8% | 30.9% | −0.15 | −₹52.0k | ₹87.0k |
| alt first-hour momentum | Trade 14:15–15:15 in the direction of the first-hour return (Gao et al.) | 1262 | 0.30 | −39.2% | 39.7% | −0.21 | −₹104.3k | ₹91.6k |
| v2 limit retest | Limit order 0.3% back toward the level, two bars | 689 | 0.70 | −13.0% | 15.7% | −0.11 | −₹10.8k | ₹54.3k |
| v3 daily trend | + last daily close on the trade's side of its 20-day SMA | 502 | 0.71 | −9.5% | 12.9% | −0.11 | −₹7.4k | ₹40.0k |
| **v4 final** | + breakout-bar RVOL ≥ 1.5 | 330 | **0.78** | −4.5% | 8.1% | −0.08 (95%: −0.15 to −0.01) | +₹3.9k | ₹26.5k |

What failed and why:

- **Entries came too late.** An hourly bar *closes* beyond the range up to an hour after the break;
  the median losing trade never got going. Stop-outs (−1.13R each) outweighed the trades held to the
  close, which were profitable on their own (hold-out PF 2.12).
- **The raw edge is smaller than Indian intraday friction.** Before slippage, v1's signal made about
  +0.05% per trade and the first-hour momentum signal about +0.02%; a round trip costs about 0.08%
  in charges plus about 0.10% in slippage. v4 has positive gross P&L, but charges are 6.7 times it.
- **Bearish 2026.** In the hold-out, 72% of trades were in a falling Nifty (below a falling 200-day
  SMA); both long and short sides lost.

### 5.2 Final results

| v4 | Trades | PF | Return | Max DD | Sharpe | Mean R (t) |
|---|---|---|---|---|---|---|
| Development (2025) | 330 | 0.78 | −4.5% | 8.1% | −1.59 | −0.08 (−2.31) |
| Hold-out (2026) | 324 | 0.72 | −7.3% | 8.5% | −2.02 | −0.11 |
| Walk-forward, 6 quarterly folds (Sep 2025 – Nov 2026) | 408 | 0.65 | −10.6% compounded | – | – | −0.12 (−3.65), 0 of 6 folds positive |
| Zero slippage: development / hold-out | 330 / 324 | 0.92 / 0.82 | −1.5% / −4.4% | – | – | −0.03 / −0.07 |
| 10 bps slippage: development / hold-out | 330 / 324 | 0.66 / 0.62 | −7.5% / −10.1% | – | – | −0.13 / −0.16 |
| Nifty 50 buy & hold | – | – | +9.0% (2025) / −3.9% (2026) | – | – | – |

### 5.3 Trading logic (v4, for paper research only)

1. Opening range: high and low of the first hour (09:15–10:15 IST), known once that bar closes.
2. Long setup: the range closed above its open, the first hourly close above the range high, that
   bar's volume at least 1.5x the median of the same hour over the last 14 sessions, the stock's last
   daily close above its 20-day SMA, and the Nifty 50 above its 20-bar (hourly) EMA. Short setup:
   the mirror image below the range low.
3. Signals only on bars starting 10:15–12:30. A limit order 0.3% back toward the level (below the
   signal close for longs, above for shorts), good for two bars.
4. Stop 0.5 x ATR(14) of the previous daily bars (at least 0.5% of price); trades with a stop wider
   than 3% are skipped. Size: 0.5% of equity at risk, at most 20% of equity per position.
5. Exit at the stop, at 10R (rarely), or at the 15:15 bar's open. One trade per stock per day, at
   most 5 positions, no new entries after a 2% realized loss on the day.

## 6. Implementation summary

New files:

- `apps/strategies/validation.py`: windowed basket runs, fixed cost profile, basket walk-forward,
  trade annotation (regime, MFE/MAE, recovery after stop), loss patterns, bootstrap R statistics.
- `apps/strategies/management/commands/run_strategy_study.py`: re-runs a study from its manifest.
- `apps/strategies/studies/{swing,intraday}/`: `manifest.json` (universe, periods, basket, every
  version with its change, reason and decision, walk-forward folds) and one strategy JSON per version.
- `apps/strategies/starters/swing_rs_momentum.json`, `intraday_orb_retest.json`: the two finals as
  builder templates.
- `apps/trading/migrations/0011_statutorychargerate_dp_charge.py`: the DP charge field.
- `tests/unit/test_validated_strategies.py`: 26 tests (causality on every prefix, gaps, fail-closed
  benchmark, ranked admission, daily limits, DP charges, statistics, starters, admin form).

Changed files:

- `apps/quant/custom.py`: `opening_range`, `time_of_day_relative_volume` (median baselines, zero volume
  as missing). `apps/quant/resample.py`: `align_asof`.
- `apps/strategies/nodes/indicators.py`: `indicator.opening_range`. `nodes/market.py`:
  `market.benchmark` (kind `indicator`, so it never becomes the strategy's market node).
- `apps/strategies/engine.py`: `reference_frames` and `reference_candles()` (warehouse read, cached per
  run); trades record `initial_stop`.
- `apps/strategies/portfolio_engine.py`: `rank_by`, `trade_from_ts`, `max_daily_loss_pct`,
  `max_entries_per_day`, shared benchmark cache; summary adds expectancy, holding days, loss streak,
  charges. Without the new options results are identical to before (tested).
- `apps/strategies/metrics.py`: `trade_statistics`, `monthly_returns`, added to every run's metrics.
- `apps/trading/costs.py`, `models.py`, `admin.py`: DP charge, FYERS delivery brokerage defaults,
  admin columns.
- `apps/strategies/admin.py`, `tasks.py`, `templates/admin/strategies/portfolio.html`: "Rank signals
  by" on the portfolio backtest page, plus profit factor, expectancy and charges in its summary.
- `apps/strategies/starters/__init__.py`: the two starters; `tests/fixtures/backtest_golden/*`:
  regenerated. Every existing starter reproduces its previous trades and metrics exactly; only the new
  keys were added.
- `docs/02_visual_strategy_builder.md`: regenerated (208 nodes).

No new model, app or dependency. Database change: one added column with default 0.

Reproduce:

```bash
python manage.py run_strategy_study swing --fetch
python manage.py run_strategy_study intraday --fetch
```

## 7. Using them in the platform

- Both appear as starter templates after `python manage.py sync_starter_templates`. Open one in the
  builder, create a backtest, then use **Portfolio** on the run page with the study's instruments
  (up to 20) and *Rank signals by* `roc.value` (swing) or `orng.bar_rvol` (intraday).
- **Warm-up.** A dated backtest (single or portfolio) also reads up to 300 stored bars before its start
  date so 200-day averages, 12-month returns and one-year ranks exist on day one. No trade is taken on
  those bars and every figure (trades, equity, CAGR, buy-and-hold) covers the chosen period only; the
  run log says how many warm-up bars were used. Warm-up never fetches: it uses what the warehouse holds.
- **Expect empty periods.** The swing strategy buys only while the Nifty is above its 200-day SMA, which
  in 2026 held on 42 of 212 sessions to 12 Nov (early in the year, and again from 5 Nov); a short recent backtest can
  correctly show no trades.
- The admin portfolio page has no basket daily-loss or entry-cap fields; the study set those through
  `PortfolioSimulator`. A single-instrument backtest of the swing strategy cannot reproduce the
  portfolio result (ranking needs a basket).
- Neither strategy is enabled for live trading. A paper runner must be created by hand.
- Live/paper needs the benchmark's bars in the warehouse at the strategy's timeframe (Nifty 50 daily
  for swing, hourly for intraday); without them the regime and RS conditions fail closed and nothing
  trades.

## 8. Limitations, risks and recommendations

**Data.** Survivorship bias (current large caps back-filled to 2010) inflates long-only results;
no historical index membership is stored. Yahoo daily bars miss a few sessions a year. Intraday
results rest on two years of hourly bars with no 09:15 volume: a 5-minute ORB with stop entries
(the published form) could not be tested.

**Engine.** Entries are market-at-next-open or limit only; there are no stop (breakout) entry
orders, which the ORB literature relies on. Fills ignore market impact beyond fixed slippage, and
the basket daily-loss limit counts realized losses only. The admin portfolio page caps a basket at
20 instruments, so it cannot reproduce the study's 92-stock basket.

**Swing risks.** Returns similar to the index, with drawdowns up to ~29%; losing years exist (2018,
2019, 2025); the edge per trade is clear (t > 3 in each period) but the period-to-period spread is
wide. Concentration: 8 positions, all long.

**Paper-trading readiness.**

- Swing v6: **ready for paper trading** on daily bars with the Nifty 50 daily stored. Track at least
  6–12 months (about 30–50 trades) and compare each trade's R with the backtest's distribution
  before any live use.
- Intraday v4: **not ready**; research only.

**Recommendations.**

1. Reconnect FYERS (its token has expired) and re-run `run_strategy_study intraday --fetch` on
   5-minute history, after adding stop-entry orders to the engine. That is the version of ORB with
   published evidence; the hourly version tested here is not.
2. Swing: test volatility-scaled sizing (half risk when the Nifty's 20-day volatility is above its
   one-year median) on fresh data. The volatility split showed up in both periods, but the hold-out
   is spent, so it is untested.
3. Add a dated FUTURES rate row with STT 0.05% from 1 Apr 2026 (a configuration change left for
   the owner). The live `EQUITY_DELIVERY` row already carries FYERS brokerage and the DP charge.
4. Fix or retire `nifty_vwap_supertrend` (no volume on its spot-index symbol) and add sizing nodes,
   risk guards and time windows to the intraday starters.
5. Store historical index constituents to remove the survivorship bias.
6. Add NSE holiday lists for 2010–2024 to `nse_holidays.json`, so older daily backtests pass the
   strict data check without *Allow partial history*.
