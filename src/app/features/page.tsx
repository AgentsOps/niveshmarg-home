import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import JsonLd from "@/components/JsonLd";
import siteData from "../../../data/site_data.json";
import {
  SITE_URL,
  breadcrumbJsonLd,
  faqJsonLd,
  featurePath,
  features,
  featuresIn,
  type Accent,
  type Category,
} from "@/lib/features";

const title = "Features — Learn, Analyse and Manage Stocks";
const description =
  "Every NiveshMarg feature in one place: paper trading with virtual money, backtesting, a stock screener, AI stock analysis, Stock Chat, portfolio tracking, the Portfolio Doctor and the mobile app.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/features" },
  openGraph: {
    title,
    description,
    url: `${SITE_URL}/features`,
    siteName: "NiveshMarg",
    locale: "en_IN",
    type: "website",
  },
  twitter: { card: "summary_large_image", title, description },
};

const accentMap: Record<Accent, { shell: string; title: string; band: string; icon: string }> = {
  rose: { shell: "bg-rose", title: "text-rose-ink", band: "bg-white/70 text-rose-ink", icon: "text-[#C2566A]" },
  amber: { shell: "bg-amber", title: "text-amber-ink", band: "bg-white/70 text-amber-ink", icon: "text-[#B98A18]" },
  sky: { shell: "bg-sky", title: "text-sky-ink", band: "bg-white/70 text-sky-ink", icon: "text-[#2E7E96]" },
  mint: { shell: "bg-mint", title: "text-mint-ink", band: "bg-white/70 text-mint-ink", icon: "text-[#3c5a2c]" },
};

export default function FeaturesOverviewPage() {
  const overview = siteData.featuresOverview;
  const categories = overview.categories as {
    key: Category;
    eyebrow: string;
    title: string;
    description: string;
    icon: string;
  }[];

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "NiveshMarg features",
    itemListElement: features.map((feature, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: feature.title,
      url: `${SITE_URL}${featurePath(feature.slug)}`,
    })),
  };

  return (
    <div className="bg-white text-ink">
      <JsonLd data={itemList} />
      <JsonLd data={faqJsonLd(overview.faqs)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Features", path: "/features" },
        ])}
      />
      <Header navItems={siteData.navigation} />

      <main className="mx-auto max-w-[1180px] px-6 py-12 sm:py-16">
        <header className="text-center">
          <span className="eyebrow">{overview.eyebrow}</span>
          <h1 className="mt-6 font-head text-[clamp(2.1rem,6vw,3.4rem)] font-semibold tracking-[-0.04em]">
            {overview.title}
          </h1>
          <p className="mx-auto mt-4 max-w-[720px] text-[15px] leading-[1.8] text-mute">{overview.description}</p>

          {/* In-page jump links: each pillar is a section a search result can deep-link to. */}
          <nav aria-label="Feature categories" className="mt-8 flex flex-wrap justify-center gap-2.5">
            {categories.map((category) => (
              <a key={category.key} href={`#${category.key}`} className="pill pill-line pill-sm inline-flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[17px]" aria-hidden="true">{category.icon}</span>
                {category.eyebrow}
              </a>
            ))}
          </nav>
        </header>

        {categories.map((category) => (
          <section key={category.key} id={category.key} className="mt-16 scroll-mt-24" aria-labelledby={`${category.key}-title`}>
            <div className="flex flex-col gap-3 border-b border-hair pb-6 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-[0.08em] text-mute">
                  <span className="material-symbols-outlined text-[17px]" aria-hidden="true">{category.icon}</span>
                  {category.eyebrow}
                </span>
                <h2 id={`${category.key}-title`} className="mt-2 font-head text-[clamp(1.6rem,4vw,2.25rem)] font-semibold tracking-[-0.02em]">
                  {category.title}
                </h2>
              </div>
              <p className="max-w-[440px] text-[13.5px] leading-[1.75] text-mute">{category.description}</p>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {featuresIn(category.key).map((feature) => {
                const tone = accentMap[feature.accent];
                return (
                  <Link
                    key={feature.slug}
                    href={featurePath(feature.slug)}
                    className={`group flex h-full flex-col rounded-[24px] border border-[#EFE9DA] ${tone.shell} p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(20,20,20,0.08)]`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className={`inline-flex rounded-full px-3 py-1.5 text-[11px] font-medium ${tone.band}`}>
                        {feature.kicker}
                      </span>
                      <span className="grid h-10 w-10 place-items-center rounded-full bg-white/75">
                        <span className={`material-symbols-outlined text-[19px] ${tone.icon}`} aria-hidden="true">{feature.icon}</span>
                      </span>
                    </div>

                    <h3 className={`mt-6 font-head text-[1.6rem] font-semibold leading-[1.15] ${tone.title}`}>{feature.title}</h3>
                    <p className="mt-3 flex-1 text-[13px] leading-[1.8] text-[#4c4c4c]">{feature.summary}</p>

                    <div className="mt-6 flex items-center justify-between gap-3 border-t border-black/5 pt-4">
                      <span className="text-[11.5px] font-medium text-[#3b3b3b]">{feature.badge}</span>
                      <span className="inline-flex shrink-0 items-center gap-1.5 text-[12px] font-semibold text-[#2d2d2d]">
                        {overview.learnMoreText} <span aria-hidden="true">→</span>
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        ))}

        <section className="mt-20" aria-labelledby="faq-title">
          <div className="text-center">
            <span className="eyebrow">{siteData.featureDetailCommon.faqEyebrow}</span>
            <h2 id="faq-title" className="mt-4 font-head text-[clamp(1.6rem,4vw,2.25rem)] font-semibold tracking-[-0.02em]">
              {siteData.featureDetailCommon.faqTitle}
            </h2>
          </div>
          <div className="mx-auto mt-8 max-w-[820px] divide-y divide-hair rounded-[20px] border border-hair bg-white">
            {overview.faqs.map((faq) => (
              <details key={faq.q} className="group px-5 py-4 sm:px-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-head text-[15px] font-semibold [&::-webkit-details-marker]:hidden">
                  {faq.q}
                  <span className="material-symbols-outlined shrink-0 text-[20px] text-mute transition group-open:rotate-45" aria-hidden="true">
                    add
                  </span>
                </summary>
                <p className="mt-3 text-[13.5px] leading-[1.8] text-mute">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-[28px] bg-ink px-6 py-10 text-center text-white sm:px-10">
          <h2 className="font-head text-[clamp(1.5rem,4vw,2.25rem)] font-semibold tracking-[-0.02em]">
            {siteData.featureDetailCommon.ctaTitle}
          </h2>
          <p className="mx-auto mt-3 max-w-[560px] text-[14px] leading-[1.8] text-white/70">
            {siteData.featureDetailCommon.ctaBody}
          </p>
          <a href={siteData.site.dashboardUrl} className="pill mt-7 inline-flex bg-gold text-ink">
            {siteData.featureDetailCommon.startCta}
          </a>
        </section>
      </main>

      <Footer />
    </div>
  );
}
