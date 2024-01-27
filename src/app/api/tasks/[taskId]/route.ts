import { client, connDB } from '@/libs/mongodb';
import { Task } from '@/types/task/task.type';
import { getServerSession } from 'next-auth';
import { ObjectId } from 'mongodb';
import { ApiErrorResponse } from '@/types/http/http.type';
import { getLastPathname } from '@/utils/common';
import authOptions from '../../auth/[...nextauth]/authOptions';

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
    const taskId = getLastPathname(request.url);

    if (!taskId) {
      return Response.json(
        {
          error: 'not found taskId..',
        },
        { status: 404 },
      );
    }
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
    // @ts-ignore @FIXME:
    delete task.categoryId;
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

export async function DELETE(request: Request) {
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

    const taskId = getLastPathname(request.url);
    if (!taskId) {
      return Response.json(
        {
          error: 'not found taskId..',
        },
        { status: 404 },
      );
    }

    console.log('✨[DELETE] /tasks/:taskId', taskId);
    // @ts-ignore @FIXME:
    const deleteResult = await collection.deleteOne({ _id: new ObjectId(taskId) });
    if (deleteResult.deletedCount === 0) {
      throw new Error();
    }

    return Response.json(deleteResult);
  } catch (e) {
    const errorRes: ApiErrorResponse = {
      code: 10002,
      message: 'task 삭제 에러 발생',
    };
    return Response.json(errorRes, {
      status: 400,
    });
  } finally {
    if (client) client.close();
  }
}

export async function PUT(request: Request) {
  try {
    const collection = await connDB<Task>('tasks');
    const seesion = await getServerSession(authOptions);
    const reqTask = await request.json();

    if (!seesion?.user?.email) {
      return Response.json(
        {
          error: 'not found session..',
        },
        { status: 401 },
      );
    }
    const email = seesion?.user?.email;

    const taskId = getLastPathname(request.url);
    if (!taskId) {
      return Response.json(
        {
          error: 'not found taskId..',
        },
        { status: 404 },
      );
    }

    console.log('✨[PUT] /tasks/:taskId', taskId);
    const updateTask = { ...reqTask, categoryId: new ObjectId(reqTask.category._id) };
    delete updateTask.category;

    const updateResult = await collection.updateOne(
      {
        // @ts-ignore @FIXME:
        _id: new ObjectId(taskId),
        email,
      },
      {
        $set: updateTask,
      },
    );
    if (updateResult.modifiedCount === 0) {
      throw new Error();
    }

    return Response.json(updateResult);
  } catch (e) {
    const errorRes: ApiErrorResponse = {
      code: 10002,
      message: 'task 수정 에러 발생',
    };
    return Response.json(errorRes, {
      status: 400,
    });
  } finally {
    if (client) client.close();
  }
}
