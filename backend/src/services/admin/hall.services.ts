import { Request, Response } from 'express';
import { create, get, update } from '@/controllers/admin/hall.controller';

export const createHall = async (req: Request, res: Response) => {
  const { name, nameTag, type } = req.body;

  const hall = await create(name, nameTag, type);

  if (hall instanceof Error) {
    return res.status(400).json({ message: hall.message });
  }

  return res.status(201).json({
    message: 'Hall created successfully.',
  });
};

export const getHalls = async (req: Request, res: Response) => {
  const halls = await get();

  if (halls instanceof Error) {
    return res.status(400).json({ message: 'Something went wrong!' });
  }

  return res.status(200).json(halls);
};

export const updateHall = async (req: Request, res: Response) => {
  const { id, name, nameTag, type } = req.body;

  const hall = await update(id, name, nameTag, type);

  if (hall instanceof Error) {
    return res.status(400).json({ message: 'Something went wrong!' });
  }

  return res.status(200).json({ message: 'Hall updated successfully.' });
};
