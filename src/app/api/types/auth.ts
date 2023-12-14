import { ObjectId } from 'bson';

export interface IUser {
  _id?: ObjectId;
  email: string;
  name: string;
  image: string;
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
