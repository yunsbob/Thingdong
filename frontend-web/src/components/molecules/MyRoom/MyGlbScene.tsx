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

  

  // onClick 함수 따로 재사용할 핸들러로 빼고싶다
  return (
    <>
      {/* <color attach="background" args={['#b2c9f0']} /> */}
      <gridHelper/>
      <group {...props} dispose={null}>
        <scene name="Scene">
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
          {/* <primitive
            name="testWall"
            object={(testWall as any).scene}
            position={[0, 0, 0]}
            scale={1}
          /> */}
          {/* <primitive
            name="test22"
            object={(test22 as any).scene}
            position={[0, 0, 0]}
            scale={1}
          /> */}
          <primitive
            name="testGrid"
            object={(testGrid as any).scene}
            position={[0, 0, 0]}
            scale={1}
          />
          {/* <primitive
            name="testBed"
            object={(testBed as any).scene}
            position={[0, 0, 0]}
            scale={1}
          /> */}
          {/* <primitive
            name="basicWall"
            object={(basicWall as any).scene}
            position={[0, 0, 0]}
            scale={1}
          /> */}
          {/* <primitive
              name="chairA"
              object={(chairA as any).scene} 
              position={[0, 0, 0]}
              scale={1}
            /> */}
          {/* <primitive
            //   name="chairB"
            object={(bedA as any).scene}
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            scale={1}
          />
          <primitive
            //   name="chairB"
            object={(bedB as any).scene}
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            scale={1}
          />
          <primitive
            //   name="chairB"
            object={(bedC as any).scene}
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            scale={1}
          /> */}



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
            zoom={32}
            far={10000}
            near={-5000}
            position={[265, 350, 423]}
            rotation={[10, 20, 0.31]}
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
