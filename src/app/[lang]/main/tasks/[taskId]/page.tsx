import React from 'react';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import { NextRequest, NextResponse } from 'next/server';
import TaskDetailTempl from '@/components/templates/tasks/TaskDetailTempl';

const getTask = async (taskId: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/api/tasks/${taskId}`,
    {
      headers: headers(),
    },
  );

  if (res.status !== 200) {
    notFound();
  }
  return res.json();
};

type TaskDetailpageProps = {
  params: { taskId: string };
};

const TaskDetailpage = async ({ params }: TaskDetailpageProps) => {
  if (!params.taskId) notFound();
  const task = await getTask(params.taskId);

  return <TaskDetailTempl task={task} />;
};

export default TaskDetailpage;
