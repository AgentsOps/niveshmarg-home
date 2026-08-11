import FeatureDetailPage from "@/components/FeatureDetailPage";
import { notFound } from "next/navigation";
import siteData from "../../../../data/site_data.json";

const featureList = (
  siteData as {
    features: {
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
  }
).features;

export function generateStaticParams() {
  return featureList.map((feature) => ({ slug: feature.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const feature = featureList.find((entry) => entry.slug === slug);

  if (!feature) {
    return {
      title: "Feature not found",
    };
  }

  return {
    title: `${feature.title} | NiveshMarg`,
    description: feature.summary,
    openGraph: {
      title: `${feature.title} | NiveshMarg`,
      description: feature.summary,
      url: `https://niveshmarg.com/features/${feature.slug}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${feature.title} | NiveshMarg`,
      description: feature.summary,
    },
  };
}

export default async function FeatureDetailRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const feature = featureList.find((entry) => entry.slug === slug);

  if (!feature) {
    notFound();
  }

  const currentIndex = featureList.findIndex((entry) => entry.slug === slug);
  const previous = currentIndex > 0 ? featureList[currentIndex - 1] : undefined;
  const next = currentIndex < featureList.length - 1 ? featureList[currentIndex + 1] : undefined;

  return <FeatureDetailPage feature={feature} previous={previous} next={next} />;
}
