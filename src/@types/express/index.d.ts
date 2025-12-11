import { User } from 'src/generated/client';

declare module 'express-serve-static-core' {
  interface Request {
    user?: User;
  }
}
