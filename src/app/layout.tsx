import type { Metadata } from "next";
import { Poppins, DM_Sans, Noto_Sans_Devanagari } from "next/font/google";
import Script from "next/script";
import GoogleAnalyticsTracker from "@/components/GoogleAnalyticsTracker";
import { GA_MEASUREMENT_ID } from "@/lib/analytics";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const notoSansDevanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["400", "500", "600"],
  variable: "--font-noto-devanagari",
  display: "swap",
});

const siteTitle = "NiveshMarg — Stock Market Playground to Learn, Analyse and Manage";
const siteDescription =
  "Learn the stock market with virtual money, analyse any stock with AI and manage your portfolio. Paper trading, backtesting, a stock screener, AI Stock Chat and a Portfolio Doctor for NSE, BSE and 30+ global exchanges.";

export const metadata: Metadata = {
  metadataBase: new URL("https://niveshmarg.com"),
  title: {
    default: siteTitle,
    template: "%s | NiveshMarg",
  },
  description: siteDescription,
  applicationName: "NiveshMarg",
  keywords: [
    "NiveshMarg",
    "learn stock market",
    "stock market playground",
    "paper trading",
    "virtual stock trading India",
    "AI stock analysis",
    "stock screener",
    "portfolio tracker",
    "portfolio management",
    "backtesting",
    "NSE",
    "BSE",
  ],
  // No site-wide canonical here: a canonical in the root layout is inherited
  // by every page that does not set its own, which told search engines each
  // feature page was a duplicate of the home page.
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "https://niveshmarg.com",
    siteName: "NiveshMarg",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20,400,0,0"
        />
      </head>
      <body
        className={`${poppins.variable} ${dmSans.variable} ${notoSansDevanagari.variable} font-body text-ink antialiased`}
      >
        {/* Google Analytics gtag.js */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
              send_page_view: true
            });
          `}
        </Script>

        {/* Client-side route transition tracker for recording user journeys */}
        <GoogleAnalyticsTracker />

        {children}
      </body>
    </html>
  );
}
