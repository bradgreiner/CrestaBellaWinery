import Image from "next/image";
import VideoHero from "@/components/VideoHero";
import FeatureCard from "@/components/FeatureCard";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <VideoHero
        variant="home"
        title="Cresta Bella Vineyards"
        subtitle="Small Batch Wines from the Santa Rosa Plateau"
        videoMp4="/videos/IMG_8563.mp4"
        videoMov="/videos/IMG_8563.MOV"
        posterImage="/images/IMG_8538.jpeg"
        ctaHref="/about"
        ctaText="Discover Our Vineyard"
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

      {/* Current Releases - Wine Showcase */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-cream-light">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl sm:text-4xl text-burgundy mb-2">
                Current Releases
              </h2>
              <div className="w-16 h-px bg-burgundy/30 mx-auto mt-4" />
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-16 max-w-3xl mx-auto">
              {/* Cabernet Franc */}
              <div className="text-center group">
                <div className="relative mb-6 bg-cream rounded-sm p-6 sm:p-8 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                  <Image
                    src="/images/cabernet-franc-2023.png"
                    alt="Cresta Bella Vineyards 2023 Cabernet Franc, small batch wine from La Cresta California"
                    width={300}
                    height={450}
                    className="mx-auto h-auto"
                  />
                </div>
                <h3 className="font-serif text-xl text-burgundy">
                  Cabernet Franc
                </h3>
                <p className="text-sm text-charcoal/50 mt-1">2023 Vintage</p>
              </div>

              {/* Cabernet Sauvignon */}
              <div className="text-center group">
                <div className="relative mb-6 bg-cream rounded-sm p-6 sm:p-8 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                  <Image
                    src="/images/cabernet-sauvignon-2023.png"
                    alt="Cresta Bella Vineyards 2023 Cabernet Sauvignon, estate-grown small batch wine"
                    width={300}
                    height={450}
                    className="mx-auto h-auto"
                  />
                </div>
                <h3 className="font-serif text-xl text-burgundy">
                  Cabernet Sauvignon
                </h3>
                <p className="text-sm text-charcoal/50 mt-1">2023 Vintage</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <p className="text-center text-charcoal/50 text-sm mt-12 max-w-md mx-auto">
              Estate-grown reds, handcrafted in small lots on the Santa Rosa
              Plateau. Each bottle reflects the character of our unique terroir.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Visual Break / Quote Section */}
      <section className="relative py-32 sm:py-40 px-4 sm:px-6">
        {/* Background: grape cluster close-up photo */}
        <Image
          src="/images/IMG_8081.jpeg"
          alt="Estate-grown grapes ripening on the vine at Cresta Bella Vineyards, La Cresta California"
          fill
          className="object-cover"
        />
        <div
          className="absolute inset-0 bg-black/60"
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
