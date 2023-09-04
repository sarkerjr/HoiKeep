import { Prisma, prisma } from '@/utils/prisma';

export const create = async (name: string) => {
  return await prisma.degrees.create({
    data: {
      name,
    },
  });
};

export const get = async () => {
  return await prisma.degrees.findMany({
    select: {
      id: true,
      name: true,
    },
  });
};

export const getById = async (id: string) => {
  return await prisma.degrees.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      name: true,
    },
  });
};

export const update = async (id: string, name: string) => {
  return await prisma.degrees.update({
    where: {
      id,
    },
    data: {
      name,
    },
  });
};

export const remove = async (id: string) => {
  return await prisma.degrees.delete({
    where: {
      id,
    },
  });
};
