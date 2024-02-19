import http from '@/libs/http';
import { UserPasswordChange } from '@/types/user/user.typs';

export const chageImage = (formdata: FormData) =>
  http.put('chageImage', formdata, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

export const chagePassword = (changePassword: UserPasswordChange) =>
  http.put('chagePassword', changePassword);
