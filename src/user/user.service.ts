import { Injectable } from '@nestjs/common';
import { PrismaClient } from 'prisma/generated/client';
import { UserCreateInput } from 'prisma/generated/models';

@Injectable()
export class UserService {
  constructor(private prismaClient: PrismaClient) {}

  public createUser(data: UserCreateInput) {
    return this.prismaClient.user.create({ data: data });
  }

  getUsers() {}

  getUserById() {}
}
