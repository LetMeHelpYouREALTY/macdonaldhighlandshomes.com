"use client";

import Link from "next/link";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaPinterest,
  FaTiktok,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { siteConfig } from "@/config/siteConfig";
import CalendlyCta from "@/components/scheduling/CalendlyCta";
import SiteLogo from "@/components/common/SiteLogo";
import AgentPortrait from "@/components/ui/AgentPortrait";

const services = [
  { name: "Selling Your Home", href: "/services/selling-your-macdonald-highlands-home" },
  { name: "Buying in MacDonald Highlands", href: "/services/buying-in-macdonald-highlands" },
  { name: "Luxury Home Valuation", href: "/services/luxury-home-valuation" },
  { name: "Relocation Concierge", href: "/services/relocation-concierge" },
  { name: "Investment Advisory", href: "/services/investment-advisory" },
  { name: "Off-Market Opportunities", href: "/services/off-market-opportunities" },
];

const community = [
  { name: "About MacDonald Highlands", href: "/macdonald-highlands-community" },
  { name: "About Dr. Jan Duffy", href: "/about-dr-jan-duffy" },
  { name: "All Services", href: "/services" },
  { name: "Current Listings", href: "/listings" },
  { name: "Sold / Results", href: "/sold" },
  { name: "Market Note", href: "/insights/macdonald-highlands-listing-market" },
  { name: "Testimonials", href: "/testimonials" },
];

const socialLinks = [
  { href: siteConfig.social.facebook, label: "Facebook", Icon: FaFacebook },
  { href: siteConfig.social.instagram, label: "Instagram", Icon: FaInstagram },
  { href: siteConfig.social.twitter, label: "X", Icon: FaXTwitter },
  { href: siteConfig.social.linkedin, label: "LinkedIn", Icon: FaLinkedin },
  { href: siteConfig.social.youtube, label: "YouTube", Icon: FaYoutube },
  { href: siteConfig.social.pinterest, label: "Pinterest", Icon: FaPinterest },
  { href: siteConfig.social.tiktok, label: "TikTok", Icon: FaTiktok },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="bg-neutral-900 text-neutral-200">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-1">
              <SiteLogo tone="dark" portraitSize="sm" />
              <p className="mt-3 text-neutral-200 text-sm">{siteConfig.agent.title}</p>
              <p className="mt-3 text-neutral-200 text-sm leading-relaxed font-medium">{siteConfig.name}</p>
              <p className="mt-3 text-neutral-300 text-sm leading-relaxed">
                {siteConfig.agent.experience}. GBP opening date {siteConfig.foundingDate}.{" "}
                {siteConfig.categories.primary}.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                {socialLinks.map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="text-neutral-200 hover:text-gold-500 transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-serif text-lg text-white mb-4">Services</h3>
              <ul className="space-y-3">
                {services.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-neutral-200 hover:text-gold-500 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-lg text-white mb-4">Community</h3>
              <ul className="space-y-3">
                {community.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-neutral-200 hover:text-gold-500 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-lg text-white mb-4">Contact</h3>
              <div className="space-y-4">
                <p className="text-cream-200 font-semibold">Dr. Jan Duffy, REALTOR®</p>

                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`}
                  className="flex items-center gap-3 text-neutral-100 hover:text-gold-500 transition-colors"
                >
                  <FaPhone className="h-4 w-4 text-gold-500" />
                  <span className="font-semibold">{siteConfig.contact.phoneFormatted}</span>
                </a>
                <div className="pl-7 space-y-2">
                  <a
                    href={siteConfig.contact.smsHref}
                    className="block text-sm text-cream-200 hover:text-white hover:underline"
                  >
                    Text / SMS
                  </a>
                  <CalendlyCta
                    event="listing"
                    utmContent="footer-beside-phone"
                    label="Book on Calendly →"
                    variant="link"
                    className="text-cream-200 hover:text-white text-sm"
                  />
                </div>

                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-3 text-neutral-200 hover:text-gold-500 transition-colors text-sm"
                >
                  <FaEnvelope className="h-4 w-4 text-gold-500" />
                  <span>{siteConfig.contact.email}</span>
                </a>

                <div className="flex items-start gap-3 text-neutral-200 text-sm">
                  <FaMapMarkerAlt className="h-4 w-4 text-gold-500 mt-0.5 flex-shrink-0" />
                  <span>
                    {siteConfig.name}
                    <br />
                    {siteConfig.contact.office.street}
                    <br />
                    {siteConfig.contact.office.city}, {siteConfig.contact.office.state}{" "}
                    {siteConfig.contact.office.zip}
                    <br />
                    {siteConfig.contact.hours}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-700">
          <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-xs text-neutral-200">
                © {currentYear} {siteConfig.name}. All rights reserved. Equal Housing Opportunity.
                <br />
                {siteConfig.agent.brokerage} · License {siteConfig.agent.license} · Women-owned ·
                Veteran-owned · LGBTQ+ friendly
              </p>
              <div className="flex gap-6 text-xs text-neutral-200">
                <Link href="/contact" className="hover:text-gold-500 transition-colors">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-0 left-0 right-0 lg:hidden bg-gold-500 p-3 z-50 shadow-lg">
        <div className="flex gap-2 items-center">
          <AgentPortrait size="xs" href="/about-dr-jan-duffy" showRing={false} className="ml-1" />
          <a
            href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`}
            className="flex-1 flex items-center justify-center gap-2 text-neutral-900 font-semibold py-2"
          >
            <FaPhone className="h-4 w-4" />
            Call
          </a>
          <a
            href={siteConfig.contact.smsHref}
            className="flex-1 flex items-center justify-center gap-2 text-neutral-900 font-semibold py-2 border-l border-neutral-900/20"
          >
            Text
          </a>
        </div>
      </div>
    </>
  );
}
