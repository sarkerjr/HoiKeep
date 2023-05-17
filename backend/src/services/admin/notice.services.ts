import { Request, Response } from 'express';
import {
  create,
  get,
  update,
  remove,
} from '@/controllers/admin/notice.controller';

export const createNotice = async (req: Request, res: Response) => {
  const { title, description } = req.body;

  const notice = await create(title, description);

  if (notice instanceof Error) {
    return res.status(400).json({ message: notice.message });
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
