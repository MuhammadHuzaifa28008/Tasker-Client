import React, { useEffect, useState } from 'react';
import { Box, Typography, Container, Button, useTheme } from '@mui/material';
import TakeText from '../../../../main/components/inputs/TakeText';
import TakeFile from '../../../../main/components/inputs/TakeFile';
import ArrowBackIosNewSharpIcon from '@mui/icons-material/ArrowBackIosNewSharp';
import { useServiceDataContext } from '../../utils/hooks/useServiceDataContext';


function HandleRenderings({ value, setValue }) {
  const theme = useTheme();
  const [chosen, setChosen] = useState({
    choosed: false,
    text: false,
    file: false
  });
  const compStyle = {
    width: '100%',
    height: '50%',
    backgroundColor: theme.palette.background.paper,
    padding: '8px',
    border: 'none',
    outline: 'none',
    resize: 'none',
    borderRadius: '4px',
    color: theme.palette.text.primary,
    overflow: 'auto',
    flexGrow: 1
  }
  useEffect(() => {
    if (value) {
      setChosen(prevState => ({ ...prevState, choosed: true, text: true }));
    }
  }, [value])

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%',
        maxHeight: '100%',
        bgcolor: 'primary',
        boxSizing: 'border-box',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-around',
          alignItems: 'center',
          marginBottom: '5px',
          flexGrow: 0
        }}>
        {chosen.choosed && (
          <Button
            variant='contained'
            color='primary'
            // could use visibility / display property for static display of Typography
            onClick={(() => {
              setChosen({
                choosed: false,
                text: false,
                file: false,
              })
            })}>
            <ArrowBackIosNewSharpIcon />
          </Button>
        )}

        <Typography variant="h4" align="center" sx={{ color: theme.palette.text.secondary, marginBottom: '10px', flexGrow: '1' }}>
          Provide Assignment
        </Typography>
      </Box>
      {(!chosen.choosed || chosen.text) ? (

        <TakeText
          style={compStyle}
          setChosen={setChosen}
          chosen={chosen}
          value={value}
        />
      ) : (null)}

      {(!chosen.choosed || chosen.file) ? (

        <TakeFile
          style={compStyle}
          setChosen={setChosen}
          chosen={chosen}
          setValue={setValue}
        />
      ) : (null)}

    </Container>
  )
}






function TakeAssignment() {
  const { takeAssignment } = useServiceDataContext();
  const [value, setValue] = useState(null);
  return (
    <>
      {takeAssignment ? <HandleRenderings value={value} setValue={setValue} /> :
        <h1> Loader Component should be here</h1>}
    </>
  );
}

export default TakeAssignment;