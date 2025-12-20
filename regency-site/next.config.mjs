/** @type {import('next').NextConfig} */
const nextConfig = {
  // Output build to root level for Vercel deployment
  distDir: process.env.VERCEL ? '../.next' : '.next',
  
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
