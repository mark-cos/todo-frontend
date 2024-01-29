import { TASK_FORM_STEP, AddTask, Task, TaskFilter } from '@/types/task/task.type';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { format } from 'date-fns';

export interface TaskSliceState {
  taskFormStep: TASK_FORM_STEP;
  isShowModal: boolean;
  task: AddTask | Task;
  filter: TaskFilter;
  isEditMode: boolean;
}

export const initialTaskState: TaskSliceState = {
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

const taskSlice = createSlice({
  name: 'taks',
  initialState: initialTaskState,
  reducers: {
    setTaskFormStep: (
      state,
      { payload: taskFormStep }: PayloadAction<TASK_FORM_STEP>,
    ) => {
      state.taskFormStep = taskFormStep;
    },
    setIsShoModal: (state, { payload: isShowModal }: PayloadAction<boolean>) => {
      state.isShowModal = isShowModal;
    },
    setTaskFormData: (
      state,
      { payload: taskFormData }: PayloadAction<Partial<AddTask | Task>>,
    ) => {
      state.task = { ...state.task, ...taskFormData };
    },
    setFilter: (state, { payload: filter }: PayloadAction<Partial<TaskFilter>>) => {
      state.filter = { ...state.filter, ...filter };
    },
    setIsEditMode: (state, { payload: isEditMode }: PayloadAction<boolean>) => {
      state.isEditMode = isEditMode;
    },
  },
});

export default taskSlice;
