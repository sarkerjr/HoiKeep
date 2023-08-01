import { Prisma, prisma } from '@/utils/prisma';
import { AccommodationStatus } from '@prisma/client';

type AccommodationType = {
  id?: string;
  isActive: boolean;
  status: AccommodationStatus;
  joiningDate: Date;
  leavingDate: Date;
  studentsId: string;
  seatsId: string;
};

export const create = async ({
  isActive,
  status,
  joiningDate,
  leavingDate,
  studentsId,
  seatsId,
}: AccommodationType) => {
  return await prisma.accommodations
    .create({
      data: {
        isActive,
        status,
        joiningDate: joiningDate ? new Date(joiningDate) : null,
        leavingDate: leavingDate ? new Date(leavingDate) : null,
        students: {
          connect: {
            id: studentsId,
          },
        },
        seats: {
          connect: {
            id: seatsId,
          },
        },
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
            students: {
              connect: {
                id: studentsId,
              },
            },
            seats: {
              connect: {
                id: seatsId,
              },
            },
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
        joiningDate: true,
        leavingDate: true,
        students: {
          select: {
            id: true,
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
                hallsId: true,
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
        joiningDate: true,
        leavingDate: true,
        students: {
          select: {
            id: true,
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
                hallsId: true,
                no: true,
              },
            },
          },
        },
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
  joiningDate,
  leavingDate,
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
        joiningDate: joiningDate ? new Date(joiningDate) : null,
        leavingDate: leavingDate ? new Date(leavingDate) : null,
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
  joiningDate,
  leavingDate,
  studentsId,
  seatsId,
}: AccommodationType) => {
  try {
    return await prisma.$transaction([
      prisma.accommodations.update({
        where: {
          id,
        },
        data: {
          isActive,
          status,
          joiningDate: joiningDate ? new Date(joiningDate) : null,
          leavingDate: joiningDate ? new Date(leavingDate) : null,
          studentsId,
          seatsId,
        },
      }),
      prisma.seats.update({
        where: {
          id: seatsId,
        },
        data: {
          isAvailable: isActive ? false : true, //set seat available if accommodation is inactive
        },
      }),
    ]);
  } catch (error) {
    return error;
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
