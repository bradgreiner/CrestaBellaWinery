import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-burgundy-deep text-cream/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand Column */}
          <div className="text-center md:text-left">
            <div className="mb-4">
              <span className="font-serif text-2xl tracking-widest text-cream-light font-semibold">
                CRESTA BELLA
              </span>
              <br />
              <span className="text-xs tracking-[0.3em] uppercase text-olive-light">
                Vineyards
              </span>
            </div>
            <p className="text-sm leading-relaxed text-cream/60">
              Small batch wines from the Santa Rosa Plateau.
              <br />
              La Cresta, California.
            </p>
          </div>

          {/* Navigation Column */}
          <div className="text-center">
            <h3 className="font-serif text-lg text-cream-light mb-4">
              Explore
            </h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-sm text-cream/60 hover:text-cream-light transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-sm text-cream/60 hover:text-cream-light transition-colors"
                  >
                    Our Vineyard
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-sm text-cream/60 hover:text-cream-light transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Contact Column */}
          <div className="text-center md:text-right">
            <h3 className="font-serif text-lg text-cream-light mb-4">
              Get in Touch
            </h3>
            <p className="text-sm text-cream/60 mb-2">
              {/* TODO: Replace with actual email */}
              <a
                href="mailto:info@crestabellawinery.com"
                className="hover:text-cream-light transition-colors"
              >
                info@crestabellawinery.com
              </a>
            </p>
            <p className="text-sm text-cream/60">
              La Cresta, California
              <br />
              Tastings by appointment only
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-cream/10 text-center">
          <p className="text-xs text-cream/40">
            &copy; {currentYear} Cresta Bella Vineyards. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
