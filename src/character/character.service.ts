import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { QueryMode } from 'src/generated/internal/prismaNamespace';
import { PrismaService } from 'src/prisma/prisma.service';
import { PaginationDto } from 'src/utils/pagination.dto';
import { CharacterAllDto } from './dto/character-all.dto';
import { CharacterByUserDto } from './dto/character-by-user.dto';
import { CharacterCreateDto } from './dto/character-create.dto';
import { CharacterOutDto } from './dto/character-out.dto';

@Injectable()
export class CharacterService {
  constructor(private prismaService: PrismaService) {
    // Empty
  }

  public async all(paginationIn: PaginationDto, params: CharacterAllDto) {
    const or = [];

    if (params.term) {
      or.push({ name: { contains: params.term, mode: QueryMode.insensitive } });
    }

    if (params.class) {
      or.push({ class: params.class });
    }

    if (params.userId) {
      or.push({ userId: params.userId });
    }

    // TODO check if it works when where=undefined
    const where = {
      OR: or.length ? or : undefined,
    };

    const total: number = await this.prismaService.character.count({ where: where });

    return {
      items: plainToInstance(
        CharacterOutDto,
        await this.prismaService.character.findMany({
          where: where,
          skip: paginationIn.page * paginationIn.pageSize,
          take: paginationIn.pageSize,
          orderBy: { name: 'asc' },
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

  public async byUser(params: CharacterByUserDto) {
    return plainToInstance(
      CharacterOutDto,
      await this.prismaService.character.findMany({
        where: params,
        orderBy: {
          name: 'asc',
        },
      }),
      { excludeExtraneousValues: true },
    );
  }

  public create(params: CharacterCreateDto) {
    return this.prismaService.character.create({ data: params });
  }
}
