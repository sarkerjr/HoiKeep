import { body, param } from 'express-validator';
import { handleValidationErrors } from '@/utils/helper';

export const validateCreateNotice = [
  body('title')
    .notEmpty()
    .withMessage('Title is required')
    .trim()
    .isString()
    .withMessage('Title must be a string'),
  body('description')
    .notEmpty()
    .withMessage('Description is required')
    .trim()
    .isString()
    .withMessage('Description must be a string'),
  body('hallId')
    .notEmpty()
    .withMessage('Hall ID is required')
    .trim()
    .isUUID()
    .withMessage('Hall ID must be a valid UUID'),
  handleValidationErrors,
];

export const validateGetNotice = [
  param('id')
    .trim()
    .notEmpty()
    .withMessage('ID is required')
    .isUUID()
    .withMessage('ID must be a valid UUID'),
  handleValidationErrors,
];

export const validateUpdateNotice = [
  body('id')
    .notEmpty()
    .withMessage('ID is required')
    .trim()
    .isUUID()
    .withMessage('ID must be a valid UUID'),
  body('title')
    .optional()
    .trim()
    .isString()
    .withMessage('Title must be a string'),
  body('description')
    .optional()
    .trim()
    .isString()
    .withMessage('Description must be a string'),
  body('isActive')
    .optional()
    .isBoolean()
    .withMessage('isActive must be a boolean'),
  handleValidationErrors,
];

export const validateRemoveNotice = [
  body('id')
    .trim()
    .notEmpty()
    .withMessage('ID is required')
    .isUUID()
    .withMessage('ID must be a valid UUID'),
  handleValidationErrors,
];
