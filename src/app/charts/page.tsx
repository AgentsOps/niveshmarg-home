import JsonLd from "@/components/JsonLd";
import ChartsPage from "@/components/pages/ChartsPage";
import { pageJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("charts");

export default function Page() {
  return (
    <>
      <JsonLd data={pageJsonLd("charts")} />
      <ChartsPage />
    </>
  );
}
