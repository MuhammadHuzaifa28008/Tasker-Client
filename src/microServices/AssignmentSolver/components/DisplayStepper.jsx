import React from 'react';
import { Step, StepLabel, Stepper, Typography, useTheme } from '@mui/material';
import { CloudUpload, CheckCircle, FileCopy, NoteAdd, AssignmentTurnedIn } from '@mui/icons-material';
import { useStepContext } from '../utils/hooks/useStepContext';

function DisplayStepper() {
    const { step } = useStepContext();
    const theme = useTheme();

    // Array of steps with corresponding icons
    const steps = [
        { label: 'Provide  Assignment', icon: <CloudUpload /> },
        { label: 'Validate Qs', icon: <CheckCircle /> },
        { label: 'Upload Source (Optional)', icon: <FileCopy /> },
        { label: 'Validate Answers', icon: <NoteAdd /> },
        { label: 'Get Solution', icon: <AssignmentTurnedIn /> },
    ];

    return (
        <Stepper activeStep={step} alternativeLabel style={{ maxWidth: '90%' }}>
            {steps.map((stepData, index) => (
                <Step key={index} completed={index < step}>
                    <StepLabel
                        icon={React.cloneElement(stepData.icon, {
                            // Clone the icon element and pass the color prop based on the step status
                            color:
                                index < step
                                    ? 'secondary' // Color for completed steps
                                    : index === step
                                        ? 'primary' // Color for active steps
                                        : 'disabled', // Color for pending steps
                            fontSize:
                                index === step
                                    ? 'large' // Size for active steps
                                    : 'medium', // Size for other steps
                        })}
                    >
                        {/* Render the label with different styles based on step status */}
                        {index < step ? (
                            <Typography variant="body2" color="textSecondary" fontWeight="bold">
                                {stepData.label}
                            </Typography>
                        ) : index === step ? (
                            <Typography variant="h6" fontWeight="bold">
                                {stepData.label}
                            </Typography>
                        ) : (
                            <Typography variant="body2" color="textSecondary">
                                {stepData.label}
                            </Typography>
                        )}
                    </StepLabel>
                </Step>
            ))}
        </Stepper>
    );
}

export default DisplayStepper;
