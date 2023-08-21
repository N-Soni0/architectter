import { usePopupController } from '@/hooks/usePopupController';
import { AnimatePresence, motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

export interface ButtonPopUpItem {
	text: string;
	className?: string;
	icon?: React.ReactNode;
	onClick?: () => void;
}

interface ButtonPopUpProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	items?: ButtonPopUpItem[];
}

const ButtonPopUp: React.FC<ButtonPopUpProps> = ({
	items = [],
	onClick,
	children,
	className,
	...props
}) => {
	const { isOpened, toggle, popupId } = usePopupController();

	return (
		<div
			className={'relative '}
			onClick={(e) => e.stopPropagation()}
		>
			<button
				className={className}
				onClick={(e) => {
					e.stopPropagation();

					toggle();
					onClick && onClick(e);
				}}
				{...props}
			>
				{children}
			</button>

			<AnimatePresence>
				{(isOpened && popupId) ? (
					<ButtonPopUpMenu items={items} componentId={popupId} />
				) : null}
			</AnimatePresence>
		</div>
	);
};

interface ButtonPopUpMenuProps {	
	items: ButtonPopUpItem[];
	componentId: string;
}

const ButtonPopUpMenu: React.FC<ButtonPopUpMenuProps> = ({ items, componentId }) => {
	return (
		<motion.div
			key={componentId}
			initial={{ opacity: 0, x: 10, }}
			animate={{ opacity: 1, x: 20 }}
			exit={{ opacity: 0, x: 40 }}
			transition={{ duration: .3 }}

			
			className={twMerge(
				'absolute top-0 left-full py-3 bg-base-300 rounded-sm w-40 z-50'
			)}
		>
			<ul className=''>
				{items?.map((item, index) => (
					<li
						className=' duration-150 hover:bg-white hover:bg-opacity-[8%] active:bg-opacity-[15%]'
						key={index}
					>
						<button
							className={twMerge('w-full flex items-center px-3 py-2 justify-between gap-5', item.className)}
							onClick={() => {
								item.onClick && item.onClick();
							}}
						>
							<h4 className='text-sm'>{item.text}</h4>

							{item.icon}
						</button>
					</li>
				))}
			</ul>
		</motion.div>
	);
};

export default ButtonPopUp;
