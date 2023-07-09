import { Request, Response } from 'express';
import { create, get, getById, update, remove } from '@/services/room.services';

export const createRoom = async (req: Request, res: Response) => {
  const { no, seatQuantity, hallsId } = req.body;

  const room = await create(no, seatQuantity, hallsId);

  if (room instanceof Error) {
    return res.status(400).json({
      message:
        room.code === 'P2002'
          ? 'Room already exists.'
          : 'Something went wrong.',
    });
  }

  return res.status(201).json({
    message: 'Room created successfully.',
  });
};

export const getRooms = async (req: Request, res: Response) => {
  const rooms = await get();

  if (rooms instanceof Error) {
    return res.status(400).json({ message: 'Something went wrong!' });
  }

  return res.status(200).json(rooms);
};

export const getRoom = async (req: Request, res: Response) => {
  const { id } = req.params;

  const room = await getById(id);

  if (room instanceof Error) {
    return res.status(400).json({ message: 'Something went wrong!' });
  }

  return res.status(200).json(room);
};

export const updateRoom = async (req: Request, res: Response) => {
  const { id, no, seatQuantity, hallsId } = req.body;

  const room = await update(id, no, seatQuantity, hallsId);

  if (room instanceof Error) {
    return res.status(400).json({ message: 'Something went wrong!' });
  }

  return res.status(200).json({ message: 'Room updated successfully.' });
};

export const removeRoom = async (req: Request, res: Response) => {
  const { id } = req.body;

  const room = await remove(id);

  if (room instanceof Error) {
    return res.status(400).json({ message: 'Something went wrong!' });
  }

  return res.status(200).json({ message: 'Room deleted successfully.' });
};
