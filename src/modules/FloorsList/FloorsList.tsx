import ListItem from './UI/ListItem';
import FloorListItem from './components/FloorListItem';
import ListItemSkeleton from './components/ListItemSkeleton';
import { FloorItemOptions } from './types';

interface FloorsListProps {
	floors: FloorDoc[];
	onItemClick?: (floor: FloorDoc) => void;
	isLoading?: boolean;
	itemOptions?: Partial<FloorItemOptions>;
}

const FloorsList: React.FC<FloorsListProps> = ({
	floors,
	onItemClick,
	itemOptions,
	isLoading,
}) => {
	if (isLoading) {
		return (
			<ul className='h-full gap-3 flex flex-col'>
				{Array.from({ length: 5 }).map((_, index) => (
					<ListItemSkeleton key={index} />
				))}
			</ul>
		);
	}

	return (
		<ul className='h-full gap-3 flex flex-col'>
			{floors.length === 0 && (
				<ListItem className='hover:bg-base-200 flex items-center justify-center text-lg text-opacity-20 text-white'>
					No floors created yet
				</ListItem>
			)}

			{floors.map((floor, index) => (
				<FloorListItem
					key={floor._id}
					index={index}
					floor={floor}
					onClick={onItemClick}
					itemOptions={{
						delete: false,
						edit: false,
						...itemOptions,
					}}
				/>
			))}
		</ul>
	);
};

export default FloorsList;
