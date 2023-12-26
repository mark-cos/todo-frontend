import { AddTask, Category } from '@/types/task/task.type';
import { format } from 'date-fns';

export const defaultAddTask: AddTask = {
  title: '',
  description: '',
  taskDate: format(new Date(), 'yyyy-MM-dd'),
  taskTime: '00:00',
  category: {
    _id: 0,
    name: '',
    icon: '',
    color: '',
  },
  priority: 5,
};
