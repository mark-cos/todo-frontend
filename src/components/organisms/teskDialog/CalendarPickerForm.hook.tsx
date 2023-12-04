import { AddTask, TASK_FORM_STEP, Task } from '@/types/task/task.type';
import { format } from 'date-fns';
import React, { useState } from 'react';

export const useCalendarPickerForm = (
  taskDate: string,
  handleSetFormValue: (name: keyof AddTask | keyof Task, value: any) => void,
  handleSetTaskFormStep: (taskFormStep: TASK_FORM_STEP) => void,
) => {
  const date = new Date(taskDate);
  const [selected, setSelected] = useState<Date>(date);

  const onSelect = (selectedDate: Date | undefined) => {
    if (!selectedDate) return;
    setSelected(selectedDate);
  };

  const handleSaveDate = () => {
    handleSetFormValue('taskDate', format(selected, 'yyyy-MM-dd'));
    handleSetTaskFormStep(TASK_FORM_STEP.TIME);
  };

  return { selected, onSelect, handleSaveDate };
};
