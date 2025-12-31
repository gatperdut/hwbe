import { Controller, Get, Param, ParseIntPipe, Query, UseGuards } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { CampaignService } from 'src/campaign/campaign.service';
import { CampaignIncludeDto } from 'src/campaign/dto/campaign-include.dto';
import { CharacterService } from 'src/character/character.service';
import { PaginationDto } from 'src/dto/pagination.dto';
import { User } from 'src/generated/client';
import { UserCharactersDto } from 'src/user/dto/user-characters.dto';
import { WithoutIdsDto } from '../dto/without.dto';
import { OwnGuard } from '../guards/own.guard';
import { UserAllDto } from './dto/user-all.dto';
import { UserAvailabilityDisplayNameDto } from './dto/user-availability-display-name.dto';
import { UserAvailabilityEmailDto } from './dto/user-availability-email.dto';
import { UserAvailabilityResponseDto } from './dto/user-availability-response.dto';
import { UserCampaignsDto } from './dto/user-campaigns.dto';
import { UserOutDto } from './dto/user-out.dto';
import { UserCurrent } from './user-current.decorator';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly characterService: CharacterService,
    private readonly campaignService: CampaignService,
  ) {
    // Empty
  }

  @Get()
  public all(
    @Query() pagination: PaginationDto,
    @Query() withoutIds: WithoutIdsDto,
    @Query() params: UserAllDto,
  ) {
    return this.userService.all(pagination, withoutIds, params);
  }

  @Get('me')
  public me(@UserCurrent() user: User): UserOutDto {
    return plainToInstance(UserOutDto, user, { excludeExtraneousValues: true });
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
  @UseGuards(OwnGuard)
  public async characters(
    @Param('userId', ParseIntPipe) userId: number,
    @Query() pagination: PaginationDto,
    @Query() params: UserCharactersDto,
  ) {
    return this.characterService.byUser(userId, pagination, params);
  }

  @Get(':userId/campaigns')
  public async campaigns(
    @Param('userId', ParseIntPipe) userId: number,
    @Query() pagination: PaginationDto,
    @Query() include: CampaignIncludeDto,
    @Query() params: UserCampaignsDto,
  ) {
    return this.campaignService.byUser(userId, pagination, include, params);
  }
}
