import { Button } from '@/components/atoms';
import React, { useState, useEffect, useRef } from 'react';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import 'react-day-picker/dist/style.css';
import 'react-day-picker/dist/style.module.css';
import './calendarPicker.css';
import { Control, Controller } from 'react-hook-form';
import { ADD_TASK_FORM_STEPS, AddTask, Task } from '@/types/task/task.type';

type CalendarPickerFormProps = {
  control: Control<AddTask>;
  task: Task | AddTask;
  setAddTask: (addTask: AddTask) => void;
  handleAddTaskFormStep: (addTaskFormStep: ADD_TASK_FORM_STEPS) => void;
};

const CalendarPickerForm = ({
  control,
  task,
  setAddTask,
  handleAddTaskFormStep,
}: CalendarPickerFormProps) => {
  const date = new Date(task.taskDate);
  const [selected, setSelected] = useState<Date>(date);

  const onSelect = (selectedDate: Date | undefined) => {
    if (!selectedDate) return;
    setSelected(selectedDate);
    setAddTask({ ...task, taskDate: format(selectedDate, 'yyyy-MM-dd') });
  };

  return (
    <div className="flex flex-col">
      <Controller
        name="taskDate"
        control={control}
        render={({ field: { onChange, value } }) => (
          <input type="hidden" name="taskDate" value={task.taskDate} />
        )}
      />
      <div className="flex-auto">
        <DayPicker
          mode="single"
          selected={selected}
          onSelect={(date) => onSelect(date)}
          showOutsideDays
          defaultMonth={selected}
        />
      </div>
      <div className="flex">
        <div className="basis-1/2">
          <Button
            className="w-full"
            onClick={() => handleAddTaskFormStep(ADD_TASK_FORM_STEPS.INIT)}
          >
            Cancel
          </Button>
        </div>
        <div className="basis-1/2">
          <Button
            className="w-full rounded-md"
            variant="contained"
            onClick={() => handleAddTaskFormStep(ADD_TASK_FORM_STEPS.TIME)}
          >
            Choose Time
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CalendarPickerForm;
