# AI Financial Analysis & Market Regimes

Niveshmarg Edge integrates Large Language Models (LLMs) to perform automated stock research (fundamentals, technicals, news) and market regime classification.

Navigate to **Markets > AI Analysis** in Django Admin to inspect generated research reports:

![AI Stock Analysis](screenshots/13_stock_analysis_list.png)

---

## 1. Multi-Provider LLM Abstraction

All AI capabilities are built on the `apps.ai.base.AIProvider` interface. The active provider is chosen by `AI_PROVIDER`:

- **OpenRouter** (`openrouter`, default; `OPENROUTER_API_KEY`): one API that routes to Anthropic, OpenAI, Google, DeepSeek and other models by model id.
- **Mock** (`mock`): deterministic offline responses for development and tests.

Configure the active model id and temperature in **Analysis > AI Model Configs** (`/admin/analysis/aimodelconfig/`). Daily usage of the analysis jobs is capped by `AI_DAILY_TOKEN_CAP`; the chart assistant has its own budget, `AI_CHAT_DAILY_TOKEN_CAP` (see [Chart Workspace](03_chart_workspace.md), section 6). The dashboard shows today's tokens for each and the combined cost.

**Not yet implemented (roadmap)**: direct Gemini, OpenAI, Anthropic and local Ollama providers (and their `GEMINI_API_KEY`-style keys). Use those models through OpenRouter for now.

---

## 2. Core AI Research Capabilities

Stock reports run as Celery jobs (the worker must be running; triggering from admin shows a confirmation page). A multi-agent pipeline runs fundamental, technical, news and risk-auditor specialist agents, then a synthesizer produces the verdict. Reports record prompt version `multi-agent-1.0`.

**Failure semantics**: if any specialist agent fails, the report is marked `FAILED` and synthesis is skipped (no verdict from placeholder scores). Reports never stay stuck in `RUNNING`.

### 1. Fundamental Financial Analysis
When evaluating an equity instrument (e.g., `NSE:SBIN-EQ`), the AI analysis engine extracts and evaluates:
- **Balance Sheet Health**: Debt-to-Equity ratios, current ratio, debt maturity profile.
- **Profitability Trends**: Return on Equity (ROE), Return on Capital Employed (ROCE), Operating Margin expansion.
- **Cash Flow Quality**: Free Cash Flow to Net Profit conversion efficiency.
- **Valuation Multiples**: Forward P/E, Price to Book, EV/EBITDA vs industry medians.

### 2. News & Sentiment Analysis
The news agent reads headlines from Google News RSS plus configured feeds and scores sentiment across Bullish, Neutral, and Bearish categories.

**Not yet implemented (roadmap)**: earnings-call transcript analysis (management guidance tone, industry headwinds).

### 3. Morning News Scout
Runs daily at 07:00 IST. It uses real overnight data from Yahoo (S&P 500, Nasdaq, Brent, USD/INR) plus NIFTY's last close; GIFT Nifty is shown as unavailable. Stocks without price history are skipped. Re-running the scout only works for today's digest.

The sentiment distribution of completed reports is visualized on the main dashboard (empty state when there are none):

![AI Sentiment Dashboard](screenshots/01_admin_dashboard.png)

---

## 3. Macro Market Regime Classification

One of the most powerful features of Niveshmarg Edge is **automated market regime classification**. Markets behave differently depending on macro conditions, and strategies that perform well in trending environments often suffer severe drawdowns during rangebound chop.

The AI classifier computes the market regime for NIFTY 50 (`NSE:NIFTY50-INDEX`) once per trading day at 08:50 IST (Mon–Fri, one LLM call). Labels:
- **`Trending Bullish`**
- **`Trending Bearish`**
- **`Ranging / Consolidation`**
- **`High Volatility / Expansion`**
- **`Low Volatility / Compression`**

If there is no candle data, no LLM call is made and a fallback label is recorded at zero confidence.

Each classification includes a **Conviction Score** (from `0.00` to `1.00`), visible on the dashboard and chart header:

```text
Market Structure & Macro Regime: [ Trending Bullish ] · Conviction: 0.82
"Bullish trend sustained with strong institutional order block confluence."
```

### Feeding Regimes into Strategy Builder:
In the Visual Strategy Builder, use the **Market Regime Filter (`condition_regime`)** node to restrict strategy execution to favorable regimes (e.g., only trigger trend-following breakouts when the macro regime is `Trending Bullish`). Regime labels are never invented or taken from the future: a stock uses its own label, else the NIFTY 50 benchmark's.

---

## 4. The Core AI Safety Invariant

To ensure fiduciary safety and institutional compliance, Niveshmarg Edge enforces an unbreakable rule:

> **CRITICAL INVARIANT**: AI models generate research, analyze sentiment, and classify market regimes, but **AI never directly places live orders or executes trades**.

All live order generation must flow through deterministic, mathematical strategy DAGs that have passed strict risk checks.
