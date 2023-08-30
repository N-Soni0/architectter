import * as THREE from 'three';

const WallMaterial = () => {
  return (
    <meshBasicMaterial color={'#fff'} opacity={.3} transparent depthWrite={false} side={THREE.DoubleSide} />
  )
}

export default WallMaterial