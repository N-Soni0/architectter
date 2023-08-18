import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import TextInput from '@/UI/TextInput';
import Checkbox from '@/UI/Checkbox';
import { Step } from '@/components/StepForm';
import { useFormStore } from '../store/formStore';
import { ModelSchemaType, modelSchema } from '../schemas/modelSchema';
import { useEffect } from 'react';

interface NameStepProps {
	initialState?: ModelSchemaType;
}

const NameStep: React.FC<NameStepProps> = ({ initialState }) => {
	const fields = useFormStore((state) => state.fields);
	const saveFields = useFormStore((state) => state.saveFields);

	const {
		register,
		handleSubmit,
		formState: { isValid, errors },
	} = useForm<ModelSchemaType>({
		resolver: zodResolver(modelSchema),
		mode: 'onBlur',
		defaultValues: fields 
            ?? initialState 
            ?? {
				address: '',
				name: '',
				private: false,
			},
	});

    useEffect(() => {
        if (!initialState) return;

        saveFields(initialState);
    }, [initialState, saveFields]);

	return (
		<Step
			isValid={isValid}
			onSubmit={handleSubmit((formData) => {
				saveFields(formData);
			})}
		>
			<div className='flex flex-col gap-3 w-[400px]'>
				<TextInput
					required={true}
					error={errors.name?.message}
					register={register('name')}
					label='Model name'
				/>
				<TextInput
					required={true}
					error={errors.address?.message}
					register={register('address')}
					label='Model address'
				/>

				<Checkbox
					label='Is model private'
					register={register('private')}
				/>
			</div>
		</Step>
	);
};

export default NameStep;
