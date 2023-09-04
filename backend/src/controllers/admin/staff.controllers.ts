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

  try {
    await create({
      name,
      email,
      joinedAt,
      leftAt,
      positionsId,
      hallsId,
    });

    res.status(201).json({
      message: 'Staff created successfully.',
    });
  } catch (error: any) {
    res.status(400).json({
      message:
        error.code === 'P2002'
          ? 'Staff already exists.'
          : 'Something went wrong.',
    });
  }
};

export const getStaffs = async (req: Request, res: Response) => {
  try {
    const staffs = await get();

    res.status(200).json(staffs);
  } catch (error: any) {
    res.status(400).json({ message: 'Something went wrong!' });
  }
};

export const getStaff = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const staff = await getById(id);

    res.status(200).json(staff);
  } catch (error: any) {
    res.status(400).json({ message: 'Something went wrong!' });
  }
};

export const updateStaff = async (req: Request, res: Response) => {
  const { id, name, email, joinedAt, leftAt, positionsId, hallsId } = req.body;

  try {
    const oldData: any = await getById(id);

    await update({
      id,
      name,
      email,
      joinedAt: joinedAt || oldData?.staffDetails?.joinedAt,
      leftAt: leftAt || oldData?.staffDetails?.leftAt,
      positionsId,
      hallsId,
    });

    res.status(200).json({ message: 'Staff updated successfully.' });
  } catch (error: any) {
    res.status(400).json({ message: 'Something went wrong!' });
  }
};

export const removeStaff = async (req: Request, res: Response) => {
  const { id } = req.body;

  try {
    await remove(id);

    res.status(200).json({ message: 'Staff deleted successfully.' });
  } catch (error: any) {
    res.status(400).json({ message: 'Something went wrong!' });
  }
};
