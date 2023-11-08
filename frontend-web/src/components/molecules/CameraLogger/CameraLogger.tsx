import React, { useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import * as THREE from 'three';

const CameraLogger = () => {
  const { camera } = useThree();

  useEffect(() => {
    const orthoCamera = camera as THREE.OrthographicCamera;

    const onChange = () => {
      console.log('Camera Position:', orthoCamera.position);
      console.log('Camera Rotation:', orthoCamera.rotation);
    };

    if (orthoCamera.addEventListener) {
      orthoCamera.addEventListener('change', onChange);
    }

    return () => {
      if (orthoCamera.removeEventListener) {
        orthoCamera.removeEventListener('change', onChange);
      }
    };
  }, [camera]); 

  return null; 
};

export default CameraLogger;
