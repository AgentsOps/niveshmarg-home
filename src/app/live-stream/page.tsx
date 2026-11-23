import JsonLd from "@/components/JsonLd";
import LiveStreamPage from "@/components/pages/LiveStreamPage";
import { pageJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("liveStream");

export default function Page() {
  return (
    <>
      <JsonLd data={pageJsonLd("liveStream")} />
      <LiveStreamPage />
    </>
  );
}
