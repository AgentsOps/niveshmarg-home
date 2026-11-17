"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";

type NavLink = { key: string; href: string; label: string };

/** Hamburger + dropdown for the header links on small screens (the inline links are hidden below 720px). */
export default function MobileMenu({ links, active }: { links: NavLink[]; active: string }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const panelId = useId();
  const pathname = usePathname();

  // Close after navigating to another page.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  return (
    <div ref={ref} className="nav-burger-wrap">
      <button
        type="button"
        className="nav-burger"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((o) => !o)}
      >
        <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
          {open ? (
            <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          ) : (
            <path d="M2.5 5h13M2.5 9h13M2.5 13h13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          )}
        </svg>
      </button>
      {open && (
        <div id={panelId} className="nav-panel">
          {links.map((l) => {
            const on = l.key === active;
            return (
              <Link
                key={l.key}
                href={l.href}
                className="nav-panel-link"
                aria-current={on ? "page" : undefined}
                onClick={() => setOpen(false)}
                style={on ? { color: "var(--acc,#4f46e5)", fontWeight: 700 } : undefined}
              >
                {l.label}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
