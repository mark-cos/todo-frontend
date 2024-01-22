import React from 'react';

const TagIcon = React.lazy(() => import('@/images/icons/tag.svg'));
const TimerIcon = React.lazy(() => import('@/images/icons/timer.svg'));
const FlagIcon = React.lazy(() => import('@/images/icons/flag.svg'));

type TaskDetailRowPorps = {
  children?: React.ReactNode;
  icon: string;
  title: string;
  onClick: () => void;
};
const TaskDetailRow = ({ icon, title, onClick, children }: TaskDetailRowPorps) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'category':
        return <TagIcon />;
      case 'date':
        return <TimerIcon />;
      case 'priority':
        return <FlagIcon />;
    }
  };
  return (
    <div className="mt-8 flex items-center justify-between">
      {/* label */}
      <div className="flex flex-none items-center">
        <div className="flex-none">{getIcon(icon)}</div>
        <div className="flex-non ml-3">{title}</div>
      </div>

      <div className="flex flex-none items-center">
        <button
          type="button"
          className="h-10 rounded border border-dark bg-dark px-3 text-xs"
          onClick={onClick}
        >
          {children}
        </button>
      </div>
    </div>
  );
};

export default TaskDetailRow;
