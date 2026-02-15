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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-cream-light/95 backdrop-blur-sm shadow-sm"
            : "bg-transparent border-b border-white/20"
        }`}
      >
        <nav
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          aria-label="Main navigation"
        >
          <div className="flex items-center justify-between py-5 sm:py-6">
            {/* Logo - always visible, top left, links to home */}
            <Link
              href="/"
              className="flex-shrink-0 transition-opacity hover:opacity-80"
              aria-label="Cresta Bella Vineyards - Home"
            >
              <Image
                src="/images/cresta_bella_transparent_refined.png"
                alt="Cresta Bella Vineyards logo"
                width={96}
                height={96}
                className={`h-20 md:h-24 w-auto transition-all duration-300 ${
                  isScrolled ? "" : "drop-shadow-md"
                }`}
                priority
              />
            </Link>

            {/* Desktop Navigation - right aligned */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-base lg:text-lg tracking-[0.2em] uppercase font-sans transition-colors duration-200 ${
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

            {/* Mobile Menu Button - right aligned, min 44x44 tap target */}
            <button
              type="button"
              className="md:hidden p-3 -mr-3 min-w-[44px] min-h-[44px] flex items-center justify-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <div className="w-7 h-5 flex flex-col justify-between">
                <span
                  className={`block h-0.5 rounded transition-all duration-300 origin-center ${
                    isScrolled ? "bg-charcoal" : "bg-cream-light"
                  } ${isMenuOpen ? "rotate-45 translate-y-[9px]" : ""}`}
                />
                <span
                  className={`block h-0.5 rounded transition-all duration-300 ${
                    isScrolled ? "bg-charcoal" : "bg-cream-light"
                  } ${isMenuOpen ? "opacity-0" : ""}`}
                />
                <span
                  className={`block h-0.5 rounded transition-all duration-300 origin-center ${
                    isScrolled ? "bg-charcoal" : "bg-cream-light"
                  } ${isMenuOpen ? "-rotate-45 -translate-y-[9px]" : ""}`}
                />
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Full-screen Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        role="menu"
      >
        <div className="absolute inset-0 bg-burgundy-deep/98 backdrop-blur-sm" />
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              role="menuitem"
              onClick={() => setIsMenuOpen(false)}
              className={`text-2xl tracking-[0.2em] uppercase font-sans transition-colors duration-200 ${
                pathname === link.href
                  ? "text-cream-light"
                  : "text-cream/60 hover:text-cream-light"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-8 w-12 h-px bg-cream/20" />
          <p className="text-xs tracking-[0.15em] uppercase text-cream/30 font-sans">
            Cresta Bella Vineyards
          </p>
        </div>
      </div>
    </>
  );
}
