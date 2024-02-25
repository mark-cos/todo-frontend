import React from 'react';
import { ClassNames, DayPicker } from 'react-day-picker';
import './data/calendarPicker.css';
import { TASK_FORM_STEP } from '@/types/task/task.type';
import Button from '@/components/atoms/button/Button';
import { useCalendarPickerForm } from './CalendarPickerForm.hook';
import { CalendarPickerFormProps } from './taskDialog.types';
import { enUS, ko } from 'date-fns/locale';
import styles from 'react-day-picker/dist/style.module.css';

const CalendarPickerForm = ({
  taskDate,
  handleSetFormValue,
  handleSetTaskFormStep,
}: CalendarPickerFormProps) => {
  const { t, lng, selected, onSelect, handleSaveDate } = useCalendarPickerForm(
    taskDate,
    handleSetFormValue,
    handleSetTaskFormStep,
  );

  const classNames: ClassNames = {
    ...styles,
    root: `${styles.root} rdp-root`,
    table: `${styles.table} rdp-table`,
    month: `${styles.month} rdp-month`,
    head: `${styles.head} rdp-head`,
    day_today: `${styles.day_today} rdp-day-today`,
    head_cell: `${styles.head_cell} rdp-head-cell`,
    button: `${styles.button} rdp-button`,
    day_selected: `${styles.day_selected} rdp-day-selected`,
    day_outside: `${styles.day_outside} rdp-day-outside`,
    caption: `${styles.caption} rdp-caption`,
    caption_label: `${styles.caption_label} rdp-caption-label`,
    nav: `${styles.nav} rdp-nav`,
  };

  return (
    <div className="flex flex-col">
      <div className="flex-auto">
        <DayPicker
          locale={lng === 'en' ? enUS : ko}
          mode="single"
          selected={selected}
          onSelect={(date) => onSelect(date)}
          showOutsideDays
          defaultMonth={selected}
          classNames={classNames}
        />
      </div>
      <div className="flex">
        <div className="basis-1/2">
          <Button
            variant="text"
            className="w-full"
            onClick={() => handleSetTaskFormStep(TASK_FORM_STEP.MAIN)}
          >
            {t('button.cancel')}
          </Button>
        </div>
        <div className="basis-1/2">
          <Button
            className="w-full rounded-md"
            variant="contained"
            onClick={handleSaveDate}
          >
            {t('button.choose_time')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CalendarPickerForm;
