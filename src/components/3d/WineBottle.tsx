"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Cylinder, Sphere } from "@react-three/drei";
import * as THREE from "three";

export default function WineBottle({ isInteracting }: { isInteracting: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const autoRotateSpeed = useRef(0.003);

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    if (!isInteracting) {
      // Smooth auto-rotation
      autoRotateSpeed.current = THREE.MathUtils.lerp(
        autoRotateSpeed.current,
        0.003,
        delta * 2
      );
      groupRef.current.rotation.y += autoRotateSpeed.current;
    } else {
      autoRotateSpeed.current = 0;
    }
  });

  const glassColor = new THREE.Color("#1a2a1a");
  const labelColor = new THREE.Color("#2a1a1a");

  return (
    <group ref={groupRef} position={[0, -0.5, 0]}>
      {/* Bottle body */}
      <Cylinder args={[0.35, 0.38, 2.8, 32]} position={[0, 0, 0]}>
        <meshPhysicalMaterial
          color={glassColor}
          metalness={0.1}
          roughness={0.15}
          transmission={0.3}
          thickness={1.5}
          clearcoat={1}
          clearcoatRoughness={0.1}
          envMapIntensity={1.5}
        />
      </Cylinder>

      {/* Bottle shoulder */}
      <Cylinder args={[0.15, 0.35, 0.6, 32]} position={[0, 1.7, 0]}>
        <meshPhysicalMaterial
          color={glassColor}
          metalness={0.1}
          roughness={0.15}
          transmission={0.3}
          thickness={1.5}
          clearcoat={1}
          clearcoatRoughness={0.1}
          envMapIntensity={1.5}
        />
      </Cylinder>

      {/* Bottle neck */}
      <Cylinder args={[0.12, 0.15, 1.2, 32]} position={[0, 2.6, 0]}>
        <meshPhysicalMaterial
          color={glassColor}
          metalness={0.1}
          roughness={0.15}
          transmission={0.3}
          thickness={1.5}
          clearcoat={1}
          clearcoatRoughness={0.1}
          envMapIntensity={1.5}
        />
      </Cylinder>

      {/* Bottle lip */}
      <Cylinder args={[0.14, 0.13, 0.15, 32]} position={[0, 3.25, 0]}>
        <meshPhysicalMaterial
          color={glassColor}
          metalness={0.1}
          roughness={0.2}
          clearcoat={1}
        />
      </Cylinder>

      {/* Foil cap */}
      <Cylinder args={[0.145, 0.145, 0.4, 32]} position={[0, 3.1, 0]}>
        <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.3} />
      </Cylinder>

      {/* Main label */}
      <Cylinder args={[0.39, 0.39, 1.2, 32, 1, true, -0.8, 1.6]} position={[0, -0.1, 0]}>
        <meshStandardMaterial
          color={labelColor}
          side={THREE.DoubleSide}
          metalness={0.05}
          roughness={0.6}
        />
      </Cylinder>

      {/* Gold label border - top */}
      <Cylinder args={[0.395, 0.395, 0.01, 32, 1, true, -0.8, 1.6]} position={[0, 0.5, 0]}>
        <meshStandardMaterial
          color="#C5A572"
          side={THREE.DoubleSide}
          metalness={0.6}
          roughness={0.3}
        />
      </Cylinder>

      {/* Gold label border - bottom */}
      <Cylinder args={[0.395, 0.395, 0.01, 32, 1, true, -0.8, 1.6]} position={[0, -0.7, 0]}>
        <meshStandardMaterial
          color="#C5A572"
          side={THREE.DoubleSide}
          metalness={0.6}
          roughness={0.3}
        />
      </Cylinder>

      {/* Gold center accent on label */}
      <Cylinder args={[0.393, 0.393, 0.005, 32, 1, true, -0.6, 1.2]} position={[0, 0.1, 0]}>
        <meshStandardMaterial
          color="#C5A572"
          side={THREE.DoubleSide}
          metalness={0.7}
          roughness={0.2}
        />
      </Cylinder>

      {/* Wine level inside bottle */}
      <Cylinder args={[0.33, 0.33, 2.0, 32]} position={[0, -0.3, 0]}>
        <meshPhysicalMaterial
          color="#3a0a1a"
          metalness={0}
          roughness={0.5}
          transmission={0.4}
          thickness={2}
        />
      </Cylinder>

      {/* Punt (bottom indent) */}
      <Sphere args={[0.25, 16, 16]} position={[0, -1.5, 0]} scale={[1, 0.3, 1]}>
        <meshPhysicalMaterial
          color={glassColor}
          metalness={0.1}
          roughness={0.15}
          clearcoat={1}
        />
      </Sphere>
    </group>
  );
}
