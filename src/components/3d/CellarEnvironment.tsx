"use client";

import * as THREE from "three";
import { useMemo } from "react";

export default function CellarEnvironment() {
  const stoneColor = useMemo(() => new THREE.Color("#1a1715"), []);
  const woodColor = useMemo(() => new THREE.Color("#2a1f18"), []);
  const floorColor = useMemo(() => new THREE.Color("#131110"), []);

  return (
    <group>
      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.82, 0]} receiveShadow>
        <planeGeometry args={[14, 14]} />
        <meshStandardMaterial
          color={floorColor}
          metalness={0.1}
          roughness={0.9}
        />
      </mesh>

      {/* Back wall */}
      <mesh position={[0, 2, -4]} receiveShadow>
        <planeGeometry args={[14, 8]} />
        <meshStandardMaterial
          color={stoneColor}
          metalness={0.02}
          roughness={0.95}
        />
      </mesh>

      {/* Left wall */}
      <mesh position={[-5, 2, 0]} rotation={[0, Math.PI / 2, 0]} receiveShadow>
        <planeGeometry args={[10, 8]} />
        <meshStandardMaterial
          color={stoneColor}
          metalness={0.02}
          roughness={0.95}
        />
      </mesh>

      {/* Right wall */}
      <mesh position={[5, 2, 0]} rotation={[0, -Math.PI / 2, 0]} receiveShadow>
        <planeGeometry args={[10, 8]} />
        <meshStandardMaterial
          color={stoneColor}
          metalness={0.02}
          roughness={0.95}
        />
      </mesh>

      {/* Barrel / table surface the bottle sits on */}
      <group position={[0, -1.0, 0]}>
        {/* Barrel top (round) */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.8, 0]}>
          <circleGeometry args={[1.2, 32]} />
          <meshStandardMaterial
            color={woodColor}
            metalness={0.05}
            roughness={0.75}
          />
        </mesh>

        {/* Barrel body */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[1.15, 1.1, 1.6, 32]} />
          <meshStandardMaterial
            color={woodColor}
            metalness={0.05}
            roughness={0.8}
          />
        </mesh>

        {/* Barrel metal bands */}
        {[-0.5, 0, 0.5].map((y, i) => (
          <mesh key={i} position={[0, y, 0]}>
            <torusGeometry args={[1.16, 0.015, 8, 48]} />
            <meshStandardMaterial
              color="#3a3530"
              metalness={0.8}
              roughness={0.4}
            />
          </mesh>
        ))}
      </group>

      {/* Background barrels for atmosphere */}
      {/* Left barrel */}
      <group position={[-2.5, -1.0, -2]}>
        <mesh>
          <cylinderGeometry args={[0.7, 0.65, 1.2, 24]} />
          <meshStandardMaterial color="#1f1812" roughness={0.85} />
        </mesh>
      </group>

      {/* Right barrel */}
      <group position={[2.8, -1.0, -2.5]}>
        <mesh>
          <cylinderGeometry args={[0.7, 0.65, 1.2, 24]} />
          <meshStandardMaterial color="#1f1812" roughness={0.85} />
        </mesh>
      </group>

      {/* Stacked barrel behind */}
      <group position={[-1.5, 0.2, -3]}>
        <mesh rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.65, 0.65, 1.0, 24]} />
          <meshStandardMaterial color="#1a1510" roughness={0.85} />
        </mesh>
      </group>
    </group>
  );
}
