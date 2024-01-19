import http from '@/libs/http';
import { TaskFilter } from '@/libs/redux';
import { AddTask, Task } from '@/types/task/task.type';

export const getTasks = (filter: TaskFilter) =>
  http.get<Task[]>('/api/task/all', {
    params: filter,
  });
export const postTask = (newTask: AddTask) => http.post<Task>('/api/task', newTask);
export const putTaskIsCompleted = (taskId: string, isCompleted: boolean) =>
  http.put<Task>(`/api/task/completed/${taskId}`, { isCompleted });
