import Link from "next/link";
import ScrollReveal from "./ScrollReveal";
import siteData from "../../data/site_data.json";

export default function WorkspaceSection() {
  const data = siteData.workspaceSection;

  return (
    <section id="workspace" className="mx-auto max-w-[1180px] scroll-mt-24 px-6 py-20 sm:py-24">
      <ScrollReveal className="text-center">
        <span className="eyebrow">{data.eyebrow}</span>
        <h2 className="mt-6 font-head text-[clamp(1.875rem,5.5vw,2.625rem)] font-semibold tracking-[-0.02em]">
          {data.title}
        </h2>
        <p className="mt-3 text-[14px] text-mute">{data.subtitle}</p>
      </ScrollReveal>

      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {data.cards.map((card, idx) => {
          const cardBody = (
            <div className="h-full rounded-[18px] border border-hair bg-white p-6 transition hover:border-[#DCDCDC]">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-cream text-ink">
                <span className="material-symbols-outlined text-[20px]">{card.icon}</span>
              </span>
              <h3 className="mt-5 font-head text-[16px] font-semibold">{card.title}</h3>
              <p className="mt-2 text-[12.5px] leading-[1.7] text-mute">{card.description}</p>
            </div>
          );

          return (
            <ScrollReveal key={card.title} delayMs={(idx % 3) * 100}>
              {"link" in card && card.link ? (
                <Link href={card.link} className="block h-full">
                  {cardBody}
                </Link>
              ) : (
                cardBody
              )}
            </ScrollReveal>
          );
        })}

        {/* Featured Card */}
        <ScrollReveal delayMs={200}>
          <div className="flex h-full flex-col justify-between rounded-[18px] bg-cream p-6">
            <div>
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gold text-ink">
                <span className="material-symbols-outlined text-[20px]">{data.featuredCard.icon}</span>
              </span>
              <h3 className="mt-5 font-head text-[16px] font-semibold">{data.featuredCard.title}</h3>
              <p className="mt-2 text-[12.5px] leading-[1.7] text-mute">
                {data.featuredCard.description}
              </p>
            </div>
            <Link
              href={data.featuredCard.link}
              className="mt-5 inline-flex items-center gap-2 text-[13px] font-semibold"
            >
              {data.featuredCard.linkText} <span>→</span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
