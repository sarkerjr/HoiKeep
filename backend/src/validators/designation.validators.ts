import { body, param } from 'express-validator';
import { handleValidationErrors } from '@/utils/helper';

export const validateCreateDesignation = [
  body('name')
    .notEmpty()
    .withMessage('Name is required')
    .trim()
    .isString()
    .withMessage('Name must be a string')
    .matches(/^[A-Za-z.]+$/)
    .withMessage('Name can only contain alphabets and dots!'),
  handleValidationErrors,
];

export const validateGetDesignation = [
  param('id')
    .trim()
    .notEmpty()
    .withMessage('ID is required')
    .isUUID()
    .withMessage('ID must be a valid UUID'),
  handleValidationErrors,
];

export const validateUpdateDesignation = [
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
    .withMessage('Name must be a string')
    .matches(/^[A-Za-z.]+$/)
    .withMessage('Name can only contain alphabets and dots!'),
  handleValidationErrors,
];

export const validateRemoveDesignation = [
  body('id')
    .trim()
    .notEmpty()
    .withMessage('ID is required')
    .isUUID()
    .withMessage('ID must be a valid UUID'),
  handleValidationErrors,
];
