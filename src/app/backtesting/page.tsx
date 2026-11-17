import JsonLd from "@/components/JsonLd";
import BacktestingPage from "@/components/pages/BacktestingPage";
import { pageJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("backtesting");

export default function Page() {
  return (
    <>
      <JsonLd data={pageJsonLd("backtesting")} />
      <BacktestingPage />
    </>
  );
}
