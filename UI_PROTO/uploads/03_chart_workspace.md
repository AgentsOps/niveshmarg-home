# Interactive Chart Workspace & Smart Money Concepts (SMC)

The **Chart Workspace** is a full-screen (100vw × 100vh) technical analysis, live market monitoring, and order execution environment powered by **TradingView Lightweight Charts v5**.

Access the chart workspace for any instrument:
```text
http://localhost:8000/chart/<canonical_id>/
```
Example URLs:
- `http://localhost:8000/chart/NSE:SBIN-EQ/`
- `http://localhost:8000/chart/NSE:NIFTY50-INDEX/`
- `http://localhost:8000/chart/NSE:NIFTYBANK-INDEX/` (NIFTY Bank — not `NSE:BANKNIFTY-INDEX`)
- `http://localhost:8000/chart/DELTA:BTCUSD-CRYPTO/`

---

## 1. Full-Screen Workspace Overview

![Interactive Chart Workspace](screenshots/06_chart_workspace.png)

All times are shown in **IST** (time axis and crosshair); daily bars are labelled with their IST date. Crypto bars stay on UTC hours.

### Header (40 px): identity · view · studies | context · menu

| Zone | What it holds |
| --- | --- |
| Identity | Back, the symbol search (with the venue tag), the last price and the change since the previous session's close. |
| View | The timeframe control (`1m 5m 15m 30m 1h 1D`, the one filled element) and the chart-style menu (candles, hollow candles, line, area). |
| Studies | `fx Studies` opens the side panel on the Studies tab: EMAs/SMAs, Bollinger Bands, Supertrend, session VWAP (intraday only) and Ichimoku on the price pane, Volume, RSI, MACD, Stochastic, ATR and ADX in their own panes, the SMC overlay, and the strategy's own studies on a backtest chart. |
| Context | The backtest chip (only with `markers=backtest:`), the Runner pill (its dot is the state: green active, amber paused, grey stopped, red kill switch; the badge is the open signal count; click opens the Runner tab), the live-feed dot, fullscreen. |
| `⋯` menu | Fix candles (repair and backfill this timeframe), copy chart link, open the instrument in the admin, the AI market-regime detail, the command palette, the keyboard shortcuts list, and **Reset layout**. |

The legend line under the header shows the hovered bar's OHLC and change, the active price studies with their value at that bar (`EMA 20 964.18 · EMA 50 983.28`, colour-coded), and the regime tag. The floating **AUTO** button and the footer's `% · log · auto` reset the scales; the footer also holds the range presets, market state and the IST clock.

Styling comes from `static/css/tokens.css` (one dark palette shared with the builder; floating panels over the chart are frosted glass, see [UI Design System](16_ui_design_system.md#7-full-width-pages-chart-workspace-strategy-builder)) and `static/css/app.css`, built locally with `npm run build:css` (Tailwind 3; the source is `assets/css/app.css`, the config `tailwind.config.js`). Inter and Material Symbols are served from the app's own static files, so the page needs no CDN to render; JetBrains Mono still comes from Google Fonts and falls back to the system monospace.

### Keyboard, command palette and the symbol switcher

| Key | Action |
| --- | --- |
| `⌘K` / `Ctrl+K` | Command palette: symbols (favourites and recents, then a server search as you type), timeframes, every study as show/hide, chart styles and actions (fit, studies, runner, fix candles, copy link, favourite, reset layout, fullscreen, backtest navigation). Arrow keys and Enter run the highlighted row. |
| `/` | Focus the symbol search. Empty, it lists **Favourites** then **Recent** symbols; each row has a star to favourite or unfavourite, and the star next to the venue tag does the same for the current symbol. `↓` moves into the list. |
| `1` – `6` | Timeframe `1m` … `1D`. |
| `F` · `S` · `R` · `B` | Fit the chart · Studies tab · Runner tab · Backtest tab (on a backtest chart). |
| `[` / `]` | Previous / next backtest trade. |
| `Del` | Delete the selected drawing. |
| `?` | The shortcuts dialog. `Esc` closes dialogs, menus and the side panel. |

Shortcuts are ignored while typing in a field. Favourites and recents are stored per user (`UserPreference`, keys `chart.favourites` and `chart.recents`) through `/api/chart/recents/`.

### Persisted layout

Timeframe, studies, chart style and drawings (trend lines, horizontal lines, brush strokes) are saved per user and instrument (`UserPreference` key `chart.layout:<canonical id>`, through `PUT /api/chart/workspace/<canonical id>/`, merged field by field) and restored the next time that chart opens without `tf`/`indicators` in the URL; explicit URL parameters still win, and a backtest chart keeps the run's timeframe and studies while still saving style and drawings. Drawings are stored by bar time and price, so they come back on the same bars. **Reset layout** in the `⋯` menu (or the palette) forgets the saved layout and reopens the chart with the defaults.

### Crosshair tooltip

Hovering a bar shows a tooltip next to the crosshair with the bar's IST time, OHLC and volume, and every active study with its parameters and value at that bar (`EMA 20`, `BB (20, 2)` upper/middle/lower, `MACD 12/26/9` line/signal/histogram, `Stoch 14/3/3` %K/%D, `RSI 14`). Over a backtest entry or exit marker the tooltip adds the trade card (side, entry and exit, stop and target, net P&L).

## 1b. Backtest Trades on the Chart

Opening a chart with `?markers=backtest:<run id>` (the **Open on Chart** action of a backtest run) overlays that run's persisted trades. The link the run builds also carries `from`/`to` (the run's period) and `indicators`, so the chart opens on the backtest's first day, loads every bar of the period (and what came after), and draws only the studies the strategy's own nodes use with their parameters (an EMA 5 / EMA 21 crossover shows `ema5` and `ema21`, not the default EMA 20/50; RSI, MACD and Bollinger nodes map to their panes with their periods; ATR, SuperTrend, VWAP and SMC nodes have no chart study and add nothing). Those studies are listed under **Strategy Studies** in the Studies panel, where any other study can still be switched on. Without an explicit `indicators` parameter a backtest chart defaults to the strategy's studies.

- **Entries**: a green up-arrow below the bar for a long, a red down-arrow above the bar for a short, labelled `#n LONG @ price`.
- **Exits**: a circle, green when the trade made money and red when it lost, labelled with the exit kind (`TGT`, `SL`, `SIG`, `MAX`, `SQ`, `END`), the exit price and the net P&L.
- **Stop-loss and target**: dashed red and green lines across the bars the trade was open, with price labels, and a faint band between them (green for a winner, red for a loser) so the active period of each trade is visible. An entry-to-exit line joins the two fills.
- **Clutter control**: zoomed far out, only markers are shown (plus the selected trade); the **Backtest** tab has switches for the levels and the connectors, or to hide the overlay.
- **Inspection**: click an entry or exit marker, or inside a trade's band, and the **Backtest** tab in the side panel shows that trade: trade id, symbol, long/short, entry and exit time and price, stop-loss, target, exit reason, quantity, gross P&L, brokerage and charges, net P&L and return %. The tab also lists every trade; clicking one scrolls the chart to it. The header chip summarises the run (strategy, trade count, net P&L).
- **Trade review mode**: `[` and `]` (or the Prev/Next buttons above the trade card) step through the trades in order, scrolling the chart to each; the tab's mini **equity curve** marks the selected trade's exit (click the curve to jump to the trade that closed nearest that point); hovering a marker shows the trade card in the crosshair tooltip. **Open run** opens the run in the admin and **Compare…** opens the compare page with this run preselected.

Everything drawn comes from `/api/chart/backtest/<run id>/`, which serves the run's stored `BacktestTrade` rows and a sampled equity curve.

### Loading, empty and error states; tablet

While candles load, the chart area shows a shimmer skeleton. With no candles, the empty state names the symbol and timeframe and offers **Fetch candles** (the same repair as **Fix candles**); a failed load shows the reason and **Retry**. The same `tv-skeleton`, `tv-empty` and `tv-error` components (in `tokens.css`) are used by the side-panel tabs. Below 1024 px the drawing toolbar folds away, the side panel opens as a bottom sheet and the footer range presets scroll. Every icon-only control has an `aria-label`, keyboard focus shows a single accent ring, and `prefers-reduced-motion` stops the pulsing dots and the shimmer.

---

## 2. Smart Money Concepts (SMC) Overlay

Niveshmarg Edge features a native institutional price-action analysis engine that computes and plots **Smart Money Concepts (SMC)** overlays directly on the chart. Detectors are causal — each structure is drawn only from bars available at the time it formed:

![Chart Workspace with Smart Money Concepts](screenshots/07_chart_workspace_smc.png)

### Institutional Structures Visualized:

1. **Order Blocks (OB)**:
   - **Bullish Order Block (`Bull OB`)**: Institutional accumulation zones preceding explosive upward moves. Shaded green horizontal zones that act as high-probability support.
   - **Bearish Order Block (`Bear OB`)**: Institutional distribution zones preceding sharp sell-offs. Shaded red zones that act as strong overhead resistance.
2. **Fair Value Gaps (FVG)**:
   - 3-candle price imbalances where aggressive market orders left resting liquidity unfilled.
   - Highlighted as semi-transparent boxes tracking mitigation as price revisits the gap.
3. **Break of Structure (BOS)**:
   - Trend continuation markers indicating price has broken and closed beyond the prior swing high (bullish BOS) or swing low (bearish BOS).
4. **Change of Character (CHoCH)**:
   - Early trend reversal markers indicating market structure has shifted from lower-highs to higher-highs (or vice-versa).
5. **Liquidity Sweeps**:
   - **Buy-Side Liquidity Swept (`BSL Swept`)**: Yellow dashed markers indicating retail stop-losses above swing highs were raided before a reversal.
   - **Sell-Side Liquidity Swept (`SSL Swept`)**: Blue dashed markers indicating sell-stops below swing lows were cleared by institutional volume.

---

## 3. Floating SMC Trade Setup HUD Card

Clicking the **SMC HUD button** (`#toggle-hud-btn`) or enabling the SMC indicator opens the floating institutional setup card in the top-right corner:

![SMC HUD Trade Setup](screenshots/07_chart_workspace_smc.png)

The HUD card computes a complete trade thesis:
- **Direction & Score**: Setup bias (e.g., `LONG NSE:SBIN-EQ`) and algorithmic confluence score (`85%`).
- **Entry Price**: Optimal entry fill (`961.85`).
- **Stop Loss (SL)**: Structural invalidation level (`935.33`), plotted as a dashed red boundary on the chart.
- **Take Profit Targets (TP1 & TP2)**:
  - `TP1 (1:2 R:R)`: `1014.89` (First institutional scale-out).
  - `TP2 (1:3 R:R)`: `1041.41` (Full target expansion).
- **Contextual Thesis**: Human-readable institutional explanation:
  *"Price positioned in institutional discount zone (< equilibrium)"*.

---

## 4. Real-Time Streaming Over WebSockets

The Chart Workspace establishes an ASGI WebSocket connection to:
```text
ws://localhost:8000/ws/live/<canonical_id>/
```

- **Tick-by-Tick Updates**: Live ticks arrive via the broker feed and update the high, low, close, and volume of the current open bar without page refresh.
- **Clock-Driven Bar Closing**: 1m bars close on the clock (~2 s after the minute) even without a new tick, and closed 1m bars roll up into any missing 5m / 15m / 30m / 1h bars.
- **Background History Refill**: If history is missing, it is fetched in the background (Celery) and the chart reloads once ~8 s later.
- **Zero Polling**: HTTP calls are never used for streaming data, ensuring ultra-low latency and minimal server load.

---

## 5. Active Runner Control from Chart

Traders can monitor and control strategy execution directly from the chart:
- View open position entry markers, live unrealized P&L, and stop-loss trailing lines.
- Pause or resume the active runner.
- Execute one-click manual emergency square-off if risk limits require manual override.
- **One-click orders are paper-only**: on a PAPER runner, a risk-checked immediate paper fill at the given (or a fresh live) price; on a LIVE runner they are refused (a LIVE runner trades only its strategy's signals). Squaring off a LIVE runner's positions from the chart still works. Quantity defaults to the risk profile's per-trade risk cap. Delta runners show amounts in USD.
- **Toggle mode** only demotes LIVE → PAPER (when flat). PAPER → LIVE goes through the admin promotion page.

The chart never creates runners — create them in **Admin > Trading > Live Runners**. Chart POST endpoints require a CSRF token (`X-CSRFToken` header); an external Chrome add-on must send it too.

---

## 6. Chart Assistant

**Ask AI** (bottom-left of the chart) opens a chat panel that reads the chart and acts on it: "add RSI 14", "draw a dashed red line at 2450", "zoom into the last five sessions", "remove that line", "what is this candle?". It is analysis only: it has no order or runner tools.

**How a question is answered.** The page opens `ws://<host>/ws/chart/agent/<canonical_id>/` (staff only) and sends the question with a snapshot of the chart: timeframe, style, visible range, studies, drawings with their ids, the bar under the crosshair and the selected bar (click a bar to select it, click again to clear). The server (`apps/chart_agent/`) runs a tool-calling loop on the configured AI provider:

| Tools | Run where | What they do |
| --- | --- | --- |
| `get_candles`, `get_live_price`, `get_market_status` | Server | Stored candles (with the window's high, low and average volume), the latest tick with its age and whether it is live, the session state. |
| `analyze_trend`, `identify_support_resistance`, `identify_swing_points`, `detect_candlestick_patterns`, `calculate_fibonacci`, `analyze_volume`, `find_crossovers`, `detect_divergence`, `detect_breakouts`, `calculate_volume_profile`, `calculate_indicator`, `get_smc_structures`, `get_session_levels`, `compare_timeframes`, `calculate_risk_reward` | Server | Deterministic analysis from `apps/quant/analysis.py` and `apps/quant/smc.py` on stored candles. Each result names its source, the bars analysed and the bar it is as of; too few candles is reported, not estimated. |
| `list_strategies`, `get_strategy`, `run_backtest`, `get_backtest_results`, `list_backtest_trades` | Server | Backtests through `BacktestRun.execute` (`apps/strategies/assistant.py`): a saved strategy as it is, or a starter template or changed parameters saved as a new draft strategy. Results and trades are read from what the run stored. |
| `show_backtest_on_chart` | Chart | Reloads the chart onto a completed run (the same view as **Open on Chart**) once the answer is finished; the panel reopens with the conversation. |
| `set_timeframe`, `set_chart_type`, `set_visible_range`, `zoom`, `scroll_to`, `fit_chart` | Chart | Navigation. |
| `add_indicator`, `remove_indicator` | Chart | EMA / SMA of any period, Bollinger, RSI, MACD, Stochastic, ATR, ADX, Supertrend, VWAP (intraday), Ichimoku (9/26/52), Volume, SMC. A study with nothing to draw (VWAP on an index, too few bars) is refused, not left switched on. |
| `set_price_alert` | Chart | A dashed alert level that fires once when a live tick reaches it: a toast and a note in the chat. |
| `add_drawing`, `update_drawing`, `remove_drawing`, `clear_drawings`, `highlight_candles` | Chart | Horizontal and vertical lines, trend lines, rays, rectangles (zones), channels, Fibonacci retracement, text, markers, and an entry / stop / target position. |
| `undo_chart_operation`, `redo_chart_operation`, `get_chart_context` | Chart | Undo and redo of drawing and study changes; a fresh snapshot. |

Chart tools are sent to the page as data (`{id, type, parameters}`), validated on the server (`apps/chart_agent/protocol.py`) and again by the page, which runs only the operations listed in `static/js/chart_agent_executor.js`. The assistant reports an action as done only after the page confirms it. Removing every drawing asks for a yes first; clearing only the assistant's own drawings does not.

**Price alerts.** An alert is a horizontal drawing with a direction (`above` or `below`), saved with the layout. It is checked in the browser against live ticks only, so it fires while that chart is open and the feed is connected; a cached last price never fires it. A fired alert stays on the chart marked `HIT`. It is a notification: nothing is ordered.

**Ichimoku.** The conversion and base lines sit on their bars and the two leading spans are drawn 26 bars ahead, so the chart extends 26 bars past the last candle while the study is on. The lagging span and the cloud fill are not drawn. Volume profile is an estimate from bars (each bar's volume spread evenly over its range).

**Backtests.** `run_backtest` always asks first, saying what it will save, and needs the permissions the admin needs (`strategies.add_backtestrun`, and `strategies.add_strategy` when a new strategy is saved). A saved strategy is never edited. Only runs on the chart's own instrument can be read or opened. A run that fails (for example, sessions the data source cannot supply) is reported with the engine's reason and no numbers.

**Drawings.** Every drawing has an id, a source (`user` or `agent`), an optional label, a line style and a visible flag, and is saved with the layout like the hand-drawn ones (`static/js/chart_drawings.js`).

**How the analysis is defined.** Swings are confirmed `swing_length` bars after they form, so nothing uses later bars. Support and resistance are swing points clustered within half an ATR. Trend direction comes from the last two swing highs and lows when they agree, otherwise from the close against its 20/50/200 EMAs. Candlestick patterns are TA-Lib's shape rules (trend context is not checked). Fibonacci measures the leg between the lowest low and highest high of the window. A breakout is a close beyond a confirmed swing level; it is marked failed if price closes back through by more than half an ATR within 10 bars, and retested when a later bar returns to the level and closes on the breakout side. Daily history that holds two rows for one session (two providers) is read as one bar.

**Conversation.** Kept in the browser tab (per instrument) and sent with each question; nothing is stored on the server. Each model call is an `AI_CALL` audit row with purpose `chart_agent` and counts toward the assistant's own daily budget, `AI_CHAT_DAILY_TOKEN_CAP` (default 600,000; 0 for no cap), not the analysis jobs' `AI_DAILY_TOKEN_CAP`. When it is used up the assistant says so and answers again after midnight IST. The system prompt and tool definitions are marked cacheable, which lowers the cost of the later steps of a question but not the token count: a multi-step question is roughly 40,000 tokens.

**Settings** (environment): `AI_CHAT_MODEL` (default: `AI_DEFAULT_MODEL`), `AI_CHAT_DAILY_TOKEN_CAP` (600000), `AI_CHAT_MAX_STEPS` (8 tool rounds per question), `AI_CHAT_MAX_OUTPUT_TOKENS` (2000), `AI_CHAT_TIMEOUT_SECONDS` (90), `AI_CHAT_CHART_TIMEOUT_SECONDS` (15). With `AI_PROVIDER=mock` the assistant answers only that no model is connected.

Adding a tool: write a `ToolSpec` in `apps/chart_agent/tools/` (a pydantic argument model, and a handler for server tools); a chart tool also needs its operation in the executor's table. A test checks the two lists match.
