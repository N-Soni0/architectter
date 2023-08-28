import { StepForm } from '@/components/StepForm'
import RawDataStep from './steps/RawDataStep'
import SetPointsStep from './steps/SetPointsStep'
import SubmissionStep from './steps/SubmissionStep'
 
type Props = {
  onSubmit?: (floor: Pick<FloorDoc, 'height' | 'shape'>) => void
}

const FloorCreateForm = ({ onSubmit }: Props) => {
  return (
    <div className="w-full h-full mt-5">
        <StepForm 
          steps={[
            {element: <RawDataStep />, name: 'Raw Data'},
            {element: <SetPointsStep />, name: 'Set Points'},
            {element: <SubmissionStep onSubmit={onSubmit} />, name: 'Submission'},
          ]}
        />
      </div>
  )
}

export default FloorCreateForm