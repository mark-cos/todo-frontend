import { Task } from '@/types/task/task.type';

type TaskGroup = {
  name: string;
  items: Task[];
};

export type TaskStatus = {
  [key: string]: TaskGroup;
};
