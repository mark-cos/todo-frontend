import { ADD_TASK_FORM_STEP } from '@/components/organisms/addTeskDialog/AddTaskDialog';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface Task {
  id: number;
  title: string;
  description: string;
  priority: number;
  category: Category;
}

export interface Category {
  id: number;
  name: string;
  icon: string;
  color: string;
}

/* Types */
export interface AddTaskSliceState {
  addTaskFormStep: ADD_TASK_FORM_STEP;
  task: Task;
}

const initialState: AddTaskSliceState = {
  // TODO: TEST
  addTaskFormStep: ADD_TASK_FORM_STEP.PRIORITY,
  task: {
    id: 0,
    title: '',
    description: '',
    priority: 5,
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
  },
});

export default addTaskSlice;
