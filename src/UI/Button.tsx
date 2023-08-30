import { twMerge } from 'tailwind-merge';
import ComponentLoader from './ComponentLoader';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	isLoading?: boolean;
	customLoader?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
	children,
	className,
	isLoading,
	disabled,
	customLoader,
	...props
}) => {
	return (
		<button
			disabled={disabled || isLoading}
			className={twMerge('btn relative', className)}
			{...props}
		>
			{isLoading &&
				(customLoader || <ComponentLoader loaderClassName='loading-md' />)}
			{children}
		</button>
	);
};

export default Button;
