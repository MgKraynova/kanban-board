import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider
} from 'react-router-dom';
import './index.css';
import { QueryProvider } from 'src/app/providers/query-provider.tsx';
import { router } from 'src/app/router.tsx';
import { queryClient } from 'shared/api/query-client.ts';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryProvider>
  </React.StrictMode>,
);
