import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import OurStory from "@/components/vineyard/OurStory";
import TheLand from "@/components/vineyard/TheLand";
import ThreeGenerations from "@/components/vineyard/ThreeGenerations";
import OurWinemaking from "@/components/vineyard/OurWinemaking";
import GrapesForPurchase from "@/components/vineyard/GrapesForPurchase";
import VineyardHero from "./VineyardHero";
import VineyardQuoteBreak from "./VineyardQuoteBreak";
import VineyardCTA from "./VineyardCTA";

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Cresta Bella Vineyards",
  description:
    "Meet the Greiner family behind Cresta Bella Vineyards. Three generations of hands-on winemaking on the Santa Rosa Plateau in La Cresta, California.",
  url: "https://www.crestabellawinery.com/our-vineyard",
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
        name: "Our Vineyard",
        item: "https://www.crestabellawinery.com/our-vineyard",
      },
    ],
  },
};

export const metadata: Metadata = {
  title: "Our Vineyard | Family Winery on the Santa Rosa Plateau",
  description:
    "Meet the Greiner family behind Cresta Bella Vineyards. Three generations of hands-on winemaking on the Santa Rosa Plateau in La Cresta, California. Small batch wines crafted with care.",
  openGraph: {
    title: "Our Vineyard | Cresta Bella Vineyards",
    description:
      "Meet the Greiner family behind Cresta Bella Vineyards. Three generations of hands-on winemaking on the Santa Rosa Plateau in La Cresta, California.",
    url: "https://crestabellawinery.com/our-vineyard",
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
    canonical: "https://crestabellawinery.com/our-vineyard",
  },
};

export default function OurVineyardPage() {
  return (
    <>
      <JsonLd data={aboutPageSchema} />
      <VineyardHero />
      <OurStory />
      <ThreeGenerations />
      <TheLand />
      <OurWinemaking />
      <VineyardQuoteBreak />
      <GrapesForPurchase />
      <VineyardCTA />
    </>
  );
}
