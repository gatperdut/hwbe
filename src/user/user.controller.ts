import { Controller, Get, Query } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { User } from 'src/generated/client';
import { PaginationInDto } from 'src/utils/pagination-in.dto';
import { UserAvailabilityDisplayNameDtoIn } from './dto/user-availability-display-name-in.dto';
import { UserAvailabilityEmailInDto } from './dto/user-availability-email-in.dto';
import { UserAvailabilityDtoOut } from './dto/user-availability-out.dto';
import { UserDtoOut } from './dto/user-out.dto';
import { UserSearchInDto } from './dto/user-search-in.dto';
import { UserCurrent } from './user-current.decorator';
import { UserService } from './user.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {
    // Empty
  }

  @Get()
  public all(@Query() paginationIn: PaginationInDto, @Query() params: UserSearchInDto) {
    return this.userService.all(paginationIn, params);
  }

  @Get('me')
  public me(@UserCurrent() user: User): UserDtoOut {
    return plainToInstance(UserDtoOut, user, { excludeExtraneousValues: true });
  }

  @Get('available-email')
  public async availableEmail(
    @Query() query: UserAvailabilityEmailInDto,
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
