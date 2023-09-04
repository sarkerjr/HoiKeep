import { Prisma, prisma } from '@/utils/prisma';
import { PositionCategory } from '@prisma/client';

export const create = async (name: string, category: PositionCategory) => {
  return await prisma.positions.create({
    data: {
      name,
      category,
    },
  });
};

export const get = async () => {
  return await prisma.positions.findMany({
    select: {
      id: true,
      name: true,
      category: true,
    },
  });
};

export const getById = async (id: string) => {
  return await prisma.positions.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      name: true,
      category: true,
    },
  });
};

export const update = async (
  id: string,
  name: string,
  category: PositionCategory
) => {
  return await prisma.positions.update({
    where: {
      id,
    },
    data: {
      name,
      category,
    },
  });
};

export const remove = async (id: string) => {
  return await prisma.positions.delete({
    where: {
      id,
    },
  });
};
