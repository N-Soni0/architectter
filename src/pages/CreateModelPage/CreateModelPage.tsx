
import {ModelForm} from '@/modules/ModelForm';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from '@/store/userStore';
import { useMutation } from 'react-query';
import { createModel } from '@/api/models/mutations';

const CreateModelPage = () => {
    const navigate = useNavigate()
    const userId = useUserStore(state => state.user?._id);
    const mutation = useMutation(createModel, {
        onSuccess: () => {
            navigate('/')
        }
    })

    return (
        <div className='h-full w-full flex items-center justify-center'>
            <div className='bg-base-200 p-5 rounded-sm'>
                <ModelForm onFinishForm={async (modelData) => {
                    if (!userId) return;
                    
                    await mutation.mutateAsync({ creator: userId, modelData })
                }} />
            </div>
        </div>
    )
}

export default CreateModelPage