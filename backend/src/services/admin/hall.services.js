import { create } from '@controllers/admin/hall.controller';

export const createHall = async (req, res) => {
  const { name, nameTag, type } = req.body;

  const hall = await create(name, nameTag, type);

  return res.status(201).json(hall);
};
