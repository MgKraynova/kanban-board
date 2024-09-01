import { createBrowserRouter } from 'react-router-dom';
import { Board, todosLoader } from 'pages/board';

export const router = createBrowserRouter([
  {
    path: '/board',
    element: <Board />,
    loader: todosLoader,
    errorElement: <h1>Произошла неизвестная ошибка</h1>
  }
]);