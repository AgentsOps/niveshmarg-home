import JsonLd from "@/components/JsonLd";
import ResearchPage from "@/components/pages/ResearchPage";
import { pageJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("research");

export default function Page() {
  return (
    <>
      <JsonLd data={pageJsonLd("research")} />
      <ResearchPage />
    </>
  );
}
