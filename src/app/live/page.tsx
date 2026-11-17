import JsonLd from "@/components/JsonLd";
import LivePage from "@/components/pages/LivePage";
import { pageJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("live");

export default function Page() {
  return (
    <>
      <JsonLd data={pageJsonLd("live")} />
      <LivePage />
    </>
  );
}
