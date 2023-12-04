import { AddTask, TASK_FORM_STEP, Task } from '@/types/task/task.type';
import Flicking, { ChangedEvent, ReadyEvent } from '@egjs/flicking';
import { MoveEvent } from '@egjs/react-flicking';
import React, { useState } from 'react';

export const useTimePickerForm = (
  taskTime: string,
  handleSetFormValue: (name: keyof AddTask | keyof Task, value: any) => void,
  handleSetTaskFormStep: (taskFormStep: TASK_FORM_STEP) => void,
) => {
  const timeArr = taskTime.split(':'); //ex 12:25
  const hour24 = Number(timeArr[0]);
  const [ap, setAp] = useState(hour24 >= 12 ? 1 : 0); //AM:0, PM:1. Flicking의 기본값(인덱스)로 사용
  const [hour, setHour] = useState(ap === 0 ? hour24 : hour24 - 12);
  const [minute, setMinute] = useState(Number(timeArr[1]));

  // Flicking 랜더링 이벤트
  const updateTransform = (e: MoveEvent<Flicking> | ReadyEvent<Flicking>) => {
    e.currentTarget.panels.forEach((panel) => {
      const rotateVal = -panel.progress * 20;
      const sinRot = Math.sin(Math.abs((rotateVal * Math.PI) / 180));
      const depth = 150 * sinRot * sinRot;
      panel.element.style.transform = `translateZ(-${depth}px) rotateX(${rotateVal}deg)`;
      panel.element.style.color = `rgba(255,255,255, ${1 - sinRot * 2})`;
    });
  };

  // 기본으로 보여질 각 시간 단위의 Flicking 컴포넌트의 숫자 div 인덱스.
  const handleTimeDefaultValue = (type: string) => {
    if (type === 'ap') {
      return ap === 0 ? 0 : 1;
    } else if (type === 'h') {
      return hour;
    } else {
      return minute;
    }
  };

  // 각 시간 단위의 change이벤트에 state 설정
  const handleChangeFlicking = (e: ChangedEvent<Flicking>, type: string) => {
    if (type === 'ap') {
      setAp(e.index);
    } else if (type === 'h') {
      setHour(e.index);
    } else {
      setMinute(e.index);
    }
  };

  const handleSaveTime = () => {
    const _hour = ((ap === 0 ? 0 : 12) + hour).toString().padStart(2, '0');
    const _minute = minute.toString().padStart(2, '0');
    const taskTime = `${_hour}:${_minute}`;
    handleSetFormValue('taskTime', taskTime);
    handleSetTaskFormStep(TASK_FORM_STEP.MAIN);
  };

  return {
    updateTransform,
    handleChangeFlicking,
    handleTimeDefaultValue,
    handleSaveTime,
  };
};
