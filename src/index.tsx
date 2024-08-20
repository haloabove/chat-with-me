import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { Provider } from 'react-redux'
import { store } from './store/index.ts'
import reportWebVitals from './reportWebVitals.js';

import 'bootstrap/dist/css/bootstrap.css';
import './main.scss';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  );
} else {
  console.error("Root element not found");
}

reportWebVitals();
