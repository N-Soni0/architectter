
import ModelForm from '@/modules/ModelForm/ModelForm';
import { useNavigate } from 'react-router-dom';

const CreateModelPage = () => {
    const navigate = useNavigate()

  return (
    <div className='h-full w-full flex items-center justify-center'>
        <div className='bg-base-200 p-5 rounded-sm'>
            <ModelForm onFinishForm={() => navigate('/')} />
        </div>
    </div>
  )
}

export default CreateModelPage