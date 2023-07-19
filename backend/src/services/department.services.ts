import { Prisma, prisma } from '@/utils/prisma';

export const create = async (name: string, nameTag: string) => {
  return await prisma.departments
    .create({
      data: {
        name,
        nameTag,
      },
    })
    .then((department) => {
      return department;
    })
    .catch((error: Prisma.PrismaClientKnownRequestError) => {
      return error;
    });
};

export const get = async () => {
  return await prisma.departments
    .findMany({
      select: {
        id: true,
        name: true,
        nameTag: true,
      },
    })
    .then((departments) => {
      console.log(
        '🚀 ~ file: department.services.ts:29 ~ .then ~ departments:',
        new Date().toLocaleString()
      );
      return departments;
    })
    .catch((error: Prisma.PrismaClientKnownRequestError) => {
      return error;
    });
};

export const update = async (id: string, name: string, nameTag: string) => {
  return await prisma.departments
    .update({
      where: {
        id,
      },
      data: {
        name,
        nameTag,
      },
    })
    .then((department) => {
      return department;
    })
    .catch((error: Prisma.PrismaClientKnownRequestError) => {
      return error;
    });
};
