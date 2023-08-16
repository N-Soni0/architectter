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
			<div>
				<StepBar
					currentStep={stepController.currentStep}
					steps={steps.map((step) => ({
						name: step.name,
					}))}
				/>

				<div>
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
