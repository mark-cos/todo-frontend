import { AddTask, TASK_FORM_STEP, Task } from '@/types/task/task.type';
import React, { useEffect, useRef } from 'react';

export const useTaskMainForm = (
  title: string,
  description: string,
  handleSetFormValue: (name: keyof AddTask | keyof Task, value: any) => void,
  handleSetTaskFormStep: (taskFormStep: TASK_FORM_STEP) => void,
) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (titleRef.current) titleRef.current.value = title;
    if (descriptionRef.current) descriptionRef.current.value = description;
  }, []);

  const handleOnClickTaskStep = (taskFormStep: TASK_FORM_STEP) => {
    if (titleRef.current) handleSetFormValue('title', titleRef.current?.value);
    if (descriptionRef.current)
      handleSetFormValue('description', descriptionRef.current?.value);
    handleSetTaskFormStep(taskFormStep);
  };

  return { titleRef, descriptionRef, handleOnClickTaskStep };
};
