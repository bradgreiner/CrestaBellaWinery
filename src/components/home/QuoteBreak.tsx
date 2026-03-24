"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

export default function QuoteBreak() {
  const ref = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(textRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section ref={ref} className="relative py-36 sm:py-44 px-4 sm:px-6 overflow-hidden">
      {/* Parallax background */}
      <motion.div style={{ y }} className="absolute -inset-y-20 inset-x-0">
        <Image
          src="/images/IMG_8081.jpeg"
          alt="Estate-grown grapes ripening on the vine at Cresta Bella Vineyards, La Cresta California"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/65" />
      </motion.div>

      <div ref={textRef} className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <p className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl italic text-offwhite leading-relaxed tracking-wide">
            &ldquo;Where the vines meet the sky.&rdquo;
          </p>
        </motion.blockquote>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-12 h-px bg-gold/40 mx-auto mt-10 origin-center"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6 text-xs tracking-[0.3em] uppercase font-sans text-offwhite/60"
        >
          La Cresta, California &middot; Santa Rosa Plateau
        </motion.p>
      </div>
    </section>
  );
}
