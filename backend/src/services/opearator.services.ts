import { prisma } from '@/utils/prisma';

export const create = async (
  name: string,
  email: string,
  joinedAt: Date,
  leftAt: Date,
  positionsId: string,
  hallsId: string
) => {
  return await prisma.operators.create({
    data: {
      positionsId,
      hallsId,
      operatorDetails: {
        create: {
          name,
          email,
          joinedAt: joinedAt ? new Date(joinedAt) : null,
          leftAt: leftAt ? new Date(leftAt) : null,
        },
      },
    },
  });
};

export const get = async () => {
  return await prisma.operators.findMany({
    include: {
      positions: true,
      operatorDetails: true,
    },
  });
};

export const getById = async (id: string) => {
  return await prisma.operators.findUnique({
    where: {
      id,
    },
    include: {
      positions: true,
      operatorDetails: true,
    },
  });
};

export const update = async (
  id: string,
  name: string,
  email: string,
  joinedAt: Date,
  leftAt: Date,
  positionsId: string,
  hallsId: string
) => {
  return await prisma.operators.update({
    where: {
      id,
    },
    data: {
      positionsId,
      hallsId,
      operatorDetails: {
        update: {
          name,
          email,
          joinedAt: new Date(joinedAt),
          leftAt: new Date(leftAt),
        },
      },
    },
  });
};

export const remove = async (id: string) => {
  return await prisma.operators.delete({
    where: {
      id,
    },
  });
};
