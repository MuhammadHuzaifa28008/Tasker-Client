import React from 'react';
import './App.css';
import MainRoutes from './Routes/MainRoutes';
import { Box } from '@mui/material';

function App() {
  return (
    <Box sx={{ backgroundColor: 'background.default' }}>
      <MainRoutes />
    </Box>

  );
}

export default App;

