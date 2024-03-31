import { connDB } from '@/libs/mongodb';
import { AppSetting } from '@/types/user/user.typs';

import { ObjectId } from 'mongodb';
import { getServerSession } from 'next-auth';
import authOptions from '../../auth/[...nextauth]/authOptions';
import { ApiErrorResponse } from '@/types/http/http.type';

export async function PUT(request: Request) {
  try {
    const collection = await connDB<AppSetting>('users');
    const session = await getServerSession(authOptions);
    const reqAppSetting = await request.json();

    if (!session?.user?.email) {
      return Response.json(
        {
          error: 'not found session..',
        },
        { status: 401 },
      );
    }

    console.info('✨[PUT] /profile/app-setting', reqAppSetting);
    const userId = session?.user?.id;
    const updateResult = await collection.updateOne(
      {
        // @ts-ignore @FIXME:
        _id: new ObjectId(userId),
      },
      {
        $set: reqAppSetting,
      },
    );

    if (updateResult.matchedCount === 0) {
      throw new Error();
    }

    return Response.json(updateResult);
  } catch (e) {
    console.log(e);
    const errorRes: ApiErrorResponse = {
      code: 10002,
      message: 'app setting 수정 에러 발생',
    };
    return Response.json(errorRes, {
      status: 400,
    });
  } finally {
    // if (client) client.close();
  }
}
