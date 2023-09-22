import express from 'express';

import { RoleType } from '@/utils/enums';
import { checkRoles } from '@/middleware/role.middleware';

import {
  createDepartment,
  getDepartments,
  getDepartment,
  updateDepartment,
} from '@/controllers/admin/department.controllers';

import {
  validateCreateDepartment,
  validateGetDepartment,
  validateUpdateDepartment,
} from '@/validators/department.validators';

const router = express.Router();

router.get(
  '/',
  checkRoles([
    RoleType.AUTHORITY,
    RoleType.OPERATOR,
    RoleType.STAFF,
    RoleType.VISITOR,
  ]),
  getDepartments
);
router.get(
  '/:id',
  checkRoles([
    RoleType.AUTHORITY,
    RoleType.OPERATOR,
    RoleType.STAFF,
    RoleType.VISITOR,
  ]),
  validateGetDepartment,
  getDepartment
);
router.post(
  '/',
  checkRoles([RoleType.AUTHORITY, RoleType.OPERATOR]),
  validateCreateDepartment,
  createDepartment
);
router.put(
  '/',
  checkRoles([RoleType.AUTHORITY, RoleType.OPERATOR]),
  validateUpdateDepartment,
  updateDepartment
);

export default router;
