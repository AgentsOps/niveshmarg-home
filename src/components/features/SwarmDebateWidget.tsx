"use client";

import { useState } from "react";

interface AgentStatement {
  agentName: string;
  role: string;
  avatarBg: string;
  avatarColor: string;
  icon: string;
  bias: "bull" | "bear" | "neutral" | "risk";
  thesis: string;
  keyMetric: string;
}

const debateRounds: Record<string, AgentStatement[]> = {
  "TATAMOTORS.NS": [
    {
      agentName: "Fundamental Agent",
      role: "Financial & Earnings Specialist",
      avatarBg: "bg-[#E9F0FA]",
      avatarColor: "text-[#1E5AA8]",
      icon: "account_balance",
      bias: "bull",
      thesis: "Jaguar Land Rover order bank remains resilient at £2.1B with commercial vehicle margins improving to 8.4%.",
      keyMetric: "EV EBITDA +210bps",
    },
    {
      agentName: "Technical Analyst",
      role: "Price & Momentum Lead",
      avatarBg: "bg-[#FCEFC7]",
      avatarColor: "text-[#B98A18]",
      icon: "ssid_chart",
      bias: "bull",
      thesis: "Consolidating in a symmetrical triangle above the 50-day moving average (₹980) with healthy volume accumulation.",
      keyMetric: "RSI 62 • Breakout pending",
    },
    {
      agentName: "Sentiment & News",
      role: "Media & Event Tracker",
      avatarBg: "bg-[#FBE2E4]",
      avatarColor: "text-[#C2566A]",
      icon: "newspaper",
      bias: "neutral",
      thesis: "Positive sentiment around luxury segment, offset by near-term UK market interest rate uncertainty.",
      keyMetric: "78% Positive Tone",
    },
    {
      agentName: "Macro Strategist",
      role: "Global Cycle Analyst",
      avatarBg: "bg-[#E9F6EE]",
      avatarColor: "text-[#17845A]",
      icon: "public",
      bias: "bull",
      thesis: "India domestic passenger vehicle sales tailwinds and easing battery supply chain costs support 2026 targets.",
      keyMetric: "Macro Index +1.4",
    },
    {
      agentName: "Valuation Specialist",
      role: "Intrinsic Value Modeler",
      avatarBg: "bg-[#F0E6FF]",
      avatarColor: "text-[#7C3AED]",
      icon: "calculate",
      bias: "bull",
      thesis: "DCF model yields intrinsic value of ₹1,180/share against current price of ₹1,015.",
      keyMetric: "Discount: 14%",
    },
    {
      agentName: "Chief Risk Manager",
      role: "Downside & Dissent Auditor",
      avatarBg: "bg-[#FDECEC]",
      avatarColor: "text-[#D64550]",
      icon: "shield",
      bias: "risk",
      thesis: "Dissent Flag: If UK sales drop >5% in Q4 or input steel costs rebound, stop loss at ₹940 must be triggered.",
      keyMetric: "Risk Level: ₹940 Stop",
    },
  ],
};

export default function SwarmDebateWidget() {
  const [activeStep, setActiveStep] = useState(5);
  const statements = debateRounds["TATAMOTORS.NS"];

  return (
    <div className="rounded-[24px] border border-hair bg-[#FAF9F5] p-6 shadow-[0_16px_40px_rgba(20,20,20,0.04)] sm:p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-[#EFE8D6] pb-6">
        <div>
          <span className="eyebrow">Swarm Engine Replay</span>
          <h3 className="mt-1 font-head text-[22px] font-semibold">Live Multi-Agent Debate Simulation</h3>
          <p className="text-[13px] text-mute">Observe how 6 AI agents debate before converging into one decision.</p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[12px] font-semibold text-ink">Debate Progress:</span>
          <div className="flex gap-1">
            {statements.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveStep(i)}
                className={`h-2.5 w-6 rounded-full transition ${
                  i <= activeStep ? "bg-amber-ink" : "bg-[#E2DACB]"
                }`}
                aria-label={`Go to debate step ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_360px]">
        {/* Agent debate stream */}
        <div className="space-y-4">
          {statements.slice(0, activeStep + 1).map((item, idx) => (
            <div
              key={item.agentName}
              className="animate-rise rounded-[20px] border border-[#EFE8D8] bg-white p-5 shadow-sm transition hover:shadow-md"
              style={{ animationDelay: `${idx * 60}ms` }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className={`grid h-10 w-10 place-items-center rounded-xl ${item.avatarBg} ${item.avatarColor}`}>
                    <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                  </span>
                  <div>
                    <h4 className="font-head text-[15px] font-semibold">{item.agentName}</h4>
                    <p className="text-[11px] text-mute">{item.role}</p>
                  </div>
                </div>

                <span
                  className={`rounded-full px-3 py-1 text-[11px] font-semibold ${
                    item.bias === "bull"
                      ? "bg-[#E9F6EE] text-[#17845A]"
                      : item.bias === "risk"
                      ? "bg-[#FDECEC] text-[#D64550]"
                      : "bg-[#FDF8E7] text-[#B98A18]"
                  }`}
                >
                  {item.keyMetric}
                </span>
              </div>

              <p className="mt-3.5 text-[13px] leading-[1.7] text-[#333] pl-13">
                “{item.thesis}”
              </p>
            </div>
          ))}
        </div>

        {/* Verdict Consensus Box */}
        <div className="flex flex-col justify-between rounded-[24px] bg-ink p-7 text-white shadow-xl">
          <div>
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-gold">Consensus Verdict</span>
              <span className="rounded-full bg-mint px-2.5 py-0.5 text-[10px] font-bold text-mint-ink">Active Setup</span>
            </div>

            <h4 className="mt-5 font-head text-[24px] font-bold">TATAMOTORS.NS</h4>
            <p className="mt-1 text-[12px] text-white/60">Swarm Agreement Score: <strong className="text-white">84%</strong></p>

            <dl className="mt-6 space-y-3.5 text-[13px]">
              <div className="flex justify-between border-b border-white/10 pb-2">
                <dt className="text-white/60">Suggested Entry</dt>
                <dd className="font-semibold tabular-nums text-white">₹1,005 – ₹1,020</dd>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <dt className="text-white/60">Target 1 (Base)</dt>
                <dd className="font-semibold tabular-nums text-up">₹1,180 (+16%)</dd>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <dt className="text-white/60">Stop Loss (Risk)</dt>
                <dd className="font-semibold tabular-nums text-down">₹940 (−7%)</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-white/60">Risk / Reward Ratio</dt>
                <dd className="font-semibold tabular-nums text-gold">1 : 2.3</dd>
              </div>
            </dl>
          </div>

          <div className="mt-8 rounded-[16px] bg-white/10 p-4 backdrop-blur-md">
            <p className="text-[11px] text-white/80 leading-relaxed">
              <strong>Risk Guard Audit:</strong> Downside risks fully priced at ₹940. Conviction remains high as long as 50-day EMA holds.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
