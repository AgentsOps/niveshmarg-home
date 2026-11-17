# Market Data Pipeline & Hybrid DuckDB Storage

Niveshmarg Edge uses a high-performance **dual-tier storage architecture** designed to handle millions of historical OHLCV candles without bloating relational database files or degrading transactional performance.

---

## 1. Dual-Tier Storage Architecture

Traditional algorithmic trading systems store historical tick and candle data directly in PostgreSQL or MySQL, leading to table bloat, slow migrations, and sluggish admin queries.

Niveshmarg Edge separates transactional state from analytical time-series:

```
+-------------------------------------------------------------------------+
|                        Niveshmarg Edge Data Layer                       |
+------------------------------------+------------------------------------+
|         Transactional Tier         |          Analytical Tier           |
|     (PostgreSQL / SQLite WAL)      |       (DuckDB + Parquet Files)     |
+------------------------------------+------------------------------------+
| - Users, Auth, Sessions            | - Billions of Historical Candles   |
| - Strategies, DAG Definitions      | - Multi-year 1m, 5m, 15m, 1d Bars  |
| - Broker Orders & Executions       | - Partitioned Columnar Storage     |
| - Live Runners & Risk Profiles     | - Vectorized OLAP Queries          |
| - Audit Logs & Event Traces        | - Direct NumPy/Pandas Interop      |
+------------------------------------+------------------------------------+
```

### Why DuckDB + Apache Parquet?
- **Columnar Compression**: Parquet achieves 85%+ compression ratios on OHLCV data.
- **Blazing Speed**: DuckDB executes vectorized aggregations over millions of rows in sub-50ms latency.
- **Zero Lock Contention**: Backtests reading years of data never block live trading order writes in PostgreSQL.

---

## 2. Parquet Warehouse Partitioning

Candle files are stored under `data/warehouse/` (override with `WAREHOUSE_PATH`) using Hive-style directory partitioning, one Parquet file per calendar year:
```text
data/warehouse/
└── instrument=NSE_SBIN-EQ/
    ├── timeframe=1m/
    │   └── 2026.parquet
    ├── timeframe=5m/
    │   └── 2026.parquet
    ├── timeframe=15m/
    │   └── 2026.parquet
    ├── timeframe=1h/
    │   └── 2026.parquet
    └── timeframe=1d/
        ├── 2023.parquet
        ├── 2024.parquet
        ├── 2025.parquet
        └── 2026.parquet
```

Timestamps are stored in UTC. Resampled NSE bars are aligned to the session open in IST (30m: 09:15, 09:45…; 1h: 09:15, 10:15…) and daily bars to IST midnight; crypto (`DELTA:`) bars use UTC hours.

This structure enables **partition pruning**: when a strategy evaluates on `NSE:SBIN-EQ` for `timeframe=15m`, DuckDB reads only that specific directory without scanning the rest of the warehouse.

The **Data Warehouse Depth** card on the dashboard monitors total partition health:

![Warehouse Depth Dashboard](screenshots/01_admin_dashboard.png)

---

## 3. Multi-Asset Instruments Master

Navigate to **Markets > Instruments** in Django Admin to browse supported assets:

![Instruments Repository](screenshots/12_instruments_list.png)

### Canonical Identifier Standard:
Every instrument across all venues follows a standard `<VENUE>:<SYMBOL>-<ASSET_CLASS>` format:
- **Indian Equities**: `NSE:SBIN-EQ`, `NSE:RELIANCE-EQ`, `NSE:TCS-EQ`
- **Indices & Benchmarks**: `NSE:NIFTY50-INDEX`, `NSE:NIFTYBANK-INDEX`
- **Crypto Perpetuals**: `DELTA:BTCUSD-CRYPTO`, `DELTA:ETHUSD-CRYPTO`, `DELTA:XAUTUSD-CRYPTO`

---

## 4. Real-Time Bar Builder & Tick Ingestion

The dedicated `niveshmarg_live_feed` container (`python manage.py run_live_feed`) maintains persistent WebSocket feeds with upstream brokers (Fyers for NSE/BSE, Delta's public feed for crypto), reconnecting with backoff:
1. **Tick Reception**: Receives streaming ticks (price, volume, timestamp).
2. **Bar Accumulation**: Aggregates ticks into the active 1-minute candle.
3. **Clock Close**: A 1m bar closes on the clock (~2 s after the minute ends), even if no later tick arrives.
4. **Broadcast & Persist**: Closed bars are pushed to the Redis channel layer (live charts and strategy runners) and flushed to the Parquet warehouse in batches.
5. **Bar Rollup**: At each flush, closed 1m bars are rolled up into any **missing** 5m, 15m, 30m and 1h bars.

Celery also runs an EOD daily-candle backfill at 16:30 IST (Mon–Fri, instruments that already have daily bars), and the chart refills missing history in the background.

---

## 4b. Historical Candle Management (`apps.market_data.history`)

Backtests (and the chart's on-demand refill) do not fetch candles themselves; they ask the history service to make a period available:

1. **Plan** (`plan_history`): the sessions that should exist in the period (NSE trading days from the holiday calendar, IST; every UTC day for crypto; only sessions that have closed) are compared with the stored bars. A session is *missing* when it has no bars and *partial* when its intraday bars do not reach the open and the close or have a hole wider than two bars.
2. **Fill** (`fill_history`): only the missing or partial session ranges are fetched from one `HistorySource`: the selected broker account, else the first registered provider covering the instrument's venue, else Yahoo Finance. Requests are chunked and paced by the provider's `history_capabilities()`; rate limits and server errors are retried with backoff; auth failures are not. Every batch goes through `validate_candles` (normalise to UTC, drop missing or impossible prices, negative volume, duplicates and off-grid intraday bars; relabel daily bars to the IST-midnight grid) and is upserted with `write_candles`. The range asked for is recorded on `CandleCoverage.verified_ranges` so a session the provider has nothing for is not requested on every run.
3. **Verify** (`ensure_history`): the plan runs again and a `HistoryReport` (sessions expected, bars stored, source, requests, bars fetched and written, rows dropped, remaining gaps) is returned; remaining gaps raise `IncompleteHistory` unless the caller allows partial data. A per-instrument/timeframe lock (Redis, in-process fallback) keeps two jobs from downloading the same ranges.

DuckDB prunes by the instrument/timeframe partition directory and the year file, and reads only the row groups whose timestamp statistics overlap the requested range, so a backtest's range read never scans other instruments or years.

---

## 5. Ingestion & Maintenance Management Commands

Populate or verify warehouse historical data using standard Django management commands:

```bash
# Ingest master instruments list (alias of populate_instruments; no flag = all)
docker exec -it niveshmarg_web python manage.py sync_instruments [--all|--nse-stocks|--nse-etfs|--delta-crypto] [--refresh-live]

# Backfill historical candles from Yahoo for one symbol, or for every covered instrument
docker exec -it niveshmarg_web python manage.py backfill_candles --symbol NSE:SBIN-EQ --days 365 --timeframes 1d,1h,15m
docker exec -it niveshmarg_web python manage.py backfill_candles --covered

# Integrity check across all Parquet partitions (exits non-zero on problems)
docker exec -it niveshmarg_web python manage.py verify_warehouse_integrity [--instrument X] [--timeframe tf] [--fix-coverage]

# Fix bars written on the old UTC grid (dry run unless --apply)
docker exec -it niveshmarg_web python manage.py realign_warehouse_bars [--instrument X] [--apply]
```

- `backfill_candles` caps `--days` per timeframe (Yahoo limits; default `--days 365`, `--timeframes 1d`): 1m 7 days; 5m/15m/30m 60 days; 1h 730 days.
- `verify_warehouse_integrity` checks unreadable files, missing columns, wrong-year bars, duplicate timestamps, bad prices, negative volume, off-grid bars and coverage mismatch.
- `realign_warehouse_bars` deletes duplicates, relabels lone daily bars to IST midnight, and deletes misaligned intraday bars.
- `clear_candlestick_warehouse` (alias `clear_warehouse`) removes Parquet files (by `--instrument`, `--timeframe`, `--year` or `--all`; supports `--dry-run`) and cleans up coverage records.
