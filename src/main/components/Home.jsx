import React from 'react';
import { Box } from '@mui/material';
import Header from './home/Header.jsx';
import AssignmentSolver from './home/ASolver-HS.jsx';
import Banner from './home/Banner.jsx';

function Home() {
  return (

    <Box display='flex' flexDirection='column'>
      <Header />
      <Banner />
      <AssignmentSolver />

    </Box>
  );
}

export default Home;
