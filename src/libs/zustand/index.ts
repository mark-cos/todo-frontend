import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { createTaskSlice } from './slices/taskSlice';

export const taskStore = create(devtools(createTaskSlice));
