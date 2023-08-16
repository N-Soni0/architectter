import StepControllerProvider from './components/StepControllerProvider';
import { useSteps } from './hooks/useSteps';
import React from 'react';

interface StepFormProps {
	steps: React.ReactNode[];
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
			<div>
				{steps.map((step, index) => (
					stepController.currentStep && index === (stepController.currentStep - 1)
						? <React.Fragment key={index}>{step}</React.Fragment>
						: null
				))}
			</div>
		</StepControllerProvider>
	);
};

export default StepForm;
