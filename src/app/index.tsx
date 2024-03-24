import React from 'react';
import ReactDOM from 'react-dom/client';
import 'src/app/index.css';
import { Board } from 'src/pages/board/board.component.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Board />
  </React.StrictMode>
);
