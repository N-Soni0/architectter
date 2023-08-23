import { OrbitControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { TOUCH } from 'three'
import { useIsHovered } from './hooks/useIsHovered'

interface ControlsProps {
    enablePointerControls?: boolean; 
}

const Controls: React.FC<ControlsProps> = ({ enablePointerControls = false }) => {
    const isHovered = useIsHovered('#edit-canvas')
    // @ts-ignore
    const orbitControlsRef = useRef<OrbitControls>();

    useFrame((state) => {
        if (!isHovered || !enablePointerControls) return;

        const { camera } = state         
        const orbitControls = orbitControlsRef.current;
        
        const MOVE_START = .75;
        const MOVE_SPEED = 50;

        const mouseX = state.pointer.x;
        const mouseY = state.pointer.y;

        if (Math.abs(mouseX) > MOVE_START) {
            orbitControls.target.x += mouseX * (MOVE_SPEED / 100) * camera.position.z / 15
            camera.position.x += mouseX * (MOVE_SPEED / 100) * camera.position.z / 15
        } 

        if (Math.abs(mouseY) > MOVE_START) {
            orbitControls.target.y += mouseY * (MOVE_SPEED / 100) * camera.position.z / 15
            camera.position.y += mouseY * (MOVE_SPEED / 100) * camera.position.z / 15
        } 
    })

    return (
        <OrbitControls
            ref={orbitControlsRef} 
            enableRotate={false}
            enablePan={true}
            minDistance={3}
            maxDistance={15}
            touches={{
                ONE: TOUCH.PAN,
                TWO: TOUCH.DOLLY_ROTATE
            }}
        />
    )
}

export default Controls