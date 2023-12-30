import { useClientTranslation } from '@/libs/i18n/useClientTranslation';
import { AddTask, TASK_FORM_STEP, Task } from '@/types/task/task.type';
import React, { useEffect, useRef, useState } from 'react';

export const usePrioritySelectForm = (
  priority: number,
  handleSetFormValue: (name: keyof AddTask | keyof Task, value: any) => void,
  handleSetTaskFormStep: (taskFormStep: TASK_FORM_STEP) => void,
) => {
  const { t } = useClientTranslation('taskDialog');
  const firstPriorityBtnRef = useRef<HTMLButtonElement>(null);
  const [selectedPriority, setSelectedPriority] = useState(priority);

  const handleSavePriority = () => {
    handleSetFormValue('priority', selectedPriority);
    handleSetTaskFormStep(TASK_FORM_STEP.MAIN);
  };

  return {
    t,
    firstPriorityBtnRef,
    selectedPriority,
    setSelectedPriority,
    handleSavePriority,
  };
};
