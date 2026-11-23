import Link from "next/link";
import MotionRoot from "@/components/MotionRoot";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

// Generated from UI_PROTO/Live.dc.html.
const SKIN = "Indigo sky";

export default function LivePage() {
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
          width: "760px",
          height: "760px",
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
          top: "120px",
          right: "-240px",
          width: "680px",
          height: "680px",
          borderRadius: "50%",
          background: "radial-gradient(circle,rgba(47,191,113,.14),rgba(47,191,113,0) 68%)",
          pointerEvents: "none",
        }}
      />{" "}
      <div style={{ position: "sticky", top: "12px", zIndex: "50" }}>
        <SiteNav active="live" />
      </div>{" "}
      <section
        data-hero=""
        style={{ position: "relative", maxWidth: "1200px", margin: "0 auto", padding: "72px 24px 0" }}
      >
        {" "}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "48px 64px", alignItems: "center" }}>
          {" "}
          <div style={{ flex: "1 1 440px", minWidth: "0" }}>
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
              Live Trading &amp; Risk
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
              Every order meets the risk engine first.
            </h1>{" "}
            <p data-reveal="" data-delay="160" style={{ margin: "22px 0 0", maxWidth: "520px", textWrap: "pretty" }}>
              Runners execute your strategy on live ticks, in paper or live mode. Before any order leaves, a
              deterministic engine checks it against your limits. AI never places a live trade.
            </p>{" "}
            <div
              data-reveal=""
              data-delay="240"
              style={{ marginTop: "28px", display: "flex", flexWrap: "wrap", gap: "10px" }}
            >
              {" "}
              <Link
                className="hv1"
                href="/contact"
                style={{
                  padding: "13px 22px",
                  borderRadius: "999px",
                  background: "var(--acc,#4f46e5)",
                  color: "#fff",
                  fontWeight: "600",
                  fontSize: "15px",
                  boxShadow: "0 14px 30px -12px rgba(var(--acc-rgb,99,102,241),.75)",
                  transition: "transform .2s",
                }}
              >
                Request a demo
              </Link>{" "}
              <a
                className="hv2"
                href="#gates"
                style={{
                  padding: "13px 22px",
                  borderRadius: "999px",
                  background: "rgba(255,255,255,.75)",
                  border: "1px solid rgba(22,21,59,.12)",
                  color: "#16153b",
                  fontWeight: "600",
                  fontSize: "15px",
                  transition: "transform .2s",
                }}
              >
                The path to live
              </a>{" "}
            </div>{" "}
          </div>{" "}
          <div data-reveal="scale" data-delay="200" style={{ flex: "1 1 440px", minWidth: "0" }}>
            {" "}
            <div
              data-tilt=""
              data-gates=""
              data-t1="BUY 50 · NSE:SBIN-EQ · 10:42 IST"
              data-r1="Passed · routed to broker"
              data-t2="BUY 400 · NSE:SBIN-EQ · 11:05 IST"
              data-r2="Refused · per-trade risk above cap"
              data-fail2="1"
              style={{
                borderRadius: "20px",
                background: "#0d0c22",
                border: "1px solid rgba(255,255,255,.1)",
                boxShadow: "0 60px 110px -50px rgba(22,21,59,.6)",
                padding: "22px",
                color: "#a8a6c9",
              }}
            >
              {" "}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
                <span
                  style={{ font: "600 11px/1 'JetBrains Mono',monospace", letterSpacing: ".12em", color: "#8e8cb3" }}
                >
                  RISK ENGINE · LIVE CHECK
                </span>
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    font: "500 11px/1 'JetBrains Mono',monospace",
                    color: "#7fe0aa",
                  }}
                >
                  <span
                    data-pulse=""
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#2fbf71",
                      display: "block",
                    }}
                  />
                  <span>Runner ACTIVE</span>
                </span>
              </div>{" "}
              <div
                style={{
                  marginTop: "14px",
                  padding: "12px 14px",
                  borderRadius: "12px",
                  background: "#17163a",
                  border: "1px solid rgba(255,255,255,.1)",
                  font: "500 13px/1.4 'JetBrains Mono',monospace",
                  color: "#fff",
                }}
              >
                <span data-ticket="">BUY 50 · NSE:SBIN-EQ · 10:42 IST</span>
              </div>{" "}
              <div
                style={{
                  marginTop: "12px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px",
                  fontSize: "15.5px",
                  color: "#eeedfb",
                }}
              >
                {" "}
                <div
                  data-gate=""
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "12px",
                    padding: "11px 12px",
                    borderRadius: "10px",
                    transition: "background .3s",
                  }}
                >
                  <span>Kill switch &amp; runner state</span>
                  <span data-s="" style={{ font: "600 12px/1.7 'JetBrains Mono',monospace", color: "#2fbf71" }}>
                    pass
                  </span>
                </div>{" "}
                <div
                  data-gate=""
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "12px",
                    padding: "11px 12px",
                    borderRadius: "10px",
                    transition: "background .3s",
                  }}
                >
                  <span>Per-trade risk cap</span>
                  <span data-s="" style={{ font: "600 12px/1.7 'JetBrains Mono',monospace", color: "#2fbf71" }}>
                    pass
                  </span>
                </div>{" "}
                <div
                  data-gate=""
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "12px",
                    padding: "11px 12px",
                    borderRadius: "10px",
                    transition: "background .3s",
                  }}
                >
                  <span>Daily loss limit</span>
                  <span data-s="" style={{ font: "600 12px/1.7 'JetBrains Mono',monospace", color: "#2fbf71" }}>
                    pass
                  </span>
                </div>{" "}
                <div
                  data-gate=""
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "12px",
                    padding: "11px 12px",
                    borderRadius: "10px",
                    transition: "background .3s",
                  }}
                >
                  <span>Gross exposure &amp; open positions</span>
                  <span data-s="" style={{ font: "600 12px/1.7 'JetBrains Mono',monospace", color: "#2fbf71" }}>
                    pass
                  </span>
                </div>{" "}
                <div
                  data-gate=""
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "12px",
                    padding: "11px 12px",
                    borderRadius: "10px",
                    transition: "background .3s",
                  }}
                >
                  <span>Price circuit</span>
                  <span data-s="" style={{ font: "600 12px/1.7 'JetBrains Mono',monospace", color: "#2fbf71" }}>
                    pass
                  </span>
                </div>{" "}
                <div
                  data-gate=""
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "12px",
                    padding: "11px 12px",
                    borderRadius: "10px",
                    transition: "background .3s",
                  }}
                >
                  <span>Intraday square-off window</span>
                  <span data-s="" style={{ font: "600 12px/1.7 'JetBrains Mono',monospace", color: "#2fbf71" }}>
                    pass
                  </span>
                </div>{" "}
              </div>{" "}
              <div
                style={{
                  marginTop: "12px",
                  paddingTop: "14px",
                  borderTop: "1px solid rgba(255,255,255,.09)",
                  font: "600 13px/1.4 'JetBrains Mono',monospace",
                }}
              >
                <span data-gate-result="" style={{ color: "#2fbf71" }}>
                  Passed · routed to broker
                </span>
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "130px 24px 0" }}>
        {" "}
        <div data-reveal="" style={{ maxWidth: "760px" }}>
          {" "}
          <div
            style={{
              font: "500 12px/1 'JetBrains Mono',monospace",
              letterSpacing: ".14em",
              textTransform: "uppercase",
              color: "var(--acc,#4f46e5)",
            }}
          >
            Two modes, one engine
          </div>{" "}
          <h2
            style={{
              margin: "18px 0 0",
              fontSize: "clamp(30px,4.4vw,54px)",
              lineHeight: "1.04",
              letterSpacing: "-.035em",
              fontWeight: "700",
              color: "#16153b",
              textWrap: "balance",
            }}
          >
            Paper and live run the same code path.
          </h2>{" "}
        </div>{" "}
        <div
          style={{
            marginTop: "44px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            gap: "16px",
          }}
        >
          {" "}
          <div
            data-reveal=""
            style={{
              padding: "30px",
              borderRadius: "22px",
              background: "rgba(255,255,255,.68)",
              border: "1px solid rgba(22,21,59,.08)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,.95),0 24px 50px -34px rgba(22,21,59,.4)",
            }}
          >
            {" "}
            <span
              style={{
                font: "600 11px/1 'JetBrains Mono',monospace",
                letterSpacing: ".12em",
                padding: "7px 10px",
                borderRadius: "999px",
                background: "var(--acc-soft,#ecebff)",
                color: "var(--acc,#4f46e5)",
              }}
            >
              PAPER
            </span>{" "}
            <div
              style={{
                marginTop: "18px",
                fontSize: "24px",
                fontWeight: "700",
                letterSpacing: "-.02em",
                color: "#16153b",
              }}
            >
              Real ticks, simulated fills
            </div>{" "}
            <p style={{ margin: "10px 0 0", fontSize: "16px" }}>
              Your strategy reacts to the live market exactly as it would with money on the line, and every order is
              risk-checked. One-click orders from the chart are allowed here.
            </p>{" "}
          </div>{" "}
          <div
            data-reveal=""
            data-delay="100"
            style={{
              padding: "30px",
              borderRadius: "22px",
              background: "#16153b",
              border: "1px solid rgba(22,21,59,.08)",
              boxShadow: "0 24px 50px -34px rgba(22,21,59,.6)",
              color: "#c9c8e6",
            }}
          >
            {" "}
            <span
              style={{
                font: "600 11px/1 'JetBrains Mono',monospace",
                letterSpacing: ".12em",
                padding: "7px 10px",
                borderRadius: "999px",
                background: "rgba(240,85,106,.16)",
                color: "#ffb3bf",
              }}
            >
              LIVE
            </span>{" "}
            <div
              style={{ marginTop: "18px", fontSize: "24px", fontWeight: "700", letterSpacing: "-.02em", color: "#fff" }}
            >
              Idempotent orders to your broker
            </div>{" "}
            <p style={{ margin: "10px 0 0", fontSize: "16px" }}>
              The same signals route to a connected broker account. Manual one-click orders are refused on live runners,
              though you can always square off from the chart.
            </p>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "130px 24px 0" }}>
        {" "}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "20px 60px",
          }}
        >
          {" "}
          <div data-reveal="" style={{ flex: "1 1 460px", maxWidth: "700px" }}>
            {" "}
            <div
              style={{
                font: "500 12px/1 'JetBrains Mono',monospace",
                letterSpacing: ".14em",
                textTransform: "uppercase",
                color: "var(--acc,#4f46e5)",
              }}
            >
              Deterministic guardrails
            </div>{" "}
            <h2
              style={{
                margin: "18px 0 0",
                fontSize: "clamp(30px,4.4vw,54px)",
                lineHeight: "1.04",
                letterSpacing: "-.035em",
                fontWeight: "700",
                color: "#16153b",
                textWrap: "balance",
              }}
            >
              Maths, not judgement, decides what gets through.
            </h2>{" "}
          </div>{" "}
          <p
            data-reveal=""
            data-delay="100"
            style={{ flex: "1 1 300px", maxWidth: "420px", margin: "0", textWrap: "pretty" }}
          >
            Each runner has a risk profile. Limits are plain numbers you can read, set and audit.
          </p>{" "}
        </div>{" "}
        <div
          style={{
            marginTop: "44px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
            gap: "16px",
          }}
        >
          {" "}
          <div
            data-reveal=""
            style={{
              padding: "24px",
              borderRadius: "20px",
              background: "rgba(255,255,255,.68)",
              border: "1px solid rgba(22,21,59,.08)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,.95),0 24px 50px -34px rgba(22,21,59,.4)",
            }}
          >
            {" "}
            <div style={{ fontSize: "19px", fontWeight: "700", color: "#16153b" }}>Max daily loss</div>{" "}
            <div style={{ marginTop: "12px", display: "flex", alignItems: "baseline", gap: "10px" }}>
              <span style={{ font: "700 30px/1 'JetBrains Mono',monospace", color: "#16153b" }}>
                ₹<span data-count="5000">5,000</span>
              </span>
              <span style={{ fontSize: "14px", color: "#5d5c7a" }}>or 3% of capital</span>
            </div>{" "}
            <p style={{ margin: "12px 0 0", fontSize: "15.5px" }}>
              Hit either and the runner flattens every position and pauses.
            </p>{" "}
          </div>{" "}
          <div
            data-reveal=""
            data-delay="70"
            style={{
              padding: "24px",
              borderRadius: "20px",
              background: "rgba(255,255,255,.68)",
              border: "1px solid rgba(22,21,59,.08)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,.95),0 24px 50px -34px rgba(22,21,59,.4)",
            }}
          >
            {" "}
            <div style={{ fontSize: "19px", fontWeight: "700", color: "#16153b" }}>Per-trade risk cap</div>{" "}
            <div
              style={{
                marginTop: "12px",
                font: "600 14px/1.4 'JetBrains Mono',monospace",
                color: "var(--acc,#4f46e5)",
              }}
            >
              |entry − stop| × qty ≤ cap
            </div>{" "}
            <p style={{ margin: "12px 0 0", fontSize: "15.5px" }}>
              An oversized order is refused before it is sent.
            </p>{" "}
          </div>{" "}
          <div
            data-reveal=""
            data-delay="140"
            style={{
              padding: "24px",
              borderRadius: "20px",
              background: "rgba(255,255,255,.68)",
              border: "1px solid rgba(22,21,59,.08)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,.95),0 24px 50px -34px rgba(22,21,59,.4)",
            }}
          >
            {" "}
            <div style={{ fontSize: "19px", fontWeight: "700", color: "#16153b" }}>Exposure &amp; positions</div>{" "}
            <div
              style={{
                marginTop: "12px",
                height: "8px",
                borderRadius: "99px",
                background: "rgba(22,21,59,.08)",
                overflow: "hidden",
              }}
            >
              <div
                data-bar="58"
                style={{ height: "100%", width: "58%", borderRadius: "99px", background: "var(--acc,#4f46e5)" }}
              />
            </div>{" "}
            <p style={{ margin: "12px 0 0", fontSize: "15.5px" }}>
              Gross exposure and simultaneous open positions are both capped.
            </p>{" "}
          </div>{" "}
          <div
            data-reveal=""
            data-delay="210"
            style={{
              padding: "24px",
              borderRadius: "20px",
              background: "rgba(255,255,255,.68)",
              border: "1px solid rgba(22,21,59,.08)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,.95),0 24px 50px -34px rgba(22,21,59,.4)",
            }}
          >
            {" "}
            <div style={{ fontSize: "19px", fontWeight: "700", color: "#16153b" }}>Square-off at 15:15 IST</div>{" "}
            <div style={{ marginTop: "12px", font: "700 30px/1 'JetBrains Mono',monospace", color: "#16153b" }}>
              15:15
            </div>{" "}
            <p style={{ margin: "12px 0 0", fontSize: "15.5px" }}>
              No new intraday entries after the cutoff. Open intraday positions are closed automatically.
            </p>{" "}
          </div>{" "}
          <div
            data-reveal=""
            style={{
              padding: "24px",
              borderRadius: "20px",
              background: "rgba(255,255,255,.68)",
              border: "1px solid rgba(22,21,59,.08)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,.95),0 24px 50px -34px rgba(22,21,59,.4)",
            }}
          >
            {" "}
            <div style={{ fontSize: "19px", fontWeight: "700", color: "#16153b" }}>Kill switch</div>{" "}
            <p style={{ margin: "8px 0 0", fontSize: "15.5px" }}>
              One switch stops all new orders. Orders are also refused whenever a runner is not active.
            </p>{" "}
          </div>{" "}
          <div
            data-reveal=""
            data-delay="70"
            style={{
              padding: "24px",
              borderRadius: "20px",
              background: "rgba(255,255,255,.68)",
              border: "1px solid rgba(22,21,59,.08)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,.95),0 24px 50px -34px rgba(22,21,59,.4)",
            }}
          >
            {" "}
            <div style={{ fontSize: "19px", fontWeight: "700", color: "#16153b" }}>Price circuit halt</div>{" "}
            <p style={{ margin: "8px 0 0", fontSize: "15.5px" }}>
              Blocks new orders once price moves past its circuit limit from the previous close.
            </p>{" "}
          </div>{" "}
          <div
            data-reveal=""
            data-delay="140"
            style={{
              padding: "24px",
              borderRadius: "20px",
              background: "rgba(255,255,255,.68)",
              border: "1px solid rgba(22,21,59,.08)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,.95),0 24px 50px -34px rgba(22,21,59,.4)",
            }}
          >
            {" "}
            <div style={{ fontSize: "19px", fontWeight: "700", color: "#16153b" }}>24x7 crypto runners</div>{" "}
            <p style={{ margin: "8px 0 0", fontSize: "15.5px" }}>
              Delta runners are capitalised in USD, sized by contract value and never squared off at the NSE close.
            </p>{" "}
          </div>{" "}
          <div
            data-reveal=""
            data-delay="210"
            style={{
              padding: "24px",
              borderRadius: "20px",
              background: "rgba(255,255,255,.68)",
              border: "1px solid rgba(22,21,59,.08)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,.95),0 24px 50px -34px rgba(22,21,59,.4)",
            }}
          >
            {" "}
            <div style={{ fontSize: "19px", fontWeight: "700", color: "#16153b" }}>AI stays out of execution</div>{" "}
            <p style={{ margin: "8px 0 0", fontSize: "15.5px" }}>
              AI researches and classifies regimes. It has no path to place a live order.
            </p>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <section
        id="gates"
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
          <div data-reveal="" style={{ maxWidth: "780px" }}>
            {" "}
            <div
              style={{
                font: "500 12px/1 'JetBrains Mono',monospace",
                letterSpacing: ".14em",
                textTransform: "uppercase",
                color: "var(--acc-lite,#a5b4fc)",
              }}
            >
              Four-stage promotion
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
              No shortcut from idea to live money.
            </h2>{" "}
          </div>{" "}
          <div
            data-seq="600"
            style={{
              marginTop: "48px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))",
              gap: "14px",
            }}
          >
            {" "}
            <div
              data-i="0"
              data-reveal=""
              style={{
                padding: "24px",
                borderRadius: "18px",
                background: "rgba(255,255,255,.04)",
                border: "1px solid rgba(255,255,255,.1)",
              }}
            >
              <div style={{ font: "700 34px/1 'JetBrains Mono',monospace", color: "#fff" }}>1</div>
              <div style={{ marginTop: "16px", fontSize: "19px", fontWeight: "700", color: "#fff" }}>Draft</div>
              <div style={{ marginTop: "6px", fontSize: "15px" }}>
                Built in the visual builder and passing canvas validation.
              </div>
            </div>{" "}
            <div
              data-i="1"
              data-reveal=""
              data-delay="90"
              style={{
                padding: "24px",
                borderRadius: "18px",
                background: "rgba(255,255,255,.04)",
                border: "1px solid rgba(255,255,255,.1)",
              }}
            >
              <div style={{ font: "700 34px/1 'JetBrains Mono',monospace", color: "#fff" }}>2</div>
              <div style={{ marginTop: "16px", fontSize: "19px", fontWeight: "700", color: "#fff" }}>Backtest</div>
              <div style={{ marginTop: "6px", fontSize: "15px" }}>
                A run of the exact strategy version is linked. Edit the strategy and it goes stale.
              </div>
            </div>{" "}
            <div
              data-i="2"
              data-reveal=""
              data-delay="180"
              style={{
                padding: "24px",
                borderRadius: "18px",
                background: "rgba(255,255,255,.04)",
                border: "1px solid rgba(255,255,255,.1)",
              }}
            >
              <div style={{ font: "700 34px/1 'JetBrains Mono',monospace", color: "#fff" }}>3</div>
              <div style={{ marginTop: "16px", fontSize: "19px", fontWeight: "700", color: "#fff" }}>Paper trade</div>
              <div style={{ marginTop: "6px", fontSize: "15px" }}>
                At least 5 live-market sessions and 20 closed paper trades, win rate within 15 points of the backtest.
              </div>
            </div>{" "}
            <div
              data-i="3"
              data-reveal=""
              data-delay="270"
              style={{
                padding: "24px",
                borderRadius: "18px",
                background: "var(--acc,#4f46e5)",
                border: "1px solid transparent",
                color: "#fff",
              }}
            >
              <div style={{ font: "700 34px/1 'JetBrains Mono',monospace" }}>4</div>
              <div style={{ marginTop: "16px", fontSize: "19px", fontWeight: "700" }}>Go live</div>
              <div style={{ marginTop: "6px", fontSize: "15px" }}>
                A staff member picks the broker account and types LIVE to confirm.
              </div>
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "130px 24px 0" }}>
        {" "}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "48px 64px", alignItems: "center" }}>
          {" "}
          <div data-reveal="" style={{ flex: "1 1 380px", minWidth: "0" }}>
            {" "}
            <div
              style={{
                font: "500 12px/1 'JetBrains Mono',monospace",
                letterSpacing: ".14em",
                textTransform: "uppercase",
                color: "var(--acc,#4f46e5)",
              }}
            >
              Audit trail
            </div>{" "}
            <h2
              style={{
                margin: "18px 0 0",
                fontSize: "clamp(30px,4.4vw,54px)",
                lineHeight: "1.04",
                letterSpacing: "-.035em",
                fontWeight: "700",
                color: "#16153b",
                textWrap: "balance",
              }}
            >
              Every tick, decision and override, on record.
            </h2>{" "}
            <p style={{ margin: "20px 0 0", maxWidth: "500px", textWrap: "pretty" }}>
              Broker orders, runner events and admin actions are stored permanently, so you can always answer why a
              trade happened, or why it didn&apos;t.
            </p>{" "}
          </div>{" "}
          <div
            data-reveal="scale"
            style={{
              flex: "1 1 460px",
              minWidth: "0",
              borderRadius: "18px",
              background: "#0d0c22",
              border: "1px solid rgba(255,255,255,.1)",
              boxShadow: "0 50px 100px -50px rgba(22,21,59,.6)",
              padding: "18px",
              font: "400 12.5px/1.5 'JetBrains Mono',monospace",
              color: "#a8a6c9",
              overflowX: "auto",
            }}
          >
            {" "}
            <div data-seq="450" style={{ display: "flex", flexDirection: "column", gap: "4px", minWidth: "420px" }}>
              {" "}
              <div
                data-i="0"
                style={{
                  display: "grid",
                  gridTemplateColumns: "70px 110px 1fr",
                  gap: "10px",
                  padding: "7px 8px",
                  borderRadius: "6px",
                }}
              >
                <span>10:42:00</span>
                <span style={{ color: "#a5b4fc" }}>RunnerEvent</span>
                <span style={{ color: "#eeedfb" }}>bar closed · conditions evaluated</span>
              </div>{" "}
              <div
                data-i="1"
                style={{
                  display: "grid",
                  gridTemplateColumns: "70px 110px 1fr",
                  gap: "10px",
                  padding: "7px 8px",
                  borderRadius: "6px",
                }}
              >
                <span>10:42:00</span>
                <span style={{ color: "#a5b4fc" }}>RunnerEvent</span>
                <span style={{ color: "#eeedfb" }}>signal · ENTER LONG</span>
              </div>{" "}
              <div
                data-i="2"
                style={{
                  display: "grid",
                  gridTemplateColumns: "70px 110px 1fr",
                  gap: "10px",
                  padding: "7px 8px",
                  borderRadius: "6px",
                }}
              >
                <span>10:42:00</span>
                <span style={{ color: "#7fe0aa" }}>RiskCheck</span>
                <span style={{ color: "#eeedfb" }}>all limits passed</span>
              </div>{" "}
              <div
                data-i="3"
                style={{
                  display: "grid",
                  gridTemplateColumns: "70px 110px 1fr",
                  gap: "10px",
                  padding: "7px 8px",
                  borderRadius: "6px",
                }}
              >
                <span>10:42:01</span>
                <span style={{ color: "#f2a93b" }}>BrokerOrder</span>
                <span style={{ color: "#eeedfb" }}>PENDING_SUBMIT → FILLED</span>
              </div>{" "}
              <div
                data-i="4"
                style={{
                  display: "grid",
                  gridTemplateColumns: "70px 110px 1fr",
                  gap: "10px",
                  padding: "7px 8px",
                  borderRadius: "6px",
                }}
              >
                <span>11:05:00</span>
                <span style={{ color: "#ff8095" }}>RiskCheck</span>
                <span style={{ color: "#eeedfb" }}>refused · per-trade risk</span>
              </div>{" "}
              <div
                data-i="5"
                style={{
                  display: "grid",
                  gridTemplateColumns: "70px 110px 1fr",
                  gap: "10px",
                  padding: "7px 8px",
                  borderRadius: "6px",
                }}
              >
                <span>14:20:12</span>
                <span style={{ color: "#eeedfb" }}>AuditLog</span>
                <span style={{ color: "#eeedfb" }}>admin paused runner</span>
              </div>{" "}
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
              Next: connect
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
              Bring your broker. Fyers, Zerodha, Groww or Delta.
            </h2>{" "}
          </div>{" "}
          <div
            style={{ position: "relative", flex: "0 1 280px", display: "flex", flexDirection: "column", gap: "12px" }}
          >
            {" "}
            <Link
              className="hv1"
              href="/integrations"
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
              See integrations →
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
