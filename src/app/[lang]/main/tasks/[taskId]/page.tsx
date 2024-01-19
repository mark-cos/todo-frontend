import React from 'react';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import { NextRequest, NextResponse } from 'next/server';

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
  request: NextRequest;
  response: NextResponse;
  params: { taskId: string };
};

const TaskDetailpage = async ({ response, params }: TaskDetailpageProps) => {
  if (!params.taskId) notFound();
  const task = await getTask(params.taskId);

  return <div>{JSON.stringify(task)}</div>;
};

export default TaskDetailpage;
