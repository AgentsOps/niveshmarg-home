import type { MetadataRoute } from "next";
import siteData from "../../data/site_data.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://niveshmarg.com";

  const featureSlugs = siteData.features.map((f) => f.slug);

  const mainPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/features`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  const featurePages: MetadataRoute.Sitemap = featureSlugs.map((slug) => ({
    url: `${baseUrl}/features/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const directPages: MetadataRoute.Sitemap = featureSlugs.map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...mainPages, ...featurePages, ...directPages];
}
