import { editModel } from '@/api/models/mutations';
import { useModel } from '@/hooks/useModel';
import { ModelForm } from '@/modules/ModelForm';
import { useUserStore } from '@/store/userStore';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

const EditModelPage = () => {
	const { model } = useModel();
	const userId = useUserStore((state) => state.user?._id);
    const navigate = useNavigate();
	const mutation = useMutation(editModel, {
		onSuccess: () => {
			navigate('/')
		}
	})


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
};

export default EditModelPage;
