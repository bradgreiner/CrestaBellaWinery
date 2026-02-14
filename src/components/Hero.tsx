interface HeroProps {
  title: string;
  subtitle?: string;
  /** Gradient style: "home" for full-height, "page" for shorter banner */
  variant?: "home" | "page";
  /** Placeholder description for future image replacement */
  /** Placeholder description for future image replacement */
  imagePlaceholder?: string;
}

export default function Hero({
  title,
  subtitle,
  variant = "page",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  imagePlaceholder,
}: HeroProps) {
  const isHome = variant === "home";

  return (
    <section
      className={`relative flex items-center justify-center text-center ${
        isHome ? "min-h-screen" : "min-h-[50vh]"
      }`}
      aria-label={isHome ? "Welcome to Cresta Bella Vineyards" : title}
    >
      {/* Background placeholder */}
      {/* TODO: Replace this gradient with a real photo using next/image */}
      {/* Suggested image: {imagePlaceholder || "Vineyard landscape photo"} */}
      <div
        className={`absolute inset-0 ${
          isHome
            ? "bg-gradient-to-br from-burgundy-deep via-burgundy to-olive-dark"
            : "bg-gradient-to-br from-burgundy-deep via-burgundy/90 to-olive/70"
        }`}
        aria-hidden="true"
      >
        {/* Decorative overlay pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(0,0,0,0.3)_100%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 max-w-4xl mx-auto">
        {isHome && (
          <div className="mb-8 animate-fade-in">
            {/* Logo area for home hero */}
            <div className="inline-block mb-6">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full border-2 border-cream/30 flex items-center justify-center">
                <svg
                  viewBox="0 0 48 48"
                  className="w-14 h-14 text-cream/80"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M24 4c-2 8-10 14-10 22a10 10 0 0020 0C34 18 26 12 24 4z" />
                  <path
                    d="M20 28c0-4 4-8 4-12 0 4 4 8 4 12a4 4 0 01-8 0z"
                    opacity="0.5"
                  />
                </svg>
              </div>
            </div>
          </div>
        )}

        <h1
          className={`font-serif text-cream-light leading-tight tracking-wide ${
            isHome
              ? "text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
              : "text-3xl sm:text-4xl md:text-5xl"
          }`}
        >
          {title}
        </h1>

        {subtitle && (
          <p
            className={`mt-4 sm:mt-6 font-serif italic text-cream/70 ${
              isHome ? "text-lg sm:text-xl md:text-2xl" : "text-lg sm:text-xl"
            }`}
          >
            {subtitle}
          </p>
        )}

        {isHome && (
          <div className="mt-12 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <a
              href="/about"
              className="inline-block px-8 py-3 border border-cream/40 text-cream/80 text-sm tracking-widest uppercase hover:bg-cream/10 hover:border-cream/60 transition-all duration-300"
            >
              Discover Our Vineyard
            </a>
          </div>
        )}
      </div>

      {/* Scroll indicator for home */}
      {isHome && (
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
          aria-hidden="true"
        >
          <svg
            className="w-6 h-6 text-cream/40"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 14l-7 7m0 0l-7-7"
            />
          </svg>
        </div>
      )}
    </section>
  );
}
