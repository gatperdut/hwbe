import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from '@nestjs/common';
import { Request } from 'express';
import { User } from 'src/generated/client';

@Injectable()
export class OwnGuard implements CanActivate {
  public canActivate(context: ExecutionContext): boolean {
    const request: Request = context.switchToHttp().getRequest();

    const user: User = request.user as User;

    const userId = Number(request.params.userId);

    if (user.admin || user.id === userId) {
      return true;
    }

    throw new ForbiddenException('Not allowed to access data that belongs to another user');
  }
}
