import { twMerge } from 'tailwind-merge';

interface IStep {
    title: string;
    className?: string;
}

interface StepBarProps {
	steps: IStep[];
	className?: string;
	currentStep: number;
}

const StepBar: React.FC<StepBarProps> = ({ currentStep, steps, className }) => {
	return (
		<ul className={twMerge('steps', className)}>
			{steps.map((step, index) => (
				<li
					key={step.title}
					className={twMerge(
						'step',
						currentStep > index ? 'step-primary' : '',
						className
					)}
				>
					{step.title}
				</li>
			))}
		</ul>
	);
};

export default StepBar;
