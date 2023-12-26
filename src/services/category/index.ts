import http from '@/libs/http';
import { Category, CategoryAdd } from '@/types/task/task.type';

export const postCategory = (newCategory: CategoryAdd) =>
  http.post('/api/category', newCategory);

export const getCategories = () => http.get<Category[]>('/api/category');
