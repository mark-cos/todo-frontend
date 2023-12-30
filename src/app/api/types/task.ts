import { AddTask, Task } from '@/types/task/task.type';
import { ObjectId } from 'mongodb';

export type ITask = Omit<AddTask, 'category'> & {
  email: string;
  categoryId: ObjectId;
};
