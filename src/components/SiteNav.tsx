import Link from "next/link";
import BrandMark from "@/components/BrandMark";
import { LOGIN_URL, NAV_LINKS, type NavKey } from "@/lib/nav";

export default function SiteNav({ active = "home" }: { active?: NavKey | string }) {
  return (
    <div
      className="nav-wrap"
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "12px 24px 0",
        fontFamily: "'Schibsted Grotesk',system-ui,sans-serif",
      }}
    >
      <nav
        className="nav-bar"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "18px",
          padding: "10px 12px 10px 16px",
          borderRadius: "999px",
          background: "rgba(255,255,255,.72)",
          border: "1px solid rgba(22,21,59,.08)",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,.9),0 14px 34px -22px rgba(22,21,59,.35)",
          backdropFilter: "blur(16px)",
        }}
      >
        <BrandMark />
        <div
          className="nav-links"
          style={{
            flex: 1,
            minWidth: 0,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "4px 22px",
            height: "24px",
            overflow: "hidden",
            fontSize: "14.5px",
            lineHeight: "24px",
          }}
        >
          {NAV_LINKS.map((l) => {
            const on = l.key === active;
            return (
              <Link
                key={l.key}
                href={l.href}
                className="nav-link"
                aria-current={on ? "page" : undefined}
                style={{ color: on ? "var(--acc,#4f46e5)" : "#3d3c5c", fontWeight: on ? 700 : 500 }}
              >
                {l.label}
              </Link>
            );
          })}
        </div>
        {/* External app, so a plain <a> rather than next/link. */}
        <a
          href={LOGIN_URL}
          className="nav-cta"
          style={{
            flex: "none",
            marginLeft: "auto",
            padding: "10px 18px",
            borderRadius: "999px",
            background: "#16153b",
            color: "#fff",
            fontSize: "14.5px",
            fontWeight: 600,
            transition: "background .2s",
          }}
        >
          Log in
        </a>
      </nav>
    </div>
  );
}
