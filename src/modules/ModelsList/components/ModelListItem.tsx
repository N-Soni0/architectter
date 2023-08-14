import { useNavigate } from 'react-router-dom';
import { FiEdit, FiMoreVertical } from 'react-icons/fi';
import ButtonPopUp, { ButtonPopUpItem } from '@/components/ButtonPopUp';
import { usePopupController } from '@/hooks/usePopUpController';
import { AiOutlineDelete } from 'react-icons/ai';
import DeleteConfirmModal from './DeleteConfirmModal';
import ModelListItemTitle from './ModelListItemTitle';
import ListItem from './ListItem';

interface ModelsListItemProps {
	model: ModelDoc;
}

const ModelsListItem: React.FC<ModelsListItemProps> = ({ model }) => {
    const deleteModalController = usePopupController();
	const navigate = useNavigate();

	const popUpItems: ButtonPopUpItem[] = [
        {
            text: 'Edit',
            icon: <FiEdit className='' />,
            onClick: () => {
                console.log('edit');
            },
        },
        {
            text: 'Delete',
            icon: <AiOutlineDelete className='' />,
            className: 'text-red-600 font-medium',
            onClick: () => {
                deleteModalController.open();
            },
        },
    ];

	return (
		<>
			<ListItem className='card bg-base-200 shadow-md flex-shrink-0 w-52'>
				<div
					className='card-body !justify-end static z-0 p-2 cursor-pointer'
					onClick={() => {
						navigate(`/models/${model._id}`);
					}}
				>
					<div className='card-actions  w-fit ml-auto justify-end cursor-auto z-40'>
						<ButtonPopUp
							className='btn btn-square btn-sm btn-ghost'
							items={popUpItems}
							onClick={() => {}}
						>
							<FiMoreVertical className='' />
						</ButtonPopUp>
					</div>

					<ModelListItemTitle isPrivate={model.private}>{model.name}</ModelListItemTitle>

					<p className='text-xs opacity-30'>{model.address}</p>
				</div>

				<DeleteConfirmModal
					model={model}
					close={deleteModalController.close}
					isOpened={deleteModalController.isOpened}
				/>
			</ListItem>
		</>
	);
};

export default ModelsListItem;
