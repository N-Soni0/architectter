import Modal from '@/UI/Modal';
import { usePromise } from '@/hooks/usePromise';
import { useModelStore } from '@/store/modelStore/useModelStore';

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
	const deleteModel = useModelStore((state) => state.deleteModel);
	const { isLoading, run: deleteModelCallback } = usePromise(deleteModel);

	const handleDeleteModel = async () => {
		await deleteModelCallback(model._id);

		close();
	};

	return (
		<Modal isOpened={isOpened} close={close}>
			<h3 className='font-bold text-lg'>
				Are you sure you want to delete{' '}
				<span className='text-accent text-'>{model.name}</span> model?
			</h3>
			<p className='py-4'>
				This action is irreversible, you won't be able to restore this model.
			</p>

			<div className='w-full flex justify-center items-center gap-5'>
				<button
					className={'btn btn-error'}
					disabled={isLoading}
					onClick={handleDeleteModel}
				>
					Delete
				</button>
				<button
					className={`btn btn-primary`}
					disabled={isLoading}
					onClick={close}
				>
					Cancel
				</button>
			</div>
		</Modal>
	);
};

export default DeleteConfirmModal;
