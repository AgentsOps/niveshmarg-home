import ScrollReveal from "./ScrollReveal";

interface WorkspaceCardItem {
  icon: string;
  title: string;
  description: string;
}

const cards: WorkspaceCardItem[] = [
  {
    icon: "dashboard",
    title: "Dashboard",
    description: "Holdings, movers and open positions on one canvas, refreshed against live quotes.",
  },
  {
    icon: "account_balance_wallet",
    title: "Portfolio & P&L",
    description:
      "Quantity, average price and invested value, with corporate actions applied for you.",
  },
  {
    icon: "visibility",
    title: "Watchlist",
    description: "Tickers you are studying, prioritised, with notes kept beside each name.",
  },
  {
    icon: "stethoscope",
    title: "Portfolio Doctor",
    description:
      "A diagnosis of concentration, drift and imbalance — with rebalancing suggested, never forced.",
  },
  {
    icon: "filter_alt",
    title: "Screener & market screens",
    description:
      "Filter every listing on valuation, growth and momentum, and save the screens that work.",
  },
  {
    icon: "swap_horiz",
    title: "Paper trading",
    description: "Practise the discipline before it costs anything. Same data, no capital at risk.",
  },
  {
    icon: "rule",
    title: "Strategy builder",
    description: "Compose rules and signals visually, then let them watch the market for you.",
  },
  {
    icon: "history",
    title: "Backtesting",
    description: "Walk a strategy back through history before you walk it forward with money.",
  },
  {
    icon: "apartment",
    title: "Institutional flow",
    description:
      "NSE bulk and block deals alongside global institutional filings — who is actually buying.",
  },
  {
    icon: "picture_as_pdf",
    title: "Reports & exports",
    description:
      "Any analysis becomes a clean PDF, saved and shareable, with the reasoning intact.",
  },
  {
    icon: "notifications_active",
    title: "Alerts & background jobs",
    description:
      "Long analyses run with a live progress stepper and tell you — in-app or on Telegram — when they land.",
  },
];

export default function WorkspaceSection() {
  return (
    <section id="workspace" className="mx-auto max-w-[1180px] scroll-mt-24 px-6 py-20 sm:py-24">
      <ScrollReveal className="text-center">
        <span className="eyebrow">Everything in one place</span>
        <h2 className="mt-6 font-head text-[clamp(1.875rem,5.5vw,2.625rem)] font-semibold tracking-[-0.02em]">
          The Workspace
        </h2>
        <p className="mt-3 text-[14px] text-mute">
          Research, test, hold and report — without leaving for a spreadsheet.
        </p>
      </ScrollReveal>

      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, idx) => (
          <ScrollReveal key={card.title} delayMs={(idx % 3) * 100}>
            <div className="h-full rounded-[18px] border border-hair bg-white p-6 transition hover:border-[#DCDCDC]">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-cream text-ink">
                <span className="material-symbols-outlined text-[20px]">{card.icon}</span>
              </span>
              <h3 className="mt-5 font-head text-[16px] font-semibold">{card.title}</h3>
              <p className="mt-2 text-[12.5px] leading-[1.7] text-mute">{card.description}</p>
            </div>
          </ScrollReveal>
        ))}

        {/* 12th Card - Start with one ticker */}
        <ScrollReveal delayMs={200}>
          <div className="flex h-full flex-col justify-between rounded-[18px] bg-cream p-6">
            <div>
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gold text-ink">
                <span className="material-symbols-outlined text-[20px]">bolt</span>
              </span>
              <h3 className="mt-5 font-head text-[16px] font-semibold">Start with one ticker</h3>
              <p className="mt-2 text-[12.5px] leading-[1.7] text-mute">
                Type a symbol and watch the swarm work. Everything else grows from there.
              </p>
            </div>
            <a
              href="https://dashboard.niveshmarg.com/"
              className="mt-5 inline-flex items-center gap-2 text-[13px] font-semibold"
            >
              Open dashboard <span>→</span>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
