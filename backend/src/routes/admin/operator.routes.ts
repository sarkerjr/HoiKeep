import express from 'express';

import { RoleType } from '@/utils/enums';
import { checkRoles } from '@/middleware/role.middleware';

import {
  createOperator,
  getOperators,
  getOperator,
  updateOperator,
  removeOperator,
} from '@/controllers/admin/operator.controllers';

const router = express.Router();

router.get(
  '/',
  checkRoles([RoleType.AUTHORITY, RoleType.OPERATOR, RoleType.STAFF]),
  getOperators
);
router.get(
  '/:id',
  checkRoles([RoleType.AUTHORITY, RoleType.OPERATOR, RoleType.STAFF]),
  getOperator
);
router.post(
  '/',
  checkRoles([RoleType.AUTHORITY, RoleType.OPERATOR]),
  createOperator
);
router.put(
  '/',
  checkRoles([RoleType.AUTHORITY, RoleType.OPERATOR]),
  updateOperator
);
router.delete(
  '/',
  checkRoles([RoleType.AUTHORITY, RoleType.OPERATOR]),
  removeOperator
);

export default router;
