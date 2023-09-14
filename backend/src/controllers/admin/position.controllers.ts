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

  try {
    await create(name, category);

    res.status(201).json({
      message: 'Position created successfully.',
    });
  } catch (error: any) {
    res.status(400).json({
      message:
        error.code === 'P2002'
          ? 'Position already exists.'
          : 'Something went wrong.',
    });
  }
};

export const getPositions = async (req: Request, res: Response) => {
  try {
    const positions = await get();

    res.status(200).json(positions);
  } catch (error: any) {
    res.status(400).json({ message: 'Something went wrong!' });
  }
};

export const getPosition = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const position = await getById(id);

    res.status(200).json(position);
  } catch (error: any) {
    res.status(400).json({ message: 'Something went wrong!' });
  }
};

export const updatePosition = async (req: Request, res: Response) => {
  const { id, name, category } = req.body;

  try {
    await update(id, name, category);

    res.status(200).json({ message: 'Position updated successfully.' });
  } catch (error: any) {
    res.status(400).json({ message: 'Something went wrong!' });
  }
};

export const removePosition = async (req: Request, res: Response) => {
  const { id } = req.body;

  try {
    await remove(id);

    res.status(200).json({ message: 'Position deleted successfully.' });
  } catch (error: any) {
    res.status(400).json({ message: 'Something went wrong!' });
  }
};
