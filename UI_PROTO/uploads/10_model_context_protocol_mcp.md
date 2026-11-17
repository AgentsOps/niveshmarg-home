# Niveshmarg Edge — Model Context Protocol (MCP) Server Guide

## 1. Executive Summary & Architecture

The **Niveshmarg Edge Model Context Protocol (MCP) Server** is a dedicated, institutional-grade interface that exposes the entire analytical and execution capabilities of Niveshmarg Edge to autonomous AI agents, LLMs, and external IDE clients (including Claude Desktop, Cursor, Antigravity, and custom Python/TypeScript agents).

```
 +-------------------------------------------------------------------------+
 |                      EXTERNAL AI AGENT CLIENTS                          |
 |       Claude Desktop   |    Cursor AI IDE    |    Google Antigravity    |
 +-------------------------------------------------------------------------+
                         |                             |
                 [stdio JSON-RPC]              [SSE / HTTP POST]
                         v                             v
 +-------------------------------------------------------------------------+
 |                   NIVESHMARG EDGE MCP SERVER                            |
 |           apps/mcp/server.py (MCPServer: niveshmarg-edge)               |
 +-------------------------------------------------------------------------+
       |                  |                 |                  |
       v                  v                 v                  v
 [Market Data]     [Fundamentals]     [Strategies]      [Paper Trading]
  - Quotes          - P&L Trends       - Visual AST      - Live Runners
  - Candles         - Balance Sheet    - Templates       - Risk Engine
  - Indicators      - News & Sentiment - Backtest        - Cutoff / Kill
  - SMC Imbalance   - LangGraph Agents (0 Look-Ahead)      Switch (15:15)
       \                  |                 |                  /
        +-----------------+-----------------+-----------------+
                                  |
                                  v
                [Interactive Chart Drawing Engine]
                 - Horizontal Support / Resistance Lines
                 - Structured Trade Setup (Entry / SL / Targets)
                 - Dynamic Candle Markers & Order Blocks
                 - Clickable Deep-Link URL: /chart/<symbol>/?drawing_id=...
```

### Key Technical Invariants
1. **Admin-First Visibility**: Every chart drawing, strategy, backtest, and runner created via MCP is immediately visible and manageable through Django Unfold Admin (`/admin/mcp/chartdrawing/`, `/admin/trading/liverunner/`).
2. **Deterministic Risk Protection**: `place_paper_order` goes through the same path as chart orders: runner lock, risk engine (Daily Loss Limit, Gross Exposure Cap, Per-Trade Risk Cap, square-off cutoff), statutory charges, a PAPER `BrokerOrder`, and a position in the canonical schema.
5. **Audit Trail**: `place_paper_order` writes an `MCP_PAPER_ORDER` audit row, `square_off_positions` writes `MCP_SQUARE_OFF`, and the kill switch writes `KILL_SWITCH_TRIGGERED`.
6. **Absolute Links**: `admin_url`, report and backtest links are built from the `SITE_URL` setting (default `http://localhost:8000`). The chart-drawing tools (Category E) instead take a `base_url` argument.
3. **Zero Look-Ahead Bias**: Historical data, indicator calculations, and backtest simulations are strictly time-bound to prevent future data leakage.
4. **Clean JSON-RPC Streams**: All third-party library banner prints (e.g. `smartmoneyconcepts`) are redirected to `sys.stderr` to prevent JSON-RPC stream corruption over `stdio`.

---

## 2. Server Transports & Deployment

The server provides **Dual-Transport** flexibility:

### Transport 1: Standard I/O (`stdio`)
Used for local AI agent subprocesses where the client executes the Python interpreter directly and communicates over standard input/output streams.

```bash
# Run stdio server via manage.py
python manage.py run_mcp_server --transport stdio

# Or run standalone module
python -m apps.mcp.server --transport stdio

# Run as one tenant (its id or its owner's username): the tools then see only its rows
python manage.py run_mcp_server --transport stdio --tenant alice
```
Stdio is for operators: it runs from the server's shell. Without `--tenant` it runs as no tenant, which sees the whole desk until tenancy is enforced and only platform rows after.

### Transport 2: Server-Sent Events (`sse`)
Used for remote agents, web agents, microservices, or local agents connecting via HTTP SSE streams.

```bash
# Run SSE server listening on http://127.0.0.1:8001/sse
python manage.py run_mcp_server --transport sse --host 127.0.0.1 --port 8001
```
- **SSE Stream Endpoint**: `GET http://127.0.0.1:8001/sse`
- **Messages Endpoint**: `POST http://127.0.0.1:8001/messages/`
- **Authentication**: every request carries `Authorization: Bearer <token>`, a personal **API token** issued in **Admin › System › API Tokens** (shown once, stored only as a hash, revocable there). Missing, unknown, revoked or expired tokens get HTTP 401.
- **Tenant scope**: a session runs as its token's tenant and login. The tools only see that tenant's strategies (plus the shared starter templates), runners, reports and drawings, and the kill-switch tool halts only that tenant's runners. A session accepts messages only from the token that opened it.
- **Shared token (transition)**: the old `MCP_SSE_TOKEN` is still accepted until tenancy is enforced, as no tenant (the whole desk). With `TENANCY_ENFORCED` on it is refused.
- **Loopback rule**: only on `127.0.0.1`, `localhost` or `::1`, with no `MCP_SSE_TOKEN` and tenancy not enforced, may a client connect without a token. Any other bind needs a token on every request.

```bash
# Expose on the LAN: each client sends its own API token
python manage.py run_mcp_server --transport sse --host 0.0.0.0 --port 8001
```

---

## 3. The 24 Domain MCP Tools Catalog

### Category A: Market Data & Quantitative Indicators

#### 1. `search_market_instruments`
Search tradable instruments across NSE, BSE, and DELTA by symbol, company name, or asset class.
- **Arguments**:
  - `query` (str): Search string (e.g. `"RELIANCE"`, `"NIFTY"`, `"BTC"`).
  - `limit` (int, default `10`, max `30`): Maximum results to return.
- **Returns**: Array of instrument objects with `canonical_id`, `symbol`, `name`, `venue`, `asset_class`, `tick_size`, and `lot_size`.

#### 2. `get_live_quote`
Fetch the latest live tick or snapshot quote for an instrument.
- **Arguments**:
  - `canonical_id` (str): Instrument canonical ID (e.g. `"NSE:HFCL-EQ"`, `"NSE:NIFTY50-INDEX"`).
- **Returns**: From the live cache: `price`, `volume`, `timestamp`, `source: "live_price_cache"`. Fallback from the warehouse: `price`, `volume`, `change_pct_1d`, `snapshot_date`, `source: "daily_warehouse"`. Otherwise an `error`.

#### 3. `get_historical_candles`
Retrieve historical OHLCV candlestick bars from the local Parquet data warehouse.
- **Arguments**:
  - `canonical_id` (str): Instrument canonical ID.
  - `timeframe` (str, default `"1d"`): `"1m"`, `"5m"`, `"15m"`, `"1h"`, or `"1d"`.
  - `limit` (int, default `100`, max `1000`): Maximum bars to retrieve.
- **Returns**: Array of bars with a string ISO `timestamp` (not an epoch `time`): `[{"timestamp": "2026-11-05T09:15:00+05:30", "open": 100.0, "high": 105.0, "low": 98.0, "close": 104.0, "volume": 150000}, ...]`.

#### 4. `compute_technical_indicators`
Compute momentum indicators, volatility metrics, and Smart Money Concepts (SMC) order blocks.
- **Arguments**:
  - `canonical_id` (str): Instrument canonical ID.
  - `timeframe` (str, default `"1d"`): Bar timeframe.
  - `indicators` (str, default `"ema20,ema50,rsi,macd,volume"`): Comma-separated list (e.g. `ema9,ema20,ema50,ema200,rsi,macd,stochastic,volume,smc`).
  - `limit` (int, default `150`): Number of candles to compute over.
- **Returns**: `canonical_id`, `timeframe`, `candles_analyzed`, `latest_indicators` (last value of each series), and `full_series`.

#### 5. `get_market_regime`
Retrieve the current classified macro market regime.
- **Arguments**:
  - `canonical_id` (str): Target instrument ID.
- **Returns**: `regime`, `conviction`, `volatility`, `summary`, `created_at`; or `regime: "UNKNOWN"` with a message when no stored classification exists.

---

### Category B: Fundamentals, News, & Multi-Agent Stock Analysis

#### 6. `get_company_fundamentals`
Extract institutional financial statements, P&L trends, leverage metrics, and valuation ratios.
- **Arguments**:
  - `canonical_id` (str): Unique instrument ID (e.g. `"NSE:TCS-EQ"`, `"NSE:HFCL-EQ"`).
- **Returns**:
  - `pnl_metrics`: YoY/QoQ revenue growth, net income growth, gross/operating/net margins, quarterly trend in Crores (₹ Cr).
  - `balance_sheet`: Debt-to-Equity, current ratio, quick ratio, total cash, total debt.
  - `cash_flow`: Operating cash flow, free cash flow (FCF), FCF yield, OCF-to-PAT earnings quality ratio.
  - `valuation`: Trailing P/E, Forward P/E, P/B, EV/EBITDA.
  - `street_consensus`: Analyst consensus rating, target mean/low/high prices.

#### 7. `get_company_news`
Fetch recent financial news articles, corporate actions, and market catalysts.
- **Arguments**:
  - `canonical_id` (str): Unique instrument ID.
  - `limit` (int, default `10`): Maximum articles to retrieve.
  (`limit` is clamped to 1–25.)
- **Returns**: `canonical_id`, `articles_count`, and `articles` (each with `title`, `link`, `source`, `published`).

#### 8. `run_stock_analysis`
Trigger the full 5-Specialist LangGraph Multi-Agent Analysis Pipeline.
- **Arguments**:
  - `canonical_id` (str): Target instrument ID.
- **Pipeline Workflow**:
  1. *Fundamental Analyst*: Audits P&L, balance sheet leverage, and cash conversion.
  2. *Technical / SMC Analyst*: Maps market structure, order blocks, and key liquidity pools.
  3. *News & Sentiment Analyst*: Ingests press releases, filings, and sentiment.
  4. *Risk Auditor*: Acts as Devil's Advocate, defining the bear thesis and invalidation triggers.
  5. *CIO Synthesizer*: Formulates the final trade blueprint (Entry range, Stop-loss, Targets, Risk/Reward).
- **Returns**: `analysis_id`, `status`, `verdict`, `confidence`, `executive_summary`, `trade_setup`, `invalidation_triggers`, `scores`, `bear_thesis`, `key_levels`, and a report URL built from `SITE_URL`. If a specialist agent fails, the report is `FAILED` with no verdict.

#### 9. `get_stock_analysis_report`
Retrieve an existing stock analysis report by record ID or symbol.
- **Arguments**:
  - `canonical_id` (str, optional): Target instrument ID.
  - `analysis_id` (int, optional): Specific report ID.
- **Returns**: Full structured analysis report with verdict, confidence, executive summary, trade blueprint, and report URL (`<SITE_URL>/admin/analysis/stockanalysis/<id>/report/`).

---

### Category C: Strategies & Historical Backtesting

#### 10. `list_strategies`
List all algorithmic trading strategies defined in Niveshmarg Edge.
- **Returns**: Array of strategy records with `id`, `name`, `slug`, `version`, `status`, `is_template`, and `admin_url`.

#### 11. `get_strategy_details`
Retrieve the complete JSON AST definition and node graph for a strategy.
- **Arguments**:
  - `strategy_id` (int): Strategy database ID.
- **Returns**: Full AST definition with unwired node validation, parameters, and entry/exit logic.

#### 12. `create_strategy`
Author and validate a new algorithmic trading strategy.
- **Arguments**:
  - `name` (str): Strategy name.
  - `template_name` (str, default `"ema_pullback"`): Any `STARTER_TEMPLATES` key: `booming_bulls_ob_50`, `crypto_rsi_momentum`, `crypto_smc_institutional`, `crypto_smc_liquidity_hunter`, `crypto_trend_rider`, `ema_pullback`, `nifty_bollinger_breakout`, `nifty_vwap_supertrend`, `options_momentum_breakout`, `smc_orderblock_fvg`. Unknown names return an error listing the valid keys.
  - `description` (str, optional): Strategy thesis and notes.
  - `custom_definition` (dict, optional): Custom AST node graph dictionary.
- **Returns**: `strategy_id`, `name`, `slug`, `status`, `description`, `message`, and `admin_url` (from `SITE_URL`).

#### 13. `run_backtest`
Execute an event-driven historical backtest with zero look-ahead bias and transaction costs.
- **Arguments**:
  - `strategy_id` (int): Strategy database ID.
  - `canonical_id` (str): Instrument symbol to backtest on.
  - `timeframe` (str, default `"15m"`): Candle timeframe.
  - `initial_capital` (float, default `100000.0`): Starting capital in INR.
  - `start_date` (str, optional): Start date (`YYYY-MM-DD`), stored as the run's `date_from`.
  - `end_date` (str, optional): End date (`YYYY-MM-DD`), stored as `date_to`.
- Runs synchronously inside the MCP call (it creates a `BacktestRun` and executes it).
- **Returns**: `backtest_id`, `status`, `strategy_name`, `metrics`, `total_trades_count`, `trades_sample` (first 10), `execution_time_ms`, `chart_review_url` (`<SITE_URL>/chart/<symbol>/?markers=backtest:<run_id>&tf=<tf>`), and `admin_url`. On failure: `status: "FAILED"` with `error`.

---

### Category D: Paper Trading & Deterministic Risk Execution

#### 14. `list_paper_runners`
List all active and historical paper trading runners.
- **Returns**: Array of PAPER runners with `id`, `name`, `strategy_id`, `strategy_name`, `canonical_id`, `timeframe`, `state`, `capital`, `daily_pnl`, `cumulative_pnl`, `current_exposure`, `open_positions_count`, `open_orders_count`, and `admin_url`.

#### 15. `create_paper_runner`
Initialize a new paper trading runner bound to a strategy and risk profile.
- **Arguments**:
  - `strategy_id` (int): ID of strategy to execute.
  - `canonical_id` (str): Instrument to trade (must be in the active universe).
  - `capital` (float, default `100000.0`): Allocated simulated capital.
  - `timeframe` (str, default `"15m"`): Bar timeframe.
  - `name` (str, optional): Runner name.
  - `risk_profile_id` (int, default `0`): Risk profile ID; `0` uses the default profile. An unknown ID returns an error.
- **Returns**: `runner_id`, `name`, `mode`, `state` (`STOPPED`), `capital`, `canonical_id`, `timeframe`, `admin_url`, `message`.

#### 16. `start_paper_runner`
Start a paper runner (transitions state to `ACTIVE`).
- **Arguments**:
  - `runner_id` (int): Runner ID.

#### 17. `stop_paper_runner`
Stop an active paper runner (transitions state to `STOPPED`).
- **Arguments**:
  - `runner_id` (int): Runner ID.

#### 18. `place_paper_order`
Submit a paper order validated against deterministic risk guardrails.
- **Arguments**:
  - `runner_id` (int): Target runner ID.
  - `direction` (str): `"BUY"` or `"SELL"`.
  - `quantity` (int): Shares / contracts.
  - `order_type` (str, default `"MARKET"`): only `"MARKET"` is supported; anything else returns an error.
  - `price` (float, optional): Fill price (if 0.0, uses the current market price).
  - `stop_loss` (float, optional): Invalidation price level (recommended for per-trade risk check).
  - `take_profit` (float, optional): Target price level.
- **Guardrail Enforcement**:
  - If daily loss exceeds `max_daily_loss`: **REJECTED**.
  - If order notional exceeds `max_gross_exposure`: **REJECTED**.
  - If calculated loss at stop loss exceeds `max_per_trade_risk`: **REJECTED**.
  - If past the risk profile's square-off cutoff: **REJECTED**.
- Only PAPER runners are accepted. A successful fill writes an `MCP_PAPER_ORDER` audit row.
- **Returns**: `status`, `position_id`, `runner_id`, `canonical_id`, `direction`, `quantity`, `fill_price`, `stop_loss`, `take_profit`, `exposure_inr`, `message`; or `status: "REJECTED"` with `reason`.

#### 19. `get_paper_portfolio`
Retrieve portfolio snapshot across all paper runners or a specific runner.
- **Arguments**:
  - `runner_id` (int, optional): Specific runner ID (0 aggregates all paper runners).
- **Returns**: `open_positions_count`, `total_exposure_inr`, `total_daily_pnl_inr`, and `positions` (each with entry/current price, `unrealized_pnl`, `stop_loss`, `target`).

#### 20. `square_off_positions`
Square off all open positions for a runner and reset exposure to zero.
- **Arguments**:
  - `runner_id` (int): PAPER runner ID. (The reason is fixed: `"Manual square-off via MCP"`.)
- Writes an `MCP_SQUARE_OFF` audit row.
- **Returns**: `runner_id`, `status: "SQUARED_OFF"`, `closed_count`, `flattened_positions`, `message`.

#### 21. `emergency_kill_switch`
Global emergency circuit breaker. Cancels pending orders, flattens open positions, and latches runners in `KILL_SWITCH_ACTIVE`.
- **Arguments**:
  - `runner_id` (int, default `0`): Target runner ID, or `0` for global stop across all active runners.
- Each halted runner writes a `KILL_SWITCH_TRIGGERED` audit row.
- **Returns**: `status: "KILL_SWITCH_ACTIVE"`, `runners_halted`, `details` (per runner), and `message`.

---

### Category E: Interactive Chart Drawing & Visualization

#### 22. `draw_on_chart`
Draw visual technical annotations (horizontal support/resistance lines, trade setups with Entry/SL/Target brackets, and candle-anchored markers) on an instrument's chart, and generate an interactive, clickable browser URL to inspect it.
- **Arguments**:
  - `canonical_id` (str): Instrument symbol (e.g. `"NSE:HFCL-EQ"`).
  - `timeframe` (str, default `"15m"`): View timeframe (`"1m"`, `"5m"`, `"15m"`, `"1h"`, `"1d"`).
  - `title` (str): Title describing the drawing or technical setup.
  - `description` (str, optional): Invalidation notes or trade rationale.
  - `horizontal_lines` (list of dicts, optional):
    ```json
    [
      {"price": 128.50, "title": "Resistance", "color": "#EF4444", "line_style": "dashed"},
      {"price": 115.00, "title": "Major Support", "color": "#22C55E", "line_style": "solid"}
    ]
    ```
  - `trade_setup` (dict, optional):
    ```json
    {
      "action": "BUY",
      "entry": 120.00,
      "stop_loss": 114.50,
      "target_1": 130.00,
      "target_2": 138.00
    }
    ```
  - `markers` (list of dicts, optional):
    ```json
    [
      {"time": 1730000000, "text": "Bullish Order Block", "position": "belowBar", "color": "#6366F1", "shape": "arrowUp"}
    ]
    ```
  - `base_url` (str, default `"http://localhost:8000"`): Base application URL.
- **Returns**:
  ```json
  {
    "drawing_id": 4,
    "canonical_id": "NSE:HFCL-EQ",
    "title": "HFCL Pullback to Order Block",
    "chart_url": "http://localhost:8000/chart/NSE:HFCL-EQ/?drawing_id=4&tf=15m",
    "summary": "2 price line(s), BUY trade setup (Entry: ₹120.00, SL: ₹114.50, Tgt: ₹130.00), 1 marker(s)",
    "message": "Successfully drawn 2 price line(s)... Open the chart URL to view interactive chart."
  }
  ```

#### 23. `get_chart_url`
Generate an interactive chart URL with pre-configured query indicators and price levels.
- **Arguments**:
  - `canonical_id` (str): Instrument symbol.
  - `timeframe` (str, default `"1d"`): Timeframe.
  - `indicators` (str, default `"ema20,ema50,volume"`): Enabled indicator overlays.
  - `levels` (str, optional): Comma-separated price levels (`"120.5:Support,130:Target"`).
  - `markers` (str, optional), `drawing_id` (int, default `0`), `base_url` (str, default `"http://localhost:8000"`).
- **Returns**: Formatted browser URL.

#### 24. `list_chart_drawings`
List saved technical drawings and their interactive chart URLs.
- **Arguments**:
  - `canonical_id` (str, optional): Filter by instrument.
  - `limit` (int, default `15`): Maximum drawings to return.
  - `base_url` (str, default `"http://localhost:8000"`): Base for the returned links.
- **Returns**: List of drawing summaries with `drawing_id`, `chart_url`, and Unfold `admin_url`.

---

## 4. Client Integration Guide

### A. Claude Desktop Integration
Add the following configuration to `~/.config/Claude/claude_desktop_config.json` (Linux) or `%APPDATA%\Claude\claude_desktop_config.json` (Windows):

```json
{
  "mcpServers": {
    "niveshmarg-edge": {
      "command": "/home/agentsops/Projects/P-Niveshmarg-Edge/C-Niveshmarg-Edge/niveshmarg-edge/.venv/bin/python",
      "args": [
        "/home/agentsops/Projects/P-Niveshmarg-Edge/C-Niveshmarg-Edge/niveshmarg-edge/manage.py",
        "run_mcp_server",
        "--transport",
        "stdio"
      ],
      "cwd": "/home/agentsops/Projects/P-Niveshmarg-Edge/C-Niveshmarg-Edge/niveshmarg-edge",
      "env": {
        "DJANGO_SETTINGS_MODULE": "config.settings.development",
        "PYTHONUNBUFFERED": "1"
      }
    }
  }
}
```

### B. Cursor IDE Integration
Add to `.cursor/mcp.json` in your workspace root:

```json
{
  "mcpServers": {
    "niveshmarg-edge": {
      "command": "/home/agentsops/Projects/P-Niveshmarg-Edge/C-Niveshmarg-Edge/niveshmarg-edge/.venv/bin/python",
      "args": [
        "/home/agentsops/Projects/P-Niveshmarg-Edge/C-Niveshmarg-Edge/niveshmarg-edge/manage.py",
        "run_mcp_server",
        "--transport",
        "stdio"
      ],
      "cwd": "/home/agentsops/Projects/P-Niveshmarg-Edge/C-Niveshmarg-Edge/niveshmarg-edge",
      "env": {
        "DJANGO_SETTINGS_MODULE": "config.settings.development",
        "PYTHONUNBUFFERED": "1"
      }
    },
    "niveshmarg-edge-sse": {
      "url": "http://127.0.0.1:8001/sse",
      "type": "sse",
      "headers": {"Authorization": "Bearer <your API token>"}
    }
  }
}
```

### C. Automatic Export Command
To generate the latest configuration for your exact local directory structure:
```bash
python manage.py export_mcp_config
```
To print raw JSON for piping into a configuration file:
```bash
python manage.py export_mcp_config --format json > .cursor/mcp.json
```
Flags: `--format {all,claude,cursor,antigravity,json}` (default `all`), `--host`, `--port`.

---

## 5. Verification & Testing

The MCP module is verified by unit and regression test suites in `tests/unit/test_mcp_server.py`:
- 14 test cases covering server initialization, tool registration, market data queries, fundamental statements, strategy creation, risk guardrail breach rejections, chart drawing persistence, chart history API layer extraction, and management commands.
- Run tests anytime:
  ```bash
  python manage.py test tests.unit.test_mcp_server
  ```
