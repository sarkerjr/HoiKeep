import { Request, Response } from 'express';

import { create, getDue } from '@/services/fee.services';

export const createFees = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { accommodationsId, months, amount } = req.body;

  try {
    await create(accommodationsId, months, amount);
    res.status(201).json({ message: 'Fees created successfully' });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getFeesDue = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const feesDue = await getDue();
    res.status(200).json(feesDue);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
