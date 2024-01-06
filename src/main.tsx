import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { InjectAxiosInterceptors } from './shared'

// eslint-disable-next-line react/no-deprecated
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <InjectAxiosInterceptors />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
