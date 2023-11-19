import { TodayTaskNone } from '@/components/molecules';
import { TaskDialog } from '@/components/organisms';
import React, { ReactNode } from 'react';

type TasksPageTemplProps = {
  children?: ReactNode;
};

const TasksPageTempl = ({ children }: TasksPageTemplProps) => {
  //FIXME: TESTCODE
  const tasks = [];
  return (
    <>
      {/* FIXME: 모달이 뜨면 안보이게 하고 싶은데..리덕스에서 가져오면..서버컴포넌트가 될 수가 없다.. */}
      {tasks.length === 0 && (
        <div className="flex h-full items-center justify-center">
          <TodayTaskNone />
        </div>
      )}
    </>
  );
};

export default TasksPageTempl;
