import { User } from 'src/generated/client';

// TODO This should be a class, so it can be validated with class-validator?
export type AuthLoginDto = Pick<User, 'email' | 'password'>;
