import { Gender } from '@prisma/client';
import { Prisma, prisma } from '@/utils/prisma';

export const create = async (name: string, nameTag: string, type: Gender) => {
  return await prisma.halls
    .create({
      data: {
        name,
        nameTag,
        type,
      },
    })
    .then((hall) => {
      return hall;
    })
    .catch((error: Prisma.PrismaClientKnownRequestError) => {
      return new Error(
        error.code === 'P2002'
          ? 'Hall already exists.'
          : 'Something went wrong.'
      );
    });
};

export const get = async () => {
  return await prisma.halls
    .findMany({
      select: {
        id: true,
        name: true,
        nameTag: true,
        type: true,
      },
    })
    .then((halls) => {
      return halls;
    })
    .catch((error: Prisma.PrismaClientKnownRequestError) => {
      return error;
    });
};

export const update = async (
  id: string,
  name: string,
  nameTag: string,
  type: Gender
) => {
  return await prisma.halls
    .update({
      where: {
        id,
      },
      data: {
        name,
        nameTag,
        type,
      },
    })
    .then((hall) => {
      return hall;
    })
    .catch((error: Prisma.PrismaClientKnownRequestError) => {
      return error;
    });
};
