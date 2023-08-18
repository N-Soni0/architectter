import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import TextInput from '@/UI/TextInput';
import Checkbox from '@/UI/Checkbox';
import { Step } from '@/components/StepForm';
import { useFormStore } from '../store/formStore';
import { ModelSchemaType, modelSchema } from '../schemas/modelSchema';

const NameStep = () => {
	const fields = useFormStore((state) => state.fields);
	const saveFields = useFormStore((state) => state.saveFields);

	const {
		register,	
		handleSubmit,
		formState: { isValid, errors },
	} = useForm<ModelSchemaType>({
		resolver: zodResolver(modelSchema),
		mode: 'onBlur',
		defaultValues: fields ?? {
			address: '',
			name: '',
			private: false,
		},
	});

	return (
		<Step
			isValid={isValid}
			onSubmit={handleSubmit((formData) => {
				saveFields(formData);
			})}
		>
			<div className='flex flex-col gap-3'>
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
