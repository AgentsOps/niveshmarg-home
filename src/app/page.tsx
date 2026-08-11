import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import DataSourcesSection from "@/components/DataSourcesSection";
import FeatureHighlightsSection from "@/components/FeatureHighlightsSection";
import TheSwarmSection from "@/components/TheSwarmSection";
import PortfolioBandSection from "@/components/PortfolioBandSection";
import WorkspaceSection from "@/components/WorkspaceSection";
import PathSection from "@/components/PathSection";
import Footer from "@/components/Footer";
import siteData from "../../data/site_data.json";

export default function Home() {
  const navigation = (siteData as { navigation: { label: string; href: string }[] }).navigation;
  const hero = (siteData as { home: { eyebrow: string; headline: string; description: string; primaryCta: { label: string; href: string }; secondaryCta: { label: string; href: string } } }).home;

  return (
    <>
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
