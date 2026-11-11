/** @type {import('next').NextConfig} */
const nextConfig = {
  // Next.js 15 optimizations
  reactStrictMode: true,
  
  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    // Optimized images enabled for Core Web Vitals (LCP / mobile PSI)
    unoptimized: false,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Performance optimizations
  compress: true,
  poweredByHeader: false,

  // Headers for caching static assets
  async headers() {
    return [
      {
        source: '/photos/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/Image/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  // Experimental features for Next.js 15
  experimental: {
    optimizePackageImports: ['@fortawesome/react-fontawesome', 'framer-motion'],
  },

  // Redirect leftover ThemeWagon demo / diagnostic routes to marketing pages
  async redirects() {
    return [
      { source: '/Property', destination: '/listings', permanent: true },
      { source: '/Property/:path*', destination: '/listings', permanent: true },
      { source: '/Login', destination: '/', permanent: true },
      { source: '/Dashboard', destination: '/', permanent: true },
      { source: '/Dashboard/:path*', destination: '/', permanent: true },
      { source: '/test-images', destination: '/', permanent: true },
      { source: '/image-diagnostic', destination: '/', permanent: true },
    ];
  },
};

export default nextConfig;
