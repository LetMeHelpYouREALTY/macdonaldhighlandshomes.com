import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '404 - Page Not Found | Dr. Jan Duffy Real Estate',
  description: 'The page you\'re looking for doesn\'t exist or has been moved. Return to the homepage to explore MacDonald Highlands luxury real estate.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-4 pt-24 pb-16">
      <div className="max-w-2xl w-full text-center">
        <h1 className="mb-4 text-6xl md:text-7xl font-serif font-bold text-neutral-900">404</h1>
        <h2 className="mb-4 text-2xl md:text-3xl font-serif font-semibold text-neutral-800">
          Page Not Found
        </h2>
        <p className="mb-8 text-lg text-neutral-600">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/"
            className="inline-block rounded-lg bg-neutral-900 px-6 py-3 font-medium text-white transition-colors hover:bg-neutral-800 shadow-md hover:shadow-lg"
          >
            Return Home
          </Link>
          <Link
            href="/services"
            className="inline-block rounded-lg bg-primary-600 px-6 py-3 font-medium text-white transition-colors hover:bg-primary-700 shadow-md hover:shadow-lg"
          >
            View Services
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-200">
          <p className="text-sm text-neutral-500 mb-4">Popular Pages:</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/listings" className="text-primary-600 hover:text-primary-700 hover:underline">
              Listings
            </Link>
            <Link href="/macdonald-highlands-community" className="text-primary-600 hover:text-primary-700 hover:underline">
              Community
            </Link>
            <Link href="/about-dr-jan-duffy" className="text-primary-600 hover:text-primary-700 hover:underline">
              About
            </Link>
            <Link href="/contact" className="text-primary-600 hover:text-primary-700 hover:underline">
              Contact
            </Link>
            <Link href="/testimonials" className="text-primary-600 hover:text-primary-700 hover:underline">
              Testimonials
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}


