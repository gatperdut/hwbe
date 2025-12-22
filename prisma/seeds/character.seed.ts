import { PrismaClient } from 'src/generated/client';

export async function seedCharacters(prisma: PrismaClient) {
  await prisma.character.create({
    data: {
      name: 'Ragnar',
      class: 'BARBARIAN',
      userId: (await prisma.user.findFirst({ where: { email: 'crb@gmail.com' } }))!.id,
    },
  });

  await prisma.character.create({
    data: {
      name: 'Galadriel',
      class: 'ELF',
      userId: (await prisma.user.findFirst({ where: { email: 'jam@gmail.com' } }))!.id,
    },
  });
}
