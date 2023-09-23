import { Request, Response } from 'express';
import {
  create,
  get,
  getById,
  getWithAccommodationStatus,
  update,
  remove,
} from '@/services/student.services';
import { stringToBoolean } from '@/utils/helper';

export const createStudent = async (req: Request, res: Response) => {
  const {
    name,
    isActive,
    email,
    studentNo,
    session,
    admissionDate,
    imageUrl,
    hallsId,
    departmentsId,
    degreesId,
  } = req.body;
  let { semester, year } = req.body;

  if (typeof semester !== 'number') semester = parseInt(semester);
  if (typeof year !== 'number') year = parseInt(year);

  try {
    await create({
      name,
      //@ts-ignore
      isActive: stringToBoolean(isActive),
      email,
      studentNo,
      session,
      semester,
      year,
      admissionDate,
      imageUrl,
      hallsId,
      departmentsId,
      degreesId,
    });

    res.status(201).json({
      message: 'Student created successfully.',
    });
  } catch (error: any) {
    res.status(400).json({
      message:
        error.code === 'P2002'
          ? 'Student already exists.'
          : 'Something went wrong.',
    });
  }
};

export const getStudents = async (req: Request, res: Response) => {
  try {
    const students = await get();

    res.status(200).json(students);
  } catch (error: any) {
    res.status(400).json({ message: 'Something went wrong!' });
  }
};

export const getStudentsAccommodationStatus = async (
  req: Request,
  res: Response
) => {
  try {
    const students = await getWithAccommodationStatus();

    res.status(200).json(students);
  } catch (error: any) {
    res.status(400).json({ message: 'Something went wrong!' });
  }
};

export const getStudent = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const student = await getById(id);

    res.status(200).json(student);
  } catch (error: any) {
    res.status(400).json({ message: 'Something went wrong!' });
  }
};

export const updateStudent = async (req: Request, res: Response) => {
  const {
    id,
    isActive,
    name,
    email,
    studentNo,
    session,
    admissionDate,
    imageUrl,
    hallsId,
    departmentsId,
    degreesId,
  } = req.body;
  let { semester, year } = req.body;

  if (semester && typeof semester !== 'number') semester = parseInt(semester);
  if (year && typeof year !== 'number') year = parseInt(year);

  try {
    const oldData: any = await getById(id);

    await update({
      id,
      //@ts-ignore
      isActive: stringToBoolean(isActive),
      name,
      email,
      studentNo,
      session,
      semester,
      year,
      admissionDate: admissionDate || oldData?.studentProfiles?.admissionDate,
      imageUrl,
      hallsId,
      departmentsId,
      degreesId,
    });

    res.status(200).json({ message: 'Student updated successfully.' });
  } catch (error: any) {
    res.status(400).json({ message: 'Something went wrong!' });
  }
};

export const removeStudent = async (req: Request, res: Response) => {
  const { id } = req.body;

  try {
    await remove(id);

    res.status(200).json({ message: 'Student deleted successfully.' });
  } catch (error: any) {
    res.status(400).json({ message: 'Something went wrong!' });
  }
};
