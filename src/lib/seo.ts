import type { Metadata, MetadataRoute } from "next";
import { SITE_URL } from "@/lib/nav";

export const SITE_NAME = "Niveshmarg Edge";
export const ORG_NAME = "Niveshmarg";
export const LOGO_URL = `${SITE_URL}/logo.png`;

export type PageKey =
  | "home"
  | "builder"
  | "charts"
  | "backtesting"
  | "live"
  | "research"
  | "integrations"
  | "strategies"
  | "docs"
  | "contact";

type PageSeo = {
  path: string;
  /** Short name for breadcrumbs. */
  name: string;
  /** <title>; the layout template appends " | Niveshmarg Edge" except on the home page. */
  title: string;
  /** Meta description: what the page offers, about 140-160 characters. */
  description: string;
  keywords: string[];
  /** Eyebrow and headline on the generated social share image. */
  ogEyebrow: string;
  ogHeadline: string;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;
  priority: number;
};

/** Single source of truth for every page's SEO: metadata, sitemap, breadcrumbs and share images. */
export const PAGES: Record<PageKey, PageSeo> = {
  home: {
    path: "/",
    name: "Home",
    title: "Niveshmarg Edge | Algo Trading & Backtesting for India",
    description:
      "Build trading strategies visually, backtest with zero look-ahead and real Indian costs, research with AI and trade through a risk engine on NSE, BSE and crypto.",
    keywords: [
      "algo trading India",
      "algorithmic trading platform",
      "strategy backtesting",
      "no-code trading strategy builder",
      "AI stock research",
      "paper trading",
      "NSE",
      "BSE",
      "Niveshmarg",
      "Niveshmarg Edge",
    ],
    ogEyebrow: "NSE · BSE · CRYPTO PERPETUALS",
    ogHeadline: "Strategies you can prove before you trade.",
    changeFrequency: "weekly",
    priority: 1.0,
  },
  builder: {
    path: "/builder",
    name: "Strategy Builder",
    title: "No-Code Visual Strategy Builder",
    description:
      "Wire indicators, Smart Money Concepts, conditions and exits on a canvas with typed ports. Start from a template, preview live and send it straight to a backtest.",
    keywords: [
      "visual strategy builder",
      "no-code algo trading",
      "trading strategy builder India",
      "drag and drop trading strategy",
      "TA-Lib indicators",
      "Smart Money Concepts strategy",
      "strategy templates",
    ],
    ogEyebrow: "STRATEGY BUILDER",
    ogHeadline: "Draw the logic. Skip the code.",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  charts: {
    path: "/charts",
    name: "Chart Workspace",
    title: "SMC Charts: Order Blocks & Fair Value Gaps",
    description:
      "Full-screen streaming charts for NSE, BSE and crypto with order blocks, fair value gaps, your backtest trades on the candles and an AI chart assistant.",
    keywords: [
      "Smart Money Concepts chart",
      "SMC indicator",
      "order blocks",
      "fair value gap",
      "live candlestick chart India",
      "trading chart workspace",
      "AI chart assistant",
    ],
    ogEyebrow: "CHART WORKSPACE",
    ogHeadline: "Read the market the way institutions do.",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  backtesting: {
    path: "/backtesting",
    name: "Backtesting",
    title: "Backtesting with Real Indian Costs, No Look-Ahead",
    description:
      "Backtests that fill at the next bar, trigger the stop first and charge STT, GST, SEBI fees, stamp duty and slippage. Then validate with walk-forward runs.",
    keywords: [
      "backtesting India",
      "strategy backtester",
      "walk-forward validation",
      "look-ahead bias",
      "STT and brokerage in backtest",
      "trading strategy optimization",
      "NSE backtesting",
    ],
    ogEyebrow: "BACKTESTING & OPTIMIZATION",
    ogHeadline: "The backtest that tells you no.",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  live: {
    path: "/live",
    name: "Live Trading & Risk",
    title: "Live & Paper Trading with a Risk Engine",
    description:
      "Runners trade your strategy on live ticks in paper or live mode. Every order is checked against loss limits, risk caps, exposure and square-off times first.",
    keywords: [
      "paper trading India",
      "live algo trading",
      "trading risk management",
      "risk engine",
      "intraday square-off",
      "daily loss limit",
      "automated trading NSE",
    ],
    ogEyebrow: "LIVE TRADING & RISK",
    ogHeadline: "Every order meets the risk engine first.",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  research: {
    path: "/research",
    name: "AI Research Desk",
    title: "AI Stock Research & Stock Screener",
    description:
      "Specialist AI agents write stock reports, read the morning news and label the market regime, while swing scans and a stock screener surface ideas to study.",
    keywords: [
      "AI stock analysis",
      "AI stock research India",
      "stock screener India",
      "market regime",
      "swing trading scanner",
      "stock reports",
      "news analysis",
    ],
    ogEyebrow: "AI RESEARCH DESK",
    ogHeadline: "A research team that never sleeps, and never trades.",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  integrations: {
    path: "/integrations",
    name: "Integrations",
    title: "Broker Integrations: Fyers, Zerodha, Groww & MCP",
    description:
      "Run the same strategy on Fyers, Zerodha Kite, Groww or Delta Exchange through one broker interface, and connect Claude, Cursor and other AI agents over MCP.",
    keywords: [
      "Fyers API",
      "Zerodha Kite Connect",
      "Groww trading API",
      "Delta Exchange",
      "broker integration",
      "MCP server trading",
      "AI agent trading tools",
    ],
    ogEyebrow: "BROKERS & MCP",
    ogHeadline: "Four brokers. One interface. Any AI agent.",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  strategies: {
    path: "/strategies",
    name: "Validated Strategies",
    title: "Validated Trading Strategies & Results",
    description:
      "Our own strategy research, published with the losers: development data, an untouched hold-out and rolling walk-forward tests, all after Indian trading costs.",
    keywords: [
      "validated trading strategies",
      "walk-forward test results",
      "out-of-sample backtest",
      "swing trading strategy India",
      "quantitative research",
      "strategy research",
    ],
    ogEyebrow: "VALIDATED STRATEGIES",
    ogHeadline: "Our research, including the strategies that lost.",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  docs: {
    path: "/docs",
    name: "Documentation",
    title: "Documentation & User Guides",
    description:
      "Guides for Niveshmarg Edge: getting started, the strategy builder, backtesting, runners and risk, broker setup, market data, AI research, MCP and the CLI.",
    keywords: [
      "Niveshmarg documentation",
      "algo trading guide",
      "backtesting guide",
      "broker setup guide",
      "MCP server guide",
      "trading platform docs",
    ],
    ogEyebrow: "DOCUMENTATION",
    ogHeadline: "Everything about Niveshmarg Edge, written down.",
    changeFrequency: "weekly",
    priority: 0.7,
  },
  contact: {
    path: "/contact",
    name: "Request a demo",
    title: "Request a Demo",
    description:
      "Book a live walkthrough of Niveshmarg Edge. Bring a strategy idea and we will build, backtest and paper trade it with you on your own instruments.",
    keywords: ["Niveshmarg demo", "algo trading demo", "trading platform demo India", "contact Niveshmarg"],
    ogEyebrow: "REQUEST A DEMO",
    ogHeadline: "See it run on your instruments.",
    changeFrequency: "yearly",
    priority: 0.6,
  },
};

export const absoluteUrl = (path: string) => (path === "/" ? SITE_URL : `${SITE_URL}${path}`);

/** Full Next.js metadata for a page. Open Graph and Twitter are set in full because Next replaces, not merges, them. */
export function pageMetadata(key: PageKey): Metadata {
  const p = PAGES[key];
  const fullTitle = key === "home" ? p.title : `${p.title} | ${SITE_NAME}`;
  return {
    title: key === "home" ? { absolute: p.title } : p.title,
    description: p.description,
    keywords: p.keywords,
    alternates: { canonical: p.path },
    openGraph: {
      title: fullTitle,
      description: p.description,
      url: absoluteUrl(p.path),
      siteName: SITE_NAME,
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: p.description,
    },
  };
}

/* ---------- structured data (JSON-LD) ---------- */

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: ORG_NAME,
  url: SITE_URL,
  logo: LOGO_URL,
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: SITE_URL,
  description: PAGES.home.description,
  inLanguage: "en-IN",
  publisher: { "@id": `${SITE_URL}/#organization` },
};

export const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: SITE_NAME,
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  url: SITE_URL,
  description: PAGES.home.description,
  publisher: { "@id": `${SITE_URL}/#organization` },
};

export function webPageJsonLd(key: PageKey) {
  const p = PAGES[key];
  return {
    "@context": "https://schema.org",
    "@type": key === "contact" ? "ContactPage" : "WebPage",
    "@id": `${absoluteUrl(p.path)}#webpage`,
    url: absoluteUrl(p.path),
    name: key === "home" ? p.title : `${p.title} | ${SITE_NAME}`,
    description: p.description,
    inLanguage: "en-IN",
    isPartOf: { "@id": `${SITE_URL}/#website` },
  };
}

export function breadcrumbJsonLd(key: PageKey) {
  const items = [PAGES.home, PAGES[key]];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqJsonLd(faqs: readonly (readonly [string, string])[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([q, a]) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}

/** The JSON-LD blocks a page should carry. */
export function pageJsonLd(key: PageKey): object[] {
  if (key === "home") return [organizationJsonLd, websiteJsonLd, softwareJsonLd, webPageJsonLd("home")];
  return [webPageJsonLd(key), breadcrumbJsonLd(key)];
}
