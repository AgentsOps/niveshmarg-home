import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import featuresData from "../../../docs/features.json";

export const metadata: Metadata = {
  title: "NiveshMarg Features",
  description:
    "Explore the NiveshMarg feature stack: AI Score, Swarm intelligence, Workspace, portfolio tools, paper trading, strategy testing and investor workflow analytics.",
  alternates: {
    canonical: "/features",
  },
};

const accentMap = {
  rose: {
    shell: "bg-rose",
    title: "text-rose-ink",
    band: "bg-white/70 text-rose-ink",
  },
  amber: {
    shell: "bg-amber",
    title: "text-amber-ink",
    band: "bg-white/70 text-amber-ink",
  },
  sky: {
    shell: "bg-sky",
    title: "text-sky-ink",
    band: "bg-white/70 text-sky-ink",
  },
  mint: {
    shell: "bg-mint",
    title: "text-mint-ink",
    band: "bg-white/70 text-mint-ink",
  },
} as const;

export default function FeaturesOverviewPage() {
  const features = (
    featuresData as {
      features: {
        slug: string;
        accent: keyof typeof accentMap;
        kicker: string;
        title: string;
        summary: string;
        badge: string;
      }[];
    }
  ).features;

  return (
    <div className="bg-white text-ink">
      <Header />

      <main className="mx-auto max-w-[1180px] px-6 py-12 sm:py-16">
        <div className="text-center">
          <span className="eyebrow">Feature library</span>
          <h1 className="mt-6 font-head text-[clamp(2.2rem,6vw,3.4rem)] font-semibold tracking-[-0.04em]">
            One system. Four feature stories.
          </h1>
          <p className="mx-auto mt-4 max-w-[720px] text-[15px] leading-[1.8] text-mute">
            Each feature sits inside the same investment workflow: uncover the signal, challenge the
            thesis, manage the portfolio, and keep the decision trail intact.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {features.map((feature, index) => {
            const tone = accentMap[feature.accent];

            return (
              <Link
                key={feature.slug}
                href={`/features/${feature.slug}`}
                className={`group block rounded-[24px] border border-[#EFE9DA] ${tone.shell} p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(20,20,20,0.08)]`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className={`inline-flex rounded-full px-3 py-1.5 text-[11px] font-medium ${tone.band}`}>
                    {feature.kicker}
                  </span>
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/75 text-ink">
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </span>
                </div>

                <h2 className={`mt-6 font-head text-[2rem] font-semibold leading-[1.1] ${tone.title}`}>
                  {feature.title}
                </h2>
                <p className="mt-4 text-[13px] leading-[1.8] text-[#4c4c4c]">{feature.summary}</p>

                <div className="mt-6 flex items-center justify-between border-t border-[#efe7d7] pt-4">
                  <span className="text-[12px] font-medium text-[#3b3b3b]">{feature.badge}</span>
                  <span className="inline-flex items-center gap-2 text-[12px] font-semibold text-[#2d2d2d]">
                    Learn more <span>→</span>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
}
