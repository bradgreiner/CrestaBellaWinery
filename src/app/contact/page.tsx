import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import GrapeInquiryForm from "@/components/GrapeInquiryForm";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Contact Cresta Bella Vineyards | Grape Inquiries & Winery Contact",
  description:
    "Contact Cresta Bella Vineyards in La Cresta, California. Reach out for winery inquiries or to purchase estate-grown grapes. Small batch winery on the Santa Rosa Plateau near Temecula Valley.",
  openGraph: {
    title: "Contact Cresta Bella Vineyards | Grape Inquiries & Winery Contact",
    description:
      "Get in touch with Cresta Bella Vineyards for winery visits, wine inquiries, or to purchase estate-grown grapes in La Cresta, California.",
    url: "https://crestabellawinery.com/contact",
  },
  alternates: {
    canonical: "https://crestabellawinery.com/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Banner */}
      <Hero
        variant="page"
        title="Get in Touch"
        subtitle="We would love to hear from you"
        imagePlaceholder="Wine bottles on barrel with vineyard in background"
      />

      {/* Two Column Forms */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-cream-light">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column: General Contact */}
            <ScrollReveal>
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl text-burgundy mb-3">
                  Contact Us
                </h2>
                <p className="text-charcoal/60 leading-relaxed mb-8">
                  Whether you have questions about our wines, want to learn more
                  about the vineyard, or just want to say hello — we are happy
                  to hear from you.
                </p>

                <div className="bg-cream p-6 sm:p-8 rounded-sm">
                  <ContactForm />
                </div>

                {/* Direct Contact Info */}
                <div className="mt-8 pt-6 border-t border-cream-dark/50">
                  <p className="text-sm text-charcoal/50 mb-2">
                    Or reach us directly:
                  </p>
                  {/* TODO: Replace with actual email */}
                  <a
                    href="mailto:info@crestabellawinery.com"
                    className="text-burgundy hover:text-burgundy-deep transition-colors"
                  >
                    info@crestabellawinery.com
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Right Column: Grape Purchase Inquiries */}
            <ScrollReveal>
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl text-burgundy mb-3">
                  Grape Purchase Inquiries
                </h2>
                <p className="text-charcoal/60 leading-relaxed mb-8">
                  Each year, we offer a limited quantity of estate-grown grapes
                  to home winemakers and fellow producers. Availability varies
                  by season and harvest conditions. Submit your interest below
                  and we will be in touch.
                </p>

                <div className="bg-cream p-6 sm:p-8 rounded-sm">
                  <GrapeInquiryForm />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-serif text-2xl sm:text-3xl text-burgundy mb-6">
              Find Us
            </h2>

            <div className="space-y-4 text-charcoal/70">
              <p className="text-lg">
                <span className="font-serif text-charcoal/80">
                  La Cresta, California
                </span>
                <br />
                <span className="text-sm text-charcoal/50">
                  Santa Rosa Plateau &middot; Riverside County
                </span>
              </p>

              <p className="text-sm text-charcoal/50 max-w-md mx-auto">
                Located near Murrieta and Temecula, on the Santa Rosa Plateau.
                Our vineyard sits at the heart of one of Southern California&apos;s
                most beautiful natural landscapes, just minutes from Temecula
                Valley wine country.
              </p>

              <div className="pt-4">
                <p className="inline-block px-6 py-3 bg-cream-dark/50 rounded-sm text-sm text-charcoal/60">
                  <span className="font-medium text-burgundy">
                    Tastings by appointment only
                  </span>
                  <br />
                  <span className="text-xs">
                    Contact us to schedule your visit
                  </span>
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
