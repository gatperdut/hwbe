import { Injectable } from '@nestjs/common';
import { Prisma } from 'src/generated/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {
    // Empty
  }

  public createUser(data: Prisma.UserCreateInput) {
    return this.prismaService.user.create({ data: data });
  }

  public getUsers() {
    return this.prismaService.user.findMany();
  }

  public getUserById() {
    // Empty
  }
}
