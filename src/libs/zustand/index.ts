import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { createTaskSlice } from './slices/taskSlice';
import { createCalendarSlice } from './slices/calendarSlice';

export const taskStore = create(devtools(createTaskSlice));
export const calendarStore = create(devtools(createCalendarSlice));
