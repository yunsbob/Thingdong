import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Scene from './Scene';

interface TempSceneProps {
  isEditing: boolean;
  position: { x: number; y: number; z: number };
}

export default function TempScene({ isEditing, position }: TempSceneProps) {
  return (
    <Suspense fallback={null}>
      <Canvas
        shadows
        flat
        linear
        style={{ height: isEditing ? '60vh' : '100vh' }}
      >
        {/* <Canvas> */}
        <Scene x={position.x} y={position.y} z={position.z} />
        <OrbitControls />
      </Canvas>
    </Suspense>
  );
}
