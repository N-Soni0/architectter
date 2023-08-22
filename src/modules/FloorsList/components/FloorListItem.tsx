import { FiEdit } from 'react-icons/fi';
import { AiOutlineDelete } from 'react-icons/ai';
import { FloorItemOptions } from '../types';
import ActionButton from './ActionButton';
import ListItem from '../UI/ListItem';
import { usePopupController } from '@/hooks/usePopupController';
import DeleteFloorModal from './DeleteFloorModal';
import { useNavigate } from 'react-router-dom';


interface FloorListItemProps {
	floor: FloorDoc;
	index: number;
	onClick?: (floor: FloorDoc) => void;
	itemOptions: Required<FloorItemOptions>;
}

const FloorListItem: React.FC<FloorListItemProps> = ({
	floor,
	onClick,
	itemOptions,
	index
}) => {
	const deletePopUpController = usePopupController()
	const navigate = useNavigate();

	return (
		<ListItem className='flex items-center bg-base-200 rounded-sm hover:bg-base-300 duration-150'>
			<div className='bg-base-300 aspect-square w-16 flex items-center justify-center select-none'>
				<p className='text-lg opacity-75 font-medium'>
					{index + 1}.
				</p>
			</div>
			<div
				className='flex w-full items-center p-3 cursor-pointer'
				onClick={() => onClick && onClick(floor)}
			>
				<h4 className='flex-1 text-left text-accent'>Floor name</h4>

				<div className='flex gap-2'>
					{itemOptions.edit && <ActionButton onClick={() => { navigate(`/model/${floor.model}/floor/${floor._id}/edit`) }} icon={<FiEdit size='1.1rem' />} />}
					{itemOptions.delete && <ActionButton onClick={() => { deletePopUpController.open() }} icon={<AiOutlineDelete className="text-error" size='1.1rem' />} />}
				</div>
			</div>

			<DeleteFloorModal close={deletePopUpController.close} floor={floor} isOpened={deletePopUpController.isOpened} />
		</ListItem>
	);
};

export default FloorListItem;
