import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { QueryMode } from 'src/generated/internal/prismaNamespace';
import { PrismaService } from 'src/prisma/prisma.service';
import { PaginationDto } from 'src/utils/pagination.dto';
import { UserAllDto } from './dto/user-all.dto';
import { UserAvailabilityDisplayNameDto } from './dto/user-availability-display-name.dto';
import { UserAvailabilityEmailDto } from './dto/user-availability-email.dto';
import { UserByEmailDto } from './dto/user-by-email.dto';
import { UserByIdDto } from './dto/user-by-id.dto';
import { UserCreateDto } from './dto/user-create.dto';
import { UserOutDto } from './dto/user-out.dto';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {
    // Empty
  }

  public async all(pagination: PaginationDto, params: UserAllDto) {
    const or = [];

    if (params.term) {
      or.push({ email: { contains: params.term, mode: QueryMode.insensitive } });

      or.push({ displayName: { contains: params.term, mode: QueryMode.insensitive } });
    }

    const where = {
      OR: or.length ? or : undefined,
    };

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
