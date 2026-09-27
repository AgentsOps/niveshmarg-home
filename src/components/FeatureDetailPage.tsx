import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import FeatureLayout from "@/components/FeatureLayout";
import JsonLd from "@/components/JsonLd";
import siteData from "../../data/site_data.json";
import {
  breadcrumbJsonLd,
  faqJsonLd,
  featurePath,
  relatedTo,
  type Feature,
} from "@/lib/features";

import AiScoreWidget from "@/components/features/AiScoreWidget";
import SwarmDebateWidget from "@/components/features/SwarmDebateWidget";
import WorkspaceTerminalWidget from "@/components/features/WorkspaceTerminalWidget";
import PortfolioDoctorWidget from "@/components/features/PortfolioDoctorWidget";
import PaperTradingWidget from "@/components/features/PaperTradingWidget";
import BacktestingWidget from "@/components/features/BacktestingWidget";
import WatchlistMatrixWidget from "@/components/features/WatchlistMatrixWidget";
import StockChatWidget from "@/components/features/StockChatWidget";
import ReportsExportsWidget from "@/components/features/ReportsExportsWidget";
import PathWorkflowWidget from "@/components/features/PathWorkflowWidget";
import LearningPlaygroundWidget from "@/components/features/LearningPlaygroundWidget";
import StockAnalysisWidget from "@/components/features/StockAnalysisWidget";
import ScreenerWidget from "@/components/features/ScreenerWidget";
import PortfolioManagementWidget from "@/components/features/PortfolioManagementWidget";
import MobileAppWidget from "@/components/features/MobileAppWidget";

const accentStyles = {
  rose: {
    shell: "bg-rose",
    panel: "bg-[#FFF8F8]",
    eyebrow: "bg-white/70 text-rose-ink",
    icon: "text-[#C2566A]",
    chip: "bg-[#fff7f7] text-rose-ink border border-[#f0d8dc]",
    accent: "#C2566A",
  },
  amber: {
    shell: "bg-amber",
    panel: "bg-[#FFFDF6]",
    eyebrow: "bg-white/70 text-amber-ink",
    icon: "text-[#B98A18]",
    chip: "bg-[#fffaf0] text-amber-ink border border-[#f0e2b5]",
    accent: "#B98A18",
  },
  sky: {
    shell: "bg-sky",
    panel: "bg-[#F4FAFC]",
    eyebrow: "bg-white/70 text-sky-ink",
    icon: "text-[#2E7E96]",
    chip: "bg-[#f3fbff] text-sky-ink border border-[#cfe3ee]",
    accent: "#2E7E96",
  },
  mint: {
    shell: "bg-mint",
    panel: "bg-[#F6FAF3]",
    eyebrow: "bg-white/70 text-mint-ink",
    icon: "text-[#3c5a2c]",
    chip: "bg-[#f4faee] text-mint-ink border border-[#d9e8cc]",
    accent: "#3c5a2c",
  },
} as const;

const widgets: Record<string, () => React.ReactNode> = {
  "learn-stock-market": () => <LearningPlaygroundWidget />,
  "paper-trading": () => <PaperTradingWidget />,
  "backtesting-strategy": () => <BacktestingWidget />,
  path: () => <PathWorkflowWidget />,
  "stock-analysis": () => <StockAnalysisWidget />,
  "stock-screener": () => <ScreenerWidget />,
  "ai-score": () => <AiScoreWidget />,
  swarm: () => <SwarmDebateWidget />,
  "stock-chat": () => <StockChatWidget />,
  "portfolio-management": () => <PortfolioManagementWidget />,
  "portfolio-doctor": () => <PortfolioDoctorWidget />,
  watchlist: () => <WatchlistMatrixWidget />,
  "reports-exports": () => <ReportsExportsWidget />,
  "mobile-app": () => <MobileAppWidget />,
  workspace: () => <WorkspaceTerminalWidget />,
};

/**
 * A feature page. A server component: the copy, FAQ and structured data are
 * in the HTML a crawler receives, and only the interactive demo widget ships
 * JavaScript.
 */
export default function FeatureDetailPage({
  feature,
  previous,
  next,
}: {
  feature: Feature;
  previous?: Feature;
  next?: Feature;
}) {
  const common = siteData.featureDetailCommon;
  const style = accentStyles[feature.accent];
  const related = relatedTo(feature);
  const widget = widgets[feature.slug];
  const dashboardUrl = siteData.site.dashboardUrl;

  return (
    <FeatureLayout>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Features", path: "/features" },
          { name: feature.title, path: featurePath(feature.slug) },
        ])}
      />
      {feature.faqs.length > 0 && <JsonLd data={faqJsonLd(feature.faqs)} />}

      <main className="mx-auto max-w-[1180px] px-6 py-8 sm:py-12">
        <nav aria-label="Breadcrumb" className="mb-5 text-[12.5px] text-mute">
          <ol className="flex flex-wrap items-center gap-1.5">
            <li>
              <Link href="/" className="hover:text-ink">Home</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/features" className="hover:text-ink">Features</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="font-medium text-ink">{feature.title}</li>
          </ol>
        </nav>

        {/* Hero */}
        <ScrollReveal>
          <section className={`rounded-[28px] ${style.shell} p-6 sm:p-8 lg:p-10`}>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <span className={`inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1.5 text-[12px] font-medium ${style.eyebrow}`}>
                <span className="material-symbols-outlined text-[15px]" aria-hidden="true">{feature.icon}</span>
                {feature.kicker}
              </span>
              <span className={`inline-flex w-fit items-center rounded-full px-3 py-1.5 text-[12px] font-medium ${style.chip}`}>
                {feature.badge}
              </span>
            </div>

            <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <h1 className="font-head text-[clamp(2.2rem,6.5vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.04em]">
                  {feature.title}
                </h1>
                <p className="mt-5 max-w-[600px] text-[15px] leading-[1.8] text-[#4d4d4d]">
                  {feature.summary}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a href={dashboardUrl} className="pill pill-ink">
                    {common.startCta}
                  </a>
                  <Link href="/features" className="pill pill-line">
                    {common.viewAllFeatures}
                  </Link>
                </div>
              </div>

              <div className="rounded-[24px] border border-black/5 bg-white/70 p-5 shadow-[0_18px_50px_rgba(20,20,20,0.08)]">
                <dl className="grid grid-cols-2 gap-3">
                  {feature.stats.map((item) => (
                    <div key={item.label} className="rounded-[18px] bg-white/80 p-4">
                      <dt className="text-[11px] uppercase tracking-[0.08em] text-mute">{item.label}</dt>
                      <dd
                        className="mt-2 break-words font-head text-[clamp(1.2rem,4vw,1.75rem)] font-semibold leading-none"
                        style={{ color: style.accent }}
                      >
                        {item.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Capabilities */}
        <section className="mt-14" aria-labelledby="capabilities-title">
          <ScrollReveal>
            <span className="eyebrow">{common.capabilitiesEyebrow}</span>
            <h2 id="capabilities-title" className="mt-4 font-head text-[clamp(1.6rem,4vw,2.25rem)] font-semibold tracking-[-0.02em]">
              What {feature.title} gives you
            </h2>
          </ScrollReveal>
          {/* One reveal around the list: ScrollReveal renders a <div>, and a
              div between <ul> and <li> is invalid markup. */}
          <ScrollReveal>
            <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {feature.capabilities.map((item) => (
                <li key={item.title} className="flex h-full gap-4 rounded-[18px] border border-hair bg-white p-5">
                  <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-cream ${style.icon}`}>
                    <span className="material-symbols-outlined text-[20px]" aria-hidden="true">{item.icon}</span>
                  </span>
                  <div>
                    <h3 className="font-head text-[15px] font-semibold">{item.title}</h3>
                    <p className="mt-1 text-[12.5px] leading-[1.7] text-mute">{item.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </section>

        {/* Interactive demo */}
        {widget && (
          <section className="mt-14" aria-label={`${feature.title} preview`}>
            <ScrollReveal>{widget()}</ScrollReveal>
            <p className="mt-3 text-center text-[11px] text-mute">{common.illustrative}</p>
          </section>
        )}

        {/* Why it matters */}
        <section className="mt-14" aria-labelledby="why-title">
          <ScrollReveal>
            <span className="eyebrow">{common.whyItMattersEyebrow}</span>
            <h2 id="why-title" className="mt-4 font-head text-[clamp(1.6rem,4vw,2.25rem)] font-semibold tracking-[-0.02em]">
              Why {feature.title} matters
            </h2>
          </ScrollReveal>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {feature.highlights.map((item, index) => (
              <ScrollReveal key={item.title} delayMs={index * 100}>
                <article className="h-full rounded-[20px] border border-hair bg-white p-6 shadow-[0_10px_30px_rgba(20,20,20,0.03)]">
                  <span className={`grid h-11 w-11 place-items-center rounded-xl bg-cream ${style.icon}`}>
                    <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                      {index === 0 ? "analytics" : index === 1 ? "insights" : "check_circle"}
                    </span>
                  </span>
                  <h3 className="mt-5 font-head text-[19px] font-semibold leading-snug">{item.title}</h3>
                  <p className="mt-3 text-[13px] leading-[1.8] text-mute">{item.detail}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* How it works + what you'll learn */}
        <section className="mt-16 rounded-[28px] border border-hair bg-gradient-to-b from-[#FDFBF7] to-white p-6 shadow-[0_16px_40px_rgba(20,20,20,0.03)] sm:p-10">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <span className={`inline-flex items-center rounded-full px-3.5 py-1 text-[12px] font-semibold ${style.chip}`}>
                {common.howItWorksEyebrow}
              </span>
              <h2 className="mt-4 font-head text-[clamp(1.5rem,3.5vw,2rem)] font-bold tracking-tight">
                {common.howItWorks}
              </h2>
              <ol className="relative mt-8 space-y-6 border-l-2 border-[#EFE8D8] pl-6">
                {feature.process.map((step, index) => (
                  <li key={step} className="relative">
                    <span
                      className="absolute -left-[37px] top-0 grid h-6 w-6 place-items-center rounded-full text-[11px] font-bold text-white shadow-sm"
                      style={{ backgroundColor: style.accent }}
                      aria-hidden="true"
                    >
                      {index + 1}
                    </span>
                    <div className="rounded-[16px] border border-[#F2EDE2] bg-white p-4">
                      <p className="text-[13px] font-medium leading-[1.7] text-[#2c2c2c]">{step}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="space-y-10">
              {feature.learn.length > 0 && (
                <div>
                  <span className={`inline-flex items-center rounded-full px-3.5 py-1 text-[12px] font-semibold ${style.chip}`}>
                    {common.learnEyebrow}
                  </span>
                  <ul className="mt-6 space-y-3">
                    {feature.learn.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <span className="material-symbols-outlined mt-0.5 text-[20px] text-ink" aria-hidden="true">school</span>
                        <p className="text-[13.5px] leading-[1.7] text-[#2c2c2c]">{point}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <h3 className="font-head text-[16px] font-semibold">The result</h3>
                <ul className="mt-4 space-y-3">
                  {feature.impact.map((point) => (
                    <li
                      key={point}
                      className={`flex items-start gap-3.5 rounded-[18px] border border-[#F0E8D6] ${style.panel} p-4`}
                    >
                      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-gold text-[13px] font-bold text-ink" aria-hidden="true">
                        ✓
                      </span>
                      <p className="mt-0.5 text-[13.5px] font-medium leading-[1.7] text-[#2c2c2c]">{point}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ — native <details>, so answers are in the HTML and need no JS */}
        {feature.faqs.length > 0 && (
          <section className="mt-16" aria-labelledby="faq-title">
            <div className="text-center">
              <span className="eyebrow">{common.faqEyebrow}</span>
              <h2 id="faq-title" className="mt-4 font-head text-[clamp(1.6rem,4vw,2.25rem)] font-semibold tracking-[-0.02em]">
                {common.faqTitle}
              </h2>
            </div>
            <div className="mx-auto mt-8 max-w-[820px] divide-y divide-hair rounded-[20px] border border-hair bg-white">
              {feature.faqs.map((faq) => (
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
        )}

        {/* Related */}
        {related.length > 0 && (
          <section className="mt-16" aria-labelledby="related-title">
            <span className="eyebrow">{common.relatedEyebrow}</span>
            <h2 id="related-title" className="mt-4 font-head text-[clamp(1.5rem,3.5vw,2rem)] font-semibold tracking-[-0.02em]">
              {common.relatedTitle}
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={featurePath(item.slug)}
                  className={`group block rounded-[20px] ${accentStyles[item.accent].shell} p-5 transition hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(20,20,20,0.07)]`}
                >
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/75">
                    <span className={`material-symbols-outlined text-[20px] ${accentStyles[item.accent].icon}`} aria-hidden="true">
                      {item.icon}
                    </span>
                  </span>
                  <h3 className="mt-4 font-head text-[17px] font-semibold">{item.title}</h3>
                  <p className="mt-2 line-clamp-3 text-[12.5px] leading-[1.7] text-[#4c4c4c]">{item.summary}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[12.5px] font-semibold">
                    {siteData.featuresOverview.learnMoreText} <span aria-hidden="true">→</span>
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="mt-16 rounded-[28px] bg-ink px-6 py-10 text-center text-white sm:px-10">
          <h2 className="font-head text-[clamp(1.5rem,4vw,2.25rem)] font-semibold tracking-[-0.02em]">
            {common.ctaTitle}
          </h2>
          <p className="mx-auto mt-3 max-w-[560px] text-[14px] leading-[1.8] text-white/70">{common.ctaBody}</p>
          <a href={dashboardUrl} className="pill mt-7 inline-flex bg-gold text-ink">
            {common.startCta}
          </a>
        </section>

        <nav className="mt-12 flex flex-col gap-4 border-t border-[#F2EFE6] pt-8 sm:flex-row sm:items-center sm:justify-between" aria-label="Feature navigation">
          {previous ? (
            <Link href={featurePath(previous.slug)} className="inline-flex items-center gap-2 text-[13px] font-semibold text-mute">
              <span aria-hidden="true">←</span>
              {previous.title}
            </Link>
          ) : (
            <span />
          )}

          <Link href="/features" className="inline-flex items-center gap-2 text-[13px] font-semibold text-mute">
            {common.exploreAllFeatures}
          </Link>

          {next ? (
            <Link href={featurePath(next.slug)} className="inline-flex items-center gap-2 text-[13px] font-semibold text-mute">
              {next.title}
              <span aria-hidden="true">→</span>
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </main>
    </FeatureLayout>
  );
}
