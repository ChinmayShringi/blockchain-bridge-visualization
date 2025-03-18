import { useRef, useEffect, useState, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import { useSpring, animated } from '@react-spring/three';
import * as THREE from 'three';

interface BlockData {
  index: number;
  timestamp: number;
  data: string;
  hash: string;
}

// Create shared geometries and materials at module level
const sharedBoxGeometry = new THREE.BoxGeometry(1, 1, 1);
const sharedEdgesGeometry = new THREE.EdgesGeometry(sharedBoxGeometry);
const sharedMaterial = new THREE.MeshStandardMaterial({
  metalness: 0.8,
  roughness: 0.2,
  opacity: 0.7,
  transparent: true
});
const sharedEdgesMaterial = new THREE.LineBasicMaterial({
  color: '#ffffff',
  opacity: 0.4,
  transparent: true
});

// Optimized BlockchainCube component
const BlockchainCube = ({ position, color = '#0077CC', isNew = false }) => {
  const groupRef = useRef<THREE.Group>(null!);
  const startTimeRef = useRef(0);
  const [animationComplete, setAnimationComplete] = useState(!isNew);
  
  // Clone and modify material for this instance
  const instanceMaterial = useMemo(() => {
    const material = sharedMaterial.clone();
    material.color.set(color);
    return material;
  }, [color]);

  // Optimized animation using useFrame
  useFrame((state) => {
    if (!isNew || animationComplete) return;
    
    if (startTimeRef.current === 0) {
      startTimeRef.current = state.clock.elapsedTime;
    }
    
    const elapsed = state.clock.elapsedTime - startTimeRef.current;
    const duration = 0.5; // Animation duration in seconds
    
    if (elapsed < duration) {
      const scale = THREE.MathUtils.smoothstep(elapsed, 0, duration);
      groupRef.current.scale.setScalar(scale);
    } else {
      groupRef.current.scale.setScalar(1);
      setAnimationComplete(true);
    }
  });

  return (
    <group ref={groupRef} position={position} scale={0}>
      <mesh 
        geometry={sharedBoxGeometry}
        material={instanceMaterial}
      />
      <lineSegments 
        geometry={sharedEdgesGeometry}
        material={sharedEdgesMaterial}
      />
    </group>
  );
};

// Optimized ConnectionLine component
const ConnectionLine = ({ start, end, color = '#0077CC' }) => (
  <lineSegments>
    <bufferGeometry>
      <float32BufferAttribute 
        attach="attributes-position" 
        array={new Float32Array([...start, ...end])} 
        count={2} 
        itemSize={3} 
      />
    </bufferGeometry>
    <lineBasicMaterial color={color} opacity={0.4} transparent />
  </lineSegments>
);

// Main scene component
const Scene = ({ blocks, basePosition }: { blocks: BlockData[], basePosition: [number, number, number] }) => {
  const { camera } = useThree();
  
  // Calculate target positions
  const targetPosition = useMemo(() => {
    const lastBlockX = basePosition[0] + (blocks.length - 1) * 2;
    return [lastBlockX, basePosition[1] + 3, basePosition[2] + 8] as [number, number, number];
  }, [blocks.length, basePosition]);

  const targetLookAt = useMemo(() => {
    const centerX = basePosition[0] + (blocks.length - 1) * 2 / 2;
    return [centerX, basePosition[1], basePosition[2]] as [number, number, number];
  }, [blocks.length, basePosition]);

  // Animate camera position
  useFrame((state) => {
    if (camera && camera.position) {
      camera.position.x += (targetPosition[0] - camera.position.x) * 0.05;
      camera.position.y += (targetPosition[1] - camera.position.y) * 0.05;
      camera.position.z += (targetPosition[2] - camera.position.z) * 0.05;
      
      camera.lookAt(targetLookAt[0], targetLookAt[1], targetLookAt[2]);
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#00C2C7" />
      
      {blocks.map((block, i) => (
        <BlockchainCube 
          key={block.timestamp}
          position={[basePosition[0] + i * 2, basePosition[1], basePosition[2]]}
          color={i === 0 ? '#FFD700' : '#4ECDC4'}
          isNew={block.timestamp > Date.now() - 5000}
        />
      ))}
      
      {blocks.length > 1 && blocks.slice(1).map((_, i) => (
        <ConnectionLine 
          key={i}
          start={[basePosition[0] + i * 2, basePosition[1], basePosition[2]]}
          end={[basePosition[0] + (i + 1) * 2, basePosition[1], basePosition[2]]}
          color={i % 2 === 0 ? '#0077CC' : '#00C2C7'}
        />
      ))}
      
      <PerspectiveCamera 
        makeDefault
        position={[basePosition[0], basePosition[1] + 3, basePosition[2] + 8]}
        fov={75}
      />
    </>
  );
};

// Main exported component
const ThreeScene = ({ position = [0, 0, 0] }: { position?: [number, number, number] }) => {
  const [blocks, setBlocks] = useState<BlockData[]>([]);

  useEffect(() => {
    const createBlock = (index: number): BlockData => ({
      index,
      timestamp: Date.now(),
      data: `Block ${index} Data: ${Math.floor(Math.random() * 1000)}`,
      hash: Math.random().toString(36).substring(2, 15),
    });

    // Initialize with genesis block
    setBlocks([createBlock(0)]);

    // Add new blocks at random intervals between 4-8 seconds
    const blockTimer = setInterval(() => {
      setBlocks(prev => [...prev, createBlock(prev.length)]);
    }, 4000 + Math.random() * 4000);

    return () => clearInterval(blockTimer);
  }, []);

  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [position[0], position[1] + 3, position[2] + 8] }}>
        <Scene blocks={blocks} basePosition={position} />
      </Canvas>
    </div>
  );
};

export default ThreeScene;
