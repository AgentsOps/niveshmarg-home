"use client";

import { useEffect } from "react";
import ErrorScreen, { SecondaryLink } from "@/components/ErrorScreen";
import "./globals.css";

// Replaces the root layout when the layout itself fails, so it brings its own <html>, fonts and styles.
export default function GlobalError({ error, retry }: { error: Error & { digest?: string }; retry: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en-IN">
      <head>
        <title>Something went wrong | Niveshmarg Edge</title>
        <meta name="robots" content="noindex" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font -- global-error has no root layout to inherit fonts from */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Schibsted+Grotesk:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
        />
      </head>
      <body>
        <ErrorScreen
          code="500"
          eyebrow="Server error"
          title="Something went wrong on our side."
          message="The site hit an unexpected error. It has been logged. Try again in a moment, or head back to the home page."
          actions={
            <>
              <button type="button" onClick={() => retry()} className="err-btn err-btn-primary">
                Try again
              </button>
              <SecondaryLink href="/">Back to home</SecondaryLink>
            </>
          }
          note={error.digest ? `Reference: ${error.digest}` : undefined}
        />
      </body>
    </html>
  );
}
