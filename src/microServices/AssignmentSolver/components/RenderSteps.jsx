import React from 'react';
import TakeAssignment from './Steps/TakeAssignment';
import { useStepContext } from '../utils/hooks/useStepContext';

// An array of components that correspond to each step
const components = [TakeAssignment];

function RenderSteps() {
    // Get the current step from the useStepContext hook
    const { step } = useStepContext();

    // Get the component that matches the current step from the array
    const StepComponent = components[step];

    // If there is no component for the current step, return null
    if (!StepComponent) {
        return null;
    }

    // Otherwise, render the component
    return <StepComponent />;
}

export default RenderSteps;
