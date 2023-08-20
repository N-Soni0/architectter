import { useFormStore } from '../store/formStore';
import { Step } from '@/components/StepForm';
import { OnFinishFormCallback } from '../ModelForm';
import SubmitRawListItem from './SubmitRawListItem';
import SubmitPrivateListItem from './SubmitPrivateListItem';

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
            <div className='w-[400px] '>
                <h2 className='text-xl font-bold text-center text-secondary'>Submission</h2>
                
				<ul className='bg-base-300 mt-5 rounded-sm'>
					<SubmitRawListItem title='Name' value={fields?.name} />
					<SubmitRawListItem title='Address' value={fields?.address} />

					<SubmitPrivateListItem isPrivate={fields?.private} />
				</ul>
            </div>
		</Step>
	);
};

export default SubmitStep;
