import { AddTask, TASK_FORM_STEP, Task } from '@/types/task/task.type';
import React, { useEffect, useRef, useState } from 'react';

export const usePrioritySelectForm = (
  priority: number,
  handleSetFormValue: (name: keyof AddTask | keyof Task, value: any) => void,
  handleSetTaskFormStep: (taskFormStep: TASK_FORM_STEP) => void,
) => {
  const firstPriorityBtnRef = useRef<HTMLButtonElement>(null);
  const [selectedPriority, setSelectedPriority] = useState(priority);

  /**
   * 아이폰 미니12에서 메인 모달창의 중요도 아이콘과 중요도 10의 아이콘이 같은 위치로 인해
   * hover효과가 들어가는 이슈 발생으로 이후 포커스 설정하는 로직 추가
   */
  useEffect(() => {
    firstPriorityBtnRef.current?.focus();
  }, []);

  const handleSavePriority = () => {
    handleSetFormValue('priority', selectedPriority);
    handleSetTaskFormStep(TASK_FORM_STEP.MAIN);
  };

  return {
    firstPriorityBtnRef,
    selectedPriority,
    setSelectedPriority,
    handleSavePriority,
  };
};
