# Getting Started with Niveshmarg Edge

This guide walks you through setting up, configuring, and launching Niveshmarg Edge using Docker Compose or a local development environment.

---

## 1. Prerequisites

Before starting, ensure you have the following installed on your host system:
- **Docker Engine** (v24.0 or later) & **Docker Compose v2**
- **Git**
- Optional (for local host development without containers):
  - Python 3.14 (Django 6.1)
  - Redis 7+
  - Google Chrome (for automated browser testing and documentation snapshots)

---

## 2. Docker Architecture

Niveshmarg Edge runs six orchestrated microservices via `docker-compose.yml`:

| Container Name | Role | Ports / Mounts |
|---|---|---|
| `niveshmarg_web` | ASGI Daphne Web Server (Django Channels, Admin, REST APIs, WebSockets) | `${PORT:-8000}->8000` |
| `niveshmarg_postgres` | PostgreSQL 17 primary relational database | `${POSTGRES_HOST_PORT:-5433}->5432` / `postgres_data` volume |
| `niveshmarg_redis` | In-memory message broker for Celery and Django Channels layer | `${REDIS_HOST_PORT:-6381}->6379` |
| `niveshmarg_celery_worker` | Asynchronous worker pool: backtests, walk-forward, portfolio backtests, AI stock reports, news scout, chart history refills | Internal network |
| `niveshmarg_celery_live_worker` | Live bars only (`live_bars` queue): each runner's closed bar is processed here, never behind a backtest. The main worker also drains this queue as a fallback | Internal network |
| `niveshmarg_celery_beat` | Periodic scheduler (square-off pass, EOD candle backfill, broker token check, backups, instrument sync) | Internal network |
| `niveshmarg_live_feed` | Persistent WebSocket client to broker feeds (Fyers / Delta) streaming to Redis | Internal network |

All services share persistent storage:
- `./data/`: Houses the DuckDB Parquet warehouse (`data/warehouse/`), backups, and cache.
- `postgres_data`: Persistent volume for PostgreSQL database files.
- `./media/`: User-uploaded assets and exported analysis reports.

Only `web` runs migrations; `celery_worker`, `celery_live_worker`, `celery_beat` and `live_feed` start after `web` passes its `/healthz` healthcheck. The image defaults to `DJANGO_ENV=production`.

> **Background jobs need the worker.** Backtests (admin save / re-run), walk-forward, portfolio backtests, AI stock reports, news scout and chart history refills run on Celery. If `celery_worker` is not running they stay queued / `PENDING`.

---

## 3. Environment Configuration (`.env`)

Copy the example environment file and configure your credentials:

```bash
cp .env.example .env
```

Key environment variables:

```ini
# Django Core Settings
DJANGO_ENV=development
SECRET_KEY=your-production-secret-key-min-40-chars
DEBUG=True
ALLOWED_HOSTS=localhost,127.0.0.1,0.0.0.0
SITE_URL=http://localhost:8000      # used for links in MCP results
LOG_LEVEL=INFO

# Database (PostgreSQL Default / SQLite Fallback)
DB_ENGINE=postgresql
POSTGRES_DB=niveshmarg_edge
POSTGRES_USER=niveshmarg
POSTGRES_PASSWORD=niveshmarg_secret
POSTGRES_HOST=postgres
POSTGRES_PORT=5432
POSTGRES_HOST_PORT=5433

# Analytical Warehouse & Cache
WAREHOUSE_PATH=
REDIS_URL=redis://redis:6379/0
CELERY_BROKER_URL=redis://redis:6379/0

# Fernet key for encrypting broker tokens at rest
FIELD_ENCRYPTION_KEY=your_fernet_key

# Brokers: no keys here. Each broker account carries its own app key and secret
# (Admin > Brokers). OAuth callbacks are SITE_URL + /brokers/callback/<broker>/.
SITE_URL=http://localhost:8000

# AI (OpenRouter routes to Anthropic, OpenAI, Google, DeepSeek… models by model id)
AI_PROVIDER=openrouter              # openrouter | mock
OPENROUTER_API_KEY=your_openrouter_key
AI_DEFAULT_MODEL=anthropic/claude-sonnet-5.5

# MCP server over SSE: clients use personal API tokens (Admin > API Tokens). This shared
# token is accepted only until TENANCY_ENFORCED is on.
MCP_SSE_TOKEN=
```

Risk limits (daily loss, per-trade cap, square-off time) are not env vars; configure them in **Admin > Risk Profiles**.

> **Not yet implemented (roadmap):** direct Gemini / OpenAI / Anthropic / Ollama providers (`GEMINI_API_KEY`, `ANTHROPIC_API_KEY`, `OPENAI_API_KEY`). Use OpenRouter model ids instead.

---

## 4. Starting the Application

Launch the full stack in detached mode:

```bash
docker compose up -d
```

Check the health status of all running containers:

```bash
docker compose ps
```

Expected output:
```text
NAME                     COMMAND                  SERVICE         STATUS
niveshmarg_web           "/app/entrypoint.sh …"   web             Up (healthy)
niveshmarg_redis         "docker-entrypoint.s…"   redis           Up (healthy)
niveshmarg_celery_worker "/app/entrypoint.sh …"   celery_worker   Up
niveshmarg_celery_live_worker "/app/entrypoint.sh …" celery_live_worker Up
niveshmarg_celery_beat   "/app/entrypoint.sh …"   celery_beat     Up
niveshmarg_live_feed     "/app/entrypoint.sh …"   live_feed       Up
```

---

## 5. Database Initialization & First Login

1. **Run Database Migrations**:
   `entrypoint.sh` automatically waits for PostgreSQL to become reachable and runs migrations when the `web` (daphne) container starts; other services do not migrate. To execute manually inside the container:
   ```bash
   docker exec -it niveshmarg_web python manage.py migrate
   ```

2. **Verify Connected Database**:
   Confirm that Django is connected to PostgreSQL:
   ```bash
   docker exec -it niveshmarg_web python manage.py shell -c "from django.db import connection; print('Database engine:', connection.vendor, 'database:', connection.settings_dict['NAME'])"
   # Output: Database engine: postgresql database: niveshmarg_edge
   ```
   *(If running with `DB_ENGINE=sqlite` fallback, verify WAL mode: `docker exec -it niveshmarg_web python manage.py shell -c "import sqlite3; con=sqlite3.connect('data/db.sqlite3'); print('WAL mode:', con.execute('PRAGMA journal_mode;').fetchone())"`)*.

3. **Create Superuser**:
   ```bash
   docker exec -it niveshmarg_web python manage.py createsuperuser
   ```
   Follow the prompts to specify an admin username and password.

4. **Access the Web Dashboard**:
   Open your browser to:
   [http://localhost:8000/admin/](http://localhost:8000/admin/)

   Enter your superuser credentials to access the **Institutional Trading Cockpit**:

   ![Institutional Trading Cockpit](screenshots/01_admin_dashboard.png)

---

## 6. Syncing Starter Templates & Instruments

Populate default quantitative strategy templates (EMA Pullbacks, SMC Breakouts, Bollinger Volatility Breakouts) and instrument master lists:

```bash
# Sync built-in strategy starter templates (adds missing ones; --force overwrites)
docker exec -it niveshmarg_web python manage.py sync_starter_templates

# Ingest instruments (no flag = all; or --nse-stocks / --nse-etfs / --delta-crypto)
docker exec -it niveshmarg_web python manage.py sync_instruments

# Optional: backfill candles from Yahoo (--symbol X, or --covered for instruments that already have bars)
docker exec -it niveshmarg_web python manage.py backfill_candles --symbol NSE:SBIN-EQ --timeframes 1d,1h,15m
```

`sync_starter_templates` is an alias of `seed_starter_strategies`; `sync_instruments` / `ingest_instruments` are aliases of `populate_instruments`. Yahoo caps intraday history per timeframe (1m: 7 days, 5m/15m/30m: 60 days, 1h: 730 days).

Once synced, navigate to **Strategies** in the admin sidebar:

![Strategies List](screenshots/08_strategies_admin_list.png)

---

## 7. System Health Verification

Niveshmarg Edge provides a centralized diagnostic endpoint at `/healthz`:

```bash
curl -s http://localhost:8000/healthz | jq
```

Response (anonymous callers get only the status):
```json
{
  "status": "healthy"
}
```

Status is `healthy`, `degraded` (HTTP 200 — Redis, Celery broker, Celery worker heartbeat older than 5 minutes, or live feed down) or `unhealthy` (HTTP 503 — database down).

When authenticated as a staff member, the endpoint also returns `components`:
- `database`: SQLite connection status
- `redis_channel_layer`: Redis / Channels reachability
- `celery`: Celery broker reachability
- `celery_worker`: seconds since the last worker heartbeat
- `market_data_feed`: live feed status (`unconfigured` does not count against health)

Warehouse integrity is checked separately with `python manage.py verify_warehouse_integrity` (exits non-zero on problems).
