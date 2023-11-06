import React, { useEffect, useState } from 'react';
import { Box, TextareaAutosize, Paper, IconButton, Alert, AlertTitle, Button } from '@mui/material';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import SendIcon from '@mui/icons-material/Send';
import { useTheme } from '@mui/material/styles';


const TextAreaWithPasteIcon = ({ value, onChange, onPasteClick }) => {
  const theme = useTheme();

  return (
    <Box
      elevation={0}
      sx={{
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: theme.palette.background.default,
        width: '100%',
        height: '100%',
        borderRadius: '5px',
        padding: '20px',
        fontSize: '20px',
        fontFamily: theme.typography.fontFamily,
        color: theme.palette.text.primary.main,
        overflow: 'auto',
      }}
    >
      <TextareaAutosize
        sx={{ flexGrow: 1 }}
        minRows={10}
        maxRows={15}
        value={value}
        placeholder='Enter Your Assignment'
        onChange={onChange}
        style={{
          background: 'transparent',
          border: 'none',
          outline: 'none',
          resize: 'none',
          width: '100%',
          height: '100%',
        }}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'

        }}>

        <IconButton color="primary" sx={{ ml: 1, height: '5px', flexGrow: '1' }} onClick={onPasteClick}>
          <ContentPasteIcon />
        </IconButton>
        <IconButton color="primary" sx={{ ml: 1, height: 'auto' }} onClick={(() => {
          alert('send clicked')
        })}>
          <SendIcon />
        </IconButton>
      </Box>
    </Box>
  );
};


const TakeText = ({ value, chosen, setChosen }) => {
  const theme = useTheme();
  const [text, setText ] = useState(null);
  const [showTextArea, setShowTextArea] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (value && !chosen.choosed) {
      setText(value);
      setChosen({
        choosed: true,
        text: true
      })
    }
  }, [])
  useEffect(() => {
    if (!chosen.choosed) {
      setShowTextArea(false)
      setText(null);
    } else {
      setShowTextArea(true)
    }
  }, [chosen])

  const handlePasteClick = async () => {

    try {
      const clipboardData = await navigator.clipboard.readText();
      if (clipboardData && clipboardData !== "") setText(clipboardData);

      setError(''); // Clear any previous errors
      setShowTextArea(true); // Show the textarea when the user clicks paste
    } catch (err) {
      setError('Unable to paste text');
    }
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      height={showTextArea ? '100%' : 'auto'}
      width={showTextArea ? '100%' : 'auto'}
      sx={{
        borderRadius: 2,
        bgcolor: theme.palette.background.default,

      }}
      onClick={(() => {
        setChosen({
          choosed: true,
          text: true
        })
      })}

    >
      {!showTextArea ? (
        <Button variant="outlined" color="primary" onClick={handlePasteClick} startIcon={<ContentPasteIcon />}>
          Enter or Paste Text
        </Button>
      ) : (
        <TextAreaWithPasteIcon value={value} onChange={handleChange} onPasteClick={handlePasteClick} />
      )}

      {
        error && (
          <Alert
            severity="warning"
            sx={{
              flexShrink: 0,
              minWidth: '200px',
              position: 'fixed',
              top: '20px',
              right: '20px',
              zIndex: 9999,
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.text.primary,
            }}
            onClose={() => setError('')}
          >
            <AlertTitle>Warning</AlertTitle>
            {error}
          </Alert>
        )
      }
    </Box >
  );
};

export default TakeText;