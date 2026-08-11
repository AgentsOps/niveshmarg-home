"use client";

import { useState } from "react";

interface ChatMessage {
  sender: "user" | "ai";
  text: string;
  toolsUsed?: string[];
  metricsCard?: { label: string; value: string; trend?: string }[];
}

export default function StockChatWidget() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      sender: "user",
      text: "How does Reliance Industries Q3 performance compare against sector peers?",
    },
    {
      sender: "ai",
      text: "Reliance Industries reported Q3 consolidated EBITDA growth of +11.4% YoY. Telecom (Jio) ARPU increased to ₹181.7, while Retail gross revenue expanded by +22.8%. In comparison, TCS registered +6.2% revenue growth.",
      toolsUsed: ["Fetching Q3 Results", "Segmental Cashflow Analysis", "Peer Comparison Matrix"],
      metricsCard: [
        { label: "Jio ARPU", value: "₹181.7", trend: "+4.2%" },
        { label: "Retail Revenue", value: "₹83,063 Cr", trend: "+22.8%" },
        { label: "Cons. EBITDA", value: "₹44,678 Cr", trend: "+11.4%" },
      ],
    },
  ]);

  const [input, setInput] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg: ChatMessage = { sender: "user", text: input };
    const aiMsg: ChatMessage = {
      sender: "ai",
      text: `Analyzed query: "${input}". Scanning live order books, 200 EMA momentum, and news sentiment... The signal remains bullish with strong institutional inflows.`,
      toolsUsed: ["Live Order Book Scanner", "Technical Indicator Reader", "News Sentiment Classifier"],
    };

    setMessages((prev) => [...prev, userMsg, aiMsg]);
    setInput("");
  };

  return (
    <div className="rounded-[24px] border border-hair bg-white p-6 shadow-[0_16px_40px_rgba(20,20,20,0.04)] sm:p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-[#F2EFE6] pb-6">
        <div>
          <span className="eyebrow">Natural Language Analyst</span>
          <h3 className="mt-1 font-head text-[22px] font-semibold">Stock Chat Assistant Console</h3>
          <p className="text-[13px] text-mute">Ask natural market questions and see transparently which tools the AI uses.</p>
        </div>

        <span className="rounded-full bg-sky/20 px-3 py-1 text-[11px] font-bold text-sky-ink">
          10 Live Tools Connected
        </span>
      </div>

      <div className="mt-6 flex flex-col h-[400px] justify-between rounded-[20px] border border-[#EFE8D8] bg-[#FAF8F2] p-5">
        {/* Messages Stream */}
        <div className="space-y-4 overflow-y-auto pr-2">
          {messages.map((m, idx) => (
            <div key={idx} className={`flex flex-col ${m.sender === "user" ? "items-end" : "items-start"}`}>
              <div
                className={`max-w-[85%] rounded-[18px] p-4 text-[13px] leading-relaxed shadow-sm ${
                  m.sender === "user"
                    ? "bg-ink text-white rounded-tr-[4px]"
                    : "bg-white text-[#222] border border-[#EFE8D8] rounded-tl-[4px]"
                }`}
              >
                {m.sender === "ai" && m.toolsUsed && (
                  <div className="mb-2.5 flex flex-wrap gap-1.5 border-b border-[#F2EFE6] pb-2">
                    {m.toolsUsed.map((tool) => (
                      <span key={tool} className="inline-flex items-center gap-1 rounded bg-sky/20 px-2 py-0.5 text-[10px] font-bold text-sky-ink">
                        <span className="material-symbols-outlined text-[12px]">build</span>
                        {tool}
                      </span>
                    ))}
                  </div>
                )}

                <p>{m.text}</p>

                {m.metricsCard && (
                  <div className="mt-3 grid grid-cols-3 gap-2 border-t border-[#F2EFE6] pt-3">
                    {m.metricsCard.map((card) => (
                      <div key={card.label} className="rounded-lg bg-[#FAF8F2] p-2 text-center">
                        <span className="block text-[9.5px] text-mute uppercase font-semibold">{card.label}</span>
                        <span className="font-head text-[13px] font-bold text-ink">{card.value}</span>
                        {card.trend && <span className="block text-[10px] text-up font-bold">{card.trend}</span>}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Input Form */}
        <form onSubmit={handleSend} className="mt-4 flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask a question about any NSE stock..."
            className="w-full rounded-xl border border-[#E4DFCD] bg-white px-4 py-2.5 text-[13px] focus:outline-none focus:ring-2 focus:ring-sky-ink"
          />
          <button type="submit" className="rounded-xl bg-ink px-5 py-2.5 text-[13px] font-semibold text-white transition hover:opacity-90">
            Ask AI
          </button>
        </form>
      </div>
    </div>
  );
}
