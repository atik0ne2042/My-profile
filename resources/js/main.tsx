import React from 'react';
import ReactDOM from 'react-dom/client';
import { StandaloneApp } from './StandaloneApp';
import '../css/app.css';

const rootEl = document.getElementById('app');
if (rootEl) {
  ReactDOM.createRoot(rootEl).render(
    <React.StrictMode>
      <StandaloneApp />
    </React.StrictMode>
  );
}

