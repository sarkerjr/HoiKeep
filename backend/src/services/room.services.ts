import { Prisma, prisma } from '@/utils/prisma';

export const create = async (
  no: string,
  seatQuantity: number,
  hallsId: string
) => {
  return await prisma.rooms.create({
    data: {
      no,
      seatQuantity,
      hallsId,
    },
  });
};

export const get = async () => {
  return await prisma.rooms.findMany({
    select: {
      id: true,
      no: true,
      seatQuantity: true,
      hallsId: true,
    },
  });
};

export const getById = async (id: string) => {
  return await prisma.rooms.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      no: true,
      seatQuantity: true,
      hallsId: true,
    },
  });
};

export const update = async (
  id: string,
  no: string,
  seatQuantity: number,
  hallsId: string
) => {
  return await prisma.rooms.update({
    where: {
      id,
    },
    data: {
      no,
      seatQuantity,
      hallsId,
    },
  });
};

export const remove = async (id: string) => {
  return await prisma.rooms.delete({
    where: {
      id,
    },
  });
};
