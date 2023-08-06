import { Prisma, prisma } from '@/utils/prisma';

type UpdateSeatType = {
  id: string;
  no?: string;
  isAvailable?: boolean;
  roomsId?: string;
};

export const create = async (seat: Prisma.SeatsCreateInput) => {
  return await prisma.seats
    .create({
      data: seat,
    })
    .then((seat) => {
      return seat;
    })
    .catch((error: Prisma.PrismaClientKnownRequestError) => {
      return error;
    });
};

export const get = async () => {
  return await prisma.seats
    .findMany({
      include: {
        rooms: {
          select: {
            id: true,
            no: true,
          },
        },
      },
    })
    .then((seats) => {
      return seats;
    })
    .catch((error: Prisma.PrismaClientKnownRequestError) => {
      return error;
    });
};

export const getById = async (id: string) => {
  return await prisma.seats
    .findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        no: true,
        isAvailable: true,
        roomsId: true,
      },
    })
    .then((seat) => {
      return seat;
    })
    .catch((error: Prisma.PrismaClientKnownRequestError) => {
      return error;
    });
};

export const update = async ({
  id,
  no,
  isAvailable,
  roomsId,
}: UpdateSeatType) => {
  return await prisma.seats
    .update({
      where: {
        id,
      },
      data: {
        no,
        isAvailable,
        roomsId,
      },
    })
    .then((seat) => {
      return seat;
    })
    .catch((error: Prisma.PrismaClientKnownRequestError) => {
      return error;
    });
};

export const remove = async (id: string) => {
  return await prisma.seats
    .delete({
      where: {
        id,
      },
    })
    .then((seat) => {
      return seat;
    })
    .catch((error: Prisma.PrismaClientKnownRequestError) => {
      return error;
    });
};
