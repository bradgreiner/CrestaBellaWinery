import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary border-t border-gold/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
          {/* Brand Column */}
          <div className="text-center md:text-left">
            <Image
              src="/images/cresta_bella_transparent_refined.png"
              alt="Cresta Bella Vineyards logo"
              width={100}
              height={100}
              className="mx-auto md:mx-0 mb-6"
            />
            <p className="text-sm leading-relaxed text-muted">
              Small batch wines from the Santa Rosa Plateau.
              <br />
              La Cresta, California.
            </p>
            <p className="text-xs text-caption mt-3 italic font-serif">
              A Greiner family passion project.
            </p>
          </div>

          {/* Navigation Column */}
          <div className="text-center">
            <h3 className="text-[10px] tracking-[0.3em] uppercase font-sans text-gold/70 mb-8">
              Explore
            </h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/"
                    className="text-sm text-muted hover:text-offwhite transition-colors duration-300"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/our-vineyard"
                    className="text-sm text-muted hover:text-offwhite transition-colors duration-300"
                  >
                    Our Vineyard
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-sm text-muted hover:text-offwhite transition-colors duration-300"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Contact Column */}
          <div className="text-center md:text-right">
            <h3 className="text-[10px] tracking-[0.3em] uppercase font-sans text-gold/70 mb-8">
              Get in Touch
            </h3>
            <p className="text-sm text-offwhite font-medium mb-3">
              Don Greiner, Proprietor
            </p>
            <p className="text-sm text-muted mb-1">
              <a
                href="tel:714-366-5366"
                className="hover:text-gold transition-colors duration-300"
              >
                (714) 366-5366
              </a>
            </p>
            <p className="text-sm text-muted mb-4">
              <a
                href="mailto:dongreiner1957@gmail.com"
                className="hover:text-gold transition-colors duration-300"
              >
                dongreiner1957@gmail.com
              </a>
            </p>
            <p className="text-xs text-muted">
              La Cresta, California
              <br />
              Tastings by appointment only
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-gold/5 text-center">
          <p className="text-xs text-caption">
            &copy; {currentYear} Cresta Bella Vineyards. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
