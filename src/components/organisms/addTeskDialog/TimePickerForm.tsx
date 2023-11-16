import { Button } from '@/components/atoms';
import { useDispatch, useSelector } from '@/libs/redux';
import addTaskSlice from '@/libs/redux/slices/addTaskSlice';
import { ADD_TASK_FORM_STEPS } from '@/types/task/task.type';
import Flicking, {
  ChangedEvent,
  MoveEvent,
  ReadyEvent,
  ViewportSlot,
} from '@egjs/react-flicking';
import React, { useState } from 'react';

const TimePickerForm = () => {
  const dispatch = useDispatch();
  const task = useSelector((state) => state.addTask.task);

  const handleAddTaskFormStep = (addTaskFormStep: ADD_TASK_FORM_STEPS) => {
    dispatch(addTaskSlice.actions.setAddTaskFormStep(addTaskFormStep));
  };

  const updateTransform = (e: MoveEvent<Flicking> | ReadyEvent<Flicking>) => {
    e.currentTarget.panels.forEach((panel) => {
      const rotateVal = -panel.progress * 20;
      const sinRot = Math.sin(Math.abs((rotateVal * Math.PI) / 180));
      const depth = 150 * sinRot * sinRot;
      panel.element.style.transform = `translateZ(-${depth}px) rotateX(${rotateVal}deg)`;
      panel.element.style.color = `rgba(255,255,255, ${1 - sinRot * 2})`;
    });
  };

  const timeArr = task.taskTime.split(':');
  const hour24 = Number(timeArr[0]);
  const [ap, setAp] = useState(hour24 >= 12 ? 1 : 0); //AM:0, PM:1. Flicking의 기본값(인덱스)로 사용
  const [hour, setHour] = useState(ap === 0 ? hour24 : hour24 - 12);
  const [minute, setMinute] = useState(Number(timeArr[1]));

  // 기본으로 보여질 각 시간 단위의 Flicking 인덱스.
  const handleTimeDefaultValue = (type: string) => {
    if (type === 'ap') {
      return ap === 0 ? 0 : 1;
    } else if (type === 'h') {
      return hour;
    } else {
      return minute;
    }
  };

  // chage이벤트 타입에 따른 각 단위에 state 설정
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
    dispatch(addTaskSlice.actions.setTaskFormData({ taskTime }));
    handleAddTaskFormStep(ADD_TASK_FORM_STEPS.INIT);
  };

  return (
    <div className="flex flex-col">
      <div className="mt-2 flex items-center justify-center gap-x-4">
        <div className="flex-1/3 relative w-16 overflow-hidden bg-[#272727] px-2">
          <Flicking
            horizontal={false}
            onReady={updateTransform}
            onMove={updateTransform}
            className={'h-[90px]'}
            onChanged={(e) => handleChangeFlicking(e, 'h')}
            defaultIndex={handleTimeDefaultValue('h')}
          >
            {new Array(12).fill('hour').map((_, index) => (
              <div className={`text-center`} key={_ + index}>
                {index.toString().padStart(2, '0')}
              </div>
            ))}

            <ViewportSlot>
              <div className="absolute top-[30px] h-[32px] w-full"></div>
              <div className="shadow-top"></div>
              <div className="shadow-bottom"></div>
            </ViewportSlot>
          </Flicking>
        </div>

        <div className="flex-none">:</div>

        <div className="flex-1/3 relative w-16 overflow-hidden bg-[#272727] px-2">
          <Flicking
            horizontal={false}
            onReady={updateTransform}
            onMove={updateTransform}
            className={'h-[90px]'}
            onChanged={(e) => handleChangeFlicking(e, 'm')}
            defaultIndex={handleTimeDefaultValue('m')}
          >
            {new Array(60).fill('hour').map((_, index) => (
              <div className="text-center" key={_ + index}>
                {index.toString().padStart(2, '0')}
              </div>
            ))}

            <ViewportSlot>
              <div className="absolute top-[30px] h-[32px]"></div>
              <div className="shadow-top"></div>
              <div className="shadow-bottom"></div>
            </ViewportSlot>
          </Flicking>
        </div>

        <div className="flex-none">:</div>

        <div className="flex-1/3 relative w-16 overflow-hidden bg-[#272727] px-2">
          <Flicking
            horizontal={false}
            onReady={updateTransform}
            onMove={updateTransform}
            className={'h-[90px]'}
            onChanged={(e) => handleChangeFlicking(e, 'ap')}
            defaultIndex={handleTimeDefaultValue('ap')}
          >
            {['AM', 'PM'].map((value, index) => (
              <div className="text-center" key={value}>
                {value}
              </div>
            ))}

            <ViewportSlot>
              <div className="absolute top-[30px] h-[32px] w-full"></div>
              <div className="shadow-top"></div>
              <div className="shadow-bottom"></div>
            </ViewportSlot>
          </Flicking>
        </div>
      </div>

      <div className="mt-6 flex">
        <div className="basis-1/2">
          <Button
            className="w-full"
            onClick={() => handleAddTaskFormStep(ADD_TASK_FORM_STEPS.CALENDAR)}
          >
            Cancel
          </Button>
        </div>
        <div className="basis-1/2">
          <Button
            className="w-full rounded-md"
            variant="contained"
            onClick={handleSaveTime}
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TimePickerForm;
