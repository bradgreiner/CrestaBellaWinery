"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

export default function GrapesForPurchase() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-surface">
      <div ref={ref} className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[10px] tracking-[0.4em] uppercase text-gold/70 font-sans mb-4">
            For Home Winemakers
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl text-offwhite font-light mb-8">
            Grapes for Purchase
          </h2>
          <div className="w-16 h-px bg-gold/40 mx-auto mb-10" />
          <p className="text-body leading-[1.7] mb-4">
            Each year, we offer a limited quantity of estate-grown grapes
            to home winemakers and fellow producers. Our Cabernet Franc and
            Cabernet Sauvignon grapes benefit from the same high-elevation,
            ocean-influenced terroir that defines our wines.
          </p>
          <p className="text-muted text-sm italic font-serif mb-10">
            Availability varies by season and harvest.
          </p>
          <Link
            href="/contact"
            className="inline-block px-12 py-4 border border-gold/40 text-gold text-xs tracking-[0.25em] uppercase hover:bg-gold/10 hover:border-gold/60 transition-all duration-500"
          >
            Inquire
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
