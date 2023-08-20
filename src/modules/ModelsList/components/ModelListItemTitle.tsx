import React from 'react';
import { FiLock } from 'react-icons/fi';
import { MdPublic } from 'react-icons/md';

interface ModelListItemTitleProps {
	isPrivate: boolean;
	children: React.ReactNode;
}

const ModelListItemTitle: React.FC<ModelListItemTitleProps> = ({
	isPrivate,
	children,
}) => {
	return (
		<h2 className='card-title flex items-center'>
			<span className='mr-2'>{children}</span>

			{isPrivate ? (
				<FiLock
					size='1rem'
					className='opacity-50'
				/>
			) : (
				<MdPublic
					size='1.1rem'
					className='opacity-50'
				/>
			)}
		</h2>
	);
};

export default ModelListItemTitle;
