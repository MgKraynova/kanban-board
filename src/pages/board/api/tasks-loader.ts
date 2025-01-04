import { TTask } from 'entities/task';
import { fetchTasks } from 'entities/task';

export const tasksLoader = async () => {
  // const res = await fetch(`${BACKEND_BASE_URL}/tasks`).then(res => res.json() as Promise<TTask[]>);

  const res = await fetchTasks();

  const newTasks: TTask[] = [];
  const tasksInProgress: TTask[] = [];
  const finishedTasks: TTask[] = [];

  if (Array.isArray(res)) {
    res.forEach((item) => {
      switch (item.status) {
        case 'NEW': {
          newTasks.push(item);
          break;
        }
        case 'IN_PROGRESS': {
          tasksInProgress.push(item);
          break;
        }
        default: {
          finishedTasks.push(item);
        }
      }
    });
  }

  return {
    newTasks,
    tasksInProgress,
    finishedTasks,
  };
};
