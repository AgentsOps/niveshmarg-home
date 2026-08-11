"use client";

import { useState } from "react";

interface PortfolioPreset {
  name: string;
  riskLevel: "High Risk" | "Moderate Risk" | "Balanced";
  concentrationScore: number;
  sectors: { name: string; pct: number; color: string }[];
  diagnosis: string[];
  recommendations: string[];
}

const portfolioPresets: PortfolioPreset[] = [
  {
    name: "Tech-Heavy Growth Portfolio",
    riskLevel: "High Risk",
    concentrationScore: 78,
    sectors: [
      { name: "IT & Software", pct: 52, color: "#3B82F6" },
      { name: "Banking & Fin", pct: 24, color: "#10B981" },
      { name: "Automotive", pct: 14, color: "#F59E0B" },
      { name: "Pharma", pct: 10, color: "#8B5CF6" },
    ],
    diagnosis: [
      "Concentration risk in IT sector exceeds safe threshold of 30%.",
      "Negative correlation buffer is weak against tech cyclical pullbacks.",
    ],
    recommendations: [
      "Trim IT allocation by 15% to lock in unrealised capital gains.",
      "Rotate proceeds into FMCG or Defense to reduce portfolio beta to 0.95.",
    ],
  },
  {
    name: "Core Balanced Wealth Portfolio",
    riskLevel: "Balanced",
    concentrationScore: 32,
    sectors: [
      { name: "Banking & Fin", pct: 32, color: "#10B981" },
      { name: "Energy & Infrastructure", pct: 26, color: "#EF4444" },
      { name: "FMCG & Consumer", pct: 22, color: "#F59E0B" },
      { name: "Pharma & Health", pct: 20, color: "#8B5CF6" },
    ],
    diagnosis: [
      "Optimal sector diversification across defensive and cyclical growth.",
      "Drift is minimal (+2.1% variance over 6 months).",
    ],
    recommendations: [
      "Maintain current allocation; schedule next review in Q3.",
      "Set trailing stop loss on high-momentum Energy holdings.",
    ],
  },
];

export default function PortfolioDoctorWidget() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const portfolio = portfolioPresets[selectedIdx];

  return (
    <div className="rounded-[24px] border border-hair bg-white p-6 shadow-[0_16px_40px_rgba(20,20,20,0.04)] sm:p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-[#F2EFE6] pb-6">
        <div>
          <span className="eyebrow">Portfolio Doctor Inspector</span>
          <h3 className="mt-1 font-head text-[22px] font-semibold">Interactive Risk & Sector Drift Diagnosis</h3>
          <p className="text-[13px] text-mute">Select a portfolio setup to diagnose concentration and view doctor&apos;s advice.</p>
        </div>

        <div className="flex gap-2">
          {portfolioPresets.map((p, idx) => (
            <button
              key={p.name}
              type="button"
              onClick={() => setSelectedIdx(idx)}
              className={`rounded-full px-3.5 py-1.5 text-[12px] font-medium transition ${
                selectedIdx === idx
                  ? "bg-mint text-mint-ink shadow-sm"
                  : "bg-cream text-mute hover:bg-[#EFEAD9]"
              }`}
            >
              {p.name.split(" ")[0]}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:items-center">
        {/* Sector Bar Chart */}
        <div className="rounded-[20px] border border-[#EFE8D8] bg-[#FDFBF7] p-6">
          <div className="flex items-center justify-between">
            <h4 className="font-head text-[16px] font-semibold">{portfolio.name}</h4>
            <span
              className={`rounded-full px-3 py-1 text-[11px] font-bold ${
                portfolio.riskLevel === "High Risk"
                  ? "bg-[#FDECEC] text-[#D64550]"
                  : "bg-[#E9F6EE] text-[#17845A]"
              }`}
            >
              {portfolio.riskLevel}
            </span>
          </div>

          <div className="mt-6 space-y-4">
            {portfolio.sectors.map((sec) => (
              <div key={sec.name}>
                <div className="flex justify-between text-[12.5px] font-medium mb-1">
                  <span>{sec.name}</span>
                  <span className="font-semibold">{sec.pct}%</span>
                </div>
                <div className="h-3 w-full rounded-full bg-[#EFE9DA] overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{ width: `${sec.pct}%`, backgroundColor: sec.color }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 border-t border-[#EFE8D8] pt-4 flex items-center justify-between text-[12px] text-mute">
            <span>Concentration Index: <strong>{portfolio.concentrationScore}/100</strong></span>
            <span>{portfolio.concentrationScore > 50 ? "Over-concentrated" : "Well-balanced"}</span>
          </div>
        </div>

        {/* Doctor's Diagnosis & Prescription */}
        <div className="space-y-6">
          <div className="rounded-[20px] border border-[#FDECEE] bg-[#FFF8F8] p-5">
            <div className="flex items-center gap-2 text-[#D64550] font-head font-semibold text-[15px]">
              <span className="material-symbols-outlined text-[20px]">warning</span>
              Doctor&apos;s Diagnosis Flags
            </div>
            <ul className="mt-3 space-y-2">
              {portfolio.diagnosis.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-[13px] text-[#4d4d4d] leading-relaxed">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D64550]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[20px] border border-[#E4F2E7] bg-[#F4FAF5] p-5">
            <div className="flex items-center gap-2 text-[#17845A] font-head font-semibold text-[15px]">
              <span className="material-symbols-outlined text-[20px]">task_alt</span>
              Actionable Recommendations
            </div>
            <ul className="mt-3 space-y-2">
              {portfolio.recommendations.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-[13px] text-[#2c4737] leading-relaxed">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#17845A]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
