import { useNavigate } from 'react-router-dom';
import { FiEdit, FiLock, FiMoreVertical } from 'react-icons/fi';
import { MdPublic } from 'react-icons/md';
import ButtonPopUp, { ButtonPopUpItem } from '@/components/ButtonPopUp';
import DeleteModal from './DeleteModal';
import { usePopupController } from '@/hooks/usePopUpController';
import { AiOutlineDelete } from 'react-icons/ai';

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
			<li className='card bg-base-200 shadow-md flex-shrink-0 w-52'>
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

					<h2 className='card-title flex items-center'>
						<span className='mr-2'>{model.name}</span>

						{model.private ? (
							<FiLock
								size='1rem'
								className='opacity-50'
							/>
						) : (
							<MdPublic
								size='1.1rem'
								className='opacity-50'
							/>
						)}
					</h2>

					<p className='text-xs opacity-30 '>{model.address}</p>
				</div>

				<DeleteModal
					model={model}
					close={deleteModalController.close}
					isOpened={deleteModalController.isOpened}
				/>
			</li>
		</>
	);
};

export default ModelsListItem;
