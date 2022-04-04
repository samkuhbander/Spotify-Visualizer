import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createMuiTheme, ThemeProvider } from '@mui/material'

const theme = createMuiTheme ({
  palette: {
    type: 'light',
    primary: {
      main: '#3988f9',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#eae9e9',
    },
  },
  typography: {
    fontFamily: 'Open Sans',
  },
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

