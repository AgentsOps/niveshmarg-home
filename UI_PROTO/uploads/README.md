# Niveshmarg Edge — Documentation & User Manual

Welcome to the comprehensive documentation for **Niveshmarg Edge**, an institutional-grade, modular, admin-first algorithmic trading, AI stock research, and quantitative portfolio management platform.

Niveshmarg Edge is built on **Django 6.1 (ASGI / Daphne / Channels)**, **Python 3.14**, **Django Unfold**, **PostgreSQL 17** (with SQLite WAL fallback), **DuckDB**, **Apache Parquet**, **Celery** (worker + beat), **Redis 7**, and **TradingView Lightweight Charts v5**.

---

## 📸 Platform Overview

Below is the **Institutional Trading Cockpit** in Django Unfold Admin, providing live session P&L, portfolio equity curves, risk guardrails, data warehouse depth, and AI market regime classifications:

![Institutional Trading Cockpit](screenshots/01_admin_dashboard.png)

---

## 📚 Documentation Index

The user guide is organized into modular sections covering every aspect of the platform:

| # | Guide | Topics Covered | Key Screenshot |
|---|---|---|---|
| **01** | [Getting Started](01_getting_started.md) | Architecture, Docker Compose, `.env` config, database setup, first admin login | [Admin Dashboard](screenshots/01_admin_dashboard.png) |
| **02** | [Visual Strategy Builder](02_visual_strategy_builder.md) | DAG canvas, a registry of 198 node types (TA-Lib catalogue, SMC, patterns, math, risk and exits) with typed ports, live preview with oscillator panes, node I/O telemetry | [Live Preview & Telemetry](screenshots/03_strategy_builder_preview.png) |
| **03** | [Interactive Chart Workspace](03_chart_workspace.md) | 100vw × 100vh workspace, IST time axis, multi-timeframe candles, oscillator panes, Smart Money Concepts (SMC) overlays, HUD setup card | [SMC Chart Workspace](screenshots/07_chart_workspace_smc.png) |
| **04** | [Backtesting & Quantitative Optimization](04_backtesting_and_optimization.md) | Zero look-ahead bias engine (causal SMC), statutory Indian taxes & exchange fees, rolling Walk-Forward with WFE, shared-capital portfolio backtests, background (Celery) runs | [Backtest Detail](screenshots/14_backtest_run_detail.png) |
| **05** | [Trading Runners & Risk Management](05_trading_runners_and_risk.md) | Paper trading, live execution fleet, deterministic risk guardrails, circuit breakers, 15:15 IST auto square-off | [Live Runners](screenshots/11_trading_runners_list.png) |
| **06** | [Multi-Broker Integrations](06_broker_integrations.md) | Provider abstraction, Fyers (OAuth2 + WS), Zerodha Kite, Groww, Delta Exchange (Crypto Perpetuals), token encryption | [Broker Accounts](screenshots/10_broker_accounts_list.png) |
| **07** | [Market Data & Hybrid Storage Engine](07_market_data_and_duckdb.md) | Dual-tier SQLite WAL + DuckDB Parquet warehouse, tick streaming, live bar builders, historical backfills | [Data Warehouse Depth](screenshots/01_admin_dashboard.png) |
| **08** | [AI Financial Analysis & Market Regimes](08_ai_stock_analysis.md) | OpenRouter LLM provider (routes to Claude, OpenAI, Gemini, DeepSeek… models) + Mock, multi-agent reports, macro market regime classification | [AI Research List](screenshots/13_stock_analysis_list.png) |
| **09** | [Django Unfold Administration & Operations](09_admin_dashboard_and_operations.md) | System health checks (`/healthz`), Celery workers/beat, log auditing, container maintenance | [System Health](screenshots/01_admin_dashboard.png) |
| **10** | [Model Context Protocol (MCP) Server](10_model_context_protocol_mcp.md) | Dual-transport stdio/SSE, 24 domain tools, interactive chart drawing, risk guardrails, Claude Desktop/Cursor setup | [Chart Workspace](screenshots/07_chart_workspace_smc.png) |
| **11** | [Complete Commands & CLI Reference](11_commands_and_cli_reference.md) | Comprehensive reference for all Django management commands, live feeds, Celery tasks, Docker, and testing | [System Health](screenshots/01_admin_dashboard.png) |
| **12** | [Swing Trading Suite](12_swing_trading_suite.md) | Swing Analyzer plugins (VCP/Flag/IPO/21 EMA), EOD and manual scans by industry, AI Catalyst, Celery Beat & manual workflows | [Admin Dashboard](screenshots/01_admin_dashboard.png) |
| **13** | [Swing Trading Suite: User Guide](13_swing_suite_user_guide.md) | Day-to-day use: first-time setup, the evening routine, reading candidates and their stages, acting on a Buy, manual scans, alerts, troubleshooting | [Admin Dashboard](screenshots/01_admin_dashboard.png) |
| **14** | [Screener](14_screener.md) | Filter NSE stocks and ETFs on valuation, growth, profitability and momentum; presets, saved screens, the 18:30 daily refresh (Fyers quotes, Yahoo fundamentals, warehouse momentum) | [Admin Dashboard](screenshots/01_admin_dashboard.png) |
| **15** | [Validated Strategies](15_validated_strategies.md) | Research, versioned backtests, hold-out and walk-forward validation of the RS Momentum swing strategy and the (failed) opening-range intraday study; costs, losing-trade analysis, limitations | [Backtest Detail](screenshots/14_backtest_run_detail.png) |
| **16** | [UI Design System: Glass](16_ui_design_system.md) | The `nm-*` components, glass tokens, page layout, rules (no solid surfaces, no glass in glass, transparent charts), extending the glass layer to Unfold, full-width page panels, build and checks | [Admin Dashboard](screenshots/01_admin_dashboard.png) |

---

## 🏛 System Architecture & Core Invariants

Niveshmarg Edge is engineered around strict architectural guarantees designed for institutional rigor and capital safety:

```
                                  +---------------------------------------+
                                  |         Browser Client (UI)           |
                                  | - Django Unfold Admin (Standard UI)   |
                                  | - Visual Strategy Builder (DAG View)  |
                                  | - Full-Screen Chart Workspace (SMC)   |
                                  +-------------------+-------------------+
                                                      |
                                  HTTP (REST/HTML)    |    WebSockets (Live Ticks & Telemetry)
                                                      v
                                  +---------------------------------------+
                                  |        Daphne ASGI Web Server         |
                                  |     (Django Channels + Routing)       |
                                  +-------------------+-------------------+
                                                      |
                  +-----------------------------------+-----------------------------------+
                  |                                   |                                   |
                  v                                   v                                   v
+-----------------------------------+ +-------------------------------+ +--------------------------------+
|       Trading & Strategy Engine    | |      Celery Workers & Beat     | |      Market Data & Warehouse   |
| - DAG Topological Evaluator       | | - Scheduled Data Ingestion    | | - Real-time Tick Aggregator    |
| - BacktestSimulator (0 lookahead) | | - Backtests & Walk-Forward    | | - DuckDB OLAP Engine           |
| - Deterministic Risk Guardrails   | | - Daily Broker Token Check    | | - Parquet Partitioned Files    |
| - Live Strategy Runners           | | - AI Reports & News Scout     | | - Redis Live Cache & Channel   |
+-----------------+-----------------+ +---------------+---------------+ +---------------+----------------+
                  |                                   |                                   |
                  +-----------------------------------+-----------------------------------+
                                                      |
                                                      v
                                  +---------------------------------------+
                                  |       Core Relational Storage         |
                                  |     PostgreSQL 17 / SQLite WAL        |
                                  +-------------------+-------------------+
                                                      |
                                  +-------------------+-------------------+
                                  |       External Provider APIs          |
                                  | - Brokers: Fyers, Zerodha, Groww,     |
                                  |   Delta                               |
                                  | - AI: OpenRouter (multi-model)        |
                                  +---------------------------------------+
```

### The 8 Mandatory Invariants

1. **Admin-First UI & The Two Dedicated Full-Width Pages**:
   Django Unfold Admin is the application's primary UI for all standard features (Instruments, Screener, AI Reports, Portfolio, Backtest review, Broker Sessions). Only two dedicated full-width pages exist outside Django Admin:
   - **Full-Screen Chart Workspace** (`/chart/<instrument>/`): 100vw × 100vh Lightweight Charts v5.
   - **Full-Width Visual Strategy Builder** (`/strategy/builder/<id>/`): 100vw × 100vh interactive DAG canvas.
2. **Full WebSocket Streaming**:
   Live tick and bar data flows over WebSockets (`/ws/live/<instrument>/` and `/ws/builder/preview/`). Never use client-side HTTP polling for live price feeds.
3. **Hybrid Storage: PostgreSQL 17 (or SQLite WAL) + DuckDB Parquet Warehouse**:
   PostgreSQL 17 is the primary relational backend (`psycopg`, connection pooling, connection max age) with SQLite in Write-Ahead Logging (`PRAGMA journal_mode=WAL; PRAGMA busy_timeout=5000;`) available as a local fallback for transactional state, user models, orders, and strategies. Millions of historical OHLCV bars are stored in Parquet files (`data/warehouse/`) and queried via DuckDB.
4. **Strict Provider Abstraction**:
   Brokers (`BrokerProvider`) and AI (`AIProvider`) are decoupled behind abstract interfaces; market data sources plug into the bar builder and the warehouse. No hardcoded provider checks in views or models.
5. **Deterministic Risk Guardrails**:
   AI models assist in financial statement analysis and market regime classification, but **AI never directly places live trades**. Every order must pass deterministic risk checks (daily loss limit, per-trade risk cap, kill switch, profile-based intraday square-off; 24x7 crypto is never squared off at the NSE cutoff).
6. **Zero Look-Ahead Bias**:
   Signals generated on bar $T$'s close execute strictly at bar $T+1$'s open, and SMC detectors are causal (no future bars). Intrabar dual-boundary touches resolve pessimistically (stop-loss triggers first). Statutory Indian exchange charges (STT, GST, SEBI turnover, Stamp Duty) are applied on every trade.
7. **Encrypted Credentials & Secrets**:
   Broker access tokens and API secrets are stored encrypted at rest and loaded from environment variables (`.env`).
8. **Health Monitoring & Auto-Healing**:
   `/healthz` reports `healthy`, `degraded` (HTTP 200: Redis, Celery broker, Celery worker heartbeat older than 5 min, or live feed down) or `unhealthy` (HTTP 503: database down). Broker tokens are checked daily at 08:30 IST; expired accounts are marked EXPIRED, their live runners paused and an alert raised (tokens are not auto-refreshed — brokers need an interactive login).

---

## ⚡ Quick Navigation

- Want to create an algorithmic strategy? Go to [Visual Strategy Builder Guide](02_visual_strategy_builder.md).
- Want to inspect technical charts & SMC order blocks? Go to [Interactive Chart Workspace](03_chart_workspace.md).
- Want to simulate historical backtests? Go to [Backtesting & Quantitative Optimization](04_backtesting_and_optimization.md).
- Ready to paper trade or deploy live? Go to [Trading Runners & Risk Management](05_trading_runners_and_risk.md).
