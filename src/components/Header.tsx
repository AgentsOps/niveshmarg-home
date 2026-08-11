"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#F0EADA] bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex h-[76px] max-w-[1180px] items-center justify-between px-6">
        <Link href="/" onClick={closeMenu} className="flex min-w-0 items-center gap-2.5">
          <span className="grid h-9 w-9 shrink-0 place-items-center overflow-hidden rounded-full">
            <Image
              src="/logo.svg"
              alt="Niveshmarg logo"
              width={36}
              height={36}
              className="h-9 w-9 object-cover"
              priority
            />
          </span>
          <span className="min-w-0 leading-none">
            <span className="block truncate font-head text-[18px] font-semibold tracking-tight sm:text-[20px]">
              Niveshmarg
            </span>
            <span className="mt-0.5 block font-deva text-[10px] text-mute"> निवेश · मार्ग </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-[14px] text-mute lg:flex" aria-label="Primary">
          <Link href="/" className="transition hover:text-ink uppercase">
            Home
          </Link>
          <Link href="/features" className="transition hover:text-ink uppercase">
            Features
          </Link>
          <Link href="/features/ai-score" className="transition hover:text-ink uppercase">
            AI Score
          </Link>
          <Link href="/features/swarm" className="transition hover:text-ink uppercase">
            The swarm
          </Link>
          <Link href="/features/workspace" className="transition hover:text-ink uppercase">
            Workspace
          </Link>
          <Link href="/features/path" className="transition hover:text-ink uppercase">
            How it works
          </Link>
        </nav>

        <div className="flex shrink-0 items-center gap-3 sm:gap-4">
          <a
            href="https://dashboard.niveshmarg.com/"
            className="hidden text-[14px] font-medium sm:inline"
          >
            Sign in
          </a>
          <a
            href="https://dashboard.niveshmarg.com/"
            className="pill pill-ink pill-sm whitespace-nowrap"
          >
            <span className="hidden sm:inline">Open dashboard</span>
            <span className="sm:hidden">Log in</span>
          </a>
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="menu-panel"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="grid h-9 w-9 place-items-center rounded-full border border-[#E4DFCD] bg-white lg:hidden"
          >
            <span className="material-symbols-outlined text-[20px]">
              {isMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div id="menu-panel" className="border-t border-[#F0EADA] bg-cream px-6 py-3 lg:hidden">
          <nav className="grid gap-1 text-[14px]" aria-label="Mobile">
            <Link
              href="/features"
              onClick={closeMenu}
              className="rounded-xl px-3 py-2.5 font-medium transition hover:bg-white"
            >
              Features
            </Link>
            <Link
              href="/features/ai-score"
              onClick={closeMenu}
              className="rounded-xl px-3 py-2.5 font-medium transition hover:bg-white"
            >
              AI Score
            </Link>
            <Link
              href="/features/swarm"
              onClick={closeMenu}
              className="rounded-xl px-3 py-2.5 font-medium transition hover:bg-white"
            >
              The swarm
            </Link>
            <Link
              href="/features/workspace"
              onClick={closeMenu}
              className="rounded-xl px-3 py-2.5 font-medium transition hover:bg-white"
            >
              Workspace
            </Link>
            <Link
              href="/features/path"
              onClick={closeMenu}
              className="rounded-xl px-3 py-2.5 font-medium transition hover:bg-white"
            >
              How it works
            </Link>
            <a
              href="https://dashboard.niveshmarg.com/"
              onClick={closeMenu}
              className="mt-1 rounded-xl bg-ink px-3 py-2.5 text-center font-medium text-white"
            >
              Sign in
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
