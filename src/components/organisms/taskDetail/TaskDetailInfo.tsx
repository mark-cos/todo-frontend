'use client';
import TaskDetailRow from '@/components/molecules/taskDetail/TaskDetailRow';
import { TASK_FORM_STEP, Task } from '@/types/task/task.type';
import Image from 'next/image';
import React from 'react';
import useTaskDetailInfo from './TaskDetailInfo.hook';
import Dialog from '@/components/atoms/dialog/Dialog';
import Button from '@/components/atoms/button/Button';
import DeleteConfirmDialog from './DeleteConfirmDialog';

const TrashIcon = React.lazy(() => import('@/images/icons/trash.svg'));
const Ellipse15Icon = React.lazy(() => import('@/images/icons/ellipse15.svg'));
const Edit2icon = React.lazy(() => import('@/images/icons/edit-2.svg'));

type TaskDetailInfoProps = {
  task: Task;
};

// TODO: 다국어 적용 필요.
/**
 * 전닯받은 `Task`를 기준으로 Task 스토어에 설정하여 데이터를 핸들링.
 * 수정된 form데이터도 최종 스토어에 설정하여 실시간 반영된 데이터를 표시
 *  edit 버튼 클릭 시 객체를 만들어 서버에 전달
 * @param task Task 데이터
 */
const TaskDetailInfo = ({ task }: TaskDetailInfoProps) => {
  const {
    handleOpenTaskEditDialog,
    handleTaskDelete,
    handleCloseModal,
    isShowCloseModal,
    setIsShowCloseModal,
    editTask,
    handleSubmitTaskEdit,
  } = useTaskDetailInfo(task);

  return (
    <div className="flex h-full flex-col justify-between">
      <div className="flex-none">
        {/* title & description */}
        <div className="mt-8 flex justify-between">
          <div className="flex flex-none">
            <div className="ml-1 mt-[6px] flex-none">
              <Ellipse15Icon />
            </div>
            <div className="flex-non ml-3">
              <p className="text-lg">{editTask.title}</p>
              <p className="text-[#AFAFAF]">{editTask.description}</p>
            </div>
          </div>

          <div className="flex flex-none">
            <button
              type="button"
              className="h-10 "
              onClick={() => handleOpenTaskEditDialog(TASK_FORM_STEP.MAIN)}
              aria-label="task title edit"
            >
              <Edit2icon />
            </button>
          </div>
        </div>

        <TaskDetailRow
          icon={'date'}
          title="Task Time :"
          onClick={() => handleOpenTaskEditDialog(TASK_FORM_STEP.CALENDAR)}
        >
          <div className="flex items-center gap-2">
            {editTask.taskDate} {editTask.taskTime}
          </div>
        </TaskDetailRow>

        <TaskDetailRow
          icon={'category'}
          title="Task Category :"
          onClick={() => handleOpenTaskEditDialog(TASK_FORM_STEP.CATEGORY)}
        >
          <div className="flex items-center gap-2">
            <Image
              src={(editTask as Task).category.icon || task.category.icon}
              alt="category icon"
              width={24}
              height={24}
            />
            {(editTask as Task).category.name}
          </div>
        </TaskDetailRow>

        <TaskDetailRow
          icon={'priority'}
          title="Task Priority :"
          onClick={() => handleOpenTaskEditDialog(TASK_FORM_STEP.PRIORITY)}
        >
          <div className="flex items-center gap-2">{editTask.priority}</div>
        </TaskDetailRow>

        {/* delete */}
        <div className="mt-8 flex justify-between">
          <button type="button" onClick={() => setIsShowCloseModal(true)}>
            <div className="flex flex-none items-center">
              <div className="flex-none">
                <TrashIcon />
              </div>
              <div className="flex-non ml-3 text-red-600">Delete Task</div>
            </div>
          </button>
        </div>
        <DeleteConfirmDialog
          isShowModal={isShowCloseModal}
          close={handleCloseModal}
          dialogTitle={{
            label: 'Delete Task',
            className: 'text-center border-b-[1px] border-secondary pb-3 mb-6',
          }}
          taskTitle={editTask.title}
        />
      </div>

      {/* edit buttn */}
      <div className="flex-none">
        <Button
          className="mb-3 w-full rounded-md"
          variant="contained"
          onClick={handleSubmitTaskEdit}
        >
          Edit Task
        </Button>
      </div>
    </div>
  );
};

export default TaskDetailInfo;
