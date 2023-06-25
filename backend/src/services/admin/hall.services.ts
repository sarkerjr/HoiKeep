import { Request, Response } from 'express';
import { create } from '@/controllers/admin/hall.controller';

export const createHall = async (req: Request, res: Response) => {
  const { name, nameTag, type } = req.body;

  const hall = await create(name, nameTag, type);

  return res.status(201).json(hall);
};
