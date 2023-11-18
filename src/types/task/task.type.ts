import { InferType, date, number, object, string } from 'yup';

export const categorySchema = object({
  id: number().required(),
  name: string().required(),
  icon: string().required(),
  color: string().required(),
});
export type Category = InferType<typeof categorySchema>;

export const taskSchema = object({
  id: number().required(),
  title: string().required('title is 필수').min(4).max(20),
  description: string().required(),
  priority: number().required(),
  taskDate: string().required(),
  taskTime: string().required(),
  category: categorySchema.required(),
});
export type Task = InferType<typeof taskSchema>;

export const addTaskSchema = taskSchema.omit(['id']);
export type AddTask = InferType<typeof addTaskSchema>;

export enum TASK_FORM_STEP {
  MAIN,
  CALENDAR,
  TIME,
  CATEGORY,
  PRIORITY,
}
