interface ActionButtonProps {
	icon: React.ReactNode;
	onClick: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({ icon, onClick }) => {
	return (
		<button
			onClick={(e) => {
        e.stopPropagation();
				onClick();
			}}
			className='btn btn-ghost btn-sm btn-square'
		>
			{icon}
		</button>
	);
};

export default ActionButton;
