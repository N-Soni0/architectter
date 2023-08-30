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
	const { height, points } = useFormStore();

	return (
		<Step
			isValid={true}
			className='h-[500px] w-4/5 bg-base-200 rounded-sm'
			onSubmit={async () => {
				if (!height || !points) return;

				onSubmit &&
					(await onSubmit({
						shape: points,
						height: height,
					}));
			}}
		>
			<ModelViewer
				floors={[
					{
						_id: 'CREATE' as Id<'floors'>,
						_creationTime: 0,
						model: modelId as Id<'models'>,
						height: height ?? 0,
						shape: points ?? [],
					},
				]}
			/>
		</Step>
	);
};

export default SubmissionStep;
