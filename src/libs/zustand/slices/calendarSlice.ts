import { format } from 'date-fns';
import { StateCreator, create } from 'zustand';

type CalendarState = {
  selectedDate: string;
};

type CalendarAction = {
  setSelectedDate: (selectedDate: string) => void;
};

export const initialCalendarState: CalendarState = {
  selectedDate: format(new Date(), 'yyyy-MM-dd'),
};

export const createCalendarSlice: StateCreator<CalendarState & CalendarAction, [], []> = (
  set,
) => ({
  ...initialCalendarState,
  setSelectedDate: (selectedDate: string) =>
    set(() => ({
      selectedDate,
    })),
});
