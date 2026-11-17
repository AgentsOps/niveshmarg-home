# Django Unfold Administration & Production Operations

Niveshmarg Edge features a custom **Django Unfold Admin** tailored for institutional trading operations, quantitative monitoring, and enterprise observability.

Access the dashboard at:
```text
http://localhost:8000/admin/
```

![Institutional Trading Cockpit](screenshots/01_admin_dashboard.png)

---

## 1. Institutional Trading Cockpit Overview

The dashboard homepage shows real data only; when there is nothing to show, a card shows an empty state instead of sample numbers:

1. **System status & Setup Checklist**:
   Overall health (from `/healthz`) and "Setup X of N" onboarding progress (connect broker, sync symbol master, load candle history, …).
2. **Strategy P&L / Capital & Exposure Cards**:
   Aggregated P&L, capital, margin utilization, gross exposure and open positions across configured runners.
3. **Execution Fleet Card**:
   Runner counts and mode, square-off cutoff reminder, and risk guardrail status.
4. **Data Warehouse Depth Card**:
   Real candle count, Parquet partition count, and tracked instruments.
5. **Latest Backtest Equity Curve**:
   The equity curve of the most recent completed backtest, labelled with that backtest (not a live portfolio curve).
6. **Warehouse Depth by Timeframe**:
   Candle coverage across `1m`, `5m`, `15m`, `30m`, `1h`, and `1d`.
7. **AI Research Sentiment Donut**:
   Bullish / Neutral / Bearish split over **completed** AI reports only (empty state when there are none), plus today's AI tokens and cost.
8. **Market Structure & Macro Regime**:
   Latest stored benchmark regime label and confidence.
9. **Operational Alerts**:
   Includes backup failures, regime failures, candle backfill failures, broker auth failures (`BROKER_AUTH_FAILED`), dropped bars, and job enqueue failures.

---

### Today and notifications

- **Today** (above the KPI cards; open during NSE market hours or while a runner is active, and whenever something needs a hand) lists the runners with their state dot, mode, instrument, session P&L and open positions; the open positions; the last three order events (placed, filled, closed, square-off, rejected); and **Needs attention** rows that each carry the action that fixes them: *Reconnect Fyers* for an expired or expiring token, *Connect …* for a disconnected account, *Check feed* for a silent stream, and *Backfill NSE:SBIN-EQ 15m* when an active runner's instrument has no or old candles in the warehouse.
- **Notifications** (the bell in the admin header) list finished and failed backtests (with a link to the chart or the run), runner warnings and errors (risk breaches, rejected orders, kill switches), and background jobs that could not be queued. New ones also arrive as toasts on any open admin page over `/ws/notifications/`. Each staff member has their own copy, so marking one read does not hide it from others (`apps.core.notify.notify()` is the one call site for new kinds; rows live in `core.Notification`).

## 2. Navigation Sidebar & App Sitemap

The left sidebar organizes all operational domain models:

```text
├── Markets
│   ├── Instruments          (/admin/instruments/instrument/)
│   ├── Chart                (/chart/NSE:NIFTY50-INDEX/)
│   └── AI Analysis          (/admin/analysis/stockanalysis/)
├── Strategies
│   ├── Strategies           (/admin/strategies/strategy/)
│   └── Backtests            (/admin/strategies/backtestrun/)
├── Portfolio
│   ├── Overview Cockpit     (/admin/portfolio/overview/)
│   ├── Holdings             (/admin/portfolio/holding/)
│   ├── Positions            (/admin/portfolio/position/)
│   ├── Funds & Margin       (/admin/portfolio/fundssnapshot/)
│   ├── Equity Snapshots     (/admin/portfolio/portfoliosnapshot/)
│   └── AI Rebalance         (/admin/portfolio/portfoliorebalanceproposal/)
├── Trading
│   ├── Runners              (/admin/trading/liverunner/)
│   ├── Risk Profiles        (/admin/trading/riskprofile/)
│   └── Statutory Rates      (/admin/trading/statutorychargerate/)
└── Settings
    ├── Broker Accounts      (/admin/brokers/brokeraccount/)
    ├── Audit Logs           (/admin/core/auditlog/)
    └── Users & Groups       (/admin/auth/user/)
```

---

## 3. Portfolio Management & AI Balancing Cockpit

Accessible at `/admin/portfolio/overview/`, the **Portfolio Cockpit** integrates real-time account visibility with an autonomous multi-agent balancing engine:

1. **Automated 4-Hour Multi-Broker Sync**:
   - Celery Beat schedule (`"sync-portfolio-every-4-hours"`) queries connected accounts across **Fyers**, **Zerodha Kite**, **Groww**, and **Delta Exchange**.
   - Pulls current delivery holdings, open F&O/crypto positions, available margin, and collateral.
   - Automatically re-calculates portfolio weights, flags concentration risks, and prunes sold or closed positions.
   - An on-demand **"Sync All Brokers"** button allows immediate manual synchronization.
2. **Multi-Agent AI Balancing & Diversification**:
   - Built on **LangGraph** orchestrating 4 specialized agents:
     - **Asset & Sector Allocator**: Audits single-stock concentration (>15% alerts), sector concentration (>25% alerts), and calculates the Herfindahl-Hirschman Index (HHI).
     - **Risk Auditor (CRO)**: Assesses cash liquidity buffer (<10% warning, >35% cash drag), downside beta sensitivity, and derivative leverage risk.
     - **Macro Strategist**: Ingests the active `MarketRegime` to align tactical asset allocation with prevailing macroeconomic conditions.
     - **Chief Investment Officer (CIO) Synthesizer**: Formulates structured, actionable rebalance trade proposals (`TRIM`, `ADD`, `EXIT`, `HOLD`) with target weights and estimated trade values.
3. **Executive Dashboard KPIs**:
   - Total Portfolio Equity (Holdings value + Cash / Available Margin).
   - Total Invested Capital vs. Unrealized Returns.
   - Cash Buffer Ratio & Health Score (`1-100`) with Diversification Grade (`A+` to `F`).
   - Visual Sector Allocation breakdown with warning thresholds.
   - Market Cap Tier Distribution (Large Cap / Mid Cap / Small Cap).

---

## 4. Production Health Diagnostics (`/healthz`)

The platform exposes a standardized health probe for load balancers (AWS ALB, GCP Cloud Load Balancing, Kubernetes, Traefik, or Nginx):

```bash
curl -i http://localhost:8000/healthz
```

| Status | HTTP | Meaning |
|---|---|---|
| `healthy` | 200 | Everything is up. |
| `degraded` | 200 | The app serves pages, but Redis, the Celery broker, the Celery worker heartbeat (older than 5 minutes) or the live feed is down. Background jobs, live data or alerts are impaired. An unconfigured live feed (no instruments) does not count. |
| `unhealthy` | 503 | The database is down. |

Anonymous callers get only the status, from a result reused for `HEALTHZ_CACHE_SECONDS` (default 5 s), so a burst of probes runs the full check (database, Redis, Celery broker and heartbeat, live feed) once; a status can therefore lag by up to that long. Staff sessions always get a fresh check with component details. In production `/healthz` is exempt from the HTTPS redirect, so local probes over plain HTTP see the real status.

Anonymous callers get only `{"status": "..."}`. Authenticated staff also get component diagnostics:

```json
{
  "status": "healthy",
  "components": {
    "database": {"status": "healthy", "journal_mode": "WAL", "latency_ms": 1.2, "busy_timeout_ms": 5000},
    "redis_channel_layer": {"status": "healthy"},
    "celery": {"status": "healthy"},
    "celery_worker": {"status": "healthy"},
    "market_data_feed": {"status": "healthy"}
  }
}
```

Because `degraded` still returns 200, monitor the `status` field (not just the HTTP code) to catch a stopped worker or feed.

---

## 4. Celery Periodic Scheduler (Beat)

The `niveshmarg_celery_beat` container triggers the tasks in `CELERY_BEAT_SCHEDULE`, defined in `config/settings/base.py` (not `config/celery.py`). Times are IST. Trading-day jobs check the NSE holiday calendar themselves.

| Schedule | Task | Purpose |
|---|---|---|
| Every 60 s | `apps.core.tasks.heartbeat_task` | Worker heartbeat used by `/healthz` |
| Every 60 s | `apps.trading.tasks.reconcile_active_runners_task` | Reconcile live runners (crypto trades around the clock) |
| 02:00 daily | `apps.core.tasks.scheduled_nightly_backup_task` | Nightly backup (see below) |
| 03:00 on the 1st | `apps.core.tasks.monthly_backup_restore_drill_task` | Monthly restore drill |
| 03:30 daily | `apps.core.tasks.prune_audit_log_task` | Prune audit log: `HEARTBEAT` rows > 2 days, `AI_CALL` > 90 days; everything else kept |
| 06:00 daily | `apps.instruments.tasks.sync_all_instruments_task` | Sync all instruments (`use_local_cache=False`) |
| 07:00 daily | `apps.analysis.tasks.run_daily_news_scout_task` | Morning news scout |
| 08:30 daily | `apps.trading.tasks.check_broker_tokens_task` | Validate each connected account's token via `get_profile`. Expired/rejected → account `EXPIRED`, its live runners `PAUSED`, CRITICAL `BROKER_AUTH_FAILED` alert. Tokens are **not** auto-refreshed (brokers need an interactive login). |
| 08:50 Mon–Fri | `apps.analysis.tasks.update_market_regimes_task` | NIFTY 50 market regime (one LLM call per trading day) |
| 09:00 Mon–Fri | `apps.trading.tasks.start_trading_session_task` | Start session, reset daily P&L |
| Every minute 14:00–15:59 Mon–Fri | `apps.trading.tasks.enforce_daily_square_off_task` | Square-off pass; acts once each risk profile's cutoff passes; skips 24x7 crypto |
| 15:45 Mon–Fri | `apps.trading.tasks.end_trading_session_task` | End session (counts paper sessions) |
| 16:30 Mon–Fri | `apps.market_data.tasks.backfill_universe_history_task` | EOD candle backfill (`period=5d`, `interval=1d`, only instruments that already have daily bars) |

There is no `compact_candle_buffers` or `refresh_broker_tokens` task.

Long work also runs on the Celery worker: backtests (admin save/re-run), walk-forward, portfolio backtests, AI stock reports, news scout, and chart history refills. If the worker is not running, these stay queued/`PENDING`.

### Backups

The nightly Celery beat task backs up the relational database (a `dumpdata` JSON dump with natural foreign keys for PostgreSQL, or SQLite's online backup) and snapshots the Parquet warehouse into `data/backups/` (`sqlite/`, `parquet/`), verifies the database backup copy, and keeps the newest 7. If verification fails, the task fails loudly (alert) and does **not** prune older backups. Parquet files are archived under each partition's write lock. Manual equivalents: `python manage.py backup_data --verify [--keep N]` and `python manage.py verify_backup_restore`. The monthly restore drill checks a PostgreSQL JSON dump against the live schema (models, fields, every table with rows) and restores a SQLite backup into a temporary folder; see `verify_backup_restore` in the commands reference.

---

## 5. Tenants: investors and operators

Each investor has a **tenant**: their own broker accounts, strategies, runners, orders, portfolio, AI reports, chart drawings and API tokens. Market data, instruments, the swing scan and the starter templates are shared and read-only for investors.

**Operators** are the active superusers. They run the platform:
- **Add users** in **System › Users › Add user** (or `invite_investor` from the shell). Onboarding is invite-only. Choose a role:
  - **Investor**: a staff login in the Investor group, with its own tenant (named after the username unless you give a tenant name) and a default risk profile.
  - **Operator**: a superuser with no tenant of their own.
  - The new login has no password. After saving, the page shows a one-time link to send them, where they choose their own password. **New set-password link** (row action) issues a fresh one if it expired.
- **Users** and **Groups** are visible to operators only.
- **Manage tenants** in **System › Tenants**:
  - status (suspend to refuse a login);
  - live trading on or off;
  - the daily AI token limit.
- **View as one tenant, or as all**, from the Tenants row actions. Each switch is written to the audit log.
- **Kill switches:**
  - **Tenant kill switch** (row action): halts and flattens that tenant's runners and switches its live trading off.
  - **Platform kill switch** (list action): the same for every tenant.
  - Both ask for confirmation first, and each runner's latch is then reset one by one.
- **Set the AI model** in **System › AI Models**. A row with no tenant is the platform default; a row for a tenant overrides it for that tenant.
- **No platform market-data account.** Each tenant's NSE data (live feed, intraday history, quotes) comes only from that tenant's own Fyers account and reaches only that tenant. A Fyers account is required to use the app. Jobs that run for nobody in particular (the universe backfill, the screener) use Yahoo; Delta's public crypto feed is shared.

**Investors** are staff logins in the **Investor** group. They see only their own tenant. They can:
- add their broker accounts, each with its own broker app key and secret (keys never come from `.env`), including the Fyers account their market data comes from;
- issue and revoke MCP tokens in **System › API Tokens**;
- halt all their runners with **Kill all my runners** on Live Runners.

They can go live only after an operator switches live trading on for their tenant, and `LIVE_TRADING_ENABLED` must also be on.

**Data lifecycle:**
- `export_tenant` writes one tenant's data to JSON, without credentials.
- `offboard_tenant` suspends, halts, revokes and exports. Its `--delete --confirm` step permanently deletes the tenant's data.
- Whole-database backups are unchanged.

**Enforcement** (`TENANCY_ENFORCED`, off until the owner switches it on): every query and write must then run inside a tenant. Background jobs already do, one pass per tenant, and tasks for one row run as that row's tenant. Before switching it on:
1. Run `python manage.py tenancy_readiness` and clear the blockers.
2. Act on the warnings: every tenant connects their own Fyers account, every broker account has its own app key and secret, broker keys are removed from `.env`, and `MCP_SSE_TOKEN` is replaced with personal API tokens.
3. Set `TENANCY_ENFORCED=True` in `.env`.
4. Restart the web, worker, beat and live-feed containers.

The two-tenant isolation sweep (`tests/unit/test_tenant_isolation_sweep.py`) runs with enforcement on. It requests every admin page and every URL as one investor with another's ids, and checks that nothing leaks or changes.

---

## 6. Routine Maintenance & Operations Runbook

### SQLite WAL Checkpointing (SQLite Fallback Only):
When running with the SQLite fallback engine (`DB_ENGINE=sqlite`), heavy write load can cause WAL files to grow. Execute a checkpoint to merge WAL changes into the main database file (not needed for PostgreSQL):
```bash
docker exec -it niveshmarg_web python manage.py shell -c "import sqlite3; con=sqlite3.connect('data/db.sqlite3'); con.execute('PRAGMA wal_checkpoint(TRUNCATE);'); print('Checkpoint complete.')"
```

### Inspecting Container Logs:
```bash
# Stream web server logs
docker compose logs -f web

# Stream Celery worker execution
docker compose logs -f celery_worker

# Stream live broker tick receiver
docker compose logs -f live_feed
```

### Running Test Suites:
Run automated unit and integration tests inside the container environment:
```bash
# Run strategy and builder tests
docker exec -it niveshmarg_web python manage.py test tests.unit.test_strategies

# Run quantitative backtest correctness tests
docker exec -it niveshmarg_web python manage.py test tests.unit.test_backtest_correctness
```
