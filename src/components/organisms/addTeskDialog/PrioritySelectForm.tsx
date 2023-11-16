import { Button } from '@/components/atoms';
import { useSelector } from '@/libs/redux';
import React, { useEffect, useRef, useState } from 'react';
import FlagIcon from '@/images/icons/flag.svg';
import { AddTask, TASK_FORM_STEP } from '@/types/task/task.type';

export type PrioritySelectFormProps = {
  priority: number;
  handleSetFormValue: (name: keyof AddTask, value: any) => void;
  handleSetTaskFormStep: (addTaskFormStep: TASK_FORM_STEP) => void;
};
const PrioritySelectForm = ({
  priority,
  handleSetFormValue,
  handleSetTaskFormStep,
}: PrioritySelectFormProps) => {
  const firstPriorityBtnRef = useRef<HTMLButtonElement>(null);
  const [selectedPriority, setSelectedPriority] = useState(priority);

  // 아이폰 미니12에서 메인 모달창 -> 중요도 아이콘 선택 -> 10번이 selected표시되는 이슈가 있어서 0번 인덱스 포커스 처리
  useEffect(() => {
    firstPriorityBtnRef.current?.focus();
  }, []);

  const handleSavePriority = () => {
    handleSetFormValue('priority', selectedPriority);
    handleSetTaskFormStep(TASK_FORM_STEP.MAIN);
  };

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
            className="w-full"
            onClick={() => handleSetTaskFormStep(TASK_FORM_STEP.MAIN)}
          >
            Cancel
          </Button>
        </div>
        <div className="basis-1/2">
          <Button
            className="w-full rounded-md"
            variant="contained"
            onClick={handleSavePriority}
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PrioritySelectForm;
