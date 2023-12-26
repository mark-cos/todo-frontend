import { connDB } from '@/libs/mongodb';
import { ApiErrorResponse } from '@/types/http/http.type';
import { CategoryAdd } from '@/types/task/task.type';
import { getServerSession } from 'next-auth';

export async function POST(request: Request) {
  const seesion = await getServerSession();
  if (!seesion?.user?.email) return;
  let newCategory = (await request.json()) as CategoryAdd & { email: string };

  newCategory.email = seesion?.user?.email;
  const collection = await connDB<CategoryAdd>('category');
  const result = await collection.insertOne({
    ...newCategory,
  });

  if (!result.insertedId.id) {
    const errorRes: ApiErrorResponse = {
      code: 10002,
      message: '글등록 에러 발생',
    };
    return Response.json(errorRes, {
      status: 400,
    });
  }

  return Response.json(result, {
    status: 200,
  });
}
