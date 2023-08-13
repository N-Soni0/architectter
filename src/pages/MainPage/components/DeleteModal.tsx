import { api } from "@/../convex/_generated/api";
import { useConvex } from "convex/react";
import { useState } from "react";

interface DeleteModalProps {
	model: ModelDoc;
    isOpened: boolean;
	close: () => void;
}

const DeleteModal: React.FC<DeleteModalProps> = ({ isOpened, close, model }) => {
	const convex = useConvex();
	const [isLoading, setIsLoading] = useState(false);

	const deleteModel = async () => {
		setIsLoading(true)
		await convex.mutation(api.models.deleteModel, { id: model._id });
		setIsLoading(false);
		close();
	}

	return (
		<dialog
			onClick={(e) => {
				e.stopPropagation()
			}}
			className={`modal ${isOpened ? 'modal-open' : ''}`}
		>
			<form
				method='dialog'
				className='modal-box'
			>
				<h3 className='font-bold text-lg'>Are you sure you want to delete <span className="text-accent text-">{model.name}</span> model?</h3>
				<p className='py-4'>This action is irreversible, you won't be able to restore this model.</p>

				<div className="w-full flex justify-center items-center gap-5">
					<button className={"btn btn-error"} disabled={isLoading} onClick={deleteModel}>Delete</button>
					<button className={`btn btn-primary`} disabled={isLoading} onClick={close}>Cancel</button>
				</div>
			</form>

			<form
				method='dialog'
				className='modal-backdrop'
			>
				<button disabled={isLoading} onClick={close}>close</button>
			</form>
		</dialog>
	);
};

export default DeleteModal;
