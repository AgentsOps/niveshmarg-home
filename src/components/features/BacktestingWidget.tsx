"use client";

import { useState } from "react";

interface StrategyPreset {
  name: string;
  entryRules: string[];
  cagr: number;
  niftyCagr: number;
  winRate: number;
  maxDrawdown: number;
  sharpeRatio: number;
}

const presets: StrategyPreset[] = [
  {
    name: "Dual Momentum Breakout (5Y)",
    entryRules: ["20-day High Breakout", "RSI(14) > 55", "AI Score > 75"],
    cagr: 23.6,
    niftyCagr: 12.8,
    winRate: 64,
    maxDrawdown: -11.2,
    sharpeRatio: 1.84,
  },
  {
    name: "Mean Reversion Value (5Y)",
    entryRules: ["RSI(14) < 32", "P/E < 5Y Average", "AI Forecast > 20"],
    cagr: 18.2,
    niftyCagr: 12.8,
    winRate: 58,
    maxDrawdown: -14.5,
    sharpeRatio: 1.42,
  },
];

export default function BacktestingWidget() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const strategy = presets[selectedIdx];

  return (
    <div className="rounded-[24px] border border-hair bg-white p-6 shadow-[0_16px_40px_rgba(20,20,20,0.04)] sm:p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-[#F2EFE6] pb-6">
        <div>
          <span className="eyebrow">Strategy Validation Engine</span>
          <h3 className="mt-1 font-head text-[22px] font-semibold">Visual Strategy Builder & Backtest Canvas</h3>
          <p className="text-[13px] text-mute">Test entry rules against 5 years of historical market data before committing capital.</p>
        </div>

        <div className="flex gap-2">
          {presets.map((s, idx) => (
            <button
              key={s.name}
              type="button"
              onClick={() => setSelectedIdx(idx)}
              className={`rounded-full px-3.5 py-1.5 text-[12px] font-medium transition ${
                selectedIdx === idx
                  ? "bg-sky-ink text-white shadow-sm"
                  : "bg-cream text-mute hover:bg-[#EFEAD9]"
              }`}
            >
              {s.name.split(" ")[0]} Strategy
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_360px]">
        {/* Strategy Conditions & Equity Curve */}
        <div className="space-y-6">
          <div className="rounded-[20px] border border-[#EFE8D8] bg-[#FDFBF7] p-5">
            <h4 className="font-head text-[15px] font-semibold mb-3">Strategy Rule Set</h4>
            <div className="flex flex-wrap gap-2">
              {strategy.entryRules.map((rule) => (
                <span key={rule} className="inline-flex items-center gap-1.5 rounded-lg border border-sky/30 bg-sky/10 px-3 py-1.5 text-[12px] font-semibold text-sky-ink">
                  <span className="material-symbols-outlined text-[16px]">check_circle</span>
                  {rule}
                </span>
              ))}
            </div>
          </div>

          {/* Equity curve SVG */}
          <div className="rounded-[20px] border border-[#EFE8D8] bg-white p-5">
            <div className="flex justify-between items-center mb-4 text-[13px]">
              <span className="font-head font-semibold">5-Year Equity Growth Curve</span>
              <div className="flex gap-4 text-[11px]">
                <span className="text-sky-ink font-bold">● Strategy (+{(strategy.cagr * 5).toFixed(0)}%)</span>
                <span className="text-mute font-medium">● NIFTY 50 Benchmark (+{(strategy.niftyCagr * 5).toFixed(0)}%)</span>
              </div>
            </div>

            <div className="h-44 w-full relative flex items-end">
              <svg className="h-full w-full" viewBox="0 0 400 120" fill="none">
                {/* Benchmark line */}
                <polyline points="0,110 80,95 160,85 240,70 320,60 400,50" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="4" />
                {/* Strategy line */}
                <polyline points="0,110 80,85 160,65 240,40 320,25 400,10" stroke="#2E7E96" strokeWidth="3" />
              </svg>
            </div>
          </div>
        </div>

        {/* Backtest Results Cards */}
        <div className="rounded-[24px] bg-[#141619] p-6 text-white flex flex-col justify-between">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-sky-ink">5-Year Backtest Summary</span>
            <h4 className="mt-2 font-head text-[24px] font-bold text-white">{strategy.name}</h4>

            <div className="mt-6 space-y-4">
              <div className="flex justify-between items-center border-b border-white/10 pb-2">
                <span className="text-[12px] text-white/60">Strategy CAGR</span>
                <span className="font-head text-[20px] font-bold text-up">+{strategy.cagr}%</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-2">
                <span className="text-[12px] text-white/60">Benchmark (NIFTY)</span>
                <span className="font-mono text-[14px] text-white/80">+{strategy.niftyCagr}%</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-2">
                <span className="text-[12px] text-white/60">Trade Win Rate</span>
                <span className="font-mono text-[14px] text-white font-bold">{strategy.winRate}%</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-2">
                <span className="text-[12px] text-white/60">Max Drawdown</span>
                <span className="font-mono text-[14px] text-down">{strategy.maxDrawdown}%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[12px] text-white/60">Sharpe Ratio</span>
                <span className="font-mono text-[14px] text-gold font-bold">{strategy.sharpeRatio}</span>
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-xl bg-white/5 p-3 text-[11px] text-white/70">
            ✓ Edge confirmed across bull, bear, and consolidation market phases.
          </div>
        </div>
      </div>
    </div>
  );
}
