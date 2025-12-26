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

  await prisma.character.create({
    data: {
      name: 'Aragorn',
      class: 'BARBARIAN',
      userId: (await prisma.user.findFirst({ where: { email: 'jps@gmail.com' } }))!.id,
    },
  });

  await prisma.character.create({
    data: {
      name: 'Legolas',
      class: 'ELF',
      userId: (await prisma.user.findFirst({ where: { email: 'jam@gmail.com' } }))!.id,
    },
  });

  await prisma.character.create({
    data: {
      name: 'Gimli',
      class: 'DWARF',
      userId: (await prisma.user.findFirst({ where: { email: 'crb@gmail.com' } }))!.id,
    },
  });

  await prisma.character.create({
    data: {
      name: 'Gandalf',
      class: 'WIZARD',
      userId: (await prisma.user.findFirst({ where: { email: 'vps@gmail.com' } }))!.id,
    },
  });

  await prisma.character.create({
    data: {
      name: 'Boromir',
      class: 'BARBARIAN',
      userId: (await prisma.user.findFirst({ where: { email: 'jam@gmail.com' } }))!.id,
    },
  });

  await prisma.character.create({
    data: {
      name: 'Frodo',
      class: 'ELF',
      userId: (await prisma.user.findFirst({ where: { email: 'jps@gmail.com' } }))!.id,
    },
  });

  await prisma.character.create({
    data: {
      name: 'Samwise',
      class: 'DWARF',
      userId: (await prisma.user.findFirst({ where: { email: 'crb@gmail.com' } }))!.id,
    },
  });

  await prisma.character.create({
    data: {
      name: 'Meriadoc',
      class: 'BARBARIAN',
      userId: (await prisma.user.findFirst({ where: { email: 'vps@gmail.com' } }))!.id,
    },
  });

  await prisma.character.create({
    data: {
      name: 'Peregrin',
      class: 'ELF',
      userId: (await prisma.user.findFirst({ where: { email: 'jam@gmail.com' } }))!.id,
    },
  });

  await prisma.character.create({
    data: {
      name: 'Elrond',
      class: 'WIZARD',
      userId: (await prisma.user.findFirst({ where: { email: 'crb@gmail.com' } }))!.id,
    },
  });

  await prisma.character.create({
    data: {
      name: 'Thranduil',
      class: 'ELF',
      userId: (await prisma.user.findFirst({ where: { email: 'jps@gmail.com' } }))!.id,
    },
  });

  await prisma.character.create({
    data: {
      name: 'Eowyn',
      class: 'BARBARIAN',
      userId: (await prisma.user.findFirst({ where: { email: 'vps@gmail.com' } }))!.id,
    },
  });

  await prisma.character.create({
    data: {
      name: 'Faramir',
      class: 'DWARF',
      userId: (await prisma.user.findFirst({ where: { email: 'jam@gmail.com' } }))!.id,
    },
  });

  await prisma.character.create({
    data: {
      name: 'Saruman',
      class: 'WIZARD',
      userId: (await prisma.user.findFirst({ where: { email: 'jps@gmail.com' } }))!.id,
    },
  });

  await prisma.character.create({
    data: {
      name: 'Galadriel',
      class: 'ELF',
      userId: (await prisma.user.findFirst({ where: { email: 'crb@gmail.com' } }))!.id,
    },
  });

  await prisma.character.create({
    data: {
      name: 'Case',
      class: 'WIZARD',
      userId: (await prisma.user.findFirst({ where: { email: 'jam@gmail.com' } }))!.id,
    },
  });

  await prisma.character.create({
    data: {
      name: 'Molly',
      class: 'BARBARIAN',
      userId: (await prisma.user.findFirst({ where: { email: 'jam@gmail.com' } }))!.id,
    },
  });

  await prisma.character.create({
    data: {
      name: 'Armitage',
      class: 'DWARF',
      userId: (await prisma.user.findFirst({ where: { email: 'jam@gmail.com' } }))!.id,
    },
  });

  await prisma.character.create({
    data: {
      name: 'Wintermute',
      class: 'WIZARD',
      userId: (await prisma.user.findFirst({ where: { email: 'jam@gmail.com' } }))!.id,
    },
  });

  await prisma.character.create({
    data: {
      name: 'Neuromancer',
      class: 'ELF',
      userId: (await prisma.user.findFirst({ where: { email: 'jam@gmail.com' } }))!.id,
    },
  });

  await prisma.character.create({
    data: {
      name: 'Riviera',
      class: 'ELF',
      userId: (await prisma.user.findFirst({ where: { email: 'jam@gmail.com' } }))!.id,
    },
  });

  await prisma.character.create({
    data: {
      name: 'Dixie Flatline',
      class: 'DWARF',
      userId: (await prisma.user.findFirst({ where: { email: 'jam@gmail.com' } }))!.id,
    },
  });

  await prisma.character.create({
    data: {
      name: 'Linda Lee',
      class: 'ELF',
      userId: (await prisma.user.findFirst({ where: { email: 'jam@gmail.com' } }))!.id,
    },
  });

  await prisma.character.create({
    data: {
      name: 'Julius Deane',
      class: 'WIZARD',
      userId: (await prisma.user.findFirst({ where: { email: 'jam@gmail.com' } }))!.id,
    },
  });

  await prisma.character.create({
    data: {
      name: 'Maelcum',
      class: 'BARBARIAN',
      userId: (await prisma.user.findFirst({ where: { email: 'jam@gmail.com' } }))!.id,
    },
  });

  await prisma.character.create({
    data: {
      name: 'Turner',
      class: 'DWARF',
      userId: (await prisma.user.findFirst({ where: { email: 'jam@gmail.com' } }))!.id,
    },
  });

  await prisma.character.create({
    data: {
      name: 'Hideo',
      class: 'BARBARIAN',
      userId: (await prisma.user.findFirst({ where: { email: 'jam@gmail.com' } }))!.id,
    },
  });

  await prisma.character.create({
    data: {
      name: 'Ashpool',
      class: 'WIZARD',
      userId: (await prisma.user.findFirst({ where: { email: 'jam@gmail.com' } }))!.id,
    },
  });

  await prisma.character.create({
    data: {
      name: '3Jane',
      class: 'ELF',
      userId: (await prisma.user.findFirst({ where: { email: 'jam@gmail.com' } }))!.id,
    },
  });

  await prisma.character.create({
    data: {
      name: 'Finn',
      class: 'DWARF',
      userId: (await prisma.user.findFirst({ where: { email: 'jam@gmail.com' } }))!.id,
    },
  });
}
