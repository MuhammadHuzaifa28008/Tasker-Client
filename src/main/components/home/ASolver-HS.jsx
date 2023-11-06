import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";

function AssignmentSolver() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="75vh"
      padding="32px"
      bgcolor="primary.main"
      color="text.secondary"
      boxShadow="0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)"
      borderRadius="8px"
    >
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h2" fontWeight="bold" gutterBottom>
            Assignment Solver
          </Typography>
          <Box mt={2}>
            <Typography
              variant="h5"
              fontStyle="italic"
              textAlign="center"
              gutterBottom
            >
              You give us your assignment, and we provide the solution! It's that easy.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          {/* Replace the steps with an image */}
          <img src="<URL>" alt="Assignment Solver Process" />
        </Grid>
      </Grid>
      <Box my={3} display="flex" justifyContent="center" alignItems="center">
        {/* Use the Link component from react-router-dom */}
        <Button
          variant="contained"
          color="secondary"
          size="large"
          component={Link}
          to="/assignment-solver"
        >
          Get Started
        </Button>
      </Box>
    </Box>
  );
}

export default AssignmentSolver;
