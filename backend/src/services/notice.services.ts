import { Prisma, prisma } from '@/utils/prisma';

export const create = async (
  title: string,
  description: string,
  hallId: string
) => {
  return await prisma.notices.create({
    data: {
      title,
      description,
      hallsId: hallId,
    },
  });
};

export const get = async () => {
  return await prisma.notices.findMany({
    select: {
      id: true,
      title: true,
      description: true,
      isActive: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
};

export const update = async (
  id: string,
  title: string,
  description: string,
  isActive: boolean
) => {
  return await prisma.notices.update({
    where: {
      id,
    },
    data: {
      title,
      description,
      isActive,
    },
  });
};

export const remove = async (id: string) => {
  return await prisma.notices.delete({
    where: {
      id,
    },
  });
};
