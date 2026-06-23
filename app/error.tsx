"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gh-bg px-4">
      <div className="max-w-md rounded-lg border border-gh-border bg-gh-bg-secondary p-8 text-center">
        <svg
          className="mx-auto h-12 w-12 text-gh-muted"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
        <h2 className="mt-4 text-lg font-semibold text-gh-text">
          Something went wrong
        </h2>
        <p className="mt-2 text-sm text-gh-muted">{error.message}</p>
        <button
          type="button"
          onClick={reset}
          className="mt-6 rounded-md border border-gh-border bg-gh-bg-tertiary px-4 py-2 text-sm font-medium text-gh-text transition-colors hover:bg-gh-border"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
