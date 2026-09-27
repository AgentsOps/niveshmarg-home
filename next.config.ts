import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  // Permanent: these short URLs are shared links, and a temporary redirect
  // tells search engines to keep indexing the short form instead of the page.
  async redirects() {
    const aliases: Record<string, string> = {
      "ai-score": "ai-score",
      swarm: "swarm",
      workspace: "workspace",
      "portfolio-doctor": "portfolio-doctor",
      portfolio: "portfolio-management",
      "portfolio-management": "portfolio-management",
      "paper-trading": "paper-trading",
      backtesting: "backtesting-strategy",
      "backtesting-strategy": "backtesting-strategy",
      watchlist: "watchlist",
      "stock-chat": "stock-chat",
      chat: "stock-chat",
      "stock-analysis": "stock-analysis",
      "stock-screener": "stock-screener",
      screener: "stock-screener",
      learn: "learn-stock-market",
      "learn-stock-market": "learn-stock-market",
      "mobile-app": "mobile-app",
      app: "mobile-app",
      "reports-exports": "reports-exports",
      path: "path",
      "how-it-works": "path",
      // The institutional-flow page described a feature the product no
      // longer has; its nearest successor is the company research page.
      "institutional-flow": "stock-analysis",
    };
    return [
      ...Object.entries(aliases).map(([source, slug]) => ({
        source: `/${source}`,
        destination: `/features/${slug}`,
        permanent: true,
      })),
      { source: "/features/institutional-flow", destination: "/features/stock-analysis", permanent: true },
    ];
  },
};

export default nextConfig;
