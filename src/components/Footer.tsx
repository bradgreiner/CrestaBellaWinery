import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-burgundy-deep text-cream/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand Column */}
          <div className="text-center md:text-left">
            <div className="mb-4">
              <Image
                src="/images/logo.png"
                alt="Cresta Bella Vineyards logo"
                width={120}
                height={120}
                className="mx-auto md:mx-0 brightness-110"
              />
            </div>
            <p className="text-sm leading-relaxed text-cream/60">
              Small batch wines from the Santa Rosa Plateau.
              <br />
              La Cresta, California.
            </p>
            <p className="text-xs text-cream/40 mt-3 italic">
              A Greiner family passion project.
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
            <p className="text-sm text-cream/70 font-medium mb-2">
              Don Greiner, Proprietor
            </p>
            <p className="text-sm text-cream/60 mb-1">
              <a
                href="tel:714-366-5366"
                className="hover:text-cream-light transition-colors"
              >
                (714) 366-5366
              </a>
            </p>
            <p className="text-sm text-cream/60 mb-3">
              <a
                href="mailto:dongreiner1957@gmail.com"
                className="hover:text-cream-light transition-colors"
              >
                dongreiner1957@gmail.com
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
