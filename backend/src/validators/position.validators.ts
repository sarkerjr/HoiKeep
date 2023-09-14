import { body, param } from 'express-validator';
import { handleValidationErrors } from '@/utils/helper';

export const validateCreatePosition = [
  body('name')
    .notEmpty()
    .withMessage('Name is required')
    .trim()
    .isString()
    .withMessage('Name must be a string'),
  body('category')
    .notEmpty()
    .withMessage('Category is required')
    .trim()
    .isString()
    .withMessage('Category must be a string')
    .isIn(['AUTHORITY', 'STAFF', 'OPERATOR'])
    .withMessage('Category must be one of AUTHORITY, STAFF, OPERATOR'),
  handleValidationErrors,
];

export const validateGetPosition = [
  param('id')
    .trim()
    .notEmpty()
    .withMessage('ID is required')
    .isUUID()
    .withMessage('ID must be a valid UUID'),
  handleValidationErrors,
];

export const validateUpdatePosition = [
  body('id')
    .notEmpty()
    .withMessage('ID is required')
    .trim()
    .isUUID()
    .withMessage('ID must be a valid UUID'),
  body('name')
    .optional()
    .trim()
    .isString()
    .withMessage('Name must be a string'),
  body('category')
    .optional()
    .trim()
    .isString()
    .withMessage('Category must be a string')
    .isIn(['AUTHORITY', 'STAFF', 'OPERATOR'])
    .withMessage('Category must be one of AUTHORITY, STAFF, OPERATOR'),
  handleValidationErrors,
];

export const validateRemovePosition = [
  body('id')
    .trim()
    .notEmpty()
    .withMessage('ID is required')
    .isUUID()
    .withMessage('ID must be a valid UUID'),
  handleValidationErrors,
];
