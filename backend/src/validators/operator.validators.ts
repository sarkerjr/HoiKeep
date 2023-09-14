import { body, param } from 'express-validator';
import { handleValidationErrors } from '@/utils/helper';

export const validateCreateOperator = [
  body('name')
    .notEmpty()
    .withMessage('Name is required')
    .trim()
    .isString()
    .withMessage('Name must be a string')
    .matches(/^[A-Za-z.]+$/)
    .withMessage('Name can only contain alphabets and dots!'),
  body('email')
    .notEmpty()
    .withMessage('Email is required')
    .trim()
    .isEmail()
    .withMessage('Email must be a valid email address'),
  body('joinedAt')
    .optional()
    .trim()
    .isISO8601()
    .withMessage('JoinedAt must be a valid date in ISO8601 format'),
  body('leftAt')
    .optional()
    .trim()
    .isISO8601()
    .withMessage('LeftAt must be a valid date in ISO8601 format'),
  body('positionsId')
    .notEmpty()
    .withMessage('Positions ID is required')
    .trim()
    .isUUID()
    .withMessage('Positions ID must be a valid UUID'),
  body('hallsId')
    .optional()
    .trim()
    .isUUID()
    .withMessage('Halls ID must be a valid UUID'),
  handleValidationErrors,
];

export const validateGetOperator = [
  param('id')
    .trim()
    .notEmpty()
    .withMessage('ID is required')
    .isUUID()
    .withMessage('ID must be a valid UUID'),
  handleValidationErrors,
];

export const validateUpdateOperator = [
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
  body('email')
    .optional()
    .trim()
    .isEmail()
    .withMessage('Email must be a valid email address'),
  body('joinedAt')
    .optional()
    .trim()
    .isISO8601()
    .withMessage('JoinedAt must be a valid date in ISO8601 format'),
  body('leftAt')
    .optional()
    .trim()
    .isISO8601()
    .withMessage('LeftAt must be a valid date in ISO8601 format'),
  body('positionsId')
    .optional()
    .trim()
    .isUUID()
    .withMessage('Positions ID must be a valid UUID'),
  body('hallsId')
    .optional()
    .trim()
    .isUUID()
    .withMessage('Halls ID must be a valid UUID'),
  handleValidationErrors,
];

export const validateRemoveOperator = [
  body('id')
    .trim()
    .notEmpty()
    .withMessage('ID is required')
    .isUUID()
    .withMessage('ID must be a valid UUID'),
  handleValidationErrors,
];
