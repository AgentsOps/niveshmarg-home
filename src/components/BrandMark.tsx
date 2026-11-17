import Link from "next/link";

/** Logo, wordmark and EDGE badge, shared by the nav and footer. */
export default function BrandMark() {
  return (
    <Link href="/" style={{ display: "flex", alignItems: "center", gap: "10px", color: "#16153b", flex: "none" }}>
      <span
        role="img"
        aria-label="Niveshmarg logo"
        style={{
          width: "30px",
          height: "30px",
          flex: "none",
          display: "block",
          background: "var(--acc,#4f46e5)",
          WebkitMask: "url(/assets/niveshmarg-logo.svg) center/contain no-repeat",
          mask: "url(/assets/niveshmarg-logo.svg) center/contain no-repeat",
        }}
      />
      <span style={{ fontWeight: 800, fontSize: "18px", letterSpacing: "-.02em" }}>Niveshmarg</span>
      <span
        className="brand-badge"
        style={{
          font: "600 10px/1 'JetBrains Mono',monospace",
          letterSpacing: ".14em",
          padding: "5px 7px",
          borderRadius: "6px",
          background: "var(--acc-soft,#ecebff)",
          color: "var(--acc,#4f46e5)",
        }}
      >
        EDGE
      </span>
    </Link>
  );
}
