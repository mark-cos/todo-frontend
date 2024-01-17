import { client, connDB } from '@/libs/mongodb';
import { ApiErrorResponse } from '@/types/http/http.type';
import { Task } from '@/types/task/task.type';
import { format } from 'date-fns';
import { getServerSession } from 'next-auth';

const matchObjectGenerator = (
  email: string,
  keyword: string | null,
  isCompleted: string | null,
  period: string | null,
) => {
  let match: any = { email };
  if (keyword)
    match = {
      ...match,
      title: { $regex: keyword, $options: 'i' },
    };
  if (isCompleted && isCompleted !== 'all')
    match = {
      ...match,
      isCompleted: isCompleted === 'done' ? true : false,
    };
  if (period) {
    const today = new Date();

    if (period === 'today') {
      match = {
        ...match,
        taskDate: format(today, 'yyyy-MM-dd'),
      };
    } else if (period === 'week') {
      const day = today.getDay();
      const sunDay = new Date(today);
      sunDay.setDate(today.getDate() - day);
      const saturDay = new Date(today);
      saturDay.setDate(today.getDate() + (6 - day));

      match = {
        ...match,
        taskDate: {
          $gt: sunDay.toISOString(),
          $lt: saturDay.toISOString(),
        },
      };
    } else if (period === 'month') {
      const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth());
      const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
      match = {
        ...match,
        taskDate: {
          $gt: firstDayOfMonth.toISOString(),
          $lt: lastDayOfMonth.toISOString(),
        },
      };
    }
  }

  return match;
};

export async function GET(request: Request) {
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
    const email = seesion.user.email;
    const { searchParams } = new URL(request.url);
    const keyword = searchParams.get('keyword');
    const isCompleted = searchParams.get('isCompleted');
    const period = searchParams.get('period');

    const tasksAggregate = await collection.aggregate<Task>();

    const match = matchObjectGenerator(email, keyword, isCompleted, period);
    console.log('/tasks', match);
    let taskList = await tasksAggregate
      .lookup({
        from: 'category',
        localField: 'categoryId',
        foreignField: '_id',
        as: 'category',
      })
      .match(match)
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
