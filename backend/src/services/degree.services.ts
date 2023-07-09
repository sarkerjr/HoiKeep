import { Prisma, prisma } from '@/utils/prisma';

export const create = async (name: string) => {
  return await prisma.degrees
    .create({
      data: {
        name,
      },
    })
    .then((degree) => {
      return degree;
    })
    .catch((error: Prisma.PrismaClientKnownRequestError) => {
      return error;
    });
};

export const get = async () => {
  return await prisma.degrees
    .findMany({
      select: {
        id: true,
        name: true,
      },
    })
    .then((degrees) => {
      return degrees;
    })
    .catch((error: Prisma.PrismaClientKnownRequestError) => {
      return error;
    });
};

export const getById = async (id: string) => {
  return await prisma.degrees
    .findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        name: true,
      },
    })
    .then((degree) => {
      return degree;
    })
    .catch((error: Prisma.PrismaClientKnownRequestError) => {
      return error;
    });
};

export const update = async (id: string, name: string) => {
  return await prisma.degrees
    .update({
      where: {
        id,
      },
      data: {
        name,
      },
    })
    .then((degree) => {
      return degree;
    })
    .catch((error: Prisma.PrismaClientKnownRequestError) => {
      return error;
    });
};

export const remove = async (id: string) => {
  return await prisma.degrees
    .delete({
      where: {
        id,
      },
    })
    .then((degree) => {
      return degree;
    })
    .catch((error: Prisma.PrismaClientKnownRequestError) => {
      return error;
    });
};
