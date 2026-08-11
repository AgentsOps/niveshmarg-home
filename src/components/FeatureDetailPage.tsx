"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import FeatureLayout from "@/components/FeatureLayout";

type FeatureStat = {
  label: string;
  value: string;
};

type FeatureHighlight = {
  title: string;
  detail: string;
};

type FeatureMediaItem = {
  type: "image" | "video";
  title: string;
  src: string;
  poster?: string;
  caption?: string;
};

type FeaturePageData = {
  slug: string;
  accent: "rose" | "amber" | "sky" | "mint";
  kicker: string;
  title: string;
  summary: string;
  badge: string;
  stats: FeatureStat[];
  highlights: FeatureHighlight[];
  process: string[];
  impact: string[];
  media?: FeatureMediaItem[];
};

const accentStyles = {
  rose: {
    shell: "bg-rose",
    panel: "bg-white/70",
    eyebrow: "bg-white/70 text-rose-ink",
    icon: "text-[#C2566A]",
    chip: "bg-[#fff7f7] text-rose-ink border border-[#f0d8dc]",
    accent: "#C2566A",
  },
  amber: {
    shell: "bg-amber",
    panel: "bg-white/70",
    eyebrow: "bg-white/70 text-amber-ink",
    icon: "text-[#B98A18]",
    chip: "bg-[#fffaf0] text-amber-ink border border-[#f0e2b5]",
    accent: "#B98A18",
  },
  sky: {
    shell: "bg-sky",
    panel: "bg-white/70",
    eyebrow: "bg-white/70 text-sky-ink",
    icon: "text-[#2E7E96]",
    chip: "bg-[#f3fbff] text-sky-ink border border-[#cfe3ee]",
    accent: "#2E7E96",
  },
  mint: {
    shell: "bg-mint",
    panel: "bg-white/70",
    eyebrow: "bg-white/70 text-mint-ink",
    icon: "text-[#3c5a2c]",
    chip: "bg-[#f4faee] text-mint-ink border border-[#d9e8cc]",
    accent: "#3c5a2c",
  },
} as const;

export default function FeatureDetailPage({
  feature,
  previous,
  next,
}: {
  feature: FeaturePageData;
  previous?: FeaturePageData;
  next?: FeaturePageData;
}) {
  const style = accentStyles[feature.accent];
  const [activeMediaIndex, setActiveMediaIndex] = useState<number | null>(null);

  const mediaItems = useMemo(() => feature.media ?? [], [feature.media]);
  const activeMedia = activeMediaIndex !== null ? mediaItems[activeMediaIndex] ?? null : null;

  useEffect(() => {
    if (activeMediaIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveMediaIndex(null);
      }
      if (event.key === "ArrowRight") {
        setActiveMediaIndex((current) => {
          if (current === null) return 0;
          return (current + 1) % mediaItems.length;
        });
      }
      if (event.key === "ArrowLeft") {
        setActiveMediaIndex((current) => {
          if (current === null) return mediaItems.length - 1;
          return (current - 1 + mediaItems.length) % mediaItems.length;
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeMediaIndex, mediaItems.length]);

  const openMedia = (index: number) => setActiveMediaIndex(index);
  const closeMedia = () => setActiveMediaIndex(null);
  const moveMedia = (direction: number) => {
    setActiveMediaIndex((current) => {
      if (current === null) {
        return direction > 0 ? 0 : mediaItems.length - 1;
      }
      return (current + direction + mediaItems.length) % mediaItems.length;
    });
  };

  return (
    <FeatureLayout>
      <main className="mx-auto max-w-[1180px] px-6 py-10 sm:py-16">
        <ScrollReveal>
          <section className={`rounded-[28px] ${style.shell} p-6 sm:p-8 lg:p-10`}>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <span className={`inline-flex w-fit items-center rounded-full px-3 py-1.5 text-[12px] font-medium ${style.eyebrow}`}>
                {feature.kicker}
              </span>
              <span className={`inline-flex items-center rounded-full px-3 py-1.5 text-[12px] font-medium ${style.chip}`}>
                {feature.badge}
              </span>
            </div>

            <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <h1 className="font-head text-[clamp(2.4rem,7vw,4rem)] font-semibold leading-[1.04] tracking-[-0.04em]">
                  {feature.title}
                </h1>
                <p className="mt-5 max-w-[600px] text-[15px] leading-[1.8] text-[#4d4d4d]">
                  {feature.summary}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href="/features" className="pill pill-ink">
                    View all features
                  </Link>
                  <Link href="/" className="pill pill-line">
                    Back home
                  </Link>
                </div>
              </div>

              <div className={`rounded-[24px] border border-black/5 ${style.panel} p-5 shadow-[0_18px_50px_rgba(20,20,20,0.08)]`}>
                <div className="grid grid-cols-2 gap-3">
                  {feature.stats.map((item) => (
                    <div key={item.label} className="rounded-[18px] bg-white/80 p-4">
                      <p className="text-[11px] uppercase tracking-[0.08em] text-mute">{item.label}</p>
                      <p className="mt-2 font-head text-[28px] leading-none font-semibold" style={{ color: style.accent }}>
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        <section className="mt-12 grid gap-5 md:grid-cols-3">
          {feature.highlights.map((item, index) => (
            <ScrollReveal key={item.title} delayMs={index * 100}>
              <article className="h-full rounded-[20px] border border-hair bg-white p-6 shadow-[0_10px_30px_rgba(20,20,20,0.03)]">
                <span className={`grid h-11 w-11 place-items-center rounded-xl bg-cream ${style.icon}`}>
                  <span className="material-symbols-outlined text-[20px]">
                    {index === 0 ? "analytics" : index === 1 ? "insights" : "check_circle"}
                  </span>
                </span>
                <h2 className="mt-5 font-head text-[20px] font-semibold leading-snug">{item.title}</h2>
                <p className="mt-3 text-[13px] leading-[1.8] text-mute">{item.detail}</p>
              </article>
            </ScrollReveal>
          ))}
        </section>

        {mediaItems.length > 0 && (
          <section className="mt-12">
            <ScrollReveal>
              <div className="mb-6 flex items-center justify-between gap-4">
                <span className="eyebrow">See it in action</span>
              </div>
            </ScrollReveal>

            <div className="grid gap-6 lg:grid-cols-2">
              {mediaItems.map((item, index) => (
                <ScrollReveal key={`${item.type}-${item.title}`} delayMs={index * 120}>
                  <article className="overflow-hidden rounded-[24px] border border-hair bg-white shadow-[0_12px_30px_rgba(20,20,20,0.04)]">
                    <button
                      type="button"
                      onClick={() => openMedia(index)}
                      className="block w-full overflow-hidden border-b border-[#F1EDE0] bg-[#f9f7f1] text-left"
                      aria-label={`Open ${item.title}`}
                    >
                      {item.type === "image" ? (
                        <img src={item.src} alt={item.title} className="h-[250px] w-full cursor-pointer object-cover transition duration-300 hover:scale-[1.02]" />
                      ) : (
                        <div className="relative h-[250px] w-full overflow-hidden bg-[#f0efe9]">
                          <img
                            src={item.poster || item.src}
                            alt={item.title}
                            className="h-full w-full cursor-pointer object-cover transition duration-300 hover:scale-[1.02]"
                          />
                          <span className="absolute inset-0 grid place-items-center">
                            <span className="grid h-14 w-14 place-items-center rounded-full bg-white/85 text-ink shadow-lg backdrop-blur-sm">
                              <span className="material-symbols-outlined text-[28px]">play_circle</span>
                            </span>
                          </span>
                        </div>
                      )}
                    </button>
                    <div className="p-5">
                      <p className="font-head text-[18px] font-semibold">{item.title}</p>
                      {item.caption && <p className="mt-2 text-[13px] leading-[1.8] text-mute">{item.caption}</p>}
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </section>
        )}

        {activeMedia && (
          <div
            className="modal-backdrop fixed inset-0 z-[60] flex items-center justify-center bg-[#111111]/80 px-4 py-6 backdrop-blur-sm"
            onClick={closeMedia}
          >
            <div
              className="modal-panel relative w-full max-w-4xl overflow-hidden rounded-[28px] border border-white/10 bg-white shadow-[0_30px_80px_rgba(0,0,0,0.35)]"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                aria-label="Close media viewer"
                onClick={closeMedia}
                className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-ink shadow-md"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>

              {mediaItems.length > 1 && (
                <>
                  <button
                    type="button"
                    aria-label="Previous media item"
                    onClick={() => moveMedia(-1)}
                    className="absolute left-4 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/30 bg-black/30 text-white shadow-md backdrop-blur-sm transition hover:bg-black/45"
                  >
                    <span className="material-symbols-outlined text-[20px]">chevron_left</span>
                  </button>
                  <button
                    type="button"
                    aria-label="Next media item"
                    onClick={() => moveMedia(1)}
                    className="absolute right-4 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/30 bg-black/30 text-white shadow-md backdrop-blur-sm transition hover:bg-black/45"
                  >
                    <span className="material-symbols-outlined text-[20px]">chevron_right</span>
                  </button>
                </>
              )}

              <div className="max-h-[80vh] overflow-hidden bg-[#121212]">
                {activeMedia.type === "image" ? (
                  <img src={activeMedia.src} alt={activeMedia.title} className="max-h-[80vh] w-full object-contain" />
                ) : (
                  <video
                    className="max-h-[80vh] w-full object-contain bg-[#111111]"
                    controls
                    autoPlay
                    playsInline
                    preload="metadata"
                    poster={activeMedia.poster}
                  >
                    <source src={activeMedia.src} type="video/mp4" />
                  </video>
                )}
              </div>

              <div className="border-t border-[#F0E8DA] bg-[#fffdf9] p-5">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="font-head text-[20px] font-semibold">{activeMedia.title}</p>
                    {activeMedia.caption && <p className="mt-2 text-[13px] leading-[1.8] text-mute">{activeMedia.caption}</p>}
                  </div>
                  {mediaItems.length > 1 && (
                    <div className="flex items-center gap-1.5">
                      {mediaItems.map((item, index) => (
                        <button
                          key={`${item.type}-${item.title}`}
                          type="button"
                          aria-label={`Go to ${item.title}`}
                          onClick={() => setActiveMediaIndex(index)}
                          className={`h-2.5 w-2.5 rounded-full transition ${
                            activeMediaIndex === index ? "bg-ink" : "bg-[#d8d3c8]"
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        <style jsx>{`
          @keyframes modalBackdropIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes modalPanelIn {
            from {
              opacity: 0;
              transform: translateY(16px) scale(0.97);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }

          .modal-backdrop {
            animation: modalBackdropIn 0.2s ease-out;
          }

          .modal-panel {
            animation: modalPanelIn 0.28s cubic-bezier(0.2, 0.9, 0.2, 1);
          }
        `}</style>

        <section className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <ScrollReveal>
            <div className="rounded-[24px] border border-hair bg-[#fffdf8] p-6 sm:p-8">
              <span className="eyebrow">How it works</span>
              <h2 className="mt-6 font-head text-[clamp(1.8rem,4vw,2.4rem)] font-semibold tracking-[-0.03em]">
                A process built for real decisions
              </h2>
              <ol className="mt-6 space-y-4">
                {feature.process.map((step, index) => (
                  <li key={step} className="flex gap-4 rounded-[18px] border border-[#F1E9D7] bg-white p-4">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-ink font-head text-[12px] text-white">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-[13px] leading-[1.8] text-[#3d3d3d]">{step}</p>
                  </li>
                ))}
              </ol>
            </div>
          </ScrollReveal>

          <ScrollReveal delayMs={150}>
            <div className="rounded-[24px] border border-hair bg-cream p-6 sm:p-8">
              <span className="eyebrow">Why it matters</span>
              <ul className="mt-6 space-y-4">
                {feature.impact.map((point) => (
                  <li key={point} className="flex gap-3 rounded-[18px] border border-[#EFE4CE] bg-white p-4">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold text-[12px] text-ink">
                      ✓
                    </span>
                    <p className="text-[13px] leading-[1.8] text-[#3d3d3d]">{point}</p>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </section>

        <nav className="mt-12 flex flex-col gap-4 border-t border-[#F2EFE6] pt-8 sm:flex-row sm:items-center sm:justify-between">
          {previous ? (
            <Link href={`/features/${previous.slug}`} className="inline-flex items-center gap-2 text-[13px] font-semibold text-mute">
              <span>←</span>
              {previous.title}
            </Link>
          ) : (
            <span />
          )}

          <Link href="/features" className="inline-flex items-center gap-2 text-[13px] font-semibold text-mute">
            Explore all features
          </Link>

          {next ? (
            <Link href={`/features/${next.slug}`} className="inline-flex items-center gap-2 text-[13px] font-semibold text-mute">
              {next.title}
              <span>→</span>
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </main>
    </FeatureLayout>
  );
}
