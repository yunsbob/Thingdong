import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Scene from './Scene';

interface TempSceneProps {
  isEditing: boolean;
}

export default function TempScene({ isEditing }: TempSceneProps) {
  return (
    <Suspense fallback={null}>
      <Canvas
        shadows
        flat
        linear
        style={{ height: isEditing ? '60vh' : '100vh' }}
      >
        {/* <Canvas> */}
        <Scene />
        <OrbitControls />
      </Canvas>
    </Suspense>
  );
}
