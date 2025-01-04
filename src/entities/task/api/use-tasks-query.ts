import { useQuery } from '@tanstack/react-query';
import { taskQueries } from './task.queries.ts';

export const useTasks = () => {
  const { data, isLoading, isSuccess } = useQuery(taskQueries.tasks());

  return {
    isLoading,
    isSuccess,
    data: data ?? {
      newTasks: [],
      tasksInProgress: [],
      finishedTasks: [],
    },
  };
};
