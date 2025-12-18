import { Injectable } from '@nestjs/common';
import { Prisma } from 'src/generated/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {
    // Empty
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
