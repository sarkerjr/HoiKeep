import { Request, Response } from 'express';
import {
  create,
  get,
  getById,
  update,
  remove,
} from '@/services/degree.services';

export const createDegree = async (req: Request, res: Response) => {
  const { name } = req.body;

  const degree = await create(name);

  if (degree instanceof Error) {
    return res.status(400).json({
      message:
        degree.code === 'P2002'
          ? 'Degree already exists.'
          : 'Something went wrong.',
    });
  }

  return res.status(201).json({
    message: 'Degree created successfully.',
  });
};

export const getDegrees = async (req: Request, res: Response) => {
  const degree = await get();

  if (degree instanceof Error) {
    return res.status(400).json({ message: 'Something went wrong!' });
  }

  return res.status(200).json(degree);
};

export const getDegree = async (req: Request, res: Response) => {
  const { id } = req.params;

  const degree = await getById(id);

  if (degree instanceof Error) {
    return res.status(400).json({ message: 'Something went wrong!' });
  }

  return res.status(200).json(degree);
};

export const updateDegree = async (req: Request, res: Response) => {
  const { id, name } = req.body;

  const degree = await update(id, name);

  if (degree instanceof Error) {
    return res.status(400).json({ message: 'Something went wrong!' });
  }

  return res.status(200).json({ message: 'Degree updated successfully.' });
};

export const removeDegree = async (req: Request, res: Response) => {
  const { id } = req.body;

  const degree = await remove(id);

  if (degree instanceof Error) {
    return res.status(400).json({ message: 'Something went wrong!' });
  }

  return res.status(200).json({ message: 'Degree deleted successfully.' });
};
