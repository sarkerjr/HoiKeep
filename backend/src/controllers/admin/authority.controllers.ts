import { Request, Response } from 'express';
import {
  create,
  get,
  getById,
  update,
  remove,
} from '@/services/authority.services';

export const createAuthority = async (req: Request, res: Response) => {
  const {
    name,
    email,
    joinedAt,
    leftAt,
    positionsId,
    hallsId,
    departmentsId,
    designationsId,
  } = req.body;

  try {
    await create({
      name,
      email,
      joinedAt,
      leftAt,
      positionsId,
      hallsId,
      departmentsId,
      designationsId,
    });

    res.status(201).json({
      message: 'Authority created successfully.',
    });
  } catch (error: any) {
    res.status(400).json({
      message:
        error.code === 'P2002'
          ? 'Authority already exists.'
          : 'Something went wrong.',
    });
  }
};

export const getAuthorities = async (req: Request, res: Response) => {
  try {
    const authorities = await get();
    return res.status(200).json(authorities);
  } catch (error: any) {
    return res.status(400).json({ message: 'Something went wrong!' });
  }
};

export const getAuthority = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const authority = await getById(id);
    return res.status(200).json(authority);
  } catch (error: any) {
    return res.status(400).json({ message: 'Something went wrong!' });
  }
};

export const updateAuthority = async (req: Request, res: Response) => {
  const {
    id,
    name,
    email,
    joinedAt,
    leftAt,
    positionsId,
    hallsId,
    departmentsId,
    designationsId,
  } = req.body;

  try {
    const oldData: any = await getById(id);

    await update({
      id,
      name,
      email,
      joinedAt: joinedAt || oldData?.authorityDetails?.joinedAt,
      leftAt: leftAt || oldData?.authorityDetails?.leftAt,
      positionsId,
      hallsId,
      departmentsId,
      designationsId,
    });

    res.status(200).json({ message: 'Authority updated successfully.' });
  } catch (error: any) {
    res.status(400).json({ message: 'Something went wrong!' });
  }
};

export const removeAuthority = async (req: Request, res: Response) => {
  const { id } = req.body;

  try {
    await remove(id);
    res.status(200).json({ message: 'Authority removed successfully.' });
  } catch (error: any) {
    res.status(400).json({ message: 'Something went wrong!' });
  }
};
