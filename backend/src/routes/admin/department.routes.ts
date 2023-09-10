import express from 'express';

import { RoleType } from '@/utils/enums';
import { checkRoles } from '@/middleware/role.middleware';

import {
  createDepartment,
  getDepartments,
  getDepartment,
  updateDepartment,
} from '@/controllers/admin/department.controllers';

const router = express.Router();

router.get(
  '/',
  checkRoles([RoleType.AUTHORITY, RoleType.OPERATOR]),
  getDepartments
);
router.get(
  '/:id',
  checkRoles([RoleType.AUTHORITY, RoleType.OPERATOR]),
  getDepartment
);
router.post(
  '/',
  checkRoles([RoleType.AUTHORITY, RoleType.OPERATOR]),
  createDepartment
);
router.put(
  '/',
  checkRoles([RoleType.AUTHORITY, RoleType.OPERATOR]),
  updateDepartment
);

export default router;
