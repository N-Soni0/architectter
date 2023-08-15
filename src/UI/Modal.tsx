
interface ModalProps {
    isOpened: boolean;
	close: () => void;
    children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpened, close, children }) => {

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
                {children}
			</form>

			<form
				method='dialog'
				className='modal-backdrop'
			>
				<button onClick={close}>close</button>
			</form>
		</dialog>
	);
};

export default Modal;
