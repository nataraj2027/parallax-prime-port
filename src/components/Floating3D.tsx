import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Text3D, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

interface FloatingIconProps {
  position: [number, number, number];
  color: string;
  scale?: number;
}

const FloatingCube: React.FC<FloatingIconProps> = ({ position, color, scale = 1 }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.2;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Float speed={4} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial 
          color={color} 
          emissive={color}
          emissiveIntensity={0.3}
          transparent
          opacity={0.8}
        />
      </mesh>
    </Float>
  );
};

const FloatingSphere: React.FC<FloatingIconProps> = ({ position, color, scale = 1 }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial 
        color={color} 
        emissive={color}
        emissiveIntensity={0.4}
        transparent
        opacity={0.9}
        wireframe
      />
    </mesh>
  );
};

const FloatingTorus: React.FC<FloatingIconProps> = ({ position, color, scale = 1 }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.02;
      meshRef.current.position.x = position[0] + Math.sin(state.clock.elapsedTime * 0.7) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <torusGeometry args={[0.6, 0.2, 16, 100]} />
      <meshStandardMaterial 
        color={color} 
        emissive={color}
        emissiveIntensity={0.2}
        transparent
        opacity={0.7}
      />
    </mesh>
  );
};

const Scene3D: React.FC = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00ffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#a855f7" />
      
      <FloatingCube position={[-2, 1, 0]} color="#00ffff" scale={0.8} />
      <FloatingSphere position={[2, 0, -1]} color="#a855f7" scale={1.2} />
      <FloatingTorus position={[0, -1, 1]} color="#ec4899" scale={1} />
      <FloatingCube position={[3, 2, -2]} color="#10b981" scale={0.6} />
      <FloatingSphere position={[-3, -1, 2]} color="#f59e0b" scale={0.9} />
    </>
  );
};

interface Floating3DProps {
  className?: string;
}

const Floating3D: React.FC<Floating3DProps> = ({ className = "" }) => {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <Scene3D />
      </Canvas>
    </div>
  );
};

export default Floating3D;