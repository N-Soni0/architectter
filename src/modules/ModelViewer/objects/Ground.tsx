import { FC } from 'react';
import * as THREE from 'three';

interface GroundProps {
  shape: FloorDoc['shape'];
}

const Ground: FC<GroundProps> = ({ shape }) => {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} name='ground'>
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
      <meshBasicMaterial color={'#fff'} transparent opacity={.8} side={THREE.DoubleSide} />
    </mesh>
  );
};

export default Ground;
