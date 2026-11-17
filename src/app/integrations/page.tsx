import JsonLd from "@/components/JsonLd";
import IntegrationsPage from "@/components/pages/IntegrationsPage";
import { pageJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("integrations");

export default function Page() {
  return (
    <>
      <JsonLd data={pageJsonLd("integrations")} />
      <IntegrationsPage />
    </>
  );
}
