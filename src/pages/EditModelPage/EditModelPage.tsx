import { editModel } from '@/api/models/mutations';
import { QUERY_KEYWORDS } from '@/constants/queryKeywords';
import { useTargetModel } from '@/hooks/useTargetModel';
import { ModelForm } from '@/modules/ModelForm';
import { useUserStore } from '@/store/userStore';
import { Id } from '@convex/_generated/dataModel';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';

const EditModelPage = () => {
	const { modelId } = useParams();
	const userId = useUserStore((state) => state.user?._id);
	const { data: model, isFetched,  } = useTargetModel(modelId as Id<'models'>)
    const navigate = useNavigate();
	const queryClient = useQueryClient();
	const mutation = useMutation(editModel, {
		onSuccess: () => {
			queryClient.invalidateQueries(QUERY_KEYWORDS.MODELS)
			navigate('/')
		}
	})

	if (!isFetched) {
		return 'loading'
	}

	if (isFetched) {
		return (
			<div className='h-full w-full flex items-center justify-center'>
				<div className='bg-base-200 p-5 rounded-sm'>
					<ModelForm
						initialState={model ? model : null}
						onFinishForm={async (modelData) => {
							if (!userId || model?.creator !== userId) return;
							
							await mutation.mutateAsync({ modelId: model._id, modelData })
						}}
					/>
				</div>
			</div>
		);
	}
};

export default EditModelPage;
