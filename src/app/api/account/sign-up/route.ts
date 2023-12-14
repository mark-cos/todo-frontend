import { connDB } from '@/libs/mongodb';
import { IAccount, IUser } from '../../types/auth';
import { UserJoin } from '@/types/user/user.typs';
import bcrypt from 'bcrypt';
import { ObjectId } from 'mongodb';

export const POST = async (request: Request) => {
  const userJoinInfo = (await request.json()) as Omit<UserJoin, 'confirmPassword'>;
  /**
   * 유저 기본정보를 가지고 있는 users와 토큰, provider등을 관리하는 accounts 2개의 컬렉션을 사용.
   * users에 이메일 존재유무 체크 후 없을 경우 account에 이메일 저장 후 account에 계정정보 저장
   */
  const usersCollection = await connDB<IUser>('users');
  const findUser = await usersCollection.findOne({ email: userJoinInfo.email });
  if (findUser)
    return new Response(null, {
      status: 422,
    });

  const userInsertResult = await usersCollection.insertOne({
    email: userJoinInfo.email,
    name: userJoinInfo.name,
    image: '',
  });

  const encPassword = await bcrypt.hash(userJoinInfo.password!, 10);
  const accountsCollection = await connDB<IAccount>('accounts');
  const accountsInsertResult = await accountsCollection.insertOne({
    userId: new ObjectId(userInsertResult.insertedId.toString()),
    provider: 'credentials',
    type: '',
    token_type: 'Bearer',
    password: encPassword,
  });

  return Response.json({ id: accountsInsertResult.insertedId });
};
