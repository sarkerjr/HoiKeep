import { Request, Response } from 'express';

import {
  createWithSeat,
  get,
  getById,
  updateWithSeat,
  remove,
} from '@/services/accommodation.services';
import { stringToBoolean } from '@/utils/helper';

export const createAccommodation = async (req: Request, res: Response) => {
  const { status, joiningDate, leavingDate, studentsId, seatsId } = req.body;
  let { isActive } = req.body;

  isActive = stringToBoolean(isActive);

  try {
    await createWithSeat({
      isActive: isActive,
      status,
      joiningDate,
      leavingDate,
      studentsId,
      seatsId,
    });

    res.status(201).json({
      message: 'Accommodation created successfully.',
    });
  } catch (error: any) {
    res.status(400).json({
      message:
        error.code === 'P2002' || error.code === 'P2014'
          ? 'Student already assigns to an accommodation!'
          : 'Something went wrong.',
    });
  }
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
  const { id, status, joiningDate, leavingDate, studentsId, seatsId } =
    req.body;
  let { isActive } = req.body;

  if (typeof isActive === 'string') {
    isActive = isActive === 'true';
  }

  try {
    await updateWithSeat({
      id,
      isActive,
      status,
      joiningDate,
      leavingDate,
      studentsId,
      seatsId,
    });

    res.status(200).json({ message: 'Accommodation updated successfully.' });
  } catch (error: any) {
    return res.status(400).json({
      message:
        error.code === 'P2002'
          ? 'Accommodation already exists.'
          : 'Something went wrong.',
    });
  }
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
