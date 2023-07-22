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

  const designation = await create(name);

  if (designation instanceof Error) {
    return res.status(400).json({
      message:
        designation.code === 'P2002'
          ? 'Designation already exists.'
          : 'Something went wrong.',
    });
  }

  return res.status(201).json({
    message: 'Designation created successfully.',
  });
};

export const getDesignations = async (req: Request, res: Response) => {
  const designation = await get();

  if (designation instanceof Error) {
    return res.status(400).json({ message: 'Something went wrong!' });
  }

  return res.status(200).json(designation);
};

export const getDesignation = async (req: Request, res: Response) => {
  const { id } = req.params;

  const designation = await getById(id);

  if (designation instanceof Error) {
    return res.status(400).json({ message: 'Something went wrong!' });
  }

  return res.status(200).json(designation);
};

export const updateDesignation = async (req: Request, res: Response) => {
  const { id, name } = req.body;

  const designation = await update(id, name);

  if (designation instanceof Error) {
    return res.status(400).json({ message: 'Something went wrong!' });
  }

  return res.status(200).json({ message: 'Designation updated successfully.' });
};

export const removeDesignation = async (req: Request, res: Response) => {
  const { id } = req.body;

  const designation = await remove(id);

  if (designation instanceof Error) {
    return res.status(400).json({ message: 'Something went wrong!' });
  }

  return res.status(200).json({ message: 'Designation deleted successfully.' });
};
