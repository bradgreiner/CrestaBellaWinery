"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import * as THREE from "three";
import WineBottle from "./WineBottle";
import WineGlass from "./WineGlass";
import CellarEnvironment from "./CellarEnvironment";

// Spotlight that follows mouse/touch with smooth easing
function InteractiveSpotlight({ mousePos }: { mousePos: React.MutableRefObject<{ x: number; y: number }> }) {
  const spotlightRef = useRef<THREE.SpotLight>(null);
  const targetRef = useRef<THREE.Object3D>(null);
  const currentPos = useRef(new THREE.Vector3(0, 4, 3));

  useFrame(() => {
    if (!spotlightRef.current || !targetRef.current) return;

    // Map mouse coords to scene position
    const targetX = mousePos.current.x * 5;
    const targetY = 1 + mousePos.current.y * 3;
    const targetZ = 1;

    // Smooth follow with ~100ms feel
    currentPos.current.x = THREE.MathUtils.lerp(currentPos.current.x, targetX, 0.06);
    currentPos.current.y = THREE.MathUtils.lerp(currentPos.current.y, targetY, 0.06);
    currentPos.current.z = THREE.MathUtils.lerp(currentPos.current.z, targetZ, 0.06);

    // Spotlight position (above and behind the target point)
    spotlightRef.current.position.set(
      currentPos.current.x * 0.5,
      5,
      4 + currentPos.current.z
    );

    // Target where the light points
    targetRef.current.position.set(
      currentPos.current.x,
      currentPos.current.y - 1,
      currentPos.current.z - 2
    );
  });

  return (
    <>
      <object3D ref={targetRef} position={[0, 1, 0]} />
      <spotLight
        ref={spotlightRef}
        target={targetRef.current || undefined}
        position={[0, 5, 5]}
        angle={0.5}
        penumbra={0.7}
        intensity={4}
        color="#ffe4b5"
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        distance={15}
        decay={1.5}
      />
    </>
  );
}

// Gentle idle drift when not interacting
function IdleDrift({ mousePos, isIdle }: { mousePos: React.MutableRefObject<{ x: number; y: number }>; isIdle: boolean }) {
  const time = useRef(0);

  useFrame((_, delta) => {
    if (!isIdle) return;
    time.current += delta * 0.5;
    mousePos.current.x = Math.sin(time.current) * 0.3;
    mousePos.current.y = Math.cos(time.current * 0.7) * 0.15 + 0.2;
  });

  return null;
}

// Pour animation controller
function PourAnimation({ pouring, onPourComplete }: { pouring: boolean; onPourComplete: () => void }) {
  const streamRef = useRef<THREE.Mesh>(null);
  const bottleGroupRef = useRef<THREE.Group>(null);
  const progress = useRef(0);
  const phase = useRef<"tilt" | "pour" | "return" | "done">("done");

  useEffect(() => {
    if (pouring) {
      progress.current = 0;
      phase.current = "tilt";
    }
  }, [pouring]);

  useFrame((_, delta) => {
    if (phase.current === "done") return;
    progress.current += delta;

    if (phase.current === "tilt" && progress.current < 0.8) {
      // Tilt bottle
      if (bottleGroupRef.current) {
        const t = progress.current / 0.8;
        bottleGroupRef.current.rotation.z = THREE.MathUtils.lerp(0, -0.5, t);
        bottleGroupRef.current.position.x = THREE.MathUtils.lerp(0, 0.3, t);
        bottleGroupRef.current.position.y = THREE.MathUtils.lerp(0, 0.3, t);
      }
    } else if (phase.current === "tilt") {
      phase.current = "pour";
      progress.current = 0;
    }

    if (phase.current === "pour" && progress.current < 2.0) {
      // Show wine stream
      if (streamRef.current) {
        const t = Math.min(progress.current / 0.3, 1);
        streamRef.current.visible = true;
        streamRef.current.scale.y = t;
      }
    } else if (phase.current === "pour") {
      phase.current = "return";
      progress.current = 0;
      if (streamRef.current) streamRef.current.visible = false;
    }

    if (phase.current === "return" && progress.current < 1.0) {
      // Return bottle upright
      if (bottleGroupRef.current) {
        const t = progress.current / 1.0;
        bottleGroupRef.current.rotation.z = THREE.MathUtils.lerp(-0.5, 0, t);
        bottleGroupRef.current.position.x = THREE.MathUtils.lerp(0.3, 0, t);
        bottleGroupRef.current.position.y = THREE.MathUtils.lerp(0.3, 0, t);
      }
    } else if (phase.current === "return") {
      phase.current = "done";
      onPourComplete();
    }
  });

  return (
    <>
      <group ref={bottleGroupRef}>
        <WineBottle />
      </group>

      {/* Wine pour stream */}
      <mesh ref={streamRef} position={[0.5, 0.5, 0]} visible={false}>
        <cylinderGeometry args={[0.015, 0.01, 1.5, 8]} />
        <meshPhysicalMaterial
          color="#5a0a15"
          metalness={0}
          roughness={0.3}
          transmission={0.4}
          thickness={1}
        />
      </mesh>
    </>
  );
}

// Main scene with mouse tracking
function Scene() {
  const mousePos = useRef({ x: 0, y: 0.2 });
  const [isIdle, setIsIdle] = useState(true);
  const [pouring, setPouring] = useState(false);
  const [glassesFilled, setGlassesFilled] = useState(false);
  const idleTimeout = useRef<ReturnType<typeof setTimeout>>();
  const { gl } = useThree();

  const handlePointerMove = useCallback((e: THREE.Event & { uv?: THREE.Vector2 }) => {
    const rect = gl.domElement.getBoundingClientRect();
    // Handle both pointer and touch events
    const nativeEvent = e as unknown as { clientX: number; clientY: number };
    if (nativeEvent.clientX !== undefined) {
      mousePos.current.x = ((nativeEvent.clientX - rect.left) / rect.width) * 2 - 1;
      mousePos.current.y = ((nativeEvent.clientY - rect.top) / rect.height) * -2 + 1;
    }
    setIsIdle(false);
    if (idleTimeout.current) clearTimeout(idleTimeout.current);
    idleTimeout.current = setTimeout(() => setIsIdle(true), 3000);
  }, [gl]);

  // Track mouse on the canvas element directly
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
  }, [gl, handlePointerMove]);

  const handlePour = useCallback(() => {
    if (!pouring && !glassesFilled) {
      setPouring(true);
    }
  }, [pouring, glassesFilled]);

  const handlePourComplete = useCallback(() => {
    setPouring(false);
    setGlassesFilled(true);
  }, []);

  return (
    <>
      {/* Very dim ambient - cellar feel */}
      <ambientLight intensity={0.08} color="#1a1510" />

      {/* Subtle fill light from above */}
      <pointLight
        position={[0, 6, 0]}
        intensity={0.15}
        color="#ffe8cc"
        decay={2}
      />

      {/* Interactive spotlight */}
      <InteractiveSpotlight mousePos={mousePos} />
      <IdleDrift mousePos={mousePos} isIdle={isIdle} />

      {/* Environment for glass reflections */}
      <Environment preset="warehouse" />

      {/* Cellar walls, floor, barrels */}
      <CellarEnvironment />

      {/* Wine bottle with pour animation */}
      <group position={[0, -0.2, 0]} onClick={handlePour}>
        <PourAnimation
          pouring={pouring}
          onPourComplete={handlePourComplete}
        />
      </group>

      {/* Two wine glasses */}
      <WineGlass position={[1.0, -1.82, 0.3]} filled={glassesFilled} />
      <WineGlass position={[1.5, -1.82, -0.2]} filled={glassesFilled} />
    </>
  );
}

export default function BottleScene() {
  return (
    <div className="h-[450px] sm:h-[550px] w-full cursor-crosshair rounded-sm overflow-hidden">
      <Canvas
        camera={{ position: [0, 1.5, 5.5], fov: 40 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: false, toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 0.8 }}
        style={{ background: "#0D0B0E" }}
        shadows
      >
        <fog attach="fog" args={["#0D0B0E", 6, 14]} />
        <Scene />
      </Canvas>
    </div>
  );
}
