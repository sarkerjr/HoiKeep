import express from 'express';

import { RoleType } from '@/utils/enums';
import { checkRoles } from '@/middleware/role.middleware';

import {
  createSeat,
  getSeats,
  getSeat,
  updateSeat,
  removeSeat,
} from '@/controllers/admin/seat.controllers';

import {
  validateCreateSeat,
  validateGetSeat,
  validateUpdateSeat,
  validateRemoveSeat,
} from '@/validators/seat.validators';

const router = express.Router();

router.get(
  '/',
  checkRoles([RoleType.AUTHORITY, RoleType.OPERATOR, RoleType.STAFF]),
  getSeats
);
router.get(
  '/:id',
  checkRoles([RoleType.AUTHORITY, RoleType.OPERATOR, RoleType.STAFF]),
  validateGetSeat,
  getSeat
);
router.post(
  '/',
  checkRoles([RoleType.AUTHORITY, RoleType.OPERATOR]),
  validateCreateSeat,
  createSeat
);
router.put(
  '/',
  checkRoles([RoleType.AUTHORITY, RoleType.OPERATOR]),
  validateUpdateSeat,
  updateSeat
);
router.delete(
  '/',
  checkRoles([RoleType.AUTHORITY, RoleType.OPERATOR]),
  validateRemoveSeat,
  removeSeat
);

export default router;
