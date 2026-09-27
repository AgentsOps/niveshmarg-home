import siteData from "../../data/site_data.json";

/**
 * One place that reads the feature list out of site_data.json.
 *
 * The detail route, the top-level alias route, the overview page and the
 * sitemap each used to cast the JSON to their own inline type, and the four
 * copies drifted: a field added for one page was invisible to the others.
 */

export type Accent = "rose" | "amber" | "sky" | "mint";
export type Category = "learn" | "analyse" | "manage";

export type Feature = {
  slug: string;
  category: Category;
  accent: Accent;
  icon: string;
  kicker: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  keywords: string[];
  summary: string;
  badge: string;
  stats: { label: string; value: string }[];
  highlights: { title: string; detail: string }[];
  capabilities: { icon: string; title: string; detail: string }[];
  learn: string[];
  process: string[];
  impact: string[];
  faqs: { q: string; a: string }[];
  related: string[];
};

export const SITE_URL = "https://niveshmarg.com";

export const features = siteData.features as Feature[];

export function getFeature(slug: string): Feature | undefined {
  return features.find((feature) => feature.slug === slug);
}

export function featuresIn(category: Category): Feature[] {
  return features.filter((feature) => feature.category === category);
}

export function relatedTo(feature: Feature): Feature[] {
  return feature.related
    .map((slug) => getFeature(slug))
    .filter((entry): entry is Feature => entry !== undefined);
}

/**
 * The canonical URL for a feature. `/features/<slug>` is the one indexed;
 * the top-level `/<slug>` alias points here, or search engines split the
 * ranking between two copies of the same page.
 */
export function featurePath(slug: string): string {
  return `/features/${slug}`;
}

export function featureMetadata(feature: Feature) {
  const url = featurePath(feature.slug);
  return {
    // The root layout's title template appends "| NiveshMarg"; adding it here
    // as well rendered "… | NiveshMarg | NiveshMarg" in every tab and result.
    title: feature.seoTitle,
    description: feature.metaDescription,
    keywords: feature.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: feature.seoTitle,
      description: feature.metaDescription,
      url: `${SITE_URL}${url}`,
      siteName: "NiveshMarg",
      locale: "en_IN",
      type: "website" as const,
    },
    twitter: {
      card: "summary_large_image" as const,
      title: feature.seoTitle,
      description: feature.metaDescription,
    },
  };
}

export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
