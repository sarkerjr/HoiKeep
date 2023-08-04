import { prisma, Prisma } from '@/utils/prisma';
import { calculateFeesDue } from '@/utils/helper';

type Month = { year: number; month: number };

export const create = async (
  accommodationsId: string,
  months: Month[],
  amount: number
) => {
  // create a fee entry for each month
  for (const { year, month } of months) {
    await prisma.fees.create({
      data: {
        accommodationsId,
        year,
        month,
        amount,
      },
    });
  }
};

export const get = async () => {
  return await prisma.fees
    .findMany({
      select: {
        id: true,
        year: true,
        month: true,
        amount: true,
        accommodations: {
          select: {
            id: true,
            isActive: true,
            status: true,
            students: {
              select: {
                studentProfiles: {
                  select: {
                    name: true,
                    studentNo: true,
                  },
                },
              },
            },
            seats: {
              select: {
                no: true,
                rooms: {
                  select: {
                    no: true,
                  },
                },
              },
            },
          },
        },
      },
    })
    .then((fees) => {
      return fees;
    })
    .catch((error: Prisma.PrismaClientKnownRequestError) => {
      throw error;
    });
};

export const getById = async (id: string) => {
  return await prisma.fees
    .findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        year: true,
        month: true,
        amount: true,
        accommodations: {
          select: {
            id: true,
            isActive: true,
            status: true,
            students: {
              select: {
                studentProfiles: {
                  select: {
                    name: true,
                    studentNo: true,
                  },
                },
              },
            },
            seats: {
              select: {
                no: true,
                rooms: {
                  select: {
                    no: true,
                  },
                },
              },
            },
          },
        },
      },
    })
    .then((fee) => {
      return fee;
    })
    .catch((error: Prisma.PrismaClientKnownRequestError) => {
      throw error;
    });
};

export const getDue = async () => {
  const accommodations = await prisma.accommodations.findMany({
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
              no: true,
            },
          },
        },
      },
    },
  });

  // calculate the number of months of fees due for each accommodation
  const feesDue: any[] = [];
  for (const accommodation of accommodations) {
    // get the fees for the accommodation
    const fees = await prisma.fees.findMany({
      where: {
        accommodationsId: accommodation.id,
      },
    });

    // calculate the number of months of fees due
    const monthsDue = calculateFeesDue(fees, accommodation);

    if (monthsDue > 0) feesDue.push({ ...accommodation, monthsDue: monthsDue });
  }

  return feesDue;
};

export const update = async (id: string, amount: number) => {
  return await prisma.fees
    .update({
      where: {
        id,
      },
      data: {
        amount,
      },
    })
    .then((fee) => {
      return fee;
    })
    .catch((error: Prisma.PrismaClientKnownRequestError) => {
      throw error;
    });
};

export const remove = async (id: string) => {
  return await prisma.fees
    .delete({
      where: {
        id,
      },
    })
    .then((fee) => {
      return fee;
    })
    .catch((error: Prisma.PrismaClientKnownRequestError) => {
      throw error;
    });
};
