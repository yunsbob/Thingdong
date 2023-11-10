import React, { Suspense, useState } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import {
  Environment,
  OrbitControls,
  OrthographicCamera,
} from '@react-three/drei';
import { Spinner } from '../../molecules/Spinner/Spinner';
import { Position, UserObject, Rotation, MyRoomProps } from '@/types/room';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import bed_1 from './bed1.glb';
import cabinet_1 from './cabinet1.glb';
import chair_1 from './chair1.glb';
import room_pink_light from './room-pink-light.glb';

const MyRoom = ({ isEditing, position, rotation }: MyRoomProps) => {
  const tempMyObject: UserObject[] = [
    {
      name: 'bed1',
      userObjectId: 1,
      objectId: 1,
      objectModelPath: bed_1,
      isWall: false,
      position: [-2, 0, 0],
      rotation: [0, 0, 0],
    },
    {
      name: 'cabinet1',
      userObjectId: 2,
      objectId: 2,
      position: [0, 0, -3],
      rotation: [0, 0, 0],
      objectModelPath: cabinet_1,
    },
    {
      name: 'chair1',
      userObjectId: 3,
      objectId: 3,
      position: [2, 0, 0],
      rotation: [0, 0, 0],
      objectModelPath: chair_1,
    },
  ];

  const roomPinkLight = useLoader(GLTFLoader, room_pink_light);

  type MyObjectProps = {
    objectModelPath: string;
    position: Position;
    rotation: Rotation;
    name: string;
    onClick: (event: any) => void;
  };

  const MyObject = ({
    objectModelPath,
    position,
    rotation,
    name,
    onClick,
  }: MyObjectProps) => {
    const glb = useLoader(GLTFLoader, objectModelPath);
    return (
      <primitive
        name={name}
        object={(glb as any).scene}
        position={position}
        rotation={rotation}
        scale={1}
        onClick={onClick}
      />
    );
  };

  const [selectedObject, setSelectedObject] = useState('');

  return (
    <div style={{ backgroundColor: '#efddad', width: '100%', height: '100vh' }}>
      <Suspense fallback={<Spinner />}>
        <Canvas
          shadows
          linear
          // flat
          style={{
            width: '100%',
            height: isEditing ? '60vh' : '100vh',
          }}
        >
          <scene name="Scene" position={[0, -2, 0]}>
            {tempMyObject.map(obj => (
              <MyObject
                name={obj.name}
                key={obj.userObjectId}
                objectModelPath={obj.objectModelPath}
                position={obj.position}
                rotation={obj.rotation}
                onClick={event => {
                  event.stopPropagation();
                  console.log(event.eventObject.name);
                  // setSelectedObject(event.eventObject.name);
                }}
              />
            ))}

            <primitive
              name="roomPinkLight"
              object={(roomPinkLight as any).scene}
              scale={1}
            />

            {/* 3개의 Light를 사용 */}
            <directionalLight
              name="DirectionalLight1"
              intensity={0.5}
              shadow-mapSize-width={1024}
              shadow-mapSize-height={1024}
              shadow-camera-near={-10000}
              shadow-camera-far={100000}
              shadow-camera-left={-1250}
              shadow-camera-right={1250}
              shadow-camera-top={1250}
              shadow-camera-bottom={-1250}
              color="#ffffff"
              castShadow
              position={[-10, 175, 20]}
            />
            <directionalLight
              name="DirectionalLight2"
              intensity={0.3}
              castShadow
              shadow-mapSize-width={1024}
              shadow-mapSize-height={1024}
              shadow-camera-near={-10000}
              shadow-camera-far={100000}
              shadow-camera-left={-1000}
              shadow-camera-right={1000}
              shadow-camera-top={1000}
              shadow-camera-bottom={-1000}
              color="#e1c7c7"
              position={[0, 20, 0]}
            />
            <directionalLight
              name="DirectionalLight3"
              castShadow
              intensity={0.6}
              shadow-mapSize-width={102}
              shadow-mapSize-height={102}
              shadow-camera-near={-1000}
              shadow-camera-far={10000}
              shadow-camera-left={-35}
              shadow-camera-right={35}
              shadow-camera-top={35}
              shadow-camera-bottom={-35}
              color="#cde5fe"
              position={[-2.4, 3.28, 5.66]}
            />
            {/* LampLight1 : 잠시 꺼둠 */}
            {/* TODO: 램프 인식해서 동일한 위치에 따라다니게 */}
            <pointLight
              name="LampLight1"
              intensity={1}
              distance={205}
              shadow-mapSize-width={1024}
              shadow-mapSize-height={1024}
              shadow-camera-near={100}
              shadow-camera-far={2000}
              color="#ffd000"
              position={[5, 6, -1]}
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

            {/* Light */}
            <ambientLight intensity={0.25} />
            <Environment preset="sunset" />
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
