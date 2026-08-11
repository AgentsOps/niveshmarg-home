import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function FeatureLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-ink">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
