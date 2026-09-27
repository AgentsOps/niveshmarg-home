import type { MetadataRoute } from "next";
import { SITE_URL, featurePath, features } from "@/lib/features";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  // Only canonical URLs. The top-level /<slug> aliases used to be listed as
  // well, which asked search engines to index every feature page twice.
  return [
    { url: SITE_URL, lastModified, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE_URL}/features`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    ...features.map((feature) => ({
      url: `${SITE_URL}${featurePath(feature.slug)}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: feature.category === "learn" ? 0.85 : 0.8,
    })),
  ];
}
