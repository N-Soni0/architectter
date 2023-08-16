import React, { createContext } from "react";
import { useSteps } from "../hooks/useSteps"

interface StepControllerProvider {
    stepController: ReturnType<typeof useSteps>;
    children?: React.ReactNode;
}

export const StepControllerContext = createContext<Maybe<ReturnType<typeof useSteps>>>(null)

const StepControllerProvider: React.FC<StepControllerProvider> = ({ stepController, children }) => {
  return (
    <StepControllerContext.Provider value={stepController}>
        {children}
    </StepControllerContext.Provider>
  )
}

export default StepControllerProvider