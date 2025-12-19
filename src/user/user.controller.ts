import { Controller, Get, Query } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { User } from 'src/generated/client';
import { UserAvailabilityDisplayNameDtoIn } from './dto/user-availability-display-name-dto-in.type';
import { UserAvailabilityDtoOut } from './dto/user-availability-dto-out.type';
import { UserAvailabilityEmailDtoIn } from './dto/user-availability-email-dto-in.type';
import { UserDtoOut } from './dto/user-dto-out.type';
import { UserCurrent } from './user-current.decorator';
import { UserService } from './user.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {
    // Empty
  }

  @Get('me')
  public me(@UserCurrent() user: User): UserDtoOut {
    return plainToInstance(UserDtoOut, user, { excludeExtraneousValues: true });
  }

  @Get('available-email')
  public async availableEmail(
    @Query() query: UserAvailabilityEmailDtoIn,
  ): Promise<UserAvailabilityDtoOut> {
    return { available: !(await this.userService.byEmail(query.email)) };
  }

  @Get('available-display-name')
  public async availableDisplayName(
    @Query() query: UserAvailabilityDisplayNameDtoIn,
  ): Promise<UserAvailabilityDtoOut> {
    return { available: !(await this.userService.byDisplayName(query.displayName)) };
  }
}
