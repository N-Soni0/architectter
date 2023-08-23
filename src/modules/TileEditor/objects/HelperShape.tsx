import React from 'react';
import { IEditShape } from '../types/editShape';
import TilesLine from './TilesLine';

interface HelperShapeProps {
	shape: IEditShape;
}

const HelperShape: React.FC<HelperShapeProps> = ({ shape }) => {
	return (
		<>
			{shape.connect &&
				shape.tiles.map((tile, index, { length: tilesCount }) => {
					if (tilesCount === 1) return;

					const start = tile;
					const end = index + 1 !== tilesCount ? shape.tiles[index + 1] : shape.tiles[0];

					return (
						<TilesLine
							key={start.id + end.id}
							transparent
							opacity={0.3}
							dashed
							dashSize={2}
							dashScale={5}
							lineWidth={3}
							startTile={start.coordinates}
							endTile={end.coordinates}
							color={shape.color ?? '#cccccc'}
						/>
					);
				})}
		</>
	);
};

export default HelperShape;
