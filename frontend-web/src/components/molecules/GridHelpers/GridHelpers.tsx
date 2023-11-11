import React from 'react';

const GridHelpers = () => {
  return (
    <>
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
    </>
  );
};

export default GridHelpers;