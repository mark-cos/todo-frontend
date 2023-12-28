import { TASK_FORM_STEP } from '@/types/task/task.type';
import Flicking, { ViewportSlot } from '@egjs/react-flicking';
import React from 'react';
import Button from '@/components/atoms/button/Button';
import { useTimePickerForm } from './TimePickerForm.hook';
import { TimePickerFormProps } from './taskDialog.types';

const TimePickerForm = ({
  taskTime,
  handleSetFormValue,
  handleSetTaskFormStep,
}: TimePickerFormProps) => {
  const {
    t,
    updateTransform,
    handleChangeFlicking,
    handleTimeDefaultValue,
    handleSaveTime,
  } = useTimePickerForm(taskTime, handleSetFormValue, handleSetTaskFormStep);

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
            variant="text"
            className="w-full"
            onClick={() => handleSetTaskFormStep(TASK_FORM_STEP.CALENDAR)}
          >
            {t('button.cancel')}
          </Button>
        </div>
        <div className="basis-1/2">
          <Button
            className="w-full rounded-md"
            variant="contained"
            onClick={handleSaveTime}
          >
            {t('button.save')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TimePickerForm;
