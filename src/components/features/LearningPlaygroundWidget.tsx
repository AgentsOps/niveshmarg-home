import WidgetFrame from "./WidgetFrame";

const lessons = [
  { icon: "swap_horiz", step: "Practise", title: "Buy 10 TCS with virtual money", note: "Filled at the live price. P&L updates as the market moves.", done: true },
  { icon: "forum", step: "Ask", title: "“Why did TCS fall 2% today?”", note: "Stock Chat reads the news and indicators and explains.", done: true },
  { icon: "groups", step: "Analyse", title: "Read the bull and bear case", note: "Six AI analysts argue both sides before a verdict.", done: false },
  { icon: "history", step: "Test", title: "Backtest an RSI strategy on 5 years", note: "See returns and the worst drawdown before trusting it.", done: false },
];

export default function LearningPlaygroundWidget() {
  return (
    <WidgetFrame
      eyebrow="Your practice path"
      title="A first week in the playground"
      description="Every step uses live market data and virtual money."
      aside={
        <div className="rounded-xl border border-[#d9e8cc] bg-mint/40 px-4 py-2 sm:text-right">
          <span className="text-[10px] font-bold uppercase tracking-wider text-mint-ink">Real money at risk</span>
          <p className="font-head text-[18px] font-bold text-ink">₹0</p>
        </div>
      }
    >
      <ol className="grid gap-3 md:grid-cols-2">
        {lessons.map((lesson, index) => (
          <li key={lesson.title} className="flex gap-4 rounded-[18px] border border-[#EFE8D8] bg-[#FDFBF7] p-4">
            <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${lesson.done ? "bg-mint text-mint-ink" : "bg-white text-ink"}`}>
              <span className="material-symbols-outlined text-[20px]" aria-hidden="true">{lesson.done ? "check" : lesson.icon}</span>
            </span>
            <div className="min-w-0">
              <p className="text-[10.5px] font-bold uppercase tracking-wider text-mute">
                Day {index + 1} · {lesson.step}
              </p>
              <p className="mt-1 font-head text-[14.5px] font-semibold">{lesson.title}</p>
              <p className="mt-1 text-[12px] leading-[1.6] text-mute">{lesson.note}</p>
            </div>
          </li>
        ))}
      </ol>
    </WidgetFrame>
  );
}
