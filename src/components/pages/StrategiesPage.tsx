import Link from "next/link";
import MotionRoot from "@/components/MotionRoot";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

// Generated from UI_PROTO/Strategies.dc.html.
const SKIN = "Indigo sky";

export default function StrategiesPage() {
  return (
    <MotionRoot
      skin={SKIN}
      style={{ position: "relative", overflowX: "clip", fontSize: "17px", lineHeight: "1.55", color: "#3d3c5c" }}
    >
      {" "}
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
            "radial-gradient(circle,rgba(var(--acc-rgb,99,102,241),.2),rgba(var(--acc-rgb,99,102,241),0) 68%)",
          pointerEvents: "none",
        }}
      />{" "}
      <div
        data-blob=""
        style={{
          position: "absolute",
          top: "240px",
          right: "-260px",
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          background: "radial-gradient(circle,rgba(47,191,113,.14),rgba(47,191,113,0) 68%)",
          pointerEvents: "none",
        }}
      />{" "}
      <div style={{ position: "sticky", top: "12px", zIndex: "50" }}>
        <SiteNav active="strategies" />
      </div>{" "}
      <section
        data-hero=""
        style={{ position: "relative", maxWidth: "1200px", margin: "0 auto", padding: "72px 24px 0" }}
      >
        {" "}
        <div style={{ maxWidth: "900px" }}>
          {" "}
          <div
            data-reveal=""
            style={{
              font: "500 12px/1 'JetBrains Mono',monospace",
              letterSpacing: ".14em",
              textTransform: "uppercase",
              color: "var(--acc,#4f46e5)",
            }}
          >
            Validated Strategies
          </div>{" "}
          <h1
            data-reveal=""
            data-delay="80"
            style={{
              margin: "22px 0 0",
              fontSize: "clamp(38px,6vw,76px)",
              lineHeight: "1",
              letterSpacing: "-.045em",
              fontWeight: "800",
              color: "#16153b",
              textWrap: "balance",
            }}
          >
            Our research, including the strategies that lost.
          </h1>{" "}
          <p data-reveal="" data-delay="160" style={{ margin: "22px 0 0", maxWidth: "620px", textWrap: "pretty" }}>
            We test our own ideas with the same engine you use: development data, an untouched hold-out and a rolling
            walk-forward, all after costs. Then we publish what we found.
          </p>{" "}
        </div>{" "}
        <div
          data-reveal=""
          data-delay="240"
          style={{
            marginTop: "44px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
            gap: "12px",
          }}
        >
          {" "}
          <div
            style={{
              padding: "20px",
              borderRadius: "18px",
              background: "rgba(255,255,255,.7)",
              border: "1px solid rgba(22,21,59,.08)",
            }}
          >
            <div
              style={{
                font: "600 11px/1 'JetBrains Mono',monospace",
                letterSpacing: ".12em",
                color: "var(--acc,#4f46e5)",
              }}
            >
              STEP 1
            </div>
            <div style={{ marginTop: "10px", fontSize: "17px", fontWeight: "700", color: "#16153b" }}>Develop</div>
            <div style={{ marginTop: "4px", fontSize: "14.5px" }}>Iterate versions on early data only</div>
          </div>{" "}
          <div
            style={{
              padding: "20px",
              borderRadius: "18px",
              background: "rgba(255,255,255,.7)",
              border: "1px solid rgba(22,21,59,.08)",
            }}
          >
            <div
              style={{
                font: "600 11px/1 'JetBrains Mono',monospace",
                letterSpacing: ".12em",
                color: "var(--acc,#4f46e5)",
              }}
            >
              STEP 2
            </div>
            <div style={{ marginTop: "10px", fontSize: "17px", fontWeight: "700", color: "#16153b" }}>Hold out</div>
            <div style={{ marginTop: "4px", fontSize: "14.5px" }}>One run on data never touched</div>
          </div>{" "}
          <div
            style={{
              padding: "20px",
              borderRadius: "18px",
              background: "rgba(255,255,255,.7)",
              border: "1px solid rgba(22,21,59,.08)",
            }}
          >
            <div
              style={{
                font: "600 11px/1 'JetBrains Mono',monospace",
                letterSpacing: ".12em",
                color: "var(--acc,#4f46e5)",
              }}
            >
              STEP 3
            </div>
            <div style={{ marginTop: "10px", fontSize: "17px", fontWeight: "700", color: "#16153b" }}>Walk forward</div>
            <div style={{ marginTop: "4px", fontSize: "14.5px" }}>Rolling out-of-sample years</div>
          </div>{" "}
          <div
            style={{
              padding: "20px",
              borderRadius: "18px",
              background: "rgba(255,255,255,.7)",
              border: "1px solid rgba(22,21,59,.08)",
            }}
          >
            <div
              style={{
                font: "600 11px/1 'JetBrains Mono',monospace",
                letterSpacing: ".12em",
                color: "var(--acc,#4f46e5)",
              }}
            >
              STEP 4
            </div>
            <div style={{ marginTop: "10px", fontSize: "17px", fontWeight: "700", color: "#16153b" }}>Verdict</div>
            <div style={{ marginTop: "4px", fontSize: "14.5px" }}>With bootstrap confidence intervals</div>
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "120px 24px 0" }}>
        {" "}
        <div
          data-reveal="scale"
          style={{
            borderRadius: "28px",
            background: "rgba(255,255,255,.72)",
            border: "1px solid rgba(15,138,75,.28)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,.95),0 50px 90px -50px rgba(22,21,59,.45)",
            padding: "clamp(24px,4vw,48px)",
          }}
        >
          {" "}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "12px",
            }}
          >
            <span
              style={{
                font: "600 11px/1 'JetBrains Mono',monospace",
                letterSpacing: ".12em",
                padding: "8px 11px",
                borderRadius: "999px",
                background: "rgba(15,138,75,.1)",
                color: "#0f8a4b",
              }}
            >
              PASSED · PAPER TRADING ONLY
            </span>
            <span style={{ font: "500 12.5px/1 'JetBrains Mono',monospace", color: "#5d5c7a" }}>
              Swing · daily bars · v6
            </span>
          </div>{" "}
          <div
            style={{ marginTop: "24px", display: "flex", flexWrap: "wrap", gap: "36px 56px", alignItems: "flex-start" }}
          >
            {" "}
            <div style={{ flex: "1 1 380px", minWidth: "0" }}>
              {" "}
              <h2
                style={{
                  margin: "0",
                  fontSize: "clamp(30px,4.2vw,50px)",
                  lineHeight: "1.04",
                  letterSpacing: "-.035em",
                  fontWeight: "700",
                  color: "#16153b",
                  textWrap: "balance",
                }}
              >
                RS Momentum Trend Swing
              </h2>{" "}
              <p style={{ margin: "16px 0 0", maxWidth: "520px", textWrap: "pretty" }}>
                Liquid large caps that are outperforming the market and in an uptrend. Decisions at the daily close,
                orders at the next session&apos;s open, with a daily loss halt and kill switch on top.
              </p>{" "}
              <div style={{ marginTop: "24px", display: "flex", flexDirection: "column", fontSize: "15.5px" }}>
                {" "}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "12px",
                    padding: "12px 0",
                    borderTop: "1px solid rgba(22,21,59,.08)",
                  }}
                >
                  <span>Development period</span>
                  <span style={{ font: "600 13px/1.6 'JetBrains Mono',monospace", color: "#16153b" }}>2012–2019</span>
                </div>{" "}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "12px",
                    padding: "12px 0",
                    borderTop: "1px solid rgba(22,21,59,.08)",
                  }}
                >
                  <span>Untouched hold-out</span>
                  <span style={{ font: "600 13px/1.6 'JetBrains Mono',monospace", color: "#16153b" }}>2020–2026</span>
                </div>{" "}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "12px",
                    padding: "12px 0",
                    borderTop: "1px solid rgba(22,21,59,.08)",
                  }}
                >
                  <span>Universe</span>
                  <span style={{ font: "600 13px/1.6 'JetBrains Mono',monospace", color: "#16153b" }}>
                    95 large caps + index leavers
                  </span>
                </div>{" "}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "12px",
                    padding: "12px 0",
                    borderTop: "1px solid rgba(22,21,59,.08)",
                    borderBottom: "1px solid rgba(22,21,59,.08)",
                  }}
                >
                  <span>Versions tested</span>
                  <span style={{ font: "600 13px/1.6 'JetBrains Mono',monospace", color: "#16153b" }}>v1 → v6</span>
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div
              style={{ flex: "1 1 380px", minWidth: "0", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}
            >
              {" "}
              <div style={{ padding: "22px", borderRadius: "18px", background: "rgba(22,21,59,.04)" }}>
                <div
                  style={{
                    fontSize: "clamp(36px,4.4vw,52px)",
                    fontWeight: "800",
                    letterSpacing: "-.04em",
                    lineHeight: "1",
                    color: "#16153b",
                  }}
                >
                  <span data-count="1.56" data-dec="2">
                    1.56
                  </span>
                </div>
                <div style={{ marginTop: "8px", fontSize: "14.5px" }}>walk-forward profit factor</div>
              </div>{" "}
              <div style={{ padding: "22px", borderRadius: "18px", background: "rgba(22,21,59,.04)" }}>
                <div
                  style={{
                    fontSize: "clamp(36px,4.4vw,52px)",
                    fontWeight: "800",
                    letterSpacing: "-.04em",
                    lineHeight: "1",
                    color: "#16153b",
                  }}
                >
                  <span data-count="7">7</span>
                  <span style={{ fontSize: ".5em", fontWeight: "600", letterSpacing: "0" }}>/10</span>
                </div>
                <div style={{ marginTop: "8px", fontSize: "14.5px" }}>out-of-sample years profitable</div>
              </div>{" "}
              <div
                style={{
                  gridColumn: "1 / -1",
                  padding: "22px",
                  borderRadius: "18px",
                  background: "var(--acc-soft,#ecebff)",
                }}
              >
                {" "}
                <div
                  style={{
                    font: "600 11px/1 'JetBrains Mono',monospace",
                    letterSpacing: ".12em",
                    color: "var(--acc,#4f46e5)",
                  }}
                >
                  OUT-OF-SAMPLE YEARS
                </div>{" "}
                <div
                  data-seq="140"
                  style={{ marginTop: "14px", display: "grid", gridTemplateColumns: "repeat(10,1fr)", gap: "5px" }}
                >
                  {" "}
                  <span data-i="0" style={{ height: "34px", borderRadius: "6px", background: "#2fbf71" }} />
                  <span data-i="1" style={{ height: "34px", borderRadius: "6px", background: "#2fbf71" }} />
                  <span data-i="2" style={{ height: "34px", borderRadius: "6px", background: "rgba(210,47,74,.55)" }} />
                  <span data-i="3" style={{ height: "34px", borderRadius: "6px", background: "#2fbf71" }} />
                  <span data-i="4" style={{ height: "34px", borderRadius: "6px", background: "#2fbf71" }} />
                  <span data-i="5" style={{ height: "34px", borderRadius: "6px", background: "rgba(210,47,74,.55)" }} />
                  <span data-i="6" style={{ height: "34px", borderRadius: "6px", background: "#2fbf71" }} />
                  <span data-i="7" style={{ height: "34px", borderRadius: "6px", background: "#2fbf71" }} />
                  <span data-i="8" style={{ height: "34px", borderRadius: "6px", background: "rgba(210,47,74,.55)" }} />
                  <span data-i="9" style={{ height: "34px", borderRadius: "6px", background: "#2fbf71" }} />{" "}
                </div>{" "}
                <div style={{ marginTop: "10px", font: "400 11.5px/1.4 'JetBrains Mono',monospace", color: "#3d3c5c" }}>
                  Order of the losing years shown for illustration
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "24px 24px 0" }}>
        {" "}
        <div
          data-reveal="scale"
          style={{
            borderRadius: "28px",
            background: "rgba(255,255,255,.72)",
            border: "1px solid rgba(var(--acc-rgb,99,102,241),.28)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,.95),0 50px 90px -50px rgba(22,21,59,.45)",
            padding: "clamp(24px,4vw,48px)",
          }}
        >
          {" "}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "12px",
            }}
          >
            {" "}
            <span
              style={{
                font: "600 11px/1 'JetBrains Mono',monospace",
                letterSpacing: ".12em",
                padding: "8px 11px",
                borderRadius: "999px",
                background: "rgba(var(--acc-rgb,99,102,241),.1)",
                color: "var(--acc,#4f46e5)",
              }}
            >
              ACTIVE · LIVE STREAM RUNNER
            </span>{" "}
            <span style={{ font: "500 12.5px/1 'JetBrains Mono',monospace", color: "#5d5c7a" }}>
              Crypto &amp; Gold · 15m &amp; 1h · v2
            </span>{" "}
          </div>{" "}
          <div
            style={{ marginTop: "24px", display: "flex", flexWrap: "wrap", gap: "36px 56px", alignItems: "flex-start" }}
          >
            {" "}
            <div style={{ flex: "1 1 380px", minWidth: "0" }}>
              {" "}
              <h2
                style={{
                  margin: "0",
                  fontSize: "clamp(30px,4.2vw,50px)",
                  lineHeight: "1.04",
                  letterSpacing: "-.035em",
                  fontWeight: "700",
                  color: "#16153b",
                  textWrap: "balance",
                }}
              >
                Crypto SMC Institutional
              </h2>{" "}
              <p style={{ margin: "16px 0 0", maxWidth: "520px", textWrap: "pretty" }}>
                Institutional Smart Money Concepts on high-liquidity perpetual contracts. Enters on structural Fair
                Value Gap mitigations following liquidity sweeps, sized in USD under per-trade risk caps.
              </p>{" "}
              <div style={{ marginTop: "24px", display: "flex", flexDirection: "column", fontSize: "15.5px" }}>
                {" "}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "12px",
                    padding: "12px 0",
                    borderTop: "1px solid rgba(22,21,59,.08)",
                  }}
                >
                  <span>Instruments</span>
                  <span style={{ font: "600 13px/1.6 'JetBrains Mono',monospace", color: "#16153b" }}>
                    DELTA:BTCUSD &amp; XAUTUSD
                  </span>
                </div>{" "}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "12px",
                    padding: "12px 0",
                    borderTop: "1px solid rgba(22,21,59,.08)",
                  }}
                >
                  <span>Structure</span>
                  <span style={{ font: "600 13px/1.6 'JetBrains Mono',monospace", color: "#16153b" }}>
                    Order Blocks, FVG &amp; Liquidity Sweeps
                  </span>
                </div>{" "}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "12px",
                    padding: "12px 0",
                    borderTop: "1px solid rgba(22,21,59,.08)",
                  }}
                >
                  <span>Execution mode</span>
                  <span style={{ font: "600 13px/1.6 'JetBrains Mono',monospace", color: "#16153b" }}>
                    24×7 Delta Exchange (USD margin)
                  </span>
                </div>{" "}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "12px",
                    padding: "12px 0",
                    borderTop: "1px solid rgba(22,21,59,.08)",
                    borderBottom: "1px solid rgba(22,21,59,.08)",
                  }}
                >
                  <span>Broadcast</span>
                  <span style={{ font: "600 13px/1.6 'JetBrains Mono',monospace", color: "var(--acc,#4f46e5)" }}>
                    Mon–Fri 6–11 PM IST on YouTube
                  </span>
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div
              style={{ flex: "1 1 380px", minWidth: "0", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}
            >
              {" "}
              <div style={{ padding: "22px", borderRadius: "18px", background: "rgba(22,21,59,.04)" }}>
                <div
                  style={{
                    fontSize: "clamp(36px,4.4vw,52px)",
                    fontWeight: "800",
                    letterSpacing: "-.04em",
                    lineHeight: "1",
                    color: "#16153b",
                  }}
                >
                  11
                </div>
                <div style={{ marginTop: "8px", fontSize: "14.5px" }}>AST DAG nodes</div>
              </div>{" "}
              <div style={{ padding: "22px", borderRadius: "18px", background: "rgba(22,21,59,.04)" }}>
                <div
                  style={{
                    fontSize: "clamp(36px,4.4vw,52px)",
                    fontWeight: "800",
                    letterSpacing: "-.04em",
                    lineHeight: "1",
                    color: "#16153b",
                  }}
                >
                  24×7
                </div>
                <div style={{ marginTop: "8px", fontSize: "14.5px" }}>continuous market monitoring</div>
              </div>{" "}
              <div
                style={{
                  gridColumn: "1 / -1",
                  padding: "22px",
                  borderRadius: "18px",
                  background: "var(--acc-soft,#ecebff)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                {" "}
                <div
                  style={{
                    font: "600 11px/1 'JetBrains Mono',monospace",
                    letterSpacing: ".12em",
                    color: "var(--acc,#4f46e5)",
                  }}
                >
                  OFFICIAL STREAM STRATEGY
                </div>{" "}
                <div style={{ fontSize: "15px", color: "#16153b" }}>
                  This is the exact algorithm running live on YouTube with our partner, AgentsOps. Watch every bar
                  evaluation, entry, stop and target fill in real time.
                </div>{" "}
                <Link
                  href="/live-stream"
                  style={{
                    marginTop: "6px",
                    font: "600 13px/1 'JetBrains Mono',monospace",
                    color: "var(--acc,#4f46e5)",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  Watch on live stream →
                </Link>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "24px 24px 0" }}>
        {" "}
        <div
          data-reveal="scale"
          style={{
            borderRadius: "28px",
            background: "rgba(255,255,255,.72)",
            border: "1px solid rgba(210,47,74,.28)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,.95),0 50px 90px -50px rgba(22,21,59,.45)",
            padding: "clamp(24px,4vw,48px)",
          }}
        >
          {" "}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "12px",
            }}
          >
            <span
              style={{
                font: "600 11px/1 'JetBrains Mono',monospace",
                letterSpacing: ".12em",
                padding: "8px 11px",
                borderRadius: "999px",
                background: "rgba(210,47,74,.09)",
                color: "#c12843",
              }}
            >
              FAILED · DO NOT TRADE
            </span>
            <span style={{ font: "500 12.5px/1 'JetBrains Mono',monospace", color: "#5d5c7a" }}>
              Intraday · v4 · research only
            </span>
          </div>{" "}
          <div
            style={{ marginTop: "24px", display: "flex", flexWrap: "wrap", gap: "36px 56px", alignItems: "flex-start" }}
          >
            {" "}
            <div style={{ flex: "1 1 380px", minWidth: "0" }}>
              {" "}
              <h2
                style={{
                  margin: "0",
                  fontSize: "clamp(30px,4.2vw,50px)",
                  lineHeight: "1.04",
                  letterSpacing: "-.035em",
                  fontWeight: "700",
                  color: "#16153b",
                  textWrap: "balance",
                }}
              >
                Opening Range Retest
              </h2>{" "}
              <p style={{ margin: "16px 0 0", maxWidth: "520px", textWrap: "pretty" }}>
                Trade the retest of the first hour&apos;s range. It loses after costs in development, in the hold-out
                and in every walk-forward fold. It still loses with zero slippage. Both long and short sides lost.
              </p>{" "}
            </div>{" "}
            <div style={{ flex: "1 1 380px", minWidth: "0" }}>
              {" "}
              <div style={{ font: "600 11px/1 'JetBrains Mono',monospace", letterSpacing: ".12em", color: "#5d5c7a" }}>
                THE LOGIC WE TESTED
              </div>{" "}
              <div style={{ marginTop: "12px", display: "flex", flexDirection: "column", fontSize: "15.5px" }}>
                {" "}
                <div
                  style={{ display: "flex", gap: "14px", padding: "12px 0", borderTop: "1px solid rgba(22,21,59,.08)" }}
                >
                  <span style={{ font: "600 12px/1.7 'JetBrains Mono',monospace", color: "var(--acc,#4f46e5)" }}>
                    01
                  </span>
                  <span>Opening range from 09:15 to 10:15 IST, known once that bar closes</span>
                </div>{" "}
                <div
                  style={{ display: "flex", gap: "14px", padding: "12px 0", borderTop: "1px solid rgba(22,21,59,.08)" }}
                >
                  <span style={{ font: "600 12px/1.7 'JetBrains Mono',monospace", color: "var(--acc,#4f46e5)" }}>
                    02
                  </span>
                  <span>Enter on a retest of the broken range edge</span>
                </div>{" "}
                <div
                  style={{
                    display: "flex",
                    gap: "14px",
                    padding: "12px 0",
                    borderTop: "1px solid rgba(22,21,59,.08)",
                    borderBottom: "1px solid rgba(22,21,59,.08)",
                  }}
                >
                  <span style={{ font: "600 12px/1.7 'JetBrains Mono',monospace", color: "var(--acc,#4f46e5)" }}>
                    03
                  </span>
                  <span>At most 5 positions; no new entries after a 2% realised loss on the day</span>
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div
            style={{
              marginTop: "24px",
              padding: "18px 20px",
              borderRadius: "16px",
              background: "rgba(22,21,59,.04)",
              fontSize: "15.5px",
              color: "#16153b",
            }}
          >
            Kept in the platform as a research template, labelled as failed, so nobody has to rediscover it the
            expensive way.
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <section
        style={{
          margin: "140px 14px 0",
          borderRadius: "36px",
          background: "#0d0c22",
          color: "#a8a6c9",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {" "}
        <div
          data-blob=""
          style={{
            position: "absolute",
            top: "-300px",
            right: "-200px",
            width: "780px",
            height: "780px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle,rgba(var(--acc-rgb,99,102,241),.3),rgba(var(--acc-rgb,99,102,241),0) 68%)",
            pointerEvents: "none",
          }}
        />{" "}
        <div
          style={{
            position: "relative",
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "clamp(64px,9vw,110px) clamp(10px,3vw,24px)",
          }}
        >
          {" "}
          <div data-reveal="" style={{ maxWidth: "760px" }}>
            {" "}
            <div
              style={{
                font: "500 12px/1 'JetBrains Mono',monospace",
                letterSpacing: ".14em",
                textTransform: "uppercase",
                color: "var(--acc-lite,#a5b4fc)",
              }}
            >
              Read before you trade
            </div>{" "}
            <h2
              style={{
                margin: "18px 0 0",
                fontSize: "clamp(30px,4.4vw,54px)",
                lineHeight: "1.04",
                letterSpacing: "-.035em",
                fontWeight: "700",
                color: "#fff",
                textWrap: "balance",
              }}
            >
              What these results can&apos;t tell you.
            </h2>{" "}
          </div>{" "}
          <div
            style={{
              marginTop: "44px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
              gap: "14px",
            }}
          >
            {" "}
            <div
              data-reveal=""
              style={{ padding: "22px", borderRadius: "18px", border: "1px solid rgba(255,255,255,.1)" }}
            >
              <div style={{ fontSize: "18px", fontWeight: "700", color: "#fff" }}>Survivorship bias</div>
              <div style={{ marginTop: "6px", fontSize: "15px" }}>
                Back-filling today&apos;s large caps flatters long-only results. We add names that left the index, but
                the effect is not zero.
              </div>
            </div>{" "}
            <div
              data-reveal=""
              data-delay="80"
              style={{ padding: "22px", borderRadius: "18px", border: "1px solid rgba(255,255,255,.1)" }}
            >
              <div style={{ fontSize: "18px", fontWeight: "700", color: "#fff" }}>Small samples</div>
              <div style={{ marginTop: "6px", fontSize: "15px" }}>
                A handful of trades per year leaves wide confidence intervals. We report them rather than hide them.
              </div>
            </div>{" "}
            <div
              data-reveal=""
              data-delay="160"
              style={{ padding: "22px", borderRadius: "18px", border: "1px solid rgba(255,255,255,.1)" }}
            >
              <div style={{ fontSize: "18px", fontWeight: "700", color: "#fff" }}>Regimes change</div>
              <div style={{ marginTop: "6px", fontSize: "15px" }}>
                A strategy that held up for a decade can stop working. That is why passing means paper first.
              </div>
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "120px 24px 0" }}>
        {" "}
        <div
          data-reveal="scale"
          style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: "28px",
            background: "rgba(255,255,255,.7)",
            border: "1px solid rgba(22,21,59,.08)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,.95),0 40px 80px -48px rgba(22,21,59,.45)",
            padding: "clamp(32px,5vw,60px)",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "30px 60px",
          }}
        >
          {" "}
          <div
            data-blob=""
            style={{
              position: "absolute",
              right: "-220px",
              top: "-260px",
              width: "620px",
              height: "620px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle,rgba(var(--acc-rgb,99,102,241),.2),rgba(var(--acc-rgb,99,102,241),0) 68%)",
              pointerEvents: "none",
            }}
          />{" "}
          <div style={{ position: "relative", flex: "1 1 420px", minWidth: "0" }}>
            {" "}
            <div
              style={{
                font: "500 12px/1 'JetBrains Mono',monospace",
                letterSpacing: ".14em",
                textTransform: "uppercase",
                color: "var(--acc,#4f46e5)",
              }}
            >
              All are starter templates
            </div>{" "}
            <h2
              style={{
                margin: "16px 0 0",
                fontSize: "clamp(28px,3.8vw,46px)",
                lineHeight: "1.06",
                letterSpacing: "-.035em",
                fontWeight: "700",
                color: "#16153b",
                textWrap: "balance",
              }}
            >
              Open them in the builder and run the study yourself.
            </h2>{" "}
          </div>{" "}
          <div
            style={{ position: "relative", flex: "0 1 280px", display: "flex", flexDirection: "column", gap: "12px" }}
          >
            {" "}
            <Link
              className="hv1"
              href="/builder"
              style={{
                padding: "15px 24px",
                borderRadius: "999px",
                background: "var(--acc,#4f46e5)",
                color: "#fff",
                fontWeight: "600",
                textAlign: "center",
                boxShadow: "0 14px 30px -12px rgba(var(--acc-rgb,99,102,241),.75)",
                transition: "transform .2s",
              }}
            >
              Open the builder →
            </Link>{" "}
            <Link
              className="hv2"
              href="/contact"
              style={{
                padding: "15px 24px",
                borderRadius: "999px",
                background: "rgba(255,255,255,.75)",
                border: "1px solid rgba(22,21,59,.12)",
                color: "#16153b",
                fontWeight: "600",
                textAlign: "center",
                transition: "transform .2s",
              }}
            >
              Request a demo
            </Link>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <SiteFooter />{" "}
    </MotionRoot>
  );
}
