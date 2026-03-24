"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

const BottleScene = dynamic(() => import("./BottleScene"), {
  ssr: false,
  loading: () => (
    <div className="h-[500px] sm:h-[580px] flex items-center justify-center bg-[#0A0808] rounded-sm">
      <div className="text-center">
        <div className="w-8 h-8 border border-gold/30 border-t-gold/80 rounded-full animate-spin mx-auto mb-4" />
        <p className="text-xs tracking-[0.2em] uppercase text-muted">
          Loading
        </p>
      </div>
    </div>
  ),
});

function checkWebGLSupport(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}

export default function BottleLoader() {
  const [supportsWebGL, setSupportsWebGL] = useState<boolean | null>(null);

  useEffect(() => {
    setSupportsWebGL(checkWebGLSupport());
  }, []);

  if (supportsWebGL === null) {
    return (
      <div className="h-[500px] sm:h-[580px] flex items-center justify-center bg-[#0A0808] rounded-sm">
        <div className="w-8 h-8 border border-gold/30 border-t-gold/80 rounded-full animate-spin" />
      </div>
    );
  }

  if (!supportsWebGL) {
    return (
      <div className="h-[400px] relative rounded-sm overflow-hidden">
        <Image
          src="/images/cabernet-sauvignon-2023.png"
          alt="Cresta Bella Vineyards Cabernet Sauvignon 2023"
          fill
          className="object-contain"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0808] via-transparent to-[#0A0808]/50" />
      </div>
    );
  }

  return (
    <div>
      <BottleScene />
      <p className="text-center text-[11px] tracking-[0.2em] uppercase text-muted mt-5">
        Move to explore
      </p>
    </div>
  );
}
