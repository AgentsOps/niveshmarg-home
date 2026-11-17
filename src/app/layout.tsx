import type { Metadata, Viewport } from "next";
import Script from "next/script";
import GoogleAnalyticsTracker from "@/components/GoogleAnalyticsTracker";
import { GA_MEASUREMENT_ID } from "@/lib/analytics";
import { SITE_URL } from "@/lib/nav";
import { ORG_NAME, PAGES, SITE_NAME } from "@/lib/seo";
import "./globals.css";
import "./hover.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: PAGES.home.title, template: `%s | ${SITE_NAME}` },
  description: PAGES.home.description,
  applicationName: SITE_NAME,
  authors: [{ name: ORG_NAME, url: SITE_URL }],
  creator: ORG_NAME,
  publisher: ORG_NAME,
  category: "finance",
  formatDetection: { telephone: false, email: false, address: false },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

const MOTION_PENDING = `if(!matchMedia("(prefers-reduced-motion: reduce)").matches){var d=document.documentElement;d.classList.add("motion-pending");setTimeout(function(){d.classList.remove("motion-pending")},4000)}`;

export const viewport: Viewport = {
  themeColor: "#f5f5fb",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    // data-scroll-behavior lets Next.js turn smooth scrolling off during route changes.
    // suppressHydrationWarning: the inline script below adds a class to <html> before React hydrates.
    <html lang="en-IN" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        {/* Hide scroll-reveal elements until the motion engine takes over, so they don't flash in and then fade. */}
        <script dangerouslySetInnerHTML={{ __html: MOTION_PENDING }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font -- the inline styles name these families directly */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Schibsted+Grotesk:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
        />
      </head>
      <body>
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', { page_path: window.location.pathname, send_page_view: true });
          `}
        </Script>
        <GoogleAnalyticsTracker />
        {children}
      </body>
    </html>
  );
}
