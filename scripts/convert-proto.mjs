// Regenerates src/components/pages/*Page.tsx and src/app/hover.css from the UI_PROTO/*.dc.html design files.
// usage: npm run convert-proto   (or: node scripts/convert-proto.mjs <protoDir> <outDir> <cssOut>)
import fs from "node:fs";
import path from "node:path";
import { parseDocument } from "htmlparser2";

const [, , protoDir, outDir, cssOut] = process.argv;

const ROUTES = {
  "Home.dc.html": "/",
  "Builder.dc.html": "/builder",
  "Charts.dc.html": "/charts",
  "Backtesting.dc.html": "/backtesting",
  "Live.dc.html": "/live",
  "Research.dc.html": "/research",
  "Integrations.dc.html": "/integrations",
  "Strategies.dc.html": "/strategies",
  "Docs.dc.html": "/docs",
  "Contact.dc.html": "/contact",
};

// page name -> { skin, client, preamble, className }
const PAGES = {
  Home: { skin: "Indigo sky", client: false, preamble: "const showTicker = true;" },
  Builder: { skin: "Indigo sky" },
  Charts: { skin: "Forest" },
  Backtesting: { skin: "Indigo sky" },
  Live: { skin: "Indigo sky" },
  Research: { skin: "Indigo sky" },
  Integrations: { skin: "Indigo sky" },
  Strategies: { skin: "Indigo sky" },
  Docs: { skin: "Indigo sky", client: true, hook: "useDocsPage" },
  Contact: { skin: "Indigo sky", client: true, hook: "useContactPage", className: "pg-contact" },
};

const hover = new Map(); // css text -> class name
const hoverClass = (css) => {
  const norm = css.trim().replace(/;+\s*$/, "");
  if (!hover.has(norm)) hover.set(norm, "hv" + (hover.size + 1));
  return hover.get(norm);
};

const ATTR_RENAME = {
  class: "className", for: "htmlFor", crossorigin: "crossOrigin", tabindex: "tabIndex",
  readonly: "readOnly", maxlength: "maxLength", autocomplete: "autoComplete", viewbox: "viewBox",
  spellcheck: "spellCheck", autofocus: "autoFocus", enterkeyhint: "enterKeyHint",
};
const NUMERIC = new Set(["rows", "cols", "tabIndex", "maxLength", "colSpan", "rowSpan"]);
const NO_WS_PARENTS = new Set(["svg", "g", "defs", "table", "thead", "tbody", "tfoot", "tr", "colgroup", "select", "ul", "ol"]);
const DROP_ATTRS = /^(hint-|data-screen-label$)/;

const interp = /\{\{\s*([^}]+?)\s*\}\}/g;
const isWholeInterp = (v) => /^\s*\{\{\s*([^}]+?)\s*\}\}\s*$/.exec(v);

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\{/g, "&#123;").replace(/\}/g, "&#125;").replace(/'/g, "&apos;").replace(/"/g, "&quot;");

// "a {{ x }} b" -> `a ${x} b`
const toTemplate = (v) => "`" + v.replace(/`/g, "\\`").replace(/\$\{/g, "\\${").replace(interp, (_, e) => "${" + e + "}") + "`";
const jsValue = (v) => (v.match(interp) ? toTemplate(v) : JSON.stringify(v));

const camel = (p) => {
  if (p.startsWith("--")) return JSON.stringify(p);
  let c = p.replace(/^-(webkit|moz|ms)-/, (_, v) => (v === "ms" ? "ms-" : v[0].toUpperCase() + v.slice(1) + "-"));
  c = c.replace(/-([a-z])/g, (_, ch) => ch.toUpperCase());
  return /^[A-Za-z_$][\w$]*$/.test(c) ? c : JSON.stringify(c);
};

// split on ; outside parens / quotes
function splitDecls(s) {
  const out = []; let depth = 0, q = null, cur = "";
  for (const ch of s) {
    if (q) { if (ch === q) q = null; cur += ch; continue; }
    if (ch === "'" || ch === '"') { q = ch; cur += ch; continue; }
    if (ch === "(") depth++;
    if (ch === ")") depth--;
    if (ch === ";" && depth === 0) { out.push(cur); cur = ""; continue; }
    cur += ch;
  }
  out.push(cur);
  return out.map((d) => d.trim()).filter(Boolean);
}

function styleObj(s) {
  const parts = [];
  let custom = false;
  for (const d of splitDecls(s)) {
    const i = d.indexOf(":");
    if (i < 0) continue;
    const prop = d.slice(0, i).trim(), val = d.slice(i + 1).trim();
    if (prop.startsWith("--")) custom = true;
    parts.push(`${camel(prop)}: ${jsValue(val)}`);
  }
  const obj = `{ ${parts.join(", ")} }`;
  return custom ? `${obj} as CSSProperties` : obj;
}

function linkTarget(href) {
  const [file, hash] = href.split("#");
  if (ROUTES[file] !== undefined) return ROUTES[file] + (hash ? "#" + hash : "");
  return null;
}

const ctx = { usesLink: false, usesFragment: false, usesCSSProps: false };

function attrsToJsx(el, extra = {}) {
  const out = [];
  const classes = [];
  for (const [rawName, value] of Object.entries(el.attribs)) {
    let name = ATTR_RENAME[rawName.toLowerCase()] || rawName;
    if (DROP_ATTRS.test(name)) continue;
    if (name === "ref") continue;
    if (name === "style-hover") { classes.push(hoverClass(value)); continue; }
    if (name === "className") { classes.push(value); continue; }
    if (name === "style") {
      const so = styleObj(value);
      if (so.includes("as CSSProperties")) ctx.usesCSSProps = true;
      out.push(`style={${so}}`);
      continue;
    }
    if (!name.startsWith("data-") && !name.startsWith("aria-") && name.includes("-")) {
      name = name.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    }
    if (name === "href" && el.name === "a") {
      const t = linkTarget(value);
      if (t !== null) { out.push(`href=${JSON.stringify(t)}`); continue; }
    }
    const whole = isWholeInterp(value);
    if (whole) { out.push(`${name}={${whole[1]}}`); continue; }
    if (value.match(interp)) { out.push(`${name}={${toTemplate(value)}}`); continue; }
    if (value === "" && !name.startsWith("data-")) { out.push(name); continue; }
    if (NUMERIC.has(name) && /^\d+$/.test(value)) { out.push(`${name}={${value}}`); continue; }
    if (/["&{}<>]/.test(value)) out.push(`${name}={${JSON.stringify(value)}}`);
    else out.push(`${name}="${value}"`);
  }
  for (const [k, v] of Object.entries(extra)) out.push(`${k}=${v}`);
  if (classes.length) out.unshift(`className="${classes.join(" ")}"`);
  return out.length ? " " + out.join(" ") : "";
}

function textToJsx(raw, parentName) {
  if (!/\S/.test(raw)) {
    if (NO_WS_PARENTS.has(parentName)) return "";
    return `{" "}`;
  }
  const t = raw.replace(/\s+/g, " ");
  let out = "";
  const lead = t.startsWith(" "), trail = t.endsWith(" ");
  const body = t.trim();
  if (lead) out += `{" "}`;
  let last = 0;
  for (const m of body.matchAll(interp)) {
    out += esc(body.slice(last, m.index));
    out += `{${m[1]}}`;
    last = m.index + m[0].length;
  }
  out += esc(body.slice(last));
  if (trail) out += `{" "}`;
  return out;
}

function children(el) {
  return (el.children || []).map((c) => node(c, el.name)).join("");
}

function node(n, parentName) {
  if (n.type === "text") return textToJsx(n.data, parentName);
  if (n.type === "comment") return "";
  if (n.type !== "tag" && n.type !== "script" && n.type !== "style") return "";
  const el = n;
  const name = el.name;
  if (name === "helmet") return "";
  if (name === "dc-import") {
    const comp = el.attribs.name;
    if (comp === "SiteNav") return `<SiteNav active=${JSON.stringify(el.attribs.active || "home")} />`;
    if (comp === "SiteFooter") return `<SiteFooter />`;
    throw new Error("unknown import " + comp);
  }
  if (name === "sc-if") {
    const v = isWholeInterp(el.attribs.value)[1];
    return `{${v} && (<>${children(el)}</>)}`;
  }
  if (name === "sc-for") {
    ctx.usesFragment = true;
    const list = isWholeInterp(el.attribs.list)[1], as = el.attribs.as;
    return `{${list}.map((${as}, ${as}Index) => (<Fragment key={${as}Index}>${children(el)}</Fragment>))}`;
  }
  // Root motion container
  if (el.attribs.ref && /rootRef/.test(el.attribs.ref)) {
    return `<MotionRoot skin={SKIN}${ctx.className ? ` className="${ctx.className}"` : ""}${attrsToJsx(el)}>${children(el)}</MotionRoot>`;
  }
  let tag = name;
  if (name === "a" && el.attribs.href && linkTarget(el.attribs.href) !== null) { tag = "Link"; ctx.usesLink = true; }
  const attrs = attrsToJsx(el);
  const kids = children(el);
  if (!kids) return `<${tag}${attrs} />`;
  return `<${tag}${attrs}>${kids}</${tag}>`;
}

function extractTemplate(src) {
  const open = src.indexOf("<x-dc>");
  const close = src.lastIndexOf("</x-dc>");
  return src.slice(open + 6, close);
}

function preprocess(page, tpl) {
  if (page === "Home") {
    // Home had bespoke logic bound to refs; route it through the shared motion engine.
    tpl = tpl.replace(/<canvas ref="\{\{ chartRef \}\}"/, '<canvas data-chart="candles" data-start="24050" data-vol="46" data-seed="11" data-long-label="LONG"');
    tpl = tpl.replace(/<canvas data-eq ref="\{\{ eqRef \}\}"/, '<canvas data-chart="equity" data-seed="5" data-a="124.5" data-b="111.2"');
    tpl = tpl.replace(
      '<div data-reveal="scale" style="flex:1 1 400px;min-width:0;align-self:flex-start;',
      '<div data-reveal="scale" data-gates data-t1="BUY 50 · NSE:SBIN-EQ · 10:42 IST" data-r1="Passed · routed to broker" data-t2="BUY 120 · NSE:SBIN-EQ · 15:16 IST" data-r2="Refused · after the 15:15 IST square-off" data-fail2="4" style="flex:1 1 400px;min-width:0;align-self:flex-start;'
    );
    if (/chartRef|eqRef/.test(tpl) || !tpl.includes("data-gates")) throw new Error("Home preprocess failed");
  }
  // asset paths must be absolute once pages live under nested routes
  tpl = tpl.replace(/url\(assets\//g, "url(/assets/");
  return tpl;
}

fs.mkdirSync(outDir, { recursive: true });
for (const [page, cfg] of Object.entries(PAGES)) {
  const src = fs.readFileSync(path.join(protoDir, page + ".dc.html"), "utf8");
  const tpl = preprocess(page, extractTemplate(src));
  ctx.usesLink = false; ctx.usesFragment = false; ctx.usesCSSProps = false; ctx.className = cfg.className;
  const doc = parseDocument(tpl, { lowerCaseAttributeNames: false, lowerCaseTags: false, recognizeSelfClosing: true, decodeEntities: true });
  const jsx = doc.children.map((c) => node(c, "root")).join("").replace(/^(\{" "\})+|(\{" "\})+$/g, "");
  const imports = [];
  if (cfg.client) imports.push(`"use client";\n`);
  const reactImports = [];
  if (ctx.usesFragment) reactImports.push("Fragment");
  if (ctx.usesCSSProps) reactImports.push("type CSSProperties");
  if (reactImports.length) imports.push(`import { ${reactImports.join(", ")} } from "react";`);
  if (ctx.usesLink) imports.push(`import Link from "next/link";`);
  imports.push(`import MotionRoot from "@/components/MotionRoot";`);
  imports.push(`import SiteNav from "@/components/SiteNav";`);
  imports.push(`import SiteFooter from "@/components/SiteFooter";`);
  if (cfg.hook) imports.push(`import { ${cfg.hook} } from "@/components/pages/${page}State";`);
  const used = cfg.hook ? [...new Set([...tpl.matchAll(interp)].map((m) => m[1].split(".")[0]).filter((v) => !["rootRef", "true", "false"].includes(v)))] : [];
  // loop variables are not part of the hook's return value
  const loopVars = [...tpl.matchAll(/<sc-for [^>]*as="(\w+)"/g)].map((m) => m[1]);
  const hookVars = used.filter((v) => !loopVars.includes(v));
  const body = [
    cfg.preamble || "",
    cfg.hook ? `const { ${hookVars.join(", ")} } = ${cfg.hook}();` : "",
  ].filter(Boolean).join("\n  ");
  const file = `${imports.join("\n")}

// Generated from UI_PROTO/${page}.dc.html.
const SKIN = ${JSON.stringify(cfg.skin)};

export default function ${page}Page() {
  ${body}
  return (${jsx});
}
`;
  fs.writeFileSync(path.join(outDir, page + "Page.tsx"), file);
  console.log(page, "->", page + "Page.tsx", cfg.hook ? "vars: " + hookVars.join(",") : "");
}

let css = "/* Hover states from the prototype's style-hover attributes. !important beats the inline styles they sit on. */\n";
for (const [rule, cls] of hover) {
  const decls = splitDecls(rule).map((d) => d + " !important").join(";");
  css += `.${cls}:hover{${decls}}\n`;
}
fs.writeFileSync(cssOut, css);
console.log("hover classes:", hover.size);
