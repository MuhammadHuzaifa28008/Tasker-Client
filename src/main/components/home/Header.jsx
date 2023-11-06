import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

function Header() {
  const { palette } = useTheme();

  const linkStyle = {
    textDecoration: 'none',
    color: palette.text.secondary,
    transition: 'color 0.3s', // Adding a transition to the color property
  };

  const handleMouseEnter = (e) => {
    e.target.style.color = palette.secondary.main;
  };

  const handleMouseLeave = (e) => {
    e.target.style.color = palette.text.secondary;
  };

  return (
    <AppBar position="static" style={{ backgroundColor: palette.primary.main }}>
      <Toolbar>
        <Box display="flex" justifyContent="space-between" alignItems="center" width="100%">
          <Typography variant="h6" component="div">
            <Link to="/" style={{ ...linkStyle }}>
              TASKER
            </Link>
          </Typography>
          <Box display="flex" gap="16px">
            <Typography variant="body1" component="div">
              <Link
                to="/assignment-solver"
                style={{ ...linkStyle }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Assignment Solver
              </Link>
            </Typography>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
