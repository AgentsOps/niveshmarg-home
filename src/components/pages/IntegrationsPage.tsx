import Link from "next/link";
import MotionRoot from "@/components/MotionRoot";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

// Generated from UI_PROTO/Integrations.dc.html.
const SKIN = "Indigo sky";

export default function IntegrationsPage() {
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
          top: "-40px",
          right: "-260px",
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          background: "radial-gradient(circle,rgba(125,190,255,.24),rgba(125,190,255,0) 68%)",
          pointerEvents: "none",
        }}
      />{" "}
      <div style={{ position: "sticky", top: "12px", zIndex: "50" }}>
        <SiteNav active="integrations" />
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
          Integrations
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
          Four brokers. One interface. Any AI agent.
        </h1>{" "}
        <p data-reveal="" data-delay="160" style={{ margin: "22px auto 0", maxWidth: "620px", textWrap: "pretty" }}>
          Strategies never talk to a broker directly. They talk to one abstraction, so the same runner works on Fyers,
          Zerodha, Groww or Delta Exchange.
        </p>{" "}
        <div
          data-reveal="scale"
          data-delay="240"
          style={{ position: "relative", margin: "56px auto 0", maxWidth: "980px" }}
        >
          {" "}
          <div data-fit="980" data-fit-h="360" data-fit-min="0.36" style={{ overflow: "hidden", height: "360px" }}>
            {" "}
            <div
              style={{
                position: "relative",
                width: "980px",
                height: "360px",
                transformOrigin: "0 0",
                textAlign: "left",
              }}
            >
              {" "}
              <svg width="980" height="360" style={{ position: "absolute", inset: "0", overflow: "visible" }}>
                <path
                  data-wire=""
                  d="M300 180 C380 180 380 60 470 60"
                  style={{
                    fill: "none",
                    stroke: "var(--acc,#4f46e5)",
                    strokeWidth: "2",
                    strokeDasharray: "6 6",
                    opacity: ".55",
                  }}
                />
                <path
                  data-wire=""
                  d="M300 180 C380 180 380 140 470 140"
                  style={{
                    fill: "none",
                    stroke: "var(--acc,#4f46e5)",
                    strokeWidth: "2",
                    strokeDasharray: "6 6",
                    opacity: ".55",
                  }}
                />
                <path
                  data-wire=""
                  d="M300 180 C380 180 380 220 470 220"
                  style={{
                    fill: "none",
                    stroke: "var(--acc,#4f46e5)",
                    strokeWidth: "2",
                    strokeDasharray: "6 6",
                    opacity: ".55",
                  }}
                />
                <path
                  data-wire=""
                  d="M300 180 C380 180 380 300 470 300"
                  style={{
                    fill: "none",
                    stroke: "var(--acc,#4f46e5)",
                    strokeWidth: "2",
                    strokeDasharray: "6 6",
                    opacity: ".55",
                  }}
                />
                <path
                  data-wire=""
                  d="M680 60 C740 60 740 180 790 180"
                  style={{ fill: "none", stroke: "#2fbf71", strokeWidth: "2", strokeDasharray: "6 6", opacity: ".6" }}
                />
                <path
                  data-wire=""
                  d="M680 140 C740 140 740 180 790 180"
                  style={{ fill: "none", stroke: "#2fbf71", strokeWidth: "2", strokeDasharray: "6 6", opacity: ".6" }}
                />
                <path
                  data-wire=""
                  d="M680 220 C740 220 740 180 790 180"
                  style={{ fill: "none", stroke: "#2fbf71", strokeWidth: "2", strokeDasharray: "6 6", opacity: ".6" }}
                />
                <path
                  data-wire=""
                  d="M680 300 C740 300 740 180 790 180"
                  style={{ fill: "none", stroke: "#f2a93b", strokeWidth: "2", strokeDasharray: "6 6", opacity: ".6" }}
                />
              </svg>{" "}
              <div
                style={{
                  position: "absolute",
                  left: "40px",
                  top: "120px",
                  width: "260px",
                  padding: "22px",
                  boxSizing: "border-box",
                  borderRadius: "20px",
                  background: "#0d0c22",
                  border: "1px solid rgba(255,255,255,.1)",
                  boxShadow: "0 40px 80px -40px rgba(22,21,59,.6)",
                  color: "#a8a6c9",
                }}
              >
                {" "}
                <div
                  style={{ font: "600 10.5px/1 'JetBrains Mono',monospace", letterSpacing: ".12em", color: "#8e8cb3" }}
                >
                  NIVESHMARG EDGE
                </div>{" "}
                <div style={{ marginTop: "10px", fontSize: "19px", fontWeight: "700", color: "#fff" }}>
                  BrokerProvider
                </div>{" "}
                <div style={{ marginTop: "6px", font: "500 11.5px/1.5 'JetBrains Mono',monospace", color: "#a5b4fc" }}>
                  orders · candles · ticks
                </div>{" "}
              </div>{" "}
              <div
                data-seq="300"
                style={{
                  position: "absolute",
                  left: "470px",
                  top: "28px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  width: "210px",
                }}
              >
                {" "}
                <div
                  data-i="0"
                  style={{
                    height: "64px",
                    boxSizing: "border-box",
                    padding: "0 18px",
                    borderRadius: "16px",
                    background: "rgba(255,255,255,.85)",
                    border: "1px solid rgba(22,21,59,.08)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    boxShadow: "0 20px 40px -28px rgba(22,21,59,.5)",
                  }}
                >
                  <span style={{ fontSize: "17px", fontWeight: "700", color: "#16153b" }}>Fyers</span>
                  <span style={{ font: "500 11px/1.4 'JetBrains Mono',monospace", color: "#5d5c7a" }}>
                    NSE · BSE · data + orders
                  </span>
                </div>{" "}
                <div
                  data-i="1"
                  style={{
                    height: "64px",
                    boxSizing: "border-box",
                    padding: "0 18px",
                    borderRadius: "16px",
                    background: "rgba(255,255,255,.85)",
                    border: "1px solid rgba(22,21,59,.08)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    boxShadow: "0 20px 40px -28px rgba(22,21,59,.5)",
                  }}
                >
                  <span style={{ fontSize: "17px", fontWeight: "700", color: "#16153b" }}>Zerodha Kite</span>
                  <span style={{ font: "500 11px/1.4 'JetBrains Mono',monospace", color: "#5d5c7a" }}>
                    NSE · BSE · orders
                  </span>
                </div>{" "}
                <div
                  data-i="2"
                  style={{
                    height: "64px",
                    boxSizing: "border-box",
                    padding: "0 18px",
                    borderRadius: "16px",
                    background: "rgba(255,255,255,.85)",
                    border: "1px solid rgba(22,21,59,.08)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    boxShadow: "0 20px 40px -28px rgba(22,21,59,.5)",
                  }}
                >
                  <span style={{ fontSize: "17px", fontWeight: "700", color: "#16153b" }}>Groww</span>
                  <span style={{ font: "500 11px/1.4 'JetBrains Mono',monospace", color: "#5d5c7a" }}>
                    NSE · orders
                  </span>
                </div>{" "}
                <div
                  data-i="3"
                  style={{
                    height: "64px",
                    boxSizing: "border-box",
                    padding: "0 18px",
                    borderRadius: "16px",
                    background: "rgba(255,255,255,.85)",
                    border: "1px solid rgba(22,21,59,.08)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    boxShadow: "0 20px 40px -28px rgba(22,21,59,.5)",
                  }}
                >
                  <span style={{ fontSize: "17px", fontWeight: "700", color: "#16153b" }}>Delta Exchange</span>
                  <span style={{ font: "500 11px/1.4 'JetBrains Mono',monospace", color: "#5d5c7a" }}>
                    crypto perpetuals · 24x7
                  </span>
                </div>{" "}
              </div>{" "}
              <div
                style={{
                  position: "absolute",
                  left: "790px",
                  top: "150px",
                  width: "150px",
                  padding: "16px",
                  boxSizing: "border-box",
                  borderRadius: "16px",
                  background: "var(--acc,#4f46e5)",
                  color: "#fff",
                  textAlign: "center",
                  boxShadow: "0 20px 40px -20px rgba(var(--acc-rgb,99,102,241),.8)",
                }}
              >
                {" "}
                <div style={{ font: "600 10.5px/1 'JetBrains Mono',monospace", letterSpacing: ".12em" }}>
                  MARKETS
                </div>{" "}
                <div style={{ marginTop: "8px", fontSize: "15px", fontWeight: "700" }}>NSE · BSE · Crypto</div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "110px 24px 0" }}>
        {" "}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "16px" }}>
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
            <div style={{ fontSize: "22px", fontWeight: "700", color: "#16153b" }}>Fyers</div>{" "}
            <p style={{ margin: "8px 0 14px", fontSize: "15.5px" }}>
              The primary market data source: OAuth2 login, live WebSocket ticks and candle history for NSE and BSE.
            </p>{" "}
            <div
              style={{ display: "flex", flexWrap: "wrap", gap: "6px", font: "500 11.5px/1 'JetBrains Mono',monospace" }}
            >
              <span
                style={{
                  padding: "6px 8px",
                  borderRadius: "6px",
                  background: "var(--acc-soft,#ecebff)",
                  color: "var(--acc,#4f46e5)",
                }}
              >
                data
              </span>
              <span
                style={{
                  padding: "6px 8px",
                  borderRadius: "6px",
                  background: "var(--acc-soft,#ecebff)",
                  color: "var(--acc,#4f46e5)",
                }}
              >
                orders
              </span>
              <span
                style={{
                  padding: "6px 8px",
                  borderRadius: "6px",
                  background: "var(--acc-soft,#ecebff)",
                  color: "var(--acc,#4f46e5)",
                }}
              >
                streaming
              </span>
            </div>{" "}
          </div>{" "}
          <div
            data-reveal=""
            data-delay="70"
            style={{
              padding: "26px",
              borderRadius: "22px",
              background: "rgba(255,255,255,.68)",
              border: "1px solid rgba(22,21,59,.08)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,.95),0 24px 50px -34px rgba(22,21,59,.4)",
            }}
          >
            {" "}
            <div style={{ fontSize: "22px", fontWeight: "700", color: "#16153b" }}>Zerodha Kite</div>{" "}
            <p style={{ margin: "8px 0 14px", fontSize: "15.5px" }}>
              Risk-checked, idempotent order routing to your Kite account.
            </p>{" "}
            <div
              style={{ display: "flex", flexWrap: "wrap", gap: "6px", font: "500 11.5px/1 'JetBrains Mono',monospace" }}
            >
              <span
                style={{
                  padding: "6px 8px",
                  borderRadius: "6px",
                  background: "var(--acc-soft,#ecebff)",
                  color: "var(--acc,#4f46e5)",
                }}
              >
                orders
              </span>
            </div>{" "}
          </div>{" "}
          <div
            data-reveal=""
            data-delay="140"
            style={{
              padding: "26px",
              borderRadius: "22px",
              background: "rgba(255,255,255,.68)",
              border: "1px solid rgba(22,21,59,.08)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,.95),0 24px 50px -34px rgba(22,21,59,.4)",
            }}
          >
            {" "}
            <div style={{ fontSize: "22px", fontWeight: "700", color: "#16153b" }}>Groww</div>{" "}
            <p style={{ margin: "8px 0 14px", fontSize: "15.5px" }}>
              The same runner and the same guardrails, routed to a Groww account.
            </p>{" "}
            <div
              style={{ display: "flex", flexWrap: "wrap", gap: "6px", font: "500 11.5px/1 'JetBrains Mono',monospace" }}
            >
              <span
                style={{
                  padding: "6px 8px",
                  borderRadius: "6px",
                  background: "var(--acc-soft,#ecebff)",
                  color: "var(--acc,#4f46e5)",
                }}
              >
                orders
              </span>
            </div>{" "}
          </div>{" "}
          <div
            data-reveal=""
            data-delay="210"
            style={{
              padding: "26px",
              borderRadius: "22px",
              background: "rgba(255,255,255,.68)",
              border: "1px solid rgba(22,21,59,.08)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,.95),0 24px 50px -34px rgba(22,21,59,.4)",
            }}
          >
            {" "}
            <div style={{ fontSize: "22px", fontWeight: "700", color: "#16153b" }}>Delta Exchange</div>{" "}
            <p style={{ margin: "8px 0 14px", fontSize: "15.5px" }}>
              Crypto perpetuals around the clock, capitalised in USD with contract-value sizing.
            </p>{" "}
            <div
              style={{ display: "flex", flexWrap: "wrap", gap: "6px", font: "500 11.5px/1 'JetBrains Mono',monospace" }}
            >
              <span
                style={{
                  padding: "6px 8px",
                  borderRadius: "6px",
                  background: "var(--acc-soft,#ecebff)",
                  color: "var(--acc,#4f46e5)",
                }}
              >
                data
              </span>
              <span
                style={{
                  padding: "6px 8px",
                  borderRadius: "6px",
                  background: "var(--acc-soft,#ecebff)",
                  color: "var(--acc,#4f46e5)",
                }}
              >
                orders
              </span>
              <span
                style={{
                  padding: "6px 8px",
                  borderRadius: "6px",
                  background: "var(--acc-soft,#ecebff)",
                  color: "var(--acc,#4f46e5)",
                }}
              >
                24x7
              </span>
            </div>{" "}
          </div>{" "}
          <div
            data-reveal=""
            data-delay="280"
            style={{
              padding: "26px",
              borderRadius: "22px",
              background: "rgba(255,255,255,.68)",
              border: "1px solid rgba(22,21,59,.08)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,.95),0 24px 50px -34px rgba(22,21,59,.4)",
            }}
          >
            {" "}
            <div style={{ fontSize: "22px", fontWeight: "700", color: "#16153b" }}>Angel One</div>{" "}
            <p style={{ margin: "8px 0 14px", fontSize: "15.5px" }}>
              SmartAPI broker adapter in development for order routing and equity trading.
            </p>{" "}
            <div
              style={{ display: "flex", flexWrap: "wrap", gap: "6px", font: "500 11.5px/1 'JetBrains Mono',monospace" }}
            >
              <span
                style={{ padding: "6px 8px", borderRadius: "6px", background: "rgba(22,21,59,.06)", color: "#5d5c7a" }}
              >
                in development
              </span>
              <span
                style={{ padding: "6px 8px", borderRadius: "6px", background: "rgba(22,21,59,.06)", color: "#5d5c7a" }}
              >
                roadmap
              </span>
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
                Model Context Protocol
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
                Give your AI agent the whole platform. Keep the guardrails.
              </h2>{" "}
              <p style={{ margin: "20px 0 0", maxWidth: "500px", textWrap: "pretty" }}>
                An MCP server exposes market data, indicators, backtests, chart drawings and paper orders to Claude
                Desktop, Cursor or your own agents. Everything it creates appears in the admin, and every paper order
                passes the same risk engine.
              </p>{" "}
              <div style={{ marginTop: "26px", display: "flex", flexWrap: "wrap", gap: "28px" }}>
                {" "}
                <div>
                  <div style={{ font: "700 34px/1 'JetBrains Mono',monospace", color: "#fff" }}>
                    <span data-count="24">24</span>
                  </div>
                  <div style={{ marginTop: "6px", fontSize: "14px" }}>domain tools</div>
                </div>{" "}
                <div>
                  <div style={{ font: "700 34px/1 'JetBrains Mono',monospace", color: "#fff" }}>2</div>
                  <div style={{ marginTop: "6px", fontSize: "14px" }}>transports: stdio &amp; SSE</div>
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
                background: "#17163a",
                border: "1px solid rgba(255,255,255,.1)",
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
                  data-tab="chat"
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
                  Agent
                </button>{" "}
                <button
                  data-tab="stdio"
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
                  stdio
                </button>{" "}
                <button
                  data-tab="sse"
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
                  SSE
                </button>{" "}
              </div>{" "}
              <div
                data-panel="chat"
                style={{ padding: "18px", font: "400 12.5px/1.7 'JetBrains Mono',monospace", minHeight: "220px" }}
              >
                {" "}
                <div style={{ color: "#eeedfb" }}>
                  <span style={{ color: "var(--acc-lite,#a5b4fc)" }}>› </span>
                  <span data-type="">
                    Backtest the EMA Pullback template on SBIN for the last six months and mark the best trade.
                  </span>
                </div>{" "}
                <div
                  style={{ marginTop: "12px", display: "flex", flexDirection: "column", gap: "6px", color: "#8e8cb3" }}
                >
                  {" "}
                  <span>→ search_market_instruments(&quot;SBIN&quot;)</span>{" "}
                  <span>→ run_backtest(strategy, &quot;NSE:SBIN-EQ&quot;, 6M)</span>{" "}
                  <span>→ draw on /chart/NSE:SBIN-EQ/</span>{" "}
                </div>{" "}
                <div style={{ marginTop: "12px", color: "#7fe0aa" }}>✓ run completed · drawing saved</div>{" "}
              </div>{" "}
              <div
                data-panel="stdio"
                style={{
                  padding: "18px",
                  font: "400 12.5px/1.7 'JetBrains Mono',monospace",
                  color: "#a8a6c9",
                  whiteSpace: "pre",
                  overflowX: "auto",
                  minHeight: "220px",
                }}
              >
                <span style={{ color: "#8e8cb3" }}># local agents, run from the server shell</span> &#123;{" "}
                <span style={{ color: "#a5b4fc" }}>&quot;mcpServers&quot;</span>: &#123;{" "}
                <span style={{ color: "#a5b4fc" }}>&quot;niveshmarg-edge&quot;</span>: &#123;{" "}
                <span style={{ color: "#a5b4fc" }}>&quot;command&quot;</span>:{" "}
                <span style={{ color: "#7fe0aa" }}>&quot;python&quot;</span>,{" "}
                <span style={{ color: "#a5b4fc" }}>&quot;args&quot;</span>: [
                <span style={{ color: "#7fe0aa" }}>&quot;manage.py&quot;</span>,{" "}
                <span style={{ color: "#7fe0aa" }}>&quot;run_mcp_server&quot;</span>,{" "}
                <span style={{ color: "#7fe0aa" }}>&quot;--transport&quot;</span>,{" "}
                <span style={{ color: "#7fe0aa" }}>&quot;stdio&quot;</span>] &#125; &#125; &#125;
              </div>{" "}
              <div
                data-panel="sse"
                style={{
                  padding: "18px",
                  font: "400 12.5px/1.7 'JetBrains Mono',monospace",
                  color: "#a8a6c9",
                  minHeight: "220px",
                }}
              >
                {" "}
                <div style={{ color: "#8e8cb3" }}># remote and web agents over HTTP</div>{" "}
                <div style={{ marginTop: "8px", color: "#eeedfb" }}>
                  python manage.py run_mcp_server --transport sse --port 8001
                </div>{" "}
                <div style={{ marginTop: "10px", color: "#eeedfb" }}>GET http://127.0.0.1:8001/sse</div>{" "}
                <div style={{ color: "#eeedfb" }}>Authorization: Bearer &lt;your API token&gt;</div>{" "}
                <div style={{ marginTop: "12px", color: "#7fe0aa" }}>
                  Personal tokens, shown once, revocable in the admin.
                </div>{" "}
              </div>{" "}
            </div>{" "}
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
              flex: "1 1 440px",
              minWidth: "0",
              padding: "24px",
              borderRadius: "22px",
              background: "rgba(255,255,255,.7)",
              border: "1px solid rgba(22,21,59,.08)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,.95),0 40px 80px -44px rgba(22,21,59,.45)",
              font: "400 13px/1.8 'JetBrains Mono',monospace",
              color: "#3d3c5c",
              overflowX: "auto",
            }}
          >
            {" "}
            <div style={{ color: "#5d5c7a" }}>data/warehouse/</div>{" "}
            <div style={{ paddingLeft: "16px" }}>instrument=NSE_SBIN-EQ/</div>{" "}
            <div style={{ paddingLeft: "32px" }}>
              timeframe=5m/ <span style={{ color: "var(--acc,#4f46e5)" }}>2025.parquet · 2026.parquet</span>
            </div>{" "}
            <div style={{ paddingLeft: "32px" }}>
              timeframe=1d/ <span style={{ color: "var(--acc,#4f46e5)" }}>2012 … 2026.parquet</span>
            </div>{" "}
            <div style={{ paddingLeft: "16px" }}>instrument=DELTA_BTCUSD-CRYPTO/</div>{" "}
            <div style={{ paddingLeft: "32px" }}>
              timeframe=1h/ <span style={{ color: "var(--acc,#4f46e5)" }}>2024 … 2026.parquet</span>
            </div>{" "}
            <div
              style={{
                marginTop: "12px",
                paddingTop: "12px",
                borderTop: "1px solid rgba(22,21,59,.08)",
                color: "#16153b",
              }}
            >
              SELECT * FROM read_parquet(…) <span style={{ color: "#0f8a4b" }}>-- DuckDB</span>
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
              Market data warehouse
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
              Years of candles, queried in milliseconds.
            </h2>{" "}
            <p style={{ margin: "20px 0 0", maxWidth: "500px", textWrap: "pretty" }}>
              Bars are stored as partitioned Parquet files and queried with DuckDB, apart from the transactional
              database. A heavy backtest never slows down a live order.
            </p>{" "}
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
              Set it up
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
              Connection guides for every broker and agent.
            </h2>{" "}
          </div>{" "}
          <div
            style={{ position: "relative", flex: "0 1 280px", display: "flex", flexDirection: "column", gap: "12px" }}
          >
            {" "}
            <Link
              className="hv1"
              href="/docs"
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
              Read the docs →
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
