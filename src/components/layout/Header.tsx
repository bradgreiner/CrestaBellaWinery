"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/our-vineyard", label: "Our Vineyard" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-secondary/95 backdrop-blur-md border-b border-gold/10"
            : "bg-transparent"
        }`}
      >
        <nav
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          aria-label="Main navigation"
        >
          <div className="flex items-center justify-between py-2 sm:py-3">
            <Link
              href="/"
              className="flex-shrink-0 transition-opacity hover:opacity-80"
              aria-label="Cresta Bella Vineyards - Home"
            >
              <Image
                src="/images/cresta_bella_transparent_refined.png"
                alt="Cresta Bella Vineyards logo"
                width={150}
                height={150}
                className={`transition-all duration-500 ${
                  isScrolled ? "h-[70px] md:h-[80px]" : "h-[90px] md:h-[100px]"
                } w-auto`}
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-12">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs tracking-[0.25em] uppercase font-sans transition-colors duration-300 ${
                    pathname === link.href
                      ? "text-gold"
                      : "text-offwhite/70 hover:text-offwhite"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
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
                  className={`block h-px bg-offwhite transition-all duration-300 origin-center ${
                    isMenuOpen ? "rotate-45 translate-y-[10px]" : ""
                  }`}
                />
                <span
                  className={`block h-px bg-offwhite transition-all duration-300 ${
                    isMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-px bg-offwhite transition-all duration-300 origin-center ${
                    isMenuOpen ? "-rotate-45 -translate-y-[10px]" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Full-screen Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
            role="menu"
          >
            <div className="absolute inset-0 bg-secondary/98 backdrop-blur-md" />
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen gap-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    role="menuitem"
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-2xl tracking-[0.3em] uppercase font-sans transition-colors duration-200 ${
                      pathname === link.href
                        ? "text-gold"
                        : "text-offwhite/60 hover:text-offwhite"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-12"
              >
                <div className="w-12 h-px bg-gold/20 mx-auto mb-6" />
                <p className="text-[10px] tracking-[0.2em] uppercase text-muted font-sans text-center">
                  Small Batch Wines
                  <br />
                  Santa Rosa Plateau
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
