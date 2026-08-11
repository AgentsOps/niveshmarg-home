import ScrollReveal from "./ScrollReveal";
import siteData from "../../data/site_data.json";

export default function PortfolioBandSection() {
  const data = siteData.portfolioBand;

  return (
    <section
      id="chat"
      className="scroll-mt-24 bg-gradient-to-br from-[#F6EEFA] via-[#FBF1F5] to-[#FDF7F3]"
    >
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-10 px-6 py-20 sm:py-24 lg:grid-cols-2">
        {/* Workspace collage */}
        <div className="grid gap-4 sm:grid-cols-2 lg:relative lg:mx-auto lg:block lg:h-[480px] lg:w-full lg:max-w-[520px]">
          <div
            className="absolute left-[2%] top-[36%] hidden h-20 w-24 opacity-40 lg:block"
            style={{
              backgroundImage: "radial-gradient(#9A9A9A 1px, transparent 1px)",
              backgroundSize: "9px 9px",
            }}
            aria-hidden="true"
          ></div>
          <svg
            className="absolute left-[26%] top-[14%] hidden w-40 text-[#F2A65A] lg:block"
            viewBox="0 0 160 60"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M4 46c26-46 66 6 96-14 14-9 22-18 56-26"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>

          {/* Backtest */}
          <div className="static rounded-[16px] bg-white p-4 shadow-[0_16px_40px_rgba(80,50,90,0.10)] lg:absolute lg:right-0 lg:top-0 lg:w-[186px]">
            <p className="text-[9px] text-mute">Backtest · 5 years</p>
            <p className="font-head text-[15px] font-semibold">
              +118% <span className="text-[9px] font-normal text-mute">vs NIFTY +64%</span>
            </p>
            <svg viewBox="0 0 160 50" className="mt-2 h-[50px] w-full" fill="none" aria-hidden="true">
              <path
                d="M0 42c14-4 22-18 34-16s18 14 30 6 20-22 34-18 22 20 34 16 20-14 28-18v30H0z"
                fill="#FBD9C5"
              />
              <path
                d="M0 42c14-4 22-18 34-16s18 14 30 6 20-22 34-18 22 20 34 16 20-14 28-18"
                stroke="#F1874F"
                strokeWidth="1.6"
              />
            </svg>
            <div className="mt-3 flex items-center justify-between border-t border-[#F1F1F1] pt-2">
              <p className="text-[9px] font-semibold">Max drawdown</p>
              <span className="text-[9px] font-semibold text-down">−12.4%</span>
            </div>
          </div>

          {/* Portfolio */}
          <div className="static rounded-[16px] bg-white p-4 shadow-[0_16px_40px_rgba(80,50,90,0.10)] lg:absolute lg:left-0 lg:top-[6%] lg:w-[236px]">
            <div className="flex items-center justify-between">
              <p className="font-head text-[12px] font-semibold">Portfolio</p>
              <div className="flex gap-1.5 text-[7px] text-mute">
                <span className="flex items-center gap-1">
                  <i className="h-1 w-1 rounded-full bg-up"></i>Invested
                </span>
                <span className="flex items-center gap-1">
                  <i className="h-1 w-1 rounded-full bg-[#7C3AED]"></i>Market
                </span>
              </div>
            </div>
            <svg viewBox="0 0 230 90" className="mt-3 h-[90px] w-full" fill="none" aria-hidden="true">
              <line x1="0" y1="22" x2="230" y2="22" stroke="#F4F4F4" />
              <line x1="0" y1="45" x2="230" y2="45" stroke="#F4F4F4" />
              <line x1="0" y1="68" x2="230" y2="68" stroke="#F4F4F4" />
              <polyline
                points="0,68 20,64 40,58 60,56 80,50 100,46 120,42 140,36 160,32 180,28 200,22 230,18"
                stroke="#7C3AED"
                strokeWidth="2"
              />
              <polyline
                points="0,74 20,72 40,70 60,68 80,66 100,64 120,62 140,60 160,58 180,56 200,54 230,52"
                stroke="#17845A"
                strokeWidth="2"
              />
              <circle cx="230" cy="18" r="3.5" fill="#141414" stroke="#fff" strokeWidth="2" />
            </svg>
            <div className="mt-1 flex justify-between text-[7px] text-mute">
              <span>JAN</span>
              <span>MAR</span>
              <span>MAY</span>
              <span>JUL</span>
              <span>SEP</span>
              <span>NOV</span>
            </div>
          </div>

          {/* Portfolio Doctor */}
          <div className="static rounded-[16px] bg-white p-4 shadow-[0_16px_40px_rgba(80,50,90,0.10)] lg:absolute lg:right-[4%] lg:top-[38%] lg:w-[178px]">
            <p className="text-[9px] text-mute">Portfolio Doctor</p>
            <p className="font-head text-[19px] font-semibold">Concentrated</p>
            <span className="mt-1 inline-block rounded bg-mint px-1.5 py-0.5 text-[7px] font-semibold text-mint-ink">
              Rebalance suggested
            </span>
            <div className="mt-3 flex h-[46px] items-end gap-[5px]">
              <div className="w-full rounded-sm bg-[#FCE9B8]" style={{ height: "40%" }}></div>
              <div className="w-full rounded-sm bg-[#FCE9B8]" style={{ height: "62%" }}></div>
              <div className="w-full rounded-sm bg-gold" style={{ height: "100%" }}></div>
              <div className="w-full rounded-sm bg-[#FCE9B8]" style={{ height: "54%" }}></div>
              <div className="w-full rounded-sm bg-[#FCE9B8]" style={{ height: "38%" }}></div>
              <div className="w-full rounded-sm bg-[#FCE9B8]" style={{ height: "46%" }}></div>
              <div className="w-full rounded-sm bg-[#FCE9B8]" style={{ height: "30%" }}></div>
            </div>
            <div className="mt-1 flex justify-between text-[7px] text-mute">
              <span>IT</span>
              <span>FIN</span>
              <span>ENE</span>
              <span>FMCG</span>
              <span>PHA</span>
              <span>AUT</span>
              <span>MET</span>
            </div>
          </div>

          {/* Stock Chat */}
          <div className="static rounded-[16px] bg-white p-4 shadow-[0_16px_40px_rgba(80,50,90,0.10)] sm:col-span-2 lg:absolute lg:bottom-0 lg:left-[6%] lg:w-[200px]">
            <p className="font-head text-[12px] font-semibold">Stock Chat</p>
            <p className="text-[7px] text-mute">Ten live tools connected</p>
            <div className="mt-3 space-y-2">
              <p className="ml-auto w-fit max-w-[85%] rounded-[10px] rounded-tr-[3px] bg-ink px-2 py-1.5 text-[9px] text-white">
                How is my portfolio doing?
              </p>
              <div className="w-fit max-w-[92%] rounded-[10px] rounded-tl-[3px] border border-[#F0F0F0] bg-[#FAFAFA] px-2 py-1.5">
                <span className="inline-block rounded bg-white px-1 py-0.5 text-[7px] font-semibold text-mute">
                  Reading your portfolio
                </span>
                <p className="mt-1 text-[9px] leading-snug">
                  One position, and it is well ahead — PNB.NS{" "}
                  <span className="font-semibold text-up">+43.5%</span>
                </p>
              </div>
            </div>
            <div className="mt-3 border-t border-[#F1F1F1] pt-2 text-center text-[9px] font-medium text-mute">
              Ask anything
            </div>
          </div>
        </div>

        <ScrollReveal className="lg:pl-6">
          <span className="eyebrow">{data.eyebrow}</span>
          <h2 className="mt-7 max-w-[460px] font-head text-[clamp(1.875rem,5.5vw,2.625rem)] font-semibold leading-[1.18] tracking-[-0.02em]">
            {data.title}
          </h2>
          <p className="mt-6 max-w-[400px] text-[13.5px] leading-[1.8] text-mute">
            {data.description}
          </p>

          <ul className="mt-7 space-y-3">
            {data.points.map((point) => (
              <li key={point} className="flex gap-3 text-[13.5px]">
                <span className="material-symbols-outlined mt-px shrink-0 text-[18px] text-up">
                  check_circle
                </span>
                {point}
              </li>
            ))}
          </ul>

          <a href={data.ctaHref} className="pill pill-ink mt-8">
            {data.ctaLabel}
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
