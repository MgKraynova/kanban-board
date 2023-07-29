import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Board } from './pages/board/board.component';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Board />
  </React.StrictMode>
);
