"use client";

import { Fragment } from "react";
import MotionRoot from "@/components/MotionRoot";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { useDocsPage } from "@/components/pages/DocsState";

// Generated from UI_PROTO/Docs.dc.html.
const SKIN = "Indigo sky";

export default function DocsPage() {
  const { query, onQuery, countLabel, groups, docs, empty } = useDocsPage();
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
          top: "-60px",
          right: "-260px",
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          background: "radial-gradient(circle,rgba(125,190,255,.24),rgba(125,190,255,0) 68%)",
          pointerEvents: "none",
        }}
      />{" "}
      <div style={{ position: "sticky", top: "12px", zIndex: "50" }}>
        <SiteNav active="docs" />
      </div>{" "}
      <section
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
          Documentation
        </div>{" "}
        <h1
          data-reveal=""
          data-delay="80"
          style={{
            margin: "22px auto 0",
            maxWidth: "820px",
            fontSize: "clamp(38px,6vw,72px)",
            lineHeight: "1",
            letterSpacing: "-.045em",
            fontWeight: "800",
            color: "#16153b",
            textWrap: "balance",
          }}
        >
          Everything about Niveshmarg Edge, written down.
        </h1>{" "}
        <div
          data-reveal=""
          data-delay="160"
          style={{
            margin: "34px auto 0",
            maxWidth: "620px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "8px 8px 8px 20px",
            borderRadius: "999px",
            background: "rgba(255,255,255,.85)",
            border: "1px solid rgba(22,21,59,.1)",
            boxShadow: "inset 0 1px 0 #fff,0 24px 50px -30px rgba(22,21,59,.45)",
          }}
        >
          {" "}
          <span style={{ font: "500 15px/1 'JetBrains Mono',monospace", color: "var(--acc,#4f46e5)" }}>/</span>{" "}
          <input
            value={query}
            onChange={onQuery}
            placeholder="Search guides: backtest, broker, MCP…"
            style={{
              flex: "1",
              minWidth: "0",
              border: "0",
              outline: "0",
              background: "transparent",
              fontSize: "16px",
              color: "#16153b",
              padding: "10px 0",
            }}
          />{" "}
          <span
            style={{
              padding: "10px 14px",
              borderRadius: "999px",
              background: "#16153b",
              color: "#fff",
              font: "500 12px/1 'JetBrains Mono',monospace",
            }}
          >
            {countLabel}
          </span>{" "}
        </div>{" "}
        <div
          data-reveal=""
          data-delay="220"
          style={{ marginTop: "18px", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "8px" }}
        >
          {" "}
          {groups.map((g, gIndex) => (
            <Fragment key={gIndex}>
              {" "}
              <button
                onClick={g.pick}
                style={{
                  border: "1px solid rgba(22,21,59,.1)",
                  cursor: "pointer",
                  padding: "9px 14px",
                  borderRadius: "999px",
                  fontSize: "14px",
                  fontWeight: "500",
                  background: `${g.bg}`,
                  color: `${g.fg}`,
                }}
              >
                {g.label}
              </button>{" "}
            </Fragment>
          ))}{" "}
        </div>{" "}
      </section>{" "}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "56px 24px 0" }}>
        {" "}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(270px,1fr))", gap: "14px" }}>
          {" "}
          {docs.map((d, dIndex) => (
            <Fragment key={dIndex}>
              {" "}
              <a
                className="hv5"
                href="#"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  padding: "22px",
                  borderRadius: "20px",
                  background: "rgba(255,255,255,.7)",
                  border: "1px solid rgba(22,21,59,.08)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,.95),0 20px 44px -34px rgba(22,21,59,.45)",
                  color: "#3d3c5c",
                  transition: "transform .25s,box-shadow .25s",
                }}
              >
                {" "}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px" }}>
                  <span style={{ font: "600 12px/1 'JetBrains Mono',monospace", color: "var(--acc,#4f46e5)" }}>
                    {d.num}
                  </span>
                  <span
                    style={{
                      font: "500 11px/1 'JetBrains Mono',monospace",
                      letterSpacing: ".08em",
                      padding: "5px 8px",
                      borderRadius: "6px",
                      background: "rgba(22,21,59,.05)",
                      color: "#5d5c7a",
                    }}
                  >
                    {d.group}
                  </span>
                </div>{" "}
                <span style={{ fontSize: "19px", fontWeight: "700", lineHeight: "1.25", color: "#16153b" }}>
                  {d.title}
                </span>{" "}
                <span style={{ fontSize: "15px" }}>{d.desc}</span>{" "}
              </a>{" "}
            </Fragment>
          ))}{" "}
        </div>{" "}
        {empty && (
          <>
            {" "}
            <div style={{ padding: "60px 20px", textAlign: "center", fontSize: "17px", color: "#5d5c7a" }}>
              No guides match that search.
            </div>{" "}
          </>
        )}{" "}
      </section>{" "}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "120px 24px 0" }}>
        {" "}
        <div
          data-reveal="scale"
          style={{
            borderRadius: "28px",
            background: "#0d0c22",
            color: "#a8a6c9",
            padding: "clamp(28px,5vw,56px)",
            display: "flex",
            flexWrap: "wrap",
            gap: "36px 64px",
            alignItems: "center",
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
              right: "-200px",
              width: "620px",
              height: "620px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle,rgba(var(--acc-rgb,99,102,241),.3),rgba(var(--acc-rgb,99,102,241),0) 68%)",
              pointerEvents: "none",
            }}
          />{" "}
          <div style={{ position: "relative", flex: "1 1 340px", minWidth: "0" }}>
            {" "}
            <div
              style={{
                font: "500 12px/1 'JetBrains Mono',monospace",
                letterSpacing: ".14em",
                textTransform: "uppercase",
                color: "var(--acc-lite,#a5b4fc)",
              }}
            >
              Quickstart
            </div>{" "}
            <h2
              style={{
                margin: "18px 0 0",
                fontSize: "clamp(28px,3.8vw,46px)",
                lineHeight: "1.06",
                letterSpacing: "-.035em",
                fontWeight: "700",
                color: "#fff",
                textWrap: "balance",
              }}
            >
              Up and running with Docker.
            </h2>{" "}
            <p style={{ margin: "16px 0 0", maxWidth: "440px", textWrap: "pretty" }}>
              The Getting Started guide walks through configuration, your first broker login and your first backtest.
            </p>{" "}
          </div>{" "}
          <div
            style={{
              position: "relative",
              flex: "1 1 420px",
              minWidth: "0",
              padding: "18px 20px",
              borderRadius: "14px",
              background: "#17163a",
              border: "1px solid rgba(255,255,255,.08)",
              font: "400 13px/1.9 'JetBrains Mono',monospace",
              color: "#eeedfb",
              overflowX: "auto",
              whiteSpace: "nowrap",
            }}
          >
            {" "}
            <div>
              <span style={{ color: "var(--acc-lite,#a5b4fc)" }}>$ </span>docker compose up -d
            </div>{" "}
            <div>
              <span style={{ color: "var(--acc-lite,#a5b4fc)" }}>$ </span>docker compose exec web python manage.py
              migrate
            </div>{" "}
            <div>
              <span style={{ color: "var(--acc-lite,#a5b4fc)" }}>$ </span>docker compose exec web python manage.py
              sync_starter_templates
            </div>{" "}
            <div style={{ color: "#7fe0aa" }}>✓ open /admin/ and sign in</div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <SiteFooter />{" "}
    </MotionRoot>
  );
}
