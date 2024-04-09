import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import YamsContextProvider from './utils/context/yamsContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <YamsContextProvider>
        <Router>
          <App />
        </Router>
      </YamsContextProvider>
  </React.StrictMode>,
)
