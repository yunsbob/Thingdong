import React from 'react';
import Spline from '@splinetool/react-spline';

export default function MyRoomScene({ isEditing }) {
  return (
    <Spline style={{ height: isEditing ? '60vh' : '100vh' }} scene="https://prod.spline.design/gJWUITi2jnEkj3K8/scene.splinecode" />
  );
}