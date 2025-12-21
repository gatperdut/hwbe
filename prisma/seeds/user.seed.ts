import * as bcrypt from 'bcrypt';
import { PrismaClient } from 'src/generated/client';

export async function seedUsers(prisma: PrismaClient) {
  const salt: string = await bcrypt.genSalt();

  await prisma.user.upsert({
    where: { email: 'crb@gmail.com' },
    update: {},
    create: {
      email: 'crb@gmail.com',
      displayName: 'Carlos',
      password: await bcrypt.hash('crbcrb', salt),
      admin: true,
    },
  });

  await prisma.user.upsert({
    where: { email: 'jam@gmail.com' },
    update: {},
    create: {
      email: 'jam@gmail.com',
      displayName: 'Josep',
      password: await bcrypt.hash('jamjam', salt),
    },
  });

  await prisma.user.upsert({
    where: { email: 'jps@gmail.com' },
    update: {},
    create: {
      email: 'jps@gmail.com',
      displayName: 'Javi',
      password: await bcrypt.hash('jpsjps', salt),
    },
  });

  await prisma.user.upsert({
    where: { email: 'vfg@gmail.com' },
    update: {},
    create: {
      email: 'vfg@gmail.com',
      displayName: 'Vicent',
      password: await bcrypt.hash('vfgvfg', salt),
    },
  });

  await prisma.user.upsert({
    where: { email: 'vps@gmail.com' },
    update: {},
    create: {
      email: 'vps@gmail.com',
      displayName: 'Victor',
      password: await bcrypt.hash('vpsvps', salt),
    },
  });

  for (let i = 0; i < 10; i++) {
    await prisma.user.upsert({
      where: { email: `email${i}@gmail.com` },
      update: {},
      create: {
        email: `email${i}@gmail.com`,
        displayName: `User ${i}`,
        password: await bcrypt.hash(`password${i}`, salt),
      },
    });
  }
}
