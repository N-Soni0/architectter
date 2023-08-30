import Button from '@/UI/Button';
import Modal from '@/UI/Modal';
import { deleteModel } from '@/api/models/mutations';
import { QUERY_KEYWORDS } from '@/constants/queryKeywords';
import { useMutation, useQueryClient } from 'react-query';

interface DeleteConfirmModalProps {
	model: ModelDoc;
	isOpened: boolean;
	close: () => void;
}

const DeleteConfirmModal: React.FC<DeleteConfirmModalProps> = ({
	isOpened,
	close,
	model,
}) => {
	const queryClient = useQueryClient();

	const mutation = useMutation(deleteModel,
		{
			onSuccess: () => {
				queryClient.invalidateQueries(QUERY_KEYWORDS.MODELS);
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
				<span className='text-accent text-'>{model.name}</span> model?
			</h3>
			<p className='py-4'>
				This action is irreversible, you won't be able to restore this model.
			</p>

			<div className='w-full flex justify-center items-center gap-5'>
				<Button
					isLoading={mutation.isLoading}
					className={'btn-error'}
					onClick={() => mutation.mutate(model._id)}
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

export default DeleteConfirmModal;
