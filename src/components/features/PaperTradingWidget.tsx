"use client";

import { useState } from "react";

interface SimulatedTrade {
  id: string;
  ticker: string;
  type: "BUY" | "SELL";
  shares: number;
  price: number;
  pnl: number;
}

export default function PaperTradingWidget() {
  const [balance, setBalance] = useState(1000000); // 10 Lakh Virtual cash
  const [ticker, setTicker] = useState("RELIANCE.NS");
  const [shares, setShares] = useState(25);
  const [orderType, setOrderType] = useState<"BUY" | "SELL">("BUY");
  const [trades, setTrades] = useState<SimulatedTrade[]>([
    { id: "1", ticker: "INFY.NS", type: "BUY", shares: 50, price: 1750, pnl: 2000 },
  ]);

  const currentPrice = ticker === "RELIANCE.NS" ? 2980 : 1790;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const tradeCost = shares * currentPrice;
    if (orderType === "BUY" && tradeCost > balance) return;

    const newTrade: SimulatedTrade = {
      id: Date.now().toString(),
      ticker,
      type: orderType,
      shares,
      price: currentPrice,
      pnl: 0,
    };

    setTrades([newTrade, ...trades]);
    if (orderType === "BUY") {
      setBalance((b) => b - tradeCost);
    } else {
      setBalance((b) => b + tradeCost);
    }
  };

  return (
    <div className="rounded-[24px] border border-hair bg-white p-6 shadow-[0_16px_40px_rgba(20,20,20,0.04)] sm:p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-[#F2EFE6] pb-6">
        <div>
          <span className="eyebrow">Virtual Practice Deck</span>
          <h3 className="mt-1 font-head text-[22px] font-semibold">Paper Trading Execution Ticket</h3>
          <p className="text-[13px] text-mute">Place simulated orders with live price logic without real capital at risk.</p>
        </div>

        <div className="rounded-xl border border-amber/30 bg-amber/10 px-4 py-2 text-right">
          <span className="text-[10px] uppercase font-bold text-amber-ink tracking-wider">Virtual Cash Available</span>
          <p className="font-head text-[18px] font-bold text-ink">₹{balance.toLocaleString("en-IN")}</p>
        </div>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[340px_1fr]">
        {/* Order Ticket Form */}
        <form onSubmit={handlePlaceOrder} className="rounded-[20px] border border-[#EFE8D8] bg-[#FDFBF7] p-5 space-y-4">
          <h4 className="font-head text-[16px] font-semibold">New Order Ticket</h4>

          <div>
            <label className="block text-[12px] font-medium text-mute mb-1">Select Ticker</label>
            <select
              value={ticker}
              onChange={(e) => setTicker(e.target.value)}
              className="w-full rounded-xl border border-[#E4DFCD] bg-white px-3 py-2 text-[13px] font-medium focus:outline-none"
            >
              <option value="RELIANCE.NS">RELIANCE.NS (LTP ₹2,980)</option>
              <option value="INFY.NS">INFY.NS (LTP ₹1,790)</option>
            </select>
          </div>

          <div>
            <label className="block text-[12px] font-medium text-mute mb-1">Order Direction</label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setOrderType("BUY")}
                className={`rounded-xl py-2 text-[13px] font-semibold transition ${
                  orderType === "BUY" ? "bg-[#17845A] text-white" : "bg-white text-mute border border-[#E4DFCD]"
                }`}
              >
                BUY
              </button>
              <button
                type="button"
                onClick={() => setOrderType("SELL")}
                className={`rounded-xl py-2 text-[13px] font-semibold transition ${
                  orderType === "SELL" ? "bg-[#D64550] text-white" : "bg-white text-mute border border-[#E4DFCD]"
                }`}
              >
                SELL
              </button>
            </div>
          </div>

          <div>
            <label className="block text-[12px] font-medium text-mute mb-1">Quantity (Shares)</label>
            <input
              type="number"
              min="1"
              max="500"
              value={shares}
              onChange={(e) => setShares(parseInt(e.target.value) || 1)}
              className="w-full rounded-xl border border-[#E4DFCD] bg-white px-3 py-2 text-[13px] font-semibold focus:outline-none"
            />
          </div>

          <div className="border-t border-[#EFE8D8] pt-3 flex justify-between text-[12px] font-medium text-mute">
            <span>Estimated Value:</span>
            <span className="font-head font-bold text-ink">₹{(shares * currentPrice).toLocaleString("en-IN")}</span>
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-ink py-2.5 text-[13px] font-semibold text-white transition hover:opacity-90"
          >
            Execute Paper Trade
          </button>
        </form>

        {/* Live Trades Table */}
        <div>
          <h4 className="font-head text-[16px] font-semibold mb-4">Simulated Execution Log</h4>
          <div className="rounded-[20px] border border-[#EFE8D8] bg-white overflow-hidden">
            <div className="grid grid-cols-5 bg-[#FAF7F0] px-4 py-2.5 text-[11px] font-bold text-mute uppercase tracking-wider">
              <span>Time</span>
              <span>Ticker</span>
              <span>Type</span>
              <span>Qty @ Price</span>
              <span>P&L Status</span>
            </div>
            <div className="divide-y divide-[#F2EFE6] max-h-[260px] overflow-y-auto">
              {trades.map((t) => (
                <div key={t.id} className="grid grid-cols-5 px-4 py-3 text-[12.5px] items-center">
                  <span className="text-mute text-[11px]">Just now</span>
                  <span className="font-head font-semibold">{t.ticker}</span>
                  <span className={`font-bold ${t.type === "BUY" ? "text-[#17845A]" : "text-[#D64550]"}`}>{t.type}</span>
                  <span>{t.shares} @ ₹{t.price}</span>
                  <span className="font-semibold text-up">+₹{t.pnl} (Live)</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
