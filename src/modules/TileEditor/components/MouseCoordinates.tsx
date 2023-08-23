import { useMousePositionStore } from "../store/mousePositionStore";

interface MouseCoordinatesProps {
}

const MouseCoordinates: React.FC<MouseCoordinatesProps> = ({ }) => {
    const mousePosition = useMousePositionStore(state => state.position);

	return (
		<div className='absolute top-3 left-3 p-2 flex gap-3 bg-base-100 rounded-md z-50 shadow-lg'>
			<p className='flex justify-center text-lg bg-base-200 px-2 py-1 min-w-[75px] rounded-md'>X: {mousePosition.x}</p>
			<p className='flex justify-center text-lg bg-base-200 px-2 py-1 min-w-[75px] rounded-md'>Y: {mousePosition.y}</p>
		</div>
	);
};

export default MouseCoordinates;
