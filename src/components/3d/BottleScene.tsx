"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, MeshReflectorMaterial } from "@react-three/drei";
import * as THREE from "three";
import WineBottle from "./WineBottle";

// Interactive spotlight — follows mouse with smooth cinematic easing
function KeyLight({ mousePos }: { mousePos: React.MutableRefObject<{ x: number; y: number }> }) {
  const lightRef = useRef<THREE.SpotLight>(null);
  const targetRef = useRef<THREE.Object3D>(null);
  const smoothX = useRef(0);
  const smoothY = useRef(0.3);

  useFrame(() => {
    if (!lightRef.current || !targetRef.current) return;

    // Smooth follow — lerp at 0.06 gives that ~100ms trailing feel
    smoothX.current = THREE.MathUtils.lerp(smoothX.current, mousePos.current.x, 0.06);
    smoothY.current = THREE.MathUtils.lerp(smoothY.current, mousePos.current.y, 0.06);

    // Map normalized mouse to scene coordinates
    const lightX = smoothX.current * 3;
    const lightY = 4 + smoothY.current * 1.5;

    lightRef.current.position.set(lightX, lightY, 4);
    targetRef.current.position.set(lightX * 0.3, 0.5, 0);

    lightRef.current.target = targetRef.current;
  });

  return (
    <>
      <object3D ref={targetRef} />
      <spotLight
        ref={lightRef}
        position={[0, 5, 4]}
        angle={0.45}
        penumbra={0.6}
        intensity={5}
        color="#FFE4C4"
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-bias={-0.001}
        distance={12}
        decay={1.5}
      />
    </>
  );
}

// Gentle idle drift when user isn't interacting
function IdleDrift({
  mousePos,
  isIdle,
}: {
  mousePos: React.MutableRefObject<{ x: number; y: number }>;
  isIdle: boolean;
}) {
  const time = useRef(0);

  useFrame((_, delta) => {
    if (!isIdle) return;
    time.current += delta * 0.4;
    mousePos.current.x = Math.sin(time.current) * 0.35;
    mousePos.current.y = Math.cos(time.current * 0.6) * 0.1 + 0.3;
  });

  return null;
}

// Reflective surface the bottle sits on
function ReflectiveSurface() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.83, 0]} receiveShadow>
      <planeGeometry args={[12, 12]} />
      <MeshReflectorMaterial
        blur={[300, 100]}
        resolution={512}
        mixBlur={1}
        mixStrength={0.4}
        roughness={0.85}
        depthScale={0.5}
        minDepthThreshold={0.6}
        maxDepthThreshold={1}
        color="#0a0808"
        metalness={0.15}
        mirror={0.3}
      />
    </mesh>
  );
}

// The assembled scene
function Scene() {
  const mousePos = useRef({ x: 0, y: 0.3 });
  const [isIdle, setIsIdle] = useState(true);
  const idleTimeout = useRef<ReturnType<typeof setTimeout>>();
  const { gl } = useThree();

  // Track pointer on the canvas
  useEffect(() => {
    const canvas = gl.domElement;
    const handler = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mousePos.current.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mousePos.current.y = ((e.clientY - rect.top) / rect.height) * -2 + 1;
      setIsIdle(false);
      if (idleTimeout.current) clearTimeout(idleTimeout.current);
      idleTimeout.current = setTimeout(() => setIsIdle(true), 3000);
    };
    canvas.addEventListener("pointermove", handler);
    canvas.addEventListener("pointerdown", handler);
    return () => {
      canvas.removeEventListener("pointermove", handler);
      canvas.removeEventListener("pointerdown", handler);
      if (idleTimeout.current) clearTimeout(idleTimeout.current);
    };
  }, [gl]);

  // Return spotlight to center when mouse leaves
  const handlePointerLeave = useCallback(() => {
    setIsIdle(true);
  }, []);

  useEffect(() => {
    const canvas = gl.domElement;
    canvas.addEventListener("pointerleave", handlePointerLeave);
    return () => canvas.removeEventListener("pointerleave", handlePointerLeave);
  }, [gl, handlePointerLeave]);

  return (
    <>
      {/* === AMBIENT — barely perceptible, prevents pure black === */}
      <ambientLight intensity={0.25} color="#111111" />

      {/* === FILL LIGHT — cool, opposite key, keeps dark side visible === */}
      <directionalLight
        position={[-3, 3, -2]}
        intensity={0.15}
        color="#E8E8FF"
      />

      {/* === RIM / BACK LIGHT — silhouette edge separation === */}
      <pointLight
        position={[0, 3, -3]}
        intensity={0.6}
        color="#FFE0B0"
        decay={2}
      />

      {/* === KEY LIGHT — the interactive spotlight === */}
      <KeyLight mousePos={mousePos} />
      <IdleDrift mousePos={mousePos} isIdle={isIdle} />

      {/* === ENVIRONMENT — subtle studio HDRI for glass reflections === */}
      <Environment preset="studio" environmentIntensity={0.3} />

      {/* === REFLECTIVE SURFACE === */}
      <ReflectiveSurface />

      {/* === THE BOTTLE === */}
      <WineBottle />
    </>
  );
}

export default function BottleScene() {
  return (
    <div className="h-[500px] sm:h-[580px] w-full cursor-default rounded-sm overflow-hidden">
      <Canvas
        camera={{ position: [0, 0.8, 4.5], fov: 35 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: false,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 0.9,
        }}
        style={{ background: "#0A0808" }}
        shadows
      >
        <Scene />
      </Canvas>
    </div>
  );
}
