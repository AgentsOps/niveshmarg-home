"use client";

import { useState } from "react";

export default function ReportsExportsWidget() {
  const [includeSwarm, setIncludeSwarm] = useState(true);
  const [includeTechnical, setIncludeTechnical] = useState(true);
  const [includeRiskAudit, setIncludeRiskAudit] = useState(true);
  const [isExported, setIsExported] = useState(false);

  const handleExport = () => {
    setIsExported(true);
    setTimeout(() => setIsExported(false), 3000);
  };

  return (
    <div className="rounded-[24px] border border-hair bg-white p-6 shadow-[0_16px_40px_rgba(20,20,20,0.04)] sm:p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-[#F2EFE6] pb-6">
        <div>
          <span className="eyebrow">Auditable Decision Records</span>
          <h3 className="mt-1 font-head text-[22px] font-semibold">Institutional PDF Report Builder</h3>
          <p className="text-[13px] text-mute">Turn research into clean, shareable decision documents with reasoning intact.</p>
        </div>

        <button
          type="button"
          onClick={handleExport}
          className="rounded-xl bg-ink px-5 py-2.5 text-[13px] font-semibold text-white transition hover:opacity-90 flex items-center gap-2"
        >
          <span className="material-symbols-outlined text-[18px]">picture_as_pdf</span>
          {isExported ? "Report Generated!" : "Generate PDF Export"}
        </button>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[300px_1fr]">
        {/* Export Settings */}
        <div className="rounded-[20px] border border-[#EFE8D8] bg-[#FDFBF7] p-5 space-y-4">
          <h4 className="font-head text-[15px] font-semibold">Report Components</h4>

          <label className="flex items-center gap-3 text-[13px] cursor-pointer">
            <input
              type="checkbox"
              checked={includeSwarm}
              onChange={(e) => setIncludeSwarm(e.target.checked)}
              className="h-4 w-4 rounded accent-ink"
            />
            <span>Swarm Agent Debate Transcript</span>
          </label>

          <label className="flex items-center gap-3 text-[13px] cursor-pointer">
            <input
              type="checkbox"
              checked={includeTechnical}
              onChange={(e) => setIncludeTechnical(e.target.checked)}
              className="h-4 w-4 rounded accent-ink"
            />
            <span>Technical Levels &amp; AI Score</span>
          </label>

          <label className="flex items-center gap-3 text-[13px] cursor-pointer">
            <input
              type="checkbox"
              checked={includeRiskAudit}
              onChange={(e) => setIncludeRiskAudit(e.target.checked)}
              className="h-4 w-4 rounded accent-ink"
            />
            <span>Chief Risk Manager Dissent Audit</span>
          </label>
        </div>

        {/* Live Document Preview Card */}
        <div className="rounded-[20px] border border-[#E4DFCD] bg-white p-6 shadow-md">
          <div className="flex justify-between items-center border-b border-[#F0EADA] pb-4">
            <div>
              <span className="font-head font-bold text-[18px]">NIVESHMARG INSTITUTIONAL RESEARCH</span>
              <p className="text-[11px] text-mute">Executive Summary &amp; Audit Trail • Target: RELIANCE.NS</p>
            </div>
            <span className="rounded bg-mint px-2.5 py-1 text-[10px] font-bold text-mint-ink">APPROVED VERDICT</span>
          </div>

          <div className="mt-4 space-y-3 text-[12.5px] leading-relaxed text-[#333]">
            <p><strong>Executive Summary:</strong> Signal strength score of 88/100 confirmed across Chronos forecast and news sentiment models.</p>
            {includeSwarm && (
              <div className="rounded-lg bg-[#FAF8F2] p-3 border border-[#EFE8D8]">
                <strong>Swarm Consensus:</strong> 6 analysts converged on upside target of ₹3,400 with 1:2.8 Risk/Reward.
              </div>
            )}
            {includeTechnical && (
              <div className="rounded-lg bg-[#FAF8F2] p-3 border border-[#EFE8D8]">
                <strong>Levels:</strong> Entry ₹2,950–₹2,980 | Target ₹3,400 | Stop Loss ₹2,790.
              </div>
            )}
            {includeRiskAudit && (
              <div className="rounded-lg bg-[#FDECEC] p-3 border border-[#F5C2C7] text-[#842029]">
                <strong>Risk Audit:</strong> Dissent flag active if Q3 crude refining margins compress &gt;8%.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
