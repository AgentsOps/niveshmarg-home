import Link from "next/link";
import ScrollReveal from "./ScrollReveal";
import siteData from "../../data/site_data.json";

export default function FeatureHighlightsSection() {
  const data = siteData.featureHighlights;

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
        <span className="eyebrow">{data.eyebrow}</span>
        <h2 className="mt-6 font-head text-[clamp(2rem,6vw,2.875rem)] font-semibold tracking-[-0.02em]">
          {data.title}
        </h2>
        <p className="mt-3 text-[14px] text-mute">{data.subtitle}</p>
      </ScrollReveal>

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
        {data.cards.map((card, idx) => (
          <ScrollReveal key={card.title} delayMs={(idx + 1) * 100}>
            <article className={`h-full rounded-[20px] ${card.bgClass} p-7`}>
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/70">
                <span className={`material-symbols-outlined text-[22px] ${card.iconColor}`}>
                  {card.icon}
                </span>
              </span>
              <h3 className="mt-6 font-head text-[19px] font-semibold leading-snug">
                {card.title}
              </h3>
              <p className={`mt-3 text-[12.5px] leading-[1.7] ${card.textClass}`}>
                {card.description}
              </p>
              <div className={`mt-6 border-t ${card.borderClass} pt-4`}>
                <Link href={card.link} className="inline-flex items-center gap-2 text-[13px] font-semibold">
                  More Details <span>→</span>
                </Link>
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
