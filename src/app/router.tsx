import { createBrowserRouter } from 'react-router-dom';
import { Board } from 'pages/board';

export const router = createBrowserRouter([
  {
    path: '/board',
    element: <Board />,
    errorElement: <h1>Произошла неизвестная ошибка</h1>
  }
]);