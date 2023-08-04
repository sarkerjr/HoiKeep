import { Request, Response } from 'express';

import { create, get, getDue, update, remove } from '@/services/fee.services';

export const createFees = async (req: Request, res: Response) => {
  const { accommodationsId, months } = req.body;
  let { amount } = req.body;

  amount = typeof amount === 'number' ? amount : parseInt(amount);

  try {
    await create(accommodationsId, months, amount);
  } catch (error: any) {
    res.status(400).json({ message: 'Something went wrong!' });
  }
};

export const getFees = async (req: Request, res: Response) => {
  try {
    const fees = await get();
    res.status(200).json(fees);
  } catch (error: any) {
    res.status(400).json({ message: 'Something went wrong!' });
  }
};

export const getFeesDue = async (req: Request, res: Response) => {
  try {
    const feesDue = await getDue();
    res.status(200).json(feesDue);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const updateFees = async (req: Request, res: Response) => {
  const { id, amount } = req.body;

  try {
    await update(id, amount);
    res.status(200).json({ message: 'Fees updated successfully' });
  } catch (error: any) {
    res.status(400).json({ message: 'Something went wrong!' });
  }
};

export const removeFees = async (req: Request, res: Response) => {
  const { id } = req.body;

  try {
    await remove(id);
    res.status(200).json({ message: 'Fees removed successfully' });
  } catch (error: any) {
    res.status(400).json({ message: 'Something went wrong!' });
  }
};
