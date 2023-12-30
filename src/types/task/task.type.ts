import { InferType, boolean, number, object, string } from 'yup';

export const categorySchema = object({
  _id: string().required('task_main.input.categoryId.required'),
  name: string().min(2).max(11).required('category_create.input.name.required'),
  icon: string().required('category_create.input.icon.required'),
  color: string().required('category_create.input.color.required'),
});
export type Category = InferType<typeof categorySchema>;

export const categoryAddSchema = categorySchema.omit(['_id']);
export type CategoryAdd = InferType<typeof categoryAddSchema>;

export const taskSchema = object({
  _id: number().required(''),
  title: string().required('task_main.input.title.required').min(4).max(20),
  description: string().required('task_main.input.description.required'),
  priority: number().required('task_main.input.priority.required'),
  taskDate: string().required('task_main.input.taskDate.required'),
  taskTime: string().required('task_main.input.taskTime.required'),
  isCompleted: boolean().default(false),
  category: categorySchema.required('task_main.input.category.required'),
});
export type Task = InferType<typeof taskSchema>;

export const addTaskSchema = taskSchema.omit(['_id', 'category']).concat(
  object({
    category: categorySchema.pick(['_id']),
  }),
);
export type AddTask = InferType<typeof addTaskSchema>;

export enum TASK_FORM_STEP {
  MAIN,
  CALENDAR,
  TIME,
  CATEGORY,
  PRIORITY,
  CREATE_CATEGORY,
}
