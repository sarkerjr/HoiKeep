import express from 'express';

import { RoleType } from '@/utils/enums';
import { checkRoles } from '@/middleware/role.middleware';

import {
  createStudent,
  getStudents,
  getStudentsAccommodationStatus,
  getStudent,
  updateStudent,
  removeStudent,
} from '@/controllers/admin/student.controllers';

import {
  validateCreateStudent,
  validateGetStudent,
  validateUpdateStudent,
  validateRemoveStudent,
} from '@/validators/student.validators';

const router = express.Router();

router.get(
  '/accommodation',
  checkRoles([RoleType.AUTHORITY, RoleType.OPERATOR, RoleType.STAFF]),
  getStudentsAccommodationStatus
);
router.get(
  '/',
  checkRoles([RoleType.AUTHORITY, RoleType.OPERATOR, RoleType.STAFF]),
  getStudents
);
router.get(
  '/:id',
  checkRoles([RoleType.AUTHORITY, RoleType.OPERATOR]),
  validateGetStudent,
  getStudent
);
router.post(
  '/',
  checkRoles([RoleType.AUTHORITY, RoleType.OPERATOR]),
  validateCreateStudent,
  createStudent
);
router.put(
  '/',
  checkRoles([RoleType.AUTHORITY, RoleType.OPERATOR]),
  validateUpdateStudent,
  updateStudent
);
router.delete(
  '/',
  checkRoles([RoleType.AUTHORITY, RoleType.OPERATOR]),
  validateRemoveStudent,
  removeStudent
);

export default router;
