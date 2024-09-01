import { createBrowserRouter } from 'react-router-dom';
import { Board, tasksLoader } from 'pages/board';

export const router = createBrowserRouter([
  {
    path: '/board',
    element: <Board />,
    loader: tasksLoader,
    errorElement: <h1>Произошла неизвестная ошибка</h1>
  }
]);