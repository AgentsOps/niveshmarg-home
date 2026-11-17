import type { Metadata } from "next";
import { forbidden } from "next/navigation";

// Same as forbidden.tsx; set here too or the page's own (default) metadata wins after hydration.
export const metadata: Metadata = {
  title: "Access denied",
  description: "You don't have permission to view this page.",
  robots: { index: false, follow: false },
};

// A real URL for the 403 page, so a reverse proxy can use it (e.g. nginx `error_page 403 /403;`).
// forbidden() renders src/app/forbidden.tsx with a 403 status.
export default function ForbiddenRoute() {
  forbidden();
}
