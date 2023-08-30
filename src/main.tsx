import GitContext from "./GitContext"
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GitContext>
    <App />
    </GitContext>
  </React.StrictMode>,
)
