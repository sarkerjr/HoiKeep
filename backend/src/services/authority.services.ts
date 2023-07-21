import { Prisma, prisma } from '@/utils/prisma';

export const create = async (
  name: string,
  email: string,
  designation: string,
  joinedAt: Date,
  leftAt: Date,
  positionsId: string,
  hallsId: string,
  departmentsId: string
) => {
  return await prisma.authorities
    .create({
      data: {
        positionsId,
        hallsId,
        departmentsId,
        authorityDetails: {
          create: {
            name,
            email,
            designation,
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
  return await prisma.authorities
    .findMany({
      select: {
        id: true,
        isActive: true,
        positionsId: true,
        hallsId: true,
        departmentsId: true,
        authorityDetails: {
          select: {
            name: true,
            email: true,
            designation: true,
            joinedAt: true,
            leftAt: true,
          },
        },
      },
    })
    .then((authorities) => {
      return authorities;
    })
    .catch((error: Prisma.PrismaClientKnownRequestError) => {
      return error;
    });
};

export const getById = async (id: string) => {
  return await prisma.authorities
    .findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        isActive: true,
        positionsId: true,
        hallsId: true,
        departmentsId: true,
        authorityDetails: {
          select: {
            name: true,
            email: true,
            designation: true,
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
  designation: string,
  joinedAt: Date,
  leftAt: Date,
  positionsId: string,
  hallsId: string,
  departmentsId: string
) => {
  return await prisma.authorities
    .update({
      where: {
        id,
      },
      data: {
        positionsId,
        hallsId,
        departmentsId,
        authorityDetails: {
          update: {
            name,
            email,
            designation,
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
  return await prisma.authorities
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
