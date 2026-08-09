import type { Metadata } from "next";
import { Poppins, DM_Sans, Noto_Sans_Devanagari } from "next/font/google";
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

export const metadata: Metadata = {
  title: "NiveshMarg — The path of investment",
  description:
    "NiveshMarg is an AI stock and portfolio workspace: a six-agent research swarm, a four-part AI Score, a conversational market analyst, paper trading, backtesting and board-ready reports.",
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
        {children}
      </body>
    </html>
  );
}

