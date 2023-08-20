import { useModel } from '@/hooks/useModel';
import { ModelForm } from '@/modules/ModelForm';
import { useUserStore } from '@/store/userStore';
import { editModel } from './api/editModel';
import { useNavigate } from 'react-router-dom';

const EditModelPage = () => {
	const { model, isLoading } = useModel();
	const userId = useUserStore((state) => state.user?._id);
    const navigate = useNavigate();

	if (!model && isLoading) {
		return <div>Loading</div>;
	}

	return (
		<div className='h-full w-full flex items-center justify-center'>
			<div className='bg-base-200 p-5 rounded-sm'>
				<ModelForm
					initialState={model ? model : null}
					onFinishForm={async (modelData) => {
						if (!userId || model?.creator !== userId) return;

                        await editModel(model._id, modelData);
                        navigate('/')
					}}
				/>
			</div>
		</div>
	);
};

export default EditModelPage;
