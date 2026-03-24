"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Highly detailed Bordeaux bottle profile — 35+ control points
function createBottleGeometry() {
  const pts: THREE.Vector2[] = [];

  // === PUNT (concave bottom) ===
  pts.push(new THREE.Vector2(0, 0));
  pts.push(new THREE.Vector2(0.04, 0.005));
  pts.push(new THREE.Vector2(0.08, 0.015));
  pts.push(new THREE.Vector2(0.12, 0.03));
  pts.push(new THREE.Vector2(0.18, 0.04));
  pts.push(new THREE.Vector2(0.25, 0.035));
  pts.push(new THREE.Vector2(0.30, 0.02));

  // === BASE HEEL ===
  pts.push(new THREE.Vector2(0.355, 0.02));
  pts.push(new THREE.Vector2(0.365, 0.04));
  pts.push(new THREE.Vector2(0.37, 0.07));
  pts.push(new THREE.Vector2(0.372, 0.10));

  // === BODY (long straight sides, Bordeaux hallmark) ===
  pts.push(new THREE.Vector2(0.372, 0.25));
  pts.push(new THREE.Vector2(0.372, 0.50));
  pts.push(new THREE.Vector2(0.372, 0.75));
  pts.push(new THREE.Vector2(0.372, 1.00));
  pts.push(new THREE.Vector2(0.372, 1.25));
  pts.push(new THREE.Vector2(0.372, 1.50));
  pts.push(new THREE.Vector2(0.372, 1.75));
  pts.push(new THREE.Vector2(0.372, 2.00));
  pts.push(new THREE.Vector2(0.372, 2.20));

  // === SHOULDER (high, pronounced — defines Bordeaux shape) ===
  pts.push(new THREE.Vector2(0.371, 2.30));
  pts.push(new THREE.Vector2(0.368, 2.38));
  pts.push(new THREE.Vector2(0.362, 2.45));
  pts.push(new THREE.Vector2(0.350, 2.52));
  pts.push(new THREE.Vector2(0.330, 2.58));
  pts.push(new THREE.Vector2(0.300, 2.64));
  pts.push(new THREE.Vector2(0.260, 2.70));
  pts.push(new THREE.Vector2(0.220, 2.75));
  pts.push(new THREE.Vector2(0.185, 2.79));
  pts.push(new THREE.Vector2(0.160, 2.82));

  // === NECK (long taper) ===
  pts.push(new THREE.Vector2(0.148, 2.86));
  pts.push(new THREE.Vector2(0.140, 2.92));
  pts.push(new THREE.Vector2(0.136, 3.00));
  pts.push(new THREE.Vector2(0.133, 3.10));
  pts.push(new THREE.Vector2(0.131, 3.20));
  pts.push(new THREE.Vector2(0.130, 3.30));
  pts.push(new THREE.Vector2(0.129, 3.40));
  pts.push(new THREE.Vector2(0.129, 3.48));

  // === LIP / COLLAR ===
  pts.push(new THREE.Vector2(0.132, 3.52));
  pts.push(new THREE.Vector2(0.140, 3.55));
  pts.push(new THREE.Vector2(0.148, 3.57));
  pts.push(new THREE.Vector2(0.150, 3.59));
  pts.push(new THREE.Vector2(0.150, 3.62));
  pts.push(new THREE.Vector2(0.145, 3.64));
  pts.push(new THREE.Vector2(0.135, 3.65));

  // === TOP ===
  pts.push(new THREE.Vector2(0.125, 3.66));
  pts.push(new THREE.Vector2(0.06, 3.66));
  pts.push(new THREE.Vector2(0, 3.66));

  return new THREE.LatheGeometry(pts, 64);
}

// Label area geometry — wraps around bottle body
function createLabelGeometry() {
  const pts: THREE.Vector2[] = [];
  pts.push(new THREE.Vector2(0.377, 0.65));
  pts.push(new THREE.Vector2(0.377, 0.80));
  pts.push(new THREE.Vector2(0.377, 1.00));
  pts.push(new THREE.Vector2(0.377, 1.20));
  pts.push(new THREE.Vector2(0.377, 1.40));
  pts.push(new THREE.Vector2(0.377, 1.60));
  pts.push(new THREE.Vector2(0.377, 1.80));
  pts.push(new THREE.Vector2(0.377, 1.95));
  return new THREE.LatheGeometry(pts, 64);
}

// Wine fill inside the bottle
function createWineGeometry() {
  const pts: THREE.Vector2[] = [];
  pts.push(new THREE.Vector2(0, 0.12));
  pts.push(new THREE.Vector2(0.34, 0.12));
  pts.push(new THREE.Vector2(0.34, 2.10));
  pts.push(new THREE.Vector2(0, 2.10));
  return new THREE.LatheGeometry(pts, 32);
}

export default function WineBottle() {
  const groupRef = useRef<THREE.Group>(null);
  const bottleGeo = useMemo(() => createBottleGeometry(), []);
  const labelGeo = useMemo(() => createLabelGeometry(), []);
  const wineGeo = useMemo(() => createWineGeometry(), []);

  // Slow auto-rotation
  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <group ref={groupRef} position={[0, -1.83, 0]}>
      {/* === GLASS BODY === */}
      <mesh geometry={bottleGeo} castShadow receiveShadow>
        <meshPhysicalMaterial
          color="#1A0505"
          metalness={0.1}
          roughness={0.15}
          transmission={0.12}
          thickness={2.5}
          clearcoat={1}
          clearcoatRoughness={0.03}
          envMapIntensity={1.8}
          ior={1.52}
          specularIntensity={1}
          specularColor="#ffffff"
        />
      </mesh>

      {/* === WINE INSIDE === */}
      <mesh geometry={wineGeo}>
        <meshPhysicalMaterial
          color="#2a0308"
          metalness={0}
          roughness={0.5}
          transmission={0.08}
          thickness={4}
        />
      </mesh>

      {/* === LABEL (cream paper) === */}
      <mesh geometry={labelGeo} castShadow>
        <meshStandardMaterial
          color="#F5F0E8"
          side={THREE.DoubleSide}
          metalness={0}
          roughness={0.75}
        />
      </mesh>

      {/* === GOLD BORDER — top of label === */}
      <group position={[0, 1.95, 0]}>
        <mesh>
          <cylinderGeometry args={[0.381, 0.381, 0.02, 64, 1, true]} />
          <meshStandardMaterial
            color="#C5A572"
            side={THREE.DoubleSide}
            metalness={0.7}
            roughness={0.25}
          />
        </mesh>
      </group>

      {/* === GOLD BORDER — bottom of label === */}
      <group position={[0, 0.65, 0]}>
        <mesh>
          <cylinderGeometry args={[0.381, 0.381, 0.02, 64, 1, true]} />
          <meshStandardMaterial
            color="#C5A572"
            side={THREE.DoubleSide}
            metalness={0.7}
            roughness={0.25}
          />
        </mesh>
      </group>

      {/* === GOLD ACCENT LINE — center of label === */}
      <group position={[0, 1.30, 0]}>
        <mesh>
          <cylinderGeometry args={[0.379, 0.379, 0.008, 64, 1, true]} />
          <meshStandardMaterial
            color="#C5A572"
            side={THREE.DoubleSide}
            metalness={0.6}
            roughness={0.3}
          />
        </mesh>
      </group>

      {/* === FOIL CAPSULE (dark burgundy, metallic) === */}
      <mesh position={[0, 3.42, 0]} castShadow>
        <cylinderGeometry args={[0.153, 0.153, 0.52, 48]} />
        <meshStandardMaterial
          color="#1a0505"
          metalness={0.4}
          roughness={0.3}
        />
      </mesh>

      {/* Foil top */}
      <mesh position={[0, 3.68, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.153, 48]} />
        <meshStandardMaterial
          color="#1a0505"
          metalness={0.4}
          roughness={0.3}
        />
      </mesh>

      {/* === FOIL RING at capsule base === */}
      <mesh position={[0, 3.16, 0]}>
        <torusGeometry args={[0.155, 0.005, 8, 48]} />
        <meshStandardMaterial
          color="#C5A572"
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
    </group>
  );
}
