import http from '@/libs/http';
import { Category, CategoryAdd } from '@/types/task/task.type';

export const postCategory = (newCategory: CategoryAdd) =>
  http.post<Category>('/api/category', newCategory);
export const putCategory = ({
  categoryId,
  category,
}: {
  categoryId: string;
  category: CategoryAdd;
}) => http.put<Category>(`/api/category/${categoryId}`, category);
export const deleteCategory = (categoryId: string) =>
  http.delete<{ deletedCount: number }>(`/api/category/${categoryId}`);

export const getCategories = () => http.get<Category[]>('/api/category');
