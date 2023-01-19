import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { GlobalStore } from './store/global/global.store'
import App from './views/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStore>
      <App />
    </GlobalStore>
  </React.StrictMode>
);
