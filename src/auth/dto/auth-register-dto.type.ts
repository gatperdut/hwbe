import { User } from 'src/generated/client';

export type AuthRegisterDto = Pick<User, 'displayName' | 'email' | 'password'>;
