"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "2,000+", unit: "Feet Elevation" },
  { value: "~10°", unit: "Cooler Than Valley Floor" },
  { value: "15-20", unit: "Miles From the Coast" },
];

export default function VineyardIntro() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-28 sm:py-36 px-4 sm:px-6 lg:px-8 bg-primary">
      <div ref={ref} className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="w-16 h-px bg-gold/30 mx-auto mb-10 origin-center"
        />

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-xl sm:text-2xl md:text-3xl text-offwhite/80 leading-relaxed"
        >
          Three generations of the Greiner family have poured their time,
          their hands, and more than a few long weekends into this place.
          Cresta Bella Vineyards sits on the Santa Rosa Plateau in La
          Cresta, California, where the views stretch for miles and the
          grapes grow at their own pace. This is small batch winemaking
          the way it should be: personal, patient, and shared with people
          we like.
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-16 h-px bg-gold/30 mx-auto mt-10 origin-center"
        />

        {/* Stats Row */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.unit}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + i * 0.15 }}
              className="text-center"
            >
              <p className="font-serif text-4xl sm:text-5xl text-gold font-light">
                {stat.value}
              </p>
              <p className="text-[10px] tracking-[0.25em] uppercase text-muted mt-3 font-sans">
                {stat.unit}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
