import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider
} from 'react-router-dom';
import './index.css';
import { router } from 'src/app/router.tsx';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
