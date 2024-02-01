import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { createTaskSlice } from './slices/taskSlice';

const task = create(devtools(createTaskSlice));

const useStores = {
  task,
};

export default useStores;
