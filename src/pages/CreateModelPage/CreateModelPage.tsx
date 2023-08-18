import NameStep from './components/NameStep'
import SubmitStep from './components/SubmitStep'
import { useEffect } from 'react';
import { useFormStore } from './store/formStore';
import { StepForm } from '@/components/StepForm';

const CreateModelPage = () => {
    const resetFields = useFormStore(state => state.reset)

    useEffect(() => {
        return () => {
            resetFields()
        }
    }, [])

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