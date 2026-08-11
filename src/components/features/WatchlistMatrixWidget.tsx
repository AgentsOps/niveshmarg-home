"use client";

import { useState } from "react";

type ConvictionBucket = "High Conviction" | "Catalyst Watch" | "De-risked";

interface WatchlistItem {
  ticker: string;
  name: string;
  bucket: ConvictionBucket;
  price: string;
  change: string;
  aiScore: number;
  notes: string;
}

const watchlistItems: WatchlistItem[] = [
  {
    ticker: "RELIANCE.NS",
    name: "Reliance Industries",
    bucket: "High Conviction",
    price: "₹2,980.50",
    change: "+1.8%",
    aiScore: 88,
    notes: "Q3 retail EBITDA expansion + green hydrogen pilot rollout.",
  },
  {
    ticker: "HDFCBANK.NS",
    name: "HDFC Bank",
    bucket: "High Conviction",
    price: "₹1,640.25",
    change: "+2.3%",
    aiScore: 91,
    notes: "FII net buyer for 6 consecutive sessions post merger clarification.",
  },
  {
    ticker: "TATAMOTORS.NS",
    name: "Tata Motors",
    bucket: "Catalyst Watch",
    price: "₹1,015.00",
    change: "+0.6%",
    aiScore: 84,
    notes: "Awaiting JLR Q4 margin release before raising target to ₹1,180.",
  },
  {
    ticker: "INFY.NS",
    name: "Infosys Ltd",
    bucket: "De-risked",
    price: "₹1,790.00",
    change: "-0.4%",
    aiScore: 74,
    notes: "Trimmed 10% position to lock gains; holding core for dividend yield.",
  },
];

export default function WatchlistMatrixWidget() {
  const [activeTab, setActiveTab] = useState<ConvictionBucket>("High Conviction");

  const filteredItems = watchlistItems.filter((item) => item.bucket === activeTab);

  return (
    <div className="rounded-[24px] border border-hair bg-white p-6 shadow-[0_16px_40px_rgba(20,20,20,0.04)] sm:p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-[#F2EFE6] pb-6">
        <div>
          <span className="eyebrow">Smart Conviction Tracker</span>
          <h3 className="mt-1 font-head text-[22px] font-semibold">Priority Watchlist Board</h3>
          <p className="text-[13px] text-mute">Organize opportunities by conviction stage and keep research context beside each ticker.</p>
        </div>

        <div className="flex gap-1.5 rounded-full bg-cream p-1">
          {(["High Conviction", "Catalyst Watch", "De-risked"] as const).map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`rounded-full px-3.5 py-1.5 text-[12px] font-semibold transition ${
                activeTab === tab ? "bg-rose text-rose-ink shadow-sm" : "text-mute hover:text-ink"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-4">
        {filteredItems.map((item) => (
          <div key={item.ticker} className="rounded-[20px] border border-[#EFE8D8] bg-[#FDFBF7] p-5 transition hover:shadow-md">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-head text-[17px] font-bold">{item.ticker}</h4>
                  <span className="text-[12px] text-mute">({item.name})</span>
                </div>
                <p className="mt-1 text-[12.5px] text-[#555]">{item.notes}</p>
              </div>

              <div className="flex items-center gap-6">
                <div>
                  <span className="block text-[10px] uppercase text-mute font-medium">LTP</span>
                  <span className="font-mono text-[14px] font-bold">{item.price}</span>
                  <span className="ml-1 text-[11px] font-bold text-up">{item.change}</span>
                </div>

                <div className="text-right">
                  <span className="block text-[10px] uppercase text-mute font-medium">AI Score</span>
                  <span className="inline-block rounded-md bg-rose px-2 py-0.5 font-head text-[14px] font-bold text-rose-ink">
                    {item.aiScore}/100
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
