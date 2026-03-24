import JsonLd from "@/components/JsonLd";
import Hero from "@/components/home/Hero";
import VineyardIntro from "@/components/home/VineyardIntro";
import CurrentReleases from "@/components/home/CurrentReleases";
import QuoteBreak from "@/components/home/QuoteBreak";
import VisitCTA from "@/components/home/VisitCTA";

const winerySchema = {
  "@context": "https://schema.org",
  "@type": "Winery",
  "@id": "https://www.crestabellawinery.com/#winery",
  name: "Cresta Bella Vineyards",
  alternateName: "Cresta Bella Winery",
  description:
    "Three generations of family winemaking on the Santa Rosa Plateau. Cresta Bella Vineyards is a small batch winery in La Cresta, California producing estate-grown Cabernet Franc and Cabernet Sauvignon near Temecula Valley wine country.",
  url: "https://www.crestabellawinery.com",
  telephone: "+17143665366",
  email: "dongreiner1957@gmail.com",
  image: [
    "https://www.crestabellawinery.com/images/IMG_8538.jpeg",
    "https://www.crestabellawinery.com/images/cresta_bella_transparent_refined.png",
    "https://www.crestabellawinery.com/images/cabernet-franc-2023.png",
    "https://www.crestabellawinery.com/images/cabernet-sauvignon-2023.png",
  ],
  logo: "https://www.crestabellawinery.com/images/cresta_bella_transparent_refined.png",
  address: {
    "@type": "PostalAddress",
    addressLocality: "La Cresta",
    addressRegion: "CA",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 33.5275,
    longitude: -117.2978,
  },
  areaServed: [
    { "@type": "City", name: "La Cresta" },
    { "@type": "City", name: "Murrieta" },
    { "@type": "City", name: "Temecula" },
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday", "Tuesday", "Wednesday", "Thursday",
      "Friday", "Saturday", "Sunday",
    ],
    description: "By appointment only",
  },
  priceRange: "$$",
  currenciesAccepted: "USD",
  paymentAccepted: "Cash, Credit Card",
  founder: {
    "@type": "Person",
    name: "Don Greiner",
    jobTitle: "Proprietor",
  },
  foundingLocation: {
    "@type": "Place",
    name: "La Cresta, California",
  },
  knowsAbout: [
    "Small batch winemaking",
    "Cabernet Franc",
    "Cabernet Sauvignon",
    "Estate-grown grapes",
    "Santa Rosa Plateau viticulture",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Wines and Grapes",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Cabernet Franc 2023",
          description:
            "Estate-grown small batch Cabernet Franc from the Santa Rosa Plateau in La Cresta, California",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Cabernet Sauvignon 2023",
          description:
            "Estate-grown small batch Cabernet Sauvignon from the Santa Rosa Plateau in La Cresta, California",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Estate-Grown Grapes for Purchase",
          description:
            "Limited annual availability of estate-grown wine grapes for home winemakers and producers",
        },
      },
    ],
  },
  slogan: "Small Batch Wines from the Santa Rosa Plateau",
  keywords:
    "small batch winery, La Cresta winery, family vineyard near Temecula, estate-grown grapes, Cabernet Franc, Cabernet Sauvignon, Santa Rosa Plateau, Southern California winery, boutique winery Riverside County",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Cresta Bella Vineyards",
  url: "https://www.crestabellawinery.com",
  description:
    "Official website of Cresta Bella Vineyards, a small batch family winery in La Cresta, California on the Santa Rosa Plateau.",
  publisher: {
    "@type": "Organization",
    "@id": "https://www.crestabellawinery.com/#winery",
  },
};

export default function Home() {
  return (
    <>
      <JsonLd data={winerySchema} />
      <JsonLd data={websiteSchema} />
      <Hero />
      <VineyardIntro />
      <CurrentReleases />
      <QuoteBreak />
      <VisitCTA />
    </>
  );
}
