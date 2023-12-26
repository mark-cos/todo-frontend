import { CategoryAdd } from '@/types/task/task.type';
import { ObjectId } from 'mongodb';

export interface ICategoryAdd extends CategoryAdd {
  email: string;
  careatedBy: Date;
}
export interface ICategory extends CategoryAdd {
  _id: ObjectId;
  email: string;
  careatedBy: Date;
}
