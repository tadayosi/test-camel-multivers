import '@patternfly/react-core/dist/styles/base.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
