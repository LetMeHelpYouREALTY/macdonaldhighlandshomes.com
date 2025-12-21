'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-neutral-50 px-4">
      <div className="max-w-md text-center">
        <h1 className="mb-4 text-4xl font-bold text-neutral-900">
          Something went wrong
        </h1>
        <p className="mb-6 text-neutral-600">
          We&apos;re sorry, but something unexpected happened. Please try again.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <button
            onClick={reset}
            className="rounded-lg bg-neutral-900 px-6 py-3 font-medium text-white transition-colors hover:bg-neutral-800"
          >
            Try again
          </button>
          <Link
            href="/"
            className="rounded-lg border border-neutral-300 bg-white px-6 py-3 font-medium text-neutral-900 transition-colors hover:bg-neutral-50"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

