import http from '@/libs/http';
import { AppSetting, UserPasswordChange } from '@/types/user/user.typs';

export const updateImage = (formdata: FormData) =>
  http.put('updateImage', formdata, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

export const updatePassword = (newPassword: UserPasswordChange) =>
  http.put('updatePassword', newPassword);

export const updateAppSetting = (appSetting: AppSetting) =>
  http.put('app-setting', appSetting);
