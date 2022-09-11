import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import './index.css';
import App from './App';
import { store } from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <CssBaseline />
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </>
);