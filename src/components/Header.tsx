"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

type NavItem = {
  label: string;
  href: string;
};

const defaultNavItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  { label: "AI Score", href: "/features/ai-score" },
  { label: "The swarm", href: "/features/swarm" },
  { label: "Workspace", href: "/features/workspace" },
  { label: "How it works", href: "/features/path" },
];

export default function Header({ navItems = defaultNavItems }: { navItems?: NavItem[] }) {
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
              NiveshMarg
            </span>
            <span className="mt-0.5 block font-deva text-[10px] text-mute"> निवेश · मार्ग </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-[14px] text-mute lg:flex" aria-label="Primary">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-ink uppercase">
              {item.label}
            </Link>
          ))}
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
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="rounded-xl px-3 py-2.5 font-medium transition hover:bg-white"
              >
                {item.label}
              </Link>
            ))}
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
