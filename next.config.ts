import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Self-contained server bundle in .next/standalone for deployment.
  output: "standalone",
  // Enables forbidden() and src/app/forbidden.tsx (the 403 page).
  experimental: { authInterrupts: true },
  // The previous site's feature URLs are shared links; send them to the closest new page.
  async redirects() {
    const moved: Record<string, string> = {
      "backtesting-strategy": "/backtesting",
      "paper-trading": "/live",
      "stock-screener": "/research",
      "stock-analysis": "/research",
      "stock-chat": "/research",
      "ai-score": "/research",
      swarm: "/research",
      "institutional-flow": "/research",
      workspace: "/charts",
    };
    return [
      ...Object.entries(moved).map(([slug, destination]) => ({
        source: `/features/${slug}`,
        destination,
        permanent: true,
      })),
      { source: "/stream", destination: "/live-stream", permanent: false },
      { source: "/watch", destination: "/live-stream", permanent: false },
      { source: "/features/:path*", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
