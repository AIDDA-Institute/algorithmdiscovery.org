"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function seededRandom(seed: number): number {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

// Particle system
function ParticleNetwork() {
  const meshRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  
  const particleCount = 150;
  const connectionDistance = 2.5;
  
  // Generate particles
  const { positions, velocities } = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      
      const theta = seededRandom(i * 3) * Math.PI * 2;
      const phi = Math.acos(2 * seededRandom(i * 3 + 1) - 1);
      const radius = 3 + seededRandom(i * 3 + 2) * 4;
      
      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi);
      
      velocities[i3] = (seededRandom(i * 3 + 3) - 0.5) * 0.003;
      velocities[i3 + 1] = (seededRandom(i * 3 + 4) - 0.5) * 0.003;
      velocities[i3 + 2] = (seededRandom(i * 3 + 5) - 0.5) * 0.003;
    }
    
    return { positions, velocities };
  }, []);
  
  const lineGeometry = useMemo(() => {
    return new THREE.BufferGeometry();
  }, []);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    
    const positionAttribute = meshRef.current.geometry.attributes.position;
    const posArray = positionAttribute.array as Float32Array;
    
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      
      posArray[i3] += velocities[i3];
      posArray[i3 + 1] += velocities[i3 + 1];
      posArray[i3 + 2] += velocities[i3 + 2];
      
      posArray[i3] += Math.sin(state.clock.elapsedTime * 0.5 + i * 0.1) * 0.002;
      posArray[i3 + 1] += Math.cos(state.clock.elapsedTime * 0.3 + i * 0.1) * 0.002;
      
      const dist = Math.sqrt(
        posArray[i3] ** 2 + posArray[i3 + 1] ** 2 + posArray[i3 + 2] ** 2
      );
      if (dist > 8) {
        posArray[i3] *= 0.95;
        posArray[i3 + 1] *= 0.95;
        posArray[i3 + 2] *= 0.95;
      }
    }
    
    positionAttribute.needsUpdate = true;
    
    if (linesRef.current) {
      const linePositions: number[] = [];
      
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        
        for (let j = i + 1; j < particleCount; j++) {
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
    
    // Rotate the entire system slowly
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    if (linesRef.current) {
      linesRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });
  
  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geo;
  }, [positions]);
  
  return (
    <>
      <points ref={meshRef} geometry={geometry}>
        <pointsMaterial
          size={0.08}
          color="#57534e"
          transparent
          opacity={0.8}
          sizeAttenuation
        />
      </points>
      <lineSegments ref={linesRef} geometry={lineGeometry}>
        <lineBasicMaterial color="#a8a29e" transparent opacity={0.15} />
      </lineSegments>
    </>
  );
}

// sine wave surface
function MathFunctionSurface() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  const geometry = useMemo(() => {
    const geo = new THREE.PlaneGeometry(40, 40, 60, 60);
    const positions = geo.attributes.position.array as Float32Array;
    
    for (let i = 0; i < positions.length; i += 3) {
      const x = positions[i];
      const y = positions[i + 1];
      positions[i + 2] = Math.sin(Math.sqrt(x * x + y * y) * 0.5) * 1.2;
    }
    
    geo.computeVertexNormals();
    return geo;
  }, []);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.z = state.clock.elapsedTime * 0.03;
    meshRef.current.rotation.x = Math.PI / 2 + 0.2;
  });
  
  return (
    <mesh ref={meshRef} geometry={geometry} position={[0, 0, -8]}>
      <meshBasicMaterial
        color="#a8a29e"
        wireframe
        transparent
        opacity={0.2}
      />
    </mesh>
  );
}

export function ParticleAnimation() {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-stone-50 via-white to-stone-100">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <MathFunctionSurface />
        <ParticleNetwork />
      </Canvas>
    </div>
  );
}
