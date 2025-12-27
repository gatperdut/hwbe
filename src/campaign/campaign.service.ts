import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { QueryMode } from 'src/generated/internal/prismaNamespace';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserCampaignsDto } from 'src/user/dto/user-campaigns.dto';
import { PaginationDto } from 'src/utils/pagination.dto';
import { CampaignAllDto } from './dto/campaign-all.dto';
import { CampaignCreateDto } from './dto/campaign-create.dto';
import { CampaignIncludeDto } from './dto/campaign-include.dto';
import { CampaignOutDto } from './dto/campaign-out.dto';

@Injectable()
export class CampaignService {
  constructor(private prismaService: PrismaService) {
    // Empty
  }

  public async all(
    paginationIn: PaginationDto,
    include: CampaignIncludeDto,
    params: CampaignAllDto,
  ) {
    const or = [];

    if (params.term) {
      or.push({ name: { contains: params.term, mode: QueryMode.insensitive } });
    }

    if (params.masterId) {
      or.push({ masterId: params.masterId });
    }

    // TODO check if it works when where=undefined
    const where = {
      OR: or.length ? or : undefined,
    };

    const total: number = await this.prismaService.campaign.count({ where: where });

    return {
      items: plainToInstance(
        CampaignOutDto,
        await this.prismaService.campaign.findMany({
          where: where,
          skip: paginationIn.page * paginationIn.pageSize,
          take: paginationIn.pageSize,
          orderBy: { name: 'asc' },
          include: {
            master: include.includeMaster,
            players: include.includePlayers ? { include: { user: true, character: true } } : false,
          },
        }),
        { excludeExtraneousValues: true },
      ),
      meta: {
        page: paginationIn.page,
        pageSize: paginationIn.pageSize,
        total: total,
        pages: Math.ceil(total / paginationIn.pageSize),
      },
    };
  }

  public create(params: CampaignCreateDto) {
    return this.prismaService.campaign.create({ data: params });
  }

  public async byUser(userId: number, pagination: PaginationDto, params: UserCampaignsDto) {
    const or = [];

    or.push({ masterId: userId });

    or.push({ players: { some: { userId: userId } } });

    if (params.term) {
      or.push({ name: { contains: params.term, mode: QueryMode.insensitive } });
    }

    const where = {
      OR: or.length ? or : undefined,
    };

    const total: number = await this.prismaService.campaign.count({ where: where });

    return {
      items: plainToInstance(
        CampaignOutDto,
        await this.prismaService.campaign.findMany({
          where: where,
          skip: pagination.page * pagination.pageSize,
          take: pagination.pageSize,
          orderBy: { name: 'asc' },
        }),
        { excludeExtraneousValues: true },
      ),
      meta: {
        page: pagination.page,
        pageSize: pagination.pageSize,
        total: total,
        pages: Math.ceil(total / pagination.pageSize),
      },
    };
  }
}
