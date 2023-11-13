import React, { Suspense, useEffect, useMemo, useState } from 'react';
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
import { GridHelper, Mesh } from 'three';

// TODO: selectedRoomColor 받아오기
const FriendRoom = ({
  userObject,
  thingsObject,
  selectedRoomColor,
}: MyRoomProps) => {
  const { scene } = useGLTF(`/models/rooms/room-${selectedRoomColor}.glb`);
};

export default FriendRoom;