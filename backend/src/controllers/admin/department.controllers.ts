import { Request, Response } from 'express';
import { create, get, getById, update } from '@/services/department.services';

export const createDepartment = async (req: Request, res: Response) => {
  const { name, nameTag } = req.body;

  try {
    await create(name, nameTag);

    res.status(201).json({
      message: 'Department created successfully.',
    });
  } catch (error: any) {
    res.status(400).json({
      message:
        error.code === 'P2002'
          ? 'Department already exists.'
          : 'Something went wrong.',
    });
  }
};

export const getDepartments = async (req: Request, res: Response) => {
  try {
    const departments = await get();

    res.status(200).json(departments);
  } catch (error: any) {
    res.status(400).json({ message: 'Something went wrong!' });
  }
};

export const getDepartment = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const department = await getById(id);

    res.status(200).json(department);
  } catch (error: any) {
    res.status(400).json({ message: 'Something went wrong!' });
  }
};

export const updateDepartment = async (req: Request, res: Response) => {
  const { id, name, nameTag } = req.body;

  try {
    await update(id, name, nameTag);

    res.status(200).json({ message: 'Department updated successfully.' });
  } catch (error: any) {
    res.status(400).json({ message: 'Something went wrong!' });
  }
};
