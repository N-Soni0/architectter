import StepBar from './components/StepBar';
import StepControllerProvider from './components/StepControllerProvider';
import { useSteps } from './hooks/useSteps';
import React from 'react';

interface StepFormProps {
	steps: {
		element: React.ReactNode;
		name?: string;
	}[];
}

/**
 * Component for rendering multiple related forms with smooth transitions between them.
 *
 * @param steps - An array of `Step` components
 */
const StepForm: React.FC<StepFormProps> = ({ steps }) => {
	const stepController = useSteps(steps.length);

	return (
		<StepControllerProvider stepController={stepController}>
			<div
				tabIndex={0}
				className='flex flex-col items-center outline-none'
				onKeyDown={(e) => {

					switch (e.code) {
						case 'ArrowLeft': 
							stepController.prev()
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

				<div className='mt-5'>
					{steps.map((step, index) =>
						stepController.currentStep &&
						index === stepController.currentStep - 1 ? (
							<React.Fragment key={index}>{step.element}</React.Fragment>
						) : null
					)}
				</div>
			</div>
		</StepControllerProvider>
	);
};

export default StepForm;
