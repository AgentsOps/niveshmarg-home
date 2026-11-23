import Link from "next/link";
import MotionRoot from "@/components/MotionRoot";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

// Generated from UI_PROTO/Charts.dc.html.
const SKIN = "Forest";

export default function ChartsPage() {
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
          right: "-220px",
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
          top: "-60px",
          left: "-260px",
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          background: "radial-gradient(circle,rgba(125,190,255,.24),rgba(125,190,255,0) 68%)",
          pointerEvents: "none",
        }}
      />{" "}
      <div style={{ position: "sticky", top: "12px", zIndex: "50" }}>
        <SiteNav active="charts" />
      </div>{" "}
      <section
        data-hero=""
        style={{
          position: "relative",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "72px 24px 0",
          textAlign: "center",
        }}
      >
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
          Chart Workspace · Lightweight Charts v5
        </div>{" "}
        <h1
          data-reveal=""
          data-delay="80"
          style={{
            margin: "22px auto 0",
            maxWidth: "900px",
            fontSize: "clamp(38px,6vw,76px)",
            lineHeight: "1",
            letterSpacing: "-.045em",
            fontWeight: "800",
            color: "#16153b",
            textWrap: "balance",
          }}
        >
          Read the market the way institutions do.
        </h1>{" "}
        <p data-reveal="" data-delay="160" style={{ margin: "22px auto 0", maxWidth: "620px", textWrap: "pretty" }}>
          Full-screen streaming charts powered by TradingView Lightweight Charts v5 with Smart Money overlays, backtest
          trades on the candles and an AI assistant that draws with shareable deep-links.
        </p>{" "}
        <div
          data-reveal="scale"
          data-delay="240"
          style={{ position: "relative", marginTop: "48px", textAlign: "left" }}
        >
          {" "}
          <div
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
                gap: "10px 16px",
                padding: "10px 14px",
                borderBottom: "1px solid rgba(255,255,255,.07)",
                font: "500 12px/1 'JetBrains Mono',monospace",
                color: "#a8a6c9",
              }}
            >
              {" "}
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ color: "#eeedfb", fontWeight: "600" }}>NSE:SBIN-EQ</span>
                <span
                  style={{
                    padding: "3px 6px",
                    borderRadius: "4px",
                    background: "rgba(255,255,255,.08)",
                    fontSize: "10px",
                  }}
                >
                  EQ
                </span>
              </div>{" "}
              <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
                <span data-px="" style={{ color: "#eeedfb", fontSize: "14px", fontWeight: "600" }}>
                  812.40
                </span>
                <span data-chg="" style={{ color: "#2fbf71" }}>
                  +0.42%
                </span>
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
                <button
                  data-tf=""
                  data-seed="23"
                  data-vol="1.4"
                  style={{
                    border: "0",
                    cursor: "pointer",
                    padding: "6px 9px",
                    borderRadius: "5px",
                    font: "500 12px/1 'JetBrains Mono',monospace",
                    background: "var(--tb,transparent)",
                    color: "var(--tc,#a8a6c9)",
                  }}
                >
                  1m
                </button>{" "}
                <button
                  data-tf=""
                  data-on=""
                  data-seed="11"
                  data-vol="2.2"
                  style={{
                    border: "0",
                    cursor: "pointer",
                    padding: "6px 9px",
                    borderRadius: "5px",
                    font: "500 12px/1 'JetBrains Mono',monospace",
                    background: "var(--tb,transparent)",
                    color: "var(--tc,#a8a6c9)",
                  }}
                >
                  5m
                </button>{" "}
                <button
                  data-tf=""
                  data-seed="41"
                  data-vol="3.4"
                  style={{
                    border: "0",
                    cursor: "pointer",
                    padding: "6px 9px",
                    borderRadius: "5px",
                    font: "500 12px/1 'JetBrains Mono',monospace",
                    background: "var(--tb,transparent)",
                    color: "var(--tc,#a8a6c9)",
                  }}
                >
                  15m
                </button>{" "}
                <button
                  data-tf=""
                  data-seed="77"
                  data-vol="6"
                  style={{
                    border: "0",
                    cursor: "pointer",
                    padding: "6px 9px",
                    borderRadius: "5px",
                    font: "500 12px/1 'JetBrains Mono',monospace",
                    background: "var(--tb,transparent)",
                    color: "var(--tc,#a8a6c9)",
                  }}
                >
                  1h
                </button>{" "}
                <button
                  data-tf=""
                  data-seed="93"
                  data-vol="11"
                  style={{
                    border: "0",
                    cursor: "pointer",
                    padding: "6px 9px",
                    borderRadius: "5px",
                    font: "500 12px/1 'JetBrains Mono',monospace",
                    background: "var(--tb,transparent)",
                    color: "var(--tc,#a8a6c9)",
                  }}
                >
                  1D
                </button>{" "}
              </div>{" "}
              <div style={{ marginLeft: "auto", display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {" "}
                <button
                  data-flag="ema"
                  style={{
                    border: "1px solid rgba(255,255,255,.12)",
                    cursor: "pointer",
                    padding: "6px 10px",
                    borderRadius: "999px",
                    font: "500 11.5px/1 'JetBrains Mono',monospace",
                    background: "var(--tb,transparent)",
                    color: "var(--tc,#a8a6c9)",
                  }}
                >
                  EMA 20/50
                </button>{" "}
                <button
                  data-flag="ob"
                  style={{
                    border: "1px solid rgba(255,255,255,.12)",
                    cursor: "pointer",
                    padding: "6px 10px",
                    borderRadius: "999px",
                    font: "500 11.5px/1 'JetBrains Mono',monospace",
                    background: "var(--tb,transparent)",
                    color: "var(--tc,#a8a6c9)",
                  }}
                >
                  Order blocks
                </button>{" "}
                <button
                  data-flag="trades"
                  style={{
                    border: "1px solid rgba(255,255,255,.12)",
                    cursor: "pointer",
                    padding: "6px 10px",
                    borderRadius: "999px",
                    font: "500 11.5px/1 'JetBrains Mono',monospace",
                    background: "var(--tb,transparent)",
                    color: "var(--tc,#a8a6c9)",
                  }}
                >
                  Backtest trades
                </button>{" "}
                <button
                  data-flag="vol"
                  style={{
                    border: "1px solid rgba(255,255,255,.12)",
                    cursor: "pointer",
                    padding: "6px 10px",
                    borderRadius: "999px",
                    font: "500 11.5px/1 'JetBrains Mono',monospace",
                    background: "var(--tb,transparent)",
                    color: "var(--tc,#a8a6c9)",
                  }}
                >
                  Volume
                </button>{" "}
              </div>{" "}
            </div>{" "}
            <div style={{ padding: "8px 14px 0", font: "400 11px/1.4 'JetBrains Mono',monospace", color: "#8e8cb3" }}>
              <span data-ohlc="">O 0 H 0 L 0 C 0</span>
            </div>{" "}
            <canvas
              data-chart="candles"
              data-start="805"
              data-seed="11"
              data-vol="2.2"
              style={{ display: "block", width: "100%", height: "clamp(280px,40vw,480px)", cursor: "crosshair" }}
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
              <span>Hover for crosshair · values in IST</span>{" "}
              <div style={{ display: "flex", gap: "14px" }}>
                <span>Market open</span>
                <span data-clock="" style={{ color: "#eeedfb" }}>
                  10:42:07
                </span>
                <span>IST</span>
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div data-par="22" style={{ position: "absolute", left: "-16px", top: "120px", zIndex: "2" }}>
            {" "}
            <div
              data-float=""
              style={{
                width: "228px",
                padding: "14px 16px",
                borderRadius: "16px",
                background: "rgba(255,255,255,.9)",
                border: "1px solid rgba(22,21,59,.08)",
                boxShadow: "inset 0 1px 0 #fff,0 24px 50px -20px rgba(22,21,59,.5)",
                backdropFilter: "blur(14px)",
              }}
            >
              {" "}
              <div
                style={{ font: "600 10.5px/1 'JetBrains Mono',monospace", letterSpacing: ".12em", color: "#5d5c7a" }}
              >
                SMC SETUP HUD
              </div>{" "}
              <div style={{ marginTop: "10px", fontSize: "16px", fontWeight: "700", color: "#16153b" }}>
                Long from bullish OB
              </div>{" "}
              <div
                style={{
                  marginTop: "10px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                  font: "500 12px/1.4 'JetBrains Mono',monospace",
                  color: "#3d3c5c",
                }}
              >
                {" "}
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span>Entry</span>
                  <span style={{ color: "#16153b" }}>at OB top</span>
                </div>{" "}
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span>Stop</span>
                  <span style={{ color: "#c12843" }}>below OB</span>
                </div>{" "}
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span>Target</span>
                  <span style={{ color: "#0f8a4b" }}>2R</span>
                </div>{" "}
              </div>{" "}
            </div>{" "}
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
              Smart Money Concepts
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
              Institutional structure, plotted for you.
            </h2>{" "}
          </div>{" "}
          <p
            data-reveal=""
            data-delay="100"
            style={{ flex: "1 1 300px", maxWidth: "420px", margin: "0", textWrap: "pretty" }}
          >
            A native engine detects the zones where large players left footprints. It is causal: each structure appears
            only once the bars that confirm it have closed.
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
            <div
              style={{
                height: "86px",
                borderRadius: "12px",
                background: "#0d0c22",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {" "}
              <div
                style={{
                  position: "absolute",
                  left: "30%",
                  right: "0",
                  top: "44px",
                  height: "20px",
                  background: "rgba(47,191,113,.18)",
                  borderTop: "1px solid rgba(47,191,113,.7)",
                }}
              />{" "}
              <div
                style={{
                  position: "absolute",
                  left: "30%",
                  top: "40px",
                  width: "8px",
                  height: "30px",
                  background: "#f0556a",
                  borderRadius: "1px",
                }}
              />{" "}
              <div
                style={{
                  position: "absolute",
                  left: "calc(30% + 14px)",
                  top: "18px",
                  width: "8px",
                  height: "40px",
                  background: "#2fbf71",
                  borderRadius: "1px",
                }}
              />{" "}
              <div
                style={{
                  position: "absolute",
                  left: "calc(30% + 28px)",
                  top: "8px",
                  width: "8px",
                  height: "22px",
                  background: "#2fbf71",
                  borderRadius: "1px",
                }}
              />{" "}
            </div>{" "}
            <div style={{ marginTop: "16px", fontSize: "19px", fontWeight: "700", color: "#16153b" }}>Order blocks</div>{" "}
            <p style={{ margin: "6px 0 0", fontSize: "15.5px" }}>
              The last opposite candle before a strong move. Price often returns here.
            </p>{" "}
          </div>{" "}
          <div
            data-reveal=""
            data-delay="80"
            style={{
              padding: "24px",
              borderRadius: "20px",
              background: "rgba(255,255,255,.68)",
              border: "1px solid rgba(22,21,59,.08)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,.95),0 24px 50px -34px rgba(22,21,59,.4)",
            }}
          >
            {" "}
            <div
              style={{
                height: "86px",
                borderRadius: "12px",
                background: "#0d0c22",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {" "}
              <div
                style={{
                  position: "absolute",
                  left: "38%",
                  right: "0",
                  top: "32px",
                  height: "18px",
                  background: "rgba(var(--acc-rgb,99,102,241),.28)",
                  border: "1px dashed rgba(165,180,252,.7)",
                  borderRight: "0",
                }}
              />{" "}
              <div
                style={{
                  position: "absolute",
                  left: "30%",
                  top: "46px",
                  width: "8px",
                  height: "26px",
                  background: "#2fbf71",
                  borderRadius: "1px",
                }}
              />{" "}
              <div
                style={{
                  position: "absolute",
                  left: "calc(30% + 14px)",
                  top: "16px",
                  width: "8px",
                  height: "40px",
                  background: "#2fbf71",
                  borderRadius: "1px",
                }}
              />{" "}
              <div
                style={{
                  position: "absolute",
                  left: "calc(30% + 28px)",
                  top: "8px",
                  width: "8px",
                  height: "22px",
                  background: "#2fbf71",
                  borderRadius: "1px",
                }}
              />{" "}
            </div>{" "}
            <div style={{ marginTop: "16px", fontSize: "19px", fontWeight: "700", color: "#16153b" }}>
              Fair value gaps
            </div>{" "}
            <p style={{ margin: "6px 0 0", fontSize: "15.5px" }}>
              Three-candle imbalances where price moved too fast to trade both ways.
            </p>{" "}
          </div>{" "}
          <div
            data-reveal=""
            data-delay="160"
            style={{
              padding: "24px",
              borderRadius: "20px",
              background: "rgba(255,255,255,.68)",
              border: "1px solid rgba(22,21,59,.08)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,.95),0 24px 50px -34px rgba(22,21,59,.4)",
            }}
          >
            {" "}
            <div
              style={{
                height: "86px",
                borderRadius: "12px",
                background: "#0d0c22",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {" "}
              <div
                style={{
                  position: "absolute",
                  left: "12%",
                  right: "12%",
                  top: "26px",
                  borderTop: "1px dashed rgba(242,169,59,.8)",
                }}
              />{" "}
              <div
                style={{
                  position: "absolute",
                  right: "14%",
                  top: "12px",
                  font: "600 9px/1 'JetBrains Mono',monospace",
                  color: "#f2a93b",
                }}
              >
                BOS
              </div>{" "}
              <svg
                viewBox="0 0 200 86"
                preserveAspectRatio="none"
                style={{ position: "absolute", inset: "0", width: "100%", height: "100%" }}
              >
                <polyline
                  points="10,70 50,30 80,58 120,26 150,50 190,10"
                  style={{ fill: "none", stroke: "#eeedfb", strokeWidth: "1.6" }}
                />
              </svg>{" "}
            </div>{" "}
            <div style={{ marginTop: "16px", fontSize: "19px", fontWeight: "700", color: "#16153b" }}>
              Swing structure
            </div>{" "}
            <p style={{ margin: "6px 0 0", fontSize: "15.5px" }}>
              Swing highs and lows, and the breaks of structure that confirm a trend.
            </p>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "130px 24px 0" }}>
        {" "}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "48px 64px", alignItems: "center" }}>
          {" "}
          <div
            data-reveal="scale"
            style={{
              flex: "1 1 460px",
              minWidth: "0",
              padding: "22px",
              borderRadius: "22px",
              background: "rgba(255,255,255,.7)",
              border: "1px solid rgba(22,21,59,.08)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,.95),0 40px 80px -44px rgba(22,21,59,.45)",
            }}
          >
            {" "}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "12px",
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              <span style={{ fontSize: "15px", fontWeight: "700", color: "#16153b" }}>Backtest #418 · trades</span>
              <span style={{ font: "500 11.5px/1 'JetBrains Mono',monospace", color: "#5d5c7a" }}>[ ] to step</span>
            </div>{" "}
            <div
              data-seq="380"
              style={{
                marginTop: "14px",
                display: "flex",
                flexDirection: "column",
                gap: "6px",
                font: "500 12.5px/1.3 'JetBrains Mono',monospace",
              }}
            >
              {" "}
              <div
                data-i="0"
                style={{
                  display: "grid",
                  gridTemplateColumns: "44px 1fr auto",
                  gap: "10px",
                  alignItems: "center",
                  padding: "11px 12px",
                  borderRadius: "10px",
                  background: "rgba(22,21,59,.04)",
                  color: "#16153b",
                }}
              >
                <span style={{ color: "#5d5c7a" }}>#1</span>
                <span>LONG · 10:05 → 11:40</span>
                <span style={{ color: "#0f8a4b" }}>+2.0R</span>
              </div>{" "}
              <div
                data-i="1"
                style={{
                  display: "grid",
                  gridTemplateColumns: "44px 1fr auto",
                  gap: "10px",
                  alignItems: "center",
                  padding: "11px 12px",
                  borderRadius: "10px",
                  background: "rgba(22,21,59,.04)",
                  color: "#16153b",
                }}
              >
                <span style={{ color: "#5d5c7a" }}>#2</span>
                <span>LONG · 12:15 → 12:50</span>
                <span style={{ color: "#c12843" }}>−1.0R</span>
              </div>{" "}
              <div
                data-i="2"
                style={{
                  display: "grid",
                  gridTemplateColumns: "44px 1fr auto",
                  gap: "10px",
                  alignItems: "center",
                  padding: "11px 12px",
                  borderRadius: "10px",
                  background: "var(--acc-soft,#ecebff)",
                  color: "#16153b",
                }}
              >
                <span style={{ color: "var(--acc,#4f46e5)" }}>#3</span>
                <span>LONG · 13:30 → 15:15</span>
                <span style={{ color: "#0f8a4b" }}>+1.4R</span>
              </div>{" "}
              <div
                data-i="3"
                style={{
                  display: "grid",
                  gridTemplateColumns: "44px 1fr auto",
                  gap: "10px",
                  alignItems: "center",
                  padding: "11px 12px",
                  borderRadius: "10px",
                  background: "rgba(22,21,59,.04)",
                  color: "#16153b",
                }}
              >
                <span style={{ color: "#5d5c7a" }}>#4</span>
                <span>LONG · 09:45 → 10:30</span>
                <span style={{ color: "#0f8a4b" }}>+2.0R</span>
              </div>{" "}
            </div>{" "}
            <div style={{ marginTop: "12px", font: "400 11.5px/1.4 'JetBrains Mono',monospace", color: "#5d5c7a" }}>
              Sample trades, for illustration
            </div>{" "}
          </div>{" "}
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
              Backtests on the candles
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
              Step through every trade where it happened.
            </h2>{" "}
            <p style={{ margin: "20px 0 0", maxWidth: "500px", textWrap: "pretty" }}>
              Open any backtest on the chart. Entries, exits, stops and targets are drawn on the bars, with only the
              studies the strategy actually used.
            </p>{" "}
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
            bottom: "-320px",
            right: "-200px",
            width: "780px",
            height: "780px",
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
            display: "flex",
            flexWrap: "wrap",
            gap: "48px 64px",
            alignItems: "center",
          }}
        >
          {" "}
          <div data-reveal="" style={{ flex: "1 1 380px", minWidth: "0" }}>
            {" "}
            <div
              style={{
                font: "500 12px/1 'JetBrains Mono',monospace",
                letterSpacing: ".14em",
                textTransform: "uppercase",
                color: "var(--acc-lite,#a5b4fc)",
              }}
            >
              Chart assistant
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
              Ask the chart. It answers by drawing.
            </h2>{" "}
            <p style={{ margin: "20px 0 0", maxWidth: "500px", textWrap: "pretty" }}>
              Ask AI reads what is on screen and acts on it: add studies, draw levels, zoom to a session or remove what
              you no longer need.
            </p>{" "}
            <div
              style={{
                marginTop: "26px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                fontSize: "15.5px",
                color: "#eeedfb",
              }}
            >
              {" "}
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span
                  style={{
                    font: "600 11px/1 'JetBrains Mono',monospace",
                    padding: "7px 9px",
                    borderRadius: "6px",
                    background: "rgba(255,255,255,.1)",
                    color: "#fff",
                  }}
                >
                  ⌘K
                </span>
                <span>Command palette for symbols and studies</span>
              </div>{" "}
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span
                  style={{
                    font: "600 11px/1 'JetBrains Mono',monospace",
                    padding: "7px 9px",
                    borderRadius: "6px",
                    background: "rgba(255,255,255,.1)",
                    color: "#fff",
                  }}
                >
                  1–6
                </span>
                <span>Timeframes from 1m to 1D</span>
              </div>{" "}
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span
                  style={{
                    font: "600 11px/1 'JetBrains Mono',monospace",
                    padding: "7px 9px",
                    borderRadius: "6px",
                    background: "rgba(255,255,255,.1)",
                    color: "#fff",
                  }}
                >
                  [ ]
                </span>
                <span>Previous and next backtest trade</span>
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div
            data-reveal="scale"
            style={{
              flex: "1 1 420px",
              minWidth: "0",
              borderRadius: "20px",
              background: "rgba(255,255,255,.05)",
              border: "1px solid rgba(255,255,255,.1)",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            {" "}
            <div
              style={{
                alignSelf: "flex-end",
                maxWidth: "85%",
                padding: "12px 14px",
                borderRadius: "14px 14px 4px 14px",
                background: "var(--acc,#4f46e5)",
                color: "#fff",
                fontSize: "15px",
              }}
            >
              <span data-type="">Draw a dashed red line at 806 and add RSI 14.</span>
            </div>{" "}
            <div
              style={{
                maxWidth: "85%",
                padding: "12px 14px",
                borderRadius: "14px 14px 14px 4px",
                background: "#17163a",
                border: "1px solid rgba(255,255,255,.08)",
                color: "#eeedfb",
                fontSize: "15px",
              }}
            >
              Done. Line saved at 806.00 and RSI 14 added below the price pane.
            </div>{" "}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "6px",
                font: "500 11.5px/1 'JetBrains Mono',monospace",
                color: "#7fe0aa",
              }}
            >
              <span style={{ padding: "6px 9px", borderRadius: "6px", background: "rgba(47,191,113,.1)" }}>
                + hline 806.00
              </span>
              <span style={{ padding: "6px 9px", borderRadius: "6px", background: "rgba(47,191,113,.1)" }}>
                + study RSI(14)
              </span>
            </div>{" "}
            <div
              style={{
                marginTop: "6px",
                padding: "12px 14px",
                borderRadius: "12px",
                background: "rgba(255,255,255,.04)",
                border: "1px solid rgba(255,255,255,.08)",
                font: "400 12.5px/1 'JetBrains Mono',monospace",
                color: "#8e8cb3",
              }}
            >
              Ask about this chart…
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "130px 24px 0" }}>
        {" "}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "28px 40px" }}>
          {" "}
          <div data-reveal="">
            <div style={{ fontSize: "19px", fontWeight: "700", color: "#16153b" }}>Streams over WebSockets</div>
            <p style={{ margin: "8px 0 0", fontSize: "16px" }}>
              Ticks and forming bars arrive live from Fyers and Delta WebSockets without page reloads.
            </p>
          </div>{" "}
          <div data-reveal="" data-delay="70">
            <div style={{ fontSize: "19px", fontWeight: "700", color: "#16153b" }}>Your layout remembers</div>
            <p style={{ margin: "8px 0 0", fontSize: "16px" }}>
              Timeframe, studies, style and drawings are saved per user and instrument.
            </p>
          </div>{" "}
          <div data-reveal="" data-delay="140">
            <div style={{ fontSize: "19px", fontWeight: "700", color: "#16153b" }}>Pre-trade order preview ticket</div>
            <p style={{ margin: "8px 0 0", fontSize: "16px" }}>
              Computes suggested sizing, notional risk, statutory charges, and verifies all 6 risk checks before
              placement.
            </p>
          </div>{" "}
          <div data-reveal="" data-delay="210">
            <div style={{ fontSize: "19px", fontWeight: "700", color: "#16153b" }}>Control runners from here</div>
            <p style={{ margin: "8px 0 0", fontSize: "16px" }}>
              Watch a runner and square off its positions without leaving the chart. One-click orders stay paper-only.
            </p>
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
              Next: research
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
              Pair the chart with an AI research desk.
            </h2>{" "}
          </div>{" "}
          <div
            style={{ position: "relative", flex: "0 1 280px", display: "flex", flexDirection: "column", gap: "12px" }}
          >
            {" "}
            <Link
              className="hv1"
              href="/research"
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
              Explore research →
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
