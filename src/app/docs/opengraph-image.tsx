import { PAGES } from "@/lib/seo";
import { renderShareImage } from "@/lib/shareImage";

export const alt = PAGES.docs.ogHeadline;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return renderShareImage("docs");
}
