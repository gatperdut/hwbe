import { PrismaPg } from '@prisma/adapter-pg';
import 'dotenv/config';
import { PrismaClient } from 'src/generated/client';
import { seedCharacters } from './seeds/character.seed';
import { seedUsers } from './seeds/user.seed';

const adapter: PrismaPg = new PrismaPg({ connectionString: process.env.DATABASE_URL! });

const prisma = new PrismaClient({ adapter });

async function main() {
  await seedUsers(prisma);

  await seedCharacters(prisma);
}
main()
  .then(async (): Promise<void> => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);

    await prisma.$disconnect();

    process.exit(1);
  });
