import { useEffect, useState } from "react";

export const useSteps = (steps: number) => {
    const [currentStep, setCurrentStep] = useState<Maybe<number>>(null);
    const [direction, setDirection] = useState<'left' | 'right'>('left');

    useEffect(() => {
        if (steps < 0) return;

        setCurrentStep(1);
    }, [steps])

    const next = () => {
        if (!currentStep || currentStep + 1 > steps) return;
        setDirection('left')
        setCurrentStep(currentStep + 1);
    }

    const prev = () => {
        if (!currentStep || currentStep - 1 <= 0) return;
        setDirection('right')
        setCurrentStep(currentStep - 1);
    }

    return {
        direction,
        currentStep,
        next, 
        prev,
        number: steps
    }
}