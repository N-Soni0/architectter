import FloorListItem from './components/FloorListItem';
import { FloorItemOptions } from './types';

interface FloorsListProps {
	floors: FloorDoc[];
	onItemClick?: (floor: FloorDoc) => void;

	itemOptions?: Partial<FloorItemOptions>;
}

const FloorsList: React.FC<FloorsListProps> = ({
	floors,
	onItemClick,
    itemOptions
}) => {
	return (
		<ul className='h-full gap-3 flex flex-col'>
			{floors.map((floor, index) => (
					<FloorListItem
						key={floor._id}
						index={index}
						floor={floor}
						onClick={onItemClick}
						itemOptions={{
							delete: false,
							edit: false,
							...itemOptions
						}}
					/>
			))}
		</ul>
	);
};

export default FloorsList;
