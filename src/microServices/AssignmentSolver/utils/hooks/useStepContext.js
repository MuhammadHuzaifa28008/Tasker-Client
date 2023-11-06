import { useContext } from "react";
import { StepContext } from "../contexts/stepContext";



// Custom hook to access the StepContext
export function useStepContext() {
    return useContext(StepContext);
}