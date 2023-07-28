import { Prisma, prisma } from '@/utils/prisma';

type StaffType = {
  id?: string;
  name: string;
  email: string;
  joinedAt: Date;
  leftAt: Date;
  positionsId: string;
  hallsId: string;
};

export const create = async ({
  name,
  email,
  joinedAt,
  leftAt,
  positionsId,
  hallsId,
}: StaffType) => {
  return await prisma.staffs
    .create({
      data: {
        positionsId,
        hallsId,
        staffDetails: {
          create: {
            name,
            email,
            joinedAt: joinedAt ? new Date(joinedAt) : null,
            leftAt: leftAt ? new Date(leftAt) : null,
          },
        },
      },
    })
    .then((staff) => {
      return staff;
    })
    .catch((error: Prisma.PrismaClientKnownRequestError) => {
      return error;
    });
};

export const get = async () => {
  return await prisma.staffs
    .findMany({
      include: {
        positions: true,
        staffDetails: true,
      },
    })
    .then((staffs) => {
      return staffs;
    })
    .catch((error: Prisma.PrismaClientKnownRequestError) => {
      return error;
    });
};

export const getById = async (id: string) => {
  return await prisma.staffs
    .findUnique({
      where: {
        id,
      },
      include: {
        positions: true,
        staffDetails: true,
      },
    })
    .then((staff) => {
      return staff;
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
}: StaffType) => {
  return await prisma.staffs
    .update({
      where: {
        id,
      },
      data: {
        positionsId,
        hallsId,
        staffDetails: {
          update: {
            name,
            email,
            joinedAt: new Date(joinedAt),
            leftAt: new Date(leftAt),
          },
        },
      },
    })
    .then((staff) => {
      return staff;
    })
    .catch((error: Prisma.PrismaClientKnownRequestError) => {
      return error;
    });
};

export const remove = async (id: string) => {
  return await prisma.staffs
    .delete({
      where: {
        id,
      },
    })
    .then((staff) => {
      return staff;
    })
    .catch((error: Prisma.PrismaClientKnownRequestError) => {
      return error;
    });
};
