import { InferType, date, number, object, string } from 'yup';

export const categorySchema = object({
  _id: string().required(),
  name: string().required('category_create.input.name.required'),
  icon: string().required('category_create.input.icon.required'),
  color: string().required('category_create.input.color.required'),
});
export type Category = InferType<typeof categorySchema>;

export const categoryAddSchema = categorySchema.omit(['_id']);
export type CategoryAdd = InferType<typeof categoryAddSchema>;

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
  CREATE_CATEGORY,
}
