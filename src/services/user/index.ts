import http from '@/libs/http';
import { Login, LoginRes, UserJoin } from '@/types/user/user.typs';

export const register = (user: Omit<UserJoin, 'confirmPassword'>) =>
  http.post('/user/register', user);
export const login = (loginUser: Login) => http.post<LoginRes>('/user/login', loginUser);
