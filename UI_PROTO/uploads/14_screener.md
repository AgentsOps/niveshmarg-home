# 14. Screener

The Screener filters every active NSE stock and ETF on price, valuation, profitability, growth, balance sheet, cash flow, analyst consensus and momentum. Open it from the sidebar (**Markets → Screener**), or with the **Screener** button on the Instruments list. Its address is `/admin/instruments/instrument/screener/`.

The data it filters is kept on each **Instrument** and refreshed once a day. The Screener reads only from the database, so it is fast and works when the data sources are down. It then shows the data as of the last refresh.

---

## 1. Using the screen

| Area | What it does |
|---|---|
| **Strategy presets** | Starting points that fill the filters: Large caps, Mid & small caps, Undervalued, Deep value, High growth, High dividend, Profitability, Momentum, Low debt. Hover over a preset to see its rule, and edit the filters freely afterwards |
| **My screens** | Name the current filters and **Save current screen**. Saved screens are per user; the ✕ removes one. All users' saved screens are listed under **Instruments → Saved Screens** |
| **Advanced criteria** | The button above the results opens a drawer from the right, showing how many filters are set. It holds Search, Stocks / ETFs, Sector, then one collapsible group per topic. Each range has a Min and a Max, both inclusive. **Apply filters** runs the screen; **Reset all** clears it. Esc, ✕ or a click outside closes it |
| **Results** | Full width: the match count, **Clear filters**, sortable column headers (click again to reverse), 25 / 50 / 100 rows, and pages. The symbol opens the stock's chart |

- **Blanks are left out:** a stock with no value for a field you filter on is excluded. An unknown P/E is not a "P/E under 15".
- **Columns:** the defaults are Symbol, Company, Sector, Analyst, Price, Change, Market cap, P/E, ROE and 3M return. Each field you filter or sort on is added as a column.
- **Bookmarking:** the filters live in the page address, so you can bookmark or share a screen.
- **Units:**
  - Rupee amounts are in ₹ crore; `19.13 L Cr` means ₹19.13 lakh crore.
  - Percentages are typed as percent (`18` means 18%).
  - Numbers can be typed with commas (`1,00,000`).

### Fields

| Group | Fields | Source |
|---|---|---|
| Price & Market Cap | Price, Change, Market cap, Enterprise value, From 52W high, From 52W low | Price and change: broker quote. Caps: Yahoo. 52W: daily candles, else Yahoo |
| Trading & Liquidity | Volume, Avg volume (20D), Avg turnover (20D), Beta | Volume: broker quote. Averages: daily candles. Beta: Yahoo |
| Valuation | P/E, Forward P/E, PEG, P/B, P/S, EV/EBITDA, EV/Revenue | Yahoo |
| Profitability & Dividend | ROE, ROA, ROCE, Dividend yield, Payout ratio | Yahoo; ROCE from the latest annual statements |
| Growth & Margins | Revenue growth, Earnings growth (latest quarter against a year earlier), Gross / Operating / Net / EBITDA margin | Yahoo |
| Income Statement | Revenue, EBITDA, Net income, EPS (trailing 12 months) | Yahoo |
| Leverage & Solvency | Total debt, Debt/Equity, Interest cover | Yahoo; interest cover from the latest annual statements |
| Liquidity & Balance Sheet | Cash, Net debt, Current ratio, Quick ratio, Book value per share | Yahoo |
| Cash Flow | Operating cash flow, Free cash flow, Capex, FCF yield | Yahoo |
| Analyst Consensus | Rating (Strong Buy … Sell), Target upside, Number of analysts | Yahoo |
| Momentum | 1W / 1M / 3M / 6M / 1Y return, RSI (14), Above 50-day / 200-day SMA | Daily candles in the warehouse |

**Left out on purpose:**
- **Short interest:** NSE does not publish it.
- **ESG scores:** Yahoo has none for almost all Indian stocks.

Both would only ever be blank.

---

## 2. The daily refresh

`refresh_screener_data_task` runs at **18:30 IST, Monday to Friday**, after the close and the 16:30 candle backfill. It covers every active NSE stock and ETF (about 3,600) in three phases:

1. **Prices** (a minute or two):
   - **Broker first:** price, change and volume come from the connected broker that quotes NSE (Fyers), in batches of 50. The Fyers account must be **Connected** with a valid token for the day; see the 08:30 token check.
   - **Yahoo fallback:** stocks the broker did not quote come from a Yahoo Finance daily download.
2. **Momentum** (seconds): returns, RSI, SMA position, 52-week range and 20-day liquidity are computed from the warehouse's daily candles, using `apps/quant/momentum.py`.
   - **No candles:** a stock with no daily candles gets no momentum values. Its 52-week range comes from Yahoo instead.
   - **Getting candles:** a stock receives candles once it is backfilled, for example by joining the Swing Universe or with `backfill_candles`.
3. **Fundamentals** (one to two hours):
   - **The fetch:** one Yahoo Finance request for the summary and three for the annual statements, per stock.
   - **Chunking:** the stocks run in chunks of 100, one chunk after another, with a pause between stocks (`SCREENER_YAHOO_DELAY_SECONDS`, default 0.5).
   - **Retries:** a rate limit pauses 30 seconds and a timeout 5 seconds, then the stock is retried once.
   - **Price fallback:** a stock that got no price in phase 1 takes Yahoo's price from the same response.

**Safe to re-run.** A stock whose fundamentals were already refreshed today is skipped, so a retried chunk or a second run carries on where the last one stopped.

**Failures are recorded, never invented:**
- **A failed stock keeps its earlier values,** and its **Screener Data** section on the instrument page shows why it failed.
- **A missing value stays blank.**
- **A foreign-currency reporter:** a company that reports in another currency keeps its rupee amounts blank. Its ratios are still shown.

Every run writes a `SCREENER_REFRESH` audit log entry with counts per source. A chunk where most stocks failed writes `SCREENER_FUNDAMENTALS_FAILED`. If fewer than half the stocks got a price, a **Screener Quotes Incomplete** notification is sent.

### Running it yourself

- **Refresh Screener Data**, on the Screener page or the Instruments list, queues the same job on Celery.
- From the command line:

```bash
docker compose exec web python manage.py refresh_screener_data
```

```bash
docker compose exec web python manage.py refresh_screener_data --symbols RELIANCE,TCS --force
```

Options:
- `--symbols`: comma-separated symbols or canonical ids.
- `--only-quotes`: prices and momentum, no fundamentals.
- `--force`: refetch fundamentals already refreshed today.

---

## 3. For developers

| Piece | Where |
|---|---|
| Fields on the instrument | `ScreenerFieldsMixin` in `apps/instruments/models.py` |
| Field registry (labels, groups, units, kinds) | `apps/instruments/screener/fields.py` |
| URL parameters → queryset | `apps/instruments/screener/query.py` |
| Presets (JSON, validated on load) | `apps/instruments/screener/presets/*.json`, loaded by `presets.py` |
| Refresh phases | `apps/instruments/screener/refresh.py` |
| Momentum maths | `apps/quant/momentum.py` |
| Broker quote routing (shared with the portfolio's live prices) | `apps/brokers/quotes.py` |
| Page | `apps/instruments/screener/views.py`, `templates/admin/instruments/screener.html` |
| Tasks | `refresh_screener_data_task`, `refresh_screener_fundamentals_chunk_task` in `apps/instruments/tasks.py` |
| Tests | `tests/unit/test_screener.py` |

**Adding a metric:**
1. Add its column to `ScreenerFieldsMixin` and make a migration.
2. Fill it in `refresh.py`, and add it to that phase's field list.
3. Add one `ScreenerField` to `FIELDS`.

The filter, column, sort and preset checks follow from the registry.

**URL parameters:**
- `q`: search.
- `type`: `EQUITY` or `ETF`.
- `sector`: repeatable.
- `<field>_min` and `<field>_max`: range fields.
- `<field>`: a choice value (repeatable), or `yes` / `no` for a flag.
- `sort`: a field id; prefix `-` for descending.
- `rows` and `page`.
