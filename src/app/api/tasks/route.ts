import { client, connDB } from '@/libs/mongodb';
import { AddTask, Task } from '@/types/task/task.type';
import { getServerSession } from 'next-auth';
import { ITask } from '../types/task';
import { ObjectId } from 'mongodb';

import { ApiErrorResponse } from '@/types/http/http.type';
import { format } from 'date-fns';
import authOptions from '../auth/[...nextauth]/authOptions';

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

    return Response.json(result);
  } catch (e) {
    console.error(e);
  } finally {
    if (client) client.close();
  }
}

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
    const { searchParams } = new URL(request.url);
    const keyword = searchParams.get('keyword');
    const isCompleted = searchParams.get('isCompleted');
    const period = searchParams.get('period');

    const tasksAggregate = await collection.aggregate<Task>();

    const match = matchObjectGenerator(email, keyword, isCompleted, period);

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
    taskList = taskList
      .map((task) => {
        return {
          ...task,
          category: Array.isArray(task.category) ? task.category[0] : task.category,
        };
      })
      .sort((a, b) => {
        const dateA = new Date(`${a.taskDate} ${a.taskTime}`);
        const dateB = new Date(`${b.taskDate} ${b.taskTime}`);

        if (dateA < dateB) {
          return -1;
        }
        if (dateA > dateB) {
          return 1;
        }

        // 이름이 같을 경우
        return 0;
      });
    console.log('✨[GET] /tasks', taskList.length);
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
