import JsonLd from "@/components/JsonLd";
import BuilderPage from "@/components/pages/BuilderPage";
import { pageJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("builder");

export default function Page() {
  return (
    <>
      <JsonLd data={pageJsonLd("builder")} />
      <BuilderPage />
    </>
  );
}
