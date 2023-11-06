import React from 'react';
import { Box, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';

function Banner() {
  return (
    // Use the Box component to create a flexible container for the banner content
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      height="75vh"
      padding="32px"
    >
      {/* Left section containing big heading and punch line */}
      <Box display="flex" flexDirection="column">
        {/* Use the Typography component to create a heading for the banner text */}
        <Typography variant="h2" color="secondary" fontWeight="bold">
          Tasker: The ultimate AI-powered app for students
        </Typography>
        {/* Use another Typography component for the punch line with different style */}
        <Box display="flex" alignItems="center">
          <Typography variant="h6" color="primary" fontStyle="italic">
            From Student for Students
          </Typography>
          {/* Use the Divider component to create a horizontal line */}
          <Divider
            orientation="horizontal"
            flexItem
            style={{ margin: '0 8px', height: '1px', backgroundColor: 'currentColor' }}
          />
          {/* Add the additional line here */}
          <Typography variant="body1" color="primary" fontStyle="italic">
            Do things that matter
          </Typography>
        </Box>
      </Box>

      {/* Right section containing logo */}
      <img src="/logo.png" alt="Tasker logo" style={{ width: '200px', height: 'auto' }} />
    </Box>
  );
}

export default Banner;
