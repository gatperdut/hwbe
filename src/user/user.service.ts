import { Injectable } from '@nestjs/common';
import { Prisma } from 'src/generated/prisma/client';
import { prisma } from 'src/prisma/prisma-singleton';

@Injectable()
export class UserService {
  constructor() {}

  public createUser(data: Prisma.UserCreateInput) {
    return prisma.user.create({ data: data });
  }

  getUsers() {}

  getUserById() {}
}
