import StepButtons from './StepButtons';
import { useStepControllerContext } from '../hooks/useStepControllerContext';
import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';

interface StepProps extends React.FormHTMLAttributes<HTMLFormElement> {
    isValid: boolean;
}

/**
 * Form component that handles `loading` of async submit event.
 * 
 * @param isValid - Disables `next` button  
 */
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

				if (onSubmit) {
					setIsLoading(true);
					await onSubmit(e);
					setIsLoading(false);
				}

				stepController.next();
			}}
			className={twMerge('flex flex-col items-center justify-between gap-5 p-2 w-full h-full')}
			{...props}
		>
			<div className={className}>
				{children}
			</div>

			<StepButtons
				isValid={isValid}
				stepController={stepController}
				isLoading={isLoading}
			/>
		</form>
	);
};

export default Step;
