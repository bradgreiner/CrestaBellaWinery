"use client";

import { useMemo } from "react";
import * as THREE from "three";

// Bordeaux bottle profile using lathe geometry for realistic shape
function createBottleGeometry() {
  const points: THREE.Vector2[] = [];

  // Punt (bottom indent)
  points.push(new THREE.Vector2(0, 0));
  points.push(new THREE.Vector2(0.08, 0.02));
  points.push(new THREE.Vector2(0.15, 0.05));

  // Base
  points.push(new THREE.Vector2(0.36, 0.08));
  points.push(new THREE.Vector2(0.37, 0.12));

  // Body (straight sides, Bordeaux style)
  points.push(new THREE.Vector2(0.37, 0.5));
  points.push(new THREE.Vector2(0.37, 1.5));
  points.push(new THREE.Vector2(0.37, 2.2));

  // Shoulder (high and sharp for Bordeaux)
  points.push(new THREE.Vector2(0.36, 2.4));
  points.push(new THREE.Vector2(0.34, 2.55));
  points.push(new THREE.Vector2(0.30, 2.65));
  points.push(new THREE.Vector2(0.22, 2.75));
  points.push(new THREE.Vector2(0.16, 2.82));

  // Neck
  points.push(new THREE.Vector2(0.14, 2.9));
  points.push(new THREE.Vector2(0.135, 3.2));
  points.push(new THREE.Vector2(0.13, 3.5));

  // Lip ring
  points.push(new THREE.Vector2(0.14, 3.55));
  points.push(new THREE.Vector2(0.15, 3.58));
  points.push(new THREE.Vector2(0.15, 3.62));
  points.push(new THREE.Vector2(0.13, 3.64));

  // Top
  points.push(new THREE.Vector2(0.12, 3.65));
  points.push(new THREE.Vector2(0, 3.65));

  return new THREE.LatheGeometry(points, 48);
}

function createLabelGeometry() {
  // Label wraps around the body
  const points: THREE.Vector2[] = [];
  points.push(new THREE.Vector2(0.375, 0.7));
  points.push(new THREE.Vector2(0.375, 1.9));
  return new THREE.LatheGeometry(points, 48);
}

export default function WineBottle() {
  const bottleGeo = useMemo(() => createBottleGeometry(), []);
  const labelGeo = useMemo(() => createLabelGeometry(), []);

  // Dark red-brown glass, nearly opaque like a real Cab Sauv bottle
  const glassColor = useMemo(() => new THREE.Color("#1a0a0a"), []);
  // Cream label
  const labelColor = useMemo(() => new THREE.Color("#E8DFD0"), []);

  return (
    <group position={[0, -1.8, 0]}>
      {/* Main bottle glass */}
      <mesh geometry={bottleGeo}>
        <meshPhysicalMaterial
          color={glassColor}
          metalness={0.05}
          roughness={0.12}
          transmission={0.15}
          thickness={2}
          clearcoat={1}
          clearcoatRoughness={0.05}
          envMapIntensity={2}
          ior={1.5}
        />
      </mesh>

      {/* Wine inside */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.34, 0.34, 2.0, 32]} />
        <meshPhysicalMaterial
          color="#3a0510"
          metalness={0}
          roughness={0.4}
          transmission={0.2}
          thickness={3}
        />
      </mesh>

      {/* Label background - cream paper */}
      <mesh geometry={labelGeo}>
        <meshStandardMaterial
          color={labelColor}
          side={THREE.DoubleSide}
          metalness={0}
          roughness={0.8}
        />
      </mesh>

      {/* Gold border - top of label */}
      <mesh>
        <cylinderGeometry args={[0.38, 0.38, 0.015, 48, 1, true]} />
        <meshStandardMaterial
          color="#C5A572"
          side={THREE.DoubleSide}
          metalness={0.7}
          roughness={0.25}
        />
      </mesh>
      <group position={[0, 1.9, 0]}>
        <mesh>
          <cylinderGeometry args={[0.38, 0.38, 0.015, 48, 1, true]} />
          <meshStandardMaterial
            color="#C5A572"
            side={THREE.DoubleSide}
            metalness={0.7}
            roughness={0.25}
          />
        </mesh>
      </group>

      {/* Gold border - bottom of label */}
      <group position={[0, 0.7, 0]}>
        <mesh>
          <cylinderGeometry args={[0.38, 0.38, 0.015, 48, 1, true]} />
          <meshStandardMaterial
            color="#C5A572"
            side={THREE.DoubleSide}
            metalness={0.7}
            roughness={0.25}
          />
        </mesh>
      </group>

      {/* Gold center line on label */}
      <group position={[0, 1.3, 0]}>
        <mesh>
          <cylinderGeometry args={[0.378, 0.378, 0.005, 48, 1, true]} />
          <meshStandardMaterial
            color="#C5A572"
            side={THREE.DoubleSide}
            metalness={0.6}
            roughness={0.3}
          />
        </mesh>
      </group>

      {/* Foil capsule over neck/cork */}
      <mesh position={[0, 3.45, 0]}>
        <cylinderGeometry args={[0.155, 0.155, 0.45, 32]} />
        <meshStandardMaterial
          color="#1a0808"
          metalness={0.85}
          roughness={0.2}
        />
      </mesh>

      {/* Foil top cap */}
      <mesh position={[0, 3.67, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.155, 32]} />
        <meshStandardMaterial
          color="#1a0808"
          metalness={0.85}
          roughness={0.2}
        />
      </mesh>
    </group>
  );
}
