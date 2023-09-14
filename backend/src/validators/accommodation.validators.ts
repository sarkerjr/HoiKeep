import { body, param } from 'express-validator';
import { handleValidationErrors } from '@/utils/helper';

export const validateCreateAccommodation = [
  body('status')
    .notEmpty()
    .withMessage('Status is required')
    .trim()
    .isString()
    .withMessage('Status must be a string')
    .isIn(['ALLOCATED', 'UNALLOCATED', 'ILLEGAL'])
    .withMessage('Status must be one of ALLOCATED, UNALLOCATED, ILLEGAL'),
  body('joiningDate')
    .trim()
    .notEmpty()
    .withMessage('Joining date is required')
    .isISO8601()
    .withMessage('Joining date must be a valid date in ISO8601 format'),
  body('leavingDate')
    .trim()
    .notEmpty()
    .withMessage('Leaving date is required')
    .isISO8601()
    .withMessage('Leaving date must be a valid date in ISO8601 format'),
  body('studentsId')
    .trim()
    .notEmpty()
    .withMessage('Students ID is required')
    .isUUID()
    .withMessage('Students ID must be a valid UUID'),
  body('seatsId')
    .trim()
    .notEmpty()
    .withMessage('Seats ID is required')
    .isUUID()
    .withMessage('Seats ID must be a valid UUID'),
  body('isActive').trim().isBoolean().withMessage('isActive must be a boolean'),
  handleValidationErrors,
];

export const validateGetAccommodation = [
  param('id')
    .trim()
    .notEmpty()
    .withMessage('ID is required')
    .isUUID()
    .withMessage('ID must be a valid UUID'),
  handleValidationErrors,
];

export const validateUpdateAccommodation = [
  body('id')
    .trim()
    .notEmpty()
    .withMessage('ID is required')
    .isUUID()
    .withMessage('ID must be a valid UUID'),
  body('status')
    .trim()
    .notEmpty()
    .withMessage('Status is required')
    .isString()
    .withMessage('Status must be a string')
    .isIn(['ALLOCATED', 'UNALLOCATED', 'ILLEGAL'])
    .withMessage('Status must be one of ALLOCATED, UNALLOCATED, ILLEGAL'),
  body('joiningDate')
    .trim()
    .notEmpty()
    .withMessage('Joining date is required')
    .isISO8601()
    .withMessage('Joining date must be a valid date in ISO8601 format'),
  body('leavingDate')
    .trim()
    .notEmpty()
    .withMessage('Leaving date is required')
    .isISO8601()
    .withMessage('Leaving date must be a valid date in ISO8601 format'),
  body('studentsId')
    .trim()
    .notEmpty()
    .withMessage('Students ID is required')
    .isUUID()
    .withMessage('Students ID must be a valid UUID'),
  body('seatsId')
    .trim()
    .notEmpty()
    .withMessage('Seats ID is required')
    .isUUID()
    .withMessage('Seats ID must be a valid UUID'),
  body('isActive').trim().isBoolean().withMessage('isActive must be a boolean'),
  handleValidationErrors,
];

export const validateRemoveAccommodation = [
  body('id')
    .trim()
    .notEmpty()
    .withMessage('ID is required')
    .isUUID()
    .withMessage('ID must be a valid UUID'),
  handleValidationErrors,
];
