import { Request, Response } from 'express';
import {
  create,
  get,
  getById,
  update,
  remove,
} from '@/services/position.services';

export const createPosition = async (req: Request, res: Response) => {
  const { name, category } = req.body;

  const position = await create(name, category);

  if (position instanceof Error) {
    return res.status(400).json({
      message:
        position.code === 'P2002'
          ? 'Position already exists.'
          : 'Something went wrong.',
    });
  }

  return res.status(201).json({
    message: 'Position created successfully.',
  });
};

export const getPositions = async (req: Request, res: Response) => {
  const positions = await get();

  if (positions instanceof Error) {
    return res.status(400).json({ message: 'Something went wrong!' });
  }

  return res.status(200).json(positions);
};

export const getPosition = async (req: Request, res: Response) => {
  const { id } = req.params;

  const position = await getById(id);

  if (position instanceof Error) {
    return res.status(400).json({ message: 'Something went wrong!' });
  }

  return res.status(200).json(position);
};

export const updatePosition = async (req: Request, res: Response) => {
  const { id, name, category } = req.body;

  const position = await update(id, name, category);

  if (position instanceof Error) {
    return res.status(400).json({ message: 'Something went wrong!' });
  }

  return res.status(200).json({ message: 'Position updated successfully.' });
};

export const removePosition = async (req: Request, res: Response) => {
  const { id } = req.body;

  const position = await remove(id);

  if (position instanceof Error) {
    return res.status(400).json({ message: 'Something went wrong!' });
  }

  return res.status(200).json({ message: 'Position deleted successfully.' });
};
