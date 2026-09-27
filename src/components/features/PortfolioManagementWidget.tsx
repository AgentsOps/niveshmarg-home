import WidgetFrame from "./WidgetFrame";

const holdings = [
  { symbol: "HDFCBANK.NS", qty: "40 @ ₹1,410", value: "₹62,480", pnl: "+₹6,080", pct: "+10.8%", up: true },
  { symbol: "ITC.NS", qty: "120 @ ₹452", value: "₹50,760", pnl: "-₹3,480", pct: "-6.4%", up: false },
  { symbol: "AAPL", qty: "5 @ $182.10", value: "$1,141.50", pnl: "+$231.00", pct: "+25.4%", up: true },
];

const scenarios = ["RBI rate hike +50 bps", "Crude oil at $110", "USD/INR +3%", "Liquidity crunch"];

export default function PortfolioManagementWidget() {
  return (
    <WidgetFrame
      eyebrow="Portfolio"
      title="Imported from a broker CSV"
      description="Each holding in its own market's currency, valued at live prices."
      aside={
        <div className="flex flex-wrap gap-2">
          {["Zerodha", "Groww", "Fyers", "CSV"].map((b) => (
            <span key={b} className="rounded-full border border-hair px-2.5 py-1 text-[11px] font-semibold text-mute">{b}</span>
          ))}
        </div>
      }
    >
      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <ul className="space-y-3">
          {holdings.map((h) => (
            <li key={h.symbol} className="flex items-center gap-3 rounded-[16px] border border-hair p-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-cream text-[12px] font-bold">{h.symbol.slice(0, 2)}</span>
              <div className="min-w-0 flex-1">
                <p className="truncate font-head text-[14.5px] font-semibold">{h.symbol}</p>
                <p className="text-[12px] text-mute">{h.qty}</p>
              </div>
              <div className="text-right">
                <p className="font-head text-[14.5px] font-semibold">{h.value}</p>
                <p className={`text-[12px] font-bold ${h.up ? "text-up" : "text-down"}`}>{h.pnl} {h.pct}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="space-y-4">
          <div className="rounded-[16px] bg-mint/50 p-4">
            <p className="text-[10.5px] font-bold uppercase tracking-wider text-mint-ink">Portfolio Doctor</p>
            <p className="mt-1 font-head text-[26px] font-bold">72<span className="text-[14px] text-mute">/100</span></p>
            <p className="text-[12px] text-mint-ink">Financials are 48% of the portfolio — consider diversifying.</p>
          </div>
          <div className="rounded-[16px] border border-hair p-4">
            <p className="text-[10.5px] font-bold uppercase tracking-wider text-mute">Stress-test scenarios</p>
            <ul className="mt-2 space-y-1.5">
              {scenarios.map((s) => (
                <li key={s} className="flex items-center gap-2 text-[12.5px]">
                  <span className="material-symbols-outlined text-[16px] text-mute" aria-hidden="true">thunderstorm</span>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </WidgetFrame>
  );
}
