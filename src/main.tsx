import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { InjectAxiosInterceptors, sharedTheme } from './shared'

import {
  SnackbarUtilsConfigurator,
} from './shared';

import { SnackbarProvider } from 'notistack';
import { ThemeProvider } from '@mui/material/styles'

// eslint-disable-next-line react/no-deprecated
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={sharedTheme}>
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
        autoHideDuration={1000}
      >
        <SnackbarUtilsConfigurator />
        <BrowserRouter>
          <InjectAxiosInterceptors />
          <App />
        </BrowserRouter>
      </SnackbarProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
