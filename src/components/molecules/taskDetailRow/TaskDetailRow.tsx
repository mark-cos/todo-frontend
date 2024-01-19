import Image from 'next/image';
import React from 'react';

type TaskDetailRowPorps = {
  children: React.ReactNode;
  icon: string;
  title: string;
  onClick: () => void;
};
const TaskDetailRow = ({ icon, title, onClick, children }: TaskDetailRowPorps) => {
  return (
    <div className="flex justify-between">
      {/* label */}
      <div className="flex flex-none items-center">
        <Image src={icon} alt="iconImage" />
        <div>{title}</div>
      </div>

      <div className="flex flex-none items-center">
        <button type="button" className="bg-dark" onClick={onClick}>
          {children}
        </button>
      </div>
    </div>
  );
};

export default TaskDetailRow;
