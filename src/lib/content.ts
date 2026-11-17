/** Copy shared between a page and its structured data, so the two never drift. */

export const CONTACT_FAQ: readonly (readonly [q: string, a: string])[] = [
  [
    "Can AI place trades on my account?",
    "No. AI writes research and labels market regimes. Every order, paper or live, goes through a deterministic risk engine, and AI has no path to place a live order.",
  ],
  [
    "Which brokers are supported?",
    "Fyers, Zerodha Kite and Groww for NSE and BSE, and Delta Exchange for crypto perpetuals. Strategies run the same way on all of them.",
  ],
  [
    "Do I need to write code?",
    "No. Strategies are built visually from nodes. A JSON view is there if you prefer to edit the graph directly.",
  ],
  [
    "How do I go live?",
    "A strategy passes four stages: a validated draft, a linked backtest, at least five paper sessions close to the backtest, then a confirmed live promotion.",
  ],
];
