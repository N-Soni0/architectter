import { StepForm } from '@/components/StepForm'
import RawDataStep from './components/steps/RawDataStep'
import SetPointsStep from './components/steps/SetPointsStep'
import SubmissionStep from './components/steps/SubmissionStep'
import FloorForm from './components/FloorForm'
import { FloorFormSchema } from './types'
 
type Props = {
  onSubmit?: (floor: Pick<FloorDoc, 'height' | 'shape'>) => void
	initial?: Partial<FloorFormSchema>;
}

const FloorCreateForm = ({ onSubmit, initial }: Props) => {
	return (
		<FloorForm initial={initial}>
			<StepForm
				steps={[
					{ element: <RawDataStep />, name: 'Raw Data' },
					{ element: <SetPointsStep />, name: 'Set Points' },
					{
						element: <SubmissionStep onSubmit={onSubmit} />,
						name: 'Submission',
					},
				]}
			/>
		</FloorForm>
	);
}

export default FloorCreateForm