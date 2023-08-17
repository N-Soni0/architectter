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
	if (isLoading) {
		return <div>Loading...</div>;
	}

	return (
		<div className='flex gap-5 items-center'>
			<button
				type='button'
				disabled={!stepController?.currentStep || stepController?.currentStep <= 1}
				className='btn btn-outline'
				onClick={stepController.prev}
			>
				<GrFormPrevious />
			</button>

			<button
				disabled={!isValid || isLoading}
				className='btn btn-primary'
			>
				<GrFormNext />
			</button>
		</div>
	);
};

export default StepButtons;
