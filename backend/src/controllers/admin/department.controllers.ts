import { Request, Response } from 'express';
import { create, get, getById, update } from '@/services/department.services';

export const createDepartment = async (req: Request, res: Response) => {
  const { name, nameTag } = req.body;

  const department = await create(name, nameTag);

  if (department instanceof Error) {
    return res.status(400).json({
      message:
        department.code === 'P2002'
          ? 'Department already exists.'
          : 'Something went wrong.',
    });
  }

  return res.status(201).json({
    message: 'Department created successfully.',
  });
};

export const getDepartments = async (req: Request, res: Response) => {
  const departments = await get();

  if (departments instanceof Error) {
    return res.status(400).json({ message: 'Something went wrong!' });
  }

  return res.status(200).json(departments);
};

export const getDepartment = async (req: Request, res: Response) => {
  const { id } = req.params;

  const department = await getById(id);

  if (department instanceof Error) {
    return res.status(400).json({ message: 'Something went wrong!' });
  }

  return res.status(200).json(department);
};

export const updateDepartment = async (req: Request, res: Response) => {
  const { id, name, nameTag } = req.body;

  const department = await update(id, name, nameTag);

  if (department instanceof Error) {
    return res.status(400).json({ message: 'Something went wrong!' });
  }

  return res.status(200).json({ message: 'department updated successfully.' });
};
