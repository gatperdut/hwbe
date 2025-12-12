import { Controller, Get } from '@nestjs/common';
import { User } from 'src/generated/client';
import { UserCurrent } from './user-current.decorator';
import { UserService } from './user.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Get('me')
  public me(@UserCurrent() user: User) {
    return user;
  }
}
