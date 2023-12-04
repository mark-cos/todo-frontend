import { InferType, object, ref, string } from 'yup';

export const userSchema = object({
  email: string().email('input.email.format').required('input.email.required'),
  name: string().required('input.name.required'),
  avatarUrl: string(), //FIXME: BE와 협의해서 수정 필요.
  theme: string<'dark' | 'light'>().required().default('dark'),
  font: string().required(), //FIXME:
  language: string<'ko' | 'en'>().required().default('en'),
});
export type User = InferType<typeof userSchema>;

export const userJoinSchema = userSchema.pick(['email', 'name']).concat(
  object({
    password: string().required('input.password.required'),
    confirmPassword: string()
      .required('input.confirmPassword.required')
      .oneOf([ref('password')], 'input.confirmPassword.not_match'),
  }),
);

export type UserJoin = InferType<typeof userJoinSchema>;

export const loginSchema = userJoinSchema.pick(['email', 'password']);
export type Login = InferType<typeof loginSchema>;
