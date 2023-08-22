import Button from '@/UI/Button';
import Modal from '@/UI/Modal';
import { deleteFloor } from '@/api/floors/mutations';
import { QUERY_KEYWORDS } from '@/constants/queryKeywords';
import { useMutation, useQueryClient } from 'react-query';

interface DeleteFloorModalProps {
	floor: FloorDoc;
	isOpened: boolean;
	close: () => void;
}

const DeleteFloorModal: React.FC<DeleteFloorModalProps> = ({
	isOpened,
	close,
	floor,
}) => {
	const queryClient = useQueryClient();

	const mutation = useMutation(deleteFloor,
		{
			onSuccess: () => {
				queryClient.invalidateQueries([QUERY_KEYWORDS.FLOORS, floor.model]);
				close();
			},
		}
	);

	return (
		<Modal
			isOpened={isOpened}
			close={close}
			disabled={mutation.isLoading}
		>
			<h3 className='font-bold text-lg'>
				Are you sure you want to delete{' '}
				<span className='text-accent text-'>{floor._id}</span> floor?
			</h3>
			<p className='py-4'>
				This action is irreversible, you won't be able to restore this floor.
			</p>

			<div className='w-full flex justify-center items-center gap-5'>
				<Button
					isLoading={mutation.isLoading}
					className={'btn-error'}
					onClick={() => mutation.mutate({ floorId: floor._id })}
				>
					Delete
				</Button>
				<Button
					disabled={mutation.isLoading}
					className={`btn-primary`}
					onClick={close}
				>
					Cancel
				</Button>
			</div>
		</Modal>
	);
};

export default DeleteFloorModal;
