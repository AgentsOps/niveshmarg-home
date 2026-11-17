"use client";

import { Fragment } from "react";
import MotionRoot from "@/components/MotionRoot";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { useContactPage } from "@/components/pages/ContactState";

// Generated from UI_PROTO/Contact.dc.html.
const SKIN = "Indigo sky";

export default function ContactPage() {
  const { sent, firstName, email, reset, notSent, submit, name, onName, onEmail, roles, markets, msg, onMsg, faqs } =
    useContactPage();
  return (
    <MotionRoot
      skin={SKIN}
      className="pg-contact"
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
            "radial-gradient(circle,rgba(var(--acc-rgb,99,102,241),.22),rgba(var(--acc-rgb,99,102,241),0) 68%)",
          pointerEvents: "none",
        }}
      />{" "}
      <div
        data-blob=""
        style={{
          position: "absolute",
          top: "160px",
          right: "-260px",
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          background: "radial-gradient(circle,rgba(125,190,255,.24),rgba(125,190,255,0) 68%)",
          pointerEvents: "none",
        }}
      />{" "}
      <div style={{ position: "sticky", top: "12px", zIndex: "50" }}>
        <SiteNav active="contact" />
      </div>{" "}
      <section
        style={{
          position: "relative",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "72px 24px 0",
          display: "flex",
          flexWrap: "wrap",
          gap: "48px 64px",
          alignItems: "flex-start",
        }}
      >
        {" "}
        <div style={{ flex: "1 1 380px", minWidth: "0" }}>
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
            Request a demo
          </div>{" "}
          <h1
            data-reveal=""
            data-delay="80"
            style={{
              margin: "22px 0 0",
              fontSize: "clamp(38px,5.6vw,70px)",
              lineHeight: "1",
              letterSpacing: "-.045em",
              fontWeight: "800",
              color: "#16153b",
              textWrap: "balance",
            }}
          >
            See it run on your instruments.
          </h1>{" "}
          <p data-reveal="" data-delay="160" style={{ margin: "22px 0 0", maxWidth: "460px", textWrap: "pretty" }}>
            A live walkthrough with our team. Bring a strategy idea and we&apos;ll build, backtest and paper trade it
            together.
          </p>{" "}
          <div data-reveal="" data-delay="220" style={{ marginTop: "34px", display: "flex", flexDirection: "column" }}>
            {" "}
            <div style={{ display: "flex", gap: "16px", padding: "16px 0", borderTop: "1px solid rgba(22,21,59,.1)" }}>
              <span style={{ font: "600 12px/1.7 'JetBrains Mono',monospace", color: "var(--acc,#4f46e5)" }}>01</span>
              <span style={{ fontSize: "16px", color: "#16153b" }}>Build your idea in the visual builder</span>
            </div>{" "}
            <div style={{ display: "flex", gap: "16px", padding: "16px 0", borderTop: "1px solid rgba(22,21,59,.1)" }}>
              <span style={{ font: "600 12px/1.7 'JetBrains Mono',monospace", color: "var(--acc,#4f46e5)" }}>02</span>
              <span style={{ fontSize: "16px", color: "#16153b" }}>Backtest it with real Indian costs</span>
            </div>{" "}
            <div style={{ display: "flex", gap: "16px", padding: "16px 0", borderTop: "1px solid rgba(22,21,59,.1)" }}>
              <span style={{ font: "600 12px/1.7 'JetBrains Mono',monospace", color: "var(--acc,#4f46e5)" }}>03</span>
              <span style={{ fontSize: "16px", color: "#16153b" }}>Walk through the risk engine and live cockpit</span>
            </div>{" "}
            <div
              style={{
                display: "flex",
                gap: "16px",
                padding: "16px 0",
                borderTop: "1px solid rgba(22,21,59,.1)",
                borderBottom: "1px solid rgba(22,21,59,.1)",
              }}
            >
              <span style={{ font: "600 12px/1.7 'JetBrains Mono',monospace", color: "var(--acc,#4f46e5)" }}>04</span>
              <span style={{ fontSize: "16px", color: "#16153b" }}>Answer your questions on brokers and setup</span>
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div
          data-reveal="scale"
          data-delay="200"
          style={{
            flex: "1 1 460px",
            minWidth: "0",
            borderRadius: "26px",
            background: "rgba(255,255,255,.78)",
            border: "1px solid rgba(22,21,59,.08)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,.95),0 50px 90px -50px rgba(22,21,59,.5)",
            backdropFilter: "blur(14px)",
            padding: "clamp(22px,4vw,36px)",
          }}
        >
          {" "}
          {sent && (
            <>
              {" "}
              <div style={{ padding: "40px 8px", textAlign: "center" }}>
                {" "}
                <div
                  style={{
                    width: "64px",
                    height: "64px",
                    margin: "0 auto",
                    borderRadius: "50%",
                    background: "var(--acc,#4f46e5)",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "28px",
                    boxShadow: "0 18px 36px -14px rgba(var(--acc-rgb,99,102,241),.8)",
                  }}
                >
                  ✓
                </div>{" "}
                <div
                  style={{
                    marginTop: "22px",
                    fontSize: "26px",
                    fontWeight: "700",
                    letterSpacing: "-.02em",
                    color: "#16153b",
                  }}
                >
                  Thanks, {firstName}.
                </div>{" "}
                <p style={{ margin: "10px auto 0", maxWidth: "360px" }}>
                  We&apos;ll email {email} to schedule your walkthrough.
                </p>{" "}
                <button
                  onClick={reset}
                  style={{
                    marginTop: "24px",
                    border: "1px solid rgba(22,21,59,.14)",
                    cursor: "pointer",
                    padding: "12px 20px",
                    borderRadius: "999px",
                    background: "#fff",
                    color: "#16153b",
                    fontSize: "15px",
                    fontWeight: "600",
                  }}
                >
                  Send another request
                </button>{" "}
              </div>{" "}
            </>
          )}{" "}
          {notSent && (
            <>
              {" "}
              <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                {" "}
                <div
                  style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: "14px" }}
                >
                  {" "}
                  <label
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "7px",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#16153b",
                    }}
                  >
                    Full name
                    <input
                      required
                      value={name}
                      onChange={onName}
                      placeholder="Aarav Sharma"
                      style={{
                        border: "1px solid rgba(22,21,59,.14)",
                        outline: "0",
                        borderRadius: "12px",
                        padding: "13px 14px",
                        fontSize: "16px",
                        fontWeight: "400",
                        background: "#fff",
                        color: "#16153b",
                        transition: "box-shadow .2s",
                      }}
                    />
                  </label>{" "}
                  <label
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "7px",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#16153b",
                    }}
                  >
                    Work email
                    <input
                      required
                      type="email"
                      value={email}
                      onChange={onEmail}
                      placeholder="aarav@fund.in"
                      style={{
                        border: "1px solid rgba(22,21,59,.14)",
                        outline: "0",
                        borderRadius: "12px",
                        padding: "13px 14px",
                        fontSize: "16px",
                        fontWeight: "400",
                        background: "#fff",
                        color: "#16153b",
                        transition: "box-shadow .2s",
                      }}
                    />
                  </label>{" "}
                </div>{" "}
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  {" "}
                  <span style={{ fontSize: "14px", fontWeight: "600", color: "#16153b" }}>I trade as</span>{" "}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "6px",
                      padding: "4px",
                      borderRadius: "14px",
                      background: "rgba(22,21,59,.05)",
                    }}
                  >
                    {" "}
                    {roles.map((r, rIndex) => (
                      <Fragment key={rIndex}>
                        {" "}
                        <button
                          type="button"
                          onClick={r.pick}
                          style={{
                            flex: "1 1 120px",
                            border: "0",
                            cursor: "pointer",
                            padding: "11px 12px",
                            borderRadius: "10px",
                            fontSize: "14.5px",
                            fontWeight: "600",
                            background: `${r.bg}`,
                            color: `${r.fg}`,
                            boxShadow: `${r.sh}`,
                            transition: "background .2s",
                          }}
                        >
                          {r.label}
                        </button>{" "}
                      </Fragment>
                    ))}{" "}
                  </div>{" "}
                </div>{" "}
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  {" "}
                  <span style={{ fontSize: "14px", fontWeight: "600", color: "#16153b" }}>
                    Markets you&apos;re interested in
                  </span>{" "}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {" "}
                    {markets.map((m, mIndex) => (
                      <Fragment key={mIndex}>
                        {" "}
                        <button
                          type="button"
                          onClick={m.toggle}
                          style={{
                            cursor: "pointer",
                            padding: "10px 14px",
                            borderRadius: "999px",
                            fontSize: "14.5px",
                            fontWeight: "500",
                            border: `1px solid ${m.bd}`,
                            background: `${m.bg}`,
                            color: `${m.fg}`,
                            transition: "background .2s",
                          }}
                        >
                          {m.label}
                        </button>{" "}
                      </Fragment>
                    ))}{" "}
                  </div>{" "}
                </div>{" "}
                <label
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "7px",
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#16153b",
                  }}
                >
                  What would you like to see?
                  <textarea
                    rows={3}
                    value={msg}
                    onChange={onMsg}
                    placeholder="An SMC strategy on Bank Nifty, paper traded through Zerodha…"
                    style={{
                      border: "1px solid rgba(22,21,59,.14)",
                      outline: "0",
                      borderRadius: "12px",
                      padding: "13px 14px",
                      fontSize: "16px",
                      fontWeight: "400",
                      background: "#fff",
                      color: "#16153b",
                      resize: "vertical",
                      transition: "box-shadow .2s",
                    }}
                  />
                </label>{" "}
                <button
                  className="hv6"
                  type="submit"
                  style={{
                    border: "0",
                    cursor: "pointer",
                    padding: "16px 24px",
                    borderRadius: "999px",
                    background: "var(--acc,#4f46e5)",
                    color: "#fff",
                    fontSize: "16px",
                    fontWeight: "600",
                    boxShadow: "0 14px 30px -12px rgba(var(--acc-rgb,99,102,241),.75)",
                    transition: "transform .2s",
                  }}
                >
                  Request my demo
                </button>{" "}
                <span style={{ fontSize: "13px", color: "#5d5c7a", textAlign: "center" }}>
                  We&apos;ll only use your details to arrange the demo.
                </span>{" "}
              </form>{" "}
            </>
          )}{" "}
        </div>{" "}
      </section>{" "}
      <section style={{ maxWidth: "900px", margin: "0 auto", padding: "130px 24px 0" }}>
        {" "}
        <div data-reveal="" style={{ textAlign: "center" }}>
          {" "}
          <div
            style={{
              font: "500 12px/1 'JetBrains Mono',monospace",
              letterSpacing: ".14em",
              textTransform: "uppercase",
              color: "var(--acc,#4f46e5)",
            }}
          >
            Questions
          </div>{" "}
          <h2
            style={{
              margin: "18px 0 0",
              fontSize: "clamp(30px,4.4vw,50px)",
              lineHeight: "1.04",
              letterSpacing: "-.035em",
              fontWeight: "700",
              color: "#16153b",
            }}
          >
            Before you ask.
          </h2>{" "}
        </div>{" "}
        <div style={{ marginTop: "36px", display: "flex", flexDirection: "column", gap: "10px" }}>
          {" "}
          {faqs.map((f, fIndex) => (
            <Fragment key={fIndex}>
              {" "}
              <div
                style={{
                  borderRadius: "18px",
                  background: "rgba(255,255,255,.72)",
                  border: "1px solid rgba(22,21,59,.08)",
                  overflow: "hidden",
                }}
              >
                {" "}
                <button
                  onClick={f.toggle}
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "16px",
                    border: "0",
                    cursor: "pointer",
                    background: "transparent",
                    padding: "20px 22px",
                    textAlign: "left",
                    fontSize: "17.5px",
                    fontWeight: "600",
                    color: "#16153b",
                  }}
                >
                  <span>{f.q}</span>
                  <span
                    style={{
                      flex: "none",
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      background: `${f.iconBg}`,
                      color: `${f.iconFg}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "18px",
                      transition: "background .2s",
                    }}
                  >
                    {f.icon}
                  </span>
                </button>{" "}
                {f.open && (
                  <>
                    {" "}
                    <div style={{ padding: "0 22px 20px", fontSize: "16px", maxWidth: "720px" }}>{f.a}</div>{" "}
                  </>
                )}{" "}
              </div>{" "}
            </Fragment>
          ))}{" "}
        </div>{" "}
      </section>{" "}
      <SiteFooter />{" "}
    </MotionRoot>
  );
}
