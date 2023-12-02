import http from '@/libs/http';
import { Login } from '@/types/user/user.typs';

export const login = (loginInfo: Login) => http.post('/sign-in', loginInfo);
