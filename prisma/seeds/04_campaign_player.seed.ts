import { PrismaClient } from 'src/generated/client';

export async function seedCampaignPlayer(prisma: PrismaClient) {
  await prisma.campaignPlayer.create({
    data: {
      campaignId: (await prisma.campaign.findFirst({ where: { name: 'Campaign Carlos 3' } }))!.id,
      userId: (await prisma.user.findFirst({ where: { email: 'jam@gmail.com' } }))!.id,
      characterId: (await prisma.user.findFirst({
        where: { email: 'jam@gmail.com' },
        include: { characters: true },
      }))!.characters[0].id,
    },
  });

  await prisma.campaignPlayer.create({
    data: {
      campaignId: (await prisma.campaign.findFirst({ where: { name: 'Campaign Josep 1' } }))!.id,
      userId: (await prisma.user.findFirst({ where: { email: 'jps@gmail.com' } }))!.id,
      characterId: (await prisma.user.findFirst({
        where: { email: 'jps@gmail.com' },
        include: { characters: true },
      }))!.characters[0].id,
    },
  });
}
