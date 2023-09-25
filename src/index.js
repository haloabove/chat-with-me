import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux'
import { store } from './store/index.js'
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.css';
import './main.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider >
);

reportWebVitals();
