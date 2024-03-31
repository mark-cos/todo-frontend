import { connDB } from '@/libs/mongodb';
import { getServerSession } from 'next-auth';
import authOptions from '../../auth/[...nextauth]/authOptions';
import { ObjectId } from 'mongodb';
import { ApiErrorResponse } from '@/types/http/http.type';
import { IUser } from '../../types/auth';
export const dynamic = 'force-dynamic';
export async function GET() {
  try {
    const collection = await connDB<IUser>('users');
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return Response.json(
        {
          error: 'not found session..',
        },
        { status: 401 },
      );
    }

    console.info('✨[GET] /profile/mypage');
    const findUser = await collection.findOne({
      _id: new ObjectId(session.user.id),
    });
    if (!findUser) {
      throw new Error();
    }

    return Response.json(findUser);
  } catch (e) {
    console.log(e);
    const errorRes: ApiErrorResponse = {
      code: 10002,
      message: 'User 단일 검색 에러 발생',
    };
    return Response.json(errorRes, {
      status: 400,
    });
  } finally {
    // if (client) client.close();
  }
}
