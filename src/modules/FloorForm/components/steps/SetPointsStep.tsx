import { Step } from '@/components/StepForm';
import { TileEditor } from '@/modules/TileEditor';
import { ShapePointConnectionKind } from '@/types/shape';
import { useState } from 'react';
import { useFormStore } from '../../store/formStore';

const SetPointsStep = () => {
	const [points, setPoints] = useState<ShapePoint[]>([]);
	const updateFloorForm = useFormStore(state => state.update)
	const floorFormPoints = useFormStore(state => state.points)

  return (
		<Step
			className='w-full '
			onSubmit={() => {
				updateFloorForm({ points });
			}}
			isValid={points.length >= 3}
		>
			<TileEditor
				initialState={{
					tiles: floorFormPoints?.length ? floorFormPoints.map((point) => ({
						coordinates: point.coordinates,
					})) : undefined,
				}}
				onChange={(tiles) => {
					setPoints(
						tiles.map((tile) => ({
							connection: ShapePointConnectionKind.STRAIGHT,
							coordinates: tile.coordinates,
						}))
					);
				}}
				className='h-[500px] w-4/5 mx-auto'
			/>
		</Step>
	);
};

export default SetPointsStep;
