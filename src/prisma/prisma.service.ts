import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from 'src/generated/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor(configService: ConfigService) {
    const connectionString: string = `${configService.get<string>('DATABASE_URL')}`;

    const adapter: PrismaPg = new PrismaPg({
      connectionString: connectionString,
    });

    super({ adapter: adapter });
  }
}
