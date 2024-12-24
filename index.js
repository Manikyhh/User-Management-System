// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';  // Note: Import from 'react-dom/client'
import App from './App';
import { UserProvider } from './context/UserContext';  // Import the UserProvider

// Create a root for React 18
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app with UserProvider wrapping it
root.render(
  <UserProvider>
    <App />
  </UserProvider>
);
