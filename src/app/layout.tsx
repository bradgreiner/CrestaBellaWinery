import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://crestabellawinery.com"),
  title: {
    default: "Cresta Bella Vineyards | Small Batch Winery in La Cresta, California",
    template: "%s | Cresta Bella Vineyards",
  },
  description:
    "Three generations of family winemaking on the Santa Rosa Plateau. Cresta Bella Vineyards is a small batch winery in La Cresta, CA near Temecula Valley. Estate-grown Cabernet Franc and Cabernet Sauvignon.",
  keywords: [
    "small batch winery La Cresta",
    "La Cresta vineyard",
    "winery near Temecula",
    "Santa Rosa Plateau winery",
    "small batch wines Southern California",
    "family winery Murrieta",
    "estate-grown grapes",
    "boutique winery California",
    "Greiner family winery",
    "La Cresta winery",
    "wine tasting La Cresta California",
    "Cabernet Franc La Cresta",
    "Cabernet Sauvignon Santa Rosa Plateau",
    "family vineyard near Temecula",
    "boutique winery Riverside County",
    "estate vineyard Murrieta",
  ],
  authors: [{ name: "Cresta Bella Vineyards" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://crestabellawinery.com",
    siteName: "Cresta Bella Vineyards",
    title: "Cresta Bella Vineyards | Small Batch Winery in La Cresta, California",
    description:
      "Three generations of family winemaking on the Santa Rosa Plateau. Small batch winery in La Cresta, CA near Temecula Valley.",
    images: [
      {
        url: "/images/IMG_8538.jpeg",
        width: 1200,
        height: 630,
        alt: "Cresta Bella Vineyards on the Santa Rosa Plateau at sunset",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cresta Bella Vineyards | Small Batch Winery",
    description:
      "Three generations of family winemaking on the Santa Rosa Plateau. Small batch winery in La Cresta, CA.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://crestabellawinery.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts - Cormorant Garamond (headings) and DM Sans (body) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=DM+Sans:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Winery",
              name: "Cresta Bella Vineyards",
              description:
                "Family-owned small batch winery on the Santa Rosa Plateau in La Cresta, California.",
              url: "https://crestabellawinery.com",
              telephone: "714-366-5366",
              email: "dongreiner1957@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "La Cresta",
                addressRegion: "CA",
                addressCountry: "US",
              },
              areaServed: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: 33.53,
                  longitude: -117.38,
                },
                geoRadius: "50000",
              },
              priceRange: "$$",
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                description: "Tastings by appointment only",
              },
              sameAs: [],
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased bg-cream-light text-charcoal">
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
