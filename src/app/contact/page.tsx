import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import ContactForm from "@/components/contact/ContactForm";
import GrapeInquiryForm from "@/components/contact/GrapeInquiryForm";
import DirectContact from "@/components/contact/DirectContact";
import ContactHero from "./ContactHero";
import FindUs from "./FindUs";

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Cresta Bella Vineyards",
  description:
    "Contact Cresta Bella Vineyards in La Cresta, California. Reach out about tastings, wines, or purchasing estate-grown grapes.",
  url: "https://www.crestabellawinery.com/contact",
  mainEntity: {
    "@type": "Winery",
    "@id": "https://www.crestabellawinery.com/#winery",
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.crestabellawinery.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Contact",
        item: "https://www.crestabellawinery.com/contact",
      },
    ],
  },
};

export const metadata: Metadata = {
  title: "Contact | Grape Inquiries & Winery Visit",
  description:
    "Contact Cresta Bella Vineyards in La Cresta, California. Reach out about tastings, wines, or purchasing estate-grown grapes. Small batch winery near Temecula Valley.",
  openGraph: {
    title: "Contact Cresta Bella Vineyards",
    description:
      "Contact Cresta Bella Vineyards in La Cresta, California. Reach out about tastings, wines, or purchasing estate-grown grapes.",
    url: "https://crestabellawinery.com/contact",
    images: [
      {
        url: "/images/IMG_8538.jpeg",
        width: 1200,
        height: 630,
        alt: "Cresta Bella Vineyards on the Santa Rosa Plateau at sunset",
      },
    ],
  },
  alternates: {
    canonical: "https://crestabellawinery.com/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactPageSchema} />
      <ContactHero />

      {/* Two Column Forms */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
            {/* General Contact */}
            <div>
              <h2 className="font-serif text-3xl text-offwhite font-light mb-3">
                Contact Us
              </h2>
              <p className="text-body leading-[1.7] mb-8">
                Whether you have questions about our wines, want to plan a
                visit to the vineyard, or simply want to say hello — we would
                love to hear from you and will respond as soon as we can.
              </p>
              <ContactForm />
            </div>

            {/* Grape Purchase Inquiries */}
            <div>
              <h2 className="font-serif text-3xl text-offwhite font-light mb-3">
                Grape Purchase Inquiries
              </h2>
              <p className="text-body leading-[1.7] mb-8">
                Each year, we offer a limited quantity of estate-grown grapes
                to home winemakers and fellow producers. Submit your interest
                below and we will be in touch.
              </p>
              <GrapeInquiryForm />
            </div>
          </div>

          <DirectContact />
        </div>
      </section>

      <FindUs />
    </>
  );
}
