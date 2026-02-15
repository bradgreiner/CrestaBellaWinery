import type { Metadata } from "next";
import VideoHero from "@/components/VideoHero";
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
      <VideoHero
        variant="page"
        title="Get in Touch"
        subtitle="We would love to hear from you"
        videoMp4="/videos/IMG_8540.mp4"
        videoMov="/images/IMG_8540.MOV"
        playbackRate={0.25}
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

          {/* Direct Contact Info */}
          <ScrollReveal>
            <div className="mt-12 pt-8 border-t border-cream-dark/50 text-center">
              <p className="text-sm text-charcoal/50 mb-3">
                Or reach us directly:
              </p>
              <div className="space-y-2">
                <p className="text-sm font-medium text-charcoal/80">
                  Don Greiner, Proprietor
                </p>
                <p className="text-sm">
                  <a
                    href="tel:714-366-5366"
                    className="text-burgundy hover:text-burgundy-deep transition-colors"
                  >
                    (714) 366-5366
                  </a>
                </p>
                <p className="text-sm">
                  <a
                    href="mailto:dongreiner1957@gmail.com"
                    className="text-burgundy hover:text-burgundy-deep transition-colors"
                  >
                    dongreiner1957@gmail.com
                  </a>
                </p>
                <p className="text-sm text-charcoal/50">
                  La Cresta, California
                </p>
              </div>
            </div>
          </ScrollReveal>
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
                Our vineyard sits at the heart of one of Southern
                California&apos;s most beautiful natural landscapes, just
                minutes from Temecula Valley wine country.
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
