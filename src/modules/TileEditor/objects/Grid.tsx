import { Grid as ThreeGrid } from '@react-three/drei';
import { ThreeEvent } from '@react-three/fiber';

interface Props {
	size: number;
	onPointerMove?: (coordinates: Coordinates<2>) => void;
	onClick?: (coordinates: Coordinates<2>) => void;
}

const Grid: React.FC<Props> = ({ size, onClick, onPointerMove }) => {
	const parseTileCoordinates = (e: ThreeEvent<MouseEvent>): Coordinates<2> => {
        const x = Math.trunc(e.point.x) + 1;
        const y = Math.trunc(e.point.y) + 1;

        return { x, y }
    }

	return (
		<>
			<ThreeGrid
				sectionSize={1}
				fadeDistance={2000}
				position={[size / 2, size / 2, 0]}
				args={[size, size]}
				rotation-x={Math.PI / 2}
				cellThickness={0}
				sectionColor={'#000'}
				sectionThickness={1}
			/>

			<mesh 
                position={[size / 2, size / 2, 0]}
                onClick={(e) => onClick && onClick(parseTileCoordinates(e))}
                onPointerMove={(e) => onPointerMove && onPointerMove(parseTileCoordinates(e))}
            >
				<planeGeometry args={[size, size]} />
				<meshBasicMaterial color={'#232323'} />
			</mesh>
		</>
	);
};

export default Grid;
