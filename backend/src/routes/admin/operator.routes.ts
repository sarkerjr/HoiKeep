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

import {
  validateCreateOperator,
  validateGetOperator,
  validateUpdateOperator,
  validateRemoveOperator,
} from '@/validators/operator.validators';

const router = express.Router();

router.get(
  '/',
  checkRoles([
    RoleType.AUTHORITY,
    RoleType.OPERATOR,
    RoleType.STAFF,
    RoleType.VISITOR,
  ]),
  getOperators
);
router.get(
  '/:id',
  checkRoles([
    RoleType.AUTHORITY,
    RoleType.OPERATOR,
    RoleType.STAFF,
    RoleType.VISITOR,
  ]),
  validateGetOperator,
  getOperator
);
router.post(
  '/',
  checkRoles([RoleType.AUTHORITY, RoleType.OPERATOR]),
  validateCreateOperator,
  createOperator
);
router.put(
  '/',
  checkRoles([RoleType.AUTHORITY, RoleType.OPERATOR]),
  validateUpdateOperator,
  updateOperator
);
router.delete(
  '/',
  checkRoles([RoleType.AUTHORITY, RoleType.OPERATOR]),
  validateRemoveOperator,
  removeOperator
);

export default router;
