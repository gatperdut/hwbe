import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { AuthRequest } from 'src/auth/types/auth-request.type';
import { User } from 'src/generated/client';

export const UserCurrent = createParamDecorator(
  (_: unknown, executionContext: ExecutionContext): User => {
    return executionContext.switchToHttp().getRequest<AuthRequest>().user;
  },
);
