import { Request, Response } from 'express';
import {
  createWithSeat,
  get,
  getById,
  updateWithSeat,
  remove,
} from '@/services/accommodation.services';

export const createAccommodation = async (req: Request, res: Response) => {
  const { isActive, status, studentsId, seatsId } = req.body;

  const accommodation = await createWithSeat({
    isActive,
    status,
    studentsId,
    seatsId,
  });

  if (accommodation instanceof Error) {
    // TODO: Handle prisma error code
    return res.status(400).json({
      message: 'Something went wrong.',
    });
  }

  return res.status(201).json({
    message: 'Accommodation created successfully.',
  });
};

export const getAccommodations = async (req: Request, res: Response) => {
  const accommodations = await get();

  if (accommodations instanceof Error) {
    return res.status(400).json({ message: 'Something went wrong!' });
  }

  return res.status(200).json(accommodations);
};

export const getAccommodation = async (req: Request, res: Response) => {
  const { id } = req.params;

  const accommodation = await getById(id);

  if (accommodation instanceof Error) {
    return res.status(400).json({ message: 'Something went wrong!' });
  }

  return res.status(200).json(accommodation);
};

export const updateAccommodation = async (req: Request, res: Response) => {
  const { id, isActive, status, studentsId, seatsId } = req.body;

  const accommodation = await updateWithSeat({
    id,
    isActive,
    status,
    studentsId,
    seatsId,
  });

  if (accommodation instanceof Error) {
    return res.status(400).json({ message: 'Something went wrong!' });
  }

  return res
    .status(200)
    .json({ message: 'Accommodation updated successfully.' });
};

export const removeAccommodation = async (req: Request, res: Response) => {
  const { id } = req.body;

  const accommodation = await remove(id);

  if (accommodation instanceof Error) {
    return res.status(400).json({ message: 'Something went wrong!' });
  }

  return res
    .status(200)
    .json({ message: 'Accommodation deleted successfully.' });
};
