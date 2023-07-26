import { Request, Response } from 'express';
import { sign } from 'jsonwebtoken';
import { Prisma } from '@prisma/client';

import {
  login,
  registerAuthority,
  registerStaff,
  registerOperator,
  registerStudent,
} from '@/services/auth.services';
import { getById as getAuthorityById } from '@/services/authority.services';
import { getById as getStaffById } from '@/services/staff.services';
import { getById as getOperatorById } from '@/services/opearator.services';
import { getById as getStudentById } from '@/services/student.services';

export const createAuth = async (req: Request, res: Response) => {
  const { email, password, type, roleId } = req.body;

  let user = null;
  if (type === 'AUTHORITY')
    user = await registerAuthority(email, password, type, roleId);
  else if (type === 'STAFF')
    user = await registerStaff(email, password, type, roleId);
  else if (type === 'OPERATOR')
    user = await registerOperator(email, password, type, roleId);
  else if (type === 'STUDENT')
    user = await registerStudent(email, password, type, roleId);

  // Handling errors
  if (user instanceof Prisma.PrismaClientKnownRequestError) {
    if (user.code === 'P2002') {
      return res
        .status(400)
        .json({ message: 'User already exist with these details.' });
    } else if (user.code === 'P2003') {
      return res.status(400).json({ message: 'User role does not exist.' });
    }
    return res.status(400).json({ message: 'Something went wrong!' });
  }

  return res.status(201).json({ message: 'User created successfully.' });
};

export const checkAuth = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user: any = await login(email, password);

  if (user instanceof Error) {
    return res.status(400).json({ message: user.message });
  }

  let profile: any = null;
  if (user?.type === 'AUTHORITY') {
    profile = await getAuthorityById(user?.authoritiesId);
  } else if (user?.type === 'STAFF') {
    profile = await getStaffById(user?.staffsId);
  } else if (user?.type === 'OPERATOR') {
    profile = await getOperatorById(user?.operatorsId);
  } else if (user?.type === 'STUDENT') {
    profile = await getStudentById(user?.studentsId);
  }

  const token = sign(
    {
      userId: user?.id,
      profileId: profile?.id,
      hallsId: profile?.hallsId,
    },
    process.env.JWT_SECRET_KEY!,
    { expiresIn: '12h' }
  );

  return res.status(200).json({ accessToken: token });
};
