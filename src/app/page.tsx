import Hero from "@/components/Hero";
import FeatureCard from "@/components/FeatureCard";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        variant="home"
        title="Cresta Bella Vineyards"
        subtitle="Small Batch Wines from the Santa Rosa Plateau"
        imagePlaceholder="Panoramic vineyard rows with Santa Rosa Plateau views, golden hour lighting"
      />

      {/* Introduction Section */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-cream-light">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-px bg-burgundy/30 mx-auto mb-8" />
            <p className="font-serif text-xl sm:text-2xl md:text-3xl text-charcoal/80 leading-relaxed">
              Nestled in the rolling hills of La Cresta, California, Cresta
              Bella Vineyards is a family-owned estate producing small batch
              wines with care, patience, and a view that never gets old.
            </p>
            <div className="w-16 h-px bg-burgundy/30 mx-auto mt-8" />
          </div>
        </ScrollReveal>
      </section>

      {/* Three Feature Cards */}
      <section
        className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-cream"
        aria-label="What makes us special"
      >
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="font-serif text-3xl sm:text-4xl text-burgundy text-center mb-16">
              The Estate
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <ScrollReveal>
              <FeatureCard
                icon="vineyard"
                title="The Vineyard"
                description="Perched on the Santa Rosa Plateau at over 2,000 feet, our vines enjoy cool ocean breezes, warm days, and sweeping views that stretch to the horizon. This is winemaking with a backdrop."
                href="/about"
                linkText="Learn More"
              />
            </ScrollReveal>

            <ScrollReveal>
              <FeatureCard
                icon="winemaking"
                title="Small Batch Process"
                description="Every bottle is made by hand. We believe in quality over quantity — small lots, careful attention, and wines that reflect the character of this unique plateau."
                href="/about"
                linkText="Our Approach"
              />
            </ScrollReveal>

            <ScrollReveal>
              <FeatureCard
                icon="grapes"
                title="Grapes for Purchase"
                description="Each year, we offer a limited quantity of estate-grown grapes to home winemakers and fellow producers. Availability varies by season and harvest."
                href="/contact"
                linkText="Inquire"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Visual Break / Quote Section */}
      <section className="relative py-32 sm:py-40 px-4 sm:px-6">
        {/* TODO: Replace with real vineyard photo background */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-olive-dark/80 via-olive/70 to-burgundy/60"
          aria-hidden="true"
        />
        <ScrollReveal>
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <blockquote>
              <p className="font-serif text-2xl sm:text-3xl md:text-4xl italic text-cream-light leading-relaxed">
                &ldquo;Where the vines meet the sky.&rdquo;
              </p>
            </blockquote>
            <div className="mt-6 w-12 h-px bg-cream/30 mx-auto" />
            <p className="mt-4 text-sm tracking-widest uppercase text-cream/50">
              La Cresta, California &middot; Santa Rosa Plateau
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* Pre-footer CTA */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-cream-light text-center">
        <ScrollReveal>
          <h2 className="font-serif text-2xl sm:text-3xl text-burgundy mb-4">
            Visit the Vineyard
          </h2>
          <p className="text-charcoal/60 max-w-lg mx-auto mb-8">
            Tastings are available by appointment. We would love to share our
            wines and our views with you.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-burgundy text-cream-light text-sm tracking-widest uppercase hover:bg-burgundy-deep transition-colors duration-200"
          >
            Get in Touch
          </a>
        </ScrollReveal>
      </section>
    </>
  );
}
