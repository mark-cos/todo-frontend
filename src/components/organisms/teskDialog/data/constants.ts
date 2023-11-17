import { AddTask, Category } from '@/types/task/task.type';
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

// TODO:TESTCODE
export const categories: Category[] = [
  {
    id: 1,
    name: 'work',
    color: 'bg-red-200',
    icon: '🌈',
  },
  {
    id: 2,
    name: 'java study',
    color: 'bg-amber-950',
    icon: '🔥',
  },
  {
    id: 3,
    name: 'travel',
    color: 'bg-yellow-200',
    icon: '⚡',
  },
  {
    id: 4,
    name: 'work',
    color: 'bg-blue-400',
    icon: '🎶',
  },
];
