import { InferType, number, object, string } from 'yup';

export const addTaskSchema = object({
  title: string().required('title is 필수').min(4).max(20),
  description: string().required(),
  priority: number(),
  time: number().required(),
  category: object({
    id: number().required(),
    name: string().required(),
    icon: string().required(),
    color: string().required(),
  }).required(),
});

export type AddTask = InferType<typeof addTaskSchema>;

export enum ADD_TASK_FORM_STEP {
  INIT,
  CALENDAR,
  TIME,
  CATEGORY,
  PRIORITY,
}

export interface Task {
  id: number;
  title: string;
  description: string;
  time: number;
  priority: number;
  category: Category;
}

export interface Category {
  id: number;
  name: string;
  icon: string;
  color: string;
}
