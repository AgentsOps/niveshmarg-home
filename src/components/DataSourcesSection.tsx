export default function DataSourcesSection() {
  return (
    <section className="border-y border-[#EDEDED] bg-[#F6F6F6]">
      <div className="mx-auto grid max-w-[1180px] grid-cols-2 divide-x divide-y divide-[#E4E4E4] px-6 md:grid-cols-5 md:divide-y-0">
        <div className="flex items-center justify-center gap-2 py-8 font-head text-[17px] font-semibold">
          <span className="material-symbols-outlined text-[20px]">apartment</span>NSE
        </div>
        <div className="flex items-center justify-center gap-2 py-8 font-head text-[17px] font-semibold">
          <span className="material-symbols-outlined text-[20px]">account_balance</span>BSE
        </div>
        <div className="flex items-center justify-center gap-2 py-8 font-head text-[17px] font-semibold">
          <span className="material-symbols-outlined text-[20px]">public</span>Global
        </div>
        <div className="flex items-center justify-center gap-2 py-8 font-head text-[17px] font-semibold">
          <span className="material-symbols-outlined text-[20px]">smart_toy</span>OpenRouter
        </div>
        <div className="col-span-2 flex items-center justify-center gap-2 py-8 font-head text-[17px] font-semibold md:col-span-1">
          <span className="material-symbols-outlined text-[20px]">send</span>Telegram
        </div>
      </div>
    </section>
  );
}
