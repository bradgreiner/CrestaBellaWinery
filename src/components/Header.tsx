"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Our Vineyard" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-cream-light/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex-shrink-0 transition-opacity hover:opacity-80"
            aria-label="Cresta Bella Vineyards - Home"
          >
            <Image
              src="/images/ChatGPT_Image_Sep_19__2025__12_52_16_PM.png"
              alt="Cresta Bella Vineyards logo"
              width={60}
              height={60}
              className={`transition-all duration-300 ${
                isScrolled ? "" : "brightness-125"
              }`}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm tracking-widest uppercase transition-colors duration-200 hover:text-burgundy ${
                  pathname === link.href
                    ? isScrolled
                      ? "text-burgundy font-medium"
                      : "text-cream-light font-medium"
                    : isScrolled
                    ? "text-charcoal/70"
                    : "text-cream-light/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 -mr-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`block h-0.5 rounded transition-all duration-300 ${
                  isScrolled ? "bg-charcoal" : "bg-cream-light"
                } ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block h-0.5 rounded transition-all duration-300 ${
                  isScrolled ? "bg-charcoal" : "bg-cream-light"
                } ${isMenuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 rounded transition-all duration-300 ${
                  isScrolled ? "bg-charcoal" : "bg-cream-light"
                } ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? "max-h-60 pb-4" : "max-h-0"
          }`}
          role="menu"
        >
          <div className="bg-cream-light/95 backdrop-blur-sm rounded-lg p-4 mt-2 shadow-lg">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                role="menuitem"
                className={`block py-3 px-4 text-sm tracking-widest uppercase transition-colors ${
                  pathname === link.href
                    ? "text-burgundy font-medium"
                    : "text-charcoal/70 hover:text-burgundy"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
