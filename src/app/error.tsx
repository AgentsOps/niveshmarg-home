"use client";

import { useEffect } from "react";
import ErrorScreen, { SecondaryLink } from "@/components/ErrorScreen";

/** 500: an unexpected error while rendering a page. The root layout (nav fonts, analytics) is still in place. */
export default function Error({ error, retry }: { error: Error & { digest?: string }; retry: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <title>Something went wrong | Niveshmarg Edge</title>
      <meta name="robots" content="noindex" />
      <ErrorScreen
        code="500"
        eyebrow="Server error"
        title="Something went wrong on our side."
        message="This page hit an unexpected error. It has been logged. Try again in a moment, or head back to the home page."
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
    </>
  );
}
