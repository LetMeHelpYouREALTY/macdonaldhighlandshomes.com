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
    // Allow unoptimized images if optimization fails
    unoptimized: false,
    // Disable strict mode for image domains (allows local images)
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Performance optimizations
  compress: true,
  poweredByHeader: false,

  // Experimental features for Next.js 15
  experimental: {
    optimizePackageImports: ['@fortawesome/react-fontawesome', 'framer-motion'],
  },
};

export default nextConfig;
