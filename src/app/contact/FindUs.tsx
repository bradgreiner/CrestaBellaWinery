"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function FindUs() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div ref={ref} className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-4xl sm:text-5xl text-offwhite font-light mb-8">
            Find Us
          </h2>
          <div className="w-16 h-px bg-gold/40 mx-auto mb-10" />

          <div className="space-y-4">
            <p className="text-lg">
              <span className="font-serif text-offwhite">
                La Cresta, California
              </span>
              <br />
              <span className="text-xs tracking-[0.2em] uppercase text-muted">
                Santa Rosa Plateau &middot; Riverside County
              </span>
            </p>

            <p className="text-body max-w-md mx-auto leading-[1.7]">
              Located near Murrieta and Temecula, on the Santa Rosa Plateau.
              Our vineyard sits at the heart of one of Southern
              California&apos;s most beautiful natural landscapes, just
              minutes from Temecula Valley wine country.
            </p>

            <div className="pt-6">
              <div className="inline-block px-8 py-4 border border-gold/15">
                <p className="text-sm text-gold font-medium">
                  Tastings by appointment only
                </p>
                <p className="text-xs text-muted mt-1">
                  Contact us to schedule your visit
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
