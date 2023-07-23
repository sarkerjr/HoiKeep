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
      return error;
    });
};

export const get = async () => {
  return await prisma.authorities
    .findMany({
      include: {
        authorityDetails: {
          include: {
            designations: {
              select: {
                id: true,
                name: true,
              },
            },
          },
        },
        positions: {
          select: {
            id: true,
            name: true,
          },
        },
        departments: {
          select: {
            id: true,
            name: true,
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
      include: {
        authorityDetails: {
          include: {
            designations: {
              select: {
                id: true,
                name: true,
              },
            },
          },
        },
        positions: {
          select: {
            id: true,
            name: true,
          },
        },
        departments: {
          select: {
            id: true,
            name: true,
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
