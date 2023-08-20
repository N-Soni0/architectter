import { twMerge } from 'tailwind-merge';

interface SubmitListItemProps extends React.LiHTMLAttributes<HTMLElement> {}

const SubmitListItem: React.FC<SubmitListItemProps> = ({
	children,
	className,
	...props
}) => {
	return (
		<li
			className={twMerge(
				'p-3 hover:bg-base-100 duration-100 hover:text-accent select-none',
				className
			)}
			{...props}
		>
			{children}
		</li>
	);
};

export default SubmitListItem;
