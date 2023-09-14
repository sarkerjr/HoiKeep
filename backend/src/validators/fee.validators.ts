import { body, param } from 'express-validator';
import { handleValidationErrors } from '@/utils/helper';

export const validateCreateFee = [
  body('accommodationsId')
    .notEmpty()
    .withMessage('Accommodations ID is required')
    .trim()
    .isUUID()
    .withMessage('Accommodations ID must be a valid UUID'),
  body('months')
    .notEmpty()
    .withMessage('Months is required')
    .isArray()
    .withMessage('Months must be an array'),
  body('amount')
    .notEmpty()
    .withMessage('Amount is required')
    .isNumeric()
    .withMessage('Amount must be a number')
    .toFloat(),
  handleValidationErrors,
];

export const validateGetFee = [
  param('id')
    .trim()
    .notEmpty()
    .withMessage('ID is required')
    .isUUID()
    .withMessage('ID must be a valid UUID'),
  handleValidationErrors,
];

export const validateUpdateFee = [
  body('id')
    .notEmpty()
    .withMessage('ID is required')
    .trim()
    .isUUID()
    .withMessage('ID must be a valid UUID'),
  body('amount')
    .optional()
    .isNumeric()
    .withMessage('Amount must be a number')
    .toFloat(),
  handleValidationErrors,
];

export const validateRemoveFee = [
  body('id')
    .trim()
    .notEmpty()
    .withMessage('ID is required')
    .isUUID()
    .withMessage('ID must be a valid UUID'),
  handleValidationErrors,
];
