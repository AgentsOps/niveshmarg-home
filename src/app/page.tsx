import JsonLd from "@/components/JsonLd";
import HomePage from "@/components/pages/HomePage";
import { pageJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("home");

export default function Page() {
  return (
    <>
      <JsonLd data={pageJsonLd("home")} />
      <HomePage />
    </>
  );
}
