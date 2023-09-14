import { body, param } from 'express-validator';
import { handleValidationErrors } from '@/utils/helper';

export const validateCreateStudent = [
  body('name')
    .notEmpty()
    .withMessage('Name is required')
    .trim()
    .isString()
    .withMessage('Name must be a string')
    .matches(/^[A-Za-z.]+$/)
    .withMessage('Name can only contain alphabets and dots!'),
  body('isActive')
    .notEmpty()
    .withMessage('isActive is required')
    .isBoolean()
    .withMessage('isActive must be a boolean value'),
  body('email')
    .notEmpty()
    .withMessage('Email is required')
    .trim()
    .isEmail()
    .withMessage('Email must be a valid email address'),
  body('studentNo')
    .notEmpty()
    .withMessage('Student number is required')
    .trim()
    .isString()
    .withMessage('Student number must be a string'),
  body('session')
    .notEmpty()
    .withMessage('Session is required')
    .trim()
    .isString()
    .withMessage('Session must be a string'),
  body('semester')
    .notEmpty()
    .withMessage('Semester is required')
    .isInt()
    .withMessage('Semester must be an integer value'),
  body('year')
    .notEmpty()
    .withMessage('Year is required')
    .isInt()
    .withMessage('Year must be an integer value'),
  body('admissionDate')
    .optional()
    .trim()
    .isISO8601()
    .withMessage('Admission date must be a valid date in ISO8601 format'),
  body('imageUrl')
    .optional()
    .trim()
    .isURL()
    .withMessage('Image URL must be a valid URL'),
  body('hallsId')
    .optional()
    .trim()
    .isUUID()
    .withMessage('Halls ID must be a valid UUID'),
  body('departmentsId')
    .notEmpty()
    .withMessage('Departments ID is required')
    .trim()
    .isUUID()
    .withMessage('Departments ID must be a valid UUID'),
  body('degreesId')
    .notEmpty()
    .withMessage('Degrees ID is required')
    .trim()
    .isUUID()
    .withMessage('Degrees ID must be a valid UUID'),
  handleValidationErrors,
];

export const validateGetStudent = [
  param('id')
    .trim()
    .notEmpty()
    .withMessage('ID is required')
    .isUUID()
    .withMessage('ID must be a valid UUID'),
  handleValidationErrors,
];

export const validateUpdateStudent = [
  body('id')
    .notEmpty()
    .withMessage('ID is required')
    .trim()
    .isUUID()
    .withMessage('ID must be a valid UUID'),
  body('isActive')
    .optional()
    .isBoolean()
    .withMessage('isActive must be a boolean value'),
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
  body('studentNo')
    .optional()
    .trim()
    .isString()
    .withMessage('Student number must be a string'),
  body('session')
    .optional()
    .trim()
    .isString()
    .withMessage('Session must be a string'),
  body('semester')
    .optional()
    .isInt()
    .withMessage('Semester must be an integer value'),
  body('year').optional().isInt().withMessage('Year must be an integer value'),
  body('admissionDate')
    .optional()
    .trim()
    .isISO8601()
    .withMessage('Admission date must be a valid date in ISO8601 format'),
  body('imageUrl')
    .optional()
    .trim()
    .isURL()
    .withMessage('Image URL must be a valid URL'),
  body('hallsId')
    .optional()
    .trim()
    .isUUID()
    .withMessage('Halls ID must be a valid UUID'),
  body('departmentsId')
    .optional()
    .trim()
    .isUUID()
    .withMessage('Departments ID must be a valid UUID'),
  body('degreesId')
    .optional()
    .trim()
    .isUUID()
    .withMessage('Degrees ID must be a valid UUID'),
  handleValidationErrors,
];

export const validateRemoveStudent = [
  body('id')
    .trim()
    .notEmpty()
    .withMessage('ID is required')
    .isUUID()
    .withMessage('ID must be a valid UUID'),
  handleValidationErrors,
];
