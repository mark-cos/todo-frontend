import { client, connDB } from '@/libs/mongodb';
import { ApiErrorResponse } from '@/types/http/http.type';
import { getServerSession } from 'next-auth';
import { ICategory, ICategoryAdd } from '../types/category';

export async function POST(request: Request) {
  try {
    const seesion = await getServerSession();
    if (!seesion?.user?.email) return;
    const resCategory = (await request.json()) as ICategoryAdd;

    const newCategory = {
      ...resCategory,
      email: seesion?.user?.email,
      careatedBy: new Date(),
    };
    const collection = await connDB<ICategoryAdd>('category');
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

    return Response.json(resCategory, {
      status: 200,
    });
  } catch (e) {
    console.error(e);
  } finally {
    // if (client) client.close();
  }
}

export async function GET(request: Request) {
  try {
    const seesion = await getServerSession();
    if (!seesion?.user?.email) return;

    const collection = await connDB<ICategory>('category');
    const result = await collection
      .find({
        email: seesion?.user?.email,
      })
      .sort('careatedBy', -1)
      .toArray();

    return Response.json(result, {
      status: 200,
    });
  } catch (e) {
    console.error(e);
  } finally {
    // if (client) client.close();
  }
}
