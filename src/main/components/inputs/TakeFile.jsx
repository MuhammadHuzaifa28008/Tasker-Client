import React, { useEffect, useRef, useState } from "react";
import { useDropzone } from "react-dropzone";
import {
  Box,
  Paper,
  Typography,
  Snackbar,
  // Container
} from "@mui/material";
// import { AttachFile } from "@mui/icons-material";
import { Alert } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const allowedTypes = {
  "application/pdf": [".pdf"],
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [
    ".docx",
  ],
  "application/vnd.openxmlformats-officedocument.presentationml.presentation": [
    ".ppt",
  ],
};

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB

function TakeFile({ chosen, setChosen }) {
  const inputRef = useRef(null);
  const theme = useTheme();
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [message, setMessage] = useState(null);
  const [severity, setSeverity] = useState(null);
  const [isActive, setIsActive] = useState(false);

  const { isFileDialogActive, acceptedFiles, getRootProps, getInputProps, isDragActive, fileRejections } = useDropzone({
    multiple: false,
    accept: allowedTypes,
    maxSize: MAX_FILE_SIZE,
  });



  useEffect(() => {
    const handleSnackbar = () => {
      if (acceptedFiles.length > 0) {
        showSnackBar('File is Good | Thanks', 'success')
      }
      else if (fileRejections.length > 0) {
        if (fileRejections[0].errors[0].code == 'file-invalid-type') {
          showSnackBar(`This File type is not Compatable`, 'error')
        }
        if (fileRejections[0].errors[0].code == 'file-too-large') {
          showSnackBar(`Compatable file size is 5 MB`, 'error')
        }
        if(fileRejections[0].errors[0].code == 'too-many-files'){
          showSnackBar(`Plz upload one file only`, 'error')

        }
      }
      else {
        setShowSnackbar(false);
      }
    }
    const showSnackBar = (message, severity) => {
      setMessage(message);
      setSeverity(severity)
      setShowSnackbar(true)
    }

    handleSnackbar();
  }, [acceptedFiles, fileRejections])


  useEffect(() => {
    if (!chosen.choosed && !chosen.file) setIsActive(false);

  }, [chosen])
  useEffect(() => {
    if (isActive) {
      setChosen({
        choosed: true,
        file: true
      })
    }
    else{
      
    }
  }, [isActive])
  useEffect(() => {
    if (isDragActive) setIsActive(true);
  }, [isDragActive])

  useEffect(() => {
    if (isFileDialogActive) {
      setIsActive(true)
    }
  }, [isFileDialogActive])


  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      backgroundColor: 'secondary.main',
      borderRadius: '5px',
      padding: '10px',
      height: '50%',
      width: '100%'
    }}>
      <Box  {...getRootProps()}

        sx={{
          '&:hover': {
            cursor: 'pointer'
          }
        }}
      >
        <Paper elevation={3} sx={{ height: '90%', width: '100%', padding: 2, marginTop: 2, backgroundColor: 'background.default' }}>
          <Box
            // Attach getRootProps to make this entire Box element a dropzone
            style={{
              height: "100%",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: isDragActive ? `2px dashed ${theme.palette.primary.main}` : "none",
              color: 'text.secondary',
            }}
          >
            {isDragActive ? (
              <Box
                sx={{
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>

                <Box>
                  <Typography variant="h1" color="primary">
                    Drop your file here
                  </Typography>
                </Box>
              </Box>
            ) : acceptedFiles.length > 0 ? (
              <Box sx={{ marginTop: 1, }}>
                <Typography variant="h3" color="primary">File uploaded successfully</Typography>
                <Typography variant="h6" color="primary">File name: {acceptedFiles[0].name}</Typography>
              </Box>
            ) : (
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                <Typography variant="h4">Drag and drop a file or click to select a file</Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {Object.entries(allowedTypes).map(([mime, extension]) => (
                    <Typography key={mime} variant="h6" padding={2} color={fileRejections.length > 0 ? "red" : "primary1"}>
                      {extension}
                    </Typography>
                  ))}
                </Box>
                <Typography variant="h6" color={fileRejections.length > 0 ? "red" : "primary"} > Max size   5 MB</Typography>
              </Box>
            )}
          </Box>
          <input {...getInputProps()} style={{ display: "none" }} ref={inputRef} />
        </Paper>
      </Box >

      {
        showSnackbar && (
          <Snackbar
            open={true}
            autoHideDuration={3000}
            onClose={() => {
              setShowSnackbar(false);
            }}
          >
            <Alert severity={severity}>
              {message}
            </Alert>
          </Snackbar>
        )

      }


    </Box >
  );
}

export default TakeFile;