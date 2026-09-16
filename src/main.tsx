import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '@theme/index.css';
import { ToastProvider } from '@context/ToastContext';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Élément #root introuvable.');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ToastProvider>
      <App />
    </ToastProvider>
  </React.StrictMode>,
);
