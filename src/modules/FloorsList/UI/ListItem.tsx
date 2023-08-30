import { twMerge } from 'tailwind-merge';

interface ListItemProps extends React.ComponentProps<'li'> {}

const ListItem: React.FC<ListItemProps> = ({
	children,
	className,
	...props
}) => {
	return (
		<li
			className={twMerge(
				'flex items-center bg-base-200 rounded-sm h-14 hover:bg-base-300 duration-150',
				className
			)}
            {...props}
		>
			{children}
		</li>
	);
};

export default ListItem;
