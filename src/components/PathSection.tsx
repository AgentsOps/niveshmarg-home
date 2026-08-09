import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

export default function PathSection() {
  return (
    <section
      id="path"
      className="mx-auto grid max-w-[1180px] scroll-mt-24 grid-cols-1 gap-8 px-6 pb-20 sm:pb-24 lg:grid-cols-[300px_1fr] items-center"
    >
      <ScrollReveal>
        <article>
          <div className="flex h-[290px] flex-col justify-between overflow-hidden rounded-[14px] bg-gradient-to-br from-cream via-[#FBF3E4] to-[#F8E9CE] p-6">
            <span className="font-deva text-[13px] text-mute">निवेश · मार्ग</span>
            <div>
              <p className="font-head text-[26px] font-semibold leading-[1.15]">
                The path of investment
              </p>
              <svg className="mt-3 w-[150px]" viewBox="0 0 210 14" fill="none" aria-hidden="true">
                <path
                  d="M3 9C50 3 140 2 206 6"
                  stroke="#F5C518"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <p className="text-[12px] leading-[1.7] text-mute">
              Wealth is not a destination. It is a path you walk with patience.
            </p>
          </div>
          <h3 className="mt-5 font-head text-[15px] font-semibold leading-snug">
            Four steps, walked in order
          </h3>
          <p className="mt-2 text-[12px] leading-[1.7] text-mute">
            The workspace shapes itself around what you actually own — and keeps the record of every
            decision you made along the way.
          </p>
        </article>
      </ScrollReveal>

      <div>
        <ol className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <ScrollReveal delayMs={100}>
            <li className="h-full rounded-[14px] border border-hair p-6">
              <span className="font-head text-[34px] font-semibold leading-none text-[#E8E8E8]">
                01
              </span>
              <h3 className="mt-3 font-head text-[15px] font-semibold">Bring your holdings</h3>
              <p className="mt-2 text-[12.5px] leading-[1.7] text-mute">
                Add positions and the tickers you are watching.
              </p>
            </li>
          </ScrollReveal>

          <ScrollReveal delayMs={150}>
            <li className="h-full rounded-[14px] border border-hair p-6">
              <span className="font-head text-[34px] font-semibold leading-none text-[#E8E8E8]">
                02
              </span>
              <h3 className="mt-3 font-head text-[15px] font-semibold">Let the swarm argue</h3>
              <p className="mt-2 text-[12.5px] leading-[1.7] text-mute">
                Six analysts research, debate and reach a verdict with levels attached.
              </p>
            </li>
          </ScrollReveal>

          <ScrollReveal delayMs={200}>
            <li className="h-full rounded-[14px] border border-hair p-6">
              <span className="font-head text-[34px] font-semibold leading-none text-[#E8E8E8]">
                03
              </span>
              <h3 className="mt-3 font-head text-[15px] font-semibold">Test before you commit</h3>
              <p className="mt-2 text-[12.5px] leading-[1.7] text-mute">
                Backtest the strategy, paper trade the idea, read the Doctor&apos;s diagnosis.
              </p>
            </li>
          </ScrollReveal>

          <ScrollReveal delayMs={250}>
            <li className="h-full rounded-[14px] border border-hair p-6">
              <span className="font-head text-[34px] font-semibold leading-none text-[#E8E8E8]">
                04
              </span>
              <h3 className="mt-3 font-head text-[15px] font-semibold">
                Walk, and keep the record
              </h3>
              <p className="mt-2 text-[12.5px] leading-[1.7] text-mute">
                Export the reasoning, set the alerts, and let patience do the rest.
              </p>
            </li>
          </ScrollReveal>
        </ol>

        <ScrollReveal delayMs={300} className="mt-8">
          <div className="rounded-[14px] border border-hair p-8">
            <p className="max-w-[620px] text-[14px] leading-[1.9] text-[#3A3A3A]">
              “A verdict is only worth as much as the argument behind it. Every score keeps its four
              readings, every debate keeps both cases in the words the agents used, and every report
              can still be opened a year later and checked against what actually happened.”
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full">
                  <Image
                    src="/logo.svg"
                    alt="NiveshMarg logo"
                    width={36}
                    height={36}
                    className="h-9 w-9 object-cover"
                    priority
                  />
                </span>
                <div>
                  <p className="font-head text-[15px] font-semibold">How NiveshMarg works</p>
                  <p className="text-[12px] text-mute">Auditable by design</p>
                </div>
              </div>
              <Link
                href="#swarm"
                className="inline-flex items-center gap-2 text-[13px] font-semibold text-mute"
              >
                Read the method <span>→</span>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
