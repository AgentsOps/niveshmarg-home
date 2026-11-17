import type { Metadata } from "next";
import ErrorScreen from "@/components/ErrorScreen";

export const metadata: Metadata = {
  title: "Access denied",
  description: "You don't have permission to view this page.",
  robots: { index: false, follow: false },
};

/** 403: rendered by forbidden() (needs experimental.authInterrupts) and by the /403 route. */
export default function Forbidden() {
  return (
    <ErrorScreen
      code="403"
      eyebrow="Access denied"
      title="This one is refused by the risk engine."
      message="You don't have permission to view this page. If you think you should, get in touch and we'll sort out your access."
    />
  );
}
