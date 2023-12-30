import { client, connDB } from '@/libs/mongodb';
import { AddTask } from '@/types/task/task.type';
import { getServerSession } from 'next-auth';
import { ITask } from '../types/task';
import { ObjectId } from 'mongodb';

export async function POST(request: Request) {
  const data = (await request.json()) as AddTask;
  const seesion = await getServerSession();
  if (!seesion?.user?.email) {
    return Response.json(
      {
        error: 'not found session..',
      },
      { status: 401 },
    );
  }

  const newTask: ITask = {
    title: data.title,
    description: data.description,
    priority: data.priority,
    taskDate: data.taskDate,
    taskTime: data.taskTime,
    email: seesion.user.email,
    categoryId: new ObjectId(data.category._id),
    isCompleted: false,
  };

  try {
    const collection = await connDB<ITask>('tasks');
    const result = await collection.insertOne(newTask);

    return Response.json(data);
  } catch (e) {
    console.error(e);
  } finally {
    if (client) client.close();
  }
}
