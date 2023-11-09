import React, { Suspense, useState } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls, OrthographicCamera } from '@react-three/drei';
import { Spinner } from '../../molecules/Spinner/Spinner';
import { Position, MyObject } from '@/types/room';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import carpet from './carpet-test.glb';
import new_wall from './new-wall.glb';
import clock_1 from './clock1.glb';

interface MyRoomProps {
  isEditing: boolean;
  position: Position;
}

const MyRoom = ({ isEditing, position }: MyRoomProps) => {
  // TODO: get으로 user objectLists 불러오기
  // TODO: useMemo사용하기
  // TODO: online sims만든사람 예외처리 방법 참고하기
  // TODO: onClick 함수 따로 재사용할 핸들러로 빼기 OR useRef로 클릭 인식
  // TODO: Canvas 속성 연장하기
  // TODO: OrthographicCamera -> PerspectiveCamera로 옮기기
  // TODO: dispose={null}부분 지워도 괜찮은지
  // TODO: directionalLight 모듈로 빼기
  // <meshStandardMaterial attach="material" color="red" /> 이걸로 바꿔보기

  const tempMyObject: MyObject[] = [
    {
      name: 'Clock',
      modelId: 1,
      category: 'Wall',
      position: { x: 108.56, y: 89.16, z: -19.97 },
      //rotation
      isClicked: false,
    },
    {
      name: 'Chair',
      modelId: 2,
      category: 'Furniture',
      position: { x: 18.48, y: -25.45, z: 76.47 },
      isClicked: false,
    },
    {
      name: 'Bed Table',
      modelId: 3,
      category: 'Furniture',
      position: { x: 72.66, y: -41.86, z: -0.21 },
    },
    {
      name: 'Lamp',
      modelId: 4,
      category: 'Things',
      position: { x: 74.31, y: 0.99, z: 0.72 },
    },
    {
      name: 'Point Light',
      modelId: 5,
      category: 'Lights',
      position: { x: 73.39, y: 6, z: -1.01 },
    },
  ];

  // TODO: 모델 불러오는건 DB 통해서
  const testCarpet = useLoader(GLTFLoader, carpet);
  const newWall = useLoader(GLTFLoader, new_wall);
  const clock1 = useLoader(GLTFLoader, clock_1);
  const [selectedObject, setSelectedObject] = useState('');

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
          <scene name="Scene" position={[0, -2, 0]}>
            {/* 객체들 - 사용자의 ObjectLists에서 map으로 뿌릴 예정 */}
            <primitive
              name="newWall"
              object={(newWall as any).scene}
              position={[0, -0, 0]}
              rotation={[0, 0, 0]} //TODO: RotationY(?)로도 회전 가능한지 (가능해보임)
              scale={1}
            />
            <primitive
              name="testCarpet"
              object={(testCarpet as any).scene}
              position={[3 * 0.75, 1, 0]}
              rotation={[0, 0, 0]}
              scale={1}
            />
            <primitive
              name="clock1"
              object={(clock1 as any).scene}
              position={[0, 0, 0]}
              rotation={[0, 0, 0]}
              scale={1}
            />
            {/* 2개의 Light를 사용 */}
            <directionalLight
              name="DirectionalLight1"
              intensity={0.7}
              shadow-mapSize-width={1024}
              shadow-mapSize-height={1024}
              shadow-camera-near={-10000}
              shadow-camera-far={100000}
              shadow-camera-left={-1250}
              shadow-camera-right={1250}
              shadow-camera-top={1250}
              shadow-camera-bottom={-1250}
              color="#ffffff"
              position={[20, 75, 20]}
            />
            <directionalLight
              name="DirectionalLight2"
              intensity={0.1}
              shadow-mapSize-width={1024}
              shadow-mapSize-height={1024}
              shadow-camera-near={-10000}
              shadow-camera-far={100000}
              shadow-camera-left={-1000}
              shadow-camera-right={1000}
              shadow-camera-top={1000}
              shadow-camera-bottom={-1000}
              color="#ffffff"
              position={[10, 10, 10]}
            />

            {/* LampLight1 : 잠시 꺼둠 */}
            {/* TODO: 램프 인식해서 동일한 위치에 따라다니게 */}
            <pointLight
              name="LampLight1"
              intensity={0}
              distance={205}
              shadow-mapSize-width={1024}
              shadow-mapSize-height={1024}
              shadow-camera-near={100}
              shadow-camera-far={2000}
              color="#ae00ff"
              position={[5, 6, -1]}
            />

            {/* Camera TODO: Perspective로 바꿔보기*/}
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
            <hemisphereLight
              name="Default Ambient Light"
              intensity={0.8}
              color="#e8e8e8"
            />
          </scene>
          <OrbitControls />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default MyRoom;
