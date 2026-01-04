import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { PaginationDto } from 'src/dto/pagination.dto';
import { Prisma } from 'src/generated/client';
import { QueryMode } from 'src/generated/internal/prismaNamespace';
import { PrismaService } from 'src/prisma/prisma.service';
import { WithoutIdsDto } from '../dto/without.dto';
import { UserAllDto } from './dto/user-all.dto';
import { UserAvailabilityDisplayNameDto } from './dto/user-availability-display-name.dto';
import { UserAvailabilityEmailDto } from './dto/user-availability-email.dto';
import { UserByEmailDto } from './dto/user-by-email.dto';
import { UserByIdDto } from './dto/user-by-id.dto';
import { UserCreateDto } from './dto/user-create.dto';
import { UserGetDto } from './dto/user-get.dto';
import { UserOutDto } from './dto/user-out.dto';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {
    // Empty
  }

  public async get(params: UserGetDto) {
    return plainToInstance(
      UserOutDto,
      await this.prismaService.user.findUnique({ where: { id: params.userId } }),
      { excludeExtraneousValues: true },
    );
  }

  public async all(pagination: PaginationDto, withoutIds: WithoutIdsDto, params: UserAllDto) {
    const where: Prisma.UserWhereInput = {};

    if (params.term) {
      where.OR = [
        {
          email: {
            contains: params.term,
            mode: QueryMode.insensitive,
          },
        },
        {
          displayName: {
            contains: params.term,
            mode: QueryMode.insensitive,
          },
        },
      ];
    }

    if (withoutIds.withoutIds?.length) {
      where.AND = [
        {
          id: {
            notIn: withoutIds.withoutIds,
          },
        },
      ];
    }

    const total: number = await this.prismaService.user.count({ where: where });

    return {
      items: plainToInstance(
        UserOutDto,
        await this.prismaService.user.findMany({
          where: where,
          skip: pagination.page * pagination.pageSize,
          take: pagination.pageSize,
          orderBy: { displayName: 'asc' },
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

  public availabilityDisplayName(params: UserAvailabilityDisplayNameDto) {
    return this.prismaService.user.findUnique({
      where: params,
    });
  }
  public availabilityEmail(params: UserAvailabilityEmailDto) {
    return this.prismaService.user.findUnique({
      where: params,
    });
  }

  public byEmail(params: UserByEmailDto) {
    return this.prismaService.user.findUnique({
      where: params,
    });
  }

  public byId(params: UserByIdDto) {
    return this.prismaService.user.findUnique({ where: params });
  }

  public create(params: UserCreateDto) {
    return this.prismaService.user.create({ data: params });
  }
}
