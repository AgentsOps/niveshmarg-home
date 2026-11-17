export type NavKey =
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

export const SITE_URL = "https://niveshmarg.com";

/** Sign-in for the Niveshmarg Edge app; lands on the admin dashboard afterwards. */
export const LOGIN_URL = "https://edge.niveshmarg.com/admin/login/?next=/admin/";

// Header links. Docs lives in the footer only.
export const NAV_LINKS: { key: NavKey; href: string; label: string }[] = [
  { key: "builder", href: "/builder", label: "Builder" },
  { key: "charts", href: "/charts", label: "Charts" },
  { key: "backtesting", href: "/backtesting", label: "Backtesting" },
  { key: "live", href: "/live", label: "Live & Risk" },
  { key: "research", href: "/research", label: "Research" },
  { key: "integrations", href: "/integrations", label: "Integrations" },
  { key: "strategies", href: "/strategies", label: "Strategies" },
];
