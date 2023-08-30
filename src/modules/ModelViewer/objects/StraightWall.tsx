import { FC } from 'react';
import * as THREE from 'three';
// @ts-ignore
import { ConvexGeometry } from 'three/examples/jsm/geometries/ConvexGeometry';
import WallMaterial from '../materials/WallMaterial';


interface StraightWallProps {
    height: number;
    start: StraightShapePoint;
    end: ShapePoint;
}
const StraightWall: FC<StraightWallProps> = ({ end, height, start }) => {
    const getGeometry = () => {
        const verticies: THREE.Vector3[] = [
            new THREE.Vector3(start.coordinates.x -.5, 0, start.coordinates.y -.5),
            new THREE.Vector3(start.coordinates.x -.5, height, start.coordinates.y -.5),
            new THREE.Vector3(end.coordinates.x -.5, height, end.coordinates.y -.5),
            new THREE.Vector3(end.coordinates.x -.5, 0, end.coordinates.y -.5)
        ];
 
        return new ConvexGeometry(verticies)
    }

  return (
    <mesh geometry={getGeometry()}>
        <WallMaterial />
    </mesh>
  )
}

export default StraightWall