import { twMerge } from 'tailwind-merge';
import Loader from './Loader';

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
			{isLoading && (
				<>
					<div className='absolute w-full h-full z-20 bg-black bg-opacity-70' />

					{customLoader ? (
						customLoader
					) : (
						<Loader className='loading-md absolute top-1/2 left-1/2 z-50 text-white opacity-50 -translate-x-1/2 -translate-y-1/2' />
					)}
				</>
			)}
			{children}
		</button>
	);
};

export default Button;
