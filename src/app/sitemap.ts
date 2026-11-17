import type { MetadataRoute } from "next";
import { PAGES, absoluteUrl } from "@/lib/seo";

// Canonical URLs only, in the same shape as the previous site's sitemap
// (loc, lastmod, changefreq, priority). Redirected /features/* URLs are left out.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return Object.values(PAGES).map((page) => ({
    url: absoluteUrl(page.path),
    lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
