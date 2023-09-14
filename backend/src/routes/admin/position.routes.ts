import express from 'express';

import { RoleType } from '@/utils/enums';
import { checkRoles } from '@/middleware/role.middleware';

import {
  createPosition,
  getPositions,
  getPosition,
  updatePosition,
  removePosition,
} from '@/controllers/admin/position.controllers';

import {
  validateCreatePosition,
  validateGetPosition,
  validateUpdatePosition,
  validateRemovePosition,
} from '@/validators/position.validators';

const router = express.Router();

router.get(
  '/',
  checkRoles([RoleType.AUTHORITY, RoleType.OPERATOR, RoleType.STAFF]),
  getPositions
);
router.get(
  '/:id',
  checkRoles([RoleType.AUTHORITY, RoleType.OPERATOR, RoleType.STAFF]),
  validateGetPosition,
  getPosition
);
router.post(
  '/',
  checkRoles([RoleType.AUTHORITY, RoleType.OPERATOR]),
  validateCreatePosition,
  createPosition
);
router.put(
  '/',
  checkRoles([RoleType.AUTHORITY, RoleType.OPERATOR]),
  validateUpdatePosition,
  updatePosition
);
router.delete(
  '/',
  checkRoles([RoleType.AUTHORITY, RoleType.OPERATOR]),
  validateRemovePosition,
  removePosition
);

export default router;
