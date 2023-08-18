
import {ModelForm} from '@/modules/ModelForm';
import { useNavigate } from 'react-router-dom';
import { createModel } from './api/createModel';
import { useUserStore } from '@/store/userStore';

const CreateModelPage = () => {
    const navigate = useNavigate()
    const userId = useUserStore(state => state.user?._id);

    return (
        <div className='h-full w-full flex items-center justify-center'>
            <div className='bg-base-200 p-5 rounded-sm'>
                <ModelForm onFinishForm={async (modelData) => {
                    if (!userId) return;

                    await createModel(userId, modelData);

                    navigate('/')
                }} />
            </div>
        </div>
    )
}

export default CreateModelPage