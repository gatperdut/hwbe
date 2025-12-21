import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { Prisma } from 'src/generated/client';
import { QueryMode } from 'src/generated/internal/prismaNamespace';
import { PrismaService } from 'src/prisma/prisma.service';
import { PaginationInDto } from 'src/utils/pagination-in.dto';
import { UserDtoOut } from './dto/user-out.dto';
import { UserSearchInDto } from './dto/user-search-in.dto';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {
    // Empty
  }

  public async all(paginationIn: PaginationInDto, params: UserSearchInDto) {
    const where = params.term
      ? {
          OR: [
            { email: { contains: params.term, mode: QueryMode.insensitive } },
            { displayName: { contains: params.term, mode: QueryMode.insensitive } },
          ],
        }
      : {};

    const total: number = await this.prismaService.user.count({ where: where });

    return {
      items: plainToInstance(
        UserDtoOut,
        await this.prismaService.user.findMany({
          where: where,
          skip: paginationIn.page * paginationIn.pageSize,
          take: paginationIn.pageSize,
          orderBy: { displayName: 'asc' },
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

  public create(data: Prisma.UserCreateInput) {
    return this.prismaService.user.create({ data: data });
  }

  public byId(id: number) {
    return this.prismaService.user.findUnique({ where: { id: id } });
  }

  public byEmail(email: string) {
    return this.prismaService.user.findUnique({
      where: { email: email },
    });
  }

  public byDisplayName(displayName: string) {
    return this.prismaService.user.findUnique({
      where: { displayName: displayName },
    });
  }
}
