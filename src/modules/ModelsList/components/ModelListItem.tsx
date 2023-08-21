import { FiEdit, FiMoreVertical } from 'react-icons/fi';
import { ButtonPopUp, ButtonPopUpItem } from '@/components/ButtonPopUp';
import { usePopupController } from '@/hooks/usePopupController';
import { AiOutlineDelete } from 'react-icons/ai';
import DeleteConfirmModal from './DeleteConfirmModal';
import ModelListItemTitle from './ModelListItemTitle';
import ListItem from '../UI/ListItem';
import { useNavigate } from 'react-router-dom';

interface ModelsListItemProps {
	model: ModelDoc;
	onClick?: (model: ModelDoc) => void;
}

const ModelsListItem: React.FC<ModelsListItemProps> = ({ model, onClick }) => {
	const deleteModalController = usePopupController();
	const navigate = useNavigate();

	const popUpItems: ButtonPopUpItem[] = [
		{
			text: 'Edit',
			icon: <FiEdit className='' />,
			onClick: () => {
				navigate(`/model/${model._id}/edit`);
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
		<ListItem className='card bg-base-200 shadow-md flex-shrink-0 w-52 hover:bg-base-300'>
			<div
				className='card-body p-2 cursor-pointer'
				onClick={() => {
					onClick && onClick(model);
				}}
			>
				<div className='card-actions w-fit ml-auto justify-end cursor-auto'>
					<ButtonPopUp
						className='btn btn-square btn-sm btn-ghost'
						items={popUpItems}
					>
						<FiMoreVertical className='' />
					</ButtonPopUp>
				</div>

				<ModelListItemTitle isPrivate={model.private}>
					{model.name}
				</ModelListItemTitle>

				<p className='text-xs opacity-30'>{model.address}</p>
			</div>

			<DeleteConfirmModal
				model={model}
				close={deleteModalController.close}
				isOpened={deleteModalController.isOpened}
			/>
		</ListItem>
	);
};

export default ModelsListItem;
