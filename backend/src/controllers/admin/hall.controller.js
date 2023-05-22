const prismaClient = require('@prisma/client');

const prisma = new prismaClient.PrismaClient();

exports.create = (req, res) => {
  const { name, nameTag, type } = req.body;

  prisma.halls
    .create({
      data: {
        name,
        nameTag,
        type,
      },
    })
    .then(() => {
      res.status(200).json({
        message: 'New hall created!',
      });
    })
    .catch((error) => {
      res.status(400).json({
        message: err.message.toString(),
      });
    });
};
