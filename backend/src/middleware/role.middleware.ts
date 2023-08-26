import { Request, Response, NextFunction } from 'express';

export const isAuthority = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userRole = req.body.tokenInfo.role.type;

  if (userRole !== 'AUTHORITY') {
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
  const userRole = req.body.tokenInfo.role.type;

  if (userRole !== 'STAFF') {
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
  const userRole = req.body.tokenInfo.role.type;

  if (userRole !== 'OPERATOR') {
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
  const userRole = req.body.tokenInfo.role.type;

  if (userRole !== 'STUDENT') {
    return res
      .status(401)
      .json({ message: 'You are unauthorized to access this content!' });
  }

  next();
};

export const checkRoles = (roles: Array<string>) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const userRole = req.body.tokenInfo.role.type;

    // check if the user's role is included in the roles array
    if (roles.includes(userRole)) {
      next();
    } else {
      return res
        .status(401)
        .json({ message: 'You are unauthorized to access this content!' });
    }
  };
};
