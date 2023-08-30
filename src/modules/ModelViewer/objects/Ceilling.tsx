import { FC } from 'react';
import * as THREE from 'three';

interface CeilingProps {
    shape: FloorDoc['shape'];
    floorHeight: number;
}

const Ceiling: FC<CeilingProps> = ({ shape, floorHeight }) => {
  return (
    <mesh position={[0, floorHeight, 0]} rotation={[-Math.PI / 2, 0, 0]} name='ceiling'>
      <shapeGeometry
        args={[
          new THREE.Shape([
            ...shape.map(
              (point) =>
                new THREE.Vector2(
                  point.coordinates.x - .5,
                  point.coordinates.y * -1 + .5
                )
            ),
          ]),
        ]}
      />
      <meshBasicMaterial color={'#fff'} transparent side={THREE.DoubleSide} />
    </mesh>
  )
}

export default Ceiling