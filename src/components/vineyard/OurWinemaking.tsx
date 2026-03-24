"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

export default function OurWinemaking() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div ref={ref} className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl sm:text-5xl text-offwhite font-light mb-4">
            Our Winemaking
          </h2>
          <div className="w-16 h-px bg-gold/40 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-2 md:order-1"
          >
            <div className="overflow-hidden">
              <Image
                src="/images/barrel-room.jpg"
                alt="Don and Diane Greiner tasting wine in the barrel room"
                width={600}
                height={500}
                className="w-full h-auto hover:scale-105 transition-transform duration-700"
              />
            </div>
            <p className="text-xs text-muted mt-4 text-center italic font-serif">
              Tasting from the barrel
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6 text-body leading-[1.7] order-1 md:order-2"
          >
            <p>
              Small batch is not a marketing phrase for us — it is how we
              work. Every step of the process, from pruning to pressing to
              bottling, is done with intention and by hand. We do not chase
              volume. We chase flavor, balance, and a sense of place.
            </p>
            <p>
              Our current releases — a 2023 Cabernet Franc and a 2023
              Cabernet Sauvignon — are estate-grown reds that reflect the
              unique conditions of our plateau. We ferment in small lots, age
              with patience, and bottle when the wine is ready — not when the
              calendar says so.
            </p>
            <p>
              We believe that good winemaking starts in the vineyard. When
              you know your vines the way you know your family, the wine
              takes care of itself.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
