import React, { Suspense, useState } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import {
  Environment,
  OrbitControls,
  OrthographicCamera,
  useGLTF,
} from '@react-three/drei';
import { Spinner } from '../../molecules/Spinner/Spinner';
import { Position, MyObject, Rotation } from '@/types/room';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import bed_1 from './bed1.glb';
import cabinet_1 from './cabinet1.glb';
import chair_1 from './chair1.glb';
import wall_basic from './wall.glb';

interface MyRoomProps {
  isEditing: boolean;
  position: Position;
  rotation: Rotation;
}

const ROTATION = (Math.PI * 1) / 2;

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

  const tempRotation = rotation;
  const tempMyObject: MyObject[] = [
    {
      name: 'bed1',
      modelId: 1,
      category: 'Furniture',
      position: { x: 0, y: 0, z: 0 },
      source: bed_1,
    },
    {
      name: 'cabinet1',
      modelId: 2,
      category: 'Furniture',
      position: { x: 0, y: 0, z: 1 },
      rotation: { rx: 0, ry: 90, rz: 0 },
      source: cabinet_1,
    },
    {
      name: 'chair1',
      modelId: 3,
      category: 'Furniture',
      position: { x: 1, y: 0, z: 0 },
      rotation: { rx: 0, ry: 180, rz: 0 },
      source: chair_1,
    },
  ];

  // TODO: 모델 불러오는건 DB 통해서
  const bed1 = useLoader(GLTFLoader, bed_1);

  function Bed1(props: JSX.IntrinsicElements['group']) {
    const { scene } = useGLTF(tempMyObject[0].source);
    return <primitive object={scene} {...props} />;
  }

  const cabinet1 = useLoader(GLTFLoader, cabinet_1);
  const chair1 = useLoader(GLTFLoader, chair_1);
  const wall = useLoader(GLTFLoader, wall_basic);
  const [selectedObject, setSelectedObject] = useState('');

  return (
    <div style={{ backgroundColor: 'skyblue', width: '100%', height: '100vh' }}>
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
            {/* <ambientLight intensity={0.5} /> */}
            {/* 객체들 - 사용자의 ObjectLists에서 map으로 뿌릴 예정 */}
            <primitive name="wall" object={(wall as any).scene} scale={1} />
            {/* <primitive
              name="bed1"
              object={(bed1 as any).scene}
              position={[-2, 0, 0]}
              rotation={[0, 0, 0]} //TODO: RotationY(?)로도 회전 가능한지 (가능해보임)
              scale={1}
            /> */}
            <directionalLight
              name="Directional Light"
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
            <Bed1 position={[-1, 0, 1]} rotation={[0, Math.PI / 2, 0]} />
            <primitive
              name="cabinet_1"
              object={(cabinet1 as any).scene}
              position={[0, 0, -3]}
              rotation={[0, 0, 0]}
              scale={1}
            />
            <primitive
              name="chair_1"
              object={(chair1 as any).scene}
              position={[2, 0, -3]}
              rotation={[0, 0, 0]}
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
              intensity={0.2}
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

            {/* <Environment preset="lobby"/> */}
            <hemisphereLight
              name="Default Ambient Light"
              intensity={0.1}
              color="#e8e8e8"
              castShadow
            />
          </scene>
          <OrbitControls />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default MyRoom;
