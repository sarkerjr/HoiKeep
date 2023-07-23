import { Request, Response } from 'express';
import {
  create,
  get,
  getById,
  update,
  remove,
} from '@/services/staff.services';

export const createStaff = async (req: Request, res: Response) => {
  const { name, email, joinedAt, leftAt, positionsId, hallsId } = req.body;

  const staff = await create({
    name,
    email,
    joinedAt,
    leftAt,
    positionsId,
    hallsId,
  });

  if (staff instanceof Error) {
    return res.status(400).json({
      message:
        staff.code === 'P2002'
          ? 'Staff already exists.'
          : 'Something went wrong.',
    });
  }

  return res.status(201).json({
    message: 'Staff created successfully.',
  });
};

export const getStaffs = async (req: Request, res: Response) => {
  const staffs = await get();

  if (staffs instanceof Error) {
    return res.status(400).json({ message: 'Something went wrong!' });
  }

  return res.status(200).json(staffs);
};

export const getStaff = async (req: Request, res: Response) => {
  const { id } = req.params;

  const staff = await getById(id);

  if (staff instanceof Error) {
    return res.status(400).json({ message: 'Something went wrong!' });
  }

  return res.status(200).json(staff);
};

export const updateStaff = async (req: Request, res: Response) => {
  const { id, name, email, joinedAt, leftAt, positionsId, hallsId } = req.body;

  const oldData: any = await getById(id);

  const staff = await update({
    id,
    name,
    email,
    joinedAt: joinedAt || oldData?.staffDetails?.joinedAt,
    leftAt: leftAt || oldData?.staffDetails?.leftAt,
    positionsId,
    hallsId,
  });

  if (staff instanceof Error) {
    return res.status(400).json({ message: 'Something went wrong!' });
  }

  return res.status(200).json({ message: 'Staff updated successfully.' });
};

export const removeStaff = async (req: Request, res: Response) => {
  const { id } = req.body;

  const staff = await remove(id);

  if (staff instanceof Error) {
    return res.status(400).json({ message: 'Something went wrong!' });
  }

  return res.status(200).json({ message: 'Staff deleted successfully.' });
};
