import Loader from '@/UI/Loader';
import { useTargetFloor } from '@/hooks/useTargetFloor';
import { ModelViewer } from '@/modules/ModelViewer';
import { Id } from '@convex/_generated/dataModel';
import { useParams } from 'react-router-dom';

const FloorPage = () => {
	const { floorId } = useParams();
	const { data: floor, isLoading } = useTargetFloor(floorId as Id<'floors'>);
	return (
		<div className='container relateive h-full flex items-center justify-center'>

			{!isLoading && floor ? (
                <div className=' h-[500px] bg-base-200 aspect-video'>
                    <ModelViewer floors={floor ? [floor] : []} />
                </div>
			) : (
				<Loader className='w-[50px] h-[50px]' />
			)}

			
		</div>
	);
};

export default FloorPage;
