import React, { Suspense, useState } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import {
  Environment,
  OrbitControls,
  OrthographicCamera,
  PerspectiveCamera,
  useGLTF,
} from '@react-three/drei';
import { Spinner } from '../../molecules/Spinner/Spinner';
import { Position, UserObject, Rotation } from '@/types/room';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import bed_1 from './bed1.glb';
import cabinet_1 from './cabinet1.glb';
import chair_1 from './chair1.glb';
import wall_basic from './wall.glb';
import room_pink_light from './room-pink-light.glb';
// import clock_1 from './chair7.glb';
import clock_1 from './clock2.glb';
import GridHelpers from '@/components/molecules/GridHelpers/GridHelpers';

interface MyRoomProps {
  isEditing: boolean;
  position: Position;
  rotation: Rotation;
}

const MyRoom = ({ isEditing, position, rotation }: MyRoomProps) => {
  // TODO: get으로 user objectLists 불러오기
  // TODO: useMemo사용하기
  // TODO: online sims만든사람 예외처리 방법 참고하기
  // TODO: onClick 함수 따로 재사용할 핸들러로 빼기 OR useRef로 클릭 인식
  // TODO: Canvas 속성 연장하기
  // TODO: OrthographicCamera -> PerspectiveCamera로 옮기기
  // TODO: dispose={null}부분 지워도 괜찮은지
  // TODO: directionalLight 모듈로 빼기
  // <meshStandardMaterial attach="material" color="red" /> 이걸로 바꿔보기
  // TODO: any대신 다른 타입으로 지정해보기
  // TODO: 표준 프로퍼티가 아니라는데... rotationY 다시 한 번 확인해보기

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
  };

  const MyObject = ({
    objectModelPath,
    position,
    rotation,
    name,
  }: MyObjectProps) => {
    const glb = useLoader(GLTFLoader, objectModelPath);
    return (
      <primitive
        name={name}
        object={(glb as any).scene}
        position={position}
        rotation={rotation}
        scale={1}
      />
    );
  };

  const [selectedObject, setSelectedObject] = useState('');

  return (
    <div style={{ backgroundColor: '#6f6fc6', width: '100%', height: '100vh' }}>
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
              />
            ))}
            
            {/* <GridHelpers /> */}

            <primitive
              name="roomPinkLight"
              object={(roomPinkLight as any).scene}
              scale={1}
            />

            {/* 2개의 Light를 사용 */}
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
