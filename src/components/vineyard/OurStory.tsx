"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

export default function OurStory() {
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
            Our Story
          </h2>
          <div className="w-16 h-px bg-gold/40 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-body leading-[1.7]"
          >
            <p>
              Cresta Bella Vineyards began the way most good things do — with
              a love for the land and a willingness to get your hands dirty.
              Don Greiner and his wife Diane saw something special in the
              rolling hills of La Cresta, and what started as a family dream
              on the Santa Rosa Plateau has grown into a small but purposeful
              estate.
            </p>
            <p>
              The vineyard sits in La Cresta, a quiet stretch of
              California&apos;s Riverside County, roughly 1,000 feet above
              the Temecula Valley floor. Up here, the air is different. The
              mornings are cool, the afternoons warm, and by evening, ocean
              breezes from the coast — just 15 to 20 miles away — sweep
              across the plateau, slowing the ripening and building
              complexity into every grape.
            </p>
            <p>
              This is not a large operation. It is a family making wine
              because this is the kind of place that deserves it. Every vine
              is tended by hand. Every decision is made with the next vintage
              in mind. And every bottle carries the character of this singular
              piece of land.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="overflow-hidden">
              <Image
                src="/images/don-and-diane.jpeg"
                alt="Don and Diane Greiner, proprietors of Cresta Bella Vineyards"
                width={600}
                height={500}
                className="w-full h-auto hover:scale-105 transition-transform duration-700"
              />
            </div>
            <p className="text-xs text-muted mt-4 text-center italic font-serif">
              Don &amp; Diane Greiner, Proprietors
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
