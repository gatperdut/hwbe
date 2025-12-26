import { PrismaPg } from '@prisma/adapter-pg';
import 'dotenv/config';
import { PrismaClient } from 'src/generated/client';
import { seedUsers } from './seeds/01_user.seed';
import { seedCharacters } from './seeds/02_character.seed';
import { seedCampaigns } from './seeds/03_campaign.seed';
import { seedCampaignPlayer } from './seeds/04_campaign_player.seed';

const adapter: PrismaPg = new PrismaPg({ connectionString: process.env.DATABASE_URL! });

const prisma = new PrismaClient({ adapter });

async function main() {
  await seedUsers(prisma);

  await seedCharacters(prisma);

  await seedCampaigns(prisma);

  await seedCampaignPlayer(prisma);
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
