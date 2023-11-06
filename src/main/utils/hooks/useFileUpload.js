import { useState, useEffect } from 'react';
import axios from 'axios';

function useFileUpload() {
  const [status, setStatus] = useState(null); // 'uploading', 'success', 'error'
  const [progress, setProgress] = useState(0); // Upload progress percentage
  const [error, setError] = useState(null);

  const dummyUploadFile = async (file) => {
    // Simulate a delay for demonstration purposes
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Simulate a random success or error
    const random = Math.random();
    if (random < 0.7) {
      setStatus('success');
      setProgress(100);
    } else {
      setStatus('error');
      setError('File upload failed');
    }
  };

  const uploadFile = async (file) => {
    setStatus('uploading');
    setProgress(0);
    setError(null);

    try {
      // Replace this with your actual upload logic
      // const response = await axios.post('your_upload_url', file, {
      //   onUploadProgress: (progressEvent) => {
      //     const percentage = Math.round((progressEvent.loaded / progressEvent.total) * 100);
      //     setProgress(percentage);
      //   },
      // });

      // Replace the dummyUploadFile with the actual upload function
      await dummyUploadFile(file);

      setStatus('success');
    } catch (err) {
      setStatus('error');
      setError('File upload failed');
    }
  };

  return { status, progress, error, uploadFile };
}

export default useFileUpload;
