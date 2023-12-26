import http from '@/libs/http';
import { CategoryAdd } from '@/types/task/task.type';

export const postCategory = (newCategory: CategoryAdd) =>
  http.post('/api/category', newCategory);
