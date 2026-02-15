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
      setIsScrolled(window.scrollY > 100);
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
          : "bg-transparent border-b border-white/20"
      }`}
    >
      <nav
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <div
          className={`flex items-center justify-center transition-all duration-300 ${
            isScrolled ? "h-16" : "h-20"
          }`}
        >
          {/* Logo - only visible when scrolled */}
          <Link
            href="/"
            className={`absolute left-4 sm:left-6 lg:left-8 flex-shrink-0 transition-all duration-300 ${
              isScrolled
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-2 pointer-events-none"
            }`}
            aria-label="Cresta Bella Vineyards - Home"
            tabIndex={isScrolled ? 0 : -1}
          >
            <Image
              src="/images/logo.png"
              alt="Cresta Bella Vineyards logo"
              width={40}
              height={40}
              className="transition-all duration-300"
              priority
            />
          </Link>

          {/* Desktop Navigation - centered */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm tracking-[0.2em] uppercase font-sans transition-colors duration-200 ${
                  pathname === link.href
                    ? isScrolled
                      ? "text-burgundy"
                      : "text-cream-light"
                    : isScrolled
                    ? "text-charcoal/60 hover:text-burgundy"
                    : "text-cream-light/80 hover:text-cream-light"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button - right aligned */}
          <button
            type="button"
            className="md:hidden absolute right-4 sm:right-6 p-2"
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
                className={`block py-3 px-4 text-sm tracking-[0.2em] uppercase font-sans transition-colors ${
                  pathname === link.href
                    ? "text-burgundy"
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
