import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './App.scss'
import { UserContextProvider } from './UserContext'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </React.StrictMode>
)
