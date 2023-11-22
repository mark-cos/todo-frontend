import { InferType, object, string } from 'yup';

export const userShema = object({
  email: string().email().required(),
  name: string().required(),
  // password: string().required(),
  avatarUrl: string(),
});

export type User = InferType<typeof userShema>;
