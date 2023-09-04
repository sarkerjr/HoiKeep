import { prisma } from '@/utils/prisma';
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
  return await prisma.accommodations.create({
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
  });
};

export const createWithSeat = async ({
  isActive,
  status,
  joiningDate,
  leavingDate,
  studentsId,
  seatsId,
}: AccommodationType) => {
  return await prisma.$transaction([
    prisma.accommodations.create({
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
};

export const get = async () => {
  return await prisma.accommodations.findMany({
    select: {
      id: true,
      isActive: true,
      status: true,
      joiningDate: true,
      leavingDate: true,
      students: {
        select: {
          id: true,
          isActive: true,
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
  });
};

export const getById = async (id: string) => {
  return await prisma.accommodations.findUnique({
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
          isActive: true,
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
  return await prisma.accommodations.update({
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
  const accommodation: any = await getById(id!);

  // if no value is passed, use the previous value
  if (!joiningDate) joiningDate = accommodation.joiningDate;
  if (!leavingDate) leavingDate = accommodation.leavingDate;

  return await prisma.$transaction(async (tx) => {
    // make previous seat available if seat changed
    if (accommodation.seats.id !== seatsId) {
      await tx.seats.update({
        where: {
          id: accommodation.seats.id,
        },
        data: {
          isAvailable: true,
        },
      });
    }

    await tx.accommodations.update({
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
    });

    // set the new seat unavailable
    await tx.seats.update({
      where: {
        id: seatsId,
      },
      data: {
        isAvailable: !isActive,
      },
    });
  });
};

export const remove = async (id: string) => {
  return await prisma.accommodations.delete({
    where: {
      id,
    },
  });
};
