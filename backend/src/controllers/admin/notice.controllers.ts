import { Request, Response } from 'express';
import { create, get, update, remove } from '@/services/notice.services';

export const createNotice = async (req: Request, res: Response) => {
  const { title, description, hallId } = req.body;

  try {
    await create(title, description, hallId);

    res.status(201).json({
      message: 'Notice created successfully.',
    });
  } catch (error: any) {
    res.status(400).json({
      message:
        error.code === 'P2002'
          ? 'Notice already exists.'
          : 'Something went wrong.',
    });
  }
};

export const getNotices = async (req: Request, res: Response) => {
  try {
    const notices = await get();

    res.status(200).json(notices);
  } catch (error: any) {
    res.status(400).json({ message: 'Something went wrong!' });
  }
};

export const updateNotice = async (req: Request, res: Response) => {
  const { id, title, description, isActive } = req.body;

  try {
    await update(id, title, description, isActive);

    res.status(200).json({ message: 'Notice updated successfully.' });
  } catch (error: any) {
    res.status(400).json({ message: 'Something went wrong!' });
  }
};

export const removeNotice = async (req: Request, res: Response) => {
  const { id } = req.body;

  try {
    await remove(id);

    res.status(200).json({ message: 'Notice deleted successfully.' });
  } catch (error: any) {
    res.status(400).json({ message: 'Something went wrong!' });
  }
};
