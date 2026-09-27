import WidgetFrame from "./WidgetFrame";

// A hand-drawn price path, so the preview needs no data and no charting library.
const candles = [
  [62, 70, 58, 66], [66, 72, 63, 64], [64, 69, 60, 68], [68, 76, 66, 74], [74, 78, 70, 71],
  [71, 75, 67, 73], [73, 82, 72, 80], [80, 84, 76, 78], [78, 86, 77, 85], [85, 90, 82, 83],
  [83, 88, 79, 87], [87, 94, 85, 92],
];

const facts = [
  { label: "Market cap", value: "₹8.1L Cr" },
  { label: "P/E", value: "22.4" },
  { label: "52W range", value: "₹1,120–1,610" },
  { label: "Sector", value: "Financials" },
];

export default function StockAnalysisWidget() {
  const toY = (v: number) => 110 - (v - 50) * 2.2;
  return (
    <WidgetFrame
      eyebrow="Company page"
      title="SAMPLE.NS · Sample Bank Ltd"
      description="Chart, indicators, fundamentals and news on one page."
      aside={
        <div className="sm:text-right">
          <p className="font-head text-[22px] font-bold">₹1,482.30</p>
          <p className="text-[12px] font-semibold text-up">▲ +18.40 (+1.26%)</p>
        </div>
      }
    >
      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <div className="rounded-[18px] border border-[#EFE8D8] bg-[#FDFBF7] p-4">
          <div className="flex flex-wrap gap-2 text-[11px] font-semibold">
            {["1D", "1M", "6M", "1Y", "5Y"].map((t) => (
              <span key={t} className={`rounded-full px-2.5 py-1 ${t === "6M" ? "bg-ink text-white" : "bg-white text-mute"}`}>{t}</span>
            ))}
            <span className="ml-auto rounded-full bg-sky px-2.5 py-1 text-sky-ink">EMA 20</span>
            <span className="rounded-full bg-amber px-2.5 py-1 text-amber-ink">RSI 14</span>
          </div>
          <svg viewBox="0 0 250 120" className="mt-4 h-[180px] w-full" aria-hidden="true">
            {candles.map(([o, h, l, c], i) => {
              const x = 12 + i * 19.5;
              const up = c >= o;
              const color = up ? "#17845A" : "#D64550";
              return (
                <g key={i}>
                  <line x1={x} x2={x} y1={toY(h)} y2={toY(l)} stroke={color} strokeWidth="1.2" />
                  <rect x={x - 4.5} width="9" y={toY(Math.max(o, c))} height={Math.max(2, Math.abs(toY(o) - toY(c)))} rx="1.5" fill={color} />
                </g>
              );
            })}
            <polyline
              points={candles.map(([, , , c], i) => `${12 + i * 19.5},${toY(c - 3)}`).join(" ")}
              fill="none" stroke="#2E7E96" strokeWidth="1.6" strokeDasharray="3 2"
            />
          </svg>
        </div>
        <div className="space-y-4">
          <dl className="grid grid-cols-2 gap-3">
            {facts.map((f) => (
              <div key={f.label} className="rounded-[14px] border border-hair p-3">
                <dt className="text-[10.5px] uppercase tracking-wider text-mute">{f.label}</dt>
                <dd className="mt-1 font-head text-[14px] font-semibold">{f.value}</dd>
              </div>
            ))}
          </dl>
          <div className="rounded-[14px] border border-hair p-3">
            <p className="text-[10.5px] font-bold uppercase tracking-wider text-mute">Latest news</p>
            <p className="mt-1.5 text-[12.5px] leading-[1.6]">Quarterly profit rises on loan growth; margins steady</p>
          </div>
          <div className="flex items-center justify-between rounded-[14px] bg-mint/50 p-3">
            <span className="text-[12.5px] font-semibold text-mint-ink">AI analysis ready</span>
            <span className="material-symbols-outlined text-[20px] text-mint-ink" aria-hidden="true">auto_awesome</span>
          </div>
        </div>
      </div>
    </WidgetFrame>
  );
}
