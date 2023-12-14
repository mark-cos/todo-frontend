import http from '@/libs/http';
import { UserJoin } from '@/types/user/user.typs';

export const signUp = (userJoinInfo: Omit<UserJoin, 'confirmPassword'>) =>
  http.post('/api/account/sign-up', userJoinInfo);
