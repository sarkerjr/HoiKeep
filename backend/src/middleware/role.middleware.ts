import { Request, Response, NextFunction } from 'express';

export const isAuthority = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const roleType = req.body.tokenInfo.role.type;

  if (roleType !== 'AUTHORITY') {
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
  const roleType = req.body.tokenInfo.role.type;

  if (roleType !== 'STAFF') {
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
  const roleType = req.body.tokenInfo.role.type;

  if (roleType !== 'OPERATOR') {
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
  const roleType = req.body.tokenInfo.role.type;

  if (roleType !== 'STUDENT') {
    return res
      .status(401)
      .json({ message: 'You are unauthorized to access this content!' });
  }

  next();
};
