export type NavKey =
  | "home"
  | "builder"
  | "charts"
  | "backtesting"
  | "live"
  | "liveStream"
  | "research"
  | "integrations"
  | "strategies"
  | "docs"
  | "contact";

export const SITE_URL = "https://niveshmarg.com";

/** Sign-in for the Niveshmarg Edge app; lands on the admin dashboard afterwards. */
export const LOGIN_URL = "https://edge.niveshmarg.com/admin/login/?next=/admin/";

/** Official YouTube channel partner running the Niveshmarg Edge app live. */
export const YOUTUBE_PARTNER_URL = "https://www.youtube.com/@agentsops";

// Header links. Docs lives in the footer only.
export const NAV_LINKS: { key: NavKey; href: string; label: string }[] = [
  { key: "builder", href: "/builder", label: "Builder" },
  { key: "charts", href: "/charts", label: "Charts" },
  { key: "backtesting", href: "/backtesting", label: "Backtesting" },
  { key: "live", href: "/live", label: "Live & Risk" },
  { key: "liveStream", href: "/live-stream", label: "Live Stream" },
  { key: "research", href: "/research", label: "Research" },
  { key: "integrations", href: "/integrations", label: "Integrations" },
  { key: "strategies", href: "/strategies", label: "Strategies" },
];
