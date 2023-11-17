import { AddTask } from '@/types/task/task.type';
import { format } from 'date-fns';

export const defaultAddTask: AddTask = {
  title: '',
  description: '',
  taskDate: format(new Date(), 'yyyy-MM-dd'),
  taskTime: '00:00',
  category: {
    id: 0,
    name: '',
    icon: '',
    color: '',
  },
  priority: 5,
};
