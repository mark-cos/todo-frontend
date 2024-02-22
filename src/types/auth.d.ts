import { User } from './user/user.typs';

declare module 'next-auth' {
  interface Session {
    user: User;
  }
}

declare module 'next-auth/jwt' {
  type JWT = User & {
    sub: string;
  };
}
