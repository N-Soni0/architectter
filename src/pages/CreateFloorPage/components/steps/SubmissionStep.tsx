import { Step } from '@/components/StepForm';
import ModelViewer from '@/modules/ModelViewer/ModelViewer';
import { useFormStore } from '../../store/formStore';
import { Id } from '@convex/_generated/dataModel';
import { useParams } from 'react-router-dom';

type Props = {
	onSubmit?: (floor: Pick<FloorDoc, 'height' | 'shape'>) => void;
};

const SubmissionStep = ({ onSubmit }: Props) => {
	const { modelId } = useParams();
	const setPointsStepData = useFormStore((state) => state.setPointsStep.data);
	const rawStepData = useFormStore((state) => state.rawDataStep.data);

	return (
		<Step
			isValid={true}
			className='h-[500px] w-4/5 bg-base-200 rounded-sm'
			onSubmit={async () => {
				onSubmit &&
					(await onSubmit({
						shape: setPointsStepData.points,
						height: rawStepData.height,
					}));
			}}
		>
			<ModelViewer
				floors={[
					{
						_id: 'CREATE' as Id<'floors'>,
						_creationTime: 0,
						height: rawStepData.height,
						model: modelId as Id<'models'>,
						shape: setPointsStepData.points,
					},
				]}
			/>
		</Step>
	);
};

export default SubmissionStep;
