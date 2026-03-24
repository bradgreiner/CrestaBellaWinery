"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

export default function VisitCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-28 sm:py-36 px-4 sm:px-6 lg:px-8 bg-primary text-center">
      <div ref={ref} className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[10px] tracking-[0.4em] uppercase text-gold/60 font-sans mb-6">
            By Appointment Only
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl text-offwhite font-light mb-8">
            Come See for Yourself
          </h2>
          <p className="text-muted leading-relaxed mb-12 max-w-lg mx-auto">
            We love having people out to the property. If you want to see the
            vines, taste what we have been working on, or just take in the view
            with a glass in hand, we would love to have you. Tastings are by
            appointment, so just reach out and we will find a time.
          </p>
          <Link
            href="/contact"
            className="inline-block px-12 py-4 border border-gold/30 text-gold text-xs tracking-[0.25em] uppercase hover:bg-gold/10 hover:border-gold/50 transition-all duration-500"
          >
            Schedule a Visit
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
