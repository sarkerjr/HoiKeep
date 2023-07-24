import { Prisma, prisma } from '@/utils/prisma';

export const create = async (
  no: string,
  seatQuantity: number,
  hallsId: string
) => {
  return await prisma.rooms
    .create({
      data: {
        no,
        seatQuantity,
        hallsId,
      },
    })
    .then((room) => {
      return room;
    })
    .catch((error: Prisma.PrismaClientKnownRequestError) => {
      console.log('🚀 ~ file: room.services.ts:20 ~ error:', error);
      return error;
    });
};

export const get = async () => {
  return await prisma.rooms
    .findMany({
      select: {
        id: true,
        no: true,
        seatQuantity: true,
        hallsId: true,
      },
    })
    .then((rooms) => {
      return rooms;
    })
    .catch((error: Prisma.PrismaClientKnownRequestError) => {
      return error;
    });
};

export const getById = async (id: string) => {
  return await prisma.rooms
    .findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        no: true,
        seatQuantity: true,
        hallsId: true,
      },
    })
    .then((room) => {
      return room;
    })
    .catch((error: Prisma.PrismaClientKnownRequestError) => {
      return error;
    });
};

export const update = async (
  id: string,
  no: string,
  seatQuantity: number,
  hallsId: string
) => {
  return await prisma.rooms
    .update({
      where: {
        id,
      },
      data: {
        no,
        seatQuantity,
        hallsId,
      },
    })
    .then((room) => {
      return room;
    })
    .catch((error: Prisma.PrismaClientKnownRequestError) => {
      return error;
    });
};

export const remove = async (id: string) => {
  return await prisma.rooms
    .delete({
      where: {
        id,
      },
    })
    .then((room) => {
      return room;
    })
    .catch((error: Prisma.PrismaClientKnownRequestError) => {
      return error;
    });
};
