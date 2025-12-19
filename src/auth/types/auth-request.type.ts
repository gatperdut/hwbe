import { User } from 'src/generated/client';

export type AuthRequest = Request & { user: User };
