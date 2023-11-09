import { OrthographicCamera } from '@react-three/drei';
import { useState } from 'react';
import wall from './wall.glb';
import test_Wall from './test-room2.glb';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from '@react-three/fiber';
import CameraLogger from '@/components/molecules/CameraLogger/CameraLogger';
import chair_A from './armChair.glb';
import chair_B from './chair.glb';
import bed_A from './bed1.glb';
import bed_B from './test.glb';
import bed_C from './bed3.glb';
import test_Bed from './test-bed.glb';
import test_22 from './test22.glb';
import test_grid from './test-wall-ref.glb';
import carpet from './carpet-test.glb';
import new_wall from './new-wall.glb';
import clock_1 from './clock1.glb';
import { MyObject } from '@/types/room';

export default function MyGlbScene({ ...props }) {
  const [selectedObject, setSelectedObject] = useState('');
  const basicWall = useLoader(GLTFLoader, wall);
  const testWall = useLoader(GLTFLoader, test_Wall);
  const chairA = useLoader(GLTFLoader, chair_A);
  const chairB = useLoader(GLTFLoader, chair_B);
  const bedA = useLoader(GLTFLoader, bed_A);
  const bedB = useLoader(GLTFLoader, bed_B);
  const bedC = useLoader(GLTFLoader, bed_C);
  const testBed = useLoader(GLTFLoader, test_Bed);
  const test22 = useLoader(GLTFLoader, test_22);
  const testGrid = useLoader(GLTFLoader, test_grid);
  const testCarpet = useLoader(GLTFLoader, carpet);
  const newWall = useLoader(GLTFLoader, new_wall);
  const wall1 = useLoader(GLTFLoader, new_wall);
  const clock1 = useLoader(GLTFLoader, clock_1);

  // 여기서 get 하자 !
  // useMemo
  // online sims만든사람 쏙쏙빼먹기

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

  //useRef로 클릭인식

  // onClick 함수 따로 재사용할 핸들러로 빼고싶다
  return (
    <>
      {/* <color attach="background" args={['#b2c9f0']} /> */}

      <group {...props} dispose={null}>
        <scene name="Scene" position={[0, -2, 0]}>
          <gridHelper scale={0.75} position={[0.2, 0, 0.2]} />
          <gridHelper
            position={[-3.59, 3.76, 0.2]}
            rotation={[0, 0, Math.PI / 2]}
            scale={0.75}
          />
          <gridHelper
            position={[0.2, 3.76, -3.5]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.75}
          />
          <directionalLight
            name="Directional Light 2"
            intensity={0.4}
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
          <primitive
            name="newWall"
            object={(newWall as any).scene}
            position={[0, -0, 0]}
            rotation={[0, 0, 0]}
            scale={1}
          />
          <primitive
            name="testCarpet"
            object={(testCarpet as any).scene}
            position={[3*0.75, 0, 0]}
            rotation={[0, (Math.PI * 1) / 2, 0]}
            scale={1}
          />
          <primitive
            name="clock1"
            object={(clock1 as any).scene}
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            scale={1}
          />

          {/* Light on Lamp : 잠시 꺼둠*/}
          <pointLight
            name="Point Light 2"
            intensity={1}
            distance={205}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-near={100}
            shadow-camera-far={2000}
            color="#eeead8"
            position={[73.39, 6, -1.01]}
          />

          {/* Camera */}
          <OrthographicCamera
            name="Default Camera"
            makeDefault={true}
            zoom={23}
            far={10000}
            near={-5000}
            position={[265, 350, 423]}
            rotation={[10, 40, 0.31]}
            scale={1}
          />
          {/* Light */}
          <hemisphereLight
            name="Default Ambient Light"
            intensity={0.75}
            color="#e8e8e8"
          />
        </scene>
      </group>
    </>
  );
}
