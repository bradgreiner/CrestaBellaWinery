"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

const BottleScene = dynamic(() => import("./BottleScene"), {
  ssr: false,
  loading: () => (
    <div className="h-[450px] sm:h-[550px] flex items-center justify-center bg-primary rounded-sm">
      <div className="text-center">
        <div className="w-8 h-8 border border-gold/30 border-t-gold/80 rounded-full animate-spin mx-auto mb-4" />
        <p className="text-xs tracking-[0.2em] uppercase text-muted">
          Entering the cellar
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
      <div className="h-[450px] sm:h-[550px] flex items-center justify-center bg-primary rounded-sm">
        <div className="w-8 h-8 border border-gold/30 border-t-gold/80 rounded-full animate-spin" />
      </div>
    );
  }

  // Fallback for no WebGL - show existing bottle photo
  if (!supportsWebGL) {
    return (
      <div className="h-[400px] relative rounded-sm overflow-hidden">
        <Image
          src="/images/IMG_8081.jpeg"
          alt="Cresta Bella Vineyards wine cellar"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/70 flex items-center justify-center">
          <div className="text-center">
            <p className="font-serif text-2xl text-offwhite/80 italic mb-2">
              The Cellar
            </p>
            <p className="text-xs tracking-[0.2em] uppercase text-muted">
              Cresta Bella Vineyards
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <BottleScene />
      <div className="flex items-center justify-center gap-6 mt-5">
        <p className="text-[11px] tracking-[0.15em] uppercase text-muted">
          Move to explore
        </p>
        <span className="text-caption">|</span>
        <p className="text-[11px] tracking-[0.15em] uppercase text-muted">
          Click the bottle to pour
        </p>
      </div>
    </div>
  );
}
