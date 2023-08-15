import { AiOutlinePlus } from 'react-icons/ai';
import ListItem from '../UI/ListItem';

const CreateModelButton = () => {
	return (
		<ListItem className='bg-transparent relative'>
			<button className='btn w-full h-full flex items-end justify-center p-3 tracking-wider'>
				<AiOutlinePlus
					className='absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-accent'
					size='2rem'
				/>

				<h4 className='normal-case'>
					Create new <span className='text-accent'>model</span>
				</h4>
			</button>
		</ListItem>
	);
};

export default CreateModelButton;
