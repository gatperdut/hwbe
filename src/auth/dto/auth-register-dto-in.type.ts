import { User } from 'src/generated/client';

export type AuthRegisterDtoIn = Pick<User, 'displayName' | 'email' | 'password'>;
