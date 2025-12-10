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

  public getAll() {
    return this.prismaService.user.findMany();
  }

  public getByEmail(email: string) {
    return this.prismaService.user.findUnique({
      where: { email: email },
    });
  }
}
