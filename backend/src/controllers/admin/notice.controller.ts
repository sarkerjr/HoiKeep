import { Prisma, prisma } from '@/utils/prisma';

export const create = async (title: string, description: string) => {
  return await prisma.notices
    .create({
      data: {
        title,
        description,
      },
    })
    .then((notice) => {
      return notice;
    })
    .catch((error: Prisma.PrismaClientKnownRequestError) => {
      return error;
    });
};

export const get = async () => {
  return await prisma.notices
    .findMany({
      select: {
        id: true,
        title: true,
        description: true,
        isActive: true,
      },
    })
    .then((notices) => {
      return notices;
    })
    .catch((error: Prisma.PrismaClientKnownRequestError) => {
      return error;
    });
};

export const update = async (
  id: string,
  title: string,
  description: string,
  isActive: boolean
) => {
  return await prisma.notices
    .update({
      where: {
        id,
      },
      data: {
        title,
        description,
        isActive,
      },
    })
    .then((notice) => {
      return notice;
    })
    .catch((error: Prisma.PrismaClientKnownRequestError) => {
      return error;
    });
};

export const remove = async (id: string) => {
  return await prisma.notices
    .delete({
      where: {
        id,
      },
    })
    .then((notice) => {
      return notice;
    })
    .catch((error: Prisma.PrismaClientKnownRequestError) => {
      return error;
    });
};
