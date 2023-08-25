import { Canvas } from '@react-three/fiber';
import ViewControls from './ViewControls';
import { PerspectiveCamera } from '@react-three/drei';
import ViewScene from './ViewScene';

interface ModelViewSceneProps {
	floors: FloorDoc[];
}

const ModelViewer: React.FC<ModelViewSceneProps> = ({ floors }) => {
	return (
		<>
			<Canvas>
				<ViewControls />

				<PerspectiveCamera
					makeDefault
					position={[20, 30, 20]}
				/>

				<axesHelper args={[20]} />

				<ViewScene floors={floors} />
			</Canvas>
		</>
	);
};

export default ModelViewer;
