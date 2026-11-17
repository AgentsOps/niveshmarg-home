import Link from "next/link";
import MotionRoot from "@/components/MotionRoot";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

// Generated from UI_PROTO/Home.dc.html.
const SKIN = "Indigo sky";

export default function HomePage() {
  const showTicker = true;
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
          width: "820px",
          height: "820px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle,rgba(var(--acc-rgb,99,102,241),.22),rgba(var(--acc-rgb,99,102,241),0) 68%)",
          pointerEvents: "none",
        }}
      />{" "}
      <div
        data-blob=""
        style={{
          position: "absolute",
          top: "-120px",
          right: "-260px",
          width: "760px",
          height: "760px",
          borderRadius: "50%",
          background: "radial-gradient(circle,rgba(125,190,255,.26),rgba(125,190,255,0) 68%)",
          pointerEvents: "none",
        }}
      />{" "}
      <div
        data-blob=""
        style={{
          position: "absolute",
          top: "520px",
          left: "34%",
          width: "640px",
          height: "640px",
          borderRadius: "50%",
          background: "radial-gradient(circle,rgba(242,169,59,.13),rgba(242,169,59,0) 68%)",
          pointerEvents: "none",
        }}
      />{" "}
      <div style={{ position: "sticky", top: "12px", zIndex: "50" }}>
        <SiteNav active="home" />
      </div>{" "}
      <section
        id="top"
        data-hero=""
        style={{
          position: "relative",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "72px 24px 40px",
          textAlign: "center",
        }}
      >
        {" "}
        <div
          data-reveal=""
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            padding: "7px 14px 7px 10px",
            borderRadius: "999px",
            background: "rgba(255,255,255,.7)",
            border: "1px solid rgba(22,21,59,.08)",
            font: "500 12px/1 'JetBrains Mono',monospace",
            letterSpacing: ".08em",
            color: "#3d3c5c",
          }}
        >
          {" "}
          <span
            data-pulse=""
            style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#2fbf71", display: "block" }}
          />{" "}
          <span>NSE · BSE · CRYPTO PERPETUALS</span>{" "}
        </div>{" "}
        <h1
          data-reveal=""
          data-delay="80"
          style={{
            margin: "26px auto 0",
            maxWidth: "980px",
            fontSize: "clamp(40px,7.2vw,88px)",
            lineHeight: ".98",
            letterSpacing: "-.045em",
            fontWeight: "800",
            color: "#16153b",
            textWrap: "balance",
          }}
        >
          Strategies you can <span style={{ color: "var(--acc,#4f46e5)" }}>prove</span> before you trade.
        </h1>{" "}
        <p
          data-reveal=""
          data-delay="160"
          style={{
            margin: "26px auto 0",
            maxWidth: "680px",
            fontSize: "clamp(17px,1.6vw,20px)",
            lineHeight: "1.55",
            color: "#3d3c5c",
            textWrap: "pretty",
          }}
        >
          Niveshmarg Edge is a visual strategy builder, a zero look-ahead backtester, an AI research desk and a
          risk-checked execution engine for Indian markets, in one platform.
        </p>{" "}
        <div
          data-reveal=""
          data-delay="240"
          style={{ marginTop: "34px", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px" }}
        >
          {" "}
          <Link
            className="hv1"
            href="/contact"
            style={{
              padding: "15px 26px",
              borderRadius: "999px",
              background: "var(--acc,#4f46e5)",
              color: "#fff",
              fontWeight: "600",
              fontSize: "16px",
              boxShadow: "0 14px 30px -12px rgba(var(--acc-rgb,99,102,241),.75),inset 0 1px 0 rgba(255,255,255,.25)",
              transition: "transform .2s",
            }}
          >
            Request a demo
          </Link>{" "}
          <a
            className="hv2"
            href="#build"
            style={{
              padding: "15px 26px",
              borderRadius: "999px",
              background: "rgba(255,255,255,.75)",
              border: "1px solid rgba(22,21,59,.12)",
              color: "#16153b",
              fontWeight: "600",
              fontSize: "16px",
              transition: "transform .2s",
            }}
          >
            See how it works
          </a>{" "}
        </div>{" "}
        <div
          data-reveal="scale"
          data-delay="320"
          style={{ position: "relative", margin: "64px auto 0", maxWidth: "1100px", textAlign: "left" }}
        >
          {" "}
          <div
            data-tilt=""
            style={{
              position: "relative",
              borderRadius: "18px",
              background: "#0d0c22",
              border: "1px solid rgba(255,255,255,.1)",
              boxShadow: "0 70px 120px -50px rgba(22,21,59,.6),0 0 0 1px rgba(22,21,59,.5)",
              overflow: "hidden",
            }}
          >
            {" "}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "10px 16px",
                padding: "10px 14px",
                borderBottom: "1px solid rgba(255,255,255,.07)",
                font: "500 12px/1 'JetBrains Mono',monospace",
                color: "#a8a6c9",
              }}
            >
              {" "}
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                {" "}
                <span style={{ color: "#eeedfb", fontWeight: "600" }}>NIFTY50-INDEX</span>{" "}
                <span
                  style={{
                    padding: "3px 6px",
                    borderRadius: "4px",
                    background: "rgba(255,255,255,.08)",
                    fontSize: "10px",
                  }}
                >
                  NSE
                </span>{" "}
              </div>{" "}
              <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
                {" "}
                <span data-px="" style={{ color: "#eeedfb", fontSize: "14px", fontWeight: "600" }}>
                  24,180.35
                </span>{" "}
                <span data-chg="" style={{ color: "#2fbf71" }}>
                  +0.42%
                </span>{" "}
              </div>{" "}
              <div
                style={{
                  display: "flex",
                  gap: "2px",
                  padding: "2px",
                  borderRadius: "7px",
                  background: "rgba(255,255,255,.05)",
                }}
              >
                {" "}
                <span style={{ padding: "5px 8px" }}>1m</span>
                <span style={{ padding: "5px 8px" }}>5m</span>
                <span
                  style={{ padding: "5px 8px", borderRadius: "5px", background: "var(--acc,#4f46e5)", color: "#fff" }}
                >
                  15m
                </span>
                <span style={{ padding: "5px 8px" }}>1h</span>
                <span style={{ padding: "5px 8px" }}>1D</span>{" "}
              </div>{" "}
              <div style={{ marginLeft: "auto", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px" }}>
                {" "}
                <span
                  style={{
                    padding: "5px 9px",
                    borderRadius: "999px",
                    border: "1px solid rgba(47,191,113,.35)",
                    color: "#7fe0aa",
                  }}
                >
                  Trending Bullish · 0.82
                </span>{" "}
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "5px 9px",
                    borderRadius: "999px",
                    background: "rgba(255,255,255,.06)",
                    color: "#eeedfb",
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
                  <span>Runner · PAPER</span>
                </span>{" "}
              </div>{" "}
            </div>{" "}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "4px 14px",
                padding: "8px 14px 0",
                font: "400 11px/1.4 'JetBrains Mono',monospace",
                color: "#8e8cb3",
              }}
            >
              {" "}
              <span style={{ color: "#8b8fff" }}>EMA 20</span>
              <span style={{ color: "#f2a93b" }}>EMA 50</span>
              <span style={{ color: "#7fe0aa" }}>SMC · Order blocks</span>
              <span>All times IST</span>{" "}
            </div>{" "}
            <canvas
              data-chart="candles"
              data-start="24050"
              data-vol="46"
              data-seed="11"
              data-long-label="LONG"
              style={{ display: "block", width: "100%", height: "clamp(250px,36vw,440px)" }}
            />{" "}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                gap: "8px 16px",
                padding: "9px 14px",
                borderTop: "1px solid rgba(255,255,255,.07)",
                font: "400 11px/1 'JetBrains Mono',monospace",
                color: "#8e8cb3",
              }}
            >
              {" "}
              <div style={{ display: "flex", gap: "14px" }}>
                <span>1D</span>
                <span>5D</span>
                <span style={{ color: "#eeedfb" }}>1M</span>
                <span>3M</span>
                <span>1Y</span>
              </div>{" "}
              <div style={{ display: "flex", gap: "14px" }}>
                <span>% · log · auto</span>
                <span>Market open</span>
                <span data-clock="" style={{ color: "#eeedfb" }}>
                  10:42:07
                </span>
                <span>IST</span>
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div data-par="-22" style={{ position: "absolute", left: "-18px", bottom: "-34px", zIndex: "2" }}>
            {" "}
            <div
              data-float=""
              style={{
                width: "232px",
                padding: "14px 16px",
                borderRadius: "16px",
                background: "rgba(255,255,255,.88)",
                border: "1px solid rgba(22,21,59,.08)",
                boxShadow: "inset 0 1px 0 #fff,0 24px 50px -20px rgba(22,21,59,.5)",
                backdropFilter: "blur(14px)",
              }}
            >
              {" "}
              <div
                style={{ font: "600 10.5px/1 'JetBrains Mono',monospace", letterSpacing: ".12em", color: "#5d5c7a" }}
              >
                RISK ENGINE
              </div>{" "}
              <div
                style={{
                  marginTop: "10px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  fontSize: "13.5px",
                  color: "#16153b",
                }}
              >
                {" "}
                <div style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
                  <span>Daily loss limit</span>
                  <span style={{ font: "600 11.5px/1.6 'JetBrains Mono',monospace", color: "#0f8a4b" }}>pass</span>
                </div>{" "}
                <div style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
                  <span>Per-trade risk cap</span>
                  <span style={{ font: "600 11.5px/1.6 'JetBrains Mono',monospace", color: "#0f8a4b" }}>pass</span>
                </div>{" "}
                <div style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
                  <span>Square-off 15:15 IST</span>
                  <span style={{ font: "600 11.5px/1.6 'JetBrains Mono',monospace", color: "#0f8a4b" }}>armed</span>
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div data-par="26" style={{ position: "absolute", right: "-18px", top: "92px", zIndex: "2" }}>
            {" "}
            <div
              data-float=""
              style={{
                width: "214px",
                padding: "14px 16px",
                borderRadius: "16px",
                background: "rgba(255,255,255,.88)",
                border: "1px solid rgba(22,21,59,.08)",
                boxShadow: "inset 0 1px 0 #fff,0 24px 50px -20px rgba(22,21,59,.5)",
                backdropFilter: "blur(14px)",
              }}
            >
              {" "}
              <div
                style={{ font: "600 10.5px/1 'JetBrains Mono',monospace", letterSpacing: ".12em", color: "#5d5c7a" }}
              >
                AI MARKET REGIME
              </div>{" "}
              <div style={{ marginTop: "9px", fontSize: "16px", fontWeight: "700", color: "#16153b" }}>
                Trending Bullish
              </div>{" "}
              <div
                style={{
                  marginTop: "9px",
                  height: "6px",
                  borderRadius: "99px",
                  background: "rgba(22,21,59,.08)",
                  overflow: "hidden",
                }}
              >
                <div
                  data-bar="82"
                  style={{ height: "100%", width: "82%", borderRadius: "99px", background: "var(--acc,#4f46e5)" }}
                />
              </div>{" "}
              <div style={{ marginTop: "7px", font: "500 11px/1 'JetBrains Mono',monospace", color: "#5d5c7a" }}>
                Conviction 0.82
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {showTicker && (
        <>
          {" "}
          <div
            style={{
              marginTop: "84px",
              borderTop: "1px solid rgba(22,21,59,.08)",
              borderBottom: "1px solid rgba(22,21,59,.08)",
              overflow: "hidden",
              background: "rgba(255,255,255,.45)",
            }}
          >
            {" "}
            <div
              data-marquee=""
              style={{
                display: "flex",
                width: "max-content",
                font: "500 13px/1 'JetBrains Mono',monospace",
                letterSpacing: ".1em",
                textTransform: "uppercase",
                color: "#5d5c7a",
              }}
            >
              {" "}
              <div style={{ display: "flex", gap: "44px", padding: "18px 22px" }}>
                {" "}
                <span>Fyers</span>
                <span style={{ color: "var(--acc,#4f46e5)" }}>◆</span>
                <span>Zerodha Kite</span>
                <span style={{ color: "var(--acc,#4f46e5)" }}>◆</span>
                <span>Groww</span>
                <span style={{ color: "var(--acc,#4f46e5)" }}>◆</span>
                <span>Delta Exchange</span>
                <span style={{ color: "var(--acc,#4f46e5)" }}>◆</span>
                <span>Smart Money Concepts</span>
                <span style={{ color: "var(--acc,#4f46e5)" }}>◆</span>
                <span>Walk-forward validation</span>
                <span style={{ color: "var(--acc,#4f46e5)" }}>◆</span>
                <span>DuckDB + Parquet</span>
                <span style={{ color: "var(--acc,#4f46e5)" }}>◆</span>
                <span>WebSocket streaming</span>
                <span style={{ color: "var(--acc,#4f46e5)" }}>◆</span>
                <span>MCP for Claude &amp; Cursor</span>
                <span style={{ color: "var(--acc,#4f46e5)" }}>◆</span>{" "}
              </div>{" "}
              <div style={{ display: "flex", gap: "44px", padding: "18px 22px" }}>
                {" "}
                <span>Fyers</span>
                <span style={{ color: "var(--acc,#4f46e5)" }}>◆</span>
                <span>Zerodha Kite</span>
                <span style={{ color: "var(--acc,#4f46e5)" }}>◆</span>
                <span>Groww</span>
                <span style={{ color: "var(--acc,#4f46e5)" }}>◆</span>
                <span>Delta Exchange</span>
                <span style={{ color: "var(--acc,#4f46e5)" }}>◆</span>
                <span>Smart Money Concepts</span>
                <span style={{ color: "var(--acc,#4f46e5)" }}>◆</span>
                <span>Walk-forward validation</span>
                <span style={{ color: "var(--acc,#4f46e5)" }}>◆</span>
                <span>DuckDB + Parquet</span>
                <span style={{ color: "var(--acc,#4f46e5)" }}>◆</span>
                <span>WebSocket streaming</span>
                <span style={{ color: "var(--acc,#4f46e5)" }}>◆</span>
                <span>MCP for Claude &amp; Cursor</span>
                <span style={{ color: "var(--acc,#4f46e5)" }}>◆</span>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </>
      )}{" "}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "64px 24px 0" }}>
        {" "}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(170px,1fr))", gap: "28px 24px" }}>
          {" "}
          <div data-reveal="">
            <div
              style={{
                fontSize: "clamp(40px,5vw,60px)",
                fontWeight: "800",
                letterSpacing: "-.04em",
                lineHeight: "1",
                color: "#16153b",
              }}
            >
              <span data-count="200" data-suf="+">
                200+
              </span>
            </div>
            <div style={{ marginTop: "10px", fontSize: "15px", color: "#5d5c7a" }}>
              strategy node types with typed ports
            </div>
          </div>{" "}
          <div data-reveal="" data-delay="70">
            <div
              style={{
                fontSize: "clamp(40px,5vw,60px)",
                fontWeight: "800",
                letterSpacing: "-.04em",
                lineHeight: "1",
                color: "#16153b",
              }}
            >
              <span data-count="0">0</span>
            </div>
            <div style={{ marginTop: "10px", fontSize: "15px", color: "#5d5c7a" }}>
              look-ahead bias in every backtest
            </div>
          </div>{" "}
          <div data-reveal="" data-delay="140">
            <div
              style={{
                fontSize: "clamp(40px,5vw,60px)",
                fontWeight: "800",
                letterSpacing: "-.04em",
                lineHeight: "1",
                color: "#16153b",
              }}
            >
              <span data-count="4">4</span>
            </div>
            <div style={{ marginTop: "10px", fontSize: "15px", color: "#5d5c7a" }}>brokers behind one interface</div>
          </div>{" "}
          <div data-reveal="" data-delay="210">
            <div
              style={{
                fontSize: "clamp(40px,5vw,60px)",
                fontWeight: "800",
                letterSpacing: "-.04em",
                lineHeight: "1",
                color: "#16153b",
              }}
            >
              <span data-count="24">24</span>
            </div>
            <div style={{ marginTop: "10px", fontSize: "15px", color: "#5d5c7a" }}>MCP tools for AI agents</div>
          </div>{" "}
          <div data-reveal="" data-delay="280">
            <div
              style={{
                fontSize: "clamp(40px,5vw,60px)",
                fontWeight: "800",
                letterSpacing: "-.04em",
                lineHeight: "1",
                color: "#16153b",
              }}
            >
              <span data-count="5">5</span>
              <span style={{ fontSize: ".5em", letterSpacing: "0" }}> sessions</span>
            </div>
            <div style={{ marginTop: "10px", fontSize: "15px", color: "#5d5c7a" }}>
              of paper trading before anything goes live
            </div>
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <section id="build" style={{ maxWidth: "1200px", margin: "0 auto", padding: "130px 24px 0" }}>
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
              01 — Build
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
              Wire a strategy like a circuit. Skip the boilerplate.
            </h2>{" "}
          </div>{" "}
          <p
            data-reveal=""
            data-delay="100"
            style={{ flex: "1 1 320px", maxWidth: "420px", margin: "0", textWrap: "pretty" }}
          >
            Drag indicators, Smart Money Concepts, conditions and exits onto a full-screen canvas. Ports are typed, so a
            wrong wire is refused before it ever reaches a backtest.
          </p>{" "}
        </div>{" "}
        <div
          data-reveal="scale"
          style={{
            marginTop: "44px",
            borderRadius: "18px",
            background: "#0d0c22",
            border: "1px solid rgba(255,255,255,.1)",
            boxShadow: "0 60px 110px -50px rgba(22,21,59,.6)",
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
              EMA Pullback
            </span>{" "}
            <span
              style={{ padding: "3px 6px", borderRadius: "4px", background: "rgba(255,255,255,.08)", fontSize: "10px" }}
            >
              v3
            </span>{" "}
            <div style={{ marginLeft: "auto", display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {" "}
              <span style={{ padding: "7px 10px", borderRadius: "7px", background: "rgba(255,255,255,.05)" }}>
                Templates
              </span>{" "}
              <span style={{ padding: "7px 10px", borderRadius: "7px", background: "rgba(255,255,255,.05)" }}>
                Auto-layout
              </span>{" "}
              <span style={{ padding: "7px 10px", borderRadius: "7px", background: "rgba(255,255,255,.05)" }}>
                Canvas | JSON
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
                  style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#2fbf71", display: "block" }}
                />
                <span>Live Preview</span>
              </span>{" "}
              <span
                style={{ padding: "7px 10px", borderRadius: "7px", background: "var(--acc,#4f46e5)", color: "#fff" }}
              >
                Run Backtest
              </span>{" "}
            </div>{" "}
          </div>{" "}
          <div
            data-fit="1175"
            data-fit-h="400"
            data-fit-min="0.5"
            style={{
              overflowX: "auto",
              overflowY: "hidden",
              height: "400px",
              backgroundColor: "#0d0c22",
              backgroundImage: "radial-gradient(rgba(255,255,255,.07) 1px,transparent 1px)",
              backgroundSize: "22px 22px",
            }}
          >
            {" "}
            <div
              data-seq="300"
              style={{
                position: "relative",
                width: "1175px",
                height: "400px",
                transformOrigin: "0 0",
                fontFamily: "'Schibsted Grotesk',sans-serif",
              }}
            >
              {" "}
              <svg width="1175" height="400" style={{ position: "absolute", left: "0", top: "0", overflow: "visible" }}>
                <path
                  data-wire=""
                  d="M180 210 C198 210 198 92 215 92"
                  style={{ fill: "none", stroke: "#6ea8ff", strokeWidth: "1.8", strokeDasharray: "6 5" }}
                />
                <path
                  data-wire=""
                  d="M180 210 L215 210"
                  style={{ fill: "none", stroke: "#6ea8ff", strokeWidth: "1.8", strokeDasharray: "6 5" }}
                />
                <path
                  data-wire=""
                  d="M180 210 C198 210 198 328 215 328"
                  style={{ fill: "none", stroke: "#6ea8ff", strokeWidth: "1.8", strokeDasharray: "6 5" }}
                />
                <path
                  data-wire=""
                  d="M375 92 C393 92 393 150 410 150"
                  style={{ fill: "none", stroke: "#f2a93b", strokeWidth: "1.8", strokeDasharray: "6 5" }}
                />
                <path
                  data-wire=""
                  d="M375 210 C393 210 393 150 410 150"
                  style={{ fill: "none", stroke: "#f2a93b", strokeWidth: "1.8", strokeDasharray: "6 5" }}
                />
                <path
                  data-wire=""
                  d="M375 328 L800 328"
                  style={{ fill: "none", stroke: "#f2a93b", strokeWidth: "1.8", strokeDasharray: "6 5" }}
                />
                <path
                  data-wire=""
                  d="M570 150 C588 150 588 210 605 210"
                  style={{ fill: "none", stroke: "#b79bff", strokeWidth: "1.8", strokeDasharray: "6 5" }}
                />
                <path
                  data-wire=""
                  d="M570 268 C588 268 588 210 605 210"
                  style={{ fill: "none", stroke: "#b79bff", strokeWidth: "1.8", strokeDasharray: "6 5" }}
                />
                <path
                  data-wire=""
                  d="M765 210 L800 210"
                  style={{ fill: "none", stroke: "#b79bff", strokeWidth: "1.8", strokeDasharray: "6 5" }}
                />
                <path
                  data-wire=""
                  d="M960 210 L995 210"
                  style={{ fill: "none", stroke: "#b79bff", strokeWidth: "1.8", strokeDasharray: "6 5" }}
                />
                <path
                  data-wire=""
                  d="M960 328 C978 328 978 228 995 228"
                  style={{ fill: "none", stroke: "#ff8095", strokeWidth: "1.8", strokeDasharray: "6 5" }}
                />
              </svg>{" "}
              <div
                data-i="0"
                style={{
                  position: "absolute",
                  left: "20px",
                  top: "178px",
                  width: "160px",
                  height: "64px",
                  boxSizing: "border-box",
                  borderRadius: "12px",
                  background: "#17163a",
                  border: "1px solid rgba(255,255,255,.14)",
                  padding: "0 14px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: "7px",
                }}
              >
                {" "}
                <div style={{ fontSize: "13px", fontWeight: "600", lineHeight: "1", color: "#eeedfb" }}>
                  Market &amp; Timeframe
                </div>{" "}
                <div style={{ font: "500 10.5px/1 'JetBrains Mono',monospace", color: "#a8a6c9" }}>NIFTY50 · 15m</div>{" "}
                <span
                  style={{
                    position: "absolute",
                    right: "-5px",
                    top: "27px",
                    width: "9px",
                    height: "9px",
                    borderRadius: "50%",
                    background: "#6ea8ff",
                  }}
                />{" "}
              </div>{" "}
              <div
                data-i="1"
                style={{
                  position: "absolute",
                  left: "215px",
                  top: "60px",
                  width: "160px",
                  height: "64px",
                  boxSizing: "border-box",
                  borderRadius: "12px",
                  background: "#17163a",
                  border: "1px solid rgba(255,255,255,.14)",
                  padding: "0 14px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: "7px",
                }}
              >
                {" "}
                <div style={{ fontSize: "13px", fontWeight: "600", lineHeight: "1", color: "#eeedfb" }}>EMA</div>{" "}
                <div style={{ font: "500 10.5px/1 'JetBrains Mono',monospace", color: "#a8a6c9" }}>
                  20 → <span style={{ color: "#f2a93b" }}>24,196.4</span>
                </div>{" "}
                <span
                  style={{
                    position: "absolute",
                    left: "-5px",
                    top: "27px",
                    width: "9px",
                    height: "9px",
                    borderRadius: "50%",
                    background: "#6ea8ff",
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    right: "-5px",
                    top: "27px",
                    width: "9px",
                    height: "9px",
                    borderRadius: "50%",
                    background: "#f2a93b",
                  }}
                />{" "}
              </div>{" "}
              <div
                data-i="1"
                style={{
                  position: "absolute",
                  left: "215px",
                  top: "178px",
                  width: "160px",
                  height: "64px",
                  boxSizing: "border-box",
                  borderRadius: "12px",
                  background: "#17163a",
                  border: "1px solid rgba(255,255,255,.14)",
                  padding: "0 14px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: "7px",
                }}
              >
                {" "}
                <div style={{ fontSize: "13px", fontWeight: "600", lineHeight: "1", color: "#eeedfb" }}>EMA</div>{" "}
                <div style={{ font: "500 10.5px/1 'JetBrains Mono',monospace", color: "#a8a6c9" }}>
                  50 → <span style={{ color: "#f2a93b" }}>24,121.9</span>
                </div>{" "}
                <span
                  style={{
                    position: "absolute",
                    left: "-5px",
                    top: "27px",
                    width: "9px",
                    height: "9px",
                    borderRadius: "50%",
                    background: "#6ea8ff",
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    right: "-5px",
                    top: "27px",
                    width: "9px",
                    height: "9px",
                    borderRadius: "50%",
                    background: "#f2a93b",
                  }}
                />{" "}
              </div>{" "}
              <div
                data-i="1"
                style={{
                  position: "absolute",
                  left: "215px",
                  top: "296px",
                  width: "160px",
                  height: "64px",
                  boxSizing: "border-box",
                  borderRadius: "12px",
                  background: "#17163a",
                  border: "1px solid rgba(255,255,255,.14)",
                  padding: "0 14px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: "7px",
                }}
              >
                {" "}
                <div style={{ fontSize: "13px", fontWeight: "600", lineHeight: "1", color: "#eeedfb" }}>ATR</div>{" "}
                <div style={{ font: "500 10.5px/1 'JetBrains Mono',monospace", color: "#a8a6c9" }}>
                  14 → <span style={{ color: "#f2a93b" }}>38.6</span>
                </div>{" "}
                <span
                  style={{
                    position: "absolute",
                    left: "-5px",
                    top: "27px",
                    width: "9px",
                    height: "9px",
                    borderRadius: "50%",
                    background: "#6ea8ff",
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    right: "-5px",
                    top: "27px",
                    width: "9px",
                    height: "9px",
                    borderRadius: "50%",
                    background: "#f2a93b",
                  }}
                />{" "}
              </div>{" "}
              <div
                data-i="2"
                style={{
                  position: "absolute",
                  left: "410px",
                  top: "118px",
                  width: "160px",
                  height: "64px",
                  boxSizing: "border-box",
                  borderRadius: "12px",
                  background: "#17163a",
                  border: "1px solid rgba(255,255,255,.14)",
                  padding: "0 14px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: "7px",
                }}
              >
                {" "}
                <div style={{ fontSize: "13px", fontWeight: "600", lineHeight: "1", color: "#eeedfb" }}>
                  Compare
                </div>{" "}
                <div style={{ font: "500 10.5px/1 'JetBrains Mono',monospace", color: "#a8a6c9" }}>
                  crosses above → <span style={{ color: "#b79bff" }}>true</span>
                </div>{" "}
                <span
                  style={{
                    position: "absolute",
                    left: "-5px",
                    top: "27px",
                    width: "9px",
                    height: "9px",
                    borderRadius: "50%",
                    background: "#f2a93b",
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    right: "-5px",
                    top: "27px",
                    width: "9px",
                    height: "9px",
                    borderRadius: "50%",
                    background: "#b79bff",
                  }}
                />{" "}
              </div>{" "}
              <div
                data-i="2"
                style={{
                  position: "absolute",
                  left: "410px",
                  top: "236px",
                  width: "160px",
                  height: "64px",
                  boxSizing: "border-box",
                  borderRadius: "12px",
                  background: "#17163a",
                  border: "1px solid rgba(255,255,255,.14)",
                  padding: "0 14px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: "7px",
                }}
              >
                {" "}
                <div style={{ fontSize: "13px", fontWeight: "600", lineHeight: "1", color: "#eeedfb" }}>
                  Market Regime Filter
                </div>{" "}
                <div style={{ font: "500 10.5px/1 'JetBrains Mono',monospace", color: "#a8a6c9" }}>
                  Trending Bullish
                </div>{" "}
                <span
                  style={{
                    position: "absolute",
                    right: "-5px",
                    top: "27px",
                    width: "9px",
                    height: "9px",
                    borderRadius: "50%",
                    background: "#b79bff",
                  }}
                />{" "}
              </div>{" "}
              <div
                data-i="3"
                style={{
                  position: "absolute",
                  left: "605px",
                  top: "178px",
                  width: "160px",
                  height: "64px",
                  boxSizing: "border-box",
                  borderRadius: "12px",
                  background: "#17163a",
                  border: "1px solid rgba(255,255,255,.14)",
                  padding: "0 14px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: "7px",
                }}
              >
                {" "}
                <div style={{ fontSize: "13px", fontWeight: "600", lineHeight: "1", color: "#eeedfb" }}>AND</div>{" "}
                <div style={{ font: "500 10.5px/1 'JetBrains Mono',monospace", color: "#a8a6c9" }}>
                  2 inputs → <span style={{ color: "#b79bff" }}>true</span>
                </div>{" "}
                <span
                  style={{
                    position: "absolute",
                    left: "-5px",
                    top: "27px",
                    width: "9px",
                    height: "9px",
                    borderRadius: "50%",
                    background: "#b79bff",
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    right: "-5px",
                    top: "27px",
                    width: "9px",
                    height: "9px",
                    borderRadius: "50%",
                    background: "#b79bff",
                  }}
                />{" "}
              </div>{" "}
              <div
                data-i="4"
                style={{
                  position: "absolute",
                  left: "800px",
                  top: "178px",
                  width: "160px",
                  height: "64px",
                  boxSizing: "border-box",
                  borderRadius: "12px",
                  background: "#17163a",
                  border: "1px solid rgba(255,255,255,.14)",
                  padding: "0 14px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: "7px",
                }}
              >
                {" "}
                <div style={{ fontSize: "13px", fontWeight: "600", lineHeight: "1", color: "#eeedfb" }}>
                  Position Sizing
                </div>{" "}
                <div style={{ font: "500 10.5px/1 'JetBrains Mono',monospace", color: "#a8a6c9" }}>
                  risk 1% of equity
                </div>{" "}
                <span
                  style={{
                    position: "absolute",
                    left: "-5px",
                    top: "27px",
                    width: "9px",
                    height: "9px",
                    borderRadius: "50%",
                    background: "#b79bff",
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    right: "-5px",
                    top: "27px",
                    width: "9px",
                    height: "9px",
                    borderRadius: "50%",
                    background: "#b79bff",
                  }}
                />{" "}
              </div>{" "}
              <div
                data-i="4"
                style={{
                  position: "absolute",
                  left: "800px",
                  top: "296px",
                  width: "160px",
                  height: "64px",
                  boxSizing: "border-box",
                  borderRadius: "12px",
                  background: "#17163a",
                  border: "1px solid rgba(255,255,255,.14)",
                  padding: "0 14px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: "7px",
                }}
              >
                {" "}
                <div style={{ fontSize: "13px", fontWeight: "600", lineHeight: "1", color: "#eeedfb" }}>
                  ATR Stop
                </div>{" "}
                <div style={{ font: "500 10.5px/1 'JetBrains Mono',monospace", color: "#a8a6c9" }}>1.5 × ATR</div>{" "}
                <span
                  style={{
                    position: "absolute",
                    left: "-5px",
                    top: "27px",
                    width: "9px",
                    height: "9px",
                    borderRadius: "50%",
                    background: "#f2a93b",
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    right: "-5px",
                    top: "27px",
                    width: "9px",
                    height: "9px",
                    borderRadius: "50%",
                    background: "#ff8095",
                  }}
                />{" "}
              </div>{" "}
              <div
                data-i="5"
                style={{
                  position: "absolute",
                  left: "995px",
                  top: "178px",
                  width: "160px",
                  height: "64px",
                  boxSizing: "border-box",
                  borderRadius: "12px",
                  background: "#12281f",
                  border: "1px solid rgba(47,191,113,.55)",
                  padding: "0 14px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: "7px",
                }}
              >
                {" "}
                <div style={{ fontSize: "13px", fontWeight: "600", lineHeight: "1", color: "#eeedfb" }}>
                  Enter Long
                </div>{" "}
                <div style={{ font: "500 10.5px/1 'JetBrains Mono',monospace", color: "#7fe0aa" }}>
                  fills at T+1 open
                </div>{" "}
                <span
                  style={{
                    position: "absolute",
                    left: "-5px",
                    top: "27px",
                    width: "9px",
                    height: "9px",
                    borderRadius: "50%",
                    background: "#b79bff",
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    left: "-5px",
                    top: "45px",
                    width: "9px",
                    height: "9px",
                    borderRadius: "50%",
                    background: "#ff8095",
                  }}
                />{" "}
              </div>{" "}
              <div
                style={{
                  position: "absolute",
                  left: "20px",
                  top: "18px",
                  display: "flex",
                  gap: "16px",
                  font: "500 10.5px/1 'JetBrains Mono',monospace",
                  color: "#a8a6c9",
                }}
              >
                {" "}
                <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#6ea8ff",
                      display: "block",
                    }}
                  />
                  candles
                </span>{" "}
                <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#f2a93b",
                      display: "block",
                    }}
                  />
                  series
                </span>{" "}
                <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#b79bff",
                      display: "block",
                    }}
                  />
                  signal
                </span>{" "}
                <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#ff8095",
                      display: "block",
                    }}
                  />
                  exit
                </span>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div
          style={{
            marginTop: "36px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
            gap: "28px 40px",
          }}
        >
          {" "}
          <div data-reveal="">
            <div style={{ fontSize: "19px", fontWeight: "700", color: "#16153b" }}>Live preview with telemetry</div>
            <p style={{ margin: "8px 0 0", fontSize: "16px" }}>
              Watch every node&apos;s inputs and outputs update over WebSockets as real bars arrive.
            </p>
          </div>{" "}
          <div data-reveal="" data-delay="90">
            <div style={{ fontSize: "19px", fontWeight: "700", color: "#16153b" }}>The full indicator shelf</div>
            <p style={{ margin: "8px 0 0", fontSize: "16px" }}>
              The TA-Lib catalogue, order blocks, fair value gaps, swing patterns, maths, risk guards and exits.
            </p>
          </div>{" "}
          <div data-reveal="" data-delay="180">
            <div style={{ fontSize: "19px", fontWeight: "700", color: "#16153b" }}>Start from a template</div>
            <p style={{ margin: "8px 0 0", fontSize: "16px" }}>
              EMA Pullback, SMC Order Block &amp; FVG, Crypto Trend Rider and Bollinger Breakout, ready to edit.
            </p>
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <section id="prove" style={{ maxWidth: "1200px", margin: "0 auto", padding: "140px 24px 0" }}>
        {" "}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "48px 64px", alignItems: "center" }}>
          {" "}
          <div style={{ flex: "1 1 400px", minWidth: "0" }}>
            {" "}
            <div data-reveal="">
              {" "}
              <div
                style={{
                  font: "500 12px/1 'JetBrains Mono',monospace",
                  letterSpacing: ".14em",
                  textTransform: "uppercase",
                  color: "var(--acc,#4f46e5)",
                }}
              >
                02 — Prove
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
                Backtests that refuse to flatter you.
              </h2>{" "}
              <p style={{ margin: "20px 0 0", maxWidth: "520px", textWrap: "pretty" }}>
                Most backtests look good because they cheat. Ours is built so it can&apos;t: three rules apply to every
                run, and none of them can be switched off.
              </p>{" "}
            </div>{" "}
            <div style={{ marginTop: "30px", display: "flex", flexDirection: "column" }}>
              {" "}
              <div
                data-reveal=""
                style={{ display: "flex", gap: "18px", padding: "20px 0", borderTop: "1px solid rgba(22,21,59,.1)" }}
              >
                {" "}
                <div style={{ font: "600 13px/1.7 'JetBrains Mono',monospace", color: "var(--acc,#4f46e5)" }}>
                  T+1
                </div>{" "}
                <div>
                  <div style={{ fontSize: "18px", fontWeight: "700", color: "#16153b" }}>Zero look-ahead</div>
                  <div style={{ marginTop: "4px", fontSize: "16px" }}>
                    A signal on one bar&apos;s close fills at the next bar&apos;s open. Smart Money detectors only see
                    the past.
                  </div>
                </div>{" "}
              </div>{" "}
              <div
                data-reveal=""
                data-delay="80"
                style={{ display: "flex", gap: "18px", padding: "20px 0", borderTop: "1px solid rgba(22,21,59,.1)" }}
              >
                {" "}
                <div style={{ font: "600 13px/1.7 'JetBrains Mono',monospace", color: "var(--acc,#4f46e5)" }}>
                  SL▸
                </div>{" "}
                <div>
                  <div style={{ fontSize: "18px", fontWeight: "700", color: "#16153b" }}>Pessimistic fills</div>
                  <div style={{ marginTop: "4px", fontSize: "16px" }}>
                    When one candle touches both the stop and the target, the stop-loss triggers first.
                  </div>
                </div>{" "}
              </div>{" "}
              <div
                data-reveal=""
                data-delay="160"
                style={{
                  display: "flex",
                  gap: "18px",
                  padding: "20px 0",
                  borderTop: "1px solid rgba(22,21,59,.1)",
                  borderBottom: "1px solid rgba(22,21,59,.1)",
                }}
              >
                {" "}
                <div style={{ font: "600 13px/1.7 'JetBrains Mono',monospace", color: "var(--acc,#4f46e5)" }}>
                  ₹₹₹
                </div>{" "}
                <div>
                  <div style={{ fontSize: "18px", fontWeight: "700", color: "#16153b" }}>Real Indian costs</div>
                  <div style={{ marginTop: "4px", fontSize: "16px" }}>
                    STT, exchange charges, GST, SEBI fees, stamp duty and slippage are charged on every fill.
                  </div>
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div
            data-reveal="scale"
            style={{
              flex: "1 1 460px",
              minWidth: "0",
              borderRadius: "22px",
              background: "rgba(255,255,255,.7)",
              border: "1px solid rgba(22,21,59,.08)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,.95),0 40px 80px -44px rgba(22,21,59,.45)",
              backdropFilter: "blur(14px)",
              padding: "22px",
            }}
          >
            {" "}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "8px 12px",
              }}
            >
              {" "}
              <div>
                <div style={{ fontSize: "15px", fontWeight: "700", color: "#16153b" }}>
                  Backtest run · EMA Pullback v3
                </div>
                <div style={{ marginTop: "3px", font: "400 11.5px/1.4 'JetBrains Mono',monospace", color: "#5d5c7a" }}>
                  Sample run, for illustration
                </div>
              </div>{" "}
              <span
                style={{
                  font: "600 11px/1 'JetBrains Mono',monospace",
                  padding: "6px 9px",
                  borderRadius: "999px",
                  background: "rgba(15,138,75,.1)",
                  color: "#0f8a4b",
                  boxShadow: "inset 0 0 0 1px rgba(15,138,75,.25)",
                }}
              >
                Completed
              </span>{" "}
            </div>{" "}
            <div
              style={{
                marginTop: "14px",
                display: "flex",
                gap: "16px",
                font: "500 11px/1 'JetBrains Mono',monospace",
                color: "#5d5c7a",
              }}
            >
              {" "}
              <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <span
                  style={{
                    width: "14px",
                    height: "3px",
                    borderRadius: "2px",
                    background: "var(--acc,#4f46e5)",
                    display: "block",
                  }}
                />
                Strategy
              </span>{" "}
              <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <span
                  style={{ width: "14px", height: "3px", borderRadius: "2px", background: "#9a99b5", display: "block" }}
                />
                Buy &amp; hold
              </span>{" "}
              <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <span
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "2px",
                    background: "rgba(210,47,74,.2)",
                    display: "block",
                  }}
                />
                Drawdown
              </span>{" "}
            </div>{" "}
            <canvas
              data-chart="equity"
              data-seed="5"
              data-a="124.5"
              data-b="111.2"
              style={{ display: "block", width: "100%", height: "240px", marginTop: "8px" }}
            />{" "}
            <div
              style={{
                marginTop: "14px",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(104px,1fr))",
                gap: "10px",
              }}
            >
              {" "}
              <div style={{ padding: "12px", borderRadius: "12px", background: "rgba(22,21,59,.04)" }}>
                <div style={{ fontSize: "12px", color: "#5d5c7a" }}>Net P&amp;L</div>
                <div
                  style={{
                    marginTop: "4px",
                    fontSize: "19px",
                    fontWeight: "700",
                    color: "#0f8a4b",
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  <span data-count="24500" data-pre="+₹">
                    +₹24,500
                  </span>
                </div>
              </div>{" "}
              <div style={{ padding: "12px", borderRadius: "12px", background: "rgba(22,21,59,.04)" }}>
                <div style={{ fontSize: "12px", color: "#5d5c7a" }}>CAGR</div>
                <div
                  style={{
                    marginTop: "4px",
                    fontSize: "19px",
                    fontWeight: "700",
                    color: "#16153b",
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  <span data-count="24.5" data-dec="1" data-suf="%">
                    24.5%
                  </span>
                </div>
              </div>{" "}
              <div style={{ padding: "12px", borderRadius: "12px", background: "rgba(22,21,59,.04)" }}>
                <div style={{ fontSize: "12px", color: "#5d5c7a" }}>Sharpe</div>
                <div
                  style={{
                    marginTop: "4px",
                    fontSize: "19px",
                    fontWeight: "700",
                    color: "#16153b",
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  <span data-count="1.82" data-dec="2">
                    1.82
                  </span>
                </div>
              </div>{" "}
              <div style={{ padding: "12px", borderRadius: "12px", background: "rgba(22,21,59,.04)" }}>
                <div style={{ fontSize: "12px", color: "#5d5c7a" }}>Max drawdown</div>
                <div
                  style={{
                    marginTop: "4px",
                    fontSize: "19px",
                    fontWeight: "700",
                    color: "#d22f4a",
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  <span data-count="7.8" data-dec="1" data-pre="−" data-suf="%">
                    −7.8%
                  </span>
                </div>
              </div>{" "}
              <div style={{ padding: "12px", borderRadius: "12px", background: "rgba(22,21,59,.04)" }}>
                <div style={{ fontSize: "12px", color: "#5d5c7a" }}>Win rate</div>
                <div
                  style={{
                    marginTop: "4px",
                    fontSize: "19px",
                    fontWeight: "700",
                    color: "#16153b",
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  <span data-count="64.2" data-dec="1" data-suf="%">
                    64.2%
                  </span>
                </div>
              </div>{" "}
            </div>{" "}
            <div
              data-seq="420"
              style={{
                marginTop: "16px",
                display: "flex",
                flexWrap: "wrap",
                gap: "6px",
                font: "500 10.5px/1 'JetBrains Mono',monospace",
                color: "#3d3c5c",
              }}
            >
              {" "}
              <span data-i="0" style={{ padding: "6px 8px", borderRadius: "6px", background: "rgba(22,21,59,.05)" }}>
                Check history
              </span>{" "}
              <span data-i="1" style={{ padding: "6px 8px", borderRadius: "6px", background: "rgba(22,21,59,.05)" }}>
                Fetch missing candles
              </span>{" "}
              <span data-i="2" style={{ padding: "6px 8px", borderRadius: "6px", background: "rgba(22,21,59,.05)" }}>
                Validate data
              </span>{" "}
              <span data-i="3" style={{ padding: "6px 8px", borderRadius: "6px", background: "rgba(22,21,59,.05)" }}>
                Run
              </span>{" "}
              <span
                data-i="4"
                style={{
                  padding: "6px 8px",
                  borderRadius: "6px",
                  background: "var(--acc-soft,#ecebff)",
                  color: "var(--acc,#4f46e5)",
                }}
              >
                Walk-forward
              </span>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <section
        id="run"
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
            width: "800px",
            height: "800px",
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
            padding: "clamp(64px,9vw,120px) clamp(10px,3vw,24px)",
          }}
        >
          {" "}
          <div data-reveal="" style={{ maxWidth: "820px" }}>
            {" "}
            <div
              style={{
                font: "500 12px/1 'JetBrains Mono',monospace",
                letterSpacing: ".14em",
                textTransform: "uppercase",
                color: "var(--acc-lite,#a5b4fc)",
              }}
            >
              03 — Run
            </div>{" "}
            <h2
              style={{
                margin: "18px 0 0",
                fontSize: "clamp(30px,4.6vw,58px)",
                lineHeight: "1.03",
                letterSpacing: "-.035em",
                fontWeight: "700",
                color: "#fff",
                textWrap: "balance",
              }}
            >
              AI does the research. Maths places the orders.
            </h2>{" "}
            <p style={{ margin: "20px 0 0", maxWidth: "620px", textWrap: "pretty" }}>
              Every order, paper or live, passes a deterministic risk engine first. AI classifies regimes and writes
              reports. It never places a live trade.
            </p>{" "}
          </div>{" "}
          <div style={{ marginTop: "56px", display: "flex", flexWrap: "wrap", gap: "40px 64px" }}>
            {" "}
            <div style={{ flex: "1 1 380px", minWidth: "0" }}>
              {" "}
              <div style={{ font: "600 11px/1 'JetBrains Mono',monospace", letterSpacing: ".12em", color: "#8e8cb3" }}>
                THE FOUR GATES TO LIVE
              </div>{" "}
              <div style={{ marginTop: "18px", display: "flex", flexDirection: "column" }}>
                {" "}
                <div
                  data-reveal=""
                  style={{
                    display: "flex",
                    gap: "18px",
                    padding: "18px 0",
                    borderTop: "1px solid rgba(255,255,255,.09)",
                  }}
                >
                  {" "}
                  <div
                    style={{
                      flex: "none",
                      width: "34px",
                      height: "34px",
                      borderRadius: "50%",
                      border: "1px solid rgba(255,255,255,.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      font: "600 12px/1 'JetBrains Mono',monospace",
                      color: "#fff",
                    }}
                  >
                    1
                  </div>{" "}
                  <div>
                    <div style={{ fontSize: "18px", fontWeight: "700", color: "#fff" }}>Draft</div>
                    <div style={{ marginTop: "3px", fontSize: "15.5px" }}>
                      Build in the visual builder and pass canvas validation.
                    </div>
                  </div>{" "}
                </div>{" "}
                <div
                  data-reveal=""
                  data-delay="120"
                  style={{
                    display: "flex",
                    gap: "18px",
                    padding: "18px 0",
                    borderTop: "1px solid rgba(255,255,255,.09)",
                  }}
                >
                  {" "}
                  <div
                    style={{
                      flex: "none",
                      width: "34px",
                      height: "34px",
                      borderRadius: "50%",
                      border: "1px solid rgba(255,255,255,.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      font: "600 12px/1 'JetBrains Mono',monospace",
                      color: "#fff",
                    }}
                  >
                    2
                  </div>{" "}
                  <div>
                    <div style={{ fontSize: "18px", fontWeight: "700", color: "#fff" }}>Backtest</div>
                    <div style={{ marginTop: "3px", fontSize: "15.5px" }}>
                      A run of the exact strategy version is linked to the runner. Edit the strategy and the run goes
                      stale.
                    </div>
                  </div>{" "}
                </div>{" "}
                <div
                  data-reveal=""
                  data-delay="240"
                  style={{
                    display: "flex",
                    gap: "18px",
                    padding: "18px 0",
                    borderTop: "1px solid rgba(255,255,255,.09)",
                  }}
                >
                  {" "}
                  <div
                    style={{
                      flex: "none",
                      width: "34px",
                      height: "34px",
                      borderRadius: "50%",
                      border: "1px solid rgba(255,255,255,.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      font: "600 12px/1 'JetBrains Mono',monospace",
                      color: "#fff",
                    }}
                  >
                    3
                  </div>{" "}
                  <div>
                    <div style={{ fontSize: "18px", fontWeight: "700", color: "#fff" }}>Paper trade</div>
                    <div style={{ marginTop: "3px", fontSize: "15.5px" }}>
                      At least five live-market paper sessions, with a win rate within 15 points of the backtest.
                    </div>
                  </div>{" "}
                </div>{" "}
                <div
                  data-reveal=""
                  data-delay="360"
                  style={{
                    display: "flex",
                    gap: "18px",
                    padding: "18px 0",
                    borderTop: "1px solid rgba(255,255,255,.09)",
                    borderBottom: "1px solid rgba(255,255,255,.09)",
                  }}
                >
                  {" "}
                  <div
                    style={{
                      flex: "none",
                      width: "34px",
                      height: "34px",
                      borderRadius: "50%",
                      background: "var(--acc,#4f46e5)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      font: "600 12px/1 'JetBrains Mono',monospace",
                      color: "#fff",
                    }}
                  >
                    4
                  </div>{" "}
                  <div>
                    <div style={{ fontSize: "18px", fontWeight: "700", color: "#fff" }}>Go live</div>
                    <div style={{ marginTop: "3px", fontSize: "15.5px" }}>
                      A staff member picks a connected broker account and types{" "}
                      <span
                        style={{
                          font: "600 13px/1 'JetBrains Mono',monospace",
                          padding: "2px 6px",
                          borderRadius: "5px",
                          background: "rgba(255,255,255,.1)",
                          color: "#fff",
                        }}
                      >
                        LIVE
                      </span>{" "}
                      to confirm.
                    </div>
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div
              data-reveal="scale"
              data-gates=""
              data-t1="BUY 50 · NSE:SBIN-EQ · 10:42 IST"
              data-r1="Passed · routed to broker"
              data-t2="BUY 120 · NSE:SBIN-EQ · 15:16 IST"
              data-r2="Refused · after the 15:15 IST square-off"
              data-fail2="4"
              style={{
                flex: "1 1 400px",
                minWidth: "0",
                alignSelf: "flex-start",
                borderRadius: "20px",
                background: "rgba(255,255,255,.05)",
                border: "1px solid rgba(255,255,255,.1)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,.08)",
                padding: "22px",
              }}
            >
              {" "}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
                {" "}
                <div
                  style={{ font: "600 11px/1 'JetBrains Mono',monospace", letterSpacing: ".12em", color: "#8e8cb3" }}
                >
                  RISK ENGINE · LIVE CHECK
                </div>{" "}
                <span
                  data-pulse=""
                  style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#2fbf71", display: "block" }}
                />{" "}
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
          <div
            style={{
              marginTop: "64px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
              gap: "14px",
            }}
          >
            {" "}
            <div
              data-reveal=""
              style={{ padding: "20px", borderRadius: "16px", border: "1px solid rgba(255,255,255,.1)" }}
            >
              <div style={{ fontSize: "19px", fontWeight: "700", color: "#fff" }}>Fyers</div>
              <div style={{ marginTop: "6px", fontSize: "14.5px" }}>
                NSE and BSE. OAuth2 login, live WebSocket feed and candle history.
              </div>
            </div>{" "}
            <div
              data-reveal=""
              data-delay="80"
              style={{ padding: "20px", borderRadius: "16px", border: "1px solid rgba(255,255,255,.1)" }}
            >
              <div style={{ fontSize: "19px", fontWeight: "700", color: "#fff" }}>Zerodha Kite</div>
              <div style={{ marginTop: "6px", fontSize: "14.5px" }}>
                Risk-checked, idempotent order routing to your Kite account.
              </div>
            </div>{" "}
            <div
              data-reveal=""
              data-delay="160"
              style={{ padding: "20px", borderRadius: "16px", border: "1px solid rgba(255,255,255,.1)" }}
            >
              <div style={{ fontSize: "19px", fontWeight: "700", color: "#fff" }}>Groww</div>
              <div style={{ marginTop: "6px", fontSize: "14.5px" }}>
                The same runner and the same guardrails, on a Groww account.
              </div>
            </div>{" "}
            <div
              data-reveal=""
              data-delay="240"
              style={{ padding: "20px", borderRadius: "16px", border: "1px solid rgba(255,255,255,.1)" }}
            >
              <div style={{ fontSize: "19px", fontWeight: "700", color: "#fff" }}>Delta Exchange</div>
              <div style={{ marginTop: "6px", fontSize: "14.5px" }}>
                Crypto perpetuals, 24x7, capitalised in USD. Never squared off at the NSE close.
              </div>
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <section id="platform" style={{ maxWidth: "1200px", margin: "0 auto", padding: "140px 24px 0" }}>
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
            The research desk
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
            Everything around the trade, in the same place.
          </h2>{" "}
        </div>{" "}
        <div
          style={{
            marginTop: "44px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(310px,1fr))",
            gap: "18px",
          }}
        >
          {" "}
          <div
            data-reveal=""
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "18px",
              padding: "26px",
              borderRadius: "22px",
              background: "rgba(255,255,255,.68)",
              border: "1px solid rgba(22,21,59,.08)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,.95),0 24px 50px -34px rgba(22,21,59,.4)",
            }}
          >
            {" "}
            <div>
              <div style={{ fontSize: "21px", fontWeight: "700", color: "#16153b" }}>AI stock reports</div>
              <p style={{ margin: "8px 0 0", fontSize: "16px" }}>
                Four specialist agents read the fundamentals, the chart, the news and the risks. A fifth writes the
                verdict.
              </p>
            </div>{" "}
            <div
              data-seq="380"
              style={{
                marginTop: "auto",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                font: "500 12px/1 'JetBrains Mono',monospace",
                color: "#3d3c5c",
              }}
            >
              {" "}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                {" "}
                <span data-i="0" style={{ padding: "10px", borderRadius: "9px", background: "rgba(22,21,59,.05)" }}>
                  Fundamental
                </span>{" "}
                <span data-i="1" style={{ padding: "10px", borderRadius: "9px", background: "rgba(22,21,59,.05)" }}>
                  Technical
                </span>{" "}
                <span data-i="2" style={{ padding: "10px", borderRadius: "9px", background: "rgba(22,21,59,.05)" }}>
                  News
                </span>{" "}
                <span data-i="3" style={{ padding: "10px", borderRadius: "9px", background: "rgba(22,21,59,.05)" }}>
                  Risk auditor
                </span>{" "}
              </div>{" "}
              <span
                data-i="4"
                style={{
                  padding: "11px 10px",
                  borderRadius: "9px",
                  background: "var(--acc,#4f46e5)",
                  color: "#fff",
                  textAlign: "center",
                }}
              >
                Synthesizer → verdict
              </span>{" "}
            </div>{" "}
          </div>{" "}
          <div
            data-reveal=""
            data-delay="80"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "18px",
              padding: "26px",
              borderRadius: "22px",
              background: "rgba(255,255,255,.68)",
              border: "1px solid rgba(22,21,59,.08)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,.95),0 24px 50px -34px rgba(22,21,59,.4)",
            }}
          >
            {" "}
            <div>
              <div style={{ fontSize: "21px", fontWeight: "700", color: "#16153b" }}>Swing Trading Suite</div>
              <p style={{ margin: "8px 0 0", fontSize: "16px" }}>
                Every evening after the close, analyzers scan your universe and tell you what to do with each setup.
              </p>
            </div>{" "}
            <div
              style={{
                marginTop: "auto",
                display: "flex",
                flexDirection: "column",
                fontSize: "14.5px",
                color: "#16153b",
              }}
            >
              {" "}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "10px",
                  padding: "9px 0",
                  borderTop: "1px solid rgba(22,21,59,.08)",
                }}
              >
                <span>VCP Breakout</span>
                <span
                  style={{
                    font: "600 11px/1 'JetBrains Mono',monospace",
                    padding: "5px 8px",
                    borderRadius: "999px",
                    background: "rgba(15,138,75,.1)",
                    color: "#0f8a4b",
                  }}
                >
                  Buy
                </span>
              </div>{" "}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "10px",
                  padding: "9px 0",
                  borderTop: "1px solid rgba(22,21,59,.08)",
                }}
              >
                <span>Momentum Flag</span>
                <span
                  style={{
                    font: "600 11px/1 'JetBrains Mono',monospace",
                    padding: "5px 8px",
                    borderRadius: "999px",
                    background: "rgba(180,83,9,.1)",
                    color: "#9a4a06",
                  }}
                >
                  Wait for retest
                </span>
              </div>{" "}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "10px",
                  padding: "9px 0",
                  borderTop: "1px solid rgba(22,21,59,.08)",
                }}
              >
                <span>IPO / SME Base</span>
                <span
                  style={{
                    font: "600 11px/1 'JetBrains Mono',monospace",
                    padding: "5px 8px",
                    borderRadius: "999px",
                    background: "rgba(15,138,75,.1)",
                    color: "#0f8a4b",
                  }}
                >
                  Buy
                </span>
              </div>{" "}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "10px",
                  padding: "9px 0",
                  borderTop: "1px solid rgba(22,21,59,.08)",
                }}
              >
                <span>21 EMA Retest</span>
                <span
                  style={{
                    font: "600 11px/1 'JetBrains Mono',monospace",
                    padding: "5px 8px",
                    borderRadius: "999px",
                    background: "rgba(22,21,59,.06)",
                    color: "#3d3c5c",
                  }}
                >
                  Watching
                </span>
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div
            data-reveal=""
            data-delay="160"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "18px",
              padding: "26px",
              borderRadius: "22px",
              background: "rgba(255,255,255,.68)",
              border: "1px solid rgba(22,21,59,.08)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,.95),0 24px 50px -34px rgba(22,21,59,.4)",
            }}
          >
            {" "}
            <div>
              <div style={{ fontSize: "21px", fontWeight: "700", color: "#16153b" }}>Screener</div>
              <p style={{ margin: "8px 0 0", fontSize: "16px" }}>
                Filter about 3,600 NSE stocks and ETFs on valuation, growth, profitability and momentum. Refreshed daily
                at 18:30 IST.
              </p>
            </div>{" "}
            <div
              style={{
                marginTop: "auto",
                display: "flex",
                flexWrap: "wrap",
                gap: "7px",
                fontSize: "13.5px",
                fontWeight: "500",
                color: "#3d3c5c",
              }}
            >
              {" "}
              <span
                style={{
                  padding: "7px 11px",
                  borderRadius: "999px",
                  background: "var(--acc-soft,#ecebff)",
                  color: "var(--acc,#4f46e5)",
                }}
              >
                Momentum
              </span>{" "}
              <span style={{ padding: "7px 11px", borderRadius: "999px", border: "1px solid rgba(22,21,59,.12)" }}>
                Undervalued
              </span>{" "}
              <span style={{ padding: "7px 11px", borderRadius: "999px", border: "1px solid rgba(22,21,59,.12)" }}>
                High growth
              </span>{" "}
              <span style={{ padding: "7px 11px", borderRadius: "999px", border: "1px solid rgba(22,21,59,.12)" }}>
                Low debt
              </span>{" "}
              <span style={{ padding: "7px 11px", borderRadius: "999px", border: "1px solid rgba(22,21,59,.12)" }}>
                High dividend
              </span>{" "}
              <span style={{ padding: "7px 11px", borderRadius: "999px", border: "1px solid rgba(22,21,59,.12)" }}>
                Deep value
              </span>{" "}
              <span style={{ padding: "7px 11px", borderRadius: "999px", border: "1px solid rgba(22,21,59,.12)" }}>
                Large caps
              </span>{" "}
            </div>{" "}
          </div>{" "}
          <div
            data-reveal=""
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "18px",
              padding: "26px",
              borderRadius: "22px",
              background: "#0d0c22",
              border: "1px solid rgba(255,255,255,.1)",
              boxShadow: "0 24px 50px -34px rgba(22,21,59,.6)",
              color: "#a8a6c9",
            }}
          >
            {" "}
            <div>
              <div style={{ fontSize: "21px", fontWeight: "700", color: "#fff" }}>MCP server for AI agents</div>
              <p style={{ margin: "8px 0 0", fontSize: "16px" }}>
                Let Claude Desktop or Cursor query data, run backtests and draw on your charts, behind the same risk
                engine.
              </p>
            </div>{" "}
            <div
              style={{
                marginTop: "auto",
                padding: "14px",
                borderRadius: "12px",
                background: "#17163a",
                border: "1px solid rgba(255,255,255,.08)",
                font: "400 12px/1.6 'JetBrains Mono',monospace",
                minHeight: "112px",
              }}
            >
              {" "}
              <div style={{ color: "#eeedfb" }}>
                <span style={{ color: "var(--acc-lite,#a5b4fc)" }}>› </span>
                <span data-type="">Mark support and resistance on NSE:SBIN-EQ and draw a trade setup.</span>
                <span
                  data-pulse=""
                  style={{
                    display: "inline-block",
                    width: "7px",
                    height: "13px",
                    marginLeft: "2px",
                    verticalAlign: "-2px",
                    background: "var(--acc-lite,#a5b4fc)",
                  }}
                />
              </div>{" "}
              <div style={{ marginTop: "8px", color: "#7fe0aa" }}>→ drawing saved · /chart/NSE:SBIN-EQ/</div>{" "}
            </div>{" "}
          </div>{" "}
          <div
            data-reveal=""
            data-delay="80"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "18px",
              padding: "26px",
              borderRadius: "22px",
              background: "rgba(255,255,255,.68)",
              border: "1px solid rgba(22,21,59,.08)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,.95),0 24px 50px -34px rgba(22,21,59,.4)",
            }}
          >
            {" "}
            <div>
              <div style={{ fontSize: "21px", fontWeight: "700", color: "#16153b" }}>Chart workspace</div>
              <p style={{ margin: "8px 0 0", fontSize: "16px" }}>
                Full-screen charts with order blocks, fair value gaps and every backtest trade drawn on the candles.
              </p>
            </div>{" "}
            <div
              style={{
                marginTop: "auto",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                fontSize: "14.5px",
                color: "#16153b",
              }}
            >
              {" "}
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span
                  style={{
                    font: "600 11px/1 'JetBrains Mono',monospace",
                    padding: "6px 8px",
                    borderRadius: "6px",
                    background: "#16153b",
                    color: "#fff",
                  }}
                >
                  ⌘K
                </span>
                <span>Command palette for symbols and studies</span>
              </div>{" "}
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span
                  style={{
                    font: "600 11px/1 'JetBrains Mono',monospace",
                    padding: "6px 8px",
                    borderRadius: "6px",
                    background: "#16153b",
                    color: "#fff",
                  }}
                >
                  [ ]
                </span>
                <span>Step through trades one by one</span>
              </div>{" "}
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span
                  style={{
                    font: "600 11px/1 'JetBrains Mono',monospace",
                    padding: "6px 8px",
                    borderRadius: "6px",
                    background: "#16153b",
                    color: "#fff",
                  }}
                >
                  1–6
                </span>
                <span>Switch timeframes, 1m to 1D</span>
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div
            data-reveal=""
            data-delay="160"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "18px",
              padding: "26px",
              borderRadius: "22px",
              background: "rgba(255,255,255,.68)",
              border: "1px solid rgba(22,21,59,.08)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,.95),0 24px 50px -34px rgba(22,21,59,.4)",
            }}
          >
            {" "}
            <div>
              <div style={{ fontSize: "21px", fontWeight: "700", color: "#16153b" }}>A warehouse built for candles</div>
              <p style={{ margin: "8px 0 0", fontSize: "16px" }}>
                Years of bars live in Parquet files queried by DuckDB, so a heavy backtest never slows a live order.
              </p>
            </div>{" "}
            <div
              style={{
                marginTop: "auto",
                padding: "14px",
                borderRadius: "12px",
                background: "rgba(22,21,59,.04)",
                font: "400 12px/1.7 'JetBrains Mono',monospace",
                color: "#3d3c5c",
                overflow: "hidden",
              }}
            >
              {" "}
              <div>instrument=NSE_SBIN-EQ/</div>{" "}
              <div style={{ paddingLeft: "14px" }}>
                timeframe=15m/ <span style={{ color: "var(--acc,#4f46e5)" }}>2026.parquet</span>
              </div>{" "}
              <div style={{ paddingLeft: "14px" }}>
                timeframe=1d/ <span style={{ color: "var(--acc,#4f46e5)" }}>2023 … 2026.parquet</span>
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <section id="evidence" style={{ maxWidth: "1200px", margin: "0 auto", padding: "140px 24px 0" }}>
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
          <div data-reveal="" style={{ flex: "1 1 460px", maxWidth: "720px" }}>
            {" "}
            <div
              style={{
                font: "500 12px/1 'JetBrains Mono',monospace",
                letterSpacing: ".14em",
                textTransform: "uppercase",
                color: "var(--acc,#4f46e5)",
              }}
            >
              Validated strategies
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
              We publish the ones that failed, too.
            </h2>{" "}
          </div>{" "}
          <p
            data-reveal=""
            data-delay="100"
            style={{ flex: "1 1 320px", maxWidth: "420px", margin: "0", textWrap: "pretty" }}
          >
            Our own strategies go through development data, an untouched hold-out and a rolling walk-forward, after all
            costs. Here is what the last study found.
          </p>{" "}
        </div>{" "}
        <div
          style={{
            marginTop: "44px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            gap: "18px",
          }}
        >
          {" "}
          <div
            data-reveal=""
            style={{
              padding: "30px",
              borderRadius: "22px",
              background: "rgba(255,255,255,.68)",
              border: "1px solid rgba(15,138,75,.28)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,.95),0 24px 50px -34px rgba(22,21,59,.4)",
            }}
          >
            {" "}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "10px",
              }}
            >
              <span
                style={{
                  font: "600 11px/1 'JetBrains Mono',monospace",
                  letterSpacing: ".12em",
                  padding: "7px 10px",
                  borderRadius: "999px",
                  background: "rgba(15,138,75,.1)",
                  color: "#0f8a4b",
                }}
              >
                PASSED · PAPER TRADING ONLY
              </span>
              <span style={{ font: "500 12px/1 'JetBrains Mono',monospace", color: "#5d5c7a" }}>Swing · v6</span>
            </div>{" "}
            <div
              style={{
                marginTop: "20px",
                fontSize: "26px",
                fontWeight: "700",
                letterSpacing: "-.02em",
                color: "#16153b",
              }}
            >
              RS Momentum Trend Swing
            </div>{" "}
            <p style={{ margin: "10px 0 0", fontSize: "16px" }}>
              A positive edge per trade in development (2012–2019) and in the untouched hold-out (2020–2026). Ready for
              paper trading, not for live money.
            </p>{" "}
            <div
              style={{
                marginTop: "22px",
                display: "flex",
                flexWrap: "wrap",
                gap: "28px",
                paddingTop: "20px",
                borderTop: "1px solid rgba(22,21,59,.08)",
              }}
            >
              {" "}
              <div>
                <div
                  style={{
                    fontSize: "34px",
                    fontWeight: "800",
                    letterSpacing: "-.03em",
                    lineHeight: "1",
                    color: "#16153b",
                  }}
                >
                  <span data-count="1.56" data-dec="2">
                    1.56
                  </span>
                </div>
                <div style={{ marginTop: "6px", fontSize: "13.5px", color: "#5d5c7a" }}>walk-forward profit factor</div>
              </div>{" "}
              <div>
                <div
                  style={{
                    fontSize: "34px",
                    fontWeight: "800",
                    letterSpacing: "-.03em",
                    lineHeight: "1",
                    color: "#16153b",
                  }}
                >
                  <span data-count="7">7</span>
                  <span style={{ fontSize: ".55em", fontWeight: "600", letterSpacing: "0" }}> of 10</span>
                </div>
                <div style={{ marginTop: "6px", fontSize: "13.5px", color: "#5d5c7a" }}>
                  out-of-sample years profitable
                </div>
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div
            data-reveal=""
            data-delay="120"
            style={{
              padding: "30px",
              borderRadius: "22px",
              background: "rgba(255,255,255,.68)",
              border: "1px solid rgba(210,47,74,.28)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,.95),0 24px 50px -34px rgba(22,21,59,.4)",
            }}
          >
            {" "}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "10px",
              }}
            >
              <span
                style={{
                  font: "600 11px/1 'JetBrains Mono',monospace",
                  letterSpacing: ".12em",
                  padding: "7px 10px",
                  borderRadius: "999px",
                  background: "rgba(210,47,74,.09)",
                  color: "#c12843",
                }}
              >
                FAILED · DO NOT TRADE
              </span>
              <span style={{ font: "500 12px/1 'JetBrains Mono',monospace", color: "#5d5c7a" }}>Intraday · v4</span>
            </div>{" "}
            <div
              style={{
                marginTop: "20px",
                fontSize: "26px",
                fontWeight: "700",
                letterSpacing: "-.02em",
                color: "#16153b",
              }}
            >
              Opening Range Retest
            </div>{" "}
            <p style={{ margin: "10px 0 0", fontSize: "16px" }}>
              Loses after costs in development, in the hold-out and in every walk-forward fold. It still loses with zero
              slippage.
            </p>{" "}
            <div
              style={{
                marginTop: "22px",
                paddingTop: "20px",
                borderTop: "1px solid rgba(22,21,59,.08)",
                fontSize: "15.5px",
                color: "#3d3c5c",
              }}
            >
              Kept in the platform as a research template, labelled as failed, so nobody has to rediscover it the
              expensive way.
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <section id="cta" style={{ maxWidth: "1200px", margin: "0 auto", padding: "140px 24px 0" }}>
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
            backdropFilter: "blur(14px)",
            padding: "clamp(32px,5vw,64px)",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "36px 64px",
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
          <div style={{ position: "relative", flex: "1 1 440px", minWidth: "0" }}>
            {" "}
            <div
              style={{
                font: "500 12px/1 'JetBrains Mono',monospace",
                letterSpacing: ".14em",
                textTransform: "uppercase",
                color: "var(--acc,#4f46e5)",
              }}
            >
              Get started
            </div>{" "}
            <h2
              style={{
                margin: "18px 0 0",
                maxWidth: "620px",
                fontSize: "clamp(30px,4.4vw,54px)",
                lineHeight: "1.04",
                letterSpacing: "-.035em",
                fontWeight: "700",
                color: "#16153b",
                textWrap: "balance",
              }}
            >
              See your strategy run before your money does.
            </h2>{" "}
            <p style={{ margin: "18px 0 0", maxWidth: "520px", textWrap: "pretty" }}>
              Book a walkthrough of the builder, the backtester and the live cockpit on your own instruments.
            </p>{" "}
          </div>{" "}
          <div
            style={{
              position: "relative",
              flex: "0 1 300px",
              minWidth: "0",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            {" "}
            <Link
              className="hv1"
              href="/contact"
              style={{
                padding: "16px 26px",
                borderRadius: "999px",
                background: "var(--acc,#4f46e5)",
                color: "#fff",
                fontWeight: "600",
                fontSize: "16px",
                textAlign: "center",
                boxShadow: "0 14px 30px -12px rgba(var(--acc-rgb,99,102,241),.75),inset 0 1px 0 rgba(255,255,255,.25)",
                transition: "transform .2s",
              }}
            >
              Request a demo
            </Link>{" "}
            <Link
              className="hv2"
              href="/docs"
              style={{
                padding: "16px 26px",
                borderRadius: "999px",
                background: "rgba(255,255,255,.75)",
                border: "1px solid rgba(22,21,59,.12)",
                color: "#16153b",
                fontWeight: "600",
                fontSize: "16px",
                textAlign: "center",
                transition: "transform .2s",
              }}
            >
              Read the documentation
            </Link>{" "}
            <div
              style={{
                marginTop: "4px",
                font: "500 11.5px/1.5 'JetBrains Mono',monospace",
                color: "#5d5c7a",
                textAlign: "center",
              }}
            >
              Paper trading first. Live only after the four gates.
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <SiteFooter />{" "}
    </MotionRoot>
  );
}
