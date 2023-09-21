import express from 'express';

import { RoleType } from '@/utils/enums';
import { checkRoles } from '@/middleware/role.middleware';

import {
  createFees,
  getFees,
  getFeesDue,
  updateFees,
  removeFees,
} from '@/controllers/admin/fee.controllers';

import {
  validateCreateFee,
  validateUpdateFee,
  validateRemoveFee,
} from '@/validators/fee.validators';

const router = express.Router();

router.post(
  '/',
  checkRoles([
    RoleType.AUTHORITY,
    RoleType.OPERATOR,
    RoleType.STAFF,
    RoleType.VISITOR,
  ]),
  validateCreateFee,
  createFees
);
router.get(
  '/',
  checkRoles([
    RoleType.AUTHORITY,
    RoleType.OPERATOR,
    RoleType.STAFF,
    RoleType.VISITOR,
  ]),
  getFees
);
router.get(
  '/due',
  checkRoles([RoleType.AUTHORITY, RoleType.OPERATOR, RoleType.STAFF]),
  getFeesDue
);
router.put(
  '/',
  checkRoles([RoleType.AUTHORITY, RoleType.OPERATOR, RoleType.STAFF]),
  validateUpdateFee,
  updateFees
);
router.delete(
  '/',
  checkRoles([RoleType.AUTHORITY, RoleType.OPERATOR, RoleType.STAFF]),
  validateRemoveFee,
  removeFees
);

export default router;
