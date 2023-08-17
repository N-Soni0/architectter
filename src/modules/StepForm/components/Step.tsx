import StepButtons from './StepButtons';
import { useStepControllerContext } from '../hooks/useStepControllerContext';
import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';

interface StepProps extends React.FormHTMLAttributes<HTMLFormElement> {
    isValid: boolean;
}

const Step: React.FC<StepProps> = ({ isValid, children, onSubmit, className, ...props }) => {
	const stepController = useStepControllerContext();
	const [isLoading, setIsLoading] = useState(false);

	if (!stepController) {
		return <div className='font-bold text-error'>No step controller recognized</div>
	}

	return (
		<form 
			onSubmit={async (e) => {
				e.preventDefault();

				if (!onSubmit) return;

				setIsLoading(true);
				await onSubmit(e);
				setIsLoading(false);

				stepController.next();
			}}
			className={twMerge('flex flex-col items-center gap-5', className)}
			{...props}
		>
            {children}

			<StepButtons
				isValid={isValid}
				stepController={stepController}
				isLoading={isLoading}
			/>
		</form>
	);
};

export default Step;
