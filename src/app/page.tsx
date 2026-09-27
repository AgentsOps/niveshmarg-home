import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import DataSourcesSection from "@/components/DataSourcesSection";
import FeatureHighlightsSection from "@/components/FeatureHighlightsSection";
import TheSwarmSection from "@/components/TheSwarmSection";
import PortfolioBandSection from "@/components/PortfolioBandSection";
import WorkspaceSection from "@/components/WorkspaceSection";
import PathSection from "@/components/PathSection";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import siteData from "../../data/site_data.json";
import { SITE_URL } from "@/lib/features";

export const metadata = {
  alternates: { canonical: "/" },
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "NiveshMarg",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    email: siteData.site.contactEmail,
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "NiveshMarg",
    url: SITE_URL,
    description: siteData.site.description,
    inLanguage: "en-IN",
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "NiveshMarg",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web, Android, iOS",
    url: siteData.site.dashboardUrl,
    description: siteData.site.description,
    offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
  },
];

export default function Home() {
  const navigation = (siteData as { navigation: { label: string; href: string }[] }).navigation;
  const hero = (siteData as { home: { eyebrow: string; headline: string; description: string; primaryCta: { label: string; href: string }; secondaryCta: { label: string; href: string } } }).home;

  return (
    <>
      {structuredData.map((data) => (
        <JsonLd key={data["@type"]} data={data} />
      ))}
      <Header navItems={navigation} />
      <main id="top">
        <HeroSection hero={hero} />
        <DataSourcesSection />
        <FeatureHighlightsSection />
        <TheSwarmSection />
        <PortfolioBandSection />
        <WorkspaceSection />
        <PathSection />
      </main>
      <Footer />
    </>
  );
}
