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

  try {
    await create(name);

    res.status(201).json({
      message: 'Degree created successfully.',
    });
  } catch (error: any) {
    res.status(400).json({
      message:
        error.code === 'P2002'
          ? 'Degree already exists.'
          : 'Something went wrong.',
    });
  }
};

export const getDegrees = async (req: Request, res: Response) => {
  try {
    const degrees = await get();

    res.status(200).json(degrees);
  } catch (error: any) {
    res.status(400).json({ message: 'Something went wrong!' });
  }
};

export const getDegree = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const degree = await getById(id);

    res.status(200).json(degree);
  } catch (error: any) {
    res.status(400).json({ message: 'Something went wrong!' });
  }
};

export const updateDegree = async (req: Request, res: Response) => {
  const { id, name } = req.body;

  try {
    await update(id, name);

    res.status(200).json({ message: 'Degree updated successfully.' });
  } catch (error: any) {
    res.status(400).json({ message: 'Something went wrong!' });
  }
};

export const removeDegree = async (req: Request, res: Response) => {
  const { id } = req.body;

  try {
    await remove(id);

    res.status(200).json({ message: 'Degree deleted successfully.' });
  } catch (error: any) {
    res.status(400).json({ message: 'Something went wrong!' });
  }
};
