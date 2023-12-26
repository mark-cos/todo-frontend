import http from '@/libs/http';
import { AddTask, Task } from '@/types/task/task.type';

export const getTaskList = () => http.get<Task[]>('/api/task/all');
export const postTask = (newTask: AddTask) => http.post<Task>('/api/task', newTask);
