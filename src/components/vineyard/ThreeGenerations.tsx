"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function ThreeGenerations() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div ref={ref} className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="w-16 h-px bg-gold/40 mx-auto mb-10 origin-center"
        />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-4xl sm:text-5xl text-offwhite font-light mb-10"
        >
          Three Generations
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-body leading-[1.7] text-lg font-serif"
        >
          Cresta Bella Vineyards is more than a winery. It is a family
          project that has spanned three generations. From planting the
          first vines to bottling the latest vintage, every member of the
          Greiner family has played a role in building this place.
          Grandparents, parents, and grandchildren have all had their hands
          in the soil, helped during harvest, and shared in the bottles
          that come from it. This is not a business venture. It is a
          passion project, built together over time and meant to be enjoyed
          the same way.
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-16 h-px bg-gold/40 mx-auto mt-10 origin-center"
        />
      </div>
    </section>
  );
}
