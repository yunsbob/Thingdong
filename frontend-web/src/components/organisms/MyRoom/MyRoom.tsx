import React, { Suspense, useEffect, useMemo, useState } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls, OrthographicCamera, useGLTF } from '@react-three/drei';
import { Spinner } from '../../molecules/Spinner/Spinner';
import { MyRoomProps, RoomStyle } from '@/types/room';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { SkeletonUtils } from 'three-stdlib';
import { Mesh } from 'three';
import GridHelpers from '@/components/molecules/GridHelpers/GridHelpers';
import { useAtom } from 'jotai';
import { roomColorAtom } from '@/states/roomState';
import StarField from '../StarField/StarField';
import { DARKMODE, ROOMSTYLES } from '@/constants/roomStyles';
import { MODELS } from '@/constants/models';
import * as THREE from 'three';

import curtainClose from '@/assets/models/curtains/curtain-close1.glb';
import curtainOpen from '@/assets/models/curtains/curtain-open1.glb';

const MyRoom = ({
  isEditing,
  userObject,
  thingsObject,
  onObjectClick,
  selectedRoomColor,
  darkMode,
}: MyRoomProps) => {
  const [roomColorState] = useAtom(roomColorAtom);

  if (!selectedRoomColor) {
    return <div>Loading...</div>; // 혹은 다른 기본 상태 렌더링
  }
  const { scene } = useGLTF(selectedRoomColor);

  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);
  useEffect(() => {
    clone.traverse(child => {
      if ((child as Mesh).isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [clone]);

  // const CurtainOpenedGlb = useLoader(GLTFLoader, MODELS.CURTAIN_OPEN);
  // const CurtainClosedGlb = useLoader(GLTFLoader, MODELS.CURTAIN_CLOSE);

  const currentStyle = darkMode ? DARKMODE : ROOMSTYLES[roomColorState];
  return (
    <div
      style={{
        backgroundColor: currentStyle.outerBackgroundColor,
        width: '100%',
        height: '100vh',
      }}
    >
      {darkMode && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        >
          <StarField />
        </div>
      )}
      <div
        style={{
          background: currentStyle.innerBackground,
          width: '100%',
          height: '100vh',
        }}
      >
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
              {/* <GridHelpers /> */}
              <directionalLight
                position={[5, 5, 5]}
                intensity={darkMode ? 0.1 : 1}
                castShadow
                shadow-mapSize-width={2048}
                shadow-mapSize-height={2048}
                shadow-camera-near={0.5}
                shadow-camera-far={500}
              />

              {userObject ? (
                userObject.map(obj => {
                  console.log('userObject', obj);
                  //TODO: obj의 objectModalPath에 unbox가 들어있으면 height 계산해서 위치 조정

                  const glb = useLoader(GLTFLoader, obj.objectModelPath);
                  glb.scene.traverse(node => {
                    console.log('node', node);
                    if (node.type === 'Mesh') {
                      if (
                        obj.objectModelPath.includes('unbox') &&
                        node instanceof THREE.Mesh
                      ) {
                        node.material.metalness = 0;
                        console.log('node material', node.material);
                      }
                      node.castShadow = true;
                      node.receiveShadow = true;
                    }
                  });

                  return (
                    <primitive
                      key={obj.userObjectId}
                      object={glb.scene}
                      name={obj.name}
                      position={
                        obj.isWall
                          ? [
                              obj.position[0] - 0.2,
                              obj.position[1],
                              obj.position[2] - 0.2,
                            ]
                          : obj.position
                      }
                      rotation={obj.rotation}
                      scale={obj.isWall ? 1.05 : 1}
                      onClick={(e: any) => {
                        e.stopPropagation();
                        onObjectClick(obj);
                      }}
                    />
                  );
                })
              ) : (
                <></>
              )}

              {thingsObject ? (
                thingsObject.map(obj => {
                  let modelPath = obj.objectModelPath;
                  if (obj.name.includes('curtain')) {
                    modelPath = obj.smartThingsStatus
                      ? curtainOpen
                      : curtainClose;
                  }
                  const glb = useLoader(GLTFLoader, modelPath);

                  glb.scene.traverse((node: any) => {
                    if (node.type === 'Mesh') {
                      node.castShadow = true;
                      node.receiveShadow = true;
                    }
                  });

                  return (
                    <React.Fragment key={obj.name}>
                      <primitive
                        object={glb.scene}
                        name={obj.name}
                        position={[
                          obj.position[0] - 0.2,
                          obj.position[1],
                          obj.position[2] - 0.2,
                        ]}
                        rotation={obj.rotation}
                        scale={obj.name.includes('curtain') ? 1.05 : 1}
                        onClick={(e: any) => {
                          e.stopPropagation();
                          onObjectClick(obj);
                        }}
                      />

                      {obj.name.includes('lamp') && obj.smartThingsStatus && (
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
                        </>
                      )}
                    </React.Fragment>
                  );
                })
              ) : (
                <></>
              )}

              {/* 화면 중앙에 객체들 배치되게 scale, position 조정 */}
              <primitive
                name="room"
                object={clone}
                scale={1.05}
                position={[-0.2, 0, -0.2]}
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
    </div>
  );
};

export default MyRoom;
