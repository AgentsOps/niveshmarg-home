import Link from "next/link";
import type { ReactNode } from "react";
import MotionRoot from "@/components/MotionRoot";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";

type Props = {
  /** HTTP status shown large, e.g. "404". */
  code: string;
  eyebrow: string;
  title: string;
  message: ReactNode;
  /** Buttons under the message. Defaults to "Back to home" + "Request a demo". */
  actions?: ReactNode;
  /** Small print under the buttons, e.g. an error reference. */
  note?: ReactNode;
};

const SUGGESTIONS: [href: string, title: string, desc: string][] = [
  ["/builder", "Strategy Builder", "Wire a strategy from nodes, no code."],
  ["/backtesting", "Backtesting", "Zero look-ahead, real Indian costs."],
  ["/research", "AI Research Desk", "Reports, regimes and screeners."],
  ["/docs", "Documentation", "Every guide in one place."],
];

const mono = "'JetBrains Mono',monospace";

export function PrimaryLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="err-btn err-btn-primary">
      {children}
    </Link>
  );
}

export function SecondaryLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="err-btn err-btn-secondary">
      {children}
    </Link>
  );
}

/** Branded page for 403 / 404 / 500 states, in the same visual language as the rest of the site. */
export default function ErrorScreen({ code, eyebrow, title, message, actions, note }: Props) {
  return (
    <MotionRoot
      style={{ position: "relative", overflowX: "clip", fontSize: "17px", lineHeight: 1.55, color: "#3d3c5c" }}
    >
      <div
        data-blob=""
        style={{
          position: "absolute",
          top: "-260px",
          left: "-200px",
          width: "780px",
          height: "780px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle,rgba(var(--acc-rgb,99,102,241),.22),rgba(var(--acc-rgb,99,102,241),0) 68%)",
          pointerEvents: "none",
        }}
      />
      <div
        data-blob=""
        style={{
          position: "absolute",
          top: "-60px",
          right: "-260px",
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          background: "radial-gradient(circle,rgba(125,190,255,.26),rgba(125,190,255,0) 68%)",
          pointerEvents: "none",
        }}
      />
      <div style={{ position: "sticky", top: "12px", zIndex: 50 }}>
        <SiteNav active="" />
      </div>

      <main
        style={{
          position: "relative",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "72px 24px 0",
          textAlign: "center",
        }}
      >
        <div
          data-reveal=""
          aria-hidden="true"
          style={{
            font: `600 clamp(96px,18vw,200px)/1 ${mono}`,
            letterSpacing: "-.06em",
            background: "linear-gradient(180deg,var(--acc,#4f46e5),rgba(var(--acc-rgb,99,102,241),.25))",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          {code}
        </div>
        <div
          data-reveal=""
          data-delay="60"
          style={{
            marginTop: "18px",
            font: `500 12px/1 ${mono}`,
            letterSpacing: ".14em",
            textTransform: "uppercase",
            color: "var(--acc,#4f46e5)",
          }}
        >
          {eyebrow}
        </div>
        <h1
          data-reveal=""
          data-delay="120"
          style={{
            margin: "18px auto 0",
            maxWidth: "820px",
            fontSize: "clamp(34px,5.4vw,64px)",
            lineHeight: 1.02,
            letterSpacing: "-.04em",
            fontWeight: 800,
            color: "#16153b",
            textWrap: "balance",
          }}
        >
          {title}
        </h1>
        <p
          data-reveal=""
          data-delay="180"
          style={{ margin: "22px auto 0", maxWidth: "580px", fontSize: "clamp(17px,1.6vw,19px)", textWrap: "pretty" }}
        >
          {message}
        </p>
        <div
          data-reveal=""
          data-delay="240"
          style={{ marginTop: "32px", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px" }}
        >
          {actions ?? (
            <>
              <PrimaryLink href="/">Back to home</PrimaryLink>
              <SecondaryLink href="/contact">Request a demo</SecondaryLink>
            </>
          )}
        </div>
        {note && <div style={{ marginTop: "20px", font: `400 12.5px/1.5 ${mono}`, color: "#8e8cb3" }}>{note}</div>}

        <div style={{ marginTop: "88px", textAlign: "left" }}>
          <div style={{ font: `600 11px/1 ${mono}`, letterSpacing: ".12em", color: "#5d5c7a", marginBottom: "16px" }}>
            POPULAR PAGES
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))", gap: "14px" }}>
            {SUGGESTIONS.map(([href, name, desc], i) => (
              <Link key={href} href={href} className="err-card" data-reveal="" data-delay={String(i * 70)}>
                <span style={{ fontSize: "18px", fontWeight: 700, color: "#16153b" }}>{name}</span>
                <span style={{ fontSize: "15px" }}>{desc}</span>
                <span style={{ marginTop: "auto", font: `500 12px/1 ${mono}`, color: "var(--acc,#4f46e5)" }}>
                  {href} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <SiteFooter />
    </MotionRoot>
  );
}
