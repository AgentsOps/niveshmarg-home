import Link from "next/link";
import BrandMark from "@/components/BrandMark";

const COLUMNS: { title: string; links: [string, string][] }[] = [
  {
    title: "PRODUCT",
    links: [
      ["/builder", "Strategy Builder"],
      ["/charts", "Chart Workspace"],
      ["/backtesting", "Backtesting"],
      ["/live", "Live Trading & Risk"],
      ["/live-stream", "Live Stream (@agentsops)"],
    ],
  },
  {
    title: "RESEARCH",
    links: [
      ["/research", "AI Research Desk"],
      ["/strategies", "Validated Strategies"],
      ["/integrations", "Brokers & MCP"],
    ],
  },
  {
    title: "COMPANY",
    links: [
      ["/docs", "Documentation"],
      ["/contact", "Request a demo"],
      ["/", "Home"],
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "90px 24px 44px",
        fontFamily: "'Schibsted Grotesk',system-ui,sans-serif",
        fontSize: "17px",
        lineHeight: 1.55,
      }}
    >
      <div style={{ display: "flex", flexWrap: "wrap", gap: "40px 64px", justifyContent: "space-between" }}>
        <div style={{ flex: "1 1 260px", maxWidth: "340px" }}>
          <BrandMark />
          <p style={{ margin: "16px 0 0", fontSize: "15px", color: "#5d5c7a" }}>
            Algorithmic trading, AI stock research and quantitative portfolio management for Indian markets.
          </p>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "32px 64px", fontSize: "15px" }}>
          {COLUMNS.map((col) => (
            <div key={col.title} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <span
                style={{
                  font: "600 11px/1 'JetBrains Mono',monospace",
                  letterSpacing: ".12em",
                  color: "#5d5c7a",
                  marginBottom: "4px",
                }}
              >
                {col.title}
              </span>
              {col.links.map(([href, label]) => (
                <Link key={label} href={href} className="footer-link" style={{ color: "#3d3c5c" }}>
                  {label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div
        style={{
          marginTop: "56px",
          paddingTop: "22px",
          borderTop: "1px solid rgba(22,21,59,.1)",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "10px 30px",
          fontSize: "13.5px",
          color: "#5d5c7a",
        }}
      >
        <span>© {new Date().getFullYear()} Niveshmarg. All rights reserved.</span>
        <span style={{ maxWidth: "640px" }}>
          Trading in securities carries risk. Niveshmarg Edge is software, not investment advice. Backtested results are
          hypothetical and do not guarantee future returns.
        </span>
      </div>
    </footer>
  );
}
