import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

export default function TheSwarmSection() {
  return (
    <section id="swarm" className="relative mx-auto max-w-[1180px] scroll-mt-24 px-6 pb-20 sm:pb-24">
      <div className="absolute left-6 top-6 h-3 w-3 border border-[#D8D8D8]" aria-hidden="true"></div>
      <div className="absolute right-10 top-16 h-3 w-3 border border-[#D8D8D8]" aria-hidden="true"></div>

      <ScrollReveal className="text-center">
        <span className="eyebrow">The debate engine</span>
        <h2 className="mx-auto mt-6 max-w-[560px] font-head text-[clamp(1.875rem,5.5vw,2.625rem)] font-semibold leading-[1.2] tracking-[-0.02em]">
          A Verdict You Can Audit
        </h2>
      </ScrollReveal>

      <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3 items-center">
        {/* Bull case */}
        <ScrollReveal delayMs={100}>
          <div className="relative flex min-h-[300px] flex-col justify-end overflow-hidden rounded-[18px] bg-gradient-to-br from-[#E9F6EE] via-[#F2FAF5] to-[#DDF0E6] p-5">
            <svg
              className="pointer-events-none absolute inset-x-0 top-6 h-32 w-full"
              viewBox="0 0 300 120"
              fill="none"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M0 104 L38 92 L76 98 L114 70 L152 78 L190 48 L228 56 L266 26 L300 14 L300 120 L0 120 Z"
                fill="#17845A"
                fillOpacity="0.10"
              />
              <path
                d="M0 104 L38 92 L76 98 L114 70 L152 78 L190 48 L228 56 L266 26 L300 14"
                stroke="#17845A"
                strokeWidth="2.5"
                strokeLinejoin="round"
              />
            </svg>
            <span className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white text-[16px]">
              ↗
            </span>
            <p className="relative text-[11px] font-semibold uppercase tracking-[0.06em] text-up">
              Bull case
            </p>
            <h3 className="relative mt-1.5 font-head text-[19px] font-semibold leading-snug">
              Every Strength, With Its Evidence Attached
            </h3>
            <p className="relative mt-2 text-[12.5px] leading-[1.7] text-[#416452]">
              Growth catalysts, technical setups and an upside target — argued, not asserted.
            </p>
          </div>
        </ScrollReveal>

        {/* Centre column: verdict + coverage */}
        <div className="flex flex-col gap-5">
          <ScrollReveal delayMs={150}>
            <div className="relative rounded-[18px] bg-ink p-7 pb-14">
              <h3 className="max-w-[230px] font-head text-[21px] font-semibold leading-[1.3] text-white">
                One Verdict, With the Numbers Attached
              </h3>
              <dl className="mt-5 space-y-2 text-[13px] text-white">
                <div className="flex items-baseline justify-between gap-3 border-b border-white/10 pb-2">
                  <dt className="text-white/55">Entry</dt>
                  <dd className="font-semibold tabular-nums">₹1,240 – 1,275</dd>
                </div>
                <div className="flex items-baseline justify-between gap-3 border-b border-white/10 pb-2">
                  <dt className="text-white/55">Target</dt>
                  <dd className="font-semibold tabular-nums">₹1,520</dd>
                </div>
                <div className="flex items-baseline justify-between gap-3">
                  <dt className="text-white/55">Risk / reward</dt>
                  <dd className="font-semibold tabular-nums">1 : 2.6</dd>
                </div>
              </dl>
              <span className="absolute bottom-5 right-5 grid h-10 w-10 place-items-center rounded-full bg-white text-[16px]">
                ↗
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delayMs={200}>
            <div className="flex flex-1 flex-col justify-between rounded-[18px] border border-hair bg-white p-5">
              <div className="flex items-center justify-between">
                <div className="flex -space-x-2">
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-[#E9F0FA] text-[#1E5AA8] ring-2 ring-white">
                    <span className="material-symbols-outlined text-[14px]">account_balance</span>
                  </span>
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-[#FCEFC7] text-[#B98A18] ring-2 ring-white">
                    <span className="material-symbols-outlined text-[14px]">ssid_chart</span>
                  </span>
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-[#D6EFF7] text-[#2E7E96] ring-2 ring-white">
                    <span className="material-symbols-outlined text-[14px]">feed</span>
                  </span>
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-[#EFEFEF] text-[9px] font-semibold ring-2 ring-white">
                    +3
                  </span>
                </div>
                <p className="font-head text-[24px] font-semibold">6 agents</p>
              </div>
              <div className="mt-5">
                <div className="flex items-center justify-between text-[13px]">
                  <span className="font-medium">Signal convergence</span>
                  <span className="font-semibold">84%</span>
                </div>
                <div className="mt-2 h-[5px] w-full rounded-full bg-[#EFEFEF]">
                  <div className="h-full w-[84%] rounded-full bg-ink"></div>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <Link
                  href="#path"
                  className="inline-flex items-center gap-2 text-[13px] font-medium text-mute"
                >
                  How it works <span>→</span>
                </Link>
                <span className="grid h-9 w-9 place-items-center rounded-full bg-[#F3F3F3] text-[15px]">
                  ↗
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Bear case */}
        <ScrollReveal delayMs={250}>
          <div className="relative flex min-h-[300px] flex-col justify-end overflow-hidden rounded-[18px] bg-gradient-to-br from-[#FBECEE] via-[#FDF5F6] to-[#F8DFE3] p-5">
            <svg
              className="pointer-events-none absolute inset-x-0 top-6 h-32 w-full"
              viewBox="0 0 300 120"
              fill="none"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M0 16 L38 30 L76 24 L114 52 L152 44 L190 74 L228 66 L266 96 L300 108 L300 120 L0 120 Z"
                fill="#D64550"
                fillOpacity="0.10"
              />
              <path
                d="M0 16 L38 30 L76 24 L114 52 L152 44 L190 74 L228 66 L266 96 L300 108"
                stroke="#D64550"
                strokeWidth="2.5"
                strokeLinejoin="round"
              />
            </svg>
            <span className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white text-[16px]">
              ↗
            </span>
            <p className="relative text-[11px] font-semibold uppercase tracking-[0.06em] text-down">
              Bear case
            </p>
            <h3 className="relative mt-1.5 font-head text-[19px] font-semibold leading-snug">
              The Dissent That Keeps You Honest
            </h3>
            <p className="relative mt-2 text-[12.5px] leading-[1.7] text-[#6B5457]">
              What breaks this thesis, what it costs when it does, and the level that proves it.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
