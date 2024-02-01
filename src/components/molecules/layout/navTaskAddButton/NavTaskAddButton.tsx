'use client';

import Image from 'next/image';
import React from 'react';
import addIcon from '@/images/icons/add.svg?url';
import { TASK_FORM_STEP } from '@/types/task/task.type';
import { taskStore } from '@/libs/zustand';
import { initialTaskState } from '@/libs/zustand/slices/taskSlice';

const NavTaskAddButton = () => {
  const { isEditMode, setTaskFormStep, setTask, setIsShowModal } = taskStore(
    (state) => state,
  );

  /**
   * task 추가버튼 이벤트
   * 수정화면에서는 추가가 불가능(현재 구조에서 모달과  store 같이 사용하므로)
   * state초기화 및 모달 단계 메인으로 설정
   */
  const handleClickNewTask = () => {
    setTaskFormStep(TASK_FORM_STEP.MAIN);
    setTask(initialTaskState.task);
    setIsShowModal(true);
  };
  return !isEditMode ? (
    <button
      className="absolute left-[-32px] top-[-52px] flex h-[64px] w-[64px] rounded-full bg-primary"
      onClick={handleClickNewTask}
    >
      <Image src={addIcon} alt="addIcon" className="m-auto" />
    </button>
  ) : null;
};

export default NavTaskAddButton;
