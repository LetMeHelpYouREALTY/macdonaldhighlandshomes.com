import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-4 pt-24 pb-16">
      <div className="max-w-md w-full text-center">
        <h1 className="mb-4 text-6xl md:text-7xl font-serif font-bold text-neutral-900">404</h1>
        <h2 className="mb-4 text-2xl md:text-3xl font-serif font-semibold text-neutral-800">
          Page Not Found
        </h2>
        <p className="mb-8 text-lg text-neutral-600">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block rounded-lg bg-neutral-900 px-6 py-3 font-medium text-white transition-colors hover:bg-neutral-800 shadow-md hover:shadow-lg"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}

