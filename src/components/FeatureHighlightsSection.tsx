import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

export default function FeatureHighlightsSection() {
  return (
    <section id="score" className="relative mx-auto max-w-[1180px] scroll-mt-24 px-6 py-20 sm:py-24">
      <svg
        className="absolute left-[12%] top-[20%] hidden w-16 text-gold lg:block"
        viewBox="0 0 60 12"
        fill="none"
        aria-hidden="true"
      >
        <path d="M2 8c4-8 8 4 12-2s8 6 12 0 8 4 12-2 8 4 10 0" stroke="currentColor" strokeWidth="2" />
      </svg>
      <svg
        className="absolute right-[12%] top-[20%] hidden w-16 text-gold lg:block"
        viewBox="0 0 60 12"
        fill="none"
        aria-hidden="true"
      >
        <path d="M2 8c4-8 8 4 12-2s8 6 12 0 8 4 12-2 8 4 10 0" stroke="currentColor" strokeWidth="2" />
      </svg>

      <ScrollReveal className="text-center">
        <span className="eyebrow">Three engines, one workspace</span>
        <h2 className="mt-6 font-head text-[clamp(2rem,6vw,2.875rem)] font-semibold tracking-[-0.02em]">
          Feature highlights
        </h2>
        <p className="mt-3 text-[14px] text-mute">
          Research that shows its working, not just its conclusion.
        </p>
      </ScrollReveal>

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
        <ScrollReveal delayMs={100}>
          <article className="h-full rounded-[20px] bg-rose p-7">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/70">
              <span className="material-symbols-outlined text-[22px] text-[#C2566A]">
                bar_chart
              </span>
            </span>
            <h3 className="mt-6 font-head text-[19px] font-semibold leading-snug">
              A Score Earned Four Times Over
            </h3>
            <p className="mt-3 text-[12.5px] leading-[1.7] text-rose-ink">
              Chronos forecast, technicals, news sentiment and market trend are each scored out of
              twenty-five — so a signal only carries weight when the evidence agrees with itself.
            </p>
            <div className="mt-6 border-t border-rose-line pt-4">
              <Link href="/features/ai-score" className="inline-flex items-center gap-2 text-[13px] font-semibold">
                More Details <span>→</span>
              </Link>
            </div>
          </article>
        </ScrollReveal>

        <ScrollReveal delayMs={200}>
          <article className="h-full rounded-[20px] bg-amber p-7">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/70">
              <span className="material-symbols-outlined text-[22px] text-[#B98A18]">
                groups
              </span>
            </span>
            <h3 className="mt-6 font-head text-[19px] font-semibold leading-snug">
              Six Analysts That Disagree
            </h3>
            <p className="mt-3 text-[12.5px] leading-[1.7] text-amber-ink">
              Fundamental, technical, news, valuation and macro agents each file a report. A risk
              manager argues against all of them before any verdict is written.
            </p>
            <div className="mt-6 border-t border-amber-line pt-4">
              <Link href="/features/swarm" className="inline-flex items-center gap-2 text-[13px] font-semibold">
                More Details <span>→</span>
              </Link>
            </div>
          </article>
        </ScrollReveal>

        <ScrollReveal delayMs={300}>
          <article className="h-full rounded-[20px] bg-sky p-7">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/70">
              <span className="material-symbols-outlined text-[22px] text-[#2E7E96]">
                forum
              </span>
            </span>
            <h3 className="mt-6 font-head text-[19px] font-semibold leading-snug">
              An Analyst You Can Question
            </h3>
            <p className="mt-3 text-[12.5px] leading-[1.7] text-sky-ink">
              Stock Chat reaches for ten live tools — prices, indicators, fundamentals, news and
              your own holdings — and shows you which ones it used to answer.
            </p>
            <div className="mt-6 border-t border-sky-line pt-4">
              <Link href="/features/workspace" className="inline-flex items-center gap-2 text-[13px] font-semibold">
                More Details <span>→</span>
              </Link>
            </div>
          </article>
        </ScrollReveal>
      </div>
    </section>
  );
}
