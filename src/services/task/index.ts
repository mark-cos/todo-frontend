import http from '@/libs/http';
import { Task } from '@/types/task/task.type';

export const getTaskList = () => http.get<Task[]>('/api/task/all');
