import { body, param } from 'express-validator';
import { handleValidationErrors } from '@/utils/helper';

export const validateCreateRoom = [
  body('no')
    .notEmpty()
    .withMessage('Room number is required')
    .trim()
    .isString()
    .withMessage('Room number must be a string'),
  body('seatQuantity')
    .notEmpty()
    .withMessage('Seat quantity is required')
    .trim()
    .isInt()
    .withMessage('Seat quantity must be an integer'),
  body('hallsId')
    .optional()
    .trim()
    .isUUID()
    .withMessage('Halls ID must be a valid UUID'),
  handleValidationErrors,
];

export const validateGetRoom = [
  param('id')
    .trim()
    .notEmpty()
    .withMessage('ID is required')
    .isUUID()
    .withMessage('ID must be a valid UUID'),
  handleValidationErrors,
];

export const validateUpdateRoom = [
  body('id')
    .notEmpty()
    .withMessage('ID is required')
    .trim()
    .isUUID()
    .withMessage('ID must be a valid UUID'),
  body('no')
    .optional()
    .trim()
    .isString()
    .withMessage('Room number must be a string'),
  body('seatQuantity')
    .optional()
    .trim()
    .isInt()
    .withMessage('Seat quantity must be an integer'),
  body('hallsId')
    .optional()
    .trim()
    .isUUID()
    .withMessage('Halls ID must be a valid UUID'),
  handleValidationErrors,
];

export const validateRemoveRoom = [
  body('id')
    .trim()
    .notEmpty()
    .withMessage('ID is required')
    .isUUID()
    .withMessage('ID must be a valid UUID'),
  handleValidationErrors,
];
