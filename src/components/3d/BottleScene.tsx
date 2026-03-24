"use client";

import { useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import WineBottle from "./WineBottle";

export default function BottleScene() {
  const [isInteracting, setIsInteracting] = useState(false);
  const controlsRef = useRef(null);

  return (
    <div className="h-[400px] sm:h-[500px] w-full cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{ position: [0, 1, 6], fov: 35 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.3} />
        <directionalLight
          position={[5, 8, 5]}
          intensity={1.2}
          castShadow
          color="#fff5e0"
        />
        <directionalLight
          position={[-5, 5, -5]}
          intensity={0.4}
          color="#c5a572"
        />
        <pointLight position={[0, 5, 3]} intensity={0.5} color="#ffffff" />
        <spotLight
          position={[0, 8, 0]}
          angle={0.4}
          penumbra={0.5}
          intensity={0.8}
          color="#fff5e0"
        />

        {/* Environment for reflections */}
        <Environment preset="studio" />

        {/* Wine Bottle */}
        <WineBottle isInteracting={isInteracting} />

        {/* Reflective surface beneath */}
        <ContactShadows
          position={[0, -1.9, 0]}
          opacity={0.4}
          scale={8}
          blur={2.5}
          far={4}
          color="#0A0A0A"
        />

        {/* Controls */}
        <OrbitControls
          ref={controlsRef}
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 1.8}
          onStart={() => setIsInteracting(true)}
          onEnd={() => setIsInteracting(false)}
        />
      </Canvas>
    </div>
  );
}
