import { body, param } from 'express-validator';
import { handleValidationErrors } from '@/utils/helper';

export const validateCreateSeat = [
  body('no')
    .notEmpty()
    .withMessage('Seat number is required')
    .trim()
    .isString()
    .withMessage('Seat number must be a string'),
  body('isAvailable')
    .notEmpty()
    .withMessage('Availability is required')
    .isBoolean()
    .withMessage('Availability must be a boolean value'),
  body('roomsId')
    .notEmpty()
    .withMessage('Rooms ID is required')
    .trim()
    .isUUID()
    .withMessage('Rooms ID must be a valid UUID'),
  handleValidationErrors,
];

export const validateGetSeat = [
  param('id')
    .trim()
    .notEmpty()
    .withMessage('ID is required')
    .isUUID()
    .withMessage('ID must be a valid UUID'),
  handleValidationErrors,
];

export const validateUpdateSeat = [
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
    .withMessage('Seat number must be a string'),
  body('isAvailable')
    .optional()
    .isBoolean()
    .withMessage('Availability must be a boolean value'),
  body('roomsId')
    .optional()
    .trim()
    .isUUID()
    .withMessage('Rooms ID must be a valid UUID'),
  handleValidationErrors,
];

export const validateRemoveSeat = [
  body('id')
    .trim()
    .notEmpty()
    .withMessage('ID is required')
    .isUUID()
    .withMessage('ID must be a valid UUID'),
  handleValidationErrors,
];
