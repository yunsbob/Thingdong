import useSpline from '@splinetool/r3f-spline';

interface ChairProps {
  x: number;
  y: number;
  z: number;
}

export default function Chair({ x, y, z }: ChairProps) {
  const { nodes, materials } = useSpline(
    'https://prod.spline.design/XNOJwEXXivjk6AJd/scene.splinecode'
  );
  //135.86, -25.45, 86.74

  return (
    <group
      name="Chair"
      position={[x, y, z]}
      rotation={[-Math.PI, 0.09, -Math.PI]}
      scale={1}
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
  );
}
