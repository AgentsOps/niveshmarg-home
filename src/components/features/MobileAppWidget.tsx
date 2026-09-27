import WidgetFrame from "./WidgetFrame";

function Phone({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-[240px] rounded-[32px] border-[6px] border-ink bg-cream p-3 shadow-[0_18px_40px_rgba(20,20,20,0.15)]">
      <div className="mx-auto mb-3 h-1.5 w-14 rounded-full bg-ink/80" aria-hidden="true" />
      <p className="px-1 font-head text-[15px] font-semibold">{title}</p>
      <div className="mt-3 space-y-2">{children}</div>
    </div>
  );
}

function Row({ left, sub, right, tone }: { left: string; sub: string; right: string; tone: "up" | "down" }) {
  return (
    <div className="flex items-center justify-between rounded-2xl bg-white px-3 py-2.5">
      <div>
        <p className="text-[12px] font-bold">{left}</p>
        <p className="text-[10px] text-mute">{sub}</p>
      </div>
      <p className={`text-[11px] font-bold ${tone === "up" ? "text-up" : "text-down"}`}>{right}</p>
    </div>
  );
}

export default function MobileAppWidget() {
  return (
    <WidgetFrame
      eyebrow="Android · iPhone · tablet"
      title="The same account in your pocket"
      description="Portfolio, watchlist, screener, paper trading and Stock Chat."
    >
      <div className="grid gap-6 sm:grid-cols-3">
        <Phone title="Portfolio">
          <Row left="HDFCBANK" sub="40 @ ₹1,410" right="+10.8%" tone="up" />
          <Row left="ITC" sub="120 @ ₹452" right="-6.4%" tone="down" />
          <Row left="AAPL" sub="5 @ $182.10" right="+25.4%" tone="up" />
        </Phone>
        <Phone title="Watchlist">
          <Row left="TCS" sub="P3 · high alert" right="+1.2%" tone="up" />
          <Row left="INFY" sub="P2" right="-0.5%" tone="down" />
          <Row left="SBIN" sub="P1" right="+0.8%" tone="up" />
        </Phone>
        <Phone title="Stock chat">
          <div className="rounded-2xl bg-gold px-3 py-2 text-[11px] font-medium">Compare ITC and HUL</div>
          <div className="rounded-2xl bg-white px-3 py-2 text-[10.5px] leading-[1.5]">
            <p className="font-bold">Valuation snapshot</p>
            <table className="mt-1 w-full text-left">
              <thead>
                <tr className="text-mute"><th className="font-semibold">Metric</th><th className="font-semibold">ITC</th><th className="font-semibold">HUL</th></tr>
              </thead>
              <tbody>
                <tr><td>P/E</td><td>25</td><td>55</td></tr>
                <tr><td>Div. yield</td><td>3.4%</td><td>1.7%</td></tr>
              </tbody>
            </table>
          </div>
        </Phone>
      </div>
    </WidgetFrame>
  );
}
