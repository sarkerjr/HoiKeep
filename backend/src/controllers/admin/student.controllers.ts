import { Request, Response } from 'express';
import {
  create,
  get,
  getById,
  update,
  remove,
} from '@/services/student.services';

export const createStudent = async (req: Request, res: Response) => {
  const {
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

  if (typeof semester !== 'number') semester = parseInt(semester);
  if (typeof year !== 'number') year = parseInt(year);

  const student = await create({
    name,
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

  if (student instanceof Error) {
    return res.status(400).json({
      message:
        student.code === 'P2002'
          ? 'Student already exists.'
          : 'Something went wrong.',
    });
  }

  return res.status(201).json({
    message: 'Student created successfully.',
  });
};

export const getStudents = async (req: Request, res: Response) => {
  const students = await get();

  if (students instanceof Error) {
    return res.status(400).json({ message: 'Something went wrong!' });
  }

  return res.status(200).json(students);
};

export const getStudent = async (req: Request, res: Response) => {
  const { id } = req.params;

  const student = await getById(id);

  if (student instanceof Error) {
    return res.status(400).json({ message: 'Something went wrong!' });
  }

  return res.status(200).json(student);
};

export const updateStudent = async (req: Request, res: Response) => {
  const {
    id,
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

  if (typeof semester !== 'number') semester = parseInt(semester);
  if (typeof year !== 'number') year = parseInt(year);

  const student = await update({
    id,
    name,
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

  if (student instanceof Error) {
    return res.status(400).json({ message: 'Something went wrong!' });
  }

  return res.status(200).json({ message: 'Student updated successfully.' });
};

export const removeStudent = async (req: Request, res: Response) => {
  const { id } = req.body;

  const student = await remove(id);

  if (student instanceof Error) {
    return res.status(400).json({ message: 'Something went wrong!' });
  }

  return res.status(200).json({ message: 'Student deleted successfully.' });
};
