import { Button } from '@/components/atoms';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import 'react-day-picker/dist/style.css';
import 'react-day-picker/dist/style.module.css';
import './calendarPicker.css';
import { Control, Controller } from 'react-hook-form';
import { TASK_FORM_STEP, AddTask, Task } from '@/types/task/task.type';

type CalendarPickerFormProps = {
  taskDate: string;
  handleSetFormValue: (name: keyof AddTask, value: any) => void;
  handleSetTaskFormStep: (addTaskFormStep: TASK_FORM_STEP) => void;
};

const CalendarPickerForm = ({
  taskDate,
  handleSetFormValue,
  handleSetTaskFormStep,
}: CalendarPickerFormProps) => {
  console.log(11111111111);

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

  return (
    <div className="flex flex-col">
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
            onClick={() => handleSetTaskFormStep(TASK_FORM_STEP.MAIN)}
          >
            Cancel
          </Button>
        </div>
        <div className="basis-1/2">
          <Button
            className="w-full rounded-md"
            variant="contained"
            onClick={handleSaveDate}
          >
            Choose Time
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CalendarPickerForm;
