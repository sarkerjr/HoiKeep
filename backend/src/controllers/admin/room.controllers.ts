import { Request, Response } from 'express';
import { create, get, getById, update, remove } from '@/services/room.services';

export const createRoom = async (req: Request, res: Response) => {
  const { no, hallsId } = req.body;
  let { seatQuantity } = req.body;

  if (typeof seatQuantity !== 'number') seatQuantity = parseInt(seatQuantity);

  try {
    await create(no, seatQuantity, hallsId);

    res.status(201).json({
      message: 'Room created successfully.',
    });
  } catch (error: any) {
    res.status(400).json({
      message:
        error.code === 'P2002'
          ? 'Room already exists.'
          : 'Something went wrong.',
    });
  }
};

export const getRooms = async (req: Request, res: Response) => {
  try {
    const rooms = await get();

    res.status(200).json(rooms);
  } catch (error: any) {
    res.status(400).json({ message: 'Something went wrong!' });
  }
};

export const getRoom = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const room = await getById(id);

    res.status(200).json(room);
  } catch (error: any) {
    res.status(400).json({ message: 'Something went wrong!' });
  }
};

export const updateRoom = async (req: Request, res: Response) => {
  const { id, no, hallsId } = req.body;
  let { seatQuantity } = req.body;

  if (typeof seatQuantity !== 'number') seatQuantity = parseInt(seatQuantity);

  try {
    await update(id, no, seatQuantity, hallsId);

    res.status(200).json({ message: 'Room updated successfully.' });
  } catch (error: any) {
    res.status(400).json({ message: 'Something went wrong!' });
  }
};

export const removeRoom = async (req: Request, res: Response) => {
  const { id } = req.body;

  try {
    await remove(id);

    res.status(200).json({ message: 'Room deleted successfully.' });
  } catch (error: any) {
    res.status(400).json({ message: 'Something went wrong!' });
  }
};
