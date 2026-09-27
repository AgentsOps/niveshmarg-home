import WidgetFrame from "./WidgetFrame";

const rows = [
  { symbol: "ALPHA", name: "Alpha Industries", change: 2.41, price: "₹842.10", cap: "₹42.1K Cr", rating: "Strong Buy", tone: "up" },
  { symbol: "BETA", name: "Beta Finance", change: -0.62, price: "₹1,210.00", cap: "₹88.4K Cr", rating: "Buy", tone: "up" },
  { symbol: "GAMMA", name: "Gamma Pharma", change: 0.18, price: "₹3,405.55", cap: "₹61.9K Cr", rating: "Hold", tone: "warn" },
  { symbol: "DELTA", name: "Delta Metals", change: -1.94, price: "₹156.20", cap: "₹12.3K Cr", rating: "Underperform", tone: "down" },
] as const;

const toneClass = {
  up: "bg-mint text-mint-ink",
  warn: "bg-amber text-amber-ink",
  down: "bg-[#FDECEC] text-down",
} as const;

export default function ScreenerWidget() {
  return (
    <WidgetFrame
      eyebrow="Screener"
      title="Undervalued growth · NSE"
      description="A preset screen with its filters shown as removable chips."
      aside={<span className="w-fit rounded-full bg-rose px-3 py-1 text-[11px] font-bold text-rose-ink">128 matches</span>}
    >
      <div className="flex flex-wrap gap-2">
        {["P/E < 20", "Revenue growth > 15%", "ROE > 12%", "Market cap > ₹5K Cr"].map((chip) => (
          <span key={chip} className="inline-flex items-center gap-1 rounded-full border border-[#f0d8dc] bg-[#fff7f7] px-3 py-1 text-[12px] font-semibold text-rose-ink">
            {chip}
            <span className="material-symbols-outlined text-[14px]" aria-hidden="true">close</span>
          </span>
        ))}
      </div>
      <ul className="mt-5 grid gap-3 md:grid-cols-2">
        {rows.map((row) => (
          <li key={row.symbol} className="rounded-[18px] border border-hair p-4">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="font-head text-[15px] font-semibold">{row.symbol}</p>
                <p className="truncate text-[12px] text-mute">{row.name}</p>
              </div>
              <div className="flex flex-col items-end gap-1.5">
                <span className={`rounded-full px-2 py-0.5 text-[11.5px] font-bold ${row.change >= 0 ? "bg-mint text-mint-ink" : "bg-[#FDECEC] text-down"}`}>
                  {row.change >= 0 ? "▲" : "▼"} {Math.abs(row.change).toFixed(2)}%
                </span>
                <span className={`rounded-full px-2 py-0.5 text-[10.5px] font-bold ${toneClass[row.tone]}`}>{row.rating}</span>
              </div>
            </div>
            <dl className="mt-3 grid grid-cols-2 gap-2 text-[12px]">
              <div>
                <dt className="text-mute">Price</dt>
                <dd className="font-semibold">{row.price}</dd>
              </div>
              <div>
                <dt className="text-mute">Market cap</dt>
                <dd className="font-semibold">{row.cap}</dd>
              </div>
            </dl>
          </li>
        ))}
      </ul>
    </WidgetFrame>
  );
}
