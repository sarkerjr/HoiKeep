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

  const accommodation: any = await createWithSeat({
    isActive: stringToBoolean(isActive),
    status,
    joiningDate,
    leavingDate,
    studentsId,
    seatsId,
  });

  if (accommodation instanceof Error) {
    // TODO: Handle prisma error code
    if (accommodation.code === 'P2002') {
      return res.status(400).json({
        message: 'Seat already occupied.',
      });
    }
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
  const { id, status, joiningDate, leavingDate, studentsId, seatsId } =
    req.body;
  let { isActive } = req.body;

  if (typeof isActive === 'string')
    isActive = isActive === 'true' ? true : false;

  const oldData: any = await getById(id);

  const accommodation = await updateWithSeat({
    id,
    isActive,
    status,
    joiningDate: joiningDate || oldData?.joiningDate,
    leavingDate: leavingDate || oldData?.leavingDate,
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
