import { TASK_FORM_STEP, AddTask } from '@/types/task/task.type';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { format } from 'date-fns';

/* Types */
export interface AddTaskSliceState {
  addTaskFormStep: TASK_FORM_STEP;
  task: AddTask;
}

const initialState: AddTaskSliceState = {
  addTaskFormStep: TASK_FORM_STEP.MAIN,
  task: {
    title: '',
    description: '',
    priority: 5,
    taskDate: format(new Date(), 'yyyy-MM-dd'),
    taskTime: '00:00:00',
    category: {
      id: 0,
      name: '',
      color: '',
      icon: '',
    },
  },
};

const addTaskSlice = createSlice({
  name: 'addTask',
  initialState,
  reducers: {
    setAddTaskFormStep: (
      state,
      { payload: addTaskFormStep }: PayloadAction<TASK_FORM_STEP>,
    ) => {
      state.addTaskFormStep = addTaskFormStep;
    },
    setTaskFormData: (
      state,
      { payload: taskFormData }: PayloadAction<Partial<AddTask>>,
    ) => {
      state.task = { ...state.task, ...taskFormData };
    },
  },
});

export default addTaskSlice;
