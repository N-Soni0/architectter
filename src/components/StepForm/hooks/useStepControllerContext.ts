import { StepControllerContext } from "../components/StepControllerProvider"
import { useContext } from 'react';

export const useStepControllerContext = () => {
    return useContext(StepControllerContext)
}