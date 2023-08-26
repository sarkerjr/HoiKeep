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

const router = express.Router();

router.get('/', checkRoles([RoleType.AUTHORITY, RoleType.OPERATOR]), getSeats);
router.get(
  '/:id',
  checkRoles([RoleType.AUTHORITY, RoleType.OPERATOR]),
  getSeat
);
router.post(
  '/',
  checkRoles([RoleType.AUTHORITY, RoleType.OPERATOR]),
  createSeat
);
router.put(
  '/',
  checkRoles([RoleType.AUTHORITY, RoleType.OPERATOR]),
  updateSeat
);
router.delete(
  '/',
  checkRoles([RoleType.AUTHORITY, RoleType.OPERATOR]),
  removeSeat
);

export default router;
