import { client, connDB } from '@/libs/mongodb';
import { Task } from '@/types/task/task.type';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../../auth/[...nextauth]/route';
import { ObjectId } from 'mongodb';
import { ApiErrorResponse } from '@/types/http/http.type';

export async function PUT(request: Request, response: Response) {
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

    const isCompleted = (await request.json()).isCompleted;
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
    console.log('✨[PUT] /tasks/completed/:taskId', taskId);

    const updateReulst = await collection.updateOne(
      {
        // @ts-ignore @FIXME:
        _id: new ObjectId(taskId),
        email,
      },
      {
        $set: {
          isCompleted,
        },
      },
    );
    if (updateReulst.matchedCount !== 1) {
      throw new Error();
    }

    // console.log('✨[PUT] /tasks/completed/:taskId', updateReulst.acknowledged);
    return Response.json(updateReulst);
  } catch (e) {
    const errorRes: ApiErrorResponse = {
      code: 10002,
      message: 'task 완료 여부 수정 에러 발생',
    };
    return Response.json(errorRes, {
      status: 400,
    });
  } finally {
    if (client) client.close();
  }
}
