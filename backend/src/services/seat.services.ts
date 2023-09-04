import { Prisma, prisma } from '@/utils/prisma';

type UpdateSeatType = {
  id: string;
  no?: string;
  isAvailable?: boolean;
  roomsId?: string;
};

export const create = async (seat: Prisma.SeatsCreateInput) => {
  return await prisma.seats.create({
    data: seat,
  });
};

export const get = async () => {
  return await prisma.seats.findMany({
    include: {
      rooms: {
        select: {
          id: true,
          no: true,
        },
      },
    },
  });
};

export const getById = async (id: string) => {
  return await prisma.seats.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      no: true,
      isAvailable: true,
      roomsId: true,
    },
  });
};

export const update = async ({
  id,
  no,
  isAvailable,
  roomsId,
}: UpdateSeatType) => {
  return await prisma.seats.update({
    where: {
      id,
    },
    data: {
      no,
      isAvailable,
      roomsId,
    },
  });
};

export const remove = async (id: string) => {
  return await prisma.seats.delete({
    where: {
      id,
    },
  });
};
