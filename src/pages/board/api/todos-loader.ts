import { TTodo } from 'entities/task';
import { BACKEND_BASE_URL } from 'shared/config';

export const todosLoader = async () => {
  const res = await fetch(`${BACKEND_BASE_URL}/todos`).then(res => res.json() as Promise<TTodo[]>);

  const newTodos: TTodo[] = [];
  const todosInProgress: TTodo[] = [];
  const doneTodos: TTodo[] = [];

  res.forEach(item => {
    switch (item.status) {
      case 'NEW': {
        newTodos.push(item);
        break;
      }
      case 'IN_PROGRESS': {
        todosInProgress.push(item);
        break;
      }
      default: {
        doneTodos.push(item);
      }
    }
  });

  return {
    newTodos,
    todosInProgress,
    doneTodos
  };
};