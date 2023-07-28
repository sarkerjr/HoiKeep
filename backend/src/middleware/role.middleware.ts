import { Request, Response, NextFunction } from 'express';

import { getById as getAuthorityById } from '@/services/authority.services';
import { getById as getStaffById } from '@/services/staff.services';
import { getById as getOperatorById } from '@/services/opearator.services';
import { getById as getStudentById } from '@/services/student.services';

export const isAuthority = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { rolesId } = req.body.tokenInfo;

  const authority = await getAuthorityById(rolesId);

  if (authority instanceof Error) {
    return res.status(400).json({ message: 'Something went wrong!' });
  }

  if (!authority) {
    return res
      .status(401)
      .json({ message: 'You are unauthorized to access this content!' });
  }

  next();
};

export const isStaff = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { rolesId } = req.body.tokenInfo;

  const staff = await getStaffById(rolesId);

  if (staff instanceof Error) {
    return res.status(400).json({ message: 'Something went wrong!' });
  }

  if (!staff) {
    return res
      .status(401)
      .json({ message: 'You are unauthorized to access this content!' });
  }

  next();
};

export const isOperator = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { rolesId } = req.body.tokenInfo;

  const operator = await getOperatorById(rolesId);

  if (operator instanceof Error) {
    return res.status(400).json({ message: 'Something went wrong!' });
  }

  if (!operator) {
    return res
      .status(401)
      .json({ message: 'You are unauthorized to access this content!' });
  }

  next();
};

export const isStudent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { rolesId } = req.body.tokenInfo;

  const student = await getStudentById(rolesId);

  if (student instanceof Error) {
    return res.status(400).json({ message: 'Something went wrong!' });
  }

  if (!student) {
    return res
      .status(401)
      .json({ message: 'You are unauthorized to access this content!' });
  }

  next();
};
