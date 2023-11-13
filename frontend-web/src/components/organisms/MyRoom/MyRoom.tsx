import React, { Suspense, useEffect, useMemo, useState } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import {
  Environment,
  OrbitControls,
  OrthographicCamera,
  useGLTF,
} from '@react-three/drei';
import { Spinner } from '../../molecules/Spinner/Spinner';
import { MyRoomProps } from '@/types/room';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { SkeletonUtils } from 'three-stdlib';
import room_pink_light from './room-pink-light.glb';
import { GridHelper, Mesh } from 'three';
import GridHelpers from '@/components/molecules/GridHelpers/GridHelpers';

const MyRoom = ({
  isEditing,
  userObject,
  thingsObject,
  onObjectClick,
  selectedRoomColor,
}: MyRoomProps) => {

  console.log(selectedRoomColor);
  
  // const testObject = useLoader(GLTFLoader, "https://thingdong.com/resources/glb/furniture/bed1.glb");

  // (testObject as any).scene.traverse((node: any) => {
  //   // console.log(node.type);
  //   if (node.type === 'Mesh') {
  //     node.castShadow = true;
  //     node.receiveShadow = true;
  //   }
  // });

  const loadedObjects = useMemo(() => {
    return userObject.map(obj => {
      const glb = useLoader(GLTFLoader, obj.objectModelPath);
      glb.scene.traverse(node => {
        if ((node as Mesh).isMesh) {
          node.castShadow = true;
          node.receiveShadow = true;
        }
      });
      return { ...obj, glb: glb.scene };
    });
  }, [userObject]); // userObject 배열이 변경될 때만 이 코드 블록 실행

  const { scene } = useGLTF(`/models/rooms/room-${selectedRoomColor}.glb`);
  if (!scene) {
    // scene이 로드되지 않았거나 유효하지 않은 경우 처리
    return <div>Loading...</div>;
  }
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);
  useEffect(() => {
    clone.traverse(child => {
      if ((child as Mesh).isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [clone]);
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
            {/* <GridHelpers/> */}
            <directionalLight
              position={[5, 5, 5]}
              intensity={1}
              castShadow
              shadow-mapSize-width={2048} // Higher values give better shadow resolution
              shadow-mapSize-height={2048}
              shadow-camera-near={0.5}
              shadow-camera-far={500}
            />

            {loadedObjects ? (loadedObjects.map(obj => {
              const glb = useLoader(GLTFLoader, obj.objectModelPath);

              glb.scene.traverse(node => {
                // console.log(node.type);
                if (node.type === 'Mesh') {
                  node.castShadow = true;
                  node.receiveShadow = true;
                }
              });

              return (
                <primitive
                  key={obj.userObjectId}
                  object={glb.scene}
                  name={obj.name}
                  position={obj.position}
                  rotation={obj.rotation}
                  scale={1}
                  onClick={(e: any) => {
                    e.stopPropagation();
                    onObjectClick(obj.name);
                  }}
                />
              );
            })
          ) : (<></>)}
            {thingsObject.map(obj => {
              const glb = useLoader(GLTFLoader, obj.objectModelPath);

              glb.scene.traverse(node => {
                if (node.type === 'Mesh') {
                  node.castShadow = true;
                  node.receiveShadow = true;
                }
              });

              const [isShining, setIsShining] = useState(false);

              return (
                <React.Fragment key={obj.name}>
                  <primitive
                    object={glb.scene}
                    name={obj.name}
                    position={obj.position}
                    rotation={obj.rotation}
                    scale={1}
                    onClick={(e: any) => {
                      e.stopPropagation();
                      if (obj.name.includes('lamp') && !isEditing) {
                        setIsShining(!isShining);
                      }
                      onObjectClick(obj.name);
                    }}
                  />
                  {obj.name.includes('lamp') && isShining && (
                    <>
                      <pointLight
                        position={[
                          obj.position[0],
                          obj.position[1] + 3,
                          obj.position[2],
                        ]}
                        color="#ffd000"
                        castShadow
                        distance={5}
                        intensity={100}
                        power={100}
                      />
                      {/* <pointLight
                        name="Point Light 3"
                        intensity={1.5}
                        distance={20}
                        shadow-mapSize-width={1024}
                        shadow-mapSize-height={1024}
                        shadow-camera-near={100}
                        shadow-camera-far={2000}
                        color="#fed500"
                        position={[
                          obj.position[0],
                          obj.position[1] + 3,
                          obj.position[2],
                        ]}
                      /> */}
                    </>
                  )}
                </React.Fragment>
              );
            })}

            <primitive name="roomPinkLight" object={clone} scale={1} />

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
