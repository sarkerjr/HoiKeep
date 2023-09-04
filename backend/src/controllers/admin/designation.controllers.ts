import { Request, Response } from 'express';
import {
  create,
  get,
  getById,
  update,
  remove,
} from '@/services/designation.services';

export const createDesignation = async (req: Request, res: Response) => {
  const { name } = req.body;

  try {
    await create(name);

    res.status(201).json({
      message: 'Designation created successfully.',
    });
  } catch (error: any) {
    res.status(400).json({
      message:
        error.code === 'P2002'
          ? 'Designation already exists.'
          : 'Something went wrong.',
    });
  }
};

export const getDesignations = async (req: Request, res: Response) => {
  try {
    const designations = await get();

    res.status(200).json(designations);
  } catch (error: any) {
    res.status(400).json({ message: 'Something went wrong!' });
  }
};

export const getDesignation = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const designation = await getById(id);

    res.status(200).json(designation);
  } catch (error: any) {
    res.status(400).json({ message: 'Something went wrong!' });
  }
};

export const updateDesignation = async (req: Request, res: Response) => {
  const { id, name } = req.body;

  try {
    await update(id, name);

    res.status(200).json({ message: 'Designation updated successfully.' });
  } catch (error: any) {
    res.status(400).json({ message: 'Something went wrong!' });
  }
};

export const removeDesignation = async (req: Request, res: Response) => {
  const { id } = req.body;

  try {
    await remove(id);

    res.status(200).json({ message: 'Designation deleted successfully.' });
  } catch (error: any) {
    res.status(400).json({ message: 'Something went wrong!' });
  }
};
