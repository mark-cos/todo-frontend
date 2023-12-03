import http from '@/libs/http';
import { UserJoin } from '@/types/user/user.typs';

export const login = (useJoinInfo: UserJoin) => http.post('/sign-up', useJoinInfo);
