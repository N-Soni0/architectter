import { StepForm } from '@/components/StepForm';
import NameStep from './components/NameStep';
import SubmitStep from './components/SubmitStep';
import { ModelSchemaType } from './schemas/modelSchema';
import { useEffect } from 'react';
import { useFormStore } from './store/formStore';

export type OnFinishFormCallback = (modelData: ModelSchemaType) => void;

interface ModelFormProps {
	onFinishForm?: OnFinishFormCallback;
}

const ModelForm: React.FC<ModelFormProps> = ({ onFinishForm }) => {
	const resetFields = useFormStore((state) => state.reset);

	useEffect(() => {
		return () => {
			resetFields();
		};
	}, []);

	return (
		<StepForm
			steps={[
				{ element: <NameStep /> },
				{ element: <SubmitStep onSubmit={onFinishForm} /> },
			]}
		/>
	);
};

export default ModelForm;
