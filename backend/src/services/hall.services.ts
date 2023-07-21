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
      return error;
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

export const getById = async (id: string) => {
  return await prisma.halls
    .findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        name: true,
        nameTag: true,
        type: true,
      },
    })
    .then((hall) => {
      return hall;
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
        id: id,
      },
      data: {
        name: name,
        nameTag: nameTag,
        type: type,
      },
    })
    .then((hall) => {
      return hall;
    })
    .catch((error: Prisma.PrismaClientKnownRequestError) => {
      return error;
    });
};
