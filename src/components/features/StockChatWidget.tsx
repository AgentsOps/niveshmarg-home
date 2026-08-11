"use client";

import Image from "next/image";

export default function StockChatWidget() {

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
        <Image src="/images/app/nm-ai-chat.png"
          alt="Stock Chat Widget"
          width={400}
          height={400}
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
