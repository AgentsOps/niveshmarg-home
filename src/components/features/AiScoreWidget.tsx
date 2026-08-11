"use client";

import { useState } from "react";

type PillarKey = "forecast" | "technical" | "sentiment" | "trend";

interface StockPreset {
  ticker: string;
  name: string;
  scores: Record<PillarKey, number>;
  notes: Record<PillarKey, string>;
}

const presets: StockPreset[] = [
  {
    ticker: "RELIANCE.NS",
    name: "Reliance Industries",
    scores: { forecast: 22, technical: 19, sentiment: 21, trend: 20 },
    notes: {
      forecast: "Chronos model projects +14% upside based on oil-to-telecom capex cashflow.",
      technical: "Breakout above 200 EMA with expanding volume indicators.",
      sentiment: "84% positive media coverage on green hydrogen initiatives.",
      trend: "Consistent higher-high pattern across 1W, 1M, and 6M timeframes.",
    },
  },
  {
    ticker: "TCS.NS",
    name: "Tata Consultancy Services",
    scores: { forecast: 18, technical: 15, sentiment: 22, trend: 16 },
    notes: {
      forecast: "Moderate revenue growth projected amidst global tech spending slowdown.",
      technical: "RSI neutral (48) with minor resistance near ₹4,200.",
      sentiment: "Strong institutional buy ratings following Q3 margin expansion.",
      trend: "Consolidation phase with low downside risk.",
    },
  },
  {
    ticker: "HDFCBANK.NS",
    name: "HDFC Bank",
    scores: { forecast: 24, technical: 22, sentiment: 19, trend: 23 },
    notes: {
      forecast: "Credit growth outperforming industry average by 340 bps.",
      technical: "Bullish engulfing candle on weekly chart with heavy institutional buying.",
      sentiment: "FII inflow surge recorded over the past fortnight.",
      trend: "Strong multi-year uptrend resumed after merger digestion.",
    },
  },
];

export default function AiScoreWidget() {
  const [selectedStockIndex, setSelectedStockIndex] = useState(0);
  const currentStock = presets[selectedStockIndex];
  const [scores, setScores] = useState<Record<PillarKey, number>>(currentStock.scores);

  const handlePresetSelect = (index: number) => {
    setSelectedStockIndex(index);
    setScores(presets[index].scores);
  };

  const updateScore = (key: PillarKey, val: number) => {
    setScores((prev) => ({ ...prev, [key]: Math.min(25, Math.max(0, val)) }));
  };

  const totalScore = scores.forecast + scores.technical + scores.sentiment + scores.trend;

  const getSignalStatus = (score: number) => {
    if (score >= 80) return { label: "Strong Conviction Bull", color: "text-[#17845A]", bg: "bg-[#E9F6EE]", border: "border-[#17845A]/20" };
    if (score >= 60) return { label: "Moderate Bullish Signal", color: "text-[#2E7E96]", bg: "bg-[#EBF7FC]", border: "border-[#2E7E96]/20" };
    if (score >= 40) return { label: "Neutral / Mixed Signals", color: "text-[#B98A18]", bg: "bg-[#FDF8E7]", border: "border-[#B98A18]/20" };
    return { label: "Cautionary Bearish Signal", color: "text-[#D64550]", bg: "bg-[#FDECEC]", border: "border-[#D64550]/20" };
  };

  const signal = getSignalStatus(totalScore);

  return (
    <div className="rounded-[24px] border border-hair bg-white p-6 shadow-[0_16px_40px_rgba(20,20,20,0.04)] sm:p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-[#F2EFE6] pb-6">
        <div>
          <span className="eyebrow">Interactive Simulator</span>
          <h3 className="mt-1 font-head text-[22px] font-semibold">AI Score Signal Calculator</h3>
          <p className="text-[13px] text-mute">Adjust the 4 independent readings or pick a live stock preset.</p>
        </div>

        {/* Preset selector */}
        <div className="flex flex-wrap gap-2">
          {presets.map((item, idx) => (
            <button
              key={item.ticker}
              type="button"
              onClick={() => handlePresetSelect(idx)}
              className={`rounded-full px-3.5 py-1.5 text-[12px] font-medium transition ${
                selectedStockIndex === idx
                  ? "bg-ink text-white shadow-sm"
                  : "bg-cream text-mute hover:bg-[#EFEAD9]"
              }`}
            >
              {item.ticker}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        {/* Sliders & Controls */}
        <div className="space-y-5">
          {(
            [
              { key: "forecast", label: "Chronos AI Forecast", icon: "timeline", desc: "Short-term neural model price prediction" },
              { key: "technical", label: "Technical Setup", icon: "candlestick_chart", desc: "EMA alignment, RSI, & volume breakouts" },
              { key: "sentiment", label: "News & Sentiment", icon: "newspaper", desc: "Institutional media tone & earnings surprise" },
              { key: "trend", label: "Market Trend", icon: "show_chart", desc: "Sector leadership & macro relative strength" },
            ] as const
          ).map((item) => (
            <div key={item.key} className="rounded-[18px] border border-[#F1EAD8] bg-[#FDFBF7] p-4 transition hover:border-[#E8DFCA]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-rose text-rose-ink">
                    <span className="material-symbols-outlined text-[18px]">{item.icon}</span>
                  </span>
                  <div>
                    <h4 className="font-head text-[14px] font-semibold">{item.label}</h4>
                    <p className="text-[11px] text-mute">{item.desc}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 font-head text-[18px] font-bold text-rose-ink">
                  <span>{scores[item.key]}</span>
                  <span className="text-[12px] font-normal text-mute">/ 25</span>
                </div>
              </div>

              <div className="mt-3 flex items-center gap-3">
                <input
                  type="range"
                  min="0"
                  max="25"
                  value={scores[item.key]}
                  onChange={(e) => updateScore(item.key, parseInt(e.target.value))}
                  className="h-2 w-full cursor-pointer accent-[#C2566A]"
                />
              </div>

              <p className="mt-2.5 text-[11.5px] italic text-[#666]">
                {currentStock.notes[item.key]}
              </p>
            </div>
          ))}
        </div>

        {/* Gauge & Output Box */}
        <div className="flex flex-col items-center justify-center rounded-[24px] border border-[#F0E6D2] bg-gradient-to-br from-[#FFFDF9] via-[#FAF6EC] to-[#F7EFE2] p-8 text-center shadow-inner">
          <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-mute">Combined Score</span>
          
          {/* Animated Big Gauge Ring */}
          <div className="relative my-6 grid h-44 w-44 place-items-center rounded-full bg-white shadow-[0_12px_36px_rgba(20,20,20,0.06)] ring-8 ring-white">
            <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="42" stroke="#F1ECE0" strokeWidth="8" fill="none" />
              <circle
                cx="50"
                cy="50"
                r="42"
                stroke="#C2566A"
                strokeWidth="8"
                fill="none"
                strokeDasharray="264"
                strokeDashoffset={264 - (264 * totalScore) / 100}
                strokeLinecap="round"
                className="transition-all duration-500 ease-out"
              />
            </svg>
            <div className="z-10">
              <span className="font-head text-[52px] font-bold leading-none tracking-tight text-ink">{totalScore}</span>
              <span className="block text-[12px] font-medium text-mute">out of 100</span>
            </div>
          </div>

          <div className={`mt-2 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[12.5px] font-semibold ${signal.bg} ${signal.color} ${signal.border}`}>
            <span className="h-2 w-2 rounded-full bg-current animate-pulse"></span>
            {signal.label}
          </div>

          <div className="mt-6 w-full border-t border-[#EFE7D5] pt-4 text-left">
            <div className="flex justify-between text-[11px] text-mute">
              <span>Forecast: {scores.forecast}/25</span>
              <span>Technical: {scores.technical}/25</span>
            </div>
            <div className="mt-1 flex justify-between text-[11px] text-mute">
              <span>Sentiment: {scores.sentiment}/25</span>
              <span>Trend: {scores.trend}/25</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
