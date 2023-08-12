import { useComponentId } from '@/hooks/useComponentId';
import { usePopUpStore } from '@/store/popUpStore';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
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
	const [isOpened, setIsOpened] = useState<boolean>(false);
	const pushPopUp = usePopUpStore((state) => state.push);
	const removePopUp = usePopUpStore((state) => state.remove);
	const componentId = useComponentId();

	useEffect(() => {
		if (!componentId) return;

		if (isOpened) {
			pushPopUp(componentId, () => setIsOpened(false));
		} else {
			removePopUp(componentId);
		}
	}, [isOpened, componentId]);

	const toggleOpen = () => setIsOpened((isOpened) => !isOpened);

	return (
		<div
			className={'relative'}
			onClick={(e) => e.stopPropagation()}
		>
			<button
				className={className}
				onClick={(e) => {
					e.nativeEvent.stopImmediatePropagation();
					e.stopPropagation();
					toggleOpen();
					onClick && onClick(e);
				}}
				{...props}
			>
				{children}
			</button>

			<AnimatePresence>
				{(isOpened && componentId) ? (
					<ButtonPopUpMenu items={items} componentId={componentId} />
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
			initial={{ opacity: 0, x: 0, }}
			animate={{ opacity: 1, x: 20 }}
			exit={{ opacity: 0, x: 40 }}
			transition={{ duration: .3 }}

			
			className={twMerge(
				'absolute top-0 left-full py-3 bg-base-200 rounded-sm w-40'
			)}
		>
			<ul className=''>
				{items?.map((item, index) => (
					<li
						className=''
						key={index}
					>
						<button
							className='w-full flex items-center px-3 py-2 justify-between duration-150 gap-5 hover:bg-white hover:bg-opacity-[8%] active:bg-opacity-[15%]'
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
