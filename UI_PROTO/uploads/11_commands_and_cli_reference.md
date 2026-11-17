# Niveshmarg Edge — Complete Commands & CLI Reference Guide

This document is the comprehensive reference guide for all commands, management scripts, CLI utilities, background workers, and automation tasks available in Niveshmarg Edge.

---

## 1. Environment & Execution Baseline

Before executing commands, ensure the virtual environment is active and required environment variables are loaded:

```bash
# 1. Activate Python virtual environment
source .venv/bin/activate

# 2. Set default Django settings (development by default)
export DJANGO_SETTINGS_MODULE=config.settings.development

# 3. Ensure Python unbuffered output for real-time logs
export PYTHONUNBUFFERED=1
```

All `manage.py` commands can be invoked using:
```bash
python manage.py <subcommand> [flags]
```

---

## 2. Model Context Protocol (MCP) Server Commands

### `run_mcp_server`
Starts the Niveshmarg Edge Model Context Protocol (MCP) server with all 24 domain tools registered.

```bash
# Standard I/O mode (default: used for Claude Desktop, Cursor, Antigravity subprocesses)
python manage.py run_mcp_server --transport stdio

# Server-Sent Events (SSE) HTTP mode (for network agents or web hooks)
python manage.py run_mcp_server --transport sse --host 127.0.0.1 --port 8001
```

**Options**:
- `--transport {stdio,sse}`: Transport protocol (default: `stdio`).
- `--host HOST`: Bind address for SSE transport (default: `127.0.0.1`).
- `--port PORT`: Port for SSE transport (default: `8001`).

**SSE security**: clients send `Authorization: Bearer <token>`, a personal API token from **Admin › System › API Tokens**; each session runs as that token's tenant. The shared `MCP_SSE_TOKEN` still works until tenancy is enforced. Only on a loopback host (`127.0.0.1`, `localhost`, `::1`), with no `MCP_SSE_TOKEN` and tenancy not enforced, is a token optional. `--tenant <id|username>` runs stdio as one tenant.

---

### `export_mcp_config`
Generates ready-to-copy JSON configuration blocks for integrating Niveshmarg Edge into AI IDEs and clients.

```bash
# View configuration for all supported clients (Claude Desktop, Cursor, Antigravity)
python manage.py export_mcp_config

# Output pure JSON for direct redirection
python manage.py export_mcp_config --format json > .cursor/mcp.json

# Target specific client format
python manage.py export_mcp_config --format claude
python manage.py export_mcp_config --format cursor
python manage.py export_mcp_config --format antigravity
```

**Options**:
- `--format {all,claude,cursor,antigravity,json}`: Client format to export (default: `all`).
- `--host HOST`: Custom host address for SSE entry (default: `127.0.0.1`).
- `--port PORT`: Custom port for SSE entry (default: `8001`).

---

## 3. Web Server & ASGI Channels

### `runserver` (Daphne / Django Development Server)
Starts the ASGI development web server with HTTP and WebSocket support on port 8000.

```bash
# Standard local development server
python manage.py runserver 0.0.0.0:8000

# Production ASGI server using Daphne
daphne -b 0.0.0.0 -p 8000 config.asgi:application
```

### `runworker` (Channels Background Worker)
Django Channels' worker for named background channels. It requires channel names as positional arguments, and the Niveshmarg Edge stack does not use it (background work runs on Celery).

```bash
python manage.py runworker <channel> [<channel> ...] [--layer LAYER]
```

---

## 4. Market Data Pipeline & Instrument Management

### `populate_instruments`
Populates equity stocks, ETFs, indices, and crypto symbols into the `Instrument` database table.

```bash
# Populate all supported instruments (NSE stocks, ETFs, Delta Exchange crypto, indices)
python manage.py populate_instruments --all

# Populate only NSE listed equity stocks
python manage.py populate_instruments --nse-stocks

# Populate only NSE listed ETFs
python manage.py populate_instruments --nse-etfs

# Populate only Delta Exchange crypto symbols
python manage.py populate_instruments --delta-crypto

# Force live download from remote API / exchange bypass local cache
python manage.py populate_instruments --all --refresh-live
```

With no source flag, all sources are populated (same as `--all`).

**Aliases**: `sync_instruments` and `ingest_instruments` are the same command with the same flags (`--all`, `--nse-stocks`, `--nse-etfs`, `--delta-crypto`, `--refresh-live`).

---

### `backfill_candles`
Backfills candles from Yahoo Finance into the Parquet warehouse, for one symbol or for every instrument that already has stored bars. One of `--symbol` or `--covered` is required.

```bash
# Two years of hourly + daily bars for one symbol
python manage.py backfill_candles --symbol NSE:SBIN-EQ --days 730 --timeframes 1h,1d

# Refresh daily bars for everything already in the warehouse
python manage.py backfill_candles --covered --days 5
```

**Options**:
- `--symbol SYMBOL`: Canonical ID (e.g. `NSE:SBIN-EQ`).
- `--covered`: Every instrument that already has stored bars at each timeframe.
- `--days N`: Days back. Capped per timeframe by what Yahoo serves: `1m` 7 days, `5m`/`15m`/`30m` 60 days, `1h` 730 days.
- `--timeframes LIST`: Comma-separated `1m,5m,15m,30m,1h,1d` (default `1d`).

---

### `verify_warehouse_integrity`
Checks the Parquet warehouse: unreadable files, missing columns, wrong-year bars, duplicate timestamps, bad prices, negative volume, off-grid bars, and coverage mismatches. Exits non-zero when it finds problems.

```bash
python manage.py verify_warehouse_integrity
python manage.py verify_warehouse_integrity --instrument NSE:NIFTY50-INDEX --timeframe 15m
python manage.py verify_warehouse_integrity --fix-coverage
```

**Options**:
- `--instrument ID`: Only this canonical ID.
- `--timeframe TF`: Only this timeframe.
- `--fix-coverage`: Recompute coverage records (bar counts, first/last bar) from the files.

---

### `refresh_screener_data`
Refreshes the Screener fields of every active NSE stock and ETF now, in this process: prices (connected broker, else Yahoo), momentum from the warehouse's daily candles, and Yahoo fundamentals. The 18:30 job does the same on Celery. See [14. Screener](14_screener.md).

```bash
python manage.py refresh_screener_data
python manage.py refresh_screener_data --symbols RELIANCE,NSE:TCS-EQ --force
python manage.py refresh_screener_data --only-quotes
```

**Options**:
- `--symbols LIST`: Only these symbols or canonical IDs.
- `--only-quotes`: Prices and momentum only, no fundamentals.
- `--force`: Refetch fundamentals already refreshed today.

---

### `realign_warehouse_bars`
Fixes 5m/15m/30m/1h/1d bars stored on the old UTC grid instead of the instrument's session grid (NSE bars start at 09:15 IST, daily bars at IST midnight). Dry run by default: it only reports. With `--apply` it deletes duplicates, relabels lone daily bars to IST midnight, and deletes misaligned intraday bars.

```bash
python manage.py realign_warehouse_bars                 # report only
python manage.py realign_warehouse_bars --apply         # make the changes
python manage.py realign_warehouse_bars --instrument NSE:NIFTY50-INDEX --apply
```

---

### `run_live_feed`
Connects to broker WebSockets (Fyers / Delta Exchange), ingesting live market ticks into real-time 1-minute bars, broadcasting updates over Django Channels, and appending bars to the Parquet warehouse.

```bash
# Run live feed indefinitely for active runners and default symbols
python manage.py run_live_feed

# Run live feed with additional symbols
python manage.py run_live_feed --symbols "NSE:RELIANCE-EQ,NSE:INFY-EQ,DELTA:BTCUSD"

# Smoke test run (stops automatically after 30 seconds)
python manage.py run_live_feed --seconds 30
```

**Options**:
- `--symbols SYMBOLS`: Comma-separated canonical IDs to subscribe to, on top of `LIVE_FEED_SYMBOLS` and running runners.
- `--seconds SECONDS`: Gracefully terminate after specified duration (ideal for CI smoke tests).

---

### `clear_candlestick_warehouse`
Safely purges historical candlestick Parquet files from the data warehouse and synchronizes coverage metadata.

```bash
# Dry run: view files that would be cleared without deleting them
python manage.py clear_candlestick_warehouse --instrument "NSE:RELIANCE-EQ" --dry-run

# Clear specific timeframe for an instrument
python manage.py clear_candlestick_warehouse -i "NSE:RELIANCE-EQ" -t "1m" -f

# Clear specific calendar year
python manage.py clear_candlestick_warehouse -i "NSE:RELIANCE-EQ" -y 2024 -f

# Clear entire warehouse across all instruments and timeframes
python manage.py clear_candlestick_warehouse --all -f
```

**Options**:
- `-i, --instrument INSTRUMENT`: Target instrument by canonical ID (e.g. `NSE:RELIANCE-EQ`) or symbol.
- `-t, --timeframe TIMEFRAME`: Bar resolution (`1m`, `5m`, `15m`, `1h`, `1d`).
- `-y, --year YEAR`: Target specific calendar year (e.g. `2024`).
- `--all`: Clear all warehouse data across all symbols.
- `--dry-run`: Simulate operation without deleting files.
- `-f, --force, --yes` or `--no-input`: Skip confirmation prompt.
- `--keep-coverage`: Keep `CandleCoverage` records (only delete Parquet files).

**Alias**: `clear_warehouse` (same flags).

---

## 5. Strategies, Templates & Backtesting

### `seed_starter_strategies`
Adds the built-in starter strategy templates (one JSON file per template in `apps/strategies/starters/`, 15 in all: the original ten, `nifty_htf_trend`, `candle_pattern_reversal`, `smc_session_levels`, `heikin_pivot_momentum` and `ema_crossover_trend_4h`) to the Strategy database. Without `--force` only missing templates are added.

```bash
# Seed missing starter strategy templates
python manage.py seed_starter_strategies

# Force overwrite existing templates with the latest code defaults
python manage.py seed_starter_strategies --force
```

**Alias**: `sync_starter_templates` (same `--force` flag).

### `export_node_catalog`
Regenerates the node catalogue section of `docs/02_visual_strategy_builder.md` from the node registry (`apps/strategies/nodes/`). Run it after adding or changing a node; a test fails when the committed doc is stale.

```bash
python manage.py export_node_catalog           # rewrite the doc section
python manage.py export_node_catalog --check   # exit 1 when the doc is out of date
python manage.py export_node_catalog --print   # print the section
```

### `verify_strategy_platform`
Reports the strategy platform in one place and exits 1 on any problem: the registry (node counts by kind, advanced nodes), the pinned library versions (TA-Lib, smartmoneyconcepts, pandas, NumPy, Lightweight Charts), the starter templates and their validity, whether the docs catalogue matches the registry, and the result of the platform's contract tests (registry, catalogue nodes, exit rules, builder round trip, quant causality, golden backtests).

```bash
python manage.py verify_strategy_platform            # full check, runs the contract tests
python manage.py verify_strategy_platform --no-tests # report only
python manage.py verify_strategy_platform --json     # machine-readable report
```

---

## 6. AI Models, Market Regime & Stock Analysis

### `eval_regime_model`
Evaluates the macro market regime classification accuracy of configured LLM providers against historical benchmark cases.

```bash
# Run evaluation with active AI configuration
python manage.py eval_regime_model

# Run evaluation with specific model ID
python manage.py eval_regime_model --model "anthropic/claude-sonnet-5.5"

# Run evaluation with specific provider
python manage.py eval_regime_model --provider "openrouter"
```

---

## 7. Security, Access Control & Disaster Recovery

### `setup_access_groups`
Configures the role-based access control (RBAC) groups in Django: **Viewer**, **Trader**, **Admin** and **Investor** (the model permissions of an invited tenant owner; the admins scope the rows).

```bash
# Initialize access groups and assign permissions
python manage.py setup_access_groups

# Reset existing permissions and reapply canonical definitions
python manage.py setup_access_groups --reset
```

---

### `invite_investor`
Invite-only onboarding: creates an investor's staff login (no password, **Investor** group), their tenant and a default risk profile, then prints a one-time `/accounts/set-password/…` link (valid for `PASSWORD_RESET_TIMEOUT`, built from `SITE_URL`) to send them. Live trading stays off for the tenant until an operator enables it. While `TENANCY_ENFORCED` is off it refuses unless `--allow-unenforced` is passed.

```bash
python manage.py invite_investor asha --email asha@example.com --name "Asha" --allow-unenforced
```

---

### `tenancy_readiness`
Checks what switching `TENANCY_ENFORCED` on would change or break, and exits non-zero on blockers:
- **Blockers:** no tenant exists, or tenant-owned rows have no tenant.
- **Warnings:**
  - tenants without a connected Fyers account (no live NSE prices or intraday history for them);
  - broker accounts without their own app key and secret;
  - broker accounts with no tenant (nothing uses them: there is no platform data account);
  - broker keys still set in `.env` (ignored);
  - `MCP_SSE_TOKEN` still set;
  - staff logins with no tenant;
  - tenants with live trading off.

```bash
python manage.py tenancy_readiness
```

### `export_tenant`
Writes every row one tenant owns, plus its owner's preferences, notifications, saved screens and API tokens, to `data/exports/tenant-<id>-<timestamp>.json`. Broker access/refresh tokens, broker app keys and secrets, and API token hashes are left out. The tenant is given by id or by its owner's username.

```bash
python manage.py export_tenant alice
```

### `offboard_tenant`
Owner-run. Without `--delete` it is reversible: it suspends the tenant (login refused), switches live trading off, revokes its API tokens, runs the tenant kill switch and exports the data. Set the tenant ACTIVE again in Tenants to undo.

With `--delete --confirm "<exact tenant name>"` it then **permanently** deletes every row the tenant owns and the tenant itself, and deactivates the owner's login (kept for the audit trail). It refuses while any runner still holds positions or orders, and for a tenant owned by an operator. Take a database backup first.

```bash
python manage.py offboard_tenant alice
python manage.py offboard_tenant alice --delete --confirm "Alice"
```

---

### `backup_data`
Backs up the database and creates a compressed snapshot of the Parquet warehouse. On SQLite it uses the online backup API (`db_backup_<timestamp>.sqlite3`); on PostgreSQL it writes a `dumpdata` JSON dump with natural foreign keys (`db_backup_<timestamp>.json`). Both go to `data/backups/sqlite/`. If the new backup fails verification, the command exits with an error, logs `BACKUP_FAILED` and does **not** prune older backups.

```bash
# Create standard backup in data/backups/
python manage.py backup_data

# Create backup and verify integrity immediately
python manage.py backup_data --verify

# Retain last 14 historical backup archives (pruning older)
python manage.py backup_data --keep 14
```

**Options**:
- `--verify`: Verify the integrity of the backup immediately after creation.
- `--keep KEEP`: Number of historical backups to retain (default: `7`).

---

### `verify_backup_restore`
Runs the restore drill (also run monthly by Celery beat) and exits with an error if it fails. The newest database backup must be under 48 hours old.

- **SQLite**: the backup is restored into a temporary folder and must pass `integrity_check`, have every live table and match the live database's latest migration.
- **PostgreSQL**: the JSON dump is checked against the live schema without being loaded: every record must parse, its models and fields must exist in the live models, it must carry every field the live models have (otherwise it predates a migration), and every live table that has rows must be in it. It is not loaded into a scratch database because the data migrations here don't use `.using(alias)` and would run against the live database.
- **Parquet**: the newest warehouse snapshot must extract safely and every file in it must be readable.

```bash
python manage.py verify_backup_restore
```

---

### `delete_by_id` / `delete_model_entry`
Deletes Django model entries by primary key ID with cascade dependency preview, dry-run safety, and automated AuditLog recording.

```bash
# Delete single record with interactive confirmation
python manage.py delete_by_id strategies.Strategy 15

# Delete multiple records (space-separated or comma-separated)
python manage.py delete_by_id Strategy 15 16 17
python manage.py delete_by_id BacktestRun 31,32,33 -y

# Preview what will be deleted and what related objects will cascade
python manage.py delete_by_id core.AuditLog 100 101 --dry-run

# Abort if any related objects would be cascade-deleted
python manage.py delete_by_id Strategy 16 --prevent-cascade

# List all registered models across installed applications
python manage.py delete_by_id --list-models
```

**Aliases**: `delete_model_entry`, `delete_model_entries`

**Options**:
- `model`: Target model specified as `app_label.ModelName` or unqualified `ModelName` (case-insensitive).
- `ids`: One or more primary key IDs.
- `--ids`: Alternative flag to pass IDs (e.g. `--ids 1 2 3`).
- `--dry-run`: Preview matching records and cascaded objects without deleting.
- `-y`, `--yes`, `--force`, `--no-input`: Bypass interactive confirmation prompt.
- `--prevent-cascade`: Abort deletion if any related objects would be cascade-deleted.
- `--no-audit`: Skip creating an `AuditLog` entry for this operation.
- `--list-models`: Display all registered models across installed applications.

---

## 8. Background Workers & Celery Schedulers

Niveshmarg Edge uses **Celery** with **Redis** for distributed task execution and scheduled cron jobs.

### Start Celery Worker
Runs worker threads to process async tasks (order processing, data downloads, AI analysis):
```bash
celery -A config worker --loglevel=info -c 4
```

### Start Celery Beat (Periodic Scheduler)
Schedules the periodic jobs in `CELERY_BEAT_SCHEDULE` (`config/settings/base.py`). Backtests, walk-forward and portfolio backtests, AI reports, news scout and chart history refills also run on the worker; without a worker they stay queued/`PENDING`.
```bash
celery -A config beat --loglevel=info
```

### Scheduled Crontab Tasks Breakdown

| Schedule | Task Name | Function | Description |
| :--- | :--- | :--- | :--- |
| **Every 1 min** | `celery-heartbeat-every-minute` | `apps.core.tasks.heartbeat_task` | Health check & worker liveness |
| **02:00 IST** | `nightly-backup-0200-ist` | `apps.core.tasks.scheduled_nightly_backup_task` | Atomic SQLite + Parquet backup |
| **03:00 IST, 1st of month**| `backup-restore-drill-monthly` | `apps.core.tasks.monthly_backup_restore_drill_task`| Automated disaster recovery drill |
| **03:30 IST** | `prune-audit-log-0330-ist` | `apps.core.tasks.prune_audit_log_task` | Delete HEARTBEAT audit rows > 2 days, AI_CALL > 90 days |
| **06:00 IST** | `sync-instruments-daily-0600-ist` | `apps.instruments.tasks.sync_all_instruments_task` | Pre-market instrument master sync |
| **07:00 IST** | `morning-news-stock-scout-0700-ist` | `apps.analysis.tasks.run_daily_news_scout_task` | Morning news scout (every day) |
| **08:30 IST** | `check-broker-tokens-0830-ist` | `apps.trading.tasks.check_broker_tokens_task` | Validate broker tokens (every day); expired → account EXPIRED, live runners PAUSED, alert. No auto-refresh. |
| **08:50 IST Mon–Fri** | `market-regime-0850-ist` | `apps.analysis.tasks.update_market_regimes_task` | NIFTY 50 regime (one LLM call) |
| **09:00 IST Mon–Fri** | `start-trading-session-0900-ist` | `apps.trading.tasks.start_trading_session_task` | Start session, reset daily P&L |
| **Every 1 min** | `reconcile-live-runners-every-minute` | `apps.trading.tasks.reconcile_active_runners_task` | Continuous position/exposure tracking |
| **Every min 14:00–15:59 Mon–Fri** | `square-off-every-minute-afternoon` | `apps.trading.tasks.enforce_daily_square_off_task` | Square-off once each risk profile's cutoff passes; skips 24x7 crypto |
| **15:45 IST Mon–Fri** | `end-trading-session-1545-ist` | `apps.trading.tasks.end_trading_session_task` | End session (counts paper sessions) |
| **16:30 IST Mon–Fri** | `eod-candle-backfill-1630-ist` | `apps.market_data.tasks.backfill_universe_history_task` | EOD daily-bar backfill (5d, 1d, instruments that already have daily bars) |
| **18:30 IST Mon–Fri** | `screener-refresh-1830-ist` | `apps.instruments.tasks.refresh_screener_data_task` | Screener data: prices and momentum, then Yahoo fundamentals in chained 100-stock chunks |

---

## 9. Docker Orchestration

Run the complete multi-service stack with Redis, Web, Celery Worker, Celery Beat, and Live Feed:

```bash
# 1. Start all services in the background
docker compose up -d

# 2. View real-time aggregated logs
docker compose logs -f

# 3. View logs for a specific service
docker compose logs -f web
docker compose logs -f celery_worker
docker compose logs -f live_feed

# 4. Execute a management command inside the running web container
docker compose exec web python manage.py migrate
docker compose exec web python manage.py populate_instruments --all
docker compose exec web python manage.py run_mcp_server --transport sse --port 8001

# 5. Gracefully stop all containers
docker compose down
```

---

## 10. Database Migrations, Health Checks & Testing

### Django System Check & Migrations
```bash
# Perform system check
python manage.py check

# Generate new migrations
python manage.py makemigrations

# Apply pending migrations
python manage.py migrate

# Inspect migration status
python manage.py showmigrations
```

### Running Test Suites
```bash
# Run all unit tests
python manage.py test tests.unit

# Run MCP server test suite
python manage.py test tests.unit.test_mcp_server

# Run chart workspace and trading tests
python manage.py test tests.unit.test_chart_workspace tests.unit.test_trading

# Run multi-agent stock analysis tests
python manage.py test tests.unit.test_multi_agent_analysis

# Run specific test method
python manage.py test tests.unit.test_mcp_server.MCPTradingToolsTestCase.test_place_paper_order_risk_breach_rejection
```


## Front-end build (chart workspace and strategy builder)

The two full-width pages use a Tailwind stylesheet built from `tailwind.config.js` and `assets/css/app.css` into `static/css/app.css` (committed, so deployments need no Node):

```bash
npm install
npm run build:css      # once, after changing templates or static/js
npm run watch:css      # while developing
```

Design tokens (palette, radii, fonts, icon rules) live in `static/css/tokens.css` and are linked directly.
