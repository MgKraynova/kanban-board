import { queryOptions } from '@tanstack/react-query';
import { TTask } from 'entities/task';
import { fetchTasks } from './fetch-tasks.ts';

export const taskQueries = {
  tasks: () =>
    queryOptions({
      queryKey: ['tasks'],
      queryFn: async () => {
        const tasks = await fetchTasks();
        if (Array.isArray(tasks)) {
          return tasks;
        }
        throw new Response('', {
          status: 500,
          statusText: 'Error',
        });
      },
      select: (data) => {
        const newTasks: TTask[] = [];
        const tasksInProgress: TTask[] = [];
        const finishedTasks: TTask[] = [];

        data.forEach((item) => {
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
          finishedTasks,
          tasksInProgress,
        };
      }
    }),
};
