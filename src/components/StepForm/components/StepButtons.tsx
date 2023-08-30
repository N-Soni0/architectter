import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { useSteps } from '../hooks/useSteps';
import Button from '@/UI/Button';

interface StepButtonsProps {
	stepController: ReturnType<typeof useSteps>;
	isValid: boolean;
	isLoading?: boolean;
}

const StepButtons: React.FC<StepButtonsProps> = ({
	isValid, 
	stepController,
	isLoading
}) => {
	return (
		<div className='flex gap-5 items-center'>
			<Button
				type='button'
				disabled={!stepController?.currentStep || stepController?.currentStep <= 1 || isLoading}
				className='btn btn-secondary w-[100px]'
				onClick={stepController.prev}
			>
				<GrFormPrevious size='1.2rem' color="#fff" />
			</Button>

			<Button
				isLoading={isLoading}
				disabled={!isValid || isLoading}
				className='btn-primary w-[100px]'
			>
				<GrFormNext size='1.2rem' />
			</Button>
		</div>
	);
};

export default StepButtons;
