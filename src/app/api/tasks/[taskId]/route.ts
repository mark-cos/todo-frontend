import { client, connDB } from '@/libs/mongodb';
import { Task } from '@/types/task/task.type';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../auth/[...nextauth]/route';
import { ObjectId } from 'mongodb';
import { ApiErrorResponse } from '@/types/http/http.type';

export async function GET(request: Request, response: Response) {
  try {
    const collection = await connDB<Task>('tasks');
    const seesion = await getServerSession(authOptions);

    if (!seesion?.user?.email) {
      return Response.json(
        {
          error: 'not found session..',
        },
        { status: 401 },
      );
    }

    const email = seesion.user.email;
    const regex = /\/([^\/]+)\/?$/;
    const match = request.url.match(regex);

    if (!match) {
      return Response.json(
        {
          error: 'not found taskId..',
        },
        { status: 404 },
      );
    }

    const taskId = match[1];
    console.log('✨[GET] /tasks/:taskId', taskId);

    const tasksAggregate = await collection.aggregate<Task>();
    const taskList = await tasksAggregate
      .lookup({
        from: 'category',
        localField: 'categoryId',
        foreignField: '_id',
        as: 'category',
      })
      .match({ _id: new ObjectId(taskId) })
      .toArray();

    if (taskList.length === 0) {
      throw new Error();
    }

    let task = taskList[0];
    // @ts-ignore @FIXME:
    task.category = task.category[0];

    // console.log('✨[PUT] /tasks/completed/:taskId', updateReulst.acknowledged);
    return Response.json(task);
  } catch (e) {
    const errorRes: ApiErrorResponse = {
      code: 10002,
      message: 'task 단일 검색 에러 발생',
    };
    return Response.json(errorRes, {
      status: 400,
    });
  } finally {
    if (client) client.close();
  }
}
