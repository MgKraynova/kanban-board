import { TTask } from 'entities/task';
import { BACKEND_BASE_URL } from 'shared/config';

export const fetchTasks = async (): Promise<TTask[] | Error> => {
  const res = await fetch(`${BACKEND_BASE_URL}/tasks`);
  if (!res.ok) {
    throw new Error('Failed to fetch tasks');
  }
  return await res.json();
};
