import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Spinner } from '../Spinner/Spinner';
import MyScene from '@/components/molecules/MyRoom/MyScene';
import MySecondScene from '@/components/molecules/MyRoom/MySecondScene';

const MyRoom = ({ isEditing, position }) => {
  return (
    <div style={{ backgroundColor: 'skyblue', width: '100%', height: '100vh' }}>
      <Suspense fallback={<Spinner />}>
        <Canvas
          shadows
          flat
          linear
          style={{
            width: '100%',
            height: isEditing ? '60vh' : '100vh',
          }}
        >
          {/* <MyScene position={position} /> */}
          <MySecondScene />
          <OrbitControls />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default MyRoom;
