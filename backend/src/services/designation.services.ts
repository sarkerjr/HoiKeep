import { Prisma, prisma } from '@/utils/prisma';

export const create = async (name: string) => {
  return await prisma.designations.create({
    data: {
      name,
    },
  });
};

export const get = async () => {
  return await prisma.designations.findMany({
    select: {
      id: true,
      name: true,
    },
  });
};

export const getById = async (id: string) => {
  return await prisma.designations.findUnique({
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
  return await prisma.designations.update({
    where: {
      id,
    },
    data: {
      name,
    },
  });
};

export const remove = async (id: string) => {
  return await prisma.designations.delete({
    where: {
      id,
    },
  });
};
