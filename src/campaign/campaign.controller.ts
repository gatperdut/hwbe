import { Body, Controller, Get, Param, Post, Query, UseGuards } from '@nestjs/common';
import { PaginationDto } from 'src/dto/pagination.dto';
import { AdminGuard } from 'src/guards/admin.guard';
import { CampaignService } from './campaign.service';
import { CampaignAllDto } from './dto/campaign-all.dto';
import { CampaignCreateDto } from './dto/campaign-create.dto';
import { CampaignGetDto } from './dto/campaign-get.dto';
import { CampaignIncludeDto } from './dto/campaign-include.dto';

@Controller('campaigns')
export class CampaignController {
  constructor(private readonly campaignService: CampaignService) {
    // Empty
  }

  @Get()
  @UseGuards(AdminGuard)
  public all(
    @Query() paginationIn: PaginationDto,
    @Query() include: CampaignIncludeDto,
    @Query() params: CampaignAllDto,
  ) {
    return this.campaignService.all(paginationIn, include, params);
  }

  @Get(':campaignId')
  public get(@Query() include: CampaignIncludeDto, @Param() params: CampaignGetDto) {
    return this.campaignService.get(include, params);
  }

  @Post()
  public create(@Body() body: CampaignCreateDto) {
    return this.campaignService.create(body);
  }
}
