import React from 'react';
import Wall from './Wall';
import Ground from './Ground';
import Ceiling from './Ceilling';

interface FloorProps {
	floor: FloorDoc;
	groundOffset?: number;
}

const Floor: React.FC<FloorProps> = ({ floor, groundOffset }) => {
	return (
		<group
			name='floor'
			position={[0, groundOffset ?? 0, 0]}
		>
			<Ceiling
				shape={floor.shape}
				floorHeight={floor.height}
			/>

			{/* Render Walls */}
			{floor.shape.map((point, index) => {
				const nextPoint = floor.shape[index + 1] || floor.shape[0];
				return (
					<Wall
						key={index}
						start={point}
						end={nextPoint}
						height={floor.height}
					/>
				);
			})}

			<Ground shape={floor.shape} />
		</group>
	);
};

export default Floor;
