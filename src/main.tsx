import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { CypressHistorySupport } from 'cypress-react-router';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <CypressHistorySupport />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
