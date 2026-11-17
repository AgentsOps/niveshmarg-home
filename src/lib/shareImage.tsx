import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { PAGES, type PageKey } from "@/lib/seo";

// Rendered at build time into static PNGs (one per page) for Open Graph / Twitter cards.
const logo = `data:image/svg+xml;base64,${Buffer.from(
  readFileSync(join(process.cwd(), "public/assets/niveshmarg-logo.svg"), "utf8").replace(
    'fill="#000"',
    'fill="#4f46e5"',
  ),
).toString("base64")}`;

export function renderShareImage(key: PageKey) {
  const page = PAGES[key];
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "64px 72px",
        background: "#f5f5fb",
        backgroundImage:
          "radial-gradient(circle at 8% 0%, rgba(99,102,241,.28), rgba(99,102,241,0) 45%), radial-gradient(circle at 100% 20%, rgba(125,190,255,.32), rgba(125,190,255,0) 45%), radial-gradient(circle at 60% 110%, rgba(242,169,59,.18), rgba(242,169,59,0) 40%)",
        color: "#16153b",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
        {/* eslint-disable-next-line @next/next/no-img-element -- rendered by Satori, not the browser */}
        <img src={logo} width={64} height={64} alt="" />
        <div style={{ fontSize: 40, fontWeight: 800, letterSpacing: "-0.02em" }}>Niveshmarg</div>
        <div
          style={{
            fontSize: 20,
            fontWeight: 700,
            letterSpacing: "0.14em",
            padding: "8px 12px",
            borderRadius: 10,
            background: "#ecebff",
            color: "#4f46e5",
          }}
        >
          EDGE
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <div style={{ fontSize: 24, fontWeight: 600, letterSpacing: "0.14em", color: "#4f46e5" }}>{page.ogEyebrow}</div>
        <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.02, letterSpacing: "-0.04em", maxWidth: 1000 }}>
          {page.ogHeadline}
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, color: "#5d5c7a" }}>
        <div>Algorithmic trading for Indian markets</div>
        <div>niveshmarg.com</div>
      </div>
    </div>,
    { width: 1200, height: 630 },
  );
}
