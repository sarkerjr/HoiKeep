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

  const opearator = await create(
    name,
    email,
    joinedAt,
    leftAt,
    positionsId,
    hallsId
  );

  if (opearator instanceof Error) {
    return res.status(400).json({
      message:
        opearator.code === 'P2002'
          ? 'Operator already exists.'
          : 'Something went wrong.',
    });
  }

  return res.status(201).json({
    message: 'Operator created successfully.',
  });
};

export const getOperators = async (req: Request, res: Response) => {
  const opearators = await get();

  if (opearators instanceof Error) {
    return res.status(400).json({ message: 'Something went wrong!' });
  }

  return res.status(200).json(opearators);
};

export const getOperator = async (req: Request, res: Response) => {
  const { id } = req.params;

  const operator = await getById(id);

  if (operator instanceof Error) {
    return res.status(400).json({ message: 'Something went wrong!' });
  }

  return res.status(200).json(operator);
};

export const updateOperator = async (req: Request, res: Response) => {
  const { id, name, email, positionsId, hallsId } = req.body;

  let { joinedAt, leftAt } = req.body;

  const oldData: any = await getById(id);

  joinedAt = joinedAt || oldData?.operatorDetails?.joinedAt;
  leftAt = leftAt || oldData?.operatorDetails?.leftAt;

  const operator = await update(
    id,
    name,
    email,
    joinedAt,
    leftAt,
    positionsId,
    hallsId
  );

  if (operator instanceof Error) {
    return res.status(400).json({ message: 'Something went wrong!' });
  }

  return res.status(200).json({ message: 'Operator updated successfully.' });
};

export const removeOperator = async (req: Request, res: Response) => {
  const { id } = req.body;

  const operator = await remove(id);

  if (operator instanceof Error) {
    return res.status(400).json({ message: 'Something went wrong!' });
  }

  return res.status(200).json({ message: 'Operator deleted successfully.' });
};
