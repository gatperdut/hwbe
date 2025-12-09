import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from 'src/generated/prisma/client';

const globalForPrisma = global as unknown as { prisma: PrismaClient };

const connectionString = `${process.env.DATABASE_URL}`;

const adapter = new PrismaPg({ connectionString: connectionString });

export const prisma =
  globalForPrisma.prisma || new PrismaClient({ adapter: adapter });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
