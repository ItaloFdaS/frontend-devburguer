import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyles from './styles/globalStyles.js';
import { ToastContainer } from 'react-toastify';
import { RouterProvider } from 'react-router-dom';
import { routers } from './routes/index.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routers} />
    <GlobalStyles />
    <ToastContainer theme="colored" />
  </React.StrictMode>,
);
