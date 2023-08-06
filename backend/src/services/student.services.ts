import { Prisma, prisma } from '@/utils/prisma';

type StudentType = {
  id?: string;
  isActive: boolean;
  name: string;
  email: string;
  studentNo: string;
  session: string;
  semester: number;
  year: number;
  admissionDate: Date;
  imageUrl: string;
  hallsId: string;
  departmentsId: string;
  degreesId: string;
};

export const create = async ({
  name,
  email,
  studentNo,
  session,
  semester,
  year,
  admissionDate,
  imageUrl,
  hallsId,
  departmentsId,
  degreesId,
}: StudentType) => {
  return await prisma.students
    .create({
      data: {
        hallsId,
        departmentsId,
        studentProfiles: {
          create: {
            name,
            email,
            studentNo,
            session,
            semester,
            year,
            admissionDate: admissionDate ? new Date(admissionDate) : null,
            degreesId,
            studentImages: {
              create: {
                url: imageUrl,
              },
            },
          },
        },
      },
    })
    .then((student) => {
      return student;
    })
    .catch((error: Prisma.PrismaClientKnownRequestError) => {
      return error;
    });
};

export const get = async () => {
  return await prisma.students
    .findMany({
      include: {
        studentProfiles: {
          include: {
            studentImages: true,
            degrees: true,
          },
        },
        departments: true,
      },
    })
    .then((students) => {
      return students;
    })
    .catch((error: Prisma.PrismaClientKnownRequestError) => {
      return error;
    });
};

export const getById = async (id: string) => {
  return await prisma.students
    .findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        hallsId: true,
        departmentsId: true,
        studentProfiles: {
          select: {
            name: true,
            email: true,
            studentNo: true,
            session: true,
            semester: true,
            year: true,
            admissionDate: true,
          },
        },
      },
    })
    .then((student) => {
      return student;
    })
    .catch((error: Prisma.PrismaClientKnownRequestError) => {
      return error;
    });
};

export const getWithAccommodationStatus = async () => {
  return await prisma.students
    .findMany({
      where: {
        isActive: true,
      },
      select: {
        id: true,
        isActive: true,
        hallsId: true,
        departments: {
          select: {
            id: true,
            name: true,
            nameTag: true,
          },
        },
        studentProfiles: {
          select: {
            name: true,
            email: true,
            studentNo: true,
            session: true,
            semester: true,
            year: true,
            admissionDate: true,
          },
        },
        accommodations: {
          select: {
            id: true,
            isActive: true,
          },
        },
      },
    })
    .then((students) => {
      return students;
    })
    .catch((error: Prisma.PrismaClientKnownRequestError) => {
      return error;
    });
};

export const update = async ({
  id,
  isActive,
  name,
  email,
  studentNo,
  session,
  semester,
  year,
  admissionDate,
  hallsId,
  departmentsId,
}: StudentType) => {
  return await prisma.students
    .update({
      where: {
        id,
      },
      data: {
        isActive,
        hallsId,
        departmentsId,
        studentProfiles: {
          update: {
            name,
            email,
            studentNo,
            session,
            semester,
            year,
            admissionDate: new Date(admissionDate),
          },
        },
      },
    })
    .then((student) => {
      return student;
    })
    .catch((error: Prisma.PrismaClientKnownRequestError) => {
      return error;
    });
};

export const remove = async (id: string) => {
  return await prisma.students
    .delete({
      where: {
        id,
      },
    })
    .then((student) => {
      return student;
    })
    .catch((error: Prisma.PrismaClientKnownRequestError) => {
      return error;
    });
};
