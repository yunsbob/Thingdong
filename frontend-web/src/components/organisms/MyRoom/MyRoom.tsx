import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Spinner } from '../../molecules/Spinner/Spinner';
import MyGlbScene from '@/components/organisms/MyRoom/MyGlbScene';
import { Position } from '@/types/room';

interface MyRoomProps {
  isEditing: boolean;
  position: Position;
}

const MyRoom = ({ isEditing, position }: MyRoomProps) => {
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
          <MyGlbScene />
          <OrbitControls />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default MyRoom;
