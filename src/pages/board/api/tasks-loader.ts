import { TTask } from 'entities/task';
import { BACKEND_BASE_URL } from 'shared/config';

export const tasksLoader = async () => {
  const res = await fetch(`${BACKEND_BASE_URL}/tasks`).then(res => res.json() as Promise<TTask[]>);

  const newTasks: TTask[] = [];
  const tasksInProgress: TTask[] = [];
  const finishedTasks: TTask[] = [];

  res.forEach(item => {
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

  return {
    newTasks,
    tasksInProgress,
    finishedTasks
  };
};