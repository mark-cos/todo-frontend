import { TASK_FORM_STEP, AddTask } from '@/types/task/task.type';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { format } from 'date-fns';

export type PeriodFilter = 'today' | 'week' | 'month';
export type IsCompletedFilter = 'all' | 'task' | 'done';
export interface TaskFilter {
  keyword: string;
  period: PeriodFilter;
  isCompleted: IsCompletedFilter;
}

export interface TaskSliceState {
  taskFormStep: TASK_FORM_STEP;
  isShowModal: boolean;
  task: AddTask;
  filter: TaskFilter;
}

const initialState: TaskSliceState = {
  taskFormStep: TASK_FORM_STEP.MAIN,
  isShowModal: false,
  filter: {
    isCompleted: 'all',
    keyword: '',
    period: 'today',
  },
  task: {
    title: '',
    description: '',
    priority: 5,
    taskDate: format(new Date(), 'yyyy-MM-dd'),
    taskTime: '00:00:00',
    isCompleted: false,
    category: {
      _id: '',
    },
  },
};

const taskSlice = createSlice({
  name: 'taks',
  initialState,
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
      { payload: taskFormData }: PayloadAction<Partial<AddTask>>,
    ) => {
      state.task = { ...state.task, ...taskFormData };
    },
    setFilter: (state, { payload: filter }: PayloadAction<Partial<TaskFilter>>) => {
      state.filter = { ...state.filter, ...filter };
    },
  },
});

export default taskSlice;
