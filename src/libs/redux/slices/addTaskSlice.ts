import { ADD_TASK_FORM_STEP } from '@/components/organisms/addTeskDialog/AddTaskDialog';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface Task {
  id: number;
  title: string;
  description: string;
  time: number;
  priority: number;
  category: Category;
}

export interface Category {
  id: number;
  name: string;
  icon: string;
  color: string;
}

export type AddTask = Omit<Task, 'id'>;

/* Types */
export interface AddTaskSliceState {
  addTaskFormStep: ADD_TASK_FORM_STEP;
  task: AddTask;
}

const initialState: AddTaskSliceState = {
  // TODO: TEST
  addTaskFormStep: ADD_TASK_FORM_STEP.CATEGORY,
  task: {
    title: '',
    description: '',
    priority: 5,
    time: 0,
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
      { payload: addTaskFormStep }: PayloadAction<ADD_TASK_FORM_STEP>,
    ) => {
      state.addTaskFormStep = addTaskFormStep;
    },
    setTaskFormData: (state, { payload: taskFormData }: PayloadAction<AddTask>) => {
      state.task = taskFormData;
    },
  },
});

export default addTaskSlice;
