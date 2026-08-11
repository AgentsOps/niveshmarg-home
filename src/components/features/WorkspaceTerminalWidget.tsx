"use client";

import { useState } from "react";

type ModuleTab = "watchlist" | "multichart" | "terminal" | "signals";

export default function WorkspaceTerminalWidget() {
  const [activeTab, setActiveTab] = useState<ModuleTab>("watchlist");
  const [promptInput, setPromptInput] = useState("Scan portfolio for high beta exposure");
  const [promptResult, setPromptResult] = useState<string | null>(null);

  const handlePromptSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promptInput.trim()) return;
    setPromptResult(`Scanning workspace holdings... Found 2 stocks with Beta > 1.3: TATAMOTORS (1.42) and INFOSYS (1.31). Total High Beta Allocation: 34%.`);
  };

  return (
    <div className="rounded-[24px] border border-hair bg-[#141619] p-6 text-white shadow-[0_20px_50px_rgba(0,0,0,0.25)] sm:p-8">
      {/* Workspace Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-white/10 pb-6">
        <div>
          <span className="inline-block rounded-full bg-sky/20 px-3 py-1 text-[11px] font-semibold text-sky-ink border border-sky/30">
            Live Workspace Operating Surface
          </span>
          <h3 className="mt-2 font-head text-[22px] font-semibold text-white">Interactive Workspace Canvas</h3>
        </div>

        {/* Tab switcher */}
        <div className="flex flex-wrap gap-1 rounded-xl bg-white/5 p-1">
          {(
            [
              { id: "watchlist", label: "Watchlist Grid", icon: "table_chart" },
              { id: "multichart", label: "Multi-Chart Split", icon: "grid_view" },
              { id: "terminal", label: "AI Terminal", icon: "terminal" },
              { id: "signals", label: "Signals Drawer", icon: "bolt" },
            ] as const
          ).map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 rounded-lg px-3 py-1.5 text-[12px] font-medium transition ${
                activeTab === tab.id
                  ? "bg-white text-ink shadow-sm"
                  : "text-white/70 hover:text-white hover:bg-white/5"
              }`}
            >
              <span className="material-symbols-outlined text-[16px]">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content Display */}
      <div className="mt-6 min-h-[300px] rounded-[18px] border border-white/10 bg-[#1A1D21] p-5">
        {activeTab === "watchlist" && (
          <div className="space-y-3">
            <div className="flex items-center justify-between text-[11px] text-white/50 uppercase tracking-wider border-b border-white/10 pb-2">
              <span>Symbol</span>
              <span>LTP (INR)</span>
              <span>Day Change</span>
              <span>AI Score</span>
              <span>Status</span>
            </div>
            {[
              { symbol: "RELIANCE", ltp: "2,980.50", change: "+1.8%", score: "88/100", status: "Strong Bull", up: true },
              { symbol: "TCS", ltp: "4,120.10", change: "-0.4%", score: "74/100", status: "Moderate", up: false },
              { symbol: "HDFCBANK", ltp: "1,640.25", change: "+2.3%", score: "91/100", status: "Top Pick", up: true },
              { symbol: "INFY", ltp: "1,790.00", change: "+0.9%", score: "78/100", status: "Bullish", up: true },
            ].map((row) => (
              <div key={row.symbol} className="flex items-center justify-between py-2 text-[13px] border-b border-white/5 hover:bg-white/5 px-2 rounded-lg transition">
                <span className="font-head font-semibold text-white">{row.symbol}</span>
                <span className="font-mono">{row.ltp}</span>
                <span className={`font-semibold ${row.up ? "text-up" : "text-down"}`}>{row.change}</span>
                <span className="rounded bg-sky/20 px-2 py-0.5 text-[11px] font-bold text-sky-ink">{row.score}</span>
                <span className="text-[12px] text-white/70">{row.status}</span>
              </div>
            ))}
          </div>
        )}

        {activeTab === "multichart" && (
          <div className="grid gap-4 sm:grid-cols-2">
            {["RELIANCE (1D)", "HDFCBANK (1W)"].map((title) => (
              <div key={title} className="rounded-xl border border-white/10 bg-[#121417] p-4">
                <div className="flex justify-between text-[12px] text-white/70 mb-2">
                  <span className="font-head font-semibold">{title}</span>
                  <span className="text-up font-mono">+2.4%</span>
                </div>
                <div className="h-32 w-full rounded bg-white/5 p-2 relative flex items-end">
                  <svg className="h-full w-full" viewBox="0 0 200 60" fill="none">
                    <polyline points="0,50 30,42 60,45 90,30 120,35 150,15 180,20 200,8" stroke="#2E7E96" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "terminal" && (
          <div className="space-y-4">
            <form onSubmit={handlePromptSubmit} className="flex gap-2">
              <input
                type="text"
                value={promptInput}
                onChange={(e) => setPromptInput(e.target.value)}
                placeholder="Ask workspace assistant..."
                className="w-full rounded-xl border border-white/15 bg-[#121417] px-4 py-2.5 text-[13px] text-white focus:outline-none focus:ring-2 focus:ring-sky-ink"
              />
              <button type="submit" className="rounded-xl bg-sky-ink px-5 py-2.5 text-[13px] font-semibold text-white transition hover:opacity-90">
                Run Query
              </button>
            </form>

            {promptResult && (
              <div className="rounded-xl border border-sky/30 bg-sky/10 p-4 text-[13px] text-sky-ink">
                <span className="material-symbols-outlined text-[16px] mr-2 inline-block align-middle">smart_toy</span>
                {promptResult}
              </div>
            )}
          </div>
        )}

        {activeTab === "signals" && (
          <div className="space-y-3 text-[13px]">
            <div className="rounded-lg bg-white/5 p-3 border border-white/10">
              <span className="text-[11px] font-bold text-gold uppercase">Breakout Alert</span>
              <p className="mt-1 text-white/90">HDFCBANK crossed 200 EMA on 3x average volume.</p>
            </div>
            <div className="rounded-lg bg-white/5 p-3 border border-white/10">
              <span className="text-[11px] font-bold text-mint-ink uppercase">Rebalance Signal</span>
              <p className="mt-1 text-white/90">Portfolio Doctor recommends trimming IT exposure by 4%.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
