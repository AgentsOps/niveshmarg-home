import FeatureDetailPage from "@/components/FeatureDetailPage";
import { notFound } from "next/navigation";
import siteData from "../../../data/site_data.json";

const slugAliases: Record<string, string> = {
  backtesting: "backtesting-strategy",
  portfolio: "portfolio-doctor",
  chat: "stock-chat",
  "how-it-works": "path",
};

const featureList = siteData.features as {
  slug: string;
  accent: "rose" | "amber" | "sky" | "mint";
  kicker: string;
  title: string;
  summary: string;
  badge: string;
  stats: { label: string; value: string }[];
  highlights: { title: string; detail: string }[];
  process: string[];
  impact: string[];
}[];

export function generateStaticParams() {
  const primarySlugs = featureList.map((f) => ({ slug: f.slug }));
  const aliasSlugs = Object.keys(slugAliases).map((alias) => ({ slug: alias }));
  return [...primarySlugs, ...aliasSlugs];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug: rawSlug } = await params;
  const slug = slugAliases[rawSlug] || rawSlug;
  const feature = featureList.find((entry) => entry.slug === slug);

  if (!feature) {
    return {
      title: "Page not found",
    };
  }

  return {
    title: `${feature.title} | NiveshMarg`,
    description: feature.summary,
    openGraph: {
      title: `${feature.title} | NiveshMarg`,
      description: feature.summary,
      url: `https://niveshmarg.com/${feature.slug}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${feature.title} | NiveshMarg`,
      description: feature.summary,
    },
  };
}

export default async function TopLevelSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug: rawSlug } = await params;
  const slug = slugAliases[rawSlug] || rawSlug;
  const feature = featureList.find((entry) => entry.slug === slug);

  if (!feature) {
    notFound();
  }

  const currentIndex = featureList.findIndex((entry) => entry.slug === slug);
  const previous = currentIndex > 0 ? featureList[currentIndex - 1] : undefined;
  const next = currentIndex < featureList.length - 1 ? featureList[currentIndex + 1] : undefined;

  return <FeatureDetailPage feature={feature} previous={previous} next={next} />;
}
