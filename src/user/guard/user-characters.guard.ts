import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from '@nestjs/common';
import { Request } from 'express';
import { User } from 'src/generated/client';

@Injectable()
export class UserCharactersGuard implements CanActivate {
  public canActivate(context: ExecutionContext): boolean {
    const request: Request = context.switchToHttp().getRequest();

    const user: User = request.user as User;

    const userId = Number(request.params.id);

    if (user.admin) {
      return true;
    }

    if (user.id !== userId) {
      throw new ForbiddenException('Not allowed to access another user’s characters');
    }

    return true;
  }
}
