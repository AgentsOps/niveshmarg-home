import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-[#FDF8EC] via-[#FBF4F1] to-[#FBEFF4]">
      <div className="mx-auto max-w-[1180px] px-6 pb-8 pt-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-full">
                <Image
                  src="/logo.svg"
                  alt="Niveshmarg logo"
                  width={36}
                  height={36}
                  className="h-9 w-9 object-cover"
                  priority
                />
              </span>
              <span className="leading-none">
                <span className="block font-head text-[20px] font-semibold tracking-tight">
                  Niveshmarg
                </span>
                <span className="mt-0.5 block font-deva text-[10px] text-mute"> निवेश · मार्ग </span>
              </span>
            </div>
            <p className="mt-5 max-w-[300px] text-[12.5px] leading-[1.8] text-mute">
              An AI research workspace for patient investors — six specialist agents, a four-part
              score and a conversational analyst, built for NSE and global markets.
            </p>
            <div className="mt-6 flex gap-2.5">
              <a
                href="https://dashboard.niveshmarg.com/"
                aria-label="Open dashboard"
                className="grid h-9 w-9 place-items-center rounded-full border border-[#E0DAD2] text-[13px]"
              >
                <span className="material-symbols-outlined text-[17px]">dashboard</span>
              </a>
              <a
                href="mailto:hello@niveshmarg.com"
                aria-label="Email us"
                className="grid h-9 w-9 place-items-center rounded-full border border-[#E0DAD2] text-[13px]"
              >
                <span className="material-symbols-outlined text-[17px]">mail</span>
              </a>
              <a
                href="https://dashboard.niveshmarg.com/"
                aria-label="Telegram alerts"
                className="grid h-9 w-9 place-items-center rounded-full border border-[#E0DAD2] text-[13px]"
              >
                <span className="material-symbols-outlined text-[17px]">send</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-head text-[15px] font-semibold">Research</h4>
            <ul className="mt-5 flex flex-col gap-3 text-[13px] text-mute">
              <li>
                <Link href="/features/ai-score" className="transition hover:text-ink">
                  AI Score
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Link href="/features/swarm" className="transition hover:text-ink">
                  Agent swarm
                </Link>
                <span className="rounded bg-mint px-1.5 py-0.5 text-[9px] font-semibold text-mint-ink">
                  New
                </span>
              </li>
              <li>
                <Link href="/features/stock-chat" className="transition hover:text-ink">
                  Stock Chat
                </Link>
              </li>
              <li>
                <Link href="/features/workspace" className="transition hover:text-ink">
                  Workspace
                </Link>
              </li>
              <li>
                <Link href="/features/institutional-flow" className="transition hover:text-ink">
                  Institutional flow
                </Link>
              </li>
              <li>
                <Link href="/features/reports-exports" className="transition hover:text-ink">
                  Reports &amp; exports
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-head text-[15px] font-semibold">Practise</h4>
            <ul className="mt-5 flex flex-col gap-3 text-[13px] text-mute">
              <li>
                <Link href="/features/paper-trading" className="transition hover:text-ink">
                  Paper trading
                </Link>
              </li>
              <li>
                <Link href="/features/backtesting-strategy" className="transition hover:text-ink">
                  Backtesting
                </Link>
              </li>
              <li>
                <Link href="/features/backtesting-strategy" className="transition hover:text-ink">
                  Strategy builder
                </Link>
              </li>
              <li>
                <Link href="/features/portfolio-doctor" className="transition hover:text-ink">
                  Portfolio Doctor
                </Link>
              </li>
              <li>
                <Link href="/features/watchlist" className="transition hover:text-ink">
                  Watchlist
                </Link>
              </li>
              <li>
                <Link href="/features/path" className="transition hover:text-ink">
                  How it works
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-head text-[15px] font-semibold">Get started</h4>
            <ul className="mt-5 flex flex-col gap-3 text-[13px] text-mute">
              <li>
                <a href="https://dashboard.niveshmarg.com/" className="transition hover:text-ink">
                  Sign in
                </a>
              </li>
              <li>
                <a href="https://dashboard.niveshmarg.com/" className="transition hover:text-ink">
                  Open dashboard
                </a>
              </li>
              <li>
                <a href="mailto:hello@niveshmarg.com" className="transition hover:text-ink">
                  Contact
                </a>
              </li>
            </ul>
            <a href="https://dashboard.niveshmarg.com/" className="pill pill-ink pill-sm mt-6">
              Take the first step{" "}
              <span className="material-symbols-outlined text-[17px]">arrow_forward</span>
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-[#EBE3DA] pt-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-head text-[15px] font-semibold">Walk the path with NiveshMarg</p>
            <p className="mt-1.5 max-w-[560px] text-[12.5px] leading-[1.7] text-mute">
              Markets carry risk. Nothing here is personalised investment advice — please do your
              own research, or consult a SEBI-registered adviser, before you invest.
            </p>
          </div>
          <p className="text-[12.5px] text-mute">© {currentYear} NiveshMarg. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
