import { Html } from '@react-three/drei';
import EditGridTile from './EditGridTile';
import { IEditShape } from '../types/editShape';
import TilesLine from './TilesLine';
import { ITile } from '@/types/tile';

interface ShapeProps {
	shape: IEditShape;
	onTileClick?: (tile: ITile) => void;
} 

const Shape: React.FC<ShapeProps> = ({ shape, onTileClick }) => {
	return (
		<group>
            {shape.tiles.map((tile, index) => (
                <EditGridTile 
					onClick={onTileClick} 
					key={tile.id} 
					tile={tile}
				>
					<Html as={'div'} className=''>
						<p className='absolute text-black -translate-x-1/2 -translate-y-1/2 font-bold text-xl pointer-events-none'>{index + 1}</p>
					</Html>
				</EditGridTile>
            ))}

            {shape.connect && shape.tiles.map((tile, index, { length: tilesCount }) => {
                if (tilesCount === 1) return;
                
				const start = tile;
				const end = index + 1 !== tilesCount ? shape.tiles[index + 1] : shape.tiles[0];

				return (
					<TilesLine
						key={start.id + end.id}
						showLength={true}
						startTile={start.coordinates}
						endTile={end.coordinates}
						color={shape.color ?? '#661ae6'}
						lineWidth={5}
					/>
				);
			})}
		</group>
	);
};

export default Shape;
