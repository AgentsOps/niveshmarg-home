# Trading Runners & Deterministic Risk Management

The **Trading Runner** engine bridges the gap between quantitative strategy logic and broker order execution. It executes real-time strategy DAGs against streaming market data while enforcing strict, deterministic capital risk guardrails.

Navigate to **Trading > Live Runners** in Django Admin to monitor active runners:

![Trading Runners List](screenshots/11_trading_runners_list.png)

---

## 1. Runner Architecture & Execution Modes

Every runner operates on a specific Strategy, Canonical Instrument, and Bar Timeframe.

### Execution Modes:
1. **Paper Trading (`PAPER TRADING`)**:
   - Executes strategy DAG logic against real-time live market ticks.
   - Fills signal orders at the next bar's open and deducts statutory charges, without sending orders to a broker (no slippage model yet).
   - Tracks session P&L, exposure, and completed paper sessions (counted by the 15:45 IST end-of-session task).
   - Serves as the mandatory validation gate before any live deployment.
2. **Live Trading (`LIVE TRADING`)**:
   - Routes real orders through the live order router (risk-checked, idempotent) to a connected broker account (Fyers, Zerodha Kite, Groww, Delta Exchange).
   - Live runners are reconciled with the broker every 60 s; a position appears when the broker fill is reconciled.
   - Starting a LIVE runner checks the broker account; stopping any runner flattens its positions first.

Positions use one schema: `direction` (BUY/SELL), `quantity`, `stop_loss`, `target`.

### 24x7 crypto (Delta) runners
- Never squared off at the NSE cutoff.
- The Delta contract value (e.g. 0.001 BTC per BTCUSD contract) is applied to sizing, P&L, exposure and risk.
- Delta runners are capitalised in **USD**: capital, P&L, exposure and the risk profile's limits on a Delta runner are all USD amounts (the chart panel shows `$`). There is no USD→INR conversion, by design.

### Manual orders from the chart / Chrome add-on
- One-click orders are **paper-only**. On a PAPER runner they get a risk-checked immediate paper fill at the given price (or a fresh live price). On a LIVE runner they are refused (HTTP 403): a LIVE runner enters only on its strategy's signals.
- You can still square off a LIVE runner's positions from the chart; the exit goes through the live order router.
- Quantity defaults to the risk profile's per-trade risk cap.
- The chart never creates runners: create them in **Admin > Trading > Live Runners**. Chart POST endpoints require a CSRF token (`X-CSRFToken`), which the Chrome add-on must send.
- The chart's mode toggle only demotes LIVE → PAPER (when flat). PAPER → LIVE goes through the admin promotion page (Section 3).

---

## 2. Deterministic Risk Guardrails

In Niveshmarg Edge, **AI assists with research and market regime classification, but AI never places live trades**. Every order, paper or live, is checked by `apps.trading.risk.RiskEngine` against the runner's **Risk Profile** (Admin > Trading > Risk Profiles; limits are no longer set via env vars):

### 1. Max Daily Loss Limit
- Absolute cap (`max_daily_loss`, default ₹5,000) and percentage of capital (`max_daily_loss_pct`, default 3%).
- When realized plus open P&L hits either limit, the runner flattens all positions and moves to `PAUSED`; new entries are blocked.

### 2. Per-Trade Risk, Exposure & Position Caps
- Per-trade risk cap (`max_per_trade_risk`: entry-to-stop distance × quantity).
- Gross exposure cap (`max_gross_exposure`) and maximum simultaneous open positions (`max_open_positions`).

### 3. Kill Switch, Runner State & Price Circuit
- Orders are refused when the kill switch is active or the runner is not `ACTIVE`.
- With `halt_on_circuit`, new orders are blocked when price has moved past the circuit limit from the previous close.

### 4. Intraday Square-Off (per profile, default 15:15 IST)
- New intraday entries are refused after the profile's `square_off_time`.
- Celery Beat runs a square-off pass every minute 14:00–15:59 IST (Mon–Fri); it acts once on each runner after its profile's cutoff passes (when `enforce_square_off` is on). 24x7 crypto runners are skipped.

### Not yet implemented (roadmap)
- Maximum drawdown (high-water-mark) floor.
- Per-trade margin-allocation cap (% of account capital).
- Consecutive broker-error circuit breaker.
- Paper slippage model.

---

## 3. Four-Stage Live Promotion Workflow

To protect institutional capital, a strategy cannot be deployed directly to live execution without progressing through a verified four-stage promotion pipeline:

```
+--------------------+      +--------------------+      +--------------------+      +--------------------+
|      Stage 1       |      |      Stage 2       |      |      Stage 3       |      |      Stage 4       |
|   Strategy Draft   | ---> | Quantitative Test  | ---> |   Paper Trading    | ---> |    Live Trading    |
|  (Visual Builder)  |      |  (Backtest Engine) |      | (5+ Paper Sessions)|      | (Staff Confirmed)  |
+--------------------+      +--------------------+      +--------------------+      +--------------------+
```

1. **Stage 1: Strategy Draft**:
   Author the strategy in the Visual Strategy Builder, verify DAG connections, and pass canvas validation.
2. **Stage 2: Quantitative Backtest**:
   Run a backtest and link it to the runner. The gate requires the linked backtest to be of the **same strategy version** (editing the strategy makes it stale). Expectancy, Sharpe and drawdown are for your judgement; they are not enforced.
3. **Stage 3: Paper Trading**:
   Deploy as a `PAPER TRADING` runner. The runner must complete at least **5 paper sessions** (`PAPER_GATE_MIN_SESSIONS`, tracked by the `Paper Sessions` counter), and its paper win rate must be within 15 points of the linked backtest's (`PAPER_GATE_MAX_WIN_RATE_GAP`).
4. **Stage 4: Live Promotion**:
   Clicking **"Promote"** opens the staff confirmation screen (`templates/admin/trading/promote_confirmation.html`). The administrator must:
   - Select a connected, active broker account with a valid token.
   - Have no open paper positions or orders (they don't exist at the broker).
   - Type `LIVE` to confirm.

---

## 4. Runner Monitoring & Order Audit Trails

Every action taken by a runner is permanently recorded in relational audit tables:
- **`BrokerOrder`**: Logs order ID, broker reference ID, canonical symbol, side (BUY/SELL), quantity, limit price, filled price, and status (PENDING_SUBMIT, OPEN, PARTIALLY_FILLED, FILLED, CANCELLED, REJECTED, FAILED). A per-order statutory-charge breakdown field is not yet implemented (roadmap).
- **`RunnerEventLog`**: High-resolution event log tracking tick processing, condition evaluation results, signal generation, risk check passes/failures, and state transitions.
- **`AuditLog`**: Tracks administrator interventions, manual pauses, order overrides, and configuration edits.
