import React, { Suspense, useState } from 'react';
import useSpline from '@splinetool/r3f-spline';
import { OrthographicCamera } from '@react-three/drei';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import chair from './chair.glb';
// import tree from './tree.glb';
// import armChair from './armChair.glb';
import MyScene from '@/components/molecules/MyScene/MyScene';
import { Spinner } from '../../molecules/Spinner/Spinner';
// import TempScene from '@/components/organisms/TempScene/TempScene';

// type Position = {
//   x: number;
//   y: number;
//   z: number;
// };

// interface MyRoomProps {
//   isEditing: Boolean;
//   position: Position
// }


// 외부 gltf 로드
// const ChairScene = () => {
//   const gltf = useLoader(GLTFLoader, chair);
//   console.log(gltf);

//   return (
//     <>
//       <color attach="background" args={['#f4efff']} />
//       <group position={[0, 1, 0]} scale={1}>
//         <primitive
//           // attach="geometric"
//           dispose={null}
//           object={gltf.scene}
//           scale={1}
//         />
//       </group>
//     </>
//   );
// };

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
            // height: '100vh',
            height: isEditing ? '60vh' : '100vh',
          }}
        >
          <MyScene position={position} />
          {/* <NewScene /> */}
          {/* <ChairScene /> */}
          <OrbitControls />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default MyRoom;
