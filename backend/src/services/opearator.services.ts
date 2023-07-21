import { Prisma, prisma } from '@/utils/prisma';

export const create = async (
  name: string,
  email: string,
  joinedAt: Date,
  leftAt: Date,
  positionsId: string,
  hallsId: string
) => {
  return await prisma.operators
    .create({
      data: {
        positionsId,
        hallsId,
        operatorDetails: {
          create: {
            name,
            email,
            joinedAt: joinedAt ? new Date(joinedAt) : null,
            leftAt: leftAt ? new Date(leftAt) : null,
          },
        },
      },
    })
    .then((authority) => {
      return authority;
    })
    .catch((error: Prisma.PrismaClientKnownRequestError) => {
      return error;
    });
};

export const get = async () => {
  return await prisma.operators
    .findMany({
      select: {
        id: true,
        isActive: true,
        positionsId: true,
        hallsId: true,
        operatorDetails: {
          select: {
            name: true,
            email: true,
            joinedAt: true,
            leftAt: true,
          },
        },
      },
    })
    .then((notices) => {
      return notices;
    })
    .catch((error: Prisma.PrismaClientKnownRequestError) => {
      return error;
    });
};

export const getById = async (id: string) => {
  return await prisma.operators
    .findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        isActive: true,
        positionsId: true,
        hallsId: true,
        operatorDetails: {
          select: {
            name: true,
            email: true,
            joinedAt: true,
            leftAt: true,
          },
        },
      },
    })
    .then((authority) => {
      return authority;
    })
    .catch((error: Prisma.PrismaClientKnownRequestError) => {
      return error;
    });
};

export const update = async (
  id: string,
  name: string,
  email: string,
  joinedAt: Date,
  leftAt: Date,
  positionsId: string,
  hallsId: string
) => {
  return await prisma.operators
    .update({
      where: {
        id,
      },
      data: {
        positionsId,
        hallsId,
        operatorDetails: {
          update: {
            name,
            email,
            joinedAt: new Date(joinedAt),
            leftAt: new Date(leftAt),
          },
        },
      },
    })
    .then((authority) => {
      return authority;
    })
    .catch((error: Prisma.PrismaClientKnownRequestError) => {
      return error;
    });
};

export const remove = async (id: string) => {
  return await prisma.operators
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
