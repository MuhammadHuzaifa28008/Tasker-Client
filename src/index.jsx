import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './main/App.jsx';
import './index.css';
import { ThemeProvider } from '@mui/material';
import Theme from './main/utils/Theme.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
    <ThemeProvider theme={Theme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>
  </React.StrictMode>
);
