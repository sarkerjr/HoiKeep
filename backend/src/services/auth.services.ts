import { Prisma, prisma } from '@/utils/prisma';
import { UserType } from '@prisma/client';

export const login = async (email: string, password: string) => {
  return await prisma.users
    .findUnique({
      where: {
        email,
      },
    })
    .then((user) => {
      if (user && user.password !== password) {
        return new Error('Invalid password');
      }
      return user;
    })
    .catch((error: Prisma.PrismaClientKnownRequestError) => {
      return error;
    });
};

export const registerAuthority = async (
  email: string,
  password: string,
  type: UserType,
  roleId: string
) => {
  return await prisma.users
    .create({
      data: {
        email,
        password,
        type,
        authoritiesId: roleId,
      },
    })
    .then((user) => {
      return user;
    })
    .catch((error: Prisma.PrismaClientKnownRequestError) => {
      return error;
    });
};

export const registerStaff = async (
  email: string,
  password: string,
  type: UserType,
  roleId: string
) => {
  return await prisma.users
    .create({
      data: {
        email,
        password,
        type,
        staffsId: roleId,
      },
    })
    .then((user) => {
      return user;
    })
    .catch((error: Prisma.PrismaClientKnownRequestError) => {
      return error;
    });
};

export const registerOperator = async (
  email: string,
  password: string,
  type: UserType,
  roleId: string
) => {
  return await prisma.users
    .create({
      data: {
        email,
        password,
        type,
        operatorsId: roleId,
      },
    })
    .then((user) => {
      return user;
    })
    .catch((error: Prisma.PrismaClientKnownRequestError) => {
      return error;
    });
};

export const registerStudent = async (
  email: string,
  password: string,
  type: UserType,
  roleId: string
) => {
  return await prisma.users
    .create({
      data: {
        email,
        password,
        type,
        studentsId: roleId,
      },
    })
    .then((user) => {
      return user;
    })
    .catch((error: Prisma.PrismaClientKnownRequestError) => {
      return error;
    });
};
