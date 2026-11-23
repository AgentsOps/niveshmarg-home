import Link from "next/link";
import MotionRoot from "@/components/MotionRoot";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

// Generated from UI_PROTO/LiveStream.dc.html.
const SKIN = "Indigo sky";

export default function LiveStreamPage() {
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
          background: "radial-gradient(circle,rgba(255,59,92,.18),rgba(255,59,92,0) 68%)",
          pointerEvents: "none",
        }}
      />{" "}
      <div
        data-blob=""
        style={{
          position: "absolute",
          top: "140px",
          right: "-240px",
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle,rgba(var(--acc-rgb,99,102,241),.2),rgba(var(--acc-rgb,99,102,241),0) 68%)",
          pointerEvents: "none",
        }}
      />{" "}
      <div style={{ position: "sticky", top: "12px", zIndex: "50" }}>
        <SiteNav active="liveStream" />
      </div>{" "}
      <section
        data-hero=""
        style={{ position: "relative", maxWidth: "1200px", margin: "0 auto", padding: "72px 24px 0" }}
      >
        {" "}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "48px 64px", alignItems: "center" }}>
          {" "}
          <div style={{ flex: "1 1 480px", minWidth: "0" }}>
            {" "}
            <div
              data-reveal=""
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "7px 16px 7px 10px",
                borderRadius: "999px",
                background: "rgba(255,255,255,.75)",
                border: "1px solid rgba(22,21,59,.08)",
                font: "500 12px/1 'JetBrains Mono',monospace",
                letterSpacing: ".08em",
                color: "#3d3c5c",
                boxShadow: "0 4px 14px -6px rgba(22,21,59,.1)",
              }}
            >
              {" "}
              <span
                data-pulse=""
                style={{
                  display: "inline-block",
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#ff3b5c",
                }}
              />{" "}
              <span style={{ color: "#e50914", fontWeight: "700" }}>YOUTUBE PARTNER STREAM</span>{" "}
              <span style={{ color: "#5d5c7a" }}>·</span>{" "}
              <span style={{ color: "#16153b", fontWeight: "600" }}>@AGENTSOPS</span>{" "}
            </div>{" "}
            <h1
              data-reveal=""
              data-delay="80"
              style={{
                margin: "22px 0 0",
                fontSize: "clamp(38px,5.8vw,74px)",
                lineHeight: "1.02",
                letterSpacing: "-.045em",
                fontWeight: "800",
                color: "#16153b",
                textWrap: "balance",
              }}
            >
              {" "}
              See it live running on <span style={{ color: "#e50914" }}>BTCUSD</span> &amp;{" "}
              <span style={{ color: "#d97706" }}>XAUTUSD</span>.{" "}
            </h1>{" "}
            <p
              data-reveal=""
              data-delay="160"
              style={{
                margin: "22px 0 0",
                maxWidth: "540px",
                fontSize: "18px",
                lineHeight: "1.55",
                color: "#3d3c5c",
                textWrap: "pretty",
              }}
            >
              {" "}
              Starting <strong>07th of October</strong>, watch Niveshmarg Edge execute live on Bitcoin (BTCUSD) and
              Tether Gold (XAUTUSD) perpetuals through our official channel partner{" "}
              <strong style={{ color: "#16153b" }}>@agentsops</strong>. Broadcast every{" "}
              <strong>Monday to Friday, 6:00 PM IST to 11:00 PM IST</strong>.{" "}
            </p>{" "}
            <div
              data-reveal=""
              data-delay="240"
              style={{ marginTop: "32px", display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "center" }}
            >
              {" "}
              <a
                className="hv1"
                href="https://www.youtube.com/@agentsops"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "15px 28px",
                  borderRadius: "999px",
                  background: "#e50914",
                  color: "#fff",
                  fontWeight: "600",
                  fontSize: "15.5px",
                  boxShadow: "0 14px 30px -12px rgba(229,9,20,.65),inset 0 1px 0 rgba(255,255,255,.25)",
                  transition: "transform .2s",
                }}
              >
                {" "}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>{" "}
                Watch live on @agentsops{" "}
              </a>{" "}
              <a
                className="hv2"
                href="#schedule"
                style={{
                  padding: "15px 24px",
                  borderRadius: "999px",
                  background: "rgba(255,255,255,.8)",
                  border: "1px solid rgba(22,21,59,.12)",
                  color: "#16153b",
                  fontWeight: "600",
                  fontSize: "15px",
                  transition: "transform .2s",
                }}
              >
                {" "}
                Stream schedule{" "}
              </a>{" "}
            </div>{" "}
            <div
              data-reveal=""
              data-delay="320"
              style={{
                marginTop: "28px",
                display: "flex",
                alignItems: "center",
                gap: "18px",
                font: "500 12.5px/1.4 'JetBrains Mono',monospace",
                color: "#5d5c7a",
              }}
            >
              {" "}
              <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "#0f8a4b" }}>
                {" "}
                <span
                  style={{
                    width: "7px",
                    height: "7px",
                    borderRadius: "50%",
                    background: "#0f8a4b",
                    display: "inline-block",
                  }}
                />{" "}
                Mon–Fri 6:00 PM – 11:00 PM IST{" "}
              </span>{" "}
              <span>·</span> <span>BTCUSD &amp; XAUTUSD</span> <span>·</span> <span>Delta Exchange</span>{" "}
            </div>{" "}
          </div>{" "}
          <div data-reveal="scale" data-delay="200" style={{ flex: "1 1 440px", minWidth: "0" }}>
            {" "}
            <div
              data-tilt=""
              style={{
                borderRadius: "24px",
                background: "#0d0c22",
                border: "1px solid rgba(255,255,255,.12)",
                boxShadow: "0 60px 110px -50px rgba(22,21,59,.65)",
                overflow: "hidden",
                color: "#a8a6c9",
              }}
            >
              {" "}
              <div
                style={{
                  padding: "14px 18px",
                  background: "rgba(255,255,255,.05)",
                  borderBottom: "1px solid rgba(255,255,255,.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                {" "}
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  {" "}
                  <span
                    data-pulse=""
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#ff3b5c",
                      display: "inline-block",
                    }}
                  />{" "}
                  <span
                    style={{ font: "600 11.5px/1 'JetBrains Mono',monospace", color: "#fff", letterSpacing: ".06em" }}
                  >
                    AGENTSOPS LIVE STREAM
                  </span>{" "}
                </div>{" "}
                <span
                  style={{
                    font: "500 11px/1 'JetBrains Mono',monospace",
                    padding: "4px 8px",
                    borderRadius: "6px",
                    background: "rgba(229,9,20,.18)",
                    color: "#ff8595",
                  }}
                >
                  MON–FRI 6 PM – 11 PM IST
                </span>{" "}
              </div>{" "}
              <div
                style={{
                  position: "relative",
                  background: "#080718",
                  padding: "24px 20px",
                  borderBottom: "1px solid rgba(255,255,255,.08)",
                  minHeight: "220px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                {" "}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  {" "}
                  <span style={{ font: "500 12px/1 'JetBrains Mono',monospace", color: "#8e8cb3" }}>
                    NIVESHMARG EDGE COCKPIT v0.2.0
                  </span>{" "}
                  <span style={{ font: "600 12px/1 'JetBrains Mono',monospace", color: "#7fe0aa" }}>
                    FEED: LIVE WS
                  </span>{" "}
                </div>{" "}
                <div style={{ margin: "20px 0", textAlign: "center" }}>
                  {" "}
                  <a
                    href="https://www.youtube.com/@agentsops"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "12px",
                      color: "#fff",
                      textDecoration: "none",
                    }}
                  >
                    {" "}
                    <div
                      className="hv4"
                      style={{
                        width: "68px",
                        height: "68px",
                        borderRadius: "50%",
                        background: "rgba(229,9,20,.9)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 0 30px rgba(229,9,20,.6)",
                        transition: "transform .2s",
                      }}
                    >
                      {" "}
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="#fff">
                        <path d="M8 5v14l11-7z" />
                      </svg>{" "}
                    </div>{" "}
                    <span style={{ fontSize: "16px", fontWeight: "700", color: "#fff", letterSpacing: "-.01em" }}>
                      Watch Live on YouTube (@agentsops)
                    </span>{" "}
                    <span style={{ font: "500 12px/1 'JetBrains Mono',monospace", color: "#a5b4fc" }}>
                      BTCUSD &amp; XAUTUSD Live Session
                    </span>{" "}
                  </a>{" "}
                </div>{" "}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "8px",
                    font: "500 11.5px/1.3 'JetBrains Mono',monospace",
                    color: "#8e8cb3",
                  }}
                >
                  {" "}
                  <span>RUNNERS: BTCUSD ($96,450.00) · XAUTUSD ($2,684.50)</span>{" "}
                  <span style={{ color: "#2fbf71" }}>STATUS: RUNNERS ARMED</span>{" "}
                </div>{" "}
              </div>{" "}
              <div
                style={{
                  padding: "18px 20px",
                  background: "rgba(0,0,0,.2)",
                  font: "500 12px/1.5 'JetBrains Mono',monospace",
                }}
              >
                {" "}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    color: "#8e8cb3",
                    marginBottom: "8px",
                    fontSize: "11px",
                    letterSpacing: ".08em",
                  }}
                >
                  {" "}
                  <span>AUDITED EXECUTION TICKER</span> <span style={{ color: "#2fbf71" }}>DELTA EXCHANGE</span>{" "}
                </div>{" "}
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  {" "}
                  <div style={{ color: "#eeedfb" }}>
                    <span style={{ color: "#8e8cb3" }}>[18:00:02 IST]</span> Evening Session Open: Live tick streams
                    active for BTCUSD &amp; XAUTUSD
                  </div>{" "}
                  <div style={{ color: "#7fe0aa" }}>
                    <span style={{ color: "#8e8cb3" }}>[18:42:15 IST]</span> Signal Fired: BUY 0.25 BTCUSD @ $96,420.00
                    · Target: $98,200.00
                  </div>{" "}
                  <div style={{ color: "#ffbd2e" }}>
                    <span style={{ color: "#8e8cb3" }}>[19:15:30 IST]</span> SMC Check: Bullish FVG confirmed on XAUTUSD
                    ($2,681.20)
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "64px 24px 0" }}>
        {" "}
        <div
          data-reveal="scale"
          data-countdown=""
          style={{
            borderRadius: "28px",
            background: "#0d0c22",
            border: "1px solid rgba(255,255,255,.12)",
            boxShadow: "0 40px 90px -40px rgba(22,21,59,.6)",
            padding: "clamp(28px,4vw,44px)",
            color: "#a8a6c9",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {" "}
          <div
            data-blob=""
            style={{
              position: "absolute",
              top: "-200px",
              right: "-140px",
              width: "500px",
              height: "500px",
              borderRadius: "50%",
              background: "radial-gradient(circle,rgba(229,9,20,.2),rgba(229,9,20,0) 65%)",
              pointerEvents: "none",
            }}
          />{" "}
          <div
            data-blob=""
            style={{
              position: "absolute",
              bottom: "-200px",
              left: "-140px",
              width: "500px",
              height: "500px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle,rgba(var(--acc-rgb,99,102,241),.2),rgba(var(--acc-rgb,99,102,241),0) 65%)",
              pointerEvents: "none",
            }}
          />{" "}
          <div style={{ position: "relative" }}>
            {" "}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "6px 16px",
                borderRadius: "999px",
                background: "rgba(229,9,20,.15)",
                border: "1px solid rgba(229,9,20,.3)",
                font: "600 12px/1 'JetBrains Mono',monospace",
                color: "#ff8595",
                letterSpacing: ".12em",
                textTransform: "uppercase",
              }}
            >
              {" "}
              <span
                data-pulse=""
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  background: "#ff3b5c",
                  display: "inline-block",
                }}
              />{" "}
              <span data-cd-badge="">STREAMING STARTS 07TH OF OCTOBER · 6:00 PM IST</span>{" "}
            </div>{" "}
            <h2
              style={{
                margin: "20px 0 0",
                fontSize: "clamp(26px,3.8vw,44px)",
                lineHeight: "1.1",
                letterSpacing: "-.03em",
                fontWeight: "700",
                color: "#fff",
              }}
            >
              {" "}
              Countdown to the live stream premiere on <span style={{ color: "#ff576f" }}>@agentsops</span>{" "}
            </h2>{" "}
            <div
              style={{
                marginTop: "32px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "clamp(10px,2.5vw,24px)",
                flexWrap: "wrap",
              }}
            >
              {" "}
              <div
                style={{
                  flex: "1 1 84px",
                  maxWidth: "140px",
                  minWidth: "76px",
                  padding: "18px 12px",
                  borderRadius: "20px",
                  background: "rgba(255,255,255,.06)",
                  border: "1px solid rgba(255,255,255,.1)",
                  boxShadow: "0 10px 24px -10px rgba(0,0,0,.5)",
                }}
              >
                {" "}
                <div
                  data-cd-days=""
                  style={{
                    font: "800 clamp(32px,5vw,56px)/1 'JetBrains Mono',monospace",
                    color: "#fff",
                    letterSpacing: "-.03em",
                  }}
                >
                  00
                </div>{" "}
                <div
                  style={{
                    marginTop: "8px",
                    font: "600 11px/1 'JetBrains Mono',monospace",
                    letterSpacing: ".14em",
                    color: "#a5b4fc",
                    textTransform: "uppercase",
                  }}
                >
                  DAYS
                </div>{" "}
              </div>{" "}
              <div
                style={{
                  font: "800 clamp(24px,3vw,36px)/1 'JetBrains Mono',monospace",
                  color: "rgba(255,255,255,.3)",
                  alignSelf: "center",
                }}
              >
                :
              </div>{" "}
              <div
                style={{
                  flex: "1 1 84px",
                  maxWidth: "140px",
                  minWidth: "76px",
                  padding: "18px 12px",
                  borderRadius: "20px",
                  background: "rgba(255,255,255,.06)",
                  border: "1px solid rgba(255,255,255,.1)",
                  boxShadow: "0 10px 24px -10px rgba(0,0,0,.5)",
                }}
              >
                {" "}
                <div
                  data-cd-hours=""
                  style={{
                    font: "800 clamp(32px,5vw,56px)/1 'JetBrains Mono',monospace",
                    color: "#fff",
                    letterSpacing: "-.03em",
                  }}
                >
                  00
                </div>{" "}
                <div
                  style={{
                    marginTop: "8px",
                    font: "600 11px/1 'JetBrains Mono',monospace",
                    letterSpacing: ".14em",
                    color: "#a5b4fc",
                    textTransform: "uppercase",
                  }}
                >
                  HOURS
                </div>{" "}
              </div>{" "}
              <div
                style={{
                  font: "800 clamp(24px,3vw,36px)/1 'JetBrains Mono',monospace",
                  color: "rgba(255,255,255,.3)",
                  alignSelf: "center",
                }}
              >
                :
              </div>{" "}
              <div
                style={{
                  flex: "1 1 84px",
                  maxWidth: "140px",
                  minWidth: "76px",
                  padding: "18px 12px",
                  borderRadius: "20px",
                  background: "rgba(255,255,255,.06)",
                  border: "1px solid rgba(255,255,255,.1)",
                  boxShadow: "0 10px 24px -10px rgba(0,0,0,.5)",
                }}
              >
                {" "}
                <div
                  data-cd-mins=""
                  style={{
                    font: "800 clamp(32px,5vw,56px)/1 'JetBrains Mono',monospace",
                    color: "#fff",
                    letterSpacing: "-.03em",
                  }}
                >
                  00
                </div>{" "}
                <div
                  style={{
                    marginTop: "8px",
                    font: "600 11px/1 'JetBrains Mono',monospace",
                    letterSpacing: ".14em",
                    color: "#a5b4fc",
                    textTransform: "uppercase",
                  }}
                >
                  MINUTES
                </div>{" "}
              </div>{" "}
              <div
                style={{
                  font: "800 clamp(24px,3vw,36px)/1 'JetBrains Mono',monospace",
                  color: "rgba(255,255,255,.3)",
                  alignSelf: "center",
                }}
              >
                :
              </div>{" "}
              <div
                style={{
                  flex: "1 1 84px",
                  maxWidth: "140px",
                  minWidth: "76px",
                  padding: "18px 12px",
                  borderRadius: "20px",
                  background: "rgba(255,255,255,.06)",
                  border: "1px solid rgba(255,255,255,.1)",
                  boxShadow: "0 10px 24px -10px rgba(0,0,0,.5)",
                }}
              >
                {" "}
                <div
                  data-cd-secs=""
                  style={{
                    font: "800 clamp(32px,5vw,56px)/1 'JetBrains Mono',monospace",
                    color: "#ff576f",
                    letterSpacing: "-.03em",
                  }}
                >
                  00
                </div>{" "}
                <div
                  style={{
                    marginTop: "8px",
                    font: "600 11px/1 'JetBrains Mono',monospace",
                    letterSpacing: ".14em",
                    color: "#a5b4fc",
                    textTransform: "uppercase",
                  }}
                >
                  SECONDS
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div style={{ marginTop: "24px", font: "500 13px/1.5 'JetBrains Mono',monospace", color: "#c2c0dc" }}>
              {" "}
              Live market timing:{" "}
              <strong style={{ color: "#fff" }}>Monday to Friday, 6:00 PM IST to 11:00 PM IST</strong> · Streaming{" "}
              <strong style={{ color: "#ff8595" }}>BTCUSD</strong> &amp;{" "}
              <strong style={{ color: "#ffbd2e" }}>XAUTUSD</strong>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "64px 24px 0" }}>
        {" "}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "16px" }}>
          {" "}
          <div
            data-reveal=""
            style={{
              padding: "26px 24px",
              borderRadius: "20px",
              background: "rgba(255,255,255,.7)",
              border: "1px solid rgba(22,21,59,.08)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,.95),0 20px 40px -28px rgba(22,21,59,.35)",
            }}
          >
            {" "}
            <div
              style={{
                font: "800 clamp(28px,3.2vw,40px)/1 'JetBrains Mono',monospace",
                color: "#16153b",
                letterSpacing: "-.03em",
              }}
            >
              BTCUSD &amp; XAUTUSD
            </div>{" "}
            <div style={{ marginTop: "10px", fontSize: "15px", color: "#5d5c7a" }}>
              Crypto &amp; gold perpetuals execution
            </div>{" "}
          </div>{" "}
          <div
            data-reveal=""
            data-delay="70"
            style={{
              padding: "26px 24px",
              borderRadius: "20px",
              background: "rgba(255,255,255,.7)",
              border: "1px solid rgba(22,21,59,.08)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,.95),0 20px 40px -28px rgba(22,21,59,.35)",
            }}
          >
            {" "}
            <div
              style={{
                font: "800 clamp(28px,3.2vw,40px)/1 'JetBrains Mono',monospace",
                color: "#16153b",
                letterSpacing: "-.03em",
              }}
            >
              6 PM – 11 PM
            </div>{" "}
            <div style={{ marginTop: "10px", fontSize: "15px", color: "#5d5c7a" }}>
              Monday to Friday (IST evening session)
            </div>{" "}
          </div>{" "}
          <div
            data-reveal=""
            data-delay="140"
            style={{
              padding: "26px 24px",
              borderRadius: "20px",
              background: "rgba(255,255,255,.7)",
              border: "1px solid rgba(22,21,59,.08)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,.95),0 20px 40px -28px rgba(22,21,59,.35)",
            }}
          >
            {" "}
            <div
              style={{
                font: "800 clamp(28px,3.2vw,40px)/1 'JetBrains Mono',monospace",
                color: "#e50914",
                letterSpacing: "-.03em",
              }}
            >
              07 October
            </div>{" "}
            <div style={{ marginTop: "10px", fontSize: "15px", color: "#5d5c7a" }}>
              Live stream launch premiere date
            </div>{" "}
          </div>{" "}
          <div
            data-reveal=""
            data-delay="210"
            style={{
              padding: "26px 24px",
              borderRadius: "20px",
              background: "rgba(255,255,255,.7)",
              border: "1px solid rgba(22,21,59,.08)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,.95),0 20px 40px -28px rgba(22,21,59,.35)",
            }}
          >
            {" "}
            <div
              style={{
                font: "800 clamp(28px,3.2vw,40px)/1 'JetBrains Mono',monospace",
                color: "#16153b",
                letterSpacing: "-.03em",
              }}
            >
              <span data-count="6">6</span> Gates
            </div>{" "}
            <div style={{ marginTop: "10px", fontSize: "15px", color: "#5d5c7a" }}>
              Deterministic risk caps verified per order
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
          <div data-reveal="" style={{ flex: "1 1 480px", maxWidth: "700px" }}>
            {" "}
            <div
              style={{
                font: "500 12px/1 'JetBrains Mono',monospace",
                letterSpacing: ".14em",
                textTransform: "uppercase",
                color: "var(--acc,#4f46e5)",
              }}
            >
              Live Cockpit Showcase
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
              What you will see on the live stream.
            </h2>{" "}
          </div>{" "}
          <p
            data-reveal=""
            data-delay="100"
            style={{ flex: "1 1 320px", maxWidth: "440px", margin: "0", textWrap: "pretty" }}
          >
            Real market execution on BTCUSD and XAUTUSD perpetuals. No retrospective curve fitting or simulated
            marketing claims.
          </p>{" "}
        </div>{" "}
        <div
          style={{
            marginTop: "44px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(270px,1fr))",
            gap: "18px",
          }}
        >
          {" "}
          <div
            data-reveal=""
            style={{
              padding: "28px",
              borderRadius: "22px",
              background: "rgba(255,255,255,.7)",
              border: "1px solid rgba(22,21,59,.08)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,.95),0 24px 50px -34px rgba(22,21,59,.4)",
            }}
          >
            {" "}
            <div
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "12px",
                background: "rgba(79,70,229,.1)",
                color: "var(--acc,#4f46e5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                font: "700 16px 'JetBrains Mono',monospace",
              }}
            >
              01
            </div>{" "}
            <div style={{ marginTop: "20px", fontSize: "20px", fontWeight: "700", color: "#16153b" }}>
              SMC Charts &amp; Order Blocks
            </div>{" "}
            <p style={{ margin: "10px 0 0", fontSize: "15.5px" }}>
              Watch real-time candlestick charts detect institutional Order Blocks, Fair Value Gaps (FVG), and liquidity
              sweeps on BTCUSD &amp; XAUTUSD as ticks arrive.
            </p>{" "}
          </div>{" "}
          <div
            data-reveal=""
            data-delay="80"
            style={{
              padding: "28px",
              borderRadius: "22px",
              background: "rgba(255,255,255,.7)",
              border: "1px solid rgba(22,21,59,.08)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,.95),0 24px 50px -34px rgba(22,21,59,.4)",
            }}
          >
            {" "}
            <div
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "12px",
                background: "rgba(15,138,75,.1)",
                color: "#0f8a4b",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                font: "700 16px 'JetBrains Mono',monospace",
              }}
            >
              02
            </div>{" "}
            <div style={{ marginTop: "20px", fontSize: "20px", fontWeight: "700", color: "#16153b" }}>
              Deterministic Risk Engine
            </div>{" "}
            <p style={{ margin: "10px 0 0", fontSize: "15.5px" }}>
              See every order evaluated by 6 safety gates (daily loss limit, per-trade cap, gross exposure, price
              circuits) before hitting the broker.
            </p>{" "}
          </div>{" "}
          <div
            data-reveal=""
            data-delay="160"
            style={{
              padding: "28px",
              borderRadius: "22px",
              background: "rgba(255,255,255,.7)",
              border: "1px solid rgba(22,21,59,.08)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,.95),0 24px 50px -34px rgba(22,21,59,.4)",
            }}
          >
            {" "}
            <div
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "12px",
                background: "rgba(229,9,20,.1)",
                color: "#e50914",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                font: "700 16px 'JetBrains Mono',monospace",
              }}
            >
              03
            </div>{" "}
            <div style={{ marginTop: "20px", fontSize: "20px", fontWeight: "700", color: "#16153b" }}>
              Delta Exchange Routing
            </div>{" "}
            <p style={{ margin: "10px 0 0", fontSize: "15.5px" }}>
              Observe live order dispatch over WebSocket and REST to Delta Exchange with millisecond fill timestamps and
              real-time slippage analysis.
            </p>{" "}
          </div>{" "}
          <div
            data-reveal=""
            data-delay="240"
            style={{
              padding: "28px",
              borderRadius: "22px",
              background: "rgba(255,255,255,.7)",
              border: "1px solid rgba(22,21,59,.08)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,.95),0 24px 50px -34px rgba(22,21,59,.4)",
            }}
          >
            {" "}
            <div
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "12px",
                background: "rgba(22,21,59,.1)",
                color: "#16153b",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                font: "700 16px 'JetBrains Mono',monospace",
              }}
            >
              04
            </div>{" "}
            <div style={{ marginTop: "20px", fontSize: "20px", fontWeight: "700", color: "#16153b" }}>
              AI Desk &amp; Agent Telemetry
            </div>{" "}
            <p style={{ margin: "10px 0 0", fontSize: "15.5px" }}>
              In partnership with AgentsOps, watch specialized AI agents synthesize market news, classify market regime,
              and answer chat inquiries.
            </p>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <section id="schedule" style={{ maxWidth: "1200px", margin: "0 auto", padding: "130px 24px 0" }}>
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
            Broadcast Timeline
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
            Live market streaming schedule.
          </h2>{" "}
          <p style={{ margin: "16px 0 0", fontSize: "17px", color: "#5d5c7a" }}>
            All times in Indian Standard Time (IST). Streams air Monday to Friday from 6:00 PM to 11:00 PM IST.
          </p>{" "}
        </div>{" "}
        <div style={{ marginTop: "44px", display: "flex", flexDirection: "column", gap: "14px" }}>
          {" "}
          <div
            data-reveal=""
            style={{
              padding: "24px 28px",
              borderRadius: "20px",
              background: "rgba(255,255,255,.75)",
              border: "1px solid rgba(22,21,59,.08)",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "20px",
            }}
          >
            {" "}
            <div style={{ display: "flex", alignItems: "center", gap: "24px", minWidth: "280px" }}>
              {" "}
              <span
                style={{ font: "700 18px 'JetBrains Mono',monospace", color: "var(--acc,#4f46e5)", width: "130px" }}
              >
                18:00 – 18:30
              </span>{" "}
              <div>
                {" "}
                <div style={{ fontSize: "18px", fontWeight: "700", color: "#16153b" }}>
                  Session Open &amp; AI Regime Analysis
                </div>{" "}
                <div style={{ marginTop: "4px", fontSize: "14.5px", color: "#5d5c7a" }}>
                  Global macro sentiment, BTCUSD and XAUTUSD volatility scan, and key levels definition.
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <span
              style={{
                font: "600 11.5px/1 'JetBrains Mono',monospace",
                padding: "6px 12px",
                borderRadius: "999px",
                background: "rgba(79,70,229,.1)",
                color: "var(--acc,#4f46e5)",
              }}
            >
              SESSION OPEN
            </span>{" "}
          </div>{" "}
          <div
            data-reveal=""
            data-delay="80"
            style={{
              padding: "24px 28px",
              borderRadius: "20px",
              background: "rgba(255,255,255,.75)",
              border: "1px solid rgba(22,21,59,.08)",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "20px",
            }}
          >
            {" "}
            <div style={{ display: "flex", alignItems: "center", gap: "24px", minWidth: "280px" }}>
              {" "}
              <span style={{ font: "700 18px 'JetBrains Mono',monospace", color: "#0f8a4b", width: "130px" }}>
                18:30 – 20:30
              </span>{" "}
              <div>
                {" "}
                <div style={{ fontSize: "18px", fontWeight: "700", color: "#16153b" }}>
                  Active Algorithmic Session (US Market Open)
                </div>{" "}
                <div style={{ marginTop: "4px", fontSize: "14.5px", color: "#5d5c7a" }}>
                  Peak liquidity overlap: live signal generation, momentum breakouts, and Delta Exchange order fills.
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <span
              style={{
                font: "600 11.5px/1 'JetBrains Mono',monospace",
                padding: "6px 12px",
                borderRadius: "999px",
                background: "rgba(15,138,75,.1)",
                color: "#0f8a4b",
              }}
            >
              ACTIVE RUNNERS
            </span>{" "}
          </div>{" "}
          <div
            data-reveal=""
            data-delay="160"
            style={{
              padding: "24px 28px",
              borderRadius: "20px",
              background: "rgba(255,255,255,.75)",
              border: "1px solid rgba(22,21,59,.08)",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "20px",
            }}
          >
            {" "}
            <div style={{ display: "flex", alignItems: "center", gap: "24px", minWidth: "280px" }}>
              {" "}
              <span style={{ font: "700 18px 'JetBrains Mono',monospace", color: "#16153b", width: "130px" }}>
                20:30 – 22:30
              </span>{" "}
              <div>
                {" "}
                <div style={{ fontSize: "18px", fontWeight: "700", color: "#16153b" }}>
                  SMC Liquidity Pools &amp; Order Block Retests
                </div>{" "}
                <div style={{ marginTop: "4px", fontSize: "14.5px", color: "#5d5c7a" }}>
                  Fair Value Gaps, institutional liquidity sweep verification, and dynamic trailing stops on BTCUSD
                  &amp; XAUTUSD.
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <span
              style={{
                font: "600 11.5px/1 'JetBrains Mono',monospace",
                padding: "6px 12px",
                borderRadius: "999px",
                background: "rgba(22,21,59,.08)",
                color: "#16153b",
              }}
            >
              SMC WORKSPACE
            </span>{" "}
          </div>{" "}
          <div
            data-reveal=""
            data-delay="240"
            style={{
              padding: "24px 28px",
              borderRadius: "20px",
              background: "rgba(255,255,255,.75)",
              border: "1px solid rgba(22,21,59,.08)",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "20px",
            }}
          >
            {" "}
            <div style={{ display: "flex", alignItems: "center", gap: "24px", minWidth: "280px" }}>
              {" "}
              <span style={{ font: "700 18px 'JetBrains Mono',monospace", color: "#5d5c7a", width: "130px" }}>
                22:30 – 23:00
              </span>{" "}
              <div>
                {" "}
                <div style={{ fontSize: "18px", fontWeight: "700", color: "#16153b" }}>
                  Session Wrap, Risk Audit &amp; Net P&amp;L Review
                </div>{" "}
                <div style={{ marginTop: "4px", fontSize: "14.5px", color: "#5d5c7a" }}>
                  Audit of trades against daily limits, net P&amp;L after exchange costs, and walk-forward verification.
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <span
              style={{
                font: "600 11.5px/1 'JetBrains Mono',monospace",
                padding: "6px 12px",
                borderRadius: "999px",
                background: "rgba(93,92,122,.12)",
                color: "#5d5c7a",
              }}
            >
              AUDIT &amp; WRAP
            </span>{" "}
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
            top: "-260px",
            right: "-160px",
            width: "700px",
            height: "700px",
            borderRadius: "50%",
            background: "radial-gradient(circle,rgba(229,9,20,.22),rgba(229,9,20,0) 65%)",
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
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "36px 64px",
            }}
          >
            {" "}
            <div data-reveal="" style={{ flex: "1 1 480px", maxWidth: "680px" }}>
              {" "}
              <div
                style={{
                  font: "600 11px/1 'JetBrains Mono',monospace",
                  letterSpacing: ".14em",
                  textTransform: "uppercase",
                  color: "#ff8595",
                }}
              >
                CHANNEL PARTNER SPOTLIGHT
              </div>{" "}
              <h2
                style={{
                  margin: "18px 0 0",
                  fontSize: "clamp(30px,4.4vw,52px)",
                  lineHeight: "1.04",
                  letterSpacing: "-.035em",
                  fontWeight: "700",
                  color: "#fff",
                  textWrap: "balance",
                }}
              >
                {" "}
                About our partner, AgentsOps.{" "}
              </h2>{" "}
              <p
                style={{
                  margin: "18px 0 0",
                  fontSize: "17px",
                  lineHeight: "1.6",
                  color: "#c2c0dc",
                  textWrap: "pretty",
                }}
              >
                {" "}
                <strong>AgentsOps</strong> is dedicated to exploring autonomous AI agents, enterprise automation, and
                quantitative developer workflows. Through this official partnership, AgentsOps broadcasts daily live
                runs of Niveshmarg Edge executing on BTCUSD and XAUTUSD, providing architectural breakdowns, strategy
                telemetry, and community Q&amp;A.{" "}
              </p>{" "}
              <div style={{ marginTop: "28px", display: "flex", flexWrap: "wrap", gap: "14px" }}>
                {" "}
                <a
                  className="hv1"
                  href="https://www.youtube.com/@agentsops"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "14px 26px",
                    borderRadius: "999px",
                    background: "#e50914",
                    color: "#fff",
                    fontWeight: "600",
                    fontSize: "15px",
                    boxShadow: "0 14px 30px -12px rgba(229,9,20,.65)",
                    transition: "transform .2s",
                  }}
                >
                  {" "}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>{" "}
                  Subscribe on YouTube (@agentsops){" "}
                </a>{" "}
              </div>{" "}
            </div>{" "}
            <div
              data-reveal="scale"
              data-delay="120"
              style={{
                flex: "1 1 360px",
                maxWidth: "440px",
                borderRadius: "24px",
                background: "rgba(255,255,255,.05)",
                border: "1px solid rgba(255,255,255,.1)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,.1)",
                padding: "32px",
              }}
            >
              {" "}
              <div style={{ font: "600 12px/1 'JetBrains Mono',monospace", color: "#ff8595", letterSpacing: ".12em" }}>
                COMMUNITY &amp; INTERACTION
              </div>{" "}
              <div style={{ marginTop: "16px", fontSize: "22px", fontWeight: "700", color: "#fff" }}>
                Join the live chat: 6 PM – 11 PM IST
              </div>{" "}
              <p style={{ margin: "12px 0 0", fontSize: "15px", lineHeight: "1.55", color: "#a8a6c9" }}>
                {" "}
                Ask questions about BTCUSD or XAUTUSD indicator parameters, risk engine limits, or execution logic
                directly in the YouTube Live Chat. The team interacts live throughout every evening session.{" "}
              </p>{" "}
              <div
                style={{
                  marginTop: "20px",
                  paddingTop: "18px",
                  borderTop: "1px solid rgba(255,255,255,.08)",
                  font: "500 12px/1.4 'JetBrains Mono',monospace",
                  color: "#8e8cb3",
                }}
              >
                {" "}
                Channel URL:{" "}
                <a
                  href="https://www.youtube.com/@agentsops"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#ff8595" }}
                >
                  youtube.com/@agentsops
                </a>{" "}
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
            Common Questions
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
            Frequently asked questions about the stream.
          </h2>{" "}
        </div>{" "}
        <div
          style={{
            marginTop: "44px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            gap: "20px",
          }}
        >
          {" "}
          <div
            data-reveal=""
            style={{
              padding: "28px",
              borderRadius: "20px",
              background: "rgba(255,255,255,.7)",
              border: "1px solid rgba(22,21,59,.08)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,.95),0 20px 40px -28px rgba(22,21,59,.35)",
            }}
          >
            {" "}
            <div style={{ fontSize: "18px", fontWeight: "700", color: "#16153b" }}>
              Which instruments are streamed live?
            </div>{" "}
            <p style={{ margin: "12px 0 0", fontSize: "15.5px", color: "#3d3c5c" }}>
              We stream algorithmic runners actively executing on <strong>BTCUSD</strong> (Bitcoin Perpetual) and{" "}
              <strong>XAUTUSD</strong> (Tether Gold Perpetual), capitalised in USD on Delta Exchange.
            </p>{" "}
          </div>{" "}
          <div
            data-reveal=""
            data-delay="80"
            style={{
              padding: "28px",
              borderRadius: "20px",
              background: "rgba(255,255,255,.7)",
              border: "1px solid rgba(22,21,59,.08)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,.95),0 20px 40px -28px rgba(22,21,59,.35)",
            }}
          >
            {" "}
            <div style={{ fontSize: "18px", fontWeight: "700", color: "#16153b" }}>
              What are the live stream hours?
            </div>{" "}
            <p style={{ margin: "12px 0 0", fontSize: "15.5px", color: "#3d3c5c" }}>
              The stream airs <strong>Monday to Friday from 6:00 PM IST to 11:00 PM IST</strong>, aligning with the peak
              overlap of global commodities and crypto trading sessions.
            </p>{" "}
          </div>{" "}
          <div
            data-reveal=""
            data-delay="160"
            style={{
              padding: "28px",
              borderRadius: "20px",
              background: "rgba(255,255,255,.7)",
              border: "1px solid rgba(22,21,59,.08)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,.95),0 20px 40px -28px rgba(22,21,59,.35)",
            }}
          >
            {" "}
            <div style={{ fontSize: "18px", fontWeight: "700", color: "#16153b" }}>
              When does the stream premiere?
            </div>{" "}
            <p style={{ margin: "12px 0 0", fontSize: "15.5px", color: "#3d3c5c" }}>
              The live stream officially launches on <strong>07th of October</strong>. You can subscribe to{" "}
              <a href="https://www.youtube.com/@agentsops" target="_blank" rel="noopener noreferrer">
                @agentsops
              </a>{" "}
              on YouTube to get notified the moment we go live.
            </p>{" "}
          </div>{" "}
          <div
            data-reveal=""
            data-delay="240"
            style={{
              padding: "28px",
              borderRadius: "20px",
              background: "rgba(255,255,255,.7)",
              border: "1px solid rgba(22,21,59,.08)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,.95),0 20px 40px -28px rgba(22,21,59,.35)",
            }}
          >
            {" "}
            <div style={{ fontSize: "18px", fontWeight: "700", color: "#16153b" }}>
              Does AI place trades directly on the stream?
            </div>{" "}
            <p style={{ margin: "12px 0 0", fontSize: "15.5px", color: "#3d3c5c" }}>
              No. AI provides regime detection and telemetry commentary. Every trade is placed by deterministic
              mathematical strategy logic that must pass our 6-gate risk engine.
            </p>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "140px 24px 0" }}>
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
              background: "radial-gradient(circle,rgba(229,9,20,.18),rgba(229,9,20,0) 68%)",
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
                color: "#e50914",
              }}
            >
              Get Started with Niveshmarg Edge
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
              Trade BTCUSD &amp; XAUTUSD with the same engine.
            </h2>{" "}
            <p style={{ margin: "18px 0 0", maxWidth: "520px", textWrap: "pretty" }}>
              Build your own visual strategies, run walk-forward backtests without look-ahead bias, and paper trade on
              live crypto and gold perpetuals.
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
            <a
              className="hv1"
              href="https://www.youtube.com/@agentsops"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "16px 26px",
                borderRadius: "999px",
                background: "#e50914",
                color: "#fff",
                fontWeight: "600",
                fontSize: "16px",
                textAlign: "center",
                boxShadow: "0 14px 30px -12px rgba(229,9,20,.65)",
                transition: "transform .2s",
              }}
            >
              Subscribe on YouTube
            </a>{" "}
            <div
              style={{
                marginTop: "4px",
                font: "500 11.5px/1.5 'JetBrains Mono',monospace",
                color: "#5d5c7a",
                textAlign: "center",
              }}
            >
              Mon–Fri 6 PM–11 PM IST · Starts 07 October
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <SiteFooter />{" "}
    </MotionRoot>
  );
}
