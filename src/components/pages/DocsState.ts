"use client";

import { useState, type ChangeEvent } from "react";

const DOCS: [num: string, title: string, group: string, desc: string][] = [
  ["01", "Getting started", "Start here", "Install, configure and run your first backtest."],
  ["02", "Visual strategy builder", "Build", "Nodes, typed ports, live preview and templates."],
  ["03", "Chart workspace & SMC", "Build", "Streaming charts, Smart Money overlays and the chart assistant."],
  ["04", "Backtesting & optimization", "Test", "Invariants, data checks, walk-forward and portfolio runs."],
  ["05", "Trading runners & risk", "Trade", "Paper and live runners, risk profiles and promotion."],
  ["06", "Broker integrations", "Trade", "Connect Fyers, Zerodha, Groww and Delta Exchange."],
  ["07", "Market data & DuckDB", "Platform", "The Parquet warehouse and how candles are stored."],
  ["08", "AI stock analysis", "Research", "Multi-agent reports, news scout and market regimes."],
  ["09", "Admin dashboard & operations", "Platform", "The cockpit, tenants, schedules, health and backups."],
  ["10", "MCP server", "Platform", "Connect Claude, Cursor and other agents to 24 tools."],
  ["11", "Commands & CLI reference", "Platform", "Every management command in one place."],
  ["12", "Swing trading suite", "Research", "Analyzers, universe, scheduling and builder nodes."],
  ["13", "Swing suite user guide", "Research", "The daily routine, stages and acting on a Buy."],
  ["14", "Screener", "Research", "Filters, presets and the daily refresh."],
  ["15", "Validated strategies", "Test", "Our research method, results and limitations."],
  ["16", "UI design system", "Platform", "The Glass visual language used across the app."],
];

const GROUPS = ["All", "Start here", "Build", "Test", "Trade", "Research", "Platform"];

export function useDocsPage() {
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState("All");

  const q = query.trim().toLowerCase();
  const docs = DOCS.filter(
    (d) => (group === "All" || d[2] === group) && (!q || (d[1] + " " + d[3]).toLowerCase().includes(q)),
  ).map(([num, title, grp, desc]) => ({ num, title, group: grp, desc }));

  const groups = GROUPS.map((label) => ({
    label,
    bg: label === group ? "var(--acc,#4f46e5)" : "rgba(255,255,255,.75)",
    fg: label === group ? "#fff" : "#3d3c5c",
    pick: () => setGroup(label),
  }));

  return {
    query,
    onQuery: (e: ChangeEvent<HTMLInputElement>) => setQuery(e.target.value),
    docs,
    groups,
    empty: docs.length === 0,
    countLabel: docs.length + (docs.length === 1 ? " guide" : " guides"),
  };
}
