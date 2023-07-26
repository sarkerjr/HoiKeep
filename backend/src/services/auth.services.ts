import { Prisma, prisma } from '@/utils/prisma';

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
