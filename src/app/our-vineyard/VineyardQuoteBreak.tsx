"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

export default function VineyardQuoteBreak() {
  const ref = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(textRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section ref={ref} className="relative py-32 sm:py-40 px-4 sm:px-6 overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src="/images/IMG_8081.jpeg"
          alt="Estate-grown grapes ripening on the vine at Cresta Bella Vineyards"
          fill
          className="object-cover scale-110"
        />
        <div className="absolute inset-0 bg-primary/70" />
      </motion.div>

      <div ref={textRef} className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="font-serif text-2xl sm:text-3xl md:text-4xl italic text-offwhite leading-relaxed tracking-wide"
        >
          &ldquo;Good wine takes care of itself when you know your vines
          the way you know your family.&rdquo;
        </motion.p>
      </div>
    </section>
  );
}
