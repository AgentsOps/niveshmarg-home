import JsonLd from "@/components/JsonLd";
import ContactPage from "@/components/pages/ContactPage";
import { CONTACT_FAQ } from "@/lib/content";
import { faqJsonLd, pageJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("contact");

export default function Page() {
  return (
    <>
      <JsonLd data={[...pageJsonLd("contact"), faqJsonLd(CONTACT_FAQ)]} />
      <ContactPage />
    </>
  );
}
