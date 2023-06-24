const prismaClient = require('@prisma/client');

const prisma = new prismaClient.PrismaClient();

exports.create = async (name, nameTag, type) => {
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
    .catch((error) => {
      if (error.code === 'P2002') {
        throw new Error('hall already exists.');
      }
      throw new Error('Something went wrong.');
    });
};
