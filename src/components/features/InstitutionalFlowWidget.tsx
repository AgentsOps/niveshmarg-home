"use client";

import { useState } from "react";

interface BlockDeal {
  time: string;
  ticker: string;
  type: "BUY" | "SELL";
  buyerSeller: string;
  valueCr: number;
}

const recentDeals: BlockDeal[] = [
  { time: "14:22", ticker: "RELIANCE.NS", type: "BUY", buyerSeller: "Goldman Sachs Asia", valueCr: 420 },
  { time: "13:45", ticker: "HDFCBANK.NS", type: "BUY", buyerSeller: "Morgan Stanley Mauritius", valueCr: 310 },
  { time: "11:10", ticker: "INFY.NS", type: "SELL", buyerSeller: "Vanguard Emerging Markets", valueCr: 185 },
];

export default function InstitutionalFlowWidget() {
  const [fiiNet] = useState(1480); // Net +1,480 Cr
  const [diiNet] = useState(850);  // Net +850 Cr

  return (
    <div className="rounded-[24px] border border-hair bg-white p-6 shadow-[0_16px_40px_rgba(20,20,20,0.04)] sm:p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-[#F2EFE6] pb-6">
        <div>
          <span className="eyebrow">Smart Money Monitor</span>
          <h3 className="mt-1 font-head text-[22px] font-semibold">Institutional Flow & Block Deal Tape</h3>
          <p className="text-[13px] text-mute">Track where FII & DII capital is accumulating beyond headline noise.</p>
        </div>

        <div className="flex gap-4 text-right">
          <div>
            <span className="text-[10px] uppercase font-bold text-mute">FII Net (Today)</span>
            <p className="font-head text-[16px] font-bold text-[#17845A]">+₹{fiiNet} Cr</p>
          </div>
          <div>
            <span className="text-[10px] uppercase font-bold text-mute">DII Net (Today)</span>
            <p className="font-head text-[16px] font-bold text-[#17845A]">+₹{diiNet} Cr</p>
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        {/* Bulk Deals Tape */}
        <div>
          <h4 className="font-head text-[16px] font-semibold mb-4">NSE Bulk & Block Deals Feed</h4>
          <div className="rounded-[20px] border border-[#EFE8D8] bg-[#FDFBF7] p-4 space-y-3">
            {recentDeals.map((deal, idx) => (
              <div key={idx} className="flex items-center justify-between rounded-xl bg-white p-3 border border-[#EFE8D8] shadow-sm">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-head font-bold text-[14px]">{deal.ticker}</span>
                    <span className={`text-[10px] font-bold rounded px-1.5 py-0.5 ${deal.type === "BUY" ? "bg-mint text-mint-ink" : "bg-[#FDECEC] text-[#D64550]"}`}>
                      {deal.type}
                    </span>
                  </div>
                  <p className="text-[11.5px] text-mute mt-0.5">{deal.buyerSeller}</p>
                </div>
                <div className="text-right">
                  <span className="font-mono font-bold text-[14px]">₹{deal.valueCr} Cr</span>
                  <span className="block text-[10px] text-mute">{deal.time} IST</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sector Accumulation Heatmap */}
        <div className="rounded-[20px] border border-[#EFE8D8] bg-[#FAF8F2] p-5 flex flex-col justify-between">
          <div>
            <h4 className="font-head text-[16px] font-semibold mb-3">Institutional Sector Bias Index</h4>
            <div className="space-y-3">
              {[
                { sector: "Banking & Financials", status: "Heavy Accumulation", score: "+88%" },
                { sector: "Capital Goods & Defense", status: "Moderate Buying", score: "+64%" },
                { sector: "IT Services", status: "Net Distribution", score: "-24%" },
              ].map((sec) => (
                <div key={sec.sector} className="flex justify-between items-center bg-white p-3 rounded-xl border border-[#EFE8D8]">
                  <div>
                    <span className="font-head font-semibold text-[13px]">{sec.sector}</span>
                    <span className="block text-[11px] text-mute">{sec.status}</span>
                  </div>
                  <span className={`font-mono text-[14px] font-bold ${sec.score.startsWith("+") ? "text-up" : "text-down"}`}>
                    {sec.score}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 rounded-xl bg-amber/10 p-3 text-[11.5px] text-amber-ink font-medium">
            💡 Smart Money Signal: Banking sector showing 4-week consecutive net inflow streak.
          </div>
        </div>
      </div>
    </div>
  );
}
