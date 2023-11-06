import { createContext, useState } from "react";


// Create a StepContext
export const StepContext = createContext();


// StepProvider component to wrap the app with the StepContext
export function StepProvider({ children }) {
    const [step, setStep] = useState(0);

    // Function to increment the step
    const nextStep = () => {
        setStep((prevStep) => prevStep + 1);
    };

    // Function to decrement the step
    const prevStep = () => {
        setStep((prevStep) => Math.max(prevStep - 1, 0));
    };

    // Function to reset the step to the initial state
    const resetStep = () => {
        setStep(0);
    };

    // Value object to be provided by the context
    const values = {
        step,
        nextStep,
        prevStep,
        resetStep,
    };

    return <StepContext.Provider value={values}>{children}</StepContext.Provider>;
}