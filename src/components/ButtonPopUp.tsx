import { useComponentId } from '@/hooks/useComponentId';
import { usePopUpStore } from '@/store/popUpStore';
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

			<ButtonPopUpMenu isOpened={isOpened} items={items} />
		</div>
	);
};

interface ButtonPopUpMenuProps {	
	items: ButtonPopUpItem[];
	isOpened: boolean
}

const ButtonPopUpMenu: React.FC<ButtonPopUpMenuProps> = ({ items, isOpened }) => {
	return (
		<div
			className={twMerge(
				'absolute left-full top-0 translate-x-3 py-3 bg-base-200 rounded-sm w-40',
				isOpened ? 'block' : 'hidden'
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
		</div>
	);
};

export default ButtonPopUp;
