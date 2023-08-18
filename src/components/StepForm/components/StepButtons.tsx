import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { useSteps } from '../hooks/useSteps';

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
			<button
				type='button'
				disabled={!stepController?.currentStep || stepController?.currentStep <= 1}
				className='btn btn-secondary w-[100px]'
				onClick={stepController.prev}
			>
				<GrFormPrevious size='1.2rem' color="#fff" />
			</button>

			<button
				disabled={!isValid || isLoading}
				className='btn btn-primary w-[100px]'
			>
				<GrFormNext size='1.2rem' />
			</button>
		</div>
	);
};

export default StepButtons;
