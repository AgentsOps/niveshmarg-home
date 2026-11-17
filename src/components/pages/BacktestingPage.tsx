import Link from "next/link";
import MotionRoot from "@/components/MotionRoot";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

// Generated from UI_PROTO/Backtesting.dc.html.
const SKIN = "Indigo sky";

export default function BacktestingPage() {
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
          top: "-240px",
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
          top: "200px",
          right: "-260px",
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          background: "radial-gradient(circle,rgba(242,169,59,.14),rgba(242,169,59,0) 68%)",
          pointerEvents: "none",
        }}
      />{" "}
      <div style={{ position: "sticky", top: "12px", zIndex: "50" }}>
        <SiteNav active="backtesting" />
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
              Backtesting &amp; Optimization
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
              The backtest that tells you no.
            </h1>{" "}
            <p data-reveal="" data-delay="160" style={{ margin: "22px 0 0", maxWidth: "520px", textWrap: "pretty" }}>
              Most retail backtests look great because they peek ahead, fill optimistically and forget fees. Ours
              can&apos;t do any of that, so a good result here means something.
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
                href="#case"
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
                Read a case study
              </a>{" "}
            </div>{" "}
          </div>{" "}
          <div data-reveal="scale" data-delay="200" style={{ flex: "1 1 480px", minWidth: "0" }}>
            {" "}
            <div
              data-tilt=""
              style={{
                borderRadius: "22px",
                background: "rgba(255,255,255,.72)",
                border: "1px solid rgba(22,21,59,.08)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,.95),0 50px 90px -46px rgba(22,21,59,.5)",
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
                  gap: "8px",
                }}
              >
                <span style={{ fontSize: "15px", fontWeight: "700", color: "#16153b" }}>
                  Run detail · EMA Pullback v3
                </span>
                <span
                  style={{
                    font: "600 11px/1 'JetBrains Mono',monospace",
                    padding: "6px 9px",
                    borderRadius: "999px",
                    background: "rgba(15,138,75,.1)",
                    color: "#0f8a4b",
                  }}
                >
                  Completed
                </span>
              </div>{" "}
              <div
                style={{
                  marginTop: "12px",
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
                    style={{
                      width: "14px",
                      height: "3px",
                      borderRadius: "2px",
                      background: "#9a99b5",
                      display: "block",
                    }}
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
                style={{ display: "block", width: "100%", height: "220px", marginTop: "8px" }}
              />{" "}
              <div
                style={{
                  marginTop: "12px",
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit,minmax(96px,1fr))",
                  gap: "8px",
                }}
              >
                {" "}
                <div style={{ padding: "11px", borderRadius: "12px", background: "rgba(22,21,59,.04)" }}>
                  <div style={{ fontSize: "12px", color: "#5d5c7a" }}>CAGR</div>
                  <div style={{ marginTop: "3px", fontSize: "18px", fontWeight: "700", color: "#16153b" }}>
                    <span data-count="24.5" data-dec="1" data-suf="%">
                      24.5%
                    </span>
                  </div>
                </div>{" "}
                <div style={{ padding: "11px", borderRadius: "12px", background: "rgba(22,21,59,.04)" }}>
                  <div style={{ fontSize: "12px", color: "#5d5c7a" }}>Sharpe</div>
                  <div style={{ marginTop: "3px", fontSize: "18px", fontWeight: "700", color: "#16153b" }}>
                    <span data-count="1.82" data-dec="2">
                      1.82
                    </span>
                  </div>
                </div>{" "}
                <div style={{ padding: "11px", borderRadius: "12px", background: "rgba(22,21,59,.04)" }}>
                  <div style={{ fontSize: "12px", color: "#5d5c7a" }}>Max DD</div>
                  <div style={{ marginTop: "3px", fontSize: "18px", fontWeight: "700", color: "#d22f4a" }}>
                    <span data-count="7.8" data-dec="1" data-pre="−" data-suf="%">
                      −7.8%
                    </span>
                  </div>
                </div>{" "}
                <div style={{ padding: "11px", borderRadius: "12px", background: "rgba(22,21,59,.04)" }}>
                  <div style={{ fontSize: "12px", color: "#5d5c7a" }}>Win rate</div>
                  <div style={{ marginTop: "3px", fontSize: "18px", fontWeight: "700", color: "#16153b" }}>
                    <span data-count="64.2" data-dec="1" data-suf="%">
                      64.2%
                    </span>
                  </div>
                </div>{" "}
              </div>{" "}
              <div style={{ marginTop: "10px", font: "400 11.5px/1.4 'JetBrains Mono',monospace", color: "#5d5c7a" }}>
                Sample run, for illustration
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
            Three invariants
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
            Rules that apply to every run. None can be switched off.
          </h2>{" "}
        </div>{" "}
        <div
          style={{
            marginTop: "44px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: "16px",
          }}
        >
          {" "}
          <div
            data-reveal=""
            style={{
              padding: "26px",
              borderRadius: "22px",
              background: "rgba(255,255,255,.68)",
              border: "1px solid rgba(22,21,59,.08)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,.95),0 24px 50px -34px rgba(22,21,59,.4)",
            }}
          >
            {" "}
            <div
              style={{
                font: "700 44px/1 'JetBrains Mono',monospace",
                letterSpacing: "-.04em",
                color: "var(--acc,#4f46e5)",
              }}
            >
              T+1
            </div>{" "}
            <div style={{ marginTop: "18px", fontSize: "21px", fontWeight: "700", color: "#16153b" }}>
              Zero look-ahead
            </div>{" "}
            <p style={{ margin: "8px 0 0", fontSize: "16px" }}>
              Conditions evaluate on the close of bar T. Orders fill at the open of bar T+1. Exits on a condition also
              wait for the next open.
            </p>{" "}
          </div>{" "}
          <div
            data-reveal=""
            data-delay="90"
            style={{
              padding: "26px",
              borderRadius: "22px",
              background: "rgba(255,255,255,.68)",
              border: "1px solid rgba(22,21,59,.08)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,.95),0 24px 50px -34px rgba(22,21,59,.4)",
            }}
          >
            {" "}
            <div style={{ display: "flex", alignItems: "center", gap: "14px", height: "44px" }}>
              {" "}
              <div style={{ position: "relative", width: "16px", height: "44px" }}>
                <div
                  style={{
                    position: "absolute",
                    left: "7px",
                    top: "0",
                    bottom: "0",
                    width: "2px",
                    background: "#16153b",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    left: "0",
                    top: "12px",
                    width: "16px",
                    height: "20px",
                    background: "#d22f4a",
                    borderRadius: "2px",
                  }}
                />
              </div>{" "}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                  font: "600 11px/1 'JetBrains Mono',monospace",
                }}
              >
                <span style={{ color: "#0f8a4b" }}>TP touched</span>
                <span style={{ color: "#c12843" }}>SL touched → SL wins</span>
              </div>{" "}
            </div>{" "}
            <div style={{ marginTop: "18px", fontSize: "21px", fontWeight: "700", color: "#16153b" }}>
              Pessimistic fills
            </div>{" "}
            <p style={{ margin: "8px 0 0", fontSize: "16px" }}>
              If one candle&apos;s range crosses both the stop and the target, the engine assumes the stop was hit
              first.
            </p>{" "}
          </div>{" "}
          <div
            data-reveal=""
            data-delay="180"
            style={{
              padding: "26px",
              borderRadius: "22px",
              background: "rgba(255,255,255,.68)",
              border: "1px solid rgba(22,21,59,.08)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,.95),0 24px 50px -34px rgba(22,21,59,.4)",
            }}
          >
            {" "}
            <div
              style={{
                font: "700 44px/1 'JetBrains Mono',monospace",
                letterSpacing: "-.04em",
                color: "var(--acc,#4f46e5)",
              }}
            >
              ₹ − fees
            </div>{" "}
            <div style={{ marginTop: "18px", fontSize: "21px", fontWeight: "700", color: "#16153b" }}>
              Real Indian costs
            </div>{" "}
            <div style={{ marginTop: "10px", display: "flex", flexDirection: "column", fontSize: "14.5px" }}>
              {" "}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "10px",
                  padding: "7px 0",
                  borderTop: "1px solid rgba(22,21,59,.08)",
                }}
              >
                <span>STT, intraday sell</span>
                <span style={{ font: "600 12.5px/1.6 'JetBrains Mono',monospace", color: "#16153b" }}>0.025%</span>
              </div>{" "}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "10px",
                  padding: "7px 0",
                  borderTop: "1px solid rgba(22,21,59,.08)",
                }}
              >
                <span>STT, delivery buy &amp; sell</span>
                <span style={{ font: "600 12.5px/1.6 'JetBrains Mono',monospace", color: "#16153b" }}>0.1%</span>
              </div>{" "}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "10px",
                  padding: "7px 0",
                  borderTop: "1px solid rgba(22,21,59,.08)",
                }}
              >
                <span>Exchange, GST, SEBI, stamp</span>
                <span style={{ font: "600 12.5px/1.6 'JetBrains Mono',monospace", color: "#16153b" }}>every fill</span>
              </div>{" "}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "10px",
                  padding: "7px 0",
                  borderTop: "1px solid rgba(22,21,59,.08)",
                }}
              >
                <span>Slippage</span>
                <span style={{ font: "600 12.5px/1.6 'JetBrains Mono',monospace", color: "#16153b" }}>modelled</span>
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
              Data before every run
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
              No run starts on a guess about the data.
            </h2>{" "}
          </div>{" "}
          <p
            data-reveal=""
            data-delay="100"
            style={{ flex: "1 1 300px", maxWidth: "420px", margin: "0", textWrap: "pretty" }}
          >
            Every session in the period is checked against stored bars. Only the gaps are fetched, then cleaned before
            the simulation begins.
          </p>{" "}
        </div>{" "}
        <div
          data-seq="520"
          data-reveal=""
          style={{
            marginTop: "40px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(170px,1fr))",
            gap: "10px",
          }}
        >
          {" "}
          <div
            data-i="0"
            style={{
              padding: "18px",
              borderRadius: "16px",
              background: "rgba(255,255,255,.7)",
              border: "1px solid rgba(22,21,59,.08)",
            }}
          >
            <div style={{ font: "600 11px/1 'JetBrains Mono',monospace", color: "#5d5c7a" }}>01</div>
            <div style={{ marginTop: "12px", fontSize: "16px", fontWeight: "700", color: "#16153b" }}>Pending</div>
            <div style={{ marginTop: "4px", fontSize: "14px" }}>Queued to a worker</div>
          </div>{" "}
          <div
            data-i="1"
            style={{
              padding: "18px",
              borderRadius: "16px",
              background: "rgba(255,255,255,.7)",
              border: "1px solid rgba(22,21,59,.08)",
            }}
          >
            <div style={{ font: "600 11px/1 'JetBrains Mono',monospace", color: "#5d5c7a" }}>02</div>
            <div style={{ marginTop: "12px", fontSize: "16px", fontWeight: "700", color: "#16153b" }}>
              Checking history
            </div>
            <div style={{ marginTop: "4px", fontSize: "14px" }}>Every NSE session compared</div>
          </div>{" "}
          <div
            data-i="2"
            style={{
              padding: "18px",
              borderRadius: "16px",
              background: "rgba(255,255,255,.7)",
              border: "1px solid rgba(22,21,59,.08)",
            }}
          >
            <div style={{ font: "600 11px/1 'JetBrains Mono',monospace", color: "#5d5c7a" }}>03</div>
            <div style={{ marginTop: "12px", fontSize: "16px", fontWeight: "700", color: "#16153b" }}>
              Fetching candles
            </div>
            <div style={{ marginTop: "4px", fontSize: "14px" }}>Only the missing ranges</div>
          </div>{" "}
          <div
            data-i="3"
            style={{
              padding: "18px",
              borderRadius: "16px",
              background: "rgba(255,255,255,.7)",
              border: "1px solid rgba(22,21,59,.08)",
            }}
          >
            <div style={{ font: "600 11px/1 'JetBrains Mono',monospace", color: "#5d5c7a" }}>04</div>
            <div style={{ marginTop: "12px", fontSize: "16px", fontWeight: "700", color: "#16153b" }}>Validating</div>
            <div style={{ marginTop: "4px", fontSize: "14px" }}>Bad and duplicate bars dropped</div>
          </div>{" "}
          <div
            data-i="4"
            style={{
              padding: "18px",
              borderRadius: "16px",
              background: "rgba(255,255,255,.7)",
              border: "1px solid rgba(22,21,59,.08)",
            }}
          >
            <div style={{ font: "600 11px/1 'JetBrains Mono',monospace", color: "#5d5c7a" }}>05</div>
            <div style={{ marginTop: "12px", fontSize: "16px", fontWeight: "700", color: "#16153b" }}>Running</div>
            <div style={{ marginTop: "4px", fontSize: "14px" }}>The simulation itself</div>
          </div>{" "}
          <div
            data-i="5"
            style={{
              padding: "18px",
              borderRadius: "16px",
              background: "var(--acc,#4f46e5)",
              border: "1px solid transparent",
              color: "#fff",
            }}
          >
            <div style={{ font: "600 11px/1 'JetBrains Mono',monospace", color: "#fff" }}>06</div>
            <div style={{ marginTop: "12px", fontSize: "16px", fontWeight: "700" }}>Completed</div>
            <div style={{ marginTop: "4px", fontSize: "14px" }}>Results, or the exact reason it failed</div>
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
          <div style={{ display: "flex", flexWrap: "wrap", gap: "48px 64px", alignItems: "center" }}>
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
                Walk-forward optimization
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
                Tune on the past. Test on data it has never seen.
              </h2>{" "}
              <p style={{ margin: "20px 0 0", maxWidth: "500px", textWrap: "pretty" }}>
                Parameters are optimised on an in-sample slice and judged on the out-of-sample window that follows,
                rolling forward through time. Overfit settings fall apart here, not in your account.
              </p>{" "}
              <div style={{ marginTop: "24px", display: "flex", flexWrap: "wrap", gap: "24px" }}>
                {" "}
                <div>
                  <div style={{ font: "700 30px/1 'JetBrains Mono',monospace", color: "#fff" }}>1–6</div>
                  <div style={{ marginTop: "6px", fontSize: "14px" }}>rolling windows</div>
                </div>{" "}
                <div>
                  <div style={{ font: "700 30px/1 'JetBrains Mono',monospace", color: "#fff" }}>30–90%</div>
                  <div style={{ marginTop: "6px", fontSize: "14px" }}>in-sample share</div>
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div
              data-reveal="scale"
              style={{
                flex: "1 1 460px",
                minWidth: "0",
                padding: "22px",
                borderRadius: "20px",
                background: "rgba(255,255,255,.04)",
                border: "1px solid rgba(255,255,255,.1)",
              }}
            >
              {" "}
              <div style={{ font: "600 11px/1 'JetBrains Mono',monospace", letterSpacing: ".12em", color: "#8e8cb3" }}>
                ROLLING WINDOWS
              </div>{" "}
              <div
                style={{
                  marginTop: "14px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  font: "500 11px/1 'JetBrains Mono',monospace",
                }}
              >
                {" "}
                <div style={{ display: "flex", gap: "4px", height: "26px" }}>
                  <div
                    style={{
                      flex: "7",
                      borderRadius: "6px",
                      background: "rgba(165,180,252,.25)",
                      display: "flex",
                      alignItems: "center",
                      paddingLeft: "8px",
                      color: "#eeedfb",
                    }}
                  >
                    in-sample
                  </div>
                  <div
                    style={{
                      flex: "3",
                      borderRadius: "6px",
                      background: "var(--acc,#4f46e5)",
                      display: "flex",
                      alignItems: "center",
                      paddingLeft: "8px",
                      color: "#fff",
                    }}
                  >
                    OOS 1
                  </div>
                  <div style={{ flex: "6" }} />
                </div>{" "}
                <div style={{ display: "flex", gap: "4px", height: "26px" }}>
                  <div style={{ flex: "3" }} />
                  <div style={{ flex: "7", borderRadius: "6px", background: "rgba(165,180,252,.25)" }} />
                  <div
                    style={{
                      flex: "3",
                      borderRadius: "6px",
                      background: "var(--acc,#4f46e5)",
                      display: "flex",
                      alignItems: "center",
                      paddingLeft: "8px",
                      color: "#fff",
                    }}
                  >
                    OOS 2
                  </div>
                  <div style={{ flex: "3" }} />
                </div>{" "}
                <div style={{ display: "flex", gap: "4px", height: "26px" }}>
                  <div style={{ flex: "6" }} />
                  <div style={{ flex: "7", borderRadius: "6px", background: "rgba(165,180,252,.25)" }} />
                  <div
                    style={{
                      flex: "3",
                      borderRadius: "6px",
                      background: "var(--acc,#4f46e5)",
                      display: "flex",
                      alignItems: "center",
                      paddingLeft: "8px",
                      color: "#fff",
                    }}
                  >
                    OOS 3
                  </div>
                </div>{" "}
              </div>{" "}
              <div
                style={{
                  marginTop: "22px",
                  font: "600 11px/1 'JetBrains Mono',monospace",
                  letterSpacing: ".12em",
                  color: "#8e8cb3",
                }}
              >
                PARAMETER GRID · FAST EMA × STOP ATR
              </div>{" "}
              <canvas
                data-chart="heat"
                data-cols="10"
                data-rows="5"
                style={{ display: "block", width: "100%", height: "170px", marginTop: "12px" }}
              />{" "}
              <div
                style={{
                  marginTop: "10px",
                  display: "flex",
                  justifyContent: "space-between",
                  font: "400 11px/1 'JetBrains Mono',monospace",
                  color: "#8e8cb3",
                }}
              >
                <span>weaker</span>
                <span>stronger, with stable neighbours</span>
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div
            style={{
              marginTop: "56px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
              gap: "14px",
            }}
          >
            {" "}
            <div
              data-reveal=""
              style={{ padding: "20px", borderRadius: "16px", border: "1px solid rgba(255,255,255,.1)" }}
            >
              <div style={{ fontSize: "18px", fontWeight: "700", color: "#fff" }}>Compare up to six runs</div>
              <div style={{ marginTop: "6px", fontSize: "14.5px" }}>
                P&amp;L, CAGR, drawdown, Sharpe, Sortino, win rate and profit factor side by side.
              </div>
            </div>{" "}
            <div
              data-reveal=""
              data-delay="80"
              style={{ padding: "20px", borderRadius: "16px", border: "1px solid rgba(255,255,255,.1)" }}
            >
              <div style={{ fontSize: "18px", fontWeight: "700", color: "#fff" }}>Portfolio backtests</div>
              <div style={{ marginTop: "6px", fontSize: "14.5px" }}>
                One strategy across many instruments sharing one pool of capital, with correlation analysis.
              </div>
            </div>{" "}
            <div
              data-reveal=""
              data-delay="160"
              style={{ padding: "20px", borderRadius: "16px", border: "1px solid rgba(255,255,255,.1)" }}
            >
              <div style={{ fontSize: "18px", fontWeight: "700", color: "#fff" }}>Open on chart</div>
              <div style={{ marginTop: "6px", fontSize: "14.5px" }}>
                Jump from any run to its trades drawn on the candles.
              </div>
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <section id="case" style={{ maxWidth: "1200px", margin: "0 auto", padding: "140px 24px 0" }}>
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
              Case study · BTCUSD EMA crossover
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
              Profitable on price. Ruined by costs.
            </h2>{" "}
          </div>{" "}
          <p
            data-reveal=""
            data-delay="100"
            style={{ flex: "1 1 300px", maxWidth: "420px", margin: "0", textWrap: "pretty" }}
          >
            An EMA 10/20 cross on 5-minute crypto bars, run for one year. Here is what an honest engine showed us.
          </p>{" "}
        </div>{" "}
        <div
          style={{
            marginTop: "44px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))",
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
            <div
              style={{
                fontSize: "clamp(34px,4vw,46px)",
                fontWeight: "800",
                letterSpacing: "-.04em",
                lineHeight: "1",
                color: "#0f8a4b",
              }}
            >
              +₹
              <span data-count="2.9" data-dec="1">
                2.9
              </span>
              L
            </div>
            <div style={{ marginTop: "10px", fontSize: "15px" }}>raw price P&amp;L before friction</div>
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
            <div
              style={{
                fontSize: "clamp(34px,4vw,46px)",
                fontWeight: "800",
                letterSpacing: "-.04em",
                lineHeight: "1",
                color: "#c12843",
              }}
            >
              −₹<span data-count="36">36</span>L
            </div>
            <div style={{ marginTop: "10px", fontSize: "15px" }}>lost to slippage at 5 bps a fill</div>
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
            <div
              style={{
                fontSize: "clamp(34px,4vw,46px)",
                fontWeight: "800",
                letterSpacing: "-.04em",
                lineHeight: "1",
                color: "#c12843",
              }}
            >
              −₹<span data-count="50">50</span>L
            </div>
            <div style={{ marginTop: "10px", fontSize: "15px" }}>lost to exchange charges</div>
          </div>{" "}
          <div
            data-reveal=""
            data-delay="240"
            style={{
              padding: "24px",
              borderRadius: "20px",
              background: "rgba(255,255,255,.68)",
              border: "1px solid rgba(22,21,59,.08)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,.95),0 24px 50px -34px rgba(22,21,59,.4)",
            }}
          >
            <div
              style={{
                fontSize: "clamp(34px,4vw,46px)",
                fontWeight: "800",
                letterSpacing: "-.04em",
                lineHeight: "1",
                color: "#16153b",
              }}
            >
              <span data-count="83" data-suf="%">
                83%
              </span>
            </div>
            <div style={{ marginTop: "10px", fontSize: "15px" }}>
              of losers saw the opposite cross before their stop
            </div>
          </div>{" "}
        </div>{" "}
        <div
          data-reveal=""
          style={{
            marginTop: "16px",
            padding: "28px",
            borderRadius: "22px",
            background: "var(--acc-soft,#ecebff)",
            display: "flex",
            flexWrap: "wrap",
            gap: "20px 48px",
            alignItems: "center",
          }}
        >
          {" "}
          <div style={{ flex: "1 1 380px", minWidth: "0" }}>
            <div
              style={{
                font: "600 11px/1 'JetBrains Mono',monospace",
                letterSpacing: ".12em",
                color: "var(--acc,#4f46e5)",
              }}
            >
              WHAT CHANGED
            </div>
            <div
              style={{ marginTop: "10px", fontSize: "19px", fontWeight: "600", color: "#16153b", textWrap: "pretty" }}
            >
              The same cross on 4-hour bars, only when ADX(14) is above 20, with a 3× ATR stop. Two orders of magnitude
              fewer trades, and winners left to run.
            </div>
          </div>{" "}
          <div style={{ flex: "0 1 300px", fontSize: "15px", color: "#3d3c5c" }}>
            Only 45 trades in three years, chosen after about fifty variants. Paper trade it before any live runner.
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
              Next: run it
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
              Passed the backtest? Paper trade it under live risk checks.
            </h2>{" "}
          </div>{" "}
          <div
            style={{ position: "relative", flex: "0 1 280px", display: "flex", flexDirection: "column", gap: "12px" }}
          >
            {" "}
            <Link
              className="hv1"
              href="/live"
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
              Explore live &amp; risk →
            </Link>{" "}
            <Link
              className="hv2"
              href="/strategies"
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
              See validated strategies
            </Link>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <SiteFooter />{" "}
    </MotionRoot>
  );
}
