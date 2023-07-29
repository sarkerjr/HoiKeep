import { Prisma, prisma } from '@/utils/prisma';
import { AccommodationStatus } from '@prisma/client';

type AccommodationType = {
  id?: string;
  isActive: boolean;
  status: AccommodationStatus;
  studentsId: string;
  seatsId: string;
};

export const create = async ({
  isActive,
  status,
  studentsId,
  seatsId,
}: AccommodationType) => {
  return await prisma.accommodations
    .create({
      data: {
        isActive,
        status,
        studentsId,
        seatsId,
      },
    })
    .then((accommodation) => {
      return accommodation;
    })
    .catch((error: Prisma.PrismaClientKnownRequestError) => {
      return error;
    });
};

export const createWithSeat = async ({
  isActive,
  status,
  studentsId,
  seatsId,
}: AccommodationType) => {
  {
    try {
      return await prisma.$transaction([
        prisma.accommodations.create({
          data: {
            isActive,
            status,
            studentsId,
            seatsId,
          },
        }),
        prisma.seats.update({
          where: {
            id: seatsId,
          },
          data: {
            isAvailable: false,
          },
        }),
      ]);
    } catch (error) {
      return error;
    }
  }
};

export const get = async () => {
  return await prisma.accommodations
    .findMany({
      select: {
        id: true,
        isActive: true,
        status: true,
        students: {
          select: {
            studentProfiles: {
              select: {
                id: true,
                name: true,
                studentNo: true,
              },
            },
          },
        },
        seats: {
          select: {
            id: true,
            no: true,
            rooms: {
              select: {
                id: true,
                no: true,
              },
            },
          },
        },
      },
    })
    .then((accommodations) => {
      return accommodations;
    })
    .catch((error: Prisma.PrismaClientKnownRequestError) => {
      return error;
    });
};

export const getById = async (id: string) => {
  return await prisma.accommodations
    .findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        isActive: true,
        status: true,
        students: true,
        seats: true,
      },
    })
    .then((accommodation) => {
      return accommodation;
    })
    .catch((error: Prisma.PrismaClientKnownRequestError) => {
      return error;
    });
};

export const update = async ({
  id,
  isActive,
  status,
  studentsId,
  seatsId,
}: AccommodationType) => {
  return await prisma.accommodations
    .update({
      where: {
        id,
      },
      data: {
        isActive,
        status,
        studentsId,
        seatsId,
      },
    })
    .then((accommodation) => {
      return accommodation;
    })
    .catch((error: Prisma.PrismaClientKnownRequestError) => {
      return error;
    });
};

export const updateWithSeat = async ({
  id,
  isActive,
  status,
  studentsId,
  seatsId,
}: AccommodationType) => {
  {
    try {
      return await prisma.$transaction([
        prisma.accommodations.update({
          where: {
            id,
          },
          data: {
            isActive,
            status,
            studentsId,
            seatsId,
          },
        }),
        prisma.seats.update({
          where: {
            id: seatsId,
          },
          data: {
            isAvailable: false,
          },
        }),
      ]);
    } catch (error) {
      return error;
    }
  }
};

export const remove = async (id: string) => {
  return await prisma.accommodations
    .delete({
      where: {
        id,
      },
    })
    .then((accommodation) => {
      return accommodation;
    })
    .catch((error: Prisma.PrismaClientKnownRequestError) => {
      return error;
    });
};
