import { Locale } from '@/libs/i18n';
import { ObjectId } from 'mongodb';

export interface IUser {
  _id?: ObjectId;
  email: string;
  name: string;
  image: string;
  font: string;
  theme: 'dark' | 'light';
  language: Locale;
}

export interface IAccount {
  _id?: ObjectId;
  provider: string;
  type: string;
  providerAccountId?: string;
  access_token?: string;
  expires_at?: number;
  scope?: string;
  token_type: string;
  id_token?: string;
  userId: ObjectId;
  password?: string;
}

export interface IUserInfo extends IUser {
  account: IAccount[];
}
