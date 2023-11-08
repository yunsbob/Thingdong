import useSpline from '@splinetool/r3f-spline';
import { OrthographicCamera } from '@react-three/drei';
import { useState } from 'react';
import { MyObject } from '@/types/room';

// TODO: Scene 초기 세팅이 이곳에서 이루어진다
// 빠른 로딩을 위해 index로 가야할지도?
// 객체별로 쪼개고싶은데 일단 보류

export default function MySecondScene({ ...props }) {
  const [selectedObject, setSelectedObject] = useState('');

  const { nodes, materials } = useSpline(
    'https://prod.spline.design/gJWUITi2jnEkj3K8/scene.splinecode'
  );
  return (
    <>
      {/* <color attach="background" args={['#b2c9f0']} /> */}
      <group {...props} dispose={null}>
        <scene name="Scene">
          <directionalLight
            name="Directional Light 2"
            intensity={0.3}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-near={-10000}
            shadow-camera-far={100000}
            shadow-camera-left={-1250}
            shadow-camera-right={1250}
            shadow-camera-top={1250}
            shadow-camera-bottom={-1250}
            color="#8ec1fe"
            position={[530.26, 187.64, 274.71]}
          />
          <directionalLight
            name="Directional Light"
            castShadow
            intensity={0.6}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-near={-10000}
            shadow-camera-far={100000}
            shadow-camera-left={-350}
            shadow-camera-right={350}
            shadow-camera-top={350}
            shadow-camera-bottom={-350}
            color="#cde5fe"
            position={[-280.4, 372.28, 569.66]}
          />
          {/* onClick 함수 따로 재사용할 핸들러로 빼고싶다 */}

          {/* Clock */}
          <group
            name="Clock"
            position={[108.56, 89.16, -19.97]}
            onClick={event => {
              event.stopPropagation();
              console.log(event.eventObject.name);
            }}
          >
            <mesh
              name="Cylinder 19"
              geometry={nodes['Cylinder 19'].geometry}
              material={materials['Cylinder 19 Material']}
              castShadow
              receiveShadow
              position={[5.91, 0.43, 1.5]}
              rotation={[0, -0.02, -1.45]}
              scale={0.09}
            />
            <mesh
              name="Cylinder 20"
              geometry={nodes['Cylinder 20'].geometry}
              material={materials['Cylinder 20 Material']}
              castShadow
              receiveShadow
              position={[-0.14, 1.15, 1.39]}
              rotation={[0, -0.02, 0]}
              scale={0.03}
            />
            <mesh
              name="Cylinder 18"
              geometry={nodes['Cylinder 18'].geometry}
              material={materials['Cylinder 18 Material']}
              castShadow
              receiveShadow
              position={[-0.14, 5.39, 1.39]}
              rotation={[0, -0.02, 0]}
              scale={0.09}
            />
            <mesh
              name="Cylinder 17"
              geometry={nodes['Cylinder 17'].geometry}
              material={materials['Cylinder 17 Material']}
              castShadow
              receiveShadow
              position={[0, 0, -0.41]}
              rotation={[1.57, 0, 0.02]}
            />
          </group>
          {/* Chair */}
          <group
            name="Chair"
            position={[18.48, -25.45, 76.47]}
            onClick={event => {
              event.stopPropagation();
              console.log(event.eventObject.name);
            }}
          >
            <mesh
              name="Cylinder 16"
              geometry={nodes['Cylinder 16'].geometry}
              material={materials['Chair Base']}
              castShadow
              receiveShadow
              position={[-20.37, -32.87, -0.85]}
              rotation={[Math.PI, -1.26, -Math.PI / 2]}
              scale={[0.78, 0.17, 0.78]}
            />
            <mesh
              name="Cylinder 15"
              geometry={nodes['Cylinder 15'].geometry}
              material={materials['Chair Base']}
              castShadow
              receiveShadow
              position={[20.68, -34.71, -0.82]}
              rotation={[0, -0.84, Math.PI / 2]}
              scale={[0.78, 0.17, 0.78]}
            />
            <mesh
              name="Cylinder 14"
              geometry={nodes['Cylinder 14'].geometry}
              material={materials['Chair Base']}
              castShadow
              receiveShadow
              position={[0.6, -34.71, -20.16]}
              rotation={[0, -0.02, Math.PI / 2]}
              scale={[0.78, 0.17, 0.78]}
            />
            <mesh
              name="Cylinder 13"
              geometry={nodes['Cylinder 13'].geometry}
              material={materials['Chair Base']}
              castShadow
              receiveShadow
              position={[-0.1, -34.71, 19.84]}
              rotation={[0, -Math.PI / 9, Math.PI / 2]}
              scale={[0.78, 0.17, 0.78]}
            />
            <mesh
              name="Cube 54"
              geometry={nodes['Cube 54'].geometry}
              material={materials['Chair Base']}
              castShadow
              receiveShadow
              position={[-16.75, -30.59, -0.17]}
              rotation={[-Math.PI / 2, 0, 3.12]}
              scale={[0.05, 0.28, 0.36]}
            />
            <mesh
              name="Cube 53"
              geometry={nodes['Cube 53'].geometry}
              material={materials['Chair Base']}
              castShadow
              receiveShadow
              position={[17.24, -30.59, 0.42]}
              rotation={[-Math.PI / 2, 0, 3.12]}
              scale={[0.05, 0.28, 0.36]}
            />
            <mesh
              name="Cube 52"
              geometry={nodes['Cube 52'].geometry}
              material={materials['Chair Base']}
              castShadow
              receiveShadow
              position={[0.24, -27.52, -0.15]}
              rotation={[-Math.PI / 2, 0, 3.12]}
              scale={[0.36, 0.37, 0.36]}
            />
            <mesh
              name="Cube 56"
              geometry={nodes['Cube 56'].geometry}
              material={materials['Chair Base']}
              castShadow
              receiveShadow
              position={[0.52, -30.19, -16.38]}
              rotation={[-Math.PI / 2, 0, 1.55]}
              scale={[0.36, 0.28, 0.36]}
            />
            <mesh
              name="Cube 55"
              geometry={nodes['Cube 55'].geometry}
              material={materials['Chair Base']}
              castShadow
              receiveShadow
              position={[-0.06, -30.19, 16.68]}
              rotation={[-Math.PI / 2, 0, 1.55]}
              scale={[0.36, 0.28, 0.36]}
            />
            <mesh
              name="Cube 51"
              geometry={nodes['Cube 51'].geometry}
              material={materials['Chair Base']}
              castShadow
              receiveShadow
              position={[0.23, -27.52, 0.13]}
              rotation={[-Math.PI / 2, 0, 1.55]}
              scale={[0.36, 0.28, 0.36]}
            />
            <mesh
              name="Cylinder 12"
              geometry={nodes['Cylinder 12'].geometry}
              material={materials['Cylinder 12 Material']}
              castShadow
              receiveShadow
              position={[0.07, -17.28, -0.22]}
              rotation={[0, -0.02, Math.PI]}
              scale={[0.13, 0.22, 0.13]}
            />
            <mesh
              name="Cube 50"
              geometry={nodes['Cube 50'].geometry}
              material={materials.Chair}
              castShadow
              receiveShadow
              position={[-0.15, -4.73, -0.21]}
              rotation={[-Math.PI / 2, 0, 1.55]}
              scale={[1.37, 1.37, 0.62]}
            />
            <mesh
              name="Cube 49"
              geometry={nodes['Cube 49'].geometry}
              material={materials['Cube 49 Material']}
              castShadow
              receiveShadow
              position={[-1.07, 7.13, -19.31]}
              rotation={[0, 1.55, 0]}
            />
            <mesh
              name="Cube 48"
              geometry={nodes['Cube 48'].geometry}
              material={materials.Chair}
              castShadow
              receiveShadow
              position={[-1.08, 26.9, -18.31]}
              rotation={[0, 1.55, 0]}
            />
          </group>
          {/* Bed Table */}
          <group
            name="Bed Table"
            position={[72.66, -41.86, -0.21]}
            onClick={event => {
              event.stopPropagation();
              console.log(event.eventObject.name);
              setSelectedObject(event.eventObject.name);
            }}
          >
            <mesh
              name="Sphere 2"
              geometry={nodes['Sphere 2'].geometry}
              material={materials['Sphere 2 Material']}
              castShadow
              receiveShadow
              position={[-0.11, -10.35, 19.72]}
              rotation={[0, -0.02, 0]}
              scale={0.23}
            />
            <mesh
              name="Sphere"
              geometry={nodes.Sphere.geometry}
              material={materials['Sphere Material']}
              castShadow
              receiveShadow
              position={[-0.11, 8.24, 19.72]}
              rotation={[0, -0.02, 0]}
              scale={0.23}
            />
            <mesh
              name="Cube 61"
              geometry={nodes['Cube 61'].geometry}
              material={materials['Cube 61 Material']}
              castShadow
              receiveShadow
              position={[-0.24, -9.89, 12.89]}
              rotation={[0, -0.02, 0]}
              scale={[0.84, 0.34, 0.25]}
            />
            <mesh
              name="Cube 60"
              geometry={nodes['Cube 60'].geometry}
              material={materials['Cube 60 Material']}
              castShadow
              receiveShadow
              position={[-0.24, 8.92, 12.89]}
              rotation={[0, -0.02, 0]}
              scale={[0.84, 0.34, 0.25]}
            />
            <mesh
              name="Cube 59"
              geometry={nodes['Cube 59'].geometry}
              material={materials['Cube 59 Material']}
              castShadow
              receiveShadow
              position={[0, 0, -1.14]}
              rotation={[0, -0.02, 0]}
            />
          </group>
          {/* Lamp */}
          <group name="Lamp" position={[74.31, 0.99, 0.72]} onClick={event => {
              event.stopPropagation();
              console.log(event.eventObject.name);
              setSelectedObject(event.eventObject.name);
            }}>
            <mesh
              name="Cylinder 22"
              geometry={nodes['Cylinder 22'].geometry}
              material={materials['Cylinder 22 Material']}
              castShadow
              receiveShadow
              position={[0, -10.13, 0]}
              rotation={[-Math.PI, Math.PI / 2, 0]}
              scale={0.76}
            />
            <mesh
              name="Cylinder 21"
              geometry={nodes['Cylinder 21'].geometry}
              material={materials['Cylinder 21 Material']}
              castShadow
              receiveShadow
              position={[0, 11.8, 0]}
              rotation={[-Math.PI, Math.PI / 2, 0]}
              scale={0.98}
            />
          </group>
          {/* Light on Lamp */}
          <pointLight
            name="Point Light 2"
            intensity={1.88}
            distance={205}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-near={100}
            shadow-camera-far={2000}
            color="#fed500"
            position={[73.39, 6, -1.01]}
          />
          {/* Walls */}
          <group name="Walls" position={[52.9, 40.95, 93.04]}>
            <mesh
              name="Cube 79"
              geometry={nodes['Cube 79'].geometry}
              material={materials.Concrete}
              castShadow
              receiveShadow
              position={[-102.18, 48.97, -88.08]}
              rotation={[1.54, 1.05, -1.54]}
              scale={1}
            />
            <mesh
              name="Cube 80"
              geometry={nodes['Cube 80'].geometry}
              material={materials.Concrete}
              castShadow
              receiveShadow
              position={[-74.96, 99.14, 6.53]}
              rotation={[1.54, 1.05, -3.11]}
              scale={1}
            />
            <mesh
              name="Cube 78"
              geometry={nodes['Cube 78'].geometry}
              material={materials.Concrete}
              castShadow
              receiveShadow
              position={[-105.32, 49.01, 86.42]}
              rotation={[1.54, 1.05, -1.54]}
              scale={1}
            />
            <mesh
              name="Cube 77"
              geometry={nodes['Cube 77'].geometry}
              material={materials.Concrete}
              castShadow
              receiveShadow
              position={[-139.31, -71.16, -9.04]}
              rotation={[0, 1.55, 0]}
            />
            <mesh
              name="Shape"
              geometry={nodes.Shape.geometry}
              material={materials.Concrete}
              castShadow
              receiveShadow
              position={[135.82, -105.6, -130.96]}
              rotation={[0, -0.02, 0]}
              scale={1}
            />
            <mesh
              name="Wall"
              geometry={nodes.Wall.geometry}
              material={materials.Wall}
              castShadow
              receiveShadow
              position={[135.5, -105.6, -114.31]}
              rotation={[0, -0.02, 0]}
              scale={1}
            />
            <mesh
              name="Cube 5"
              geometry={nodes['Cube 5'].geometry}
              material={materials.Wall}
              castShadow
              receiveShadow
              position={[-68.8, 101.1, 13.19]}
              rotation={[1.54, 1.05, 0.03]}
              scale={1}
            />
            <mesh
              name="Cube 4"
              geometry={nodes['Cube 4'].geometry}
              material={materials.Wall}
              castShadow
              receiveShadow
              position={[-97.09, 49.1, -80.4]}
              rotation={[1.54, 1.05, -1.54]}
            />
            <mesh
              name="Cube 3"
              geometry={nodes['Cube 3'].geometry}
              material={materials.Wall}
              castShadow
              receiveShadow
              position={[-100.45, 48.2, 87.31]}
              rotation={[1.54, 1.05, -1.54]}
            />
            <mesh
              name="Cube 7"
              geometry={nodes['Cube 7'].geometry}
              material={materials.Wall}
              castShadow
              receiveShadow
              position={[-95.78, -61.45, -118.4]}
              rotation={[0, -0.02, 0]}
              scale={[1, 1, 0.64]}
            />
            <mesh
              name="Cube"
              geometry={nodes.Cube.geometry}
              material={materials.Wall}
              castShadow
              receiveShadow
              position={[-133.77, -61.45, -0.44]}
              rotation={[0, 1.55, 0]}
            />
          </group>
          {/* Floor */}
          <group name="Floor" position={[52.4, -67.18, 95.72]}>
            <mesh
              name="Floor Surface"
              geometry={nodes['Floor Surface'].geometry}
              material={materials.Floor}
              castShadow
              receiveShadow
              position={[0, 2.02, 0]}
              rotation={[-1.58, 0, 1.56]}
              scale={[1, 1.15, 1]}
            />
            <mesh
              name="Wood"
              geometry={nodes.Wood.geometry}
              material={materials['Wood Material']}
              castShadow
              receiveShadow
              position={[0, -0.42, 0]}
              rotation={[-1.58, 0, 1.56]}
              scale={[1, 1.15, 1]}
            />
            <mesh
              name="Concrete"
              geometry={nodes.Concrete.geometry}
              material={materials.Concrete}
              castShadow
              receiveShadow
              position={[0, -12.17, 0]}
              rotation={[-1.58, 0, 1.56]}
              scale={[1, 1.15, 1]}
            />
          </group>
          {/* Camera */}
          <OrthographicCamera
            name="Default Camera"
            makeDefault={true}
            zoom={1.51}
            far={100000}
            near={-50000}
            position={[565.14, 375.08, 723.2]}
            rotation={[-0.52, 0.6, 0.31]}
            scale={1}
          />
          {/* Light */}
          <hemisphereLight
            name="Default Ambient Light"
            intensity={0.75}
            color="#eaeaea"
          />
        </scene>
      </group>
    </>
  );
}
