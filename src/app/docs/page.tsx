import JsonLd from "@/components/JsonLd";
import DocsPage from "@/components/pages/DocsPage";
import { pageJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("docs");

export default function Page() {
  return (
    <>
      <JsonLd data={pageJsonLd("docs")} />
      <DocsPage />
    </>
  );
}
