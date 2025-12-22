import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CharacterCreateInDto } from './dto/character-create-in.dto';

@Injectable()
export class CharacterService {
  constructor(private prismaService: PrismaService) {
    // Empty
  }

  public create(data: CharacterCreateInDto) {
    return this.prismaService.character.create({ data: data });
  }

  public async byUser(userId: number) {
    return this.prismaService.character.findMany({
      where: {
        userId: userId,
      },
      orderBy: {
        name: 'asc',
      },
    });
  }
}
