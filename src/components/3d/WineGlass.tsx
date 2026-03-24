"use client";

import { useMemo } from "react";
import * as THREE from "three";

function createGlassGeometry() {
  const points: THREE.Vector2[] = [];

  // Base
  points.push(new THREE.Vector2(0, 0));
  points.push(new THREE.Vector2(0.35, 0));
  points.push(new THREE.Vector2(0.35, 0.02));
  points.push(new THREE.Vector2(0.32, 0.04));

  // Stem base
  points.push(new THREE.Vector2(0.06, 0.08));
  points.push(new THREE.Vector2(0.04, 0.12));

  // Stem
  points.push(new THREE.Vector2(0.035, 0.5));
  points.push(new THREE.Vector2(0.035, 1.0));

  // Bowl bottom
  points.push(new THREE.Vector2(0.04, 1.05));
  points.push(new THREE.Vector2(0.08, 1.15));
  points.push(new THREE.Vector2(0.18, 1.3));
  points.push(new THREE.Vector2(0.28, 1.5));

  // Bowl widest point
  points.push(new THREE.Vector2(0.33, 1.7));
  points.push(new THREE.Vector2(0.34, 1.9));

  // Bowl taper toward rim
  points.push(new THREE.Vector2(0.33, 2.1));
  points.push(new THREE.Vector2(0.30, 2.25));

  // Rim
  points.push(new THREE.Vector2(0.28, 2.35));
  points.push(new THREE.Vector2(0.275, 2.37));

  return new THREE.LatheGeometry(points, 32);
}

function createWineGeometry(fillLevel: number) {
  // Wine fills the bowl portion
  const points: THREE.Vector2[] = [];

  points.push(new THREE.Vector2(0, 1.15));
  points.push(new THREE.Vector2(0.06, 1.15));
  points.push(new THREE.Vector2(0.15, 1.28));
  points.push(new THREE.Vector2(0.25, 1.45));

  if (fillLevel > 0) {
    // ~1/3 fill
    points.push(new THREE.Vector2(0.32, 1.65));
    points.push(new THREE.Vector2(0.33, 1.75));
    // Wine surface
    points.push(new THREE.Vector2(0.33, 1.75));
    points.push(new THREE.Vector2(0, 1.75));
  }

  return new THREE.LatheGeometry(points, 32);
}

interface WineGlassProps {
  position: [number, number, number];
  filled?: boolean;
}

export default function WineGlass({ position, filled = false }: WineGlassProps) {
  const glassGeo = useMemo(() => createGlassGeometry(), []);
  const wineGeo = useMemo(() => createWineGeometry(filled ? 1 : 0), [filled]);

  return (
    <group position={position}>
      {/* Glass body */}
      <mesh geometry={glassGeo}>
        <meshPhysicalMaterial
          color="#ffffff"
          metalness={0}
          roughness={0.02}
          transmission={0.92}
          thickness={0.3}
          clearcoat={1}
          clearcoatRoughness={0}
          envMapIntensity={2.5}
          ior={1.5}
          transparent
          opacity={0.35}
        />
      </mesh>

      {/* Wine in glass */}
      {filled && (
        <mesh geometry={wineGeo}>
          <meshPhysicalMaterial
            color="#4a0a15"
            metalness={0}
            roughness={0.3}
            transmission={0.3}
            thickness={2}
            ior={1.33}
          />
        </mesh>
      )}
    </group>
  );
}
