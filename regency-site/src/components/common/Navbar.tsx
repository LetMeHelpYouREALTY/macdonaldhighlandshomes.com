"use client";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";
import Link from "next/link";
import CalendlyCta from "@/components/scheduling/CalendlyCta";
import SiteLogo from "@/components/common/SiteLogo";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { href: "/listings", label: "Listings" },
    { href: "/services/selling-your-macdonald-highlands-home", label: "Selling" },
    { href: "/services/buying-in-macdonald-highlands", label: "Buying" },
    { href: "/about-dr-jan-duffy", label: "About" },
    { href: "/macdonald-highlands-community", label: "Communities" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm transition-all duration-300 ${
        isScrolled ? "py-2 md:py-3 shadow-xl" : "py-4 md:py-5 shadow-lg"
      }`}
    >
      <div className="container-luxury">
        <div className="flex justify-between items-center gap-4">
          <SiteLogo />

          <div className="flex lg:hidden items-center">
            <button
              className="text-neutral-700 focus:outline-none p-2"
              onClick={handleMobileMenuToggle}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          <div
            className={`lg:flex lg:items-center absolute lg:relative top-full left-0 right-0 bg-white lg:bg-transparent ${
              isMobileMenuOpen ? "block" : "hidden"
            } transition-all duration-300 lg:transition-none shadow-lg lg:shadow-none`}
          >
            <div className="flex flex-col lg:flex-row lg:items-center space-y-2 lg:space-y-0 lg:space-x-1 xl:space-x-5 p-4 lg:p-0">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-neutral-700 hover:text-primary-700 px-3 py-2 rounded-md text-sm font-medium uppercase tracking-wide transition-all duration-300 ease-in-out hover:bg-primary-50"
                >
                  {link.label}
                </Link>
              ))}
              <span className="mt-2 lg:mt-0 lg:ml-2 inline-flex" onClick={() => setIsMobileMenuOpen(false)}>
                <CalendlyCta
                  event="listing"
                  utmContent="nav-get-started"
                  label="Get Started"
                  className="text-sm uppercase tracking-wide"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
