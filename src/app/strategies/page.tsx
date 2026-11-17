import JsonLd from "@/components/JsonLd";
import StrategiesPage from "@/components/pages/StrategiesPage";
import { pageJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("strategies");

export default function Page() {
  return (
    <>
      <JsonLd data={pageJsonLd("strategies")} />
      <StrategiesPage />
    </>
  );
}
