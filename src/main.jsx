import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "../public/sass/main.scss"

import { OpenNavProvider } from './components/context/openNavContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <OpenNavProvider>
      <App />
    </OpenNavProvider>
  </React.StrictMode>,
)
