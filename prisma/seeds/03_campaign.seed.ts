import { PrismaClient } from 'src/generated/client';

export async function seedCampaigns(prisma: PrismaClient) {
  for (let i = 0; i < 15; i++) {
    await prisma.campaign.create({
      data: {
        name: `Campaign Carlos ${i}`,
        masterId: (await prisma.user.findFirst({ where: { email: 'crb@gmail.com' } }))!.id,
      },
    });
  }

  await prisma.campaign.create({
    data: {
      name: 'Campaign Josep 1',
      masterId: (await prisma.user.findFirst({ where: { email: 'jam@gmail.com' } }))!.id,
    },
  });
}
