import { Injectable } from '@nestjs/common';
import { Prisma } from 'prisma/generated/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}

  public createUser(data: Prisma.UserCreateInput) {
    return this.prismaService.user.create({ data: data });
  }

  getUsers() {}

  getUserById() {}
}
