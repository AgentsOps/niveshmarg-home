"use client";

import { useState } from "react";

interface WorkflowStep {
  num: string;
  title: string;
  detail: string;
  actionText: string;
  status: string;
}

const steps: WorkflowStep[] = [
  {
    num: "01",
    title: "Bring Holdings & Watchlist",
    detail: "Import your positions, average prices, and target tickers into the workspace operating surface.",
    actionText: "Holdings Synced (4 Active Tickers)",
    status: "Step 1 Complete",
  },
  {
    num: "02",
    title: "Run Agent Swarm Debate",
    detail: "Six AI specialists analyze earnings, chart momentum, news sentiment, and downside risk.",
    actionText: "Swarm Verdict Reached (84% Convergence)",
    status: "Step 2 Complete",
  },
  {
    num: "03",
    title: "Test & Doctor Diagnosis",
    detail: "Backtest entry rules across 5Y history and let Portfolio Doctor check for concentration drift.",
    actionText: "Backtest Validated (Sharpe 1.84)",
    status: "Step 3 Complete",
  },
  {
    num: "04",
    title: "Walk Path & Keep Record",
    detail: "Export decision report, set automated alerts, and monitor portfolio execution with discipline.",
    actionText: "Report Archived & PDF Exported",
    status: "Step 4 Complete",
  },
];

export default function PathWorkflowWidget() {
  const [currentStep, setCurrentStep] = useState(0);
  const active = steps[currentStep];

  return (
    <div className="rounded-[24px] border border-hair bg-white p-6 shadow-[0_16px_40px_rgba(20,20,20,0.04)] sm:p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-[#F2EFE6] pb-6">
        <div>
          <span className="eyebrow">Disciplined Investor Process</span>
          <h3 className="mt-1 font-head text-[22px] font-semibold">Interactive 4-Step Journey Stepper</h3>
          <p className="text-[13px] text-mute">Click through the 4 steps to see how NiveshMarg turns analysis into a repeatable system.</p>
        </div>

        <div className="flex gap-2">
          {steps.map((s, idx) => (
            <button
              key={s.num}
              type="button"
              onClick={() => setCurrentStep(idx)}
              className={`h-9 w-9 rounded-full font-head font-bold text-[13px] transition ${
                currentStep === idx
                  ? "bg-ink text-white shadow-md scale-105"
                  : "bg-cream text-mute hover:bg-[#EFEAD9]"
              }`}
            >
              {s.num}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 rounded-[20px] border border-[#EFE8D8] bg-[#FDFBF7] p-8 grid gap-6 lg:grid-cols-[1fr_300px] items-center">
        <div>
          <span className="font-head text-[36px] font-bold text-ink">{active.num}</span>
          <h4 className="mt-2 font-head text-[24px] font-bold">{active.title}</h4>
          <p className="mt-3 text-[14px] leading-[1.8] text-mute">{active.detail}</p>
        </div>

        <div className="rounded-[20px] bg-ink p-6 text-white text-center flex flex-col items-center justify-center">
          <span className="grid h-12 w-12 place-items-center rounded-full bg-mint text-mint-ink font-bold mb-3">
            ✓
          </span>
          <span className="text-[10px] uppercase font-bold text-gold tracking-wider">{active.status}</span>
          <p className="mt-2 font-head text-[15px] font-semibold">{active.actionText}</p>
        </div>
      </div>
    </div>
  );
}
