import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import DataSourcesSection from "@/components/DataSourcesSection";
import FeatureHighlightsSection from "@/components/FeatureHighlightsSection";
import TheSwarmSection from "@/components/TheSwarmSection";
import PortfolioBandSection from "@/components/PortfolioBandSection";
import WorkspaceSection from "@/components/WorkspaceSection";
import PathSection from "@/components/PathSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <HeroSection />
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
