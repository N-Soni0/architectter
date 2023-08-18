import { convex } from '@/main';
import { useUserStore } from '@/store/userStore';
import { api } from '@convex/_generated/api';
import { ModelSchemaType } from '../schemas/modelSchema';
import { useFormStore } from '../store/formStore';
import { useNavigate } from 'react-router-dom';
import { Step } from '@/components/StepForm';

const SubmitStep = () => {
	const userId = useUserStore((state) => state.user?._id);
  const fields = useFormStore(state => state.fields)
  const navigate = useNavigate();

	const createModel = async (modelData: ModelSchemaType) => {
		if (!userId) {
			return console.error('User not signed in. Unabled to create a model');
		}

		await convex.mutation(api.models.post.createModel, {
			address: modelData.address,
			creator: userId,
			name: modelData.name,
			private: modelData.private,
		});
	};

	return (
		<Step
			isValid={true}
			onSubmit={async () => {
        if (!fields) return;
        
				await createModel(fields);

        navigate('/')
			}}
		>
			<h2></h2>
			<div>submit</div>
		</Step>
	);
};

export default SubmitStep;
