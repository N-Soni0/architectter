import { motion } from 'framer-motion';
import StepBar from './components/StepBar';
import StepControllerProvider from './components/StepControllerProvider';
import { useSteps } from './hooks/useSteps';
import { twMerge } from 'tailwind-merge';

interface StepFormProps {
	className?: string;

	steps: {
		element: React.ReactNode;
		name?: string;
	}[];
}

const slideVariants = {
	hiddenRight: {
		x: '-100%',
		opacity: 0,
		transition: {
			// delay: 0.5,
		},
	},
	hiddenLeft: {
		x: '100%',
		opacity: 0,
		transition: {
			// delay: 0.5,
		},
	},
	visible: {
		x: '0',
		opacity: 1,
		transition: {
			duration: 0.5,
			// delay: 0.5,
		},
	},
	exitRight: {
		opacity: 0,
		x: '100%',
		transition: {
			duration: 0.5,
		},
	},
	exitLeft: {
		opacity: 0,
		x: '-100%',
		transition: {
			duration: 0.5,
		},
	},
};

/**
 * Component for rendering multiple related forms with smooth transitions between them.
 *
 * @param steps - An array of `Step` components
 */
const StepForm: React.FC<StepFormProps> = ({ steps, className }) => {
	const stepController = useSteps(steps.length);

	return (
		<StepControllerProvider stepController={stepController}>
			<div
				tabIndex={0}
				className={twMerge('flex flex-col items-center outline-none overflow-hidden w-full h-full', className)}
				onKeyDown={(e) => {
					switch (e.code) {
						case 'ArrowLeft':
							stepController.prev();
							break;
					}
				}}
			>
				<StepBar
					currentStep={stepController.currentStep}
					steps={steps.map((step) => ({
						name: step.name,
					}))}
				/>

				<motion.div
					className={'mt-5 w-full h-full'}
					key={stepController.currentStep}
					variants={slideVariants}
					initial={
						stepController.direction === 'right' ? 'hiddenRight' : 'hiddenLeft'
					}
					animate='visible'
					exit={stepController.direction === 'right' ? 'exitRight' : 'exitLeft'}
				>
					{
						steps[
							stepController.currentStep ? stepController.currentStep - 1 : 0
						].element
					}
				</motion.div>
			</div>
		</StepControllerProvider>
	);
};

export default StepForm;
