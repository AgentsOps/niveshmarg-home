import FeatureDetailPage from "@/components/FeatureDetailPage";
import { notFound } from "next/navigation";
import { featureMetadata, features, getFeature } from "@/lib/features";

/**
 * Top-level aliases (`/learn`, `/chat`, …). next.config.ts redirects the
 * common ones permanently; anything that still lands here renders the page
 * with its canonical pointing at `/features/<slug>`, so the two URLs never
 * compete in search results.
 */
const slugAliases: Record<string, string> = {
  backtesting: "backtesting-strategy",
  portfolio: "portfolio-management",
  chat: "stock-chat",
  learn: "learn-stock-market",
  screener: "stock-screener",
  app: "mobile-app",
  "how-it-works": "path",
  "institutional-flow": "stock-analysis",
};

function resolve(rawSlug: string) {
  return getFeature(slugAliases[rawSlug] ?? rawSlug);
}

export function generateStaticParams() {
  return [
    ...features.map((feature) => ({ slug: feature.slug })),
    ...Object.keys(slugAliases).map((slug) => ({ slug })),
  ];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const feature = resolve(slug);
  return feature ? featureMetadata(feature) : { title: "Page not found" };
}

export default async function TopLevelSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const feature = resolve(slug);
  if (!feature) notFound();

  const index = features.indexOf(feature);
  return <FeatureDetailPage feature={feature} previous={features[index - 1]} next={features[index + 1]} />;
}
