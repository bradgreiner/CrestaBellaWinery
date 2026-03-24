"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const BottleScene = dynamic(() => import("./BottleScene"), {
  ssr: false,
  loading: () => (
    <div className="h-[400px] sm:h-[500px] flex items-center justify-center">
      <div className="text-center">
        <div className="w-8 h-8 border border-gold/30 border-t-gold/80 rounded-full animate-spin mx-auto mb-4" />
        <p className="text-xs tracking-[0.2em] uppercase text-muted/40">
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

  // Still checking
  if (supportsWebGL === null) {
    return (
      <div className="h-[400px] sm:h-[500px] flex items-center justify-center">
        <div className="w-8 h-8 border border-gold/30 border-t-gold/80 rounded-full animate-spin" />
      </div>
    );
  }

  // Fallback for no WebGL
  if (!supportsWebGL) {
    return (
      <div className="h-[300px] flex items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-40 mx-auto mb-6 bg-gradient-to-b from-[#1a2a1a] to-[#0d1a0d] rounded-sm shadow-2xl" />
          <p className="text-xs tracking-[0.2em] uppercase text-muted/40">
            Cresta Bella Vineyards
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <BottleScene />
      <p className="text-center text-[10px] tracking-[0.2em] uppercase text-muted/30 mt-4">
        Click and drag to rotate
      </p>
    </div>
  );
}
