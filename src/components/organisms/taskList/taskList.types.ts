import { Task } from '@/types/task/task.type';

type TaskGroup = {
  name: string;
  items: Task[];
};

export type TaskStatus = {
  [key: string]: TaskGroup;
};

const tasks = [
  {
    title: 'Do Math Homework1',
    id: 1,
    description: 'very hard',
    priority: 5,
    taskDate: '2023-12-05',
    taskTime: '15:30',
    category: {
      id: 1,
      name: 'University',
      color: 'bg-red-400',
      icon: '🌈',
    },
  },
  {
    title: 'Do Math Homework2',
    id: 2,
    description: 'very hard',
    priority: 5,
    taskDate: '2023-12-05',
    taskTime: '15:30',
    category: {
      id: 2,
      name: 'University',
      color: 'bg-red-400',
      icon: '🌈',
    },
  },
  {
    title: 'Do Math Homework3',
    id: 3,
    description: 'very hard',
    priority: 5,
    taskDate: '2023-12-05',
    taskTime: '15:30',
    category: {
      id: 3,
      name: 'University',
      color: 'bg-red-400',
      icon: '🌈',
    },
  },
];

//FIXME: TESTCODE
export const taskStatus: TaskStatus = {
  today: {
    name: 'today',
    items: tasks,
  },
  complete: {
    name: 'To do',
    items: [],
  },
};
