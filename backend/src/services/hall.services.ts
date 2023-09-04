import { Gender } from '@prisma/client';
import { prisma } from '@/utils/prisma';

export const create = async (name: string, nameTag: string, type: Gender) => {
  return await prisma.halls.create({
    data: {
      name,
      nameTag,
      type,
    },
  });
};

export const get = async () => {
  return await prisma.halls.findMany({
    select: {
      id: true,
      name: true,
      nameTag: true,
      type: true,
    },
  });
};

export const getById = async (id: string) => {
  return await prisma.halls.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      name: true,
      nameTag: true,
      type: true,
    },
  });
};

export const update = async (
  id: string,
  name: string,
  nameTag: string,
  type: Gender
) => {
  return await prisma.halls.update({
    where: {
      id: id,
    },
    data: {
      name: name,
      nameTag: nameTag,
      type: type,
    },
  });
};
