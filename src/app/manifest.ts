import type { MetadataRoute } from "next";
import { PAGES, SITE_NAME } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: "Niveshmarg",
    description: PAGES.home.description,
    start_url: "/",
    display: "standalone",
    background_color: "#f5f5fb",
    theme_color: "#4f46e5",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/logo.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
