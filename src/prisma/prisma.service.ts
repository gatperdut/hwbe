import { Injectable } from '@nestjs/common';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from 'prisma/generated/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    const databaseUrl: string = `${process.env.DATABASE_URL}`;

    console.log(databaseUrl);

    const adapter = new PrismaPg({ connectionString: databaseUrl });

    super({ adapter: adapter });
  }
}
