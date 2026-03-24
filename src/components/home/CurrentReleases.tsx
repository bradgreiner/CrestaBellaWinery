"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const wines = [
  {
    name: "Cabernet Franc",
    year: "2023",
    image: "/images/cabernet-franc-2023.png",
    alt: "Cresta Bella Vineyards 2023 Cabernet Franc, small batch wine from La Cresta California",
    note: "Bright and aromatic with notes of red pepper, violet, and dark cherry. Medium-bodied with a long, smooth finish.",
  },
  {
    name: "Cabernet Sauvignon",
    year: "2023",
    image: "/images/cabernet-sauvignon-2023.png",
    alt: "Cresta Bella Vineyards 2023 Cabernet Sauvignon, estate-grown small batch wine",
    note: "Rich and structured with blackcurrant, cedar, and a hint of dried herb. Full-bodied with firm tannins and depth.",
  },
];

export default function CurrentReleases() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-28 sm:py-36 px-4 sm:px-6 lg:px-8 bg-surface">
      <div ref={ref} className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-[10px] tracking-[0.4em] uppercase text-gold/70 font-sans mb-4">
            Estate Grown &middot; Small Batch
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl text-offwhite font-light">
            Current Releases
          </h2>
          <div className="w-16 h-px bg-gold/40 mx-auto mt-6" />
        </motion.div>

        {/* Wine Cards — photos side by side */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 sm:gap-20 max-w-4xl mx-auto">
          {wines.map((wine, i) => (
            <motion.div
              key={wine.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + i * 0.2 }}
              className="text-center"
            >
              <div className="relative mb-8">
                <Image
                  src={wine.image}
                  alt={wine.alt}
                  width={320}
                  height={480}
                  className="mx-auto h-auto drop-shadow-2xl"
                />
              </div>
              <h3 className="font-serif text-2xl text-offwhite font-light">
                {wine.name}
              </h3>
              <p className="text-xs tracking-[0.2em] uppercase text-gold/70 mt-2 font-sans">
                {wine.year} Vintage
              </p>
              <p className="text-sm text-body/80 mt-4 leading-relaxed italic font-serif">
                {wine.note}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center text-muted text-xs tracking-wide mt-16 max-w-md mx-auto"
        >
          Estate-grown reds, handcrafted in small lots on the Santa Rosa
          Plateau. Each bottle reflects the character of our unique terroir.
        </motion.p>
      </div>
    </section>
  );
}
