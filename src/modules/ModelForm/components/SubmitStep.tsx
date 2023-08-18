import { useFormStore } from '../store/formStore';
import { Step } from '@/components/StepForm';
import { OnFinishFormCallback } from '../ModelForm';

interface SubmitStepProps {
    onSubmit?: OnFinishFormCallback;
}

const SubmitStep: React.FC<SubmitStepProps> = ({ onSubmit }) => {
	const fields = useFormStore((state) => state.fields);

	return (
		<Step
			isValid={true}
			onSubmit={async () => {
				if (!fields || !onSubmit) return;

				await onSubmit(fields);
			}}
		>
            <div>
                <h2 className='text-lg'>Check if the data is correct</h2>
                <div>submit</div>
            </div>
		</Step>
	);
};

export default SubmitStep;
