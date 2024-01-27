import { AddTask, Category, TASK_FORM_STEP, Task } from '@/types/task/task.type';
import React from 'react';

export type TaskDialogProps = {
  dictionary?: {};
  isNewTask?: boolean;
};

export type TaskMainFormProps = {
  title: string;
  description: string;
  handleSetFormValue: (name: keyof AddTask | keyof Task, value: any) => void;
  handleSetTaskFormStep: (taskFormStep: TASK_FORM_STEP) => void;
};

export type CalendarPickerFormProps = {
  taskDate: string;
  handleSetFormValue: (name: keyof AddTask | keyof Task, value: any) => void;
  handleSetTaskFormStep: (taskFormStep: TASK_FORM_STEP) => void;
};

export type TimePickerFormProps = {
  taskTime: string;
  handleSetFormValue: (name: keyof AddTask | keyof Task, value: any) => void;
  handleSetTaskFormStep: (taskFormStep: TASK_FORM_STEP) => void;
};

export type CategorySelectFormProps = {
  categoryId: string;
  handleSetFormValue: (name: keyof AddTask | keyof Task, value: any) => void;
  handleSetTaskFormStep: (taskFormStep: TASK_FORM_STEP) => void;
};

export type CategoryCreateFormProps = {
  handleSetTaskFormStep: (taskFormStep: TASK_FORM_STEP) => void;
};

export type PrioritySelectFormProps = {
  priority: number;
  handleSetFormValue: (name: keyof AddTask | keyof Task, value: any) => void;
  handleSetTaskFormStep: (taskFormStep: TASK_FORM_STEP) => void;
};
