import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './style.css'
import { BrowserRouter } from "react-router-dom";
import { ContextProvider } from './firebase/FirebaseContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <ContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ContextProvider>
)
