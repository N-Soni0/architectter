import { StepForm } from '@/modules/StepForm'
import NameStep from './components/NameStep'
import SubmitStep from './components/SubmitStep'

const CreateModelPage = () => {
  return (
    <div className='h-full w-full flex items-center justify-center'>
        <div className='bg-base-200 p-5 rounded-sm'>
            <StepForm 
                steps={[{element: <NameStep />}, {element: <SubmitStep />}]}
            /> 
        </div>
    </div>
  )
}

export default CreateModelPage