"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { stat: "2,000+", unit: "feet", label: "Elevation" },
  { stat: "~10°", unit: "cooler", label: "Than Valley Floor" },
  { stat: "15-20", unit: "miles", label: "From the Coast" },
  { stat: "Small", unit: "batch", label: "Always" },
];

export default function TheLand() {
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
            The Land
          </h2>
          <div className="w-16 h-px bg-gold/30 mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto space-y-6 text-muted leading-relaxed"
        >
          <p>
            La Cresta sits on the Santa Rosa Plateau, one of Southern
            California&apos;s most pristine natural landscapes. At elevations
            ranging from 1,800 to 2,700 feet above sea level, our vineyard
            enjoys conditions that set it apart from the valley wineries
            below.
          </p>
          <p>
            The difference is measurable: temperatures on the plateau run
            roughly 10 degrees cooler than the Temecula Valley floor. Cool
            ocean breezes from the Pacific — just a short distance to the
            west — moderate the afternoons and extend the growing season.
            The result is grapes with depth, structure, and complexity.
          </p>
          <p>
            The landscape itself is part of the story. Ancient coast live
            oaks, rolling grasslands, and long views to the surrounding
            mountains create an environment that feels more like a national
            preserve than a suburb. It is one of the last unspoiled plateaus
            in this part of the state — and our vines grow right in the
            heart of it.
          </p>
        </motion.div>

        {/* Terroir Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
              className="p-6"
            >
              <p className="font-serif text-3xl sm:text-4xl text-gold font-light">
                {item.stat}
              </p>
              <p className="text-[10px] tracking-[0.25em] uppercase text-gold/50 mt-2 font-sans">
                {item.unit}
              </p>
              <p className="text-xs text-muted/50 mt-2">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
