import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';

const Banner3D = () => {
  return (
    <Canvas style={{ height: 300 }}>
      <ambientLight intensity={0.8} />
      <pointLight position={[10, 10, 10]} />
      <Stars radius={50} depth={50} count={5000} factor={4} fade />
      <mesh rotation={[0.2, 0.4, 0]}>
        <torusKnotGeometry args={[1.2, 0.3, 100, 16]} />
        <meshStandardMaterial color="gold" wireframe />
      </mesh>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default Banner3D;