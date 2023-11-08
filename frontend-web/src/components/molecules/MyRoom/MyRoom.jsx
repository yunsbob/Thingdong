import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Spinner } from '../Spinner/Spinner';
import MyScene from '@/components/molecules/MyRoom/MyScene';


const MyRoom = () => {
  return (
    <div style={{ backgroundColor: 'skyblue', width: '100%', height: '100vh' }}>
      <Suspense fallback={<Spinner />}>
        <Canvas
          shadows
          flat
          linear 
          style={{
            width: '100%',
            height: '100vh',
          }}
        >
          <MyScene />
          {/* <NewScene /> */}
          {/* <ChairScene /> */}
          <OrbitControls />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default MyRoom;
