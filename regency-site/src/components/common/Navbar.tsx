"use client";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";

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
    { href: "/services", label: "Services" },
    { href: "/listings", label: "Listings" },
    { href: "/macdonald-highlands-community", label: "Community" },
    { href: "/amenities", label: "Amenities" },
    { href: "/about-dr-jan-duffy", label: "About" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg py-4 md:py-5 transition-all duration-300 ${isScrolled ? 'py-2 md:py-3 shadow-xl' : ''}`}>
      <div className="container-luxury">
        <div className="flex justify-between items-center">
          {/* Brand Logo */}
          <Link
            href="/"
            className="text-xl md:text-2xl lg:text-3xl font-serif font-bold text-primary-900 cursor-pointer hover:text-primary-700 transition-colors duration-300"
          >
            {siteConfig.name}
          </Link>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center">
            <button
              className="text-neutral-700 focus:outline-none p-2"
              onClick={handleMobileMenuToggle}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Desktop and Mobile Navigation Links */}
          <div
            className={`lg:flex lg:items-center absolute lg:relative top-full left-0 right-0 bg-white lg:bg-transparent ${
              isMobileMenuOpen ? "block" : "hidden"
            } transition-all duration-300 lg:transition-none shadow-lg lg:shadow-none`}
          >
            <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-1 xl:space-x-6 p-4 lg:p-0">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-neutral-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out hover:bg-primary-50"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="btn-primary mt-2 lg:mt-0 lg:ml-4"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}