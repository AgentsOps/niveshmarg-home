# 12. Swing Trading Suite (Setup Scanner)

The **Swing Trading Suite** (`apps/swing_suite`) finds multi-day swing setups in NSE equities and tells you what to do with each one. It runs its **Swing Analyzers** (VCP, momentum flag, IPO base, 21 EMA retest and reclaim) over your stocks after the close or on demand, and lists the setups as **Buy**, **Wait for retest** and so on. It is built on Niveshmarg Edge's causal quant library, the Parquet/DuckDB warehouse and the AI Analysis layer. **Orders are placed by you**, not by the suite.

> **Primary UI:** Django Unfold Admin → **Swing Suite** sidebar group (Swing Candidates), plus deep-links to `/chart/<canonical_id>/`.
>
> **Removed:** the Swing Book (paper/live positions), the Macro Cycle (monthly ROC allocation and asset-class ratios), the Fundamentals & ESM screener (quality gate, results screen, NSE ESM surveillance) and Sector RS (the sector index leaderboard and its score boost) are no longer part of the suite.

---

## 1. Architecture & File Map

| Layer | Module / File | Responsibility |
|---|---|---|
| **Domain Models** | `apps/swing_suite/models.py` | `SwingCandidate` |
| **Universe Flag & Indices** | `apps/instruments/models.py`, `apps/instruments/services.py`, `apps/instruments/admin.py` | `Instrument.is_swing_universe` ("marked for scan"), NSE `-INDEX` master ingestion (`fetch_nse_indices_from_fyers`), `INDEX_YAHOO_MAP`, admin bulk actions |
| **Industry & Index Members** | `apps/instruments/models.py` (`Instrument.industry`, `Instrument.indices`), `apps/instruments/index_members.py`, `apps/market_data/nse_reports.py` (`INDEX_CONSTITUENT_LISTS`) | Each stock's NSE industry and the NSE indices it is in, kept on the Instrument from NSE's constituent lists. The manual scan picks stocks by industry |
| **Quant: Relative Strength** | `apps/quant/relative_strength.py` | Causal `mansfield_rs` and `latest_mansfield_rs` (a stock against NIFTY 50), `distance_from_high_pct`, `causal_ratio_series`, `screen_52w_high_leaders` |
| **Quant: Setups** | `apps/quant/patterns.py` | Causal `detect_vcp`, `detect_flag_breakout`, `detect_ipo_base_breakout`, `detect_ema_swing_signals`, `consecutive_closes_below` |
| **Swing Analyzers (plugins)** | `apps/swing_suite/analyzers/` | One `SwingAnalyzer` per setup type (`vcp.py`, `flag.py`, `ipo_base.py`, `retest_21ema.py`, `reclaim_21ema.py`), the `registry`, and `evaluate_setups` (`runner.py`) which runs a set of analyzers and picks the setup to act on |
| **Services** | `apps/swing_suite/services.py` | `resolve_swing_scan_universe`, `resolve_manual_scan_instruments`, `backfill_swing_universe`, `run_swing_eod_scanner` |
| **Universe Builder** | `apps/swing_suite/universe.py`, `apps/market_data/nse_reports.py` | Automatic watchlist: 52-week-high leaders from NSE's daily reports and recent listings from the instrument master, with source tracking and lapsing |
| **AI Catalyst** | `apps/swing_suite/catalyst.py` | `build_catalyst_context`, `generate_swing_catalyst_report` (persists to `apps.analysis.StockAnalysis` with a Harsh Rulebook checklist) |
| **Celery Tasks & Beat** | `apps/swing_suite/tasks.py`, `config/settings/base.py` | Chained EOD pipeline (`16:45` IST Mon–Fri), evening universe refresh, `run_swing_manual_scan_task` with progress, step tasks for manual runs |
| **Bootstrap Command** | `apps/swing_suite/management/commands/swing_bootstrap.py` | First-time NIFTY 50 backfill (the benchmark), optional universe build and scan |
| **Strategy Nodes & Starters** | `apps/strategies/nodes/swing.py`, `apps/strategies/starters/` | 7 causal `NodeSpec` nodes (`Swing Patterns` group), `ExitPlan.max_stop_pct`, `-SM` equity segment support, 4 starter templates |
| **Portfolio Backtester** | `apps/strategies/portfolio_engine.py` | `EQUITY_DELIVERY` auto-resolution for `>= 1d`, `exit.signal` handling, `consecutive_loss_limit=5` throttle, pyramiding |
| **CNC Order Routing** (strategy runners, not this suite) | `apps/trading/router.py`, `apps/trading/runner.py`, `apps/trading/manual.py` | `runner_order_product` (`DELIVERY` vs `INTRADAY`), `runner_is_intraday` (bypasses 15:15 square-off), `550`-bar daily warmup: used when a daily swing strategy from the builder runs on a Live Runner |
| **Unfold Admin UI** | `apps/swing_suite/admin.py`, `templates/admin/swing_suite/` | The Swing Candidates list, the Manual Scan form and its progress page |

---

## 2. Core Rules & Components

### 2.1 Swing Universe, Scanner & Retest Watchlist

#### Automatic Swing Universe (`apps/swing_suite/universe.py`)
The watchlist is built from two sources, in addition to anything tagged by hand. The reason each stock is in the universe is stored in `Instrument.metadata["swing_universe"]` (`source`, `since`, and for leaders `high_date`, `dist_pct`, `last_qualified`, `led_in_weak_market`) and copied to `SwingCandidate.details["universe"]`.

- **`LEADER_52W` (`refresh_leaders`):** NSE's daily *52-week high/low* report and full *bhavcopy* (`apps/market_data/nse_reports.py`) cover the whole cash market in two downloads. `screen_52w_high_leaders` keeps `EQ` and `SM` securities whose 52-week high was made within `14` calendar days, that closed within `5%` of it, and that traded at least `₹50,00,000` that day (`₹15,00,000` for `SM`). ETFs are dropped by `asset_class`. A new leader is given `2y` of daily candles and tagged only if candles arrive; at most `50` new names are admitted per run. When `NSE:NIFTY50-INDEX` is itself `5%` or more below its 52-week high, the leader is marked `led_in_weak_market`.
- **`RECENT_IPO` (`discover_recent_listings`):** an NSE `-EQ`/`-SM` equity that entered the instrument master within `120` days (and more than `7` days after the master's first load) has its full history fetched; if its first candle is under 18 months old it is tagged and `metadata["is_recent_ipo"]` is set, which switches on the IPO-base detector. An old stock that was only new to the master is remembered and not re-checked.
- **Lapsing:** a `LEADER_52W` tag is removed `30` days after the stock last qualified, a `RECENT_IPO` tag 18 months after listing. A stock with a live candidate is kept. A tag set by hand (`MANUAL`) is never removed; if such a stock becomes a leader its leadership is recorded and its source stays `MANUAL`.

`resolve_swing_scan_universe()` gathers active NSE `EQUITY` instruments that are either:
1. Tagged `is_swing_universe=True`,
2. On the `WATCHLIST_WIDE_SL` Retest Watchlist within the last 15 days, or
3. Tracked in daily `CandleCoverage(timeframe="1d", canonical_id__startswith="NSE:")`.

#### Swing Analyzers (`apps/swing_suite/analyzers/`)
Every setup type is a plugin: one `SwingAnalyzer` registered in its own module. The scanner, the admin badge and filter, and the Manual Scan form all read the registry, and a test fails if `services.py`, `admin.py`, `tasks.py`, `models.py` or `universe.py` names a setup type.

A spec declares:

| Field | Meaning |
|---|---|
| `id` | What `SwingCandidate.setup_type` stores. It never changes once candidates exist. |
| `label`, `description`, `badge` | How it is shown (`badge` is an Unfold label colour). |
| `timeframe` | The candles it reads: `1d`, or a higher timeframe (`1w`, `1M`) built from daily bars with `apps.quant.resample`. Stored on the candidate as `timeframe`. |
| `in_eod_scan` | `True` = part of the scheduled EOD scan. `False` = runs only when picked in a manual scan. |
| `applies_to(ctx)` | Optional guard; the analyzer is skipped when it returns `False` (the IPO base applies to recent listings only). |
| `detect(ctx)` | Returns a `SetupHit` (score, pivot, stop, note, priority) for each way the setup is present on the latest bar. The maths it calls lives in `apps.quant.patterns`. |

`AnalyzerContext` holds the candles of one instrument on one timeframe and computes each detector's output once (`ctx.vcp`, `ctx.flag`, `ctx.ema`, `ctx.ipo`), so analyzers share series instead of recomputing them. `evaluate_setups(daily_df, analyzers, ...)` groups the analyzers by timeframe, applies the 5% stop rule to every hit, and returns the best one (a buyable setup first, then the analyzer's priority, then score) with every setup found under `matched_setups`. A hit marked `fallback` counts only when nothing else was found.

The built-in analyzers, all on `1d`:

| Id | Label | EOD scan | Finds |
|---|---|---|---|
| `VCP` | VCP Breakout | yes | 3 progressive base contractions, tight consolidation near pivot, volume dry-up, pivot breakout. |
| `FLAG` | Momentum Flag | yes | Prior surge + shallow descending flag channel breakout. |
| `IPO_BASE` | IPO / SME Base | yes | Post-listing base breakout (recent IPOs: `< 380` bars or `metadata["is_recent_ipo"]`). |
| `RETEST_21EMA` | 21 EMA / Pivot Retest | yes | Promotion of a watched `WATCHLIST_WIDE_SL` pivot on pullback to pivot/`21 EMA`, a VCP or flag retest, or (fallback) an uptrend pullback to the rising `21 EMA`. |
| `RECLAIM_21EMA` | 21 EMA Reclaim | manual only | Close back above the `21 EMA` within `10` bars of a `21 EMA` exit signal. It is a re-entry for someone just taken out of the stock and a poor-reward fresh entry for anyone else, so the schedule never runs it. |

**Adding an analyzer:** create `apps/swing_suite/analyzers/<name>.py` with a `detect(ctx)` function and a `registry.register(SwingAnalyzer(...))` call, add the module to the import line in `analyzers/__init__.py`, and put any new indicator maths in `apps/quant`. Nothing else changes: it appears in the Manual Scan form, the candidate filter and (if `in_eod_scan`) the nightly scan.

#### The Scanner (`run_swing_eod_scanner`)
`run_swing_eod_scanner()` filters by minimum bars (`25`) and 20-day median daily turnover (`₹50,00,000` for `-EQ`, `₹15,00,000` for `-SM`), then runs the analyzers through `evaluate_setups()`. Called with nothing it is the EOD scan: the Swing Universe and every `in_eod_scan` analyzer. A candidate's composite score is the analyzer's score plus the stock's 63-day Mansfield RS against NIFTY 50 (stored as `rs_rank`), capped at `-15` to `+25` points. A manual scan passes `analyzers=[ids]`, `instruments=[...]` and `source="MANUAL"`.

#### Manual Scan (`run_swing_manual_scan_task`)
**Swing Candidates → Manual Scan** opens a form: tick one or more analyzers (each shows its timeframe), then choose what to scan.

- **Stocks marked for scan:** exactly the instruments with `is_swing_universe=True` ("Add selected to Swing Universe" on the Instruments list). Unlike the EOD scan it does not add watchlist names or other stocks that merely have daily candles.
- **All stocks of an industry:** every active NSE equity whose `Instrument.industry` is the one picked (for example *Healthcare* or *Capital Goods*; the dropdown shows each industry with its stock count). The industry is NSE's own classification, read from its index constituent lists: `INDEX_CONSTITUENT_LISTS` maps 34 NSE indices (Nifty 50 to Nifty Total Market, and the sector indices) to their file on the NSE archive, and `sync_index_constituents` sets each listed stock's `industry` and `indices` (the JSON list of index ids it is a member of). So only stocks that are in at least one NSE index have an industry, roughly the 750 of Nifty Total Market; a stock outside them is not reached by an industry scan and has to be marked for scan instead. The **Refresh Index Members (NSE)** button on the Instruments list refreshes both fields. A list that cannot be fetched, or that matches nothing in the instrument master, leaves what is stored untouched and is reported; symbols NSE lists that are not in the master are returned as `not_in_master`, never created.
- **Scan date** (empty = today) and **fetch missing candles first** (a stock with no candles gets `2y` of history, so a large industry is slow the first time).

The scan is queued on the Celery worker. The form redirects to a **progress page** with a bar, the current stock and a done/total count; it polls `manual-scan/<task id>/status/` every 1.5 seconds. Progress is the Celery task's own state (`PROGRESS` with `{phase, percent, message, done, total}`, published by `_ScanProgress` and read by `manual_scan_status`), so there is no extra table: getting the stock list is the first 5% of the bar, the candle check runs to 50% (skipped when candles are not fetched), and the scan takes the rest. When it finishes the page shows the counts with links to the candidates and the scan log. The page can be left; the scan also reports through a `swing_manual_scan` notification; if no stocks could be resolved it fails with a `swing_ops` alert instead of scanning nothing. There is one candidate per stock per day, so a manual scan over a stock the EOD scan already has a row for keeps that row (recording what it found under `details["manual_scan"]`) unless it turns a `WATCHLIST_WIDE_SL` setup into a `READY` one. A manual scan does not expire older candidates.

**Scan log:** every scan records one row per symbol in the universe: the timeframe (`1d`), how many candles were read (up to `400`), the first and last candle dates, whether the newest candle is older than the scan date (`stale`), the 20-day median turnover and the outcome (`NO_CANDLES`, `TOO_FEW_CANDLES`, `LOW_TURNOVER`, `NO_SETUP`, `KEPT_EOD_RESULT`, or the candidate's stage with its setup and timeframe). The rows are written to the application log, returned as `symbols`, and stored in an `AuditLog` entry (`action="SWING_EOD_SCAN"` or `"SWING_MANUAL_SCAN"`, `WARNING` when any symbol was stale) whose id is returned as `audit_log_id`; the entry also records the analyzers that ran and the scope.

**Stages (what to do with a candidate).** The stored code is stable; the admin shows the action:

| Code | Shown as | Meaning |
|---|---|---|
| `READY` | **Buy** | Stop within 5%. Actionable on the scan day and the two sessions after it (`valid_till`, shown as "Buy valid till"). |
| `WATCHLIST_WIDE_SL` | **Wait for retest** | A real breakout whose stop is more than 5% away. Watched for 15 days and promoted on a pullback. |
| `EXECUTED` | **Bought** | You placed the order yourself and ticked **Mark selected as Bought**. Nothing sets this automatically. |
| `DISMISSED` | **Dismissed** | You passed on it. |
| `EXPIRED` | **Expired** | A Buy that was not acted on in its window. |

Rows saved before the fundamentals removal may still carry `FAILED_QUALITY`; the code is no longer produced and the list shows it as it is stored.

**Strict 5% SL discipline:**
- If `(entry - stop_loss) / entry * 100 <= 5.0%` → saved as `READY`.
- If `> 5.0%` → saved as `WATCHLIST_WIDE_SL`, so wide breakouts are tracked for a low-risk `21 EMA` retest instead of chased.
- **Expiry and rescans:** each EOD scan marks `READY` candidates scanned before the previous trading day as `EXPIRED`. A same-day rescan refreshes the numbers but keeps the stage of a Bought (`EXECUTED`) or `DISMISSED` candidate and of one marked Buy by hand in the admin.

### 2.2 AI Catalyst, Builder Nodes & Backtester

#### On-Demand AI Swing Catalyst (`apps/swing_suite/catalyst.py`)
- `generate_swing_catalyst_report(candidate, source_notes=...)` assembles the setup (with the stock's own Mansfield RS), the stock's industry and optional RHP/concall/order-book notes into a structured prompt (`SwingCatalystReportSchema`) with a 3-gate **Harsh Rulebook checklist**: relative strength positive, setup ready, stop within 5%.
- Uses `AIModelConfig.get_active()` (`OpenRouter` when `OPENROUTER_API_KEY` is set, otherwise a deterministic mock), saves a `StockAnalysis` record (`prompt_version="swing-catalyst-v1"`), and links `candidate.ai_analysis_id`. AI never places orders.

#### Strategy Builder Nodes, Starter Templates & Multi-Stock Backtester
- **7 Registered Nodes (`Swing Patterns` group in `apps/strategies/nodes/swing.py`):**
  - `ta.vcp` — VCP Contraction & Breakout (`vcp_score`, `pivot_level`, `stop_level`, breakout/retest signal)
  - `ta.flag_breakout` — Momentum Flag Breakout
  - `ta.ipo_base` — IPO / SME Base Breakout
  - `ta.ema_swing_signals` — Harsh 21/63 EMA Exits & Reclaim (`exit_2red`, `exit_2pct`, `exit_63ema`, `reclaim_21ema`, `retest_21ema`)
  - `ta.ratio_series` — Inter-Market Ratio & Percentile (`ratio`, `pct_rank`, `sma`)
  - `condition.consecutive_below` — Consecutive Closes Below Level
  - `ta.circuit_surge` — Day Gain & Circuit Level (gain over the previous close, upper circuit level for the price band, first-bar-of-day surge signal)
- **4 Starter Templates (`apps/strategies/starters/`):**
  1. `vcp_retest_swing.json` — *VCP + 21 EMA Retest (CNC Swing)* (`1d`)
  2. `flag_breakout_swing.json` — *Momentum Flag Breakout + 21 EMA Trail* (`1d`)
  3. `macro_cycle_allocator.json` — *Macro Cycle Equity/Gold Allocator (ROC 18M + Trend)* (`1d` + `1M`): a builder strategy you can backtest. It is built from ordinary indicator nodes and is independent of the Swing Suite
  4. `intraday_circuit_momentum.json` — *Intraday +13% Circuit Momentum* (`5m`): buys the first bar of the day up `13%`+ on the previous close, `3%` stop, upper circuit (`20%` band) as target, `0.5%` risk, 15:15 IST square-off. The price band is a parameter and a news trigger cannot be checked, so apply it only to 20%-band stocks with a result or order behind the move
- **Portfolio Backtester (`apps/strategies/portfolio_engine.py`):**
  - Defaults `>= 1d` timeframes to `EQUITY_DELIVERY` charges (including `-SM` SMEs in `resolve_charge_segment()`).
  - Honors `exit.signal` nodes, `ExitPlan.max_stop_pct`, `max_positions=5`, optional `allow_pyramiding`, and `consecutive_loss_limit=5` (defaults to `5` on non-intraday timeframes, throttling exposure to `throttled_exposure_pct=35.0%`).

---

## 3. How It Runs Automatically (Celery Beat Schedule)

In [`config/settings/base.py`](../config/settings/base.py) (`CELERY_BEAT_SCHEDULE`, timezone `Asia/Kolkata`) the Swing Suite has two scheduled jobs; the 16:30 candle backfill belongs to market data. Every task is idempotent and retries network errors with exponential backoff.

| Schedule (IST) | Beat Key | Celery Task | What It Does Automatically |
|---|---|---|---|
| **16:30** Mon–Fri | `backfill-universe-history-1630-ist` | `apps.market_data.tasks.backfill_universe_history_task` | Backfills `5d` of `1d` bars for existing `CandleCoverage` instruments. |
| **16:45** Mon–Fri | `swing-eod-pipeline-1645-ist` | `run_swing_eod_pipeline_task` | Skips non-trading days. Waits until today's `NSE:NIFTY50-INDEX` candle is in the warehouse (re-checks every 5 minutes for 30 minutes, then alerts and stops rather than scan yesterday's bars). Then runs the **EOD scan** (`run_swing_eod_scan_task`: stale-universe backfill, the EOD analyzers, `swing_eod_scan` digest). A scan that fails is reported (`swing_ops`). |
| **19:30** Mon–Fri | `swing-universe-refresh-1930-ist` | `refresh_swing_universe_task` | Rebuilds the automatic Swing Universe from NSE's 52-week high/low report and bhavcopy and from new listings. Waits for the reports (re-checks every 30 minutes for 2 hours). New names are backfilled here, so the next evening's scan covers them. Sends `swing_universe` when anything is added. |

In Docker (`docker-compose.yml`), `celery_beat` schedules these tasks and `celery_worker` executes them.

> **Not scheduled:**
> - **AI Catalyst reports** run only when requested, so no AI tokens are spent unasked.
> - **NIFTY 50 history** is backfilled by `swing_bootstrap` (section 4.1) and then kept current by the 16:30 backfill.
> - **Manual scans (`run_swing_manual_scan_task`)** and **index member refreshes (`sync_index_constituents_task`)** run when asked for from the admin.
> - **Exits.** The suite does not track positions, so it raises no stop, target or EMA exit alerts: manage open trades at your broker.

---

## 4. How to Run It Manually

### 4.1 One-Time Setup

Run inside your Docker `web` container (`docker compose exec web ...`; locally without Docker, prefix commands with `DB_ENGINE=sqlite .venv/bin/python`).

#### Step 1 — Sync Instruments & Seed the Swing Strategy Templates
```bash
docker compose exec web python manage.py migrate
docker compose exec web python manage.py sync_instruments
docker compose exec web python manage.py seed_starter_strategies
```

#### Step 2 — Backfill the Benchmark
```bash
docker compose exec web python manage.py swing_bootstrap
```
`swing_bootstrap` fetches `2y` of daily history for `NSE:NIFTY50-INDEX`, which relative strength, the weak-market check and the evening run's candle wait all read. It is safe to rerun, prints what it could not fetch, and takes `--period`, `--skip-backfill` and `--universe`.

#### Step 3 — Industries, the Swing Universe and the First Scan
1. In Unfold Admin, **Instruments → Refresh Index Members (NSE)** fills each stock's industry and index membership (needed for industry scans).
2. Build the universe, backfill it (`2y`) and run the first scan:
   ```bash
   docker compose exec web python manage.py swing_bootstrap --skip-backfill --universe
   ```
   Drop `--skip-backfill` to refresh NIFTY 50 as well; the universe's own candles are backfilled only without it.
3. To scan stocks of your own, select them in **Instruments** and run **"Add selected to Swing Universe"**.

### 4.2 Running Manually via Django Unfold Admin (UI)

**Buttons** sit at the top of each list and need no selected row; **row actions** apply to the rows you tick.

| Admin Screen | URL | Available Actions / Links |
|---|---|---|
| **Swing Candidates** | `/admin/swing_suite/swingcandidate/` | Buttons: **"Run EOD Swing Scan"**, **"Manual Scan"** (form and progress page; queued on the worker), **"Refresh Universe (52w Highs + IPOs)"** (queued on the worker). Row actions: **"Generate AI Swing Catalyst Report (selected)"**, **"Mark selected as Buy"**, **"Mark selected as Bought"**, **"Dismiss selected candidates"**. Links: **Chart** (on the analyzer's timeframe), **AI Report**. Filters: stage, setup (analyzer), timeframe, scan date |
| **Instruments** | `/admin/instruments/instrument/` | Button: **"Refresh Index Members (NSE)"** (queued on the worker). Columns **Industry** and **Indices**; filter by index; row actions **"Add / Remove selected to Swing Universe"** |

### 4.3 Running Manually via Python / Celery Tasks (On-Demand or Historical Date)

```python
from apps.swing_suite.tasks import (
    run_swing_eod_scan_task,
    run_swing_manual_scan_task,
)

# The EOD scan for a specific past date without re-backfilling
run_swing_eod_scan_task(scan_date_iso="2026-11-11", do_backfill=False, send_notification=False)

# Manual scan: chosen analyzers over an industry's stocks, or over the stocks marked for scan
run_swing_manual_scan_task(["VCP", "FLAG"], "INDUSTRY", "Healthcare", "2026-11-11", do_backfill=False)
run_swing_manual_scan_task(["RECLAIM_21EMA"], "MARKED")

# Refresh each stock's indices and industry from NSE (all indices, or the ones named)
from apps.instruments.index_members import sync_index_constituents
sync_index_constituents(["NSE:NIFTY500-INDEX"])
```

To queue asynchronously onto the Celery worker instead, call `.delay(...)` on any of the tasks above.

#### Manual AI Catalyst Report with Custom RHP / Concall Notes
```python
from apps.swing_suite.models import SwingCandidate
from apps.swing_suite.catalyst import generate_swing_catalyst_report

cand = SwingCandidate.objects.filter(stage="READY").first()
analysis = generate_swing_catalyst_report(
    cand,
    source_notes="- Order book up 45% YoY to ₹1,200 Cr\n- Q2 operating margin expanded 180 bps",
)
print(analysis.pk, analysis.verdict, analysis.summary)
```

---

## 5. Automated Testing & Verification

```bash
# Swing Suite suites + Quant suite
DB_ENGINE=sqlite .venv/bin/python manage.py test \
  tests.unit.test_swing_phase1 \
  tests.unit.test_swing_phase2 \
  tests.unit.test_swing_phase3 \
  tests.unit.test_swing_analyzers \
  tests.unit.test_swing_rulebook \
  tests.unit.test_swing_operations \
  tests.unit.test_swing_universe \
  tests.unit.test_intraday_circuit_starter \
  tests.unit.test_quant

# Django system check
DB_ENGINE=sqlite .venv/bin/python manage.py check

# Regenerate node catalog docs if Swing nodes changed, then verify the strategy platform
DB_ENGINE=sqlite .venv/bin/python manage.py export_node_catalog
DB_ENGINE=sqlite .venv/bin/python manage.py verify_strategy_platform
```
