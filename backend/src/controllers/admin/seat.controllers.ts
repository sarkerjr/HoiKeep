import { Request, Response } from 'express';
import { Prisma } from '@prisma/client';
import { create, get, getById, update, remove } from '@/services/seat.services';

export const createSeat = async (req: Request, res: Response) => {
  const { no, isAvailable, roomsId } = req.body;

  const data: Prisma.SeatsCreateInput = {
    no,
    isAvailable,
    rooms: {
      connect: {
        id: roomsId,
      },
    },
  };

  try {
    await create(data);

    res.status(201).json({
      message: 'Seat created successfully.',
    });
  } catch (error: any) {
    res.status(400).json({
      message:
        error.code === 'P2002'
          ? 'Seat already exists.'
          : 'Something went wrong.',
    });
  }
};

export const getSeats = async (req: Request, res: Response) => {
  try {
    const seats = await get();

    res.status(200).json(seats);
  } catch (error: any) {
    res.status(400).json({ message: 'Something went wrong!' });
  }
};

export const getSeat = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const seat = await getById(id);

    res.status(200).json(seat);
  } catch (error: any) {
    res.status(400).json({ message: 'Something went wrong!' });
  }
};

export const updateSeat = async (req: Request, res: Response) => {
  const { id, no, isAvailable, roomsId } = req.body;

  try {
    await update({ id, no, isAvailable, roomsId });

    res.status(200).json({ message: 'Seat updated successfully.' });
  } catch (error: any) {
    res.status(400).json({ message: 'Something went wrong!' });
  }
};

export const removeSeat = async (req: Request, res: Response) => {
  const { id } = req.body;

  try {
    await remove(id);

    res.status(200).json({ message: 'Seat deleted successfully.' });
  } catch (error: any) {
    res.status(400).json({ message: 'Something went wrong!' });
  }
};
