import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { siteConfig } from "../../config/siteConfig";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import LocalBusinessSchema from "@/components/schema/LocalBusinessSchema";

// Luxury typography: Inter for body, Playfair Display for headings
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.seo.title,
    template: `%s | ${siteConfig.agent.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.seo.keywords,
  authors: [{ name: siteConfig.agent.name }],
  creator: siteConfig.agent.name,
  publisher: siteConfig.agent.brokerage,
  metadataBase: new URL("https://macdonaldhighlandshomes.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://macdonaldhighlandshomes.com",
    title: siteConfig.seo.title,
    description: siteConfig.description,
    siteName: siteConfig.agent.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.title,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  other: {
    // Preconnect to RealScout for faster widget loading (320ms LCP savings)
    'link': [
      { rel: 'preconnect', href: 'https://em.realscout.com', crossOrigin: 'anonymous' },
      { rel: 'dns-prefetch', href: 'https://em.realscout.com' },
      { rel: 'preconnect', href: 'https://d1buiexcd5gara.cloudfront.net', crossOrigin: 'anonymous' },
      { rel: 'dns-prefetch', href: 'https://d1buiexcd5gara.cloudfront.net' },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1e293b" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={`${inter.className} antialiased`}>
        {/* LocalBusiness Schema for Google Business Profile */}
        <LocalBusinessSchema />
        <GoogleAnalytics />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
