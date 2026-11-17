# 13. Swing Trading Suite: User Guide

This guide shows how to use the Swing Trading Suite day to day: setting it up, reading the scanner, running a scan of your own and acting on what it finds. It is written for the person at the desk.

For the rules, formulas and code map behind each screen, see the reference: [12. Swing Trading Suite](12_swing_trading_suite.md).

---

## 1. What the suite does for you

The suite runs a top-down swing workflow for NSE delivery (CNC) trades held for days to weeks:

1. **Setups.** After the close it scans your stock universe with its Swing Analyzers (VCP breakout, momentum flag, IPO base, 21 EMA retest) and lists the setups worth acting on, scoring stocks that are outperforming NIFTY 50 higher. You can also run any analyzer yourself over an industry or over your marked stocks.
2. **Action.** Each candidate carries a stage that says what to do: **Buy** or **Wait for retest**. You place the order at your broker and tick the candidate as **Bought**.

The suite does not place orders or track positions: the Swing Book and its paper and live books have been removed. Entries, stops and exits are yours to manage at the broker. The AI report is research only.

Everything lives in the admin sidebar under **Swing Suite**:

| Screen | What you use it for |
|---|---|
| **Swing Candidates** | The scanner's output, the Manual Scan button, and where you mark what you bought |

The **Instruments** list shows each stock's **Industry** and the **Indices** it belongs to, and can be filtered by index.

---

## 2. First-time setup

Do this once. Commands run inside the `web` container (`docker compose exec web ...`).

**Step 1. Instruments and strategy templates**

```bash
docker compose exec web python manage.py migrate
```

```bash
docker compose exec web python manage.py sync_instruments
```

```bash
docker compose exec web python manage.py seed_starter_strategies
```

**Step 2. Benchmark history**

```bash
docker compose exec web python manage.py swing_bootstrap
```

This fetches two years of daily NIFTY 50 history, the benchmark the scanner measures relative strength against. Read its output: it lists anything it could not fetch. It is safe to run again.

**Step 3. Build your stock universe**

The universe is the watchlist the scanner works on. It fills itself from two sources:

- **52-week-high leaders:** stocks across the whole NSE cash market that made a 52-week high in the last two weeks and are still within 5% of it.
- **Recent listings:** new IPOs and SME listings, as they appear in the instrument master.

You can also add any stock yourself: open **Instruments**, tick the stocks and run **"Add selected to Swing Universe"**. Stocks you add by hand are never removed automatically.

Build the universe, backfill it and run the first scan:

```bash
docker compose exec web python manage.py swing_bootstrap --skip-backfill --universe
```

The **Instruments** list shows why each stock is in the universe in its **Swing Universe** column: `MANUAL`, `LEADER_52W` or `RECENT_IPO`. A leader found while the NIFTY was itself 5% or more below its high is marked as a weak-market leader; those are the strongest names.

**Step 4. Industries**

Open **Instruments** and press **Refresh Index Members (NSE)**. It fills each stock's NSE industry and index membership, which the manual scan's industry list uses.

You are now ready to use the scanner.

---

## 3. What runs on its own

With the Docker stack up, these jobs run without you. All times are IST.

| When | What happens |
|---|---|
| 16:30, Mon–Fri | The day's candles are backfilled |
| 16:45, Mon–Fri | The evening run: the scanner, once the day's candles are in |
| 19:30, Mon–Fri | The universe is refreshed: new 52-week-high leaders and new listings are added and given candles, so the next evening's scan covers them. Leaders that have not qualified for 30 days drop off |

The evening run waits for the day's candles. If they have not arrived after 30 minutes it stops and sends an alert instead of scanning old data. In that case, backfill the candles and use the buttons in section 8.

---

## 4. Your daily routine

### Evening, after 17:00

1. **Swing Candidates.** Filter by stage **Buy**. These are the setups you can act on in the next session. Review each one on its chart (the **Chart** link opens it on the analyzer's timeframe).

### Next session, during market hours

2. Place the orders you decided on at your broker (section 6), then mark those candidates **Bought**.

---

## 5. Reading the candidates list

Each row is one stock with a setup found on the scan date.

| Column | Meaning |
|---|---|
| **Setup** | The Swing Analyzer that found it |
| **Timeframe** | The candles that analyzer read (`1d` for all the built-in ones) |
| **Stage** | What to do with it (table below) |
| **Buy valid till** | For a Buy: the last session you can still act on it |
| **Entry / SL / Target** | Suggested entry (the scan-day close), stop-loss and target |
| **SL %** | Stop distance from entry; green at or under 5%, amber above |
| **R:R** | Reward to risk at the suggested levels |
| **Score** | Composite score, then the pattern score and relative strength |
| **AI Catalyst** | Link to the AI report, once you have generated one |

### Stages

| Stage | Meaning | What to do |
|---|---|---|
| **Buy** | Valid setup with the stop within 5% | Buy at your broker in the window shown under **Buy valid till**, with the stop from the row |
| **Wait for retest** | Good breakout but the stop is wider than 5% | Do not chase it. It is tracked for 15 days and becomes a Buy if it pulls back to the pivot or 21 EMA |
| **Bought** | You placed the order and marked it | Nothing; manage the trade at your broker |
| **Dismissed** | You passed on it | Nothing |
| **Expired** | A Buy that was not acted on in time | Nothing; wait for a fresh scan |

A Buy is valid on the scan day and the two sessions after it. After that the evening scan expires it, because its entry and stop no longer describe the chart.

### Row actions on candidates

| Action | Use |
|---|---|
| **Mark selected as Bought** | You placed the order: the row leaves your Buy list and later scans leave it alone |
| **Mark selected as Buy** | Override a retest or expiry verdict. The override is recorded and kept across rescans |
| **Dismiss selected candidates** | Remove from your shortlist |
| **Generate AI Swing Catalyst Report (selected)** | Research report on up to 10 candidates; uses AI credits |

---

## 6. Acting on a Buy

The suite gives you the levels; you size and place the trade.

1. Open the chart from the row and check the setup with your own eyes.
2. Size it from your risk: **quantity = capital × risk per trade ÷ (entry − stop)**. *Example:* ₹10,00,000 capital at 0.5% risk is ₹5,000 per trade. Entry ₹500 with a stop at ₹480 risks ₹20 a share, so 250 shares, costing ₹1,25,000.
3. Keep total deployment and the number of open positions within your own limits; the suite no longer sets an exposure target.
4. Place the CNC buy and a stop-loss order at your broker. If your fill differs from the suggested entry, keep the same stop distance.
5. Back in **Swing Candidates**, tick the row and run **Mark selected as Bought**.

The suite will not tell you when to exit. A common rule from the same playbook: exit on the stop, or on two red daily closes below the 21 EMA, or one close 2% or more below it.

---

## 7. Running a manual scan

Use **Swing Candidates → Manual Scan** when you want a particular analyzer run over a particular set of stocks, instead of waiting for the evening scan.

1. **Analyzer.** Tick one or more. Each shows its timeframe. "manual scan only" marks analyzers the evening scan never runs, such as the **21 EMA Reclaim**: it is a re-entry setup, so run it over stocks you were recently stopped out of.
2. **Scan.** Choose one:
   - **Stocks marked for scan:** the stocks you (or the universe builder) marked **Swing Universe** on the Instruments list, and only those.
   - **All stocks of an industry:** pick the industry, for example Healthcare or Capital Goods; the list shows how many stocks each has. The industry is NSE's own, taken from its index lists, so only stocks that are in an NSE index (about 750) have one. For a stock outside them, mark it for scan instead.
3. **Scan date.** Leave empty for today, or pick a past date to see what the analyzers would have found then.
4. **Candles.** Leave "fetch missing candles first" ticked unless you know the data is current. A stock with no candles gets two years of history, so the first scan of a large industry takes a while.
5. Press **Run scan**. You land on a progress page: a bar, the stock being worked on and a count such as `212 / 500`. The first half of the bar is the candle check, the second half the scan. When it reaches 100% the page shows how many stocks are to buy, to wait on and to avoid, with a button to open them. You can leave the page at any time: the scan carries on and a **Swing Manual Scan** notification reports the result.

Results land in the same candidates list. There is one row per stock per day: if the evening scan already has a row for a stock, a manual scan keeps it, unless it turns a Wait-for-retest into a Buy.

To mark stocks for scan: open **Instruments**, tick them and run **"Add selected to Swing Universe"**.

---

## 8. Running things yourself

Each list has buttons at the top that need no selected row.

| Screen | Button | When to use it |
|---|---|---|
| Swing Candidates | **Run EOD Swing Scan** | If the evening run did not happen, or after adding stocks |
| Swing Candidates | **Manual Scan** | To run chosen analyzers over an industry or your marked stocks (section 7) |
| Swing Candidates | **Refresh Universe (52w Highs + IPOs)** | To rebuild the automatic watchlist now; runs in the background and notifies you |
| Instruments | **Refresh Index Members (NSE)** | To update every stock's indices and industry from NSE now, for example after an index rebalance |

After **Run EOD Swing Scan**, a second message lists what was analysed: each symbol, how many daily candles were read for it, the date of its newest candle, and the outcome (a setup, no setup, too few candles, or low turnover). A symbol marked "stale" was judged on an older candle because today's has not arrived. The **Full scan log** link opens the complete record; every scan is kept under **Audit Log** with the action `SWING_EOD_SCAN` or `SWING_MANUAL_SCAN`.

---

## 9. Alerts you will receive

| Alert | Meaning | Action needed |
|---|---|---|
| Swing Universe Updated | New leaders or new listings joined the watchlist | None; they are scanned from the next evening |
| Swing EOD Setup Scanner | The evening scan found setups | Review candidates |
| Swing Manual Scan | A scan you started has finished | Review candidates |
| Swing Manual Scan Did Not Run | No stocks could be found for it (nothing marked, or no stock has that industry) | Mark stocks, or use **Refresh Index Members (NSE)** on Instruments |
| Swing EOD Pipeline Did Not Run / Phase Failed | The evening run stopped or a step failed | Use the buttons in section 8 |

---

## 10. Troubleshooting

| Symptom | Likely cause | Fix |
|---|---|---|
| No candidates after the scan | The universe is empty, or its stocks have no daily candles | Run `swing_bootstrap --universe`, or the **Refresh Universe** button |
| A stock I expected is not in the universe | It is not near its 52-week high, trades too little, or the daily limit of 50 new names was reached | Add it by hand in **Instruments** |
| Score shows no RS (`-`) | NIFTY 50 has no daily candles | Run `swing_bootstrap` |
| "Could not queue the scan" | The Celery worker or Redis is not running | Start the stack, then run the scan again |
| The progress bar stays on "Queued" | The Celery worker is not running or is busy with another job | Check the `celery_worker` container; the scan starts when the worker is free |
| The industry list is empty, or a stock is missing from its industry | Industries come from NSE's index lists; a stock outside every NSE index has none | Run **Refresh Index Members (NSE)** on Instruments; mark stocks outside the indices for scan |
| A manual scan evaluated fewer stocks than the industry has | Some have too few candles or too little turnover | Leave "fetch missing candles" ticked; the scan log lists each stock's outcome |
| The 21 EMA Reclaim never appears after the evening scan | It is a manual-only analyzer | Pick it in **Manual Scan** |

---

## 11. Glossary

| Term | Meaning |
|---|---|
| **CNC / Delivery** | Shares bought and held in your demat account, not squared off the same day |
| **Swing Analyzer** | One setup type the scanner can look for; each is a plugin with its own timeframe |
| **Marked for scan** | An instrument with **Swing Universe** switched on |
| **Pivot** | The breakout level of a setup |
| **VCP** | Volatility contraction pattern: a base that tightens before breaking out |
| **Mansfield RS** | A stock's strength relative to NIFTY 50 |
