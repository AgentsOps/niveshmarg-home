import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import siteData from "../../data/site_data.json";

export default function FeatureLayout({ children }: { children: ReactNode }) {
  const navigation = (siteData as { navigation: { label: string; href: string }[] }).navigation;

  return (
    <div className="min-h-screen bg-white text-ink">
      <Header navItems={navigation} />
      {children}
      <Footer />
    </div>
  );
}
