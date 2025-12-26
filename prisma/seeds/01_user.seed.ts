import * as bcrypt from 'bcrypt';
import { PrismaClient } from 'src/generated/client';

export async function seedUsers(prisma: PrismaClient) {
  const salt: string = await bcrypt.genSalt();

  await prisma.user.create({
    data: {
      email: 'crb@gmail.com',
      displayName: 'Carlos',
      password: await bcrypt.hash('crbcrb', salt),
      admin: true,
    },
  });

  await prisma.user.create({
    data: {
      email: 'jam@gmail.com',
      displayName: 'Josep',
      password: await bcrypt.hash('jamjam', salt),
    },
  });

  await prisma.user.create({
    data: {
      email: 'jps@gmail.com',
      displayName: 'Javi',
      password: await bcrypt.hash('jpsjps', salt),
    },
  });

  await prisma.user.create({
    data: {
      email: 'vfg@gmail.com',
      displayName: 'Vicent',
      password: await bcrypt.hash('vfgvfg', salt),
    },
  });

  await prisma.user.create({
    data: {
      email: 'vps@gmail.com',
      displayName: 'Victor',
      password: await bcrypt.hash('vpsvps', salt),
    },
  });

  for (let i = 0; i < 10; i++) {
    await prisma.user.create({
      data: {
        email: `email${i}@gmail.com`,
        displayName: `User ${i}`,
        password: await bcrypt.hash(`password${i}`, salt),
      },
    });
  }
}
