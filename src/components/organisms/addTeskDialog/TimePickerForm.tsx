import { Button } from '@/components/atoms';
import { useDispatch } from '@/libs/redux';
import addTaskSlice from '@/libs/redux/slices/addTaskSlice';
import { ADD_TASK_FORM_STEP } from '@/types/task/task.type';
import Flicking, {
  FlickingProps,
  MoveEvent,
  ReadyEvent,
  ViewportSlot,
} from '@egjs/react-flicking';
import React, { useState } from 'react';

const TimePickerForm = () => {
  const dispatch = useDispatch();

  const handleAddTaskFormStep = (addTaskFormStep: ADD_TASK_FORM_STEP) => {
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

  return (
    <div className="flex flex-col">
      <div className="mt-2 flex items-center justify-center gap-x-4">
        <div className="flex-1/3 relative w-16 overflow-hidden bg-[#272727] px-2">
          <Flicking
            horizontal={false}
            onReady={updateTransform}
            onMove={updateTransform}
            className={'h-[90px]'}
            onChanged={(e) => console.log(e)}
          >
            {new Array(24).fill('hour').map((_, index) => (
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
            onChanged={(e) => console.log(e)}
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
            onChanged={(e) => console.log(e)}
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

      <div className="flex">
        <div className="basis-1/2">
          <Button
            className="w-full"
            onClick={() => handleAddTaskFormStep(ADD_TASK_FORM_STEP.CALENDAR)}
          >
            Cancel
          </Button>
        </div>
        <div className="basis-1/2">
          <Button
            className="w-full"
            onClick={() => handleAddTaskFormStep(ADD_TASK_FORM_STEP.INIT)}
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TimePickerForm;
