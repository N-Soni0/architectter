import React from 'react';
import SubmitListItem from '../UI/SubmitListItem';

interface SubmitRawListItemProps {
	title: string;
	value?: string;
}

const SubmitRawListItem: React.FC<SubmitRawListItemProps> = ({
	title,
	value,
}) => {
	return (
		<SubmitListItem className='flex items-center justify-between'>
			<h4>{title}</h4>

			<p className='text-right w-4/5'>{value}</p>
		</SubmitListItem>
	);
};

export default SubmitRawListItem;
