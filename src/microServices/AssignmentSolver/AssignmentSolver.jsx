import React, { useLayoutEffect } from 'react';
import { Typography, Divider, Paper, useTheme, Box } from '@mui/material';
import DisplayStepper from './components/DisplayStepper';
import { StepProvider } from './utils/contexts/stepContext';
import { ServiceDataProvider } from './utils/contexts/serDataContext';
import RenderSteps from './components/RenderSteps';

function AssignmentSolver() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '100vh',
        maxHeight: '100vh',
        width: '100%',
        padding: '16px',
        bgcolor: theme.palette.primary.main,
        color: theme.palette.text.secondary,
        boxSizing: 'border-box',

      }}
    >
      <StepProvider>
        <Paper
          sx={{
            flexGrow: 0,
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '24px',
            padding: '16px',
            borderRadius: '8px',
            backgroundColor: theme.palette.background.default,
          }}
        >
          <Typography variant="h3" align="center" sx={{ color: theme.palette.primary.main, fontWeight: 'bold', marginBottom: '16px' }}>
            Assignment Solver
          </Typography>
          <DisplayStepper />

        </Paper>
        {/* <Divider sx={{ width: '100%' }} /> */}
        <Paper
          sx={{
            flexGrow: 2,
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '16px',
            borderRadius: '8px',
            overflow: 'auto',
            backgroundColor: theme.palette.primary.main,
          }}
        >
          < ServiceDataProvider >
            <RenderSteps />
          </ ServiceDataProvider >
        </Paper>
      </StepProvider>
    </Box>
  );
}

export default AssignmentSolver;
