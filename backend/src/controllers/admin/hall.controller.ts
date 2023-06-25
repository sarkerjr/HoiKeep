import { Gender } from '@prisma/client';
import { Prisma, prisma } from '@/utils/prisma';

export const create = async (name: string, nameTag: string, type: Gender) => {
  return await prisma.halls
    .create({
      data: {
        name,
        nameTag,
        type,
      },
    })
    .then((hall) => {
      return hall;
    })
    .catch((error: Prisma.PrismaClientKnownRequestError) => {
      if (error.code === 'P2002') {
        throw new Error('hall already exists.');
      }
      throw new Error('Something went wrong.');
    });
};
