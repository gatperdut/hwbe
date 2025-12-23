import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from '@nestjs/common';
import { Request } from 'express';
import { User } from 'src/generated/client';

@Injectable()
export class AdminGuard implements CanActivate {
  public canActivate(context: ExecutionContext): boolean {
    const request: Request = context.switchToHttp().getRequest();

    const user: User = request.user as User;

    console.log(user.admin);

    if (user.admin) {
      return true;
    }

    throw new ForbiddenException('Admin-only');
  }
}
