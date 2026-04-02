"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Generate seeded random numbers for consistent animation
function seededRandom(seed: number): number {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

// Connected floating data points
function DataNetwork() {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  
  const pointCount = 100;
  const connectionDistance = 2.2;
  
  const { positions, velocities } = useMemo(() => {
    const positions = new Float32Array(pointCount * 3);
    const velocities = new Float32Array(pointCount * 3);
    
    for (let i = 0; i < pointCount; i++) {
      const i3 = i * 3;
      
      // Distribute points
      const angle = seededRandom(i) * Math.PI * 2;
      const radius = 2 + seededRandom(i * 2) * 5;
      
      positions[i3] = Math.cos(angle) * radius;
      positions[i3 + 1] = (seededRandom(i * 3) - 0.5) * 6;
      positions[i3 + 2] = Math.sin(angle) * radius * 0.5;
      
      velocities[i3] = (seededRandom(i * 4) - 0.5) * 0.004;
      velocities[i3 + 1] = (seededRandom(i * 5) - 0.5) * 0.004;
      velocities[i3 + 2] = (seededRandom(i * 6) - 0.5) * 0.002;
    }
    
    return { positions, velocities };
  }, []);
  
  const lineGeometry = useMemo(() => new THREE.BufferGeometry(), []);
  
  useFrame((state) => {
    if (!pointsRef.current) return;
    
    const positionAttribute = pointsRef.current.geometry.attributes.position;
    const posArray = positionAttribute.array as Float32Array;
    
    for (let i = 0; i < pointCount; i++) {
      const i3 = i * 3;
      
      posArray[i3] += velocities[i3];
      posArray[i3 + 1] += velocities[i3 + 1];
      posArray[i3 + 2] += velocities[i3 + 2];
      
      // Add subtle wave motion
      posArray[i3] += Math.sin(state.clock.elapsedTime * 0.4 + i * 0.1) * 0.002;
      posArray[i3 + 1] += Math.cos(state.clock.elapsedTime * 0.3 + i * 0.1) * 0.002;
      
      // Keep points within bounds
      const dist = Math.sqrt(posArray[i3] ** 2 + posArray[i3 + 1] ** 2);
      if (dist > 6) {
        posArray[i3] *= 0.98;
        posArray[i3 + 1] *= 0.98;
      }
    }
    
    positionAttribute.needsUpdate = true;
    
    // Update connection lines
    if (linesRef.current) {
      const linePositions: number[] = [];
      
      for (let i = 0; i < pointCount; i++) {
        const i3 = i * 3;
        
        for (let j = i + 1; j < pointCount; j++) {
          const j3 = j * 3;
          
          const dx = posArray[i3] - posArray[j3];
          const dy = posArray[i3 + 1] - posArray[j3 + 1];
          const dz = posArray[i3 + 2] - posArray[j3 + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
          
          if (dist < connectionDistance) {
            linePositions.push(
              posArray[i3], posArray[i3 + 1], posArray[i3 + 2],
              posArray[j3], posArray[j3 + 1], posArray[j3 + 2]
            );
          }
        }
      }
      
      lineGeometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(linePositions, 3)
      );
    }
    
    // Rotate entire system slowly
    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.03;
    if (linesRef.current) {
      linesRef.current.rotation.y = state.clock.elapsedTime * 0.03;
    }
  });
  
  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geo;
  }, [positions]);
  
  return (
    <>
      <points ref={pointsRef} geometry={geometry}>
        <pointsMaterial
          size={0.09}
          color="#44403c"
          transparent
          opacity={0.85}
          sizeAttenuation
        />
      </points>
      <lineSegments ref={linesRef} geometry={lineGeometry}>
        <lineBasicMaterial color="#a8a29e" transparent opacity={0.22} />
      </lineSegments>
    </>
  );
}

// Grid floor like graph paper
function GridFloor() {
  const gridRef = useRef<THREE.GridHelper>(null);
  
  useFrame((state) => {
    if (!gridRef.current) return;
    // Slowly rotate grid
    gridRef.current.rotation.y = state.clock.elapsedTime * 0.02;
  });
  
  return (
    <gridHelper 
      ref={gridRef}
      args={[80, 80, "#c7c2bc", "#d6d3d1"]} // Infinite-looking large grid
      position={[0, -3, 0]}
    />
  );
}

export function HeroAnimation() {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-stone-50 via-white to-stone-100">
      <Canvas
        camera={{ position: [0, 2, 10], fov: 50 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.6} />
        <GridFloor />
        <DataNetwork />
      </Canvas>
    </div>
  );
}
