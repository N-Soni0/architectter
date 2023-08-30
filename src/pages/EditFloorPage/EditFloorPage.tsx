import { useNavigate, useParams } from 'react-router-dom';
import { updateFloor } from '@/api/floors/mutations';
import { Id } from '@convex/_generated/dataModel';
import { useMutation, useQueryClient } from 'react-query';
import { QUERY_KEYWORDS } from '@/constants/queryKeywords';
import { EditFlootForm } from '@/modules/FloorForm';
import { useTargetFloor } from '@/hooks/useTargetFloor';
import Loader from '@/UI/Loader';

const EditFloorPage = () => {
	const navigate = useNavigate();
	const { floorId, modelId } = useParams();
	const queryClient = useQueryClient();
	const { data: floor, isLoading } = useTargetFloor(floorId as Id<'floors'>);

	const { mutateAsync } = useMutation(updateFloor, {
		onSuccess: () => {
			queryClient.invalidateQueries([QUERY_KEYWORDS.FLOORS, modelId]);
		},
	});

  if (isLoading) {
    return <Loader />
  }

	return (
		<div className='container w-full h-full flex items-start justify-center'>
			<EditFlootForm
				initial={{ ...floor }}
				onSubmit={async (floorData) => {
          if (!floor) return;

					await mutateAsync({ floorId: floor._id, floorData });
					navigate(`/model/${modelId}/floors/${floorId}`);
				}}
			/>
		</div>
	);
};

export default EditFloorPage;
