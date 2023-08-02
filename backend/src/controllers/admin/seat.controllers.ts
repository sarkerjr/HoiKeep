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

  const seat = await create(data);

  if (seat instanceof Error) {
    return res.status(400).json({
      message:
        seat.code === 'P2002'
          ? 'Seat already exists.'
          : 'Something went wrong.',
    });
  }

  return res.status(201).json({
    message: 'Seat created successfully.',
  });
};

export const getSeats = async (req: Request, res: Response) => {
  const seats = await get();

  if (seats instanceof Error) {
    return res.status(400).json({ message: 'Something went wrong!' });
  }

  return res.status(200).json(seats);
};

export const getSeat = async (req: Request, res: Response) => {
  const { id } = req.params;

  const seat = await getById(id);

  if (seat instanceof Error) {
    return res.status(400).json({ message: 'Something went wrong!' });
  }

  return res.status(200).json(seat);
};

export const updateSeat = async (req: Request, res: Response) => {
  const { id, no, isAvailable, roomsId } = req.body;

  const seat = await update({ id, no, isAvailable, roomsId });

  if (seat instanceof Error) {
    return res.status(400).json({ message: 'Something went wrong!' });
  }

  return res.status(200).json({ message: 'Seat updated successfully.' });
};

export const removeSeat = async (req: Request, res: Response) => {
  const { id } = req.body;

  const seat = await remove(id);

  if (seat instanceof Error) {
    return res.status(400).json({ message: 'Something went wrong!' });
  }

  return res.status(200).json({ message: 'Seat deleted successfully.' });
};
