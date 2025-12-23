import { Controller, Get, Param, ParseIntPipe, Query, UseGuards } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { CharacterService } from 'src/character/character.service';
import { User } from 'src/generated/client';
import { PaginationDto } from 'src/utils/pagination.dto';
import { UserAllDto } from './dto/user-all.dto';
import { UserAvailabilityDisplayNameDto } from './dto/user-availability-display-name.dto';
import { UserAvailabilityEmailDto } from './dto/user-availability-email.dto';
import { UserAvailabilityResponseDto } from './dto/user-availability-response.dto';
import { UserDtoOut } from './dto/user-out.dto';
import { UserCharactersGuard } from './guard/user-characters.guard';
import { UserCurrent } from './user-current.decorator';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly characterService: CharacterService,
  ) {
    // Empty
  }

  @Get()
  public search(@Query() paginationIn: PaginationDto, @Query() params: UserAllDto) {
    return this.userService.all(paginationIn, params);
  }

  @Get('me')
  public me(@UserCurrent() user: User): UserDtoOut {
    return plainToInstance(UserDtoOut, user, { excludeExtraneousValues: true });
  }

  @Get('availability-email')
  public async availabilityEmail(
    @Query() params: UserAvailabilityEmailDto,
  ): Promise<UserAvailabilityResponseDto> {
    return { available: !(await this.userService.availabilityEmail(params)) };
  }

  @Get('availability-display-name')
  public async availabilityDisplayName(
    @Query() params: UserAvailabilityDisplayNameDto,
  ): Promise<UserAvailabilityResponseDto> {
    return { available: !(await this.userService.availabilityDisplayName(params)) };
  }

  @Get(':userId/characters')
  @UseGuards(UserCharactersGuard)
  public async characters(@Param('userId', ParseIntPipe) userId: number) {
    return this.characterService.byUser({ userId: userId });
  }
}
