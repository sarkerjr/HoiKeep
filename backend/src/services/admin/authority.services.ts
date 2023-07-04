import { Request, Response } from 'express';
import {
  create,
  get,
  update,
  remove,
} from '@/controllers/admin/authority.controller';

export const createAuthority = async (req: Request, res: Response) => {
  const { name, email, designation, positionsId, hallsId, departmentsId } =
    req.body;

  const authority = await create(
    name,
    email,
    designation,
    positionsId,
    hallsId,
    departmentsId
  );

  if (authority instanceof Error) {
    return res.status(400).json({
      message:
        authority.code === 'P2002'
          ? 'Authority already exists.'
          : 'Something went wrong.',
    });
  }

  return res.status(201).json({
    message: 'Authority created successfully.',
  });
};

export const getAuthorities = async (req: Request, res: Response) => {
  const authorities = await get();

  if (authorities instanceof Error) {
    return res.status(400).json({ message: 'Something went wrong!' });
  }

  return res.status(200).json(authorities);
};

export const updateAuthority = async (req: Request, res: Response) => {
  const { id, name, email, designation, positionsId, hallsId, departmentsId } =
    req.body;

  const authority = await update(
    id,
    name,
    email,
    designation,
    positionsId,
    hallsId,
    departmentsId
  );

  if (authority instanceof Error) {
    return res.status(400).json({ message: 'Something went wrong!' });
  }

  return res.status(200).json({ message: 'Authority updated successfully.' });
};

export const removeAuthority = async (req: Request, res: Response) => {
  const { id } = req.body;

  const authority = await remove(id);

  if (authority instanceof Error) {
    return res.status(400).json({ message: 'Something went wrong!' });
  }

  return res.status(200).json({ message: 'Authority deleted successfully.' });
};
