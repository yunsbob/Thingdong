import React, { Suspense } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import {
  Environment,
  OrbitControls,
  OrthographicCamera,
} from '@react-three/drei';
import { Spinner } from '../../molecules/Spinner/Spinner';
import { MyRoomProps } from '@/types/room';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import room_pink_light from './room-pink-light.glb';

const MyRoom = ({
  isEditing,
  position,
  rotation,
  userObject,
  onObjectClick,
}: MyRoomProps) => {
  const roomPinkLight = useLoader(GLTFLoader, room_pink_light);

  (roomPinkLight as any).scene.traverse((node: any) => {
    console.log(node.type);
    if (node.type === 'Mesh') {
      node.castShadow = true;
      node.receiveShadow = true;
    }
  });

  return (
    <div style={{ backgroundColor: '#efddad', width: '100%', height: '100vh' }}>
      <Suspense fallback={<Spinner />}>
        <Canvas
          shadows
          // linear
          // flat
          style={{
            width: '100%',
            height: isEditing ? '60vh' : '100vh',
          }}
        >
          <scene name="Scene" position={[0, -2, 0]}>
            <ambientLight intensity={0.4} />
            <directionalLight
              position={[5, 5, 5]}
              intensity={1}
              castShadow
              shadow-mapSize-width={2048} // Higher values give better shadow resolution
              shadow-mapSize-height={2048}
              shadow-camera-near={0.5}
              shadow-camera-far={500}
            />

            {userObject.map(obj => {
              const glb = useLoader(GLTFLoader, obj.objectModelPath);

              glb.scene.traverse(node => {
                console.log(node.type);
                if (node.type === 'Mesh') {
                  node.castShadow = true;
                  node.receiveShadow = true;
                }
              });

              return (
                <primitive
                  key={obj.name}
                  object={glb.scene}
                  name={obj.name}
                  position={obj.position}
                  rotation={obj.rotation}
                  scale={1}
                  onClick={(e: any) => {
                    e.stopPropagation();
                    console.log(obj.name);
                    onObjectClick(obj.name);
                  }}
                />
              );
            })}

            <primitive
              name="roomPinkLight"
              object={(roomPinkLight as any).scene}
              scale={1}
            />

            <OrthographicCamera
              name="Default Camera"
              makeDefault={true}
              zoom={32}
              far={10000}
              near={-5000}
              position={[265, 350, 423]}
              rotation={[10, 40, 0.31]}
              scale={1}
            />

            <pointLight position={[-5, 5, -10]} castShadow intensity={0.6} />
            {/* <spotLight intensity={1} position={[0, 1000, 0]} /> */}

            {/* Light */}
            {/* <ambientLight intensity={0.05} /> */}
            {/* <Environment preset="sunset" /> */}
            <pointLight
              name="LampLight1"
              castShadow
              intensity={0.2}
              distance={205}
              shadow-mapSize-width={1024}
              shadow-mapSize-height={1024}
              shadow-camera-near={100}
              shadow-camera-far={2000}
              color="#ffd000"
              position={[5, 16, -1]}
            />
            {/* <hemisphereLight
              name="Default Ambient Light"
              intensity={0.1}
              color="#e8e8e8"
            /> */}
          </scene>
          <OrbitControls />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default MyRoom;
