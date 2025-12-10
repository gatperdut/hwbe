import { User } from 'src/generated/client';

export type AuthLoginDto = Pick<User, 'email' | 'password'>;
