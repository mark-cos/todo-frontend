import React from 'react';
import cancleIcon from '@/images/icons/cancle.svg?url';
import repeatIcon from '@/images/icons/repeat.svg?url';
import Image from 'next/image';
import Button from '@/components/atoms/button/Button';

const TaskDetailHeader = () => {
  return (
    <div className="flex justify-between">
      <div className="flex-none">
        <Button className="flex h-8 w-8 items-center justify-center rounded-[4px] border border-[#1d1d1d] bg-[#1D1D1D]">
          <Image className="h-6 w-6" src={cancleIcon} alt="cancleIcon" />
        </Button>
      </div>
      <div className="flex-none">
        <Button className="flex h-8 w-8 items-center justify-center rounded-[4px] border border-[#1d1d1d] bg-[#1D1D1D]">
          <Image className="h-6 w-6" src={repeatIcon} alt="repeatIcon" />
        </Button>
      </div>
    </div>
  );
};

export default TaskDetailHeader;
