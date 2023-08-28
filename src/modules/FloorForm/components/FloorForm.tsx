import { useEffect } from 'react';
import { useFormStore } from '../store/formStore';
import { FloorFormSchema } from '../types';

type Props = {
	initial?: Partial<FloorFormSchema>;
	children?: React.ReactNode;
};

const FloorForm = ({ children, initial = {} }: Props) => {
	const initState = useFormStore((state) => state.initState);

	useEffect(() => {
		initState(initial);
	}, []);

	return (
		<div className='w-full h-full mt-5'>
			{children}
		</div>
	);
};

export default FloorForm;
