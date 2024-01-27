import http from '@/libs/http';
import { TaskFilter } from '@/libs/redux';
import { AddTask, Task } from '@/types/task/task.type';

export const getTasks = (filter: TaskFilter) =>
  http.get<Task[]>('/api/tasks', {
    params: filter,
  });
export const getTask = (taskId: string) => http.get<Task[]>(`/api/tasks/${taskId}`);
export const postTask = (newTask: AddTask) => http.post<Task>('/api/tasks', newTask);
export const putTaskIsCompleted = (taskId: string, isCompleted: boolean) =>
  http.put<Task>(`/api/tasks/completed/${taskId}`, { isCompleted });
export const deleteTask = (taskId: string) =>
  http.delete<{ deletedCount: number }>(`/api/tasks/${taskId}`);
export const putTask = (taskId: string, task: AddTask) =>
  http.put<{ deletedCount: number }>(`/api/tasks/${taskId}`, task);
