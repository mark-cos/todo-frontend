import React from 'react';
import FlagIcon from '@/images/icons/flag.svg';
import { TASK_FORM_STEP } from '@/types/task/task.type';
import Button from '@/components/atoms/button/Button';
import { usePrioritySelectForm } from './PrioritySelectForm.hook';
import { PrioritySelectFormProps } from './taskDialog.types';

const PrioritySelectForm = ({
  priority,
  handleSetFormValue,
  handleSetTaskFormStep,
}: PrioritySelectFormProps) => {
  const {
    t,
    firstPriorityBtnRef,
    selectedPriority,
    setSelectedPriority,
    handleSavePriority,
  } = usePrioritySelectForm(priority, handleSetFormValue, handleSetTaskFormStep);

  return (
    <div className="flex flex-col">
      <div className="my-5 flex-auto">
        <div className="grid grid-cols-4 items-center justify-center gap-y-4 text-center">
          {[...Array(10)].map((_n, index) => (
            <button
              ref={index === 0 ? firstPriorityBtnRef : null}
              key={`priority-${index}`}
              className={`mx-auto h-16 w-16 basis-1/4 rounded-md bg-[#272727] hover:bg-primary ${
                index + 1 === selectedPriority ? 'bg-primary' : ''
              }`}
              type="button"
              onClick={() => setSelectedPriority(index + 1)}
            >
              <div className="flex h-full flex-col items-center justify-between p-1.5">
                <div className="flex-none">
                  <FlagIcon className="m-auto" />
                </div>
                <div className="flex-none">{index + 1}</div>
              </div>
            </button>
          ))}
        </div>
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
            onClick={handleSavePriority}
          >
            {t('button.save')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PrioritySelectForm;
