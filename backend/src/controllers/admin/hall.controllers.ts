import { Request, Response } from 'express';
import { create, get, getById, update } from '@/services/hall.services';

export const createHall = async (req: Request, res: Response) => {
  const { name, nameTag, type } = req.body;

  try {
    await create(name, nameTag, type);

    res.status(201).json({
      message: 'Hall created successfully.',
    });
  } catch (error: any) {
    res.status(400).json({
      message:
        error.code === 'P2002'
          ? 'Hall already exists.'
          : 'Something went wrong.',
    });
  }
};

export const getHalls = async (req: Request, res: Response) => {
  try {
    const halls = await get();

    res.status(200).json(halls);
  } catch (error: any) {
    res.status(400).json({ message: 'Something went wrong!' });
  }
};

export const getHall = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const hall = await getById(id);

    res.status(200).json(hall);
  } catch (error: any) {
    res.status(400).json({ message: 'Something went wrong!' });
  }
};

export const updateHall = async (req: Request, res: Response) => {
  const { id, name, nameTag, type } = req.body;

  try {
    await update(id, name, nameTag, type);

    res.status(200).json({ message: 'Hall updated successfully.' });
  } catch (error: any) {
    res.status(400).json({ message: 'Something went wrong!' });
  }
};
