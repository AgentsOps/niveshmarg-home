import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  async redirects() {
    return [
      { source: "/ai-score", destination: "/features/ai-score", permanent: false },
      { source: "/swarm", destination: "/features/swarm", permanent: false },
      { source: "/workspace", destination: "/features/workspace", permanent: false },
      { source: "/portfolio-doctor", destination: "/features/portfolio-doctor", permanent: false },
      { source: "/portfolio", destination: "/features/portfolio-doctor", permanent: false },
      { source: "/paper-trading", destination: "/features/paper-trading", permanent: false },
      { source: "/backtesting", destination: "/features/backtesting-strategy", permanent: false },
      { source: "/backtesting-strategy", destination: "/features/backtesting-strategy", permanent: false },
      { source: "/watchlist", destination: "/features/watchlist", permanent: false },
      { source: "/stock-chat", destination: "/features/stock-chat", permanent: false },
      { source: "/chat", destination: "/features/stock-chat", permanent: false },
      { source: "/institutional-flow", destination: "/features/institutional-flow", permanent: false },
      { source: "/reports-exports", destination: "/features/reports-exports", permanent: false },
      { source: "/path", destination: "/features/path", permanent: false },
      { source: "/how-it-works", destination: "/features/path", permanent: false },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
