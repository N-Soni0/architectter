import { FC, useState } from 'react';
import * as THREE from 'three';
import Label from '../components/Label';
import { AnimatePresence } from 'framer-motion';
import { TILE_SIZE } from '../constants';

interface TileProps {
	coordinates: Coordinates<2>;
	tileColor?: string;
	children?: React.ReactNode;
}

const Tile: FC<TileProps> = ({ children, coordinates, tileColor }) => {
	const [isOpened, setIsOpened] = useState(false);

	return (
		<mesh
      name='tile'
			position={[coordinates.x * TILE_SIZE - TILE_SIZE / 2, 0.05, coordinates.y * TILE_SIZE - TILE_SIZE / 2]}
			rotation-x={Math.PI / 2}
			onClick={() => setIsOpened((prev) => !prev)}
		>
			<planeGeometry args={[TILE_SIZE, TILE_SIZE, 10]} />
			<meshBasicMaterial
				color={tileColor}
				side={THREE.DoubleSide}
				transparent
			/>

			<AnimatePresence>{isOpened && <Label>{children}</Label>}</AnimatePresence>
		</mesh>
	);
};

export default Tile;
