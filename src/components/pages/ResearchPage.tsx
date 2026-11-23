import Link from "next/link";
import MotionRoot from "@/components/MotionRoot";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

// Generated from UI_PROTO/Research.dc.html.
const SKIN = "Indigo sky";

export default function ResearchPage() {
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
          right: "-200px",
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
          top: "80px",
          left: "-260px",
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          background: "radial-gradient(circle,rgba(183,155,255,.2),rgba(183,155,255,0) 68%)",
          pointerEvents: "none",
        }}
      />{" "}
      <div style={{ position: "sticky", top: "12px", zIndex: "50" }}>
        <SiteNav active="research" />
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
          AI Research Desk
        </div>{" "}
        <h1
          data-reveal=""
          data-delay="80"
          style={{
            margin: "22px auto 0",
            maxWidth: "920px",
            fontSize: "clamp(38px,6vw,76px)",
            lineHeight: "1",
            letterSpacing: "-.045em",
            fontWeight: "800",
            color: "#16153b",
            textWrap: "balance",
          }}
        >
          A research team that never sleeps, and never trades.
        </h1>{" "}
        <p data-reveal="" data-delay="160" style={{ margin: "22px auto 0", maxWidth: "640px", textWrap: "pretty" }}>
          Specialist AI agents write stock reports, read the morning news and label the market regime. Swing scans and a
          screener find what is worth a closer look.
        </p>{" "}
        <div
          data-reveal=""
          data-delay="220"
          style={{
            marginTop: "30px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "8px",
            font: "500 13px/1 'JetBrains Mono',monospace",
          }}
        >
          {" "}
          <a
            className="hv5"
            href="#reports"
            style={{
              padding: "10px 14px",
              borderRadius: "999px",
              background: "rgba(255,255,255,.75)",
              border: "1px solid rgba(22,21,59,.1)",
              color: "#16153b",
            }}
          >
            Stock reports
          </a>{" "}
          <a
            className="hv5"
            href="#regime"
            style={{
              padding: "10px 14px",
              borderRadius: "999px",
              background: "rgba(255,255,255,.75)",
              border: "1px solid rgba(22,21,59,.1)",
              color: "#16153b",
            }}
          >
            Market regime
          </a>{" "}
          <a
            className="hv5"
            href="#swing"
            style={{
              padding: "10px 14px",
              borderRadius: "999px",
              background: "rgba(255,255,255,.75)",
              border: "1px solid rgba(22,21,59,.1)",
              color: "#16153b",
            }}
          >
            Swing suite
          </a>{" "}
          <a
            className="hv5"
            href="#screener"
            style={{
              padding: "10px 14px",
              borderRadius: "999px",
              background: "rgba(255,255,255,.75)",
              border: "1px solid rgba(22,21,59,.1)",
              color: "#16153b",
            }}
          >
            Screener
          </a>{" "}
        </div>{" "}
        <div
          id="reports"
          data-reveal="scale"
          data-delay="260"
          style={{ margin: "56px auto 0", maxWidth: "1100px", textAlign: "left" }}
        >
          {" "}
          <div
            data-tilt=""
            style={{
              borderRadius: "22px",
              background: "rgba(255,255,255,.72)",
              border: "1px solid rgba(22,21,59,.08)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,.95),0 60px 110px -50px rgba(22,21,59,.5)",
              backdropFilter: "blur(14px)",
              padding: "clamp(18px,3vw,30px)",
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
              <div>
                <div style={{ fontSize: "20px", fontWeight: "700", color: "#16153b" }}>
                  AI stock report · NSE:SBIN-EQ
                </div>
                <div style={{ marginTop: "3px", font: "400 12px/1.4 'JetBrains Mono',monospace", color: "#5d5c7a" }}>
                  Sample report, for illustration
                </div>
              </div>
              <span
                style={{
                  font: "600 11px/1 'JetBrains Mono',monospace",
                  padding: "7px 10px",
                  borderRadius: "999px",
                  background: "rgba(15,138,75,.1)",
                  color: "#0f8a4b",
                }}
              >
                Completed
              </span>
            </div>{" "}
            <div
              data-seq="420"
              style={{
                marginTop: "22px",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
                gap: "12px",
              }}
            >
              {" "}
              <div data-i="0" style={{ padding: "16px", borderRadius: "14px", background: "rgba(22,21,59,.04)" }}>
                <div style={{ font: "600 11px/1 'JetBrains Mono',monospace", letterSpacing: ".1em", color: "#5d5c7a" }}>
                  FUNDAMENTAL
                </div>
                <div style={{ marginTop: "10px", fontSize: "14.5px", color: "#16153b" }}>
                  Debt-to-equity, ROE, ROCE, cash conversion, valuation vs industry
                </div>
              </div>{" "}
              <div data-i="1" style={{ padding: "16px", borderRadius: "14px", background: "rgba(22,21,59,.04)" }}>
                <div style={{ font: "600 11px/1 'JetBrains Mono',monospace", letterSpacing: ".1em", color: "#5d5c7a" }}>
                  TECHNICAL
                </div>
                <div style={{ marginTop: "10px", fontSize: "14.5px", color: "#16153b" }}>
                  Trend, momentum and key levels from the chart
                </div>
              </div>{" "}
              <div data-i="2" style={{ padding: "16px", borderRadius: "14px", background: "rgba(22,21,59,.04)" }}>
                <div style={{ font: "600 11px/1 'JetBrains Mono',monospace", letterSpacing: ".1em", color: "#5d5c7a" }}>
                  NEWS
                </div>
                <div style={{ marginTop: "10px", fontSize: "14.5px", color: "#16153b" }}>
                  Headlines scored Bullish, Neutral or Bearish
                </div>
              </div>{" "}
              <div data-i="3" style={{ padding: "16px", borderRadius: "14px", background: "rgba(22,21,59,.04)" }}>
                <div style={{ font: "600 11px/1 'JetBrains Mono',monospace", letterSpacing: ".1em", color: "#5d5c7a" }}>
                  RISK AUDITOR
                </div>
                <div style={{ marginTop: "10px", fontSize: "14.5px", color: "#16153b" }}>
                  Challenges the other three before any verdict
                </div>
              </div>{" "}
            </div>{" "}
            <div data-seq="420" style={{ marginTop: "12px" }}>
              <div
                data-i="4"
                style={{
                  padding: "18px",
                  borderRadius: "14px",
                  background: "var(--acc,#4f46e5)",
                  color: "#fff",
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <span style={{ font: "600 11px/1 'JetBrains Mono',monospace", letterSpacing: ".1em" }}>
                  SYNTHESIZER → VERDICT
                </span>
                <span style={{ fontSize: "15px" }}>If any specialist fails, no verdict is written.</span>
              </div>
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
            A trading day, prepared
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
            The desk works on a schedule, in IST.
          </h2>{" "}
        </div>{" "}
        <div
          style={{
            marginTop: "44px",
            position: "relative",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
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
            <div style={{ font: "700 30px/1 'JetBrains Mono',monospace", color: "var(--acc,#4f46e5)" }}>07:00</div>
            <div style={{ marginTop: "14px", fontSize: "18px", fontWeight: "700", color: "#16153b" }}>
              Morning news scout
            </div>
            <p style={{ margin: "6px 0 0", fontSize: "15px" }}>
              Overnight S&amp;P 500, Nasdaq, Brent and USD/INR, plus NIFTY&apos;s last close.
            </p>
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
            <div style={{ font: "700 30px/1 'JetBrains Mono',monospace", color: "var(--acc,#4f46e5)" }}>08:50</div>
            <div style={{ marginTop: "14px", fontSize: "18px", fontWeight: "700", color: "#16153b" }}>
              Regime classified
            </div>
            <p style={{ margin: "6px 0 0", fontSize: "15px" }}>
              NIFTY 50 gets the day&apos;s regime label before the open.
            </p>
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
            <div style={{ font: "700 30px/1 'JetBrains Mono',monospace", color: "var(--acc,#4f46e5)" }}>17:00+</div>
            <div style={{ marginTop: "14px", fontSize: "18px", fontWeight: "700", color: "#16153b" }}>
              Evening swing scan
            </div>
            <p style={{ margin: "6px 0 0", fontSize: "15px" }}>
              Setups for the next session, each with its entry and stop.
            </p>
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
            <div style={{ font: "700 30px/1 'JetBrains Mono',monospace", color: "var(--acc,#4f46e5)" }}>18:30</div>
            <div style={{ marginTop: "14px", fontSize: "18px", fontWeight: "700", color: "#16153b" }}>
              Screener refreshed
            </div>
            <p style={{ margin: "6px 0 0", fontSize: "15px" }}>
              Fundamentals and momentum recomputed for the whole universe.
            </p>
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <section
        id="regime"
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
              Market regime
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
              Trade trend strategies only when there&apos;s a trend.
            </h2>{" "}
            <p style={{ margin: "20px 0 0", maxWidth: "500px", textWrap: "pretty" }}>
              Strategies that shine in trends bleed in ranges. Drop a Market Regime Filter node into any strategy and it
              only fires in the regimes you choose.
            </p>{" "}
          </div>{" "}
          <div
            data-reveal="scale"
            style={{
              flex: "1 1 420px",
              minWidth: "0",
              padding: "22px",
              borderRadius: "20px",
              background: "rgba(255,255,255,.04)",
              border: "1px solid rgba(255,255,255,.1)",
            }}
          >
            {" "}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "10px",
                font: "600 11px/1 'JetBrains Mono',monospace",
                letterSpacing: ".12em",
                color: "#8e8cb3",
              }}
            >
              <span>NIFTY 50 · TODAY</span>
              <span>08:50 IST</span>
            </div>{" "}
            <div
              data-seq="500"
              style={{
                marginTop: "16px",
                display: "flex",
                flexDirection: "column",
                gap: "6px",
                fontSize: "16px",
                color: "#eeedfb",
              }}
            >
              {" "}
              <div
                data-i="0"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "12px 14px",
                  borderRadius: "10px",
                  background: "var(--acc,#4f46e5)",
                  color: "#fff",
                }}
              >
                <span style={{ fontWeight: "600" }}>Trending Bullish</span>
                <span style={{ font: "600 12px/1 'JetBrains Mono',monospace" }}>0.82</span>
              </div>{" "}
              <div
                data-i="1"
                style={{ padding: "12px 14px", borderRadius: "10px", background: "rgba(255,255,255,.04)" }}
              >
                Trending Bearish
              </div>{" "}
              <div
                data-i="2"
                style={{ padding: "12px 14px", borderRadius: "10px", background: "rgba(255,255,255,.04)" }}
              >
                Ranging / Consolidation
              </div>{" "}
              <div
                data-i="3"
                style={{ padding: "12px 14px", borderRadius: "10px", background: "rgba(255,255,255,.04)" }}
              >
                High Volatility / Expansion
              </div>{" "}
              <div
                data-i="4"
                style={{ padding: "12px 14px", borderRadius: "10px", background: "rgba(255,255,255,.04)" }}
              >
                Low Volatility / Compression
              </div>{" "}
            </div>{" "}
            <div style={{ marginTop: "12px", font: "400 11.5px/1.4 'JetBrains Mono',monospace", color: "#8e8cb3" }}>
              Label and confidence shown for illustration
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <section id="swing" style={{ maxWidth: "1200px", margin: "0 auto", padding: "130px 24px 0" }}>
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
              Swing Trading Suite
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
              Tonight&apos;s setups, with levels, by tomorrow&apos;s open.
            </h2>{" "}
            <p style={{ margin: "20px 0 0", maxWidth: "500px", textWrap: "pretty" }}>
              A top-down workflow for NSE delivery trades held for days to weeks. Each candidate has a stage, an entry
              and a stop. A Buy stays valid for the scan day and the two sessions after.
            </p>{" "}
            <div
              style={{
                marginTop: "24px",
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
                font: "600 12px/1 'JetBrains Mono',monospace",
              }}
            >
              {" "}
              <span
                style={{
                  padding: "8px 11px",
                  borderRadius: "999px",
                  background: "rgba(22,21,59,.06)",
                  color: "#3d3c5c",
                }}
              >
                Watching
              </span>{" "}
              <span
                style={{
                  padding: "8px 11px",
                  borderRadius: "999px",
                  background: "rgba(180,83,9,.1)",
                  color: "#9a4a06",
                }}
              >
                Wait for retest
              </span>{" "}
              <span
                style={{
                  padding: "8px 11px",
                  borderRadius: "999px",
                  background: "rgba(15,138,75,.1)",
                  color: "#0f8a4b",
                }}
              >
                Buy
              </span>{" "}
              <span
                style={{
                  padding: "8px 11px",
                  borderRadius: "999px",
                  background: "var(--acc-soft,#ecebff)",
                  color: "var(--acc,#4f46e5)",
                }}
              >
                Bought
              </span>{" "}
            </div>{" "}
          </div>{" "}
          <div
            data-reveal="scale"
            style={{
              flex: "1 1 480px",
              minWidth: "0",
              borderRadius: "20px",
              background: "rgba(255,255,255,.72)",
              border: "1px solid rgba(22,21,59,.08)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,.95),0 40px 80px -44px rgba(22,21,59,.45)",
              padding: "20px",
              overflowX: "auto",
            }}
          >
            {" "}
            <div style={{ minWidth: "440px" }}>
              {" "}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1.3fr 1.2fr .8fr .8fr 1fr",
                  gap: "10px",
                  padding: "0 10px 10px",
                  font: "600 10.5px/1 'JetBrains Mono',monospace",
                  letterSpacing: ".1em",
                  color: "#5d5c7a",
                }}
              >
                <span>STOCK</span>
                <span>SETUP</span>
                <span>ENTRY</span>
                <span>STOP</span>
                <span>STAGE</span>
              </div>{" "}
              <div
                data-seq="350"
                style={{ display: "flex", flexDirection: "column", gap: "4px", fontSize: "14.5px", color: "#16153b" }}
              >
                {" "}
                <div
                  data-i="0"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1.3fr 1.2fr .8fr .8fr 1fr",
                    gap: "10px",
                    alignItems: "center",
                    padding: "11px 10px",
                    borderRadius: "10px",
                    background: "rgba(22,21,59,.035)",
                  }}
                >
                  <span style={{ fontWeight: "600" }}>Stock A</span>
                  <span>VCP Breakout</span>
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "13px" }}>1,248</span>
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "13px" }}>1,196</span>
                  <span style={{ font: "600 11px/1 'JetBrains Mono',monospace", color: "#0f8a4b" }}>Buy</span>
                </div>{" "}
                <div
                  data-i="1"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1.3fr 1.2fr .8fr .8fr 1fr",
                    gap: "10px",
                    alignItems: "center",
                    padding: "11px 10px",
                    borderRadius: "10px",
                    background: "rgba(22,21,59,.035)",
                  }}
                >
                  <span style={{ fontWeight: "600" }}>Stock B</span>
                  <span>Momentum Flag</span>
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "13px" }}>612</span>
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "13px" }}>588</span>
                  <span style={{ font: "600 11px/1 'JetBrains Mono',monospace", color: "#9a4a06" }}>Retest</span>
                </div>{" "}
                <div
                  data-i="2"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1.3fr 1.2fr .8fr .8fr 1fr",
                    gap: "10px",
                    alignItems: "center",
                    padding: "11px 10px",
                    borderRadius: "10px",
                    background: "rgba(22,21,59,.035)",
                  }}
                >
                  <span style={{ fontWeight: "600" }}>Stock C</span>
                  <span>IPO / SME Base</span>
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "13px" }}>342</span>
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "13px" }}>321</span>
                  <span style={{ font: "600 11px/1 'JetBrains Mono',monospace", color: "#0f8a4b" }}>Buy</span>
                </div>{" "}
                <div
                  data-i="3"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1.3fr 1.2fr .8fr .8fr 1fr",
                    gap: "10px",
                    alignItems: "center",
                    padding: "11px 10px",
                    borderRadius: "10px",
                    background: "rgba(22,21,59,.035)",
                  }}
                >
                  <span style={{ fontWeight: "600" }}>Stock D</span>
                  <span>21 EMA Retest</span>
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "13px" }}>2,910</span>
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "13px" }}>2,804</span>
                  <span style={{ font: "600 11px/1 'JetBrains Mono',monospace", color: "#5d5c7a" }}>Watching</span>
                </div>{" "}
              </div>{" "}
              <div
                style={{
                  marginTop: "12px",
                  padding: "0 10px",
                  font: "400 11.5px/1.4 'JetBrains Mono',monospace",
                  color: "#5d5c7a",
                }}
              >
                Placeholder rows, for illustration
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <section id="screener" style={{ maxWidth: "1200px", margin: "0 auto", padding: "130px 24px 0" }}>
        {" "}
        <div
          data-reveal="scale"
          style={{
            borderRadius: "28px",
            background: "rgba(255,255,255,.7)",
            border: "1px solid rgba(22,21,59,.08)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,.95),0 40px 80px -48px rgba(22,21,59,.45)",
            padding: "clamp(28px,5vw,56px)",
            display: "flex",
            flexWrap: "wrap",
            gap: "36px 64px",
            alignItems: "center",
          }}
        >
          {" "}
          <div style={{ flex: "1 1 360px", minWidth: "0" }}>
            {" "}
            <div
              style={{
                font: "500 12px/1 'JetBrains Mono',monospace",
                letterSpacing: ".14em",
                textTransform: "uppercase",
                color: "var(--acc,#4f46e5)",
              }}
            >
              Screener
            </div>{" "}
            <h2
              style={{
                margin: "18px 0 0",
                fontSize: "clamp(30px,4.4vw,52px)",
                lineHeight: "1.04",
                letterSpacing: "-.035em",
                fontWeight: "700",
                color: "#16153b",
                textWrap: "balance",
              }}
            >
              About{" "}
              <span data-count="3600" data-pre="">
                3,600
              </span>{" "}
              NSE stocks and ETFs, one filter away.
            </h2>{" "}
            <p style={{ margin: "18px 0 0", maxWidth: "480px", textWrap: "pretty" }}>
              Screen on valuation, growth, profitability and momentum, or start from a preset.
            </p>{" "}
          </div>{" "}
          <div
            style={{
              flex: "1 1 380px",
              minWidth: "0",
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              fontSize: "15px",
              fontWeight: "500",
              color: "#3d3c5c",
            }}
          >
            {" "}
            <span
              style={{ padding: "10px 14px", borderRadius: "999px", background: "var(--acc,#4f46e5)", color: "#fff" }}
            >
              Momentum
            </span>{" "}
            <span style={{ padding: "10px 14px", borderRadius: "999px", border: "1px solid rgba(22,21,59,.14)" }}>
              Undervalued
            </span>{" "}
            <span style={{ padding: "10px 14px", borderRadius: "999px", border: "1px solid rgba(22,21,59,.14)" }}>
              High growth
            </span>{" "}
            <span style={{ padding: "10px 14px", borderRadius: "999px", border: "1px solid rgba(22,21,59,.14)" }}>
              Low debt
            </span>{" "}
            <span style={{ padding: "10px 14px", borderRadius: "999px", border: "1px solid rgba(22,21,59,.14)" }}>
              High dividend
            </span>{" "}
            <span style={{ padding: "10px 14px", borderRadius: "999px", border: "1px solid rgba(22,21,59,.14)" }}>
              Deep value
            </span>{" "}
            <span style={{ padding: "10px 14px", borderRadius: "999px", border: "1px solid rgba(22,21,59,.14)" }}>
              Large caps
            </span>{" "}
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
              For AI agents
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
              Plug Claude or Cursor straight into the desk.
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
              See the MCP server →
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
