import type { Metadata } from "next";
import ErrorScreen from "@/components/ErrorScreen";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The page you were looking for does not exist or has moved.",
  robots: { index: false, follow: true },
};

/** 404: unknown URLs and any notFound() call. */
export default function NotFound() {
  return (
    <ErrorScreen
      code="404"
      eyebrow="Page not found"
      title="This page didn't make it past the backtest."
      message="The link may be old or mistyped, or the page has moved. Everything else is still running: try one of the pages below."
    />
  );
}
