import express from 'express';

import { RoleType } from '@/utils/enums';
import { checkRoles } from '@/middleware/role.middleware';

import {
  createDegree,
  getDegrees,
  getDegree,
  updateDegree,
  removeDegree,
} from '@/controllers/admin/degree.controllers';

import {
  validateCreateDegree,
  validateGetDegree,
  validateUpdateDegree,
  validateRemoveDegree,
} from '@/validators/degree.validators';

const router = express.Router();

router.get(
  '/',
  checkRoles([RoleType.AUTHORITY, RoleType.OPERATOR, RoleType.STAFF]),
  getDegrees
);
router.get(
  '/:id',
  checkRoles([RoleType.AUTHORITY, RoleType.OPERATOR, RoleType.STAFF]),
  validateGetDegree,
  getDegree
);
router.post(
  '/',
  checkRoles([RoleType.AUTHORITY, RoleType.OPERATOR]),
  validateCreateDegree,
  createDegree
);
router.put(
  '/',
  checkRoles([RoleType.AUTHORITY, RoleType.OPERATOR]),
  validateUpdateDegree,
  updateDegree
);
router.delete(
  '/',
  checkRoles([RoleType.AUTHORITY, RoleType.OPERATOR]),
  validateRemoveDegree,
  removeDegree
);

export default router;
