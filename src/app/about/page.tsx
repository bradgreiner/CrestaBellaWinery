import type { Metadata } from "next";
import Hero from "@/components/Hero";
import PhotoGrid from "@/components/PhotoGrid";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "About Cresta Bella Vineyards | Family Winery on the Santa Rosa Plateau",
  description:
    "Learn about Cresta Bella Vineyards, a family-owned small batch winery nestled on the Santa Rosa Plateau in La Cresta, California. Discover our vineyard, our winemaking process, and the land that makes our wines unique.",
  openGraph: {
    title: "About Cresta Bella Vineyards | Family Winery on the Santa Rosa Plateau",
    description:
      "Discover the story behind Cresta Bella Vineyards — a family-owned estate on the Santa Rosa Plateau producing small batch wines in La Cresta, California.",
    url: "https://crestabellawinery.com/about",
  },
  alternates: {
    canonical: "https://crestabellawinery.com/about",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Banner */}
      <Hero
        variant="page"
        title="Our Vineyard"
        subtitle="A family estate on the Santa Rosa Plateau"
        imagePlaceholder="Vineyard rows at dawn with morning mist on the plateau"
      />

      {/* Story Section */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-cream-light">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl sm:text-4xl text-burgundy mb-2">
                Our Story
              </h2>
              <div className="w-16 h-px bg-burgundy/30 mx-auto mt-4" />
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="space-y-6 text-charcoal/70 leading-relaxed">
              <p>
                Cresta Bella Vineyards began the way most good things do — with
                a love for the land and a willingness to get your hands dirty.
                What started as a family dream on the Santa Rosa Plateau has
                grown into a small but purposeful estate, rooted in the belief
                that great wine comes from great land, tended by people who
                care.
              </p>
              <p>
                Our vineyard sits in La Cresta, a quiet stretch of California&apos;s
                Riverside County, roughly 1,000 feet above the Temecula Valley
                floor. Up here, the air is different. The mornings are cool, the
                afternoons warm, and by evening, ocean breezes from the coast —
                just 15 to 20 miles away — sweep across the plateau, slowing
                the ripening and building complexity into every grape.
              </p>
              <p>
                We are not a large operation. We are a family making wine
                because this is the kind of place that deserves it. Every vine
                is tended by hand. Every decision is made with the next vintage
                in mind. And every bottle carries the character of this singular
                piece of land.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* The Land Section */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl sm:text-4xl text-burgundy mb-2">
                The Land
              </h2>
              <div className="w-16 h-px bg-burgundy/30 mx-auto mt-4" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            <ScrollReveal>
              <div className="space-y-6 text-charcoal/70 leading-relaxed">
                <p>
                  La Cresta sits on the Santa Rosa Plateau, one of Southern
                  California&apos;s most pristine natural landscapes. At elevations
                  ranging from 1,800 to 2,700 feet above sea level, our
                  vineyard enjoys conditions that set it apart from the valley
                  wineries below.
                </p>
                <p>
                  The difference is measurable: temperatures on the plateau run
                  roughly 10 degrees cooler than the Temecula Valley floor.
                  Cool ocean breezes from the Pacific — just a short distance
                  to the west — moderate the afternoons and extend the growing
                  season. The result is grapes with depth, structure, and
                  complexity.
                </p>
                <p>
                  The landscape itself is part of the story. Ancient coast live
                  oaks, rolling grasslands, and long views to the surrounding
                  mountains create an environment that feels more like a
                  national preserve than a suburb. It is one of the last
                  unspoiled plateaus in this part of the state — and our vines
                  grow right in the heart of it.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              {/* TODO: Replace with real photo of the plateau landscape */}
              <div
                className="aspect-[4/3] rounded-sm bg-gradient-to-br from-olive/50 via-olive-light/30 to-cream-dark/50 placeholder-image"
                role="img"
                aria-label="Placeholder: Panoramic view of the Santa Rosa Plateau with vineyard in foreground"
              >
                <span className="text-sm">
                  [Panoramic plateau view with vineyard]
                </span>
              </div>
            </ScrollReveal>
          </div>

          {/* Terroir Details */}
          <ScrollReveal>
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                {
                  stat: "2,000+",
                  unit: "feet",
                  label: "Elevation",
                },
                {
                  stat: "~10°",
                  unit: "cooler",
                  label: "Than Valley Floor",
                },
                {
                  stat: "15-20",
                  unit: "miles",
                  label: "From the Coast",
                },
                {
                  stat: "Small",
                  unit: "batch",
                  label: "Always",
                },
              ].map((item) => (
                <div key={item.label} className="p-4">
                  <p className="font-serif text-2xl sm:text-3xl text-burgundy">
                    {item.stat}
                  </p>
                  <p className="text-xs tracking-widest uppercase text-olive mt-1">
                    {item.unit}
                  </p>
                  <p className="text-sm text-charcoal/50 mt-2">{item.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Winemaking Section */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-cream-light">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl sm:text-4xl text-burgundy mb-2">
                Our Winemaking
              </h2>
              <div className="w-16 h-px bg-burgundy/30 mx-auto mt-4" />
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="space-y-6 text-charcoal/70 leading-relaxed">
              <p>
                Small batch is not a marketing phrase for us — it is how we
                work. Every step of the process, from pruning to pressing to
                bottling, is done with intention and by hand. We do not chase
                volume. We chase flavor, balance, and a sense of place.
              </p>
              <p>
                Our approach is straightforward: grow the best grapes this land
                can produce, then get out of their way. We ferment in small
                lots, age with patience, and bottle when the wine is ready —
                not when the calendar says so. The result is wine that honestly
                reflects where it comes from.
              </p>
              <p>
                We believe that good winemaking starts in the vineyard. When
                you know your vines the way you know your family, the wine
                takes care of itself.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Visual Break */}
      <section className="relative py-24 sm:py-32 px-4 sm:px-6">
        {/* TODO: Replace with barrel room or winemaking photo */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-burgundy-deep/80 via-burgundy/70 to-olive-dark/60"
          aria-hidden="true"
        />
        <ScrollReveal>
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <p className="font-serif text-2xl sm:text-3xl italic text-cream-light leading-relaxed">
              &ldquo;Good wine takes care of itself when you know your vines
              the way you know your family.&rdquo;
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl sm:text-4xl text-burgundy mb-2">
                The Estate
              </h2>
              <p className="text-charcoal/50 text-sm mt-4">
                A glimpse of life on the Santa Rosa Plateau
              </p>
              <div className="w-16 h-px bg-burgundy/30 mx-auto mt-4" />
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <PhotoGrid />
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-cream-light text-center">
        <ScrollReveal>
          <h2 className="font-serif text-2xl sm:text-3xl text-burgundy mb-4">
            Come See for Yourself
          </h2>
          <p className="text-charcoal/60 max-w-lg mx-auto mb-8">
            We welcome visitors by appointment. Experience the vineyard, taste
            the wines, and take in views you will not forget.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-burgundy text-cream-light text-sm tracking-widest uppercase hover:bg-burgundy-deep transition-colors duration-200"
          >
            Schedule a Visit
          </a>
        </ScrollReveal>
      </section>
    </>
  );
}
