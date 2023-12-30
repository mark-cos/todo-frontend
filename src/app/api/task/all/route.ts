import { client, connDB } from '@/libs/mongodb';
import { ApiErrorResponse } from '@/types/http/http.type';
import { Task } from '@/types/task/task.type';
import { getServerSession } from 'next-auth';

export async function GET() {
  try {
    const collection = await connDB<Task>('tasks');
    const seesion = await getServerSession();
    if (!seesion?.user?.email) {
      return Response.json(
        {
          error: 'not found session..',
        },
        { status: 401 },
      );
    }
    const tasksAggregate = await collection.aggregate<Task>();
    let taskList = await tasksAggregate
      .lookup({
        from: 'category',
        localField: 'categoryId',
        foreignField: '_id',
        as: 'category',
      })
      .match({ email: seesion.user.email })
      .toArray();

    // 카테고리도 배열로 넘어와서..0번 인덱스만 빼서 재정의
    taskList = taskList.map((task) => {
      return {
        ...task,
        category: Array.isArray(task.category) ? task.category[0] : task.category,
      };
    });

    return Response.json(taskList);
  } catch (e) {
    console.error(e);
    const errorRes: ApiErrorResponse = {
      code: 10002,
      message: 'task 리스트 조회 에러 발생',
    };
    return Response.json(errorRes, {
      status: 400,
    });
  } finally {
    if (client) client.close();
  }
}
