import express from 'express';

import { RoleType } from '@/utils/enums';
import { checkRoles } from '@/middleware/role.middleware';

import {
  createStaff,
  getStaffs,
  getStaff,
  updateStaff,
  removeStaff,
} from '@/controllers/admin/staff.controllers';

const router = express.Router();

router.get('/', checkRoles([RoleType.AUTHORITY, RoleType.OPERATOR]), getStaffs);
router.get(
  '/:id',
  checkRoles([RoleType.AUTHORITY, RoleType.OPERATOR]),
  getStaff
);
router.post(
  '/',
  checkRoles([RoleType.AUTHORITY, RoleType.OPERATOR]),
  createStaff
);
router.put(
  '/',
  checkRoles([RoleType.AUTHORITY, RoleType.OPERATOR]),
  updateStaff
);
router.delete(
  '/',
  checkRoles([RoleType.AUTHORITY, RoleType.OPERATOR]),
  removeStaff
);

export default router;
