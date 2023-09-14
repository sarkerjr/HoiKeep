import { body, param } from 'express-validator';

import { handleValidationErrors } from '@/utils/helper';

export const validateCreateHall = [
  body('name')
    .trim()
    .matches(/^[A-Za-z.]+$/)
    .withMessage('Name can only contain alphabets and dots!'),
  body('nameTag')
    .trim()
    .isUppercase()
    .withMessage('Name tag must be uppercase!'),
  body('type')
    .trim()
    .isIn(['MALE', 'FEMALE'])
    .withMessage('Invalid hall type!'),
  handleValidationErrors,
];

export const validateGetHall = [
  param('id').trim().isUUID().withMessage('Invalid hall ID!'),
  handleValidationErrors,
];

export const validateUpdateHall = [
  body('id').trim().isUUID().withMessage('Invalid hall ID!'),
  body('name')
    .trim()
    .matches(/^[A-Za-z.]+$/)
    .withMessage('Name can only contain alphabets and dots!'),
  body('nameTag')
    .trim()
    .isUppercase()
    .withMessage('Name tag must be uppercase!'),
  body('type')
    .trim()
    .isIn(['MALE', 'FEMALE'])
    .withMessage('Invalid hall type!'),
  handleValidationErrors,
];
