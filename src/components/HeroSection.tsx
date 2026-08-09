import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-cream via-[#FDFBF5] to-white">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-12 px-6 pb-20 pt-10 lg:grid-cols-[46%_1fr] lg:pb-24">
        <div>
          <span className="animate-rise inline-block rounded-full border border-[#E4DFCD] bg-white/70 px-4 py-1.5 text-[12px] font-medium tracking-wide">
            AI research, made simple
          </span>

          <h1 className="animate-rise [animation-delay:80ms] mt-6 font-head text-[clamp(2.25rem,7.5vw,3.25rem)] font-semibold leading-[1.08] tracking-[-0.02em]">
            Unlock Your{" "}
            <span className="relative inline-flex items-center gap-3 align-middle">
              <span className="flex -space-x-2">
                <span
                  className="grid h-9 w-9 place-items-center rounded-full bg-[#E9F0FA] text-[#1E5AA8] ring-2 ring-white"
                  title="Fundamental agent"
                >
                  <span className="material-symbols-outlined text-[17px]">account_balance</span>
                </span>
                <span
                  className="grid h-9 w-9 place-items-center rounded-full bg-[#FCEFC7] text-[#B98A18] ring-2 ring-white"
                  title="Technical agent"
                >
                  <span className="material-symbols-outlined text-[17px]">ssid_chart</span>
                </span>
                <span
                  className="grid h-9 w-9 place-items-center rounded-full bg-[#FBE2E4] text-[#C2566A] ring-2 ring-white"
                  title="Risk manager"
                >
                  <span className="material-symbols-outlined text-[17px]">shield</span>
                </span>
              </span>
              <span className="grid h-9 w-9 place-items-center rounded-full bg-mint text-[16px] font-normal text-mint-ink">
                +3
              </span>
            </span>
            <br />
            <span className="relative">
              Investing Edge
              <svg
                className="absolute -bottom-1 left-0 w-[200px] max-w-full"
                viewBox="0 0 210 14"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 9C50 3 140 2 206 6"
                  stroke="#F5C518"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p className="animate-rise [animation-delay:160ms] mt-7 max-w-[420px] text-[14px] leading-[1.75] text-mute">
            Six specialist AI analysts research a stock, argue the bull case against the bear
            case, and hand you a verdict with entry, target and stop levels attached — for NSE
            listings and global markets alike.
          </p>

          <div className="animate-rise [animation-delay:240ms] mt-8 flex flex-wrap items-center gap-3">
            <a href="https://dashboard.niveshmarg.com/" className="pill pill-ink">
              Open dashboard
            </a>
            <Link href="#score" className="pill pill-line">
              See how it thinks
            </Link>
          </div>

          <div className="animate-rise [animation-delay:320ms] mt-10 flex items-end gap-4">
            <div>
              <div className="flex gap-1.5" aria-hidden="true">
                <span className="material-symbols-outlined text-[20px]">timeline</span>
                <span className="material-symbols-outlined text-[20px]">candlestick_chart</span>
                <span className="material-symbols-outlined text-[20px]">newspaper</span>
                <span className="material-symbols-outlined text-[20px]">show_chart</span>
              </div>
              <p className="mt-3 text-[14px] font-medium">Four signals · 25 points each</p>
            </div>
            <span className="relative -ml-1 mb-1 inline-block -rotate-[8deg] rounded-full bg-mint px-4 py-1.5 font-head text-[14px] italic text-[#2F3A2A]">
              AI Score
            </span>
          </div>
        </div>

        {/* Product collage */}
        <div className="grid gap-4 sm:grid-cols-2 lg:relative lg:mx-auto lg:block lg:h-[440px] lg:w-full lg:max-w-[560px]">
          <svg
            className="absolute left-[4%] top-[26%] hidden h-24 w-24 text-gold lg:block"
            viewBox="0 0 100 100"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M6 60c14-30 32-38 44-24s26 10 34-14"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <div
            className="absolute left-[36%] top-[-3%] hidden font-head text-[18px] text-gold lg:block"
            aria-hidden="true"
          >
            ✦
          </div>

          {/* AI Score breakdown */}
          <div className="float-card static lg:absolute lg:left-0 lg:top-[2%] lg:w-[262px]">
            <p className="text-center font-head text-[15px] font-semibold">AI Score</p>
            <p className="mt-0.5 text-center text-[11px] text-mute">RELIANCE.NS · four readings</p>
            <div className="relative mt-6 flex h-[110px] items-end justify-between px-1">
              <div className="w-[11px] rounded-full bg-[#8B5CF6]" style={{ height: "84%" }}></div>
              <div className="w-[11px] rounded-full bg-[#C4B5FD]" style={{ height: "72%" }}></div>
              <div className="w-[11px] rounded-full bg-[#8B5CF6]" style={{ height: "68%" }}></div>
              <div className="relative w-[11px] rounded-full bg-gold" style={{ height: "100%" }}>
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 rounded-md bg-ink px-1.5 py-0.5 text-[10px] font-semibold text-white">
                  76
                </span>
              </div>
              <div className="w-[11px] rounded-full bg-[#E6E6E6]" style={{ height: "60%" }}></div>
              <div className="w-[11px] rounded-full bg-[#E6E6E6]" style={{ height: "44%" }}></div>
              <div className="w-[11px] rounded-full bg-[#E6E6E6]" style={{ height: "52%" }}></div>
            </div>
            <div className="mt-3 flex justify-between px-0.5 text-[10px] text-mute">
              <span>Fcst</span>
              <span>Tech</span>
              <span>Sent</span>
              <span>Trend</span>
              <span>1W</span>
              <span>1M</span>
              <span>1Y</span>
            </div>
            <div className="mt-4 flex items-center gap-2 border-t border-[#F0F0F0] pt-4">
              <span className="grid h-6 w-6 place-items-center rounded-full bg-mint text-[11px] text-mint-ink">
                ✓
              </span>
              <div>
                <p className="text-[11px] font-semibold">Signals agree</p>
                <p className="text-[10px] text-mute">All four readings point the same way</p>
              </div>
            </div>
          </div>

          {/* Forecast band */}
          <div className="float-card static lg:absolute lg:right-0 lg:top-0 lg:w-[252px]">
            <p className="font-head text-[14px] font-semibold">Forecast band</p>
            <div className="mt-4 flex h-[52px] items-end gap-[3px]">
              <div className="w-full rounded-[2px] bg-[#8BD17C]" style={{ height: "18%" }}></div>
              <div className="w-full rounded-[2px] bg-[#8BD17C]" style={{ height: "26%" }}></div>
              <div className="w-full rounded-[2px] bg-[#8BD17C]" style={{ height: "34%" }}></div>
              <div className="w-full rounded-[2px] bg-[#8BD17C]" style={{ height: "44%" }}></div>
              <div className="w-full rounded-[2px] bg-[#8BD17C]" style={{ height: "58%" }}></div>
              <div className="w-full rounded-[2px] bg-[#8BD17C]" style={{ height: "72%" }}></div>
              <div className="w-full rounded-[2px] bg-[#8BD17C]" style={{ height: "86%" }}></div>
              <div className="w-full rounded-[2px] bg-[#8BD17C]" style={{ height: "100%" }}></div>
              <div className="w-full rounded-[2px] bg-[#8BD17C]" style={{ height: "92%" }}></div>
              <div className="w-full rounded-[2px] bg-[#8BD17C]" style={{ height: "78%" }}></div>
              <div className="w-full rounded-[2px] bg-[#8BD17C]" style={{ height: "62%" }}></div>
              <div className="w-full rounded-[2px] bg-[#8BD17C]" style={{ height: "48%" }}></div>
              <div className="w-full rounded-[2px] bg-[#8BD17C]" style={{ height: "36%" }}></div>
              <div className="w-full rounded-[2px] bg-[#8BD17C]" style={{ height: "26%" }}></div>
              <div className="w-full rounded-[2px] bg-[#8BD17C]" style={{ height: "18%" }}></div>
            </div>
            <div className="mt-3 flex justify-between border-t border-[#F0F0F0] pt-2 text-[10px] text-mute">
              <span>₹1,240</span>
              <span>₹1,520</span>
            </div>
          </div>

          {/* Bull vs Bear debate */}
          <div className="float-card static lg:absolute lg:right-[2%] lg:top-[40%] lg:w-[262px]">
            <div className="flex items-start justify-between">
              <div>
                <p className="font-head text-[14px] font-semibold">Bull vs Bear</p>
                <div className="mt-1.5 flex gap-3 text-[10px] text-mute">
                  <span className="flex items-center gap-1">
                    <i className="h-1.5 w-1.5 rounded-full bg-up"></i>Bull
                  </span>
                  <span className="flex items-center gap-1">
                    <i className="h-1.5 w-1.5 rounded-full bg-down"></i>Bear
                  </span>
                </div>
              </div>
              <span className="rounded-md border border-[#EAEAEA] px-2 py-1 text-[10px] text-mute">
                1Y ⌄
              </span>
            </div>
            <div className="relative mt-3 h-[112px]">
              <svg
                viewBox="0 0 220 112"
                className="h-full w-full"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <line x1="0" y1="20" x2="220" y2="20" stroke="#F2F2F2" />
                <line x1="0" y1="48" x2="220" y2="48" stroke="#F2F2F2" />
                <line x1="0" y1="76" x2="220" y2="76" stroke="#F2F2F2" />
                <line x1="0" y1="104" x2="220" y2="104" stroke="#F2F2F2" />
                <rect x="60" y="0" width="20" height="112" rx="6" fill="#FDECEC" />
                <polyline
                  points="0,74 18,52 36,80 54,44 72,26 90,62 108,40 126,78 144,54 162,86 180,58 198,72 220,50"
                  stroke="#D64550"
                  strokeWidth="2.2"
                  strokeLinejoin="round"
                />
                <polyline
                  points="0,92 18,78 36,96 54,70 72,84 90,58 108,92 126,64 144,88 162,70 180,94 198,66 220,84"
                  stroke="#17845A"
                  strokeWidth="2.2"
                  strokeLinejoin="round"
                />
                <circle cx="70" cy="28" r="4" fill="#D64550" stroke="#fff" strokeWidth="2" />
              </svg>
              <span className="absolute left-[24%] top-0 rounded-md bg-down px-1.5 py-0.5 text-[9px] font-semibold text-white">
                Risk
              </span>
            </div>
            <div className="mt-2 flex justify-between text-[9px] text-mute">
              <span>JAN</span>
              <span>MAR</span>
              <span>MAY</span>
              <span>JUL</span>
              <span>SEP</span>
              <span>NOV</span>
            </div>
          </div>

          {/* Portfolio P&L */}
          <div className="float-card animate-float static p-4 sm:col-span-2 lg:absolute lg:bottom-0 lg:left-[2%] lg:w-[250px]">
            <div className="flex items-center gap-4">
              <svg viewBox="0 0 90 34" className="h-[34px] w-[90px]" fill="none" aria-hidden="true">
                <path
                  d="M2 24c8-16 14 4 22-6s12 12 20 2 12-10 22-14"
                  stroke="#F5C518"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeDasharray="140"
                  strokeDashoffset="140"
                  className="animate-draw"
                />
              </svg>
              <div>
                <p className="font-head text-[20px] font-semibold">
                  +43.5% <span className="text-gold">✦</span>
                </p>
                <p className="text-[10px] text-mute">Unrealised P&amp;L across holdings</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
