import { twMerge } from 'tailwind-merge';

interface IStep {
    name?: string;
}

interface StepBarProps {
	steps: IStep[];
	className?: string;
	currentStep: Maybe<number>;
}

const StepBar: React.FC<StepBarProps> = ({ currentStep, steps, className }) => {
	return (
		<ul className={twMerge('steps border-b-2 pb-2 w-full border-b-white border-opacity-30', className)}>
			{steps.map((step, index) => (
				<li
					key={index}
					className={twMerge(
						'step',
						currentStep && currentStep > index ? 'step-primary' : '',
						className
					)}
				>
					{step.name}
				</li>
			))}
		</ul>
	);
};

export default StepBar;
