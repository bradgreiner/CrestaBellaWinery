"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function DirectContact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="mt-16 pt-12 border-t border-gold/10 text-center"
    >
      <p className="text-xs tracking-[0.2em] uppercase text-muted mb-6 font-sans">
        Or reach us directly
      </p>
      <div className="space-y-3">
        <p className="text-sm text-offwhite font-medium">
          Don Greiner, Proprietor
        </p>
        <p className="text-sm">
          <a
            href="tel:714-366-5366"
            className="text-gold/80 hover:text-gold transition-colors duration-300"
          >
            (714) 366-5366
          </a>
        </p>
        <p className="text-sm">
          <a
            href="mailto:dongreiner1957@gmail.com"
            className="text-gold/80 hover:text-gold transition-colors duration-300"
          >
            dongreiner1957@gmail.com
          </a>
        </p>
        <p className="text-sm text-muted">La Cresta, California</p>
      </div>
    </motion.div>
  );
}
