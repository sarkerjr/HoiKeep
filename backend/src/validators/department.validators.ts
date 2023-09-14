import { body, param } from 'express-validator';
import { handleValidationErrors } from '@/utils/helper';

export const validateCreateDepartment = [
  body('name')
    .notEmpty()
    .withMessage('Name is required')
    .trim()
    .isString()
    .withMessage('Name must be a string')
    .isAlpha()
    .withMessage('Name must be in alphabet'),
  body('nameTag')
    .notEmpty()
    .withMessage('Name tag is required')
    .trim()
    .isString()
    .withMessage('Name tag must be a string')
    .isUppercase()
    .withMessage('Name tag must be in uppercase'),
  handleValidationErrors,
];

export const validateGetDepartment = [
  param('id')
    .trim()
    .notEmpty()
    .withMessage('ID is required')
    .isUUID()
    .withMessage('ID must be a valid UUID'),
  handleValidationErrors,
];

export const validateUpdateDepartment = [
  body('id').trim().isUUID().withMessage('ID must be a valid UUID'),
  body('name')
    .notEmpty()
    .withMessage('Name is required')
    .trim()
    .isString()
    .withMessage('Name must be a string')
    .isAlpha()
    .withMessage('Name must be in alphabet'),
  body('nameTag')
    .trim()
    .isString()
    .withMessage('Name tag must be a string')
    .isUppercase()
    .withMessage('Name tag must be in uppercase'),
  handleValidationErrors,
];
