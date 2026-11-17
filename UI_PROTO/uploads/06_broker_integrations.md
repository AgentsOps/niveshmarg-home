# Multi-Broker Integrations & Account Management

Niveshmarg Edge features a decoupled broker abstraction architecture allowing seamless routing of orders and streaming of market data across Indian equities, derivatives, and international crypto perpetual exchanges.

Navigate to **Brokers > Broker Accounts** in Django Admin to manage connected broker sessions:

![Broker Accounts List](screenshots/10_broker_accounts_list.png)

---

## 1. Provider Abstraction Architecture

All broker implementations inherit from the abstract base class `apps.brokers.base.BrokerProvider`. Core business logic, risk guardrails, and strategy runners interact strictly with this unified interface:

```python
class BrokerProvider(ABC):
    # Authentication
    @abstractmethod
    def get_login_url(self, redirect_uri: str, state: str = "") -> str: ...
    @abstractmethod
    def exchange_token(self, auth_code: str, redirect_uri: str) -> Dict[str, Any]: ...

    # Account
    @abstractmethod
    def get_profile(self) -> Dict[str, Any]: ...
    @abstractmethod
    def get_funds(self) -> Dict[str, Any]: ...
    @abstractmethod
    def get_holdings(self) -> List[Dict[str, Any]]: ...
    @abstractmethod
    def get_positions(self) -> List[Dict[str, Any]]: ...
    @abstractmethod
    def get_orders(self) -> List[Dict[str, Any]]: ...

    # Orders
    @abstractmethod
    def place_order(self, order_data: Dict[str, Any]) -> Dict[str, Any]: ...
    @abstractmethod
    def modify_order(self, order_id: str, order_data: Dict[str, Any]) -> Dict[str, Any]: ...
    @abstractmethod
    def cancel_order(self, order_id: str) -> Dict[str, Any]: ...

    # Market data
    def get_quotes(self, symbols: List[str]) -> Dict[str, Dict[str, Any]]: ...
    def history_capabilities(self) -> HistoryCapabilities: ...  # timeframes, max days per request, lookback, pacing
    def get_historical_candles(self, symbol: str, timeframe: str = "1d", limit: int = 500, end_date=None, start_date=None) -> List[Dict[str, Any]]: ...
    @abstractmethod
    def stream(self, symbols: List[str], on_tick: Callable[[Dict[str, Any]], None], stop_event=None) -> None: ...
```

Implementations live in `integrations/` and register with `apps.brokers.registry.BrokerRegistry` under the names `fyers`, `delta`, `zerodha` and `groww`.

`history_capabilities()` tells the historical-candle service (`apps.market_data.history`) how to ask a provider for candles: which timeframes it serves, the longest span one request may cover, how far back it keeps candles (when published) and how fast it may be called. The service chunks and paces requests from that, and refuses a request the provider cannot serve with a clear reason instead of returning a partial dataset. `get_historical_candles()` raises `BrokerAPIError` / `BrokerAuthError` on failures, so an empty list always means "no candles for that range". Providers with `history_requires_account = False` (Delta's public candle API) are used without a connected account.

| Provider | Timeframes | Max span per request | Notes |
| --- | --- | --- | --- |
| Fyers | 1m, 5m, 15m, 30m, 1h, 1d | 100 days intraday, 366 days daily | Needs the requesting tenant's own connected account; IST date ranges. Jobs with no tenant use Yahoo. |
| Delta | 1m, 5m, 15m, 30m, 1h, 1d | 2000 bars (1 day of 1m … 2000 days of 1d) | Public endpoint, no account. |
| Yahoo Finance (fallback) | 1m, 5m, 15m, 30m, 1h, 1d | 7 / 60 / 730 days | Keeps only 30 days of 1m, 60 days of 5m–30m and 730 days of 1h. |
| Zerodha, Groww | none yet | — | No candle history; a backtest on their instruments uses another source. |

---

## 2. Supported Brokers & Authentication Protocols

### 1. Fyers (`FYERS`)
- **Markets**: NSE and BSE instruments (MCX is not supported yet).
- **Protocol**: OAuth2 Authorization Code flow.
- **Live Feed**: Fyers data WebSocket (`FyersDataSocket`), one stream per tenant. Each tenant's NSE/BSE prices come only from their own Fyers account and reach only their own charts and runners. A Fyers account is required to use the app; without one, charts show Yahoo history only.
- **Connecting Fyers**:
  1. Create an app at myapi.fyers.in with the redirect URL `SITE_URL/brokers/callback/fyers/`. In **Admin › Brokers**, add a Fyers account and paste the app's App ID and secret. Keys never come from `.env`.
  2. Click **Connect** on that account (or visit `/brokers/connect/fyers/`).
  3. Authenticate with your Fyers credentials and 2FA TOTP.
  4. Fyers redirects to `/brokers/callback/fyers/`, exchanging the auth code for an access token.
- **Daily Token Check**: Celery Beat runs a token *check* at **08:30 IST** every day for every connected account (via `get_profile`). An expired or rejected token marks the account `EXPIRED`, pauses its live runners and raises a CRITICAL `BROKER_AUTH_FAILED` alert. Tokens are **not** auto-refreshed: reconnect through the interactive login each day.

### 2. Zerodha Kite Connect (`ZERODHA`)
- **Markets**: NSE Equities, Indices, Futures & Options.
- **Protocol**: API Key + API Secret + Request Token exchange. The key and secret are stored on the broker account; the redirect URL is `SITE_URL/brokers/callback/zerodha/`.
- **Features**: Profile, funds, holdings, positions, orders. No live stream (market data comes from Fyers). Only cash `-EQ` symbols are mapped.

### 3. Delta Exchange (`DELTA`)
- **Markets**: 24/7 Crypto Perpetual Contracts (BTCUSD, ETHUSD, SOLUSD, altcoins).
- **Protocol**: HMAC-SHA256 signed REST requests (Delta Exchange India); no OAuth, connecting validates the API keys. Market data streams from the public WebSocket (`all_trades`), so no account is needed for the feed.
- **Credentials**: the account's API key and secret, stored on the broker account (only needed for profile, funds and orders).
- **Perpetuals Support**: Contract value (e.g. 0.001 BTC per BTCUSD contract) is applied to sizing, P&L, exposure and risk. Runners are 24x7 and never squared off at the NSE cutoff.

### 4. Groww (`GROWW`)
- **Markets**: NSE/BSE cash equities (the Trade API's `CASH` segment; F&O is not mapped).
- **Protocol**: Groww Trade API (`https://api.groww.in/v1`) with an API key + secret of the *approval* type, stored on the broker account; there is no OAuth redirect.
- **Connecting Groww**:
  1. On Groww, open *Profile → Trading APIs* (`groww.in/user/profile/trading-apis`), generate an **approval** API key + secret, and paste them into the Groww account in **Admin › Brokers**. Approve the key for the day on that page (Groww asks for this daily).
  2. In the Admin Broker Accounts page click **Connect** (or **Reconnect**) on the Groww row, or visit `/brokers/connect/groww/`. The adapter posts `SHA256(api_secret + epoch_seconds)` to `/token/api/access` and stores the returned day token (encrypted) with its expiry.
  3. The token **expires at 06:00 IST every day**; the 08:30 IST token check marks the account `EXPIRED` and you reconnect, as with Fyers.
- **Features**: profile (`/user/detail`), funds (`/margins/detail/user`), holdings (`/holdings/user`), positions (`/positions/user?segment=CASH`), orders (`/order/list`, `/order/create|modify|cancel`). Holdings and positions carry no price on Groww, so the adapter marks them with one `/live-data/ltp` call per 50 symbols; when that lookup fails the sync keeps quantities and average prices and leaves the last price unset rather than inventing one. No live stream (market data comes from Fyers). Only cash `-EQ` symbols are mapped.
- **Order reference ids**: Groww requires an 8–20 character alphanumeric `order_reference_id` (at most two hyphens). The platform's client order id is sent as-is when it fits that rule, otherwise it is normalised (logged) and the id actually sent is returned as `client_order_id`.
- **Rate limits** (per Groww): orders 10/s and 250/min; live data 10/s and 300/min; portfolio/order reads 20/s and 500/min; token minting 150 per day.

### Not yet implemented (roadmap)
- Zerodha GTT orders and margin calculation.
- Delta funding-rate and margin-mode (isolated/cross) accounting; USD→INR capital conversion.
- Fyers MCX commodities.
- Zerodha/Groww NFO (F&O) symbol mapping.
- AngelOne provider (listed as a broker type, but no provider is registered).

---

## 3. Token Security & Encryption at Rest

Broker access tokens grant execution authority and must be protected with institutional security:
1. **Encrypted at Rest**:
   Token fields in the `BrokerAccount` model are encrypted using Fernet symmetric encryption before being written to SQLite.
2. **Environment Isolation**:
   API secrets and client secrets are loaded exclusively from `.env` and never written to code or committed to Git.
3. **Staff-Only Admin Permissions**:
   Only authenticated staff users with explicit permission can view broker configuration or trigger account authorization.

---

## 4. Revocation & Emergency Disconnect

If a broker session needs to be revoked or re-authenticated:
1. Click **"Revoke"** next to the broker account in the admin table.
2. The confirmation screen (`templates/brokers/revoke_confirm.html`) prompts for confirmation:
   - Immediately purges stored access tokens and refresh tokens.
   - Marks the broker account disconnected and writes a `BROKER_REVOKED` audit entry.
   - Pauses any live runners attached to that broker account and raises an alert.
