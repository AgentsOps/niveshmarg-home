import FeatureDetailPage from "@/components/FeatureDetailPage";
import { notFound } from "next/navigation";
import { featureMetadata, features, getFeature } from "@/lib/features";

export function generateStaticParams() {
  return features.map((feature) => ({ slug: feature.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const feature = getFeature(slug);
  return feature ? featureMetadata(feature) : { title: "Feature not found" };
}

export default async function FeatureDetailRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const feature = getFeature(slug);
  if (!feature) notFound();

  const index = features.indexOf(feature);
  return <FeatureDetailPage feature={feature} previous={features[index - 1]} next={features[index + 1]} />;
}
