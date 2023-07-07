import { Request, Response } from 'express';
import { create, get, update, remove } from '@/services/notice.services';

export const createNotice = async (req: Request, res: Response) => {
  const { title, description, hallId } = req.body;

  const notice = await create(title, description, hallId);

  if (notice instanceof Error) {
    return res.status(400).json({
      message:
        notice.code === 'P2002'
          ? 'Notice already exists.'
          : 'Something went wrong.',
    });
  }

  return res.status(201).json({
    message: 'Notice created successfully.',
  });
};

export const getNotices = async (req: Request, res: Response) => {
  const notices = await get();

  if (notices instanceof Error) {
    return res.status(400).json({ message: 'Something went wrong!' });
  }

  return res.status(200).json(notices);
};

export const updateNotice = async (req: Request, res: Response) => {
  const { id, title, description, isActive } = req.body;

  const notice = await update(id, title, description, isActive);

  if (notice instanceof Error) {
    return res.status(400).json({ message: 'Something went wrong!' });
  }

  return res.status(200).json({ message: 'notice updated successfully.' });
};

export const removeNotice = async (req: Request, res: Response) => {
  const { id } = req.body;

  const notice = await remove(id);

  if (notice instanceof Error) {
    return res.status(400).json({ message: 'Something went wrong!' });
  }

  return res.status(200).json({ message: 'notice deleted successfully.' });
};
