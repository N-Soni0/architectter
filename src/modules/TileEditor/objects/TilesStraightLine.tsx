import { getCenter2D, getDistance2D } from '@/utils/math';
import { Html, Line, LineProps } from '@react-three/drei';
import { useEffect, useState } from 'react';

interface TilesLine extends Omit<LineProps, 'points'> {
	startTile: Coordinates<2>;
	endTile: Coordinates<2>;
	showLength?: boolean;
}

const TilesLine: React.FC<TilesLine> = ({
	showLength = false,
	startTile,
	endTile,
	...props
}) => {
	const [centerPosition, setCenterPosition] = useState<Coordinates<2>>({
		x: 0,
		y: 0,
	});

	useEffect(() => {
		const center = getCenter2D(
			{
				x: startTile.x - 0.5,
				y: startTile.y - 0.5,
			},
			{
				x: endTile.x - 0.5,
				y: endTile.y - 0.5,
			}
		);

		setCenterPosition(center);
	}, [startTile, endTile]);

	return (
		<group>
			<Line
				{...props}
				points={[
					[startTile.x - 0.5, startTile.y - 0.5, 0],
					[endTile.x - 0.5, endTile.y - 0.5, 0],
				]}
			/>

			{showLength ? (
				<Html
					as='div'
					position={[centerPosition.x, centerPosition.y, 0]}
				>
					<p className='-translate-x-1/2 -translate-y-1/2 absolute whitespace-nowrap pointer-events-none p-1 rounded-md bg-base-200 bg-opacity-80 text-xs'>
						{(getDistance2D([startTile, endTile]) + 1).toFixed(2)} metres
					</p>
				</Html>
			) : null}
		</group>
	);
};

export default TilesLine;
