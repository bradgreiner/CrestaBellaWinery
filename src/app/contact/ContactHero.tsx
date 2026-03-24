"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ContactHero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={ref} className="relative h-[60vh] min-h-[400px] overflow-hidden">
      <motion.div style={{ y }} className="absolute -inset-y-24 inset-x-0">
        <Image
          src="/images/IMG_8538.jpeg"
          alt="Cresta Bella Vineyards vineyard"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-primary/30 to-primary" />
      </motion.div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-serif text-5xl sm:text-6xl md:text-7xl text-offwhite font-light"
        >
          Get in Touch
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="w-16 h-px bg-gold/30 mx-auto my-6" />
          <p className="text-sm tracking-[0.15em] text-offwhite/50 font-sans">
            We would love to hear from you
          </p>
        </motion.div>
      </div>
    </section>
  );
}
