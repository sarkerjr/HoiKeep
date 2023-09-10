import { Request, Response } from 'express';
import {
  create,
  get,
  getById,
  update,
  remove,
} from '@/services/opearator.services';

export const createOperator = async (req: Request, res: Response) => {
  const { name, email, joinedAt, leftAt, positionsId, hallsId } = req.body;

  try {
    await create(name, email, joinedAt, leftAt, positionsId, hallsId);

    res.status(201).json({
      message: 'Operator created successfully.',
    });
  } catch (error: any) {
    res.status(400).json({
      message:
        error.code === 'P2002'
          ? 'Operator already exists.'
          : 'Something went wrong.',
    });
  }
};

export const getOperators = async (req: Request, res: Response) => {
  try {
    const operators = await get();

    res.status(200).json(operators);
  } catch (error: any) {
    res.status(400).json({ message: 'Something went wrong!' });
  }
};

export const getOperator = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const operator = await getById(id);

    res.status(200).json(operator);
  } catch (error: any) {
    res.status(400).json({ message: 'Something went wrong!' });
  }
};

export const updateOperator = async (req: Request, res: Response) => {
  const { id, name, email, positionsId, hallsId } = req.body;
  let { joinedAt, leftAt } = req.body;

  try {
    const oldData: any = await getById(id);

    joinedAt = joinedAt || oldData?.operatorDetails?.joinedAt;
    leftAt = leftAt || oldData?.operatorDetails?.leftAt;

    await update(id, name, email, joinedAt, leftAt, positionsId, hallsId);

    res.status(200).json({ message: 'Operator updated successfully.' });
  } catch (error: any) {
    res.status(400).json({ message: 'Something went wrong!' });
  }
};

export const removeOperator = async (req: Request, res: Response) => {
  const { id } = req.body;

  try {
    await remove(id);

    res.status(200).json({ message: 'Operator deleted successfully.' });
  } catch (error: any) {
    res.status(400).json({ message: 'Something went wrong!' });
  }
};
