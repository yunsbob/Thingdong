import React from 'react';
import { ROTATE } from '@/constants/transformations';
const GRID_SCALE = 0.8;
const ADJUST = 4

const GridHelpers = () => {
  return (
    <>
      <gridHelper scale={GRID_SCALE} position={[0, 0, 0]} />
      {/* 왼쪽 벽 */}
      <gridHelper
        position={[-ADJUST, ADJUST, 0]}
        rotation={[0, 0, ROTATE]}
        scale={GRID_SCALE}
      />
      {/* 오른쪽 벽 */}
      <gridHelper
        position={[0, ADJUST, -ADJUST]}
        rotation={[ROTATE, 0, 0]}
        scale={GRID_SCALE}
      />
    </>
  );
};

export default GridHelpers;
