
import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

// Blockchain cube component
const BlockchainCube = ({ position, size = 1, color = '#0077CC', pulsing = false, delay = 0 }) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const edgesRef = useRef<THREE.LineSegments>(null!);
  
  // Animate the cube
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.1;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
      
      // Add pulsing effect if enabled
      if (pulsing) {
        const pulseScale = 0.05 * Math.sin((state.clock.getElapsedTime() + delay) * 2) + 1;
        meshRef.current.scale.set(pulseScale, pulseScale, pulseScale);
        edgesRef.current.scale.set(pulseScale, pulseScale, pulseScale);
      }
    }
  });

  return (
    <group position={position}>
      <mesh ref={meshRef} castShadow>
        <boxGeometry args={[size, size, size]} />
        <meshStandardMaterial 
          color={color}
          metalness={0.8}
          roughness={0.2}
          opacity={0.7}
          transparent
        />
      </mesh>
      <lineSegments ref={edgesRef}>
        <edgesGeometry attach="geometry" args={[new THREE.BoxGeometry(size, size, size)]} />
        <lineBasicMaterial attach="material" color="#ffffff" opacity={0.4} transparent />
      </lineSegments>
    </group>
  );
};

// Line connecting two points
const ConnectionLine = ({ start, end, color = '#0077CC' }) => {
  // Use THREE.js to create a line between two points
  const points = [
    new THREE.Vector3(...start),
    new THREE.Vector3(...end)
  ];
  
  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);

  return (
    <line geometry={lineGeometry}>
      <lineBasicMaterial color={color} opacity={0.4} transparent />
    </line>
  );
};

// Main scene component
const Scene = () => {
  // Define cube positions in a blockchain-like structure
  const cubePositions = [
    [-3, 0, 0],
    [-1, 0, 0],
    [1, 0, 0],
    [3, 0, 0],
    [-2, 2, 0],
    [0, 2, 0],
    [2, 2, 0],
    [-3, -2, 0],
    [-1, -2, 0],
    [1, -2, 0],
    [3, -2, 0],
  ];
  
  // Define connections between cubes
  const connections = [
    { start: [-3, 0, 0], end: [-1, 0, 0] },
    { start: [-1, 0, 0], end: [1, 0, 0] },
    { start: [1, 0, 0], end: [3, 0, 0] },
    { start: [-3, 0, 0], end: [-2, 2, 0] },
    { start: [-1, 0, 0], end: [0, 2, 0] },
    { start: [1, 0, 0], end: [2, 2, 0] },
    { start: [-3, 0, 0], end: [-3, -2, 0] },
    { start: [-1, 0, 0], end: [-1, -2, 0] },
    { start: [1, 0, 0], end: [1, -2, 0] },
    { start: [3, 0, 0], end: [3, -2, 0] },
  ];
  
  const colors = ['#0077CC', '#00C2C7', '#0077CC', '#00C2C7', '#0077CC']; 

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#00C2C7" />
      
      {/* Cubes */}
      {cubePositions.map((position, i) => (
        <BlockchainCube 
          key={i}
          position={position as [number, number, number]}
          size={1}
          color={colors[i % colors.length]}
          pulsing={i % 3 === 0}
          delay={i * 0.2}
        />
      ))}
      
      {/* Connections */}
      {connections.map((conn, i) => (
        <ConnectionLine 
          key={i} 
          start={conn.start} 
          end={conn.end} 
          color={i % 2 === 0 ? '#0077CC' : '#00C2C7'} 
        />
      ))}
      
      {/* Controls */}
      <OrbitControls 
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.5}
        autoRotate
        autoRotateSpeed={0.5}
      />
      
      {/* Camera */}
      <PerspectiveCamera makeDefault position={[0, 0, 15]} fov={50} />
    </>
  );
};

// Main exported component
const ThreeScene = () => {
  return (
    <div className="w-full h-full">
      <Canvas>
        <Scene />
      </Canvas>
    </div>
  );
};

export default ThreeScene;
