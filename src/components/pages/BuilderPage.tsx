import Link from "next/link";
import MotionRoot from "@/components/MotionRoot";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

// Generated from UI_PROTO/Builder.dc.html.
const SKIN = "Indigo sky";

export default function BuilderPage() {
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
          left: "-220px",
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
          top: "-80px",
          right: "-260px",
          width: "720px",
          height: "720px",
          borderRadius: "50%",
          background: "radial-gradient(circle,rgba(125,190,255,.24),rgba(125,190,255,0) 68%)",
          pointerEvents: "none",
        }}
      />{" "}
      <div style={{ position: "sticky", top: "12px", zIndex: "50" }}>
        <SiteNav active="builder" />
      </div>{" "}
      <section
        data-hero=""
        style={{ position: "relative", maxWidth: "1200px", margin: "0 auto", padding: "72px 24px 0" }}
      >
        {" "}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "24px 60px",
          }}
        >
          {" "}
          <div data-reveal="" style={{ flex: "1 1 520px", maxWidth: "760px" }}>
            {" "}
            <div
              style={{
                font: "500 12px/1 'JetBrains Mono',monospace",
                letterSpacing: ".14em",
                textTransform: "uppercase",
                color: "var(--acc,#4f46e5)",
              }}
            >
              Visual Strategy Builder
            </div>{" "}
            <h1
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
              Draw the logic. Skip the code.
            </h1>{" "}
          </div>{" "}
          <div data-reveal="" data-delay="100" style={{ flex: "1 1 320px", maxWidth: "420px" }}>
            {" "}
            <p style={{ margin: "0", textWrap: "pretty" }}>
              A full-screen canvas where every indicator, condition, risk rule and exit is a node. Wire them together
              and watch each one compute on live bars.
            </p>{" "}
            <div style={{ marginTop: "22px", display: "flex", flexWrap: "wrap", gap: "10px" }}>
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
                href="#templates"
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
                See templates
              </a>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div data-reveal="scale" data-delay="200" style={{ position: "relative", marginTop: "52px" }}>
          {" "}
          <div
            data-tilt=""
            style={{
              borderRadius: "18px",
              background: "#0d0c22",
              border: "1px solid rgba(255,255,255,.1)",
              boxShadow: "0 70px 120px -50px rgba(22,21,59,.6)",
              overflow: "hidden",
            }}
          >
            {" "}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "8px 10px",
                padding: "10px 14px",
                borderBottom: "1px solid rgba(255,255,255,.07)",
                font: "500 12px/1 'JetBrains Mono',monospace",
                color: "#a8a6c9",
              }}
            >
              {" "}
              <span
                style={{
                  color: "#eeedfb",
                  fontWeight: "600",
                  fontFamily: "'Schibsted Grotesk',sans-serif",
                  fontSize: "14px",
                }}
              >
                SMC Order Block &amp; FVG
              </span>{" "}
              <span
                style={{
                  padding: "3px 6px",
                  borderRadius: "4px",
                  background: "rgba(255,255,255,.08)",
                  fontSize: "10px",
                }}
              >
                draft
              </span>{" "}
              <div style={{ marginLeft: "auto", display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {" "}
                <span style={{ padding: "7px 10px", borderRadius: "7px", background: "rgba(255,255,255,.05)" }}>
                  Validate
                </span>{" "}
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "7px 10px",
                    borderRadius: "7px",
                    background: "rgba(47,191,113,.12)",
                    color: "#7fe0aa",
                  }}
                >
                  <span
                    data-pulse=""
                    style={{
                      width: "7px",
                      height: "7px",
                      borderRadius: "50%",
                      background: "#2fbf71",
                      display: "block",
                    }}
                  />
                  <span>Live Preview · NSE:SBIN-EQ 5m</span>
                </span>{" "}
                <span
                  style={{ padding: "7px 10px", borderRadius: "7px", background: "var(--acc,#4f46e5)", color: "#fff" }}
                >
                  Backtest
                </span>{" "}
              </div>{" "}
            </div>{" "}
            <div data-fit="1150" data-fit-h="440" data-fit-min="0.45" style={{ overflow: "hidden", height: "440px" }}>
              {" "}
              <div
                style={{
                  position: "relative",
                  width: "1150px",
                  height: "440px",
                  transformOrigin: "0 0",
                  display: "flex",
                  fontFamily: "'Schibsted Grotesk',sans-serif",
                }}
              >
                {" "}
                <div
                  style={{
                    width: "210px",
                    flex: "none",
                    borderRight: "1px solid rgba(255,255,255,.07)",
                    padding: "14px",
                    boxSizing: "border-box",
                    display: "flex",
                    flexDirection: "column",
                    gap: "6px",
                    fontSize: "13px",
                    color: "#a8a6c9",
                  }}
                >
                  {" "}
                  <div
                    style={{
                      padding: "9px 10px",
                      borderRadius: "8px",
                      background: "rgba(255,255,255,.05)",
                      font: "400 12px/1 'JetBrains Mono',monospace",
                      color: "#8e8cb3",
                    }}
                  >
                    Search nodes…
                  </div>{" "}
                  <div
                    style={{
                      marginTop: "6px",
                      font: "600 10px/1 'JetBrains Mono',monospace",
                      letterSpacing: ".12em",
                      color: "#8e8cb3",
                    }}
                  >
                    PALETTE
                  </div>{" "}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "7px 8px",
                      borderRadius: "7px",
                    }}
                  >
                    <span>Market</span>
                    <span style={{ color: "#6ea8ff" }}>●</span>
                  </div>{" "}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "7px 8px",
                      borderRadius: "7px",
                      background: "rgba(255,255,255,.06)",
                      color: "#fff",
                    }}
                  >
                    <span>Indicators</span>
                    <span style={{ color: "#f2a93b" }}>●</span>
                  </div>{" "}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "7px 8px",
                      borderRadius: "7px",
                    }}
                  >
                    <span>Smart Money</span>
                    <span style={{ color: "#7fe0aa" }}>●</span>
                  </div>{" "}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "7px 8px",
                      borderRadius: "7px",
                    }}
                  >
                    <span>Conditions</span>
                    <span style={{ color: "#b79bff" }}>●</span>
                  </div>{" "}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "7px 8px",
                      borderRadius: "7px",
                    }}
                  >
                    <span>Logic &amp; Maths</span>
                    <span style={{ color: "#b79bff" }}>●</span>
                  </div>{" "}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "7px 8px",
                      borderRadius: "7px",
                    }}
                  >
                    <span>Risk &amp; Sizing</span>
                    <span style={{ color: "#ff8095" }}>●</span>
                  </div>{" "}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "7px 8px",
                      borderRadius: "7px",
                    }}
                  >
                    <span>Exits</span>
                    <span style={{ color: "#ff8095" }}>●</span>
                  </div>{" "}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "7px 8px",
                      borderRadius: "7px",
                    }}
                  >
                    <span>Actions</span>
                    <span style={{ color: "#2fbf71" }}>●</span>
                  </div>{" "}
                </div>{" "}
                <div
                  data-seq="320"
                  style={{
                    position: "relative",
                    flex: "1",
                    backgroundImage: "radial-gradient(rgba(255,255,255,.07) 1px,transparent 1px)",
                    backgroundSize: "22px 22px",
                  }}
                >
                  {" "}
                  <svg
                    width="940"
                    height="440"
                    style={{ position: "absolute", left: "0", top: "0", overflow: "visible" }}
                  >
                    <path
                      data-wire=""
                      d="M190 220 C210 220 210 110 230 110"
                      style={{ fill: "none", stroke: "#6ea8ff", strokeWidth: "1.8", strokeDasharray: "6 5" }}
                    />
                    <path
                      data-wire=""
                      d="M190 220 C210 220 210 330 230 330"
                      style={{ fill: "none", stroke: "#6ea8ff", strokeWidth: "1.8", strokeDasharray: "6 5" }}
                    />
                    <path
                      data-wire=""
                      d="M410 110 C430 110 430 220 450 220"
                      style={{ fill: "none", stroke: "#7fe0aa", strokeWidth: "1.8", strokeDasharray: "6 5" }}
                    />
                    <path
                      data-wire=""
                      d="M410 330 C430 330 430 220 450 220"
                      style={{ fill: "none", stroke: "#7fe0aa", strokeWidth: "1.8", strokeDasharray: "6 5" }}
                    />
                    <path
                      data-wire=""
                      d="M630 220 L670 220"
                      style={{ fill: "none", stroke: "#b79bff", strokeWidth: "1.8", strokeDasharray: "6 5" }}
                    />
                  </svg>{" "}
                  <div
                    data-i="0"
                    style={{
                      position: "absolute",
                      left: "20px",
                      top: "182px",
                      width: "170px",
                      boxSizing: "border-box",
                      borderRadius: "12px",
                      background: "#17163a",
                      border: "1px solid rgba(255,255,255,.14)",
                      padding: "12px 14px",
                    }}
                  >
                    {" "}
                    <div style={{ fontSize: "13px", fontWeight: "600", color: "#eeedfb" }}>
                      Market &amp; Timeframe
                    </div>{" "}
                    <div
                      style={{ marginTop: "6px", font: "500 10.5px/1.4 'JetBrains Mono',monospace", color: "#a8a6c9" }}
                    >
                      SBIN-EQ · 5m · Intraday
                    </div>{" "}
                  </div>{" "}
                  <div
                    data-i="1"
                    style={{
                      position: "absolute",
                      left: "230px",
                      top: "66px",
                      width: "180px",
                      boxSizing: "border-box",
                      borderRadius: "12px",
                      background: "#17163a",
                      border: "1px solid rgba(255,255,255,.14)",
                      padding: "12px 14px",
                    }}
                  >
                    {" "}
                    <div style={{ fontSize: "13px", fontWeight: "600", color: "#eeedfb" }}>Order Block</div>{" "}
                    <div
                      style={{ marginTop: "6px", font: "500 10.5px/1.5 'JetBrains Mono',monospace", color: "#a8a6c9" }}
                    >
                      bullish · lookback 50
                    </div>{" "}
                    <div
                      style={{
                        marginTop: "8px",
                        paddingTop: "8px",
                        borderTop: "1px solid rgba(255,255,255,.07)",
                        font: "500 10.5px/1.5 'JetBrains Mono',monospace",
                        color: "#7fe0aa",
                      }}
                    >
                      in zone → true
                    </div>{" "}
                  </div>{" "}
                  <div
                    data-i="1"
                    style={{
                      position: "absolute",
                      left: "230px",
                      top: "286px",
                      width: "180px",
                      boxSizing: "border-box",
                      borderRadius: "12px",
                      background: "#17163a",
                      border: "1px solid rgba(255,255,255,.14)",
                      padding: "12px 14px",
                    }}
                  >
                    {" "}
                    <div style={{ fontSize: "13px", fontWeight: "600", color: "#eeedfb" }}>Fair Value Gap</div>{" "}
                    <div
                      style={{ marginTop: "6px", font: "500 10.5px/1.5 'JetBrains Mono',monospace", color: "#a8a6c9" }}
                    >
                      min size 0.1%
                    </div>{" "}
                    <div
                      style={{
                        marginTop: "8px",
                        paddingTop: "8px",
                        borderTop: "1px solid rgba(255,255,255,.07)",
                        font: "500 10.5px/1.5 'JetBrains Mono',monospace",
                        color: "#7fe0aa",
                      }}
                    >
                      unfilled → true
                    </div>{" "}
                  </div>{" "}
                  <div
                    data-i="2"
                    style={{
                      position: "absolute",
                      left: "450px",
                      top: "182px",
                      width: "180px",
                      boxSizing: "border-box",
                      borderRadius: "12px",
                      background: "#17163a",
                      border: "1px solid rgba(255,255,255,.14)",
                      padding: "12px 14px",
                    }}
                  >
                    {" "}
                    <div style={{ fontSize: "13px", fontWeight: "600", color: "#eeedfb" }}>AND</div>{" "}
                    <div
                      style={{ marginTop: "6px", font: "500 10.5px/1.4 'JetBrains Mono',monospace", color: "#b79bff" }}
                    >
                      signal → true
                    </div>{" "}
                  </div>{" "}
                  <div
                    data-i="3"
                    style={{
                      position: "absolute",
                      left: "670px",
                      top: "150px",
                      width: "240px",
                      boxSizing: "border-box",
                      borderRadius: "12px",
                      background: "#12281f",
                      border: "1px solid rgba(47,191,113,.55)",
                      padding: "12px 14px",
                    }}
                  >
                    {" "}
                    <div style={{ fontSize: "13px", fontWeight: "600", color: "#eeedfb" }}>Enter Long</div>{" "}
                    <div
                      style={{
                        marginTop: "8px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "5px",
                        font: "500 10.5px/1.4 'JetBrains Mono',monospace",
                        color: "#a8a6c9",
                      }}
                    >
                      {" "}
                      <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <span>sizing</span>
                        <span style={{ color: "#eeedfb" }}>risk 1%</span>
                      </div>{" "}
                      <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <span>stop</span>
                        <span style={{ color: "#eeedfb" }}>below OB</span>
                      </div>{" "}
                      <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <span>target</span>
                        <span style={{ color: "#eeedfb" }}>2R</span>
                      </div>{" "}
                      <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <span>fill</span>
                        <span style={{ color: "#7fe0aa" }}>T+1 open</span>
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div data-par="18" style={{ position: "absolute", left: "470px", top: "330px" }}>
                    {" "}
                    <div
                      data-float=""
                      style={{
                        width: "250px",
                        padding: "12px 14px",
                        borderRadius: "12px",
                        background: "rgba(240,85,106,.1)",
                        border: "1px solid rgba(240,85,106,.4)",
                        font: "500 11px/1.5 'JetBrains Mono',monospace",
                        color: "#ffb3bf",
                      }}
                    >
                      Refused: a <span style={{ color: "#fff" }}>series</span> port cannot feed a{" "}
                      <span style={{ color: "#fff" }}>signal</span> input.
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
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
            The node shelf
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
            More than 200 building blocks, grouped the way you think.
          </h2>{" "}
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
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span
                style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#f2a93b", display: "block" }}
              />
              <span style={{ fontSize: "19px", fontWeight: "700", color: "#16153b" }}>Indicators</span>
            </div>{" "}
            <p style={{ margin: "8px 0 14px", fontSize: "15.5px" }}>
              The TA-Lib catalogue: moving averages, oscillators, volatility and volume studies.
            </p>{" "}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "6px",
                font: "500 12px/1 'JetBrains Mono',monospace",
                color: "#3d3c5c",
              }}
            >
              <span style={{ padding: "7px 9px", borderRadius: "7px", background: "rgba(22,21,59,.05)" }}>EMA</span>
              <span style={{ padding: "7px 9px", borderRadius: "7px", background: "rgba(22,21,59,.05)" }}>RSI</span>
              <span style={{ padding: "7px 9px", borderRadius: "7px", background: "rgba(22,21,59,.05)" }}>MACD</span>
              <span style={{ padding: "7px 9px", borderRadius: "7px", background: "rgba(22,21,59,.05)" }}>ATR</span>
              <span style={{ padding: "7px 9px", borderRadius: "7px", background: "rgba(22,21,59,.05)" }}>
                Bollinger
              </span>
              <span style={{ padding: "7px 9px", borderRadius: "7px", background: "rgba(22,21,59,.05)" }}>ADX</span>
            </div>{" "}
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
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span
                style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#2fbf71", display: "block" }}
              />
              <span style={{ fontSize: "19px", fontWeight: "700", color: "#16153b" }}>Smart Money Concepts</span>
            </div>{" "}
            <p style={{ margin: "8px 0 14px", fontSize: "15.5px" }}>
              Institutional price action as nodes. Every detector is causal and only sees past bars.
            </p>{" "}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "6px",
                font: "500 12px/1 'JetBrains Mono',monospace",
                color: "#3d3c5c",
              }}
            >
              <span style={{ padding: "7px 9px", borderRadius: "7px", background: "rgba(22,21,59,.05)" }}>
                Order Block
              </span>
              <span style={{ padding: "7px 9px", borderRadius: "7px", background: "rgba(22,21,59,.05)" }}>
                Fair Value Gap
              </span>
              <span style={{ padding: "7px 9px", borderRadius: "7px", background: "rgba(22,21,59,.05)" }}>
                Swing High/Low
              </span>
            </div>{" "}
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
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span
                style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#b79bff", display: "block" }}
              />
              <span style={{ fontSize: "19px", fontWeight: "700", color: "#16153b" }}>Conditions &amp; logic</span>
            </div>{" "}
            <p style={{ margin: "8px 0 14px", fontSize: "15.5px" }}>
              Compare, cross, combine. Gate everything on the day&apos;s AI market regime.
            </p>{" "}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "6px",
                font: "500 12px/1 'JetBrains Mono',monospace",
                color: "#3d3c5c",
              }}
            >
              <span style={{ padding: "7px 9px", borderRadius: "7px", background: "rgba(22,21,59,.05)" }}>Compare</span>
              <span style={{ padding: "7px 9px", borderRadius: "7px", background: "rgba(22,21,59,.05)" }}>
                AND / OR
              </span>
              <span style={{ padding: "7px 9px", borderRadius: "7px", background: "rgba(22,21,59,.05)" }}>
                Regime Filter
              </span>
              <span style={{ padding: "7px 9px", borderRadius: "7px", background: "rgba(22,21,59,.05)" }}>Maths</span>
            </div>{" "}
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
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span
                style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#ff8095", display: "block" }}
              />
              <span style={{ fontSize: "19px", fontWeight: "700", color: "#16153b" }}>Risk, sizing &amp; exits</span>
            </div>{" "}
            <p style={{ margin: "8px 0 14px", fontSize: "15.5px" }}>
              Size by risk, cap exposure and leave on stops, targets, conditions or time.
            </p>{" "}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "6px",
                font: "500 12px/1 'JetBrains Mono',monospace",
                color: "#3d3c5c",
              }}
            >
              <span style={{ padding: "7px 9px", borderRadius: "7px", background: "rgba(22,21,59,.05)" }}>Risk %</span>
              <span style={{ padding: "7px 9px", borderRadius: "7px", background: "rgba(22,21,59,.05)" }}>
                ATR Stop
              </span>
              <span style={{ padding: "7px 9px", borderRadius: "7px", background: "rgba(22,21,59,.05)" }}>
                R Target
              </span>
              <span style={{ padding: "7px 9px", borderRadius: "7px", background: "rgba(22,21,59,.05)" }}>
                Time Exit
              </span>
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
              Typed ports
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
              Wrong wires never reach a backtest.
            </h2>{" "}
            <p style={{ margin: "20px 0 0", maxWidth: "500px", textWrap: "pretty" }}>
              Every port carries a type. The canvas refuses a connection that does not fit and validates the whole graph
              before you can run it.
            </p>{" "}
            <div style={{ marginTop: "28px", display: "flex", flexDirection: "column" }}>
              {" "}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  padding: "14px 0",
                  borderTop: "1px solid rgba(22,21,59,.1)",
                }}
              >
                <span
                  style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    background: "#6ea8ff",
                    display: "block",
                    flex: "none",
                  }}
                />
                <span style={{ font: "600 13px/1 'JetBrains Mono',monospace", color: "#16153b", width: "90px" }}>
                  candles
                </span>
                <span style={{ fontSize: "15.5px" }}>OHLCV bars from a market node</span>
              </div>{" "}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  padding: "14px 0",
                  borderTop: "1px solid rgba(22,21,59,.1)",
                }}
              >
                <span
                  style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    background: "#f2a93b",
                    display: "block",
                    flex: "none",
                  }}
                />
                <span style={{ font: "600 13px/1 'JetBrains Mono',monospace", color: "#16153b", width: "90px" }}>
                  series
                </span>
                <span style={{ fontSize: "15.5px" }}>A number per bar, like an EMA</span>
              </div>{" "}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  padding: "14px 0",
                  borderTop: "1px solid rgba(22,21,59,.1)",
                }}
              >
                <span
                  style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    background: "#b79bff",
                    display: "block",
                    flex: "none",
                  }}
                />
                <span style={{ font: "600 13px/1 'JetBrains Mono',monospace", color: "#16153b", width: "90px" }}>
                  signal
                </span>
                <span style={{ fontSize: "15.5px" }}>True or false, per bar</span>
              </div>{" "}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  padding: "14px 0",
                  borderTop: "1px solid rgba(22,21,59,.1)",
                  borderBottom: "1px solid rgba(22,21,59,.1)",
                }}
              >
                <span
                  style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    background: "#ff8095",
                    display: "block",
                    flex: "none",
                  }}
                />
                <span style={{ font: "600 13px/1 'JetBrains Mono',monospace", color: "#16153b", width: "90px" }}>
                  exit
                </span>
                <span style={{ fontSize: "15.5px" }}>Stops, targets and exit rules</span>
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div
            data-reveal="scale"
            data-tabs=""
            style={{
              flex: "1 1 460px",
              minWidth: "0",
              borderRadius: "18px",
              background: "#0d0c22",
              border: "1px solid rgba(255,255,255,.1)",
              boxShadow: "0 50px 100px -50px rgba(22,21,59,.6)",
              overflow: "hidden",
            }}
          >
            {" "}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: "10px 12px",
                borderBottom: "1px solid rgba(255,255,255,.07)",
              }}
            >
              {" "}
              <button
                data-tab="canvas"
                style={{
                  border: "0",
                  cursor: "pointer",
                  padding: "8px 12px",
                  borderRadius: "7px",
                  font: "500 12px/1 'JetBrains Mono',monospace",
                  background: "var(--tb,transparent)",
                  color: "var(--tc,#a8a6c9)",
                }}
              >
                Canvas
              </button>{" "}
              <button
                data-tab="json"
                style={{
                  border: "0",
                  cursor: "pointer",
                  padding: "8px 12px",
                  borderRadius: "7px",
                  font: "500 12px/1 'JetBrains Mono',monospace",
                  background: "var(--tb,transparent)",
                  color: "var(--tc,#a8a6c9)",
                }}
              >
                JSON
              </button>{" "}
              <span style={{ marginLeft: "auto", font: "500 11px/1 'JetBrains Mono',monospace", color: "#7fe0aa" }}>
                ✓ graph valid
              </span>{" "}
            </div>{" "}
            <div
              data-panel="canvas"
              style={{
                padding: "22px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                font: "500 12.5px/1.4 'JetBrains Mono',monospace",
                color: "#eeedfb",
              }}
            >
              {" "}
              <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                <span
                  style={{
                    padding: "10px 12px",
                    borderRadius: "9px",
                    background: "#17163a",
                    border: "1px solid rgba(255,255,255,.14)",
                  }}
                >
                  EMA 20
                </span>
                <span style={{ color: "#f2a93b" }}>── series ──▸</span>
                <span
                  style={{
                    padding: "10px 12px",
                    borderRadius: "9px",
                    background: "#17163a",
                    border: "1px solid rgba(255,255,255,.14)",
                  }}
                >
                  Compare.a
                </span>
                <span style={{ color: "#2fbf71" }}>✓</span>
              </div>{" "}
              <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                <span
                  style={{
                    padding: "10px 12px",
                    borderRadius: "9px",
                    background: "#17163a",
                    border: "1px solid rgba(255,255,255,.14)",
                  }}
                >
                  Compare
                </span>
                <span style={{ color: "#b79bff" }}>── signal ──▸</span>
                <span
                  style={{
                    padding: "10px 12px",
                    borderRadius: "9px",
                    background: "#17163a",
                    border: "1px solid rgba(255,255,255,.14)",
                  }}
                >
                  AND.in
                </span>
                <span style={{ color: "#2fbf71" }}>✓</span>
              </div>{" "}
              <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                <span
                  style={{
                    padding: "10px 12px",
                    borderRadius: "9px",
                    background: "#17163a",
                    border: "1px solid rgba(255,255,255,.14)",
                  }}
                >
                  ATR 14
                </span>
                <span style={{ color: "#f2a93b" }}>── series ──▸</span>
                <span
                  style={{
                    padding: "10px 12px",
                    borderRadius: "9px",
                    background: "rgba(240,85,106,.12)",
                    border: "1px solid rgba(240,85,106,.45)",
                  }}
                >
                  Enter Long.signal
                </span>
                <span style={{ color: "#f0556a" }}>✕</span>
              </div>{" "}
            </div>{" "}
            <div
              data-panel="json"
              style={{
                padding: "22px",
                font: "400 12.5px/1.7 'JetBrains Mono',monospace",
                color: "#a8a6c9",
                overflowX: "auto",
                whiteSpace: "pre",
              }}
            >
              &#123; <span style={{ color: "#a5b4fc" }}>&quot;nodes&quot;</span>: [ &#123;{" "}
              <span style={{ color: "#a5b4fc" }}>&quot;id&quot;</span>:{" "}
              <span style={{ color: "#7fe0aa" }}>&quot;ema_fast&quot;</span>,{" "}
              <span style={{ color: "#a5b4fc" }}>&quot;type&quot;</span>:{" "}
              <span style={{ color: "#7fe0aa" }}>&quot;indicator_ema&quot;</span>,{" "}
              <span style={{ color: "#a5b4fc" }}>&quot;period&quot;</span>: <span style={{ color: "#f2a93b" }}>20</span>{" "}
              &#125;, &#123; <span style={{ color: "#a5b4fc" }}>&quot;id&quot;</span>:{" "}
              <span style={{ color: "#7fe0aa" }}>&quot;cross&quot;</span>,{" "}
              <span style={{ color: "#a5b4fc" }}>&quot;type&quot;</span>:{" "}
              <span style={{ color: "#7fe0aa" }}>&quot;condition_compare&quot;</span> &#125;, &#123;{" "}
              <span style={{ color: "#a5b4fc" }}>&quot;id&quot;</span>:{" "}
              <span style={{ color: "#7fe0aa" }}>&quot;regime&quot;</span>,{" "}
              <span style={{ color: "#a5b4fc" }}>&quot;type&quot;</span>:{" "}
              <span style={{ color: "#7fe0aa" }}>&quot;condition_regime&quot;</span> &#125; ],{" "}
              <span style={{ color: "#a5b4fc" }}>&quot;edges&quot;</span>: [ [
              <span style={{ color: "#7fe0aa" }}>&quot;ema_fast&quot;</span>,{" "}
              <span style={{ color: "#7fe0aa" }}>&quot;cross.a&quot;</span>] ] &#125;
            </div>{" "}
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
            left: "-200px",
            width: "760px",
            height: "760px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle,rgba(var(--acc-rgb,99,102,241),.28),rgba(var(--acc-rgb,99,102,241),0) 68%)",
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
              Live preview
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
              See every node think, bar by bar.
            </h2>{" "}
            <p style={{ margin: "20px 0 0", maxWidth: "600px", textWrap: "pretty" }}>
              Switch on Live Preview and the canvas streams real market bars over WebSockets. Each node shows its inputs
              and outputs as they change, so you debug logic by watching it.
            </p>{" "}
          </div>{" "}
          <div
            style={{
              marginTop: "48px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
              gap: "14px",
            }}
          >
            {" "}
            <div
              data-reveal=""
              style={{
                padding: "20px",
                borderRadius: "16px",
                background: "rgba(255,255,255,.04)",
                border: "1px solid rgba(255,255,255,.1)",
              }}
            >
              {" "}
              <div style={{ font: "600 11px/1 'JetBrains Mono',monospace", letterSpacing: ".12em", color: "#8e8cb3" }}>
                EMA 20
              </div>{" "}
              <div style={{ marginTop: "12px", font: "600 26px/1 'JetBrains Mono',monospace", color: "#fff" }}>
                <span data-count="812.4" data-dec="1">
                  812.4
                </span>
              </div>{" "}
              <div style={{ marginTop: "8px", font: "500 12px/1 'JetBrains Mono',monospace", color: "#f2a93b" }}>
                series · updated 10:42:05
              </div>{" "}
            </div>{" "}
            <div
              data-reveal=""
              data-delay="80"
              style={{
                padding: "20px",
                borderRadius: "16px",
                background: "rgba(255,255,255,.04)",
                border: "1px solid rgba(255,255,255,.1)",
              }}
            >
              {" "}
              <div style={{ font: "600 11px/1 'JetBrains Mono',monospace", letterSpacing: ".12em", color: "#8e8cb3" }}>
                RSI 14
              </div>{" "}
              <div style={{ marginTop: "12px", font: "600 26px/1 'JetBrains Mono',monospace", color: "#fff" }}>
                <span data-count="61.8" data-dec="1">
                  61.8
                </span>
              </div>{" "}
              <div
                style={{
                  marginTop: "12px",
                  height: "6px",
                  borderRadius: "99px",
                  background: "rgba(255,255,255,.08)",
                  overflow: "hidden",
                }}
              >
                <div
                  data-bar="62"
                  style={{ height: "100%", width: "62%", borderRadius: "99px", background: "var(--acc-lite,#a5b4fc)" }}
                />
              </div>{" "}
            </div>{" "}
            <div
              data-reveal=""
              data-delay="160"
              style={{
                padding: "20px",
                borderRadius: "16px",
                background: "rgba(255,255,255,.04)",
                border: "1px solid rgba(255,255,255,.1)",
              }}
            >
              {" "}
              <div style={{ font: "600 11px/1 'JetBrains Mono',monospace", letterSpacing: ".12em", color: "#8e8cb3" }}>
                COMPARE · CROSSES ABOVE
              </div>{" "}
              <div
                style={{
                  marginTop: "12px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  font: "600 26px/1 'JetBrains Mono',monospace",
                  color: "#7fe0aa",
                }}
              >
                <span
                  data-pulse=""
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    background: "#2fbf71",
                    display: "block",
                  }}
                />
                <span>true</span>
              </div>{" "}
              <div style={{ marginTop: "8px", font: "500 12px/1 'JetBrains Mono',monospace", color: "#b79bff" }}>
                signal · fired on bar close
              </div>{" "}
            </div>{" "}
            <div
              data-reveal=""
              data-delay="240"
              style={{
                padding: "20px",
                borderRadius: "16px",
                background: "rgba(255,255,255,.04)",
                border: "1px solid rgba(255,255,255,.1)",
              }}
            >
              {" "}
              <div style={{ font: "600 11px/1 'JetBrains Mono',monospace", letterSpacing: ".12em", color: "#8e8cb3" }}>
                ENTER LONG
              </div>{" "}
              <div style={{ marginTop: "12px", font: "600 26px/1 'JetBrains Mono',monospace", color: "#fff" }}>
                qty <span data-count="50">50</span>
              </div>{" "}
              <div style={{ marginTop: "8px", font: "500 12px/1 'JetBrains Mono',monospace", color: "#7fe0aa" }}>
                queued for next bar&apos;s open
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <section id="templates" style={{ maxWidth: "1200px", margin: "0 auto", padding: "130px 24px 0" }}>
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
          <div data-reveal="" style={{ flex: "1 1 460px", maxWidth: "680px" }}>
            {" "}
            <div
              style={{
                font: "500 12px/1 'JetBrains Mono',monospace",
                letterSpacing: ".14em",
                textTransform: "uppercase",
                color: "var(--acc,#4f46e5)",
              }}
            >
              Starter templates
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
              Start from a working strategy, then make it yours.
            </h2>{" "}
          </div>{" "}
          <p
            data-reveal=""
            data-delay="100"
            style={{ flex: "1 1 300px", maxWidth: "400px", margin: "0", textWrap: "pretty" }}
          >
            Open a template, change any node, auto-layout the graph and send it straight to a backtest.
          </p>{" "}
        </div>{" "}
        <div
          style={{
            marginTop: "44px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "16px",
          }}
        >
          {" "}
          <Link
            className="hv3"
            href="/backtesting"
            data-reveal=""
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              padding: "24px",
              borderRadius: "20px",
              background: "rgba(255,255,255,.68)",
              border: "1px solid rgba(22,21,59,.08)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,.95),0 24px 50px -34px rgba(22,21,59,.4)",
              color: "#3d3c5c",
              transition: "transform .25s",
            }}
          >
            {" "}
            <span
              style={{
                font: "600 11px/1 'JetBrains Mono',monospace",
                letterSpacing: ".1em",
                color: "var(--acc,#4f46e5)",
              }}
            >
              INTRADAY · NSE
            </span>{" "}
            <span style={{ fontSize: "20px", fontWeight: "700", color: "#16153b" }}>EMA Pullback</span>{" "}
            <span style={{ fontSize: "15.5px" }}>
              Trend filter on the slow EMA, entry on a pullback to the fast one.
            </span>{" "}
          </Link>{" "}
          <Link
            className="hv3"
            href="/backtesting"
            data-reveal=""
            data-delay="70"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              padding: "24px",
              borderRadius: "20px",
              background: "rgba(255,255,255,.68)",
              border: "1px solid rgba(22,21,59,.08)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,.95),0 24px 50px -34px rgba(22,21,59,.4)",
              color: "#3d3c5c",
              transition: "transform .25s",
            }}
          >
            {" "}
            <span
              style={{
                font: "600 11px/1 'JetBrains Mono',monospace",
                letterSpacing: ".1em",
                color: "var(--acc,#4f46e5)",
              }}
            >
              SMART MONEY
            </span>{" "}
            <span style={{ fontSize: "20px", fontWeight: "700", color: "#16153b" }}>SMC Order Block &amp; FVG</span>{" "}
            <span style={{ fontSize: "15.5px" }}>
              Longs from a fresh bullish order block with an open fair value gap.
            </span>{" "}
          </Link>{" "}
          <Link
            className="hv3"
            href="/backtesting"
            data-reveal=""
            data-delay="140"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              padding: "24px",
              borderRadius: "20px",
              background: "rgba(255,255,255,.68)",
              border: "1px solid rgba(22,21,59,.08)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,.95),0 24px 50px -34px rgba(22,21,59,.4)",
              color: "#3d3c5c",
              transition: "transform .25s",
            }}
          >
            {" "}
            <span
              style={{
                font: "600 11px/1 'JetBrains Mono',monospace",
                letterSpacing: ".1em",
                color: "var(--acc,#4f46e5)",
              }}
            >
              CRYPTO · 24x7
            </span>{" "}
            <span style={{ fontSize: "20px", fontWeight: "700", color: "#16153b" }}>Crypto Trend Rider</span>{" "}
            <span style={{ fontSize: "15.5px" }}>
              Rides trends on Delta perpetuals, sized in USD, never squared off at the NSE close.
            </span>{" "}
          </Link>{" "}
          <Link
            className="hv3"
            href="/backtesting"
            data-reveal=""
            data-delay="210"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              padding: "24px",
              borderRadius: "20px",
              background: "rgba(255,255,255,.68)",
              border: "1px solid rgba(22,21,59,.08)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,.95),0 24px 50px -34px rgba(22,21,59,.4)",
              color: "#3d3c5c",
              transition: "transform .25s",
            }}
          >
            {" "}
            <span
              style={{
                font: "600 11px/1 'JetBrains Mono',monospace",
                letterSpacing: ".1em",
                color: "var(--acc,#4f46e5)",
              }}
            >
              VOLATILITY
            </span>{" "}
            <span style={{ fontSize: "20px", fontWeight: "700", color: "#16153b" }}>Bollinger Breakout</span>{" "}
            <span style={{ fontSize: "15.5px" }}>Enters when price closes outside the band after a squeeze.</span>{" "}
          </Link>{" "}
        </div>{" "}
      </section>{" "}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "130px 24px 0" }}>
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
              Next: prove it
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
              Built a strategy? Find out if it actually works.
            </h2>{" "}
          </div>{" "}
          <div
            style={{ position: "relative", flex: "0 1 280px", display: "flex", flexDirection: "column", gap: "12px" }}
          >
            {" "}
            <Link
              className="hv1"
              href="/backtesting"
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
              Explore backtesting →
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
