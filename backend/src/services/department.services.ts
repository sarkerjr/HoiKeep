import { Prisma, prisma } from '@/utils/prisma';

export const create = async (name: string, nameTag: string) => {
  return await prisma.departments.create({
    data: {
      name,
      nameTag,
    },
  });
};

export const get = async () => {
  return await prisma.departments.findMany({
    select: {
      id: true,
      name: true,
      nameTag: true,
    },
  });
};

export const getById = async (id: string) => {
  return await prisma.departments.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      name: true,
      nameTag: true,
    },
  });
};

export const update = async (id: string, name: string, nameTag: string) => {
  return await prisma.departments.update({
    where: {
      id,
    },
    data: {
      name,
      nameTag,
    },
  });
};
