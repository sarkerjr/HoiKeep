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

import {
  validateCreateStaff,
  validateGetStaff,
  validateUpdateStaff,
  validateRemoveStaff,
} from '@/validators/staff.validators';

const router = express.Router();

router.get(
  '/',
  checkRoles([
    RoleType.AUTHORITY,
    RoleType.OPERATOR,
    RoleType.STAFF,
    RoleType.VISITOR,
  ]),
  getStaffs
);
router.get(
  '/:id',
  checkRoles([
    RoleType.AUTHORITY,
    RoleType.OPERATOR,
    RoleType.STAFF,
    RoleType.VISITOR,
  ]),
  validateGetStaff,
  getStaff
);
router.post(
  '/',
  checkRoles([RoleType.AUTHORITY, RoleType.OPERATOR]),
  validateCreateStaff,
  createStaff
);
router.put(
  '/',
  checkRoles([RoleType.AUTHORITY, RoleType.OPERATOR]),
  validateUpdateStaff,
  updateStaff
);
router.delete(
  '/',
  checkRoles([RoleType.AUTHORITY, RoleType.OPERATOR]),
  validateRemoveStaff,
  removeStaff
);

export default router;
