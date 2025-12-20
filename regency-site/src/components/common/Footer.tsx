"use client";

import Link from "next/link";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const services = [
  { name: "Sell Your Home", href: "/Services" },
  { name: "Buy in MacDonald Highlands", href: "/Property" },
  { name: "Home Valuation", href: "/Contact_us" },
  { name: "Relocation Services", href: "/Contact_us" },
  { name: "Investment Advisory", href: "/Contact_us" },
  { name: "Off-Market Listings", href: "/Property" },
];

const community = [
  { name: "About MacDonald Highlands", href: "/About" },
  { name: "DragonRidge Country Club", href: "/Services" },
  { name: "Current Listings", href: "/Property" },
  { name: "Community Map", href: "/About" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="bg-neutral-900 text-neutral-200">
        {/* Main Footer */}
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <Link href="/" className="inline-block">
                <span className="font-serif text-2xl text-white font-bold">
                  MacDonald Highlands
                </span>
              </Link>
              <p className="mt-4 text-neutral-300 text-sm leading-relaxed">
                Your exclusive access to Henderson&apos;s most prestigious guard-gated golf community. 
                Expert representation for luxury buyers and sellers.
              </p>
              <div className="mt-6">
                <p className="text-xs text-neutral-400">
                  Berkshire Hathaway HomeServices<br />
                  Nevada Properties
                </p>
              </div>
            </div>

            {/* Services Column */}
            <div>
              <h3 className="font-serif text-lg text-white mb-4">Services</h3>
              <ul className="space-y-3">
                {services.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-neutral-300 hover:text-gold-500 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Community Column */}
            <div>
              <h3 className="font-serif text-lg text-white mb-4">Community</h3>
              <ul className="space-y-3">
                {community.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-neutral-300 hover:text-gold-500 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h3 className="font-serif text-lg text-white mb-4">Contact</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-gold-500 font-semibold">Dr. Jan Duffy, REALTOR®</p>
                  <p className="text-xs text-neutral-300 mt-1">NV License #S.0197614.LLC</p>
                </div>
                
                <a
                  href="tel:702-222-1964"
                  className="flex items-center gap-3 text-neutral-100 hover:text-gold-500 transition-colors"
                >
                  <FaPhone className="h-4 w-4 text-gold-500" />
                  <span className="font-semibold">702-222-1964</span>
                </a>
                
                <a
                  href="mailto:jan@drjanduffy.com"
                  className="flex items-center gap-3 text-neutral-300 hover:text-gold-500 transition-colors text-sm"
                >
                  <FaEnvelope className="h-4 w-4 text-gold-500" />
                  <span>jan@drjanduffy.com</span>
                </a>
                
                <div className="flex items-start gap-3 text-neutral-300 text-sm">
                  <FaMapMarkerAlt className="h-4 w-4 text-gold-500 mt-0.5 flex-shrink-0" />
                  <span>
                    Berkshire Hathaway HomeServices<br />
                    Nevada Properties<br />
                    Henderson, NV
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-700">
          <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-xs text-neutral-300">
                © {currentYear} Dr. Jan Duffy. All rights reserved. 
                Equal Housing Opportunity.
              </p>
              <div className="flex gap-6 text-xs text-neutral-300">
                <Link href="/Contact_us" className="hover:text-gold-500 transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/Contact_us" className="hover:text-gold-500 transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 lg:hidden bg-gold-500 p-4 z-50 shadow-lg">
        <a
          href="tel:702-222-1964"
          className="flex items-center justify-center gap-3 text-neutral-900 font-semibold"
        >
          <FaPhone className="h-5 w-5" />
          <span>Call Dr. Jan: 702-222-1964</span>
        </a>
      </div>
    </>
  );
}