import { Prisma, prisma } from '@/utils/prisma';

type AuthorityType = {
  id?: string;
  name: string;
  email: string;
  joinedAt: Date;
  leftAt: Date;
  hallsId: string;
  departmentsId: string;
  designationsId: string;
  positionsId: string;
};

export const create = async ({
  name,
  email,
  joinedAt,
  leftAt,
  positionsId,
  hallsId,
  departmentsId,
  designationsId,
}: AuthorityType) => {
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
            joinedAt: joinedAt ? new Date(joinedAt) : null,
            leftAt: leftAt ? new Date(leftAt) : null,
            designationsId,
          },
        },
      },
    })
    .then((authority) => {
      return authority;
    })
    .catch((error: Prisma.PrismaClientKnownRequestError) => {
      console.log('🚀 ~ file: authority.services.ts:46 ~ error:', error);
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
            joinedAt: true,
            leftAt: true,
            designationsId: true,
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

export const update = async ({
  id,
  name,
  email,
  joinedAt,
  leftAt,
  positionsId,
  hallsId,
  departmentsId,
  designationsId,
}: AuthorityType) => {
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
            joinedAt: new Date(joinedAt),
            leftAt: new Date(leftAt),
            designationsId,
          },
        },
      },
    })
    .then((authority) => {
      return authority;
    })
    .catch((error: Prisma.PrismaClientKnownRequestError) => {
      console.log('🚀 ~ file: authority.services.ts:144 ~ error:', error);
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
    .then((authority) => {
      return authority;
    })
    .catch((error: Prisma.PrismaClientKnownRequestError) => {
      return error;
    });
};
