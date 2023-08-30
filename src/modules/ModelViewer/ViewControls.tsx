import { OrbitControls } from '@react-three/drei'
import { useThree } from '@react-three/fiber';
import { useRef } from 'react'

const ViewControls = () => {
  // @ts-ignore
  const orbitControlsRef = useRef<OrbitControls>();
  const { camera, gl } = useThree()


  return (
    <OrbitControls
        args={[camera, gl.domElement]}
        ref={orbitControlsRef}
        enableDamping
        dampingFactor={0.2}
        rotateSpeed={0.5}
        maxDistance={2000}
        minDistance={0}
    />
  )
}

export default ViewControls