import { Prisma, prisma } from '@/utils/prisma';

export const create = async (name: string) => {
  return await prisma.designations
    .create({
      data: {
        name,
      },
    })
    .then((designation) => {
      return designation;
    })
    .catch((error: Prisma.PrismaClientKnownRequestError) => {
      return error;
    });
};

export const get = async () => {
  return await prisma.designations
    .findMany({
      select: {
        id: true,
        name: true,
      },
    })
    .then((designations) => {
      return designations;
    })
    .catch((error: Prisma.PrismaClientKnownRequestError) => {
      return error;
    });
};

export const getById = async (id: string) => {
  return await prisma.designations
    .findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        name: true,
      },
    })
    .then((designation) => {
      return designation;
    })
    .catch((error: Prisma.PrismaClientKnownRequestError) => {
      return error;
    });
};

export const update = async (id: string, name: string) => {
  return await prisma.designations
    .update({
      where: {
        id,
      },
      data: {
        name,
      },
    })
    .then((designation) => {
      return designation;
    })
    .catch((error: Prisma.PrismaClientKnownRequestError) => {
      return error;
    });
};

export const remove = async (id: string) => {
  return await prisma.designations
    .delete({
      where: {
        id,
      },
    })
    .then((designation) => {
      return designation;
    })
    .catch((error: Prisma.PrismaClientKnownRequestError) => {
      return error;
    });
};
