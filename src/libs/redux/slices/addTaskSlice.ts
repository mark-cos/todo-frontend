import { ADD_TASK_FORM_STEPS, AddTask } from '@/types/task/task.type';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { format } from 'date-fns';

/* Types */
export interface AddTaskSliceState {
  addTaskFormStep: ADD_TASK_FORM_STEPS;
  task: AddTask;
}

const initialState: AddTaskSliceState = {
  addTaskFormStep: ADD_TASK_FORM_STEPS.INIT,
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
      { payload: addTaskFormStep }: PayloadAction<ADD_TASK_FORM_STEPS>,
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
