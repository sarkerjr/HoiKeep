import { body, param } from 'express-validator';
import { handleValidationErrors } from '@/utils/helper';

export const validateCreateDegree = [
  body('name')
    .notEmpty()
    .withMessage('Name is required')
    .trim()
    .isString()
    .withMessage('Name must be a string')
    .isAlpha()
    .withMessage('Name must only contain letters'),
  handleValidationErrors,
];

export const validateGetDegree = [
  param('id')
    .trim()
    .notEmpty()
    .withMessage('ID is required')
    .isUUID()
    .withMessage('ID must be a valid UUID'),
  handleValidationErrors,
];

export const validateUpdateDegree = [
  body('id')
    .notEmpty()
    .withMessage('ID is required')
    .trim()
    .isUUID()
    .withMessage('ID must be a valid UUID'),
  body('name')
    .trim()
    .isString()
    .withMessage('Name must be a string')
    .isAlpha()
    .withMessage('Name must only contain letters'),
  handleValidationErrors,
];

export const validateRemoveDegree = [
  body('id').trim().isUUID().withMessage('ID must be a valid UUID'),
  handleValidationErrors,
];
