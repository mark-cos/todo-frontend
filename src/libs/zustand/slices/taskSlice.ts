import { AddTask, TASK_FORM_STEP, Task, TaskFilter } from '@/types/task/task.type';
import { format } from 'date-fns';
import { StateCreator, create } from 'zustand';

type TaskState = {
  taskFormStep: TASK_FORM_STEP;
  isShowModal: boolean;
  task: AddTask | Task;
  filter: TaskFilter;
  isEditMode: boolean;
};

type TaskAction = {
  setTaskFormStep: (taskFormStep: TASK_FORM_STEP) => void;
  setIsShowModal: (isShowModal: boolean) => void;
  setTask: (task: Partial<AddTask | Task>) => void;
  setFilter: (filter: Partial<TaskFilter>) => void;
  setIsEditMode: (isEditMode: boolean) => void;
};

export const initialTaskState: TaskState = {
  taskFormStep: TASK_FORM_STEP.MAIN,
  isShowModal: false,
  filter: {
    isCompleted: 'all',
    keyword: '',
    period: 'today',
  },
  task: {
    _id: '',
    title: '',
    description: '',
    priority: 5,
    taskDate: format(new Date(), 'yyyy-MM-dd'),
    taskTime: '00:00',
    isCompleted: false,
    category: {
      _id: '',
      color: '',
      icon: '',
      name: '',
    },
  },
  isEditMode: false,
};

export const createTaskSlice: StateCreator<TaskState & TaskAction, [], []> = (set) => ({
  ...initialTaskState,
  setTaskFormStep: (taskFormStep: TASK_FORM_STEP) =>
    set(() => ({
      taskFormStep,
    })),
  setIsShowModal: (isShowModal: boolean) =>
    set(() => ({
      isShowModal,
    })),
  setTask: (task: Partial<AddTask | Task>) =>
    set((state) => ({
      task: { ...state.task, ...task },
    })),
  setFilter: (filter: Partial<TaskFilter>) =>
    set((state) => ({
      filter: { ...state.filter, ...filter },
    })),
  setIsEditMode: (isEditMode: boolean) =>
    set(() => ({
      isEditMode,
    })),
});
